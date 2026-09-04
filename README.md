# Kodaxa

A bespoke studio website for Kodaxa, a small-business design and technology partner in Clovis, California.

## Local development

The project pins Node 22.23.2 as a development tool so npm scripts use a tested runtime. The installed Node 24 runtime hit a Windows/libuv shutdown assertion after prerendering; Node 22 completes with exit code 0.

```powershell
npm ci
npm run dev
```

## Validation and build

```powershell
npm run check
npm run build
npm start
```

The production site is a static export. Contact links open the visitor's email application addressed to **Justin@Kodaxa.dev**. The copy-address action includes a failure message when clipboard access is unavailable. No inquiry is silently stored or sent.

## Structure

- `app/page.tsx`: composition of the page sections.
- `components/site/`: one component per page responsibility.
- `app/hero.css`, `app/sections.css`, `app/studio.css`: layout and responsive styles.
- `app/globals.css`: shared tokens and motion preferences.
- `lib/projects.ts`: fictional concept showcase content.
- `components/ui/`: generated UI primitives; the site uses dialog and accordion.
- `public/images/`: local, optimized artwork and licensed photography.
- `docs/decisions.md`: design and implementation rationale with primary sources.
- `docs/assets.md`: asset provenance and reuse information.

Both Daybreak Coffee and Forma Living are clearly labeled independent concepts, not client engagements. The site makes no invented client, performance, award, or team-size claims.

## Hosting

The Sites project binding is in `.openai/hosting.json`. The delivered preview is private to the owner. Public release or a custom domain requires a separate hosting/access change.
