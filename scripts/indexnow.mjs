#!/usr/bin/env node
import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const publicDir = resolve(projectRoot, 'public');
const sitemapPath = resolve(publicDir, 'sitemap.xml');
const defaultHost = 'www.kodaxa.dev';
const defaultSiteUrl = `https://${defaultHost}`;
const apiEndpoint = 'https://api.indexnow.org/indexnow';
const timeoutMs = Number(process.env.INDEXNOW_TIMEOUT_MS) || 15_000;

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const explicitUrls = args.filter(
  (arg) =>
    !arg.startsWith('--') &&
    /^https?:\/\//i.test(arg),
);
const urlArgs = args.filter((arg) => arg === '--urls');

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
Usage:
  npm run indexnow
    Submit all URLs found in public/sitemap.xml

  npm run indexnow -- https://www.kodaxa.dev/ https://www.kodaxa.dev/services/web-design
    Submit explicit URLs

  npm run indexnow -- --dry-run
    Build payload and print request body without sending
`);
  process.exit(0);
}

async function detectKeyFile() {
  const keyFileCandidates = (await readdir(publicDir)).filter(
    (file) =>
      file.endsWith('.txt') &&
      /^[a-f0-9]{32}\.txt$/i.test(file),
  );
  if (keyFileCandidates.length === 0) {
    throw new Error(
      'No IndexNow key file found in public/. Expected filename like "<32-char-key>.txt".',
    );
  }
  if (keyFileCandidates.length > 1) {
    throw new Error(
      'Multiple IndexNow key files found. Set INDEXNOW_KEY_FILE to disambiguate.',
    );
  }
  const keyFile = resolve(publicDir, keyFileCandidates[0]);
  const key = (await readFile(keyFile, 'utf8')).trim();
  const expected = keyFileCandidates[0].replace(/\.txt$/i, '');
  if (key !== expected) {
    throw new Error(
      `IndexNow key mismatch: public/${keyFileCandidates[0]} contains "${key}" but filename expects "${expected}".`,
    );
  }
  return { key, keyFileName: keyFileCandidates[0] };
}

function parseSitemap(rawXml) {
  const matches = [...rawXml.matchAll(/<loc>(.*?)<\/loc>/gis)];
  const urls = matches
    .map((match) => match[1].trim())
    .filter((url) => url.startsWith(defaultSiteUrl));
  if (urls.length === 0) {
    throw new Error(`No URLs found in ${sitemapPath}.`);
  }
  return urls;
}

function dedupe(list) {
  const set = new Set();
  return list.filter((item) => {
    const trimmed = item.trim();
    if (!trimmed || set.has(trimmed)) return false;
    set.add(trimmed);
    return true;
  });
}

function validatePayloadUrls(urls) {
  const invalid = urls.filter((url) => !url.startsWith(defaultSiteUrl));
  if (invalid.length > 0) {
    throw new Error(
      `All URLs must be on ${defaultSiteUrl}. Invalid URLs: ${invalid.join(
        ', ',
      )}`,
    );
  }
}

async function submit(urls) {
  const { key, keyFileName } = await detectKeyFile();
  validatePayloadUrls(urls);

  const payload = {
    host: defaultHost,
    key,
    keyLocation: `${defaultSiteUrl}/${keyFileName}`,
    urlList: urls,
  };

  if (dryRun) {
    console.log(
      JSON.stringify(
        {
          endpoint: apiEndpoint,
          payload,
        },
        null,
        2,
      ),
    );
    return;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    const text = await response.text();
    if (!response.ok) {
      throw new Error(
        `IndexNow request failed (${response.status} ${response.statusText}): ${text}`,
      );
    }
    console.log(`IndexNow submitted ${urls.length} URL(s) successfully.`);
    console.log(text);
  } finally {
    clearTimeout(timer);
  }
}

const rawSitemap = await readFile(sitemapPath, 'utf8');
const urls = dedupe(
  explicitUrls.length ? explicitUrls : parseSitemap(rawSitemap),
);
if (urls.length > 10000) {
  throw new Error('IndexNow request exceeded practical payload size limit.');
}

await submit(urls);
