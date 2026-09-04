'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowUp, Copy, Check, Asterisk } from 'lucide-react';

export function Contact() {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>(
    'idle',
  );
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('Justin@Kodaxa.dev');
      setCopyState('copied');
    } catch {
      setCopyState('error');
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopyState('idle'), 3000);
  }
  return (
    <>
      <section
        className="contact-section shell"
        id="contact"
        aria-labelledby="contact-heading"
      >
        <div className="contact-top">
          <p className="section-label mono">
            04 / Good things start with a conversation
          </p>
          <Asterisk size={28} strokeWidth={1.3} />
        </div>
        <div className="contact-main" data-reveal>
          <h2 id="contact-heading">
            Let’s make
            <br />
            <span>your next</span> happen.
          </h2>
          <a
            className="contact-orb"
            href="mailto:Justin@Kodaxa.dev?subject=Let%E2%80%99s%20build%20something%20with%20Kodaxa"
            aria-label="Start a project — email Justin at Kodaxa"
          >
            <ArrowUpRight strokeWidth={1} />
            <span>START A PROJECT</span>
          </a>
        </div>
        <div className="contact-bottom">
          <p>
            A fresh start. A bold idea. A problem worth solving.
            <br />
            We’d love to hear what you have in mind.
          </p>
          <div className="contact-email">
            <a href="mailto:Justin@Kodaxa.dev">Justin@Kodaxa.dev</a>
            <button
              onClick={copyEmail}
              className="copy-email"
              aria-label="Copy email address"
            >
              {copyState === 'copied' ? (
                <Check size={17} />
              ) : (
                <Copy size={17} />
              )}
            </button>
            <output className="copy-status">
              {copyState === 'copied'
                ? 'Email copied'
                : copyState === 'error'
                  ? 'Select the email address to copy it.'
                  : ''}
            </output>
          </div>
        </div>
      </section>
      <footer className="footer shell">
        <div className="footer-top">
          <p>
            Independent thinking.
            <br />
            Exceptional execution.
          </p>
          <p className="mono">
            Clovis, California
            <br />
            <span>Central Valley / California</span>
          </p>
          <a href="#top" className="back-top">
            Back to top <ArrowUp size={16} />
          </a>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          kodaxa<span>✳</span>
        </div>
        <div className="footer-bottom mono">
          <span>© {new Date().getFullYear()} Kodaxa</span>
          <span>Small business. Big presence.</span>
          <span>Made with intention ↗</span>
        </div>
      </footer>
    </>
  );
}
