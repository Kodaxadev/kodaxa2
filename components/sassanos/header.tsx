'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Menu, X, Pause, Play } from 'lucide-react';

export function SassanosHeader() {
  const [open, setOpen] = useState(false);
  const [motion, setMotion] = useState(true);
  const menuToggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setMotion(!media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.motion = motion ? 'on' : 'off';
  }, [motion]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuToggle.current?.focus();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#ss-main">
        Skip to content
      </a>
      <div className="ss-concept-bar">
        <Link href="/#work">
          <ArrowLeft size={13} /> Kodaxa / Independent concept
        </Link>
        <a
          href="https://www.sassanosmenswear.com/"
          target="_blank"
          rel="noreferrer"
        >
          Visit the current website <ArrowUpRight size={13} />
        </a>
      </div>
      <header className="ss-header ss-wrap">
        <a
          className="ss-logo"
          href="#ss-top"
          aria-label="Sassano’s, back to top"
        >
          SASSANO’S<span>MEN’S WEAR · CLOVIS, CALIFORNIA</span>
        </a>
        <nav className="ss-desktop-nav" aria-label="Main navigation">
          <a href="#ss-goods">The goods</a>
          <a href="#ss-story">Our roots</a>
          <a href="#ss-visit">Find us</a>
        </nav>
        <div className="ss-header-actions">
          <button
            className="ss-icon-button"
            onClick={() => setMotion(!motion)}
            aria-label={motion ? 'Pause animations' : 'Resume animations'}
            aria-pressed={!motion}
          >
            {motion ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <a className="ss-header-call" href="tel:+15592994430">
            Call the store <ArrowUpRight size={17} />
          </a>
          <button
            className="ss-mobile-toggle ss-icon-button"
            ref={menuToggle}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="ss-mobile-nav"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            id="ss-mobile-nav"
            className="ss-mobile-nav"
            aria-label="Mobile navigation"
          >
            {[
              ['The goods', '#ss-goods'],
              ['Our roots', '#ss-story'],
              ['Find us', '#ss-visit'],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
                <ArrowUpRight />
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
