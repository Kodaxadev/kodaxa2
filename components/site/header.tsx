'use client';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Pause, Play, Plus, Minus } from 'lucide-react';

export function Header() {
  const [menu, setMenu] = useState(false);
  const [motion, setMotion] = useState(true);
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
    if (!menu) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenu(false);
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [menu]);
  return (
    <header className="site-header shell" id="top">
      <a className="wordmark" href="#top" aria-label="Kodaxa home">
        kodaxa
        <span className="logo-star" aria-hidden="true">
          ✳
        </span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#work">
          The work <span>04</span>
        </a>
        <a href="#services">What we do</a>
        <a href="#about">The studio</a>
      </nav>
      <div className="header-actions">
        <button
          className="motion-toggle"
          onClick={() => setMotion(!motion)}
          aria-label={motion ? 'Pause animations' : 'Resume animations'}
          aria-pressed={!motion}
        >
          {motion ? <Pause size={14} /> : <Play size={14} />}
        </button>
        <a className="header-contact" href="#contact">
          Let’s talk <ArrowUpRight size={17} />
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenu(!menu)}
          aria-expanded={menu}
          aria-controls="mobile-menu"
          aria-label={menu ? 'Close navigation' : 'Open navigation'}
        >
          {menu ? <Minus /> : <Plus />}
        </button>
      </div>
      {menu && (
        <nav
          className="mobile-nav"
          id="mobile-menu"
          aria-label="Mobile navigation"
        >
          {[
            ['The work', '#work'],
            ['What we do', '#services'],
            ['The studio', '#about'],
            ['Let’s talk', '#contact'],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenu(false)}>
              {label}
              <ArrowUpRight />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
