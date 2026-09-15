'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Pause, Play, Plus, Minus } from 'lucide-react';
import { BrandMark } from './brand-mark';

const links = [['Work', '/work'], ['Web design', '/services/web-design'], ['The studio', '/about']] as const;
const preferenceKey = 'kodaxa-motion';

export function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [motion, setMotion] = useState(false);
  const [systemReduced, setSystemReduced] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      let preference: string | null = null;
      try { preference = localStorage.getItem(preferenceKey); } catch { /* Storage can be unavailable in private contexts. */ }
      setSystemReduced(media.matches);
      setMotion(!media.matches && preference !== 'off');
    };
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.motion = motion ? 'on' : 'off';
    if (!motion) document.querySelector<HTMLElement>('.art-parallax')?.style.removeProperty('transform');
  }, [motion]);

  useEffect(() => {
    if (!menu) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setMenu(false); toggle.current?.focus(); }
    };
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setMenu(false);
    };
    const wide = window.matchMedia('(min-width: 761px)');
    const resize = () => { if (wide.matches) setMenu(false); };
    window.addEventListener('keydown', escape);
    document.addEventListener('pointerdown', outside);
    wide.addEventListener('change', resize);
    return () => {
      window.removeEventListener('keydown', escape);
      document.removeEventListener('pointerdown', outside);
      wide.removeEventListener('change', resize);
    };
  }, [menu]);

  function toggleMotion() {
    if (systemReduced) return;
    const next = !motion;
    setMotion(next);
    try { localStorage.setItem(preferenceKey, next ? 'on' : 'off'); } catch { /* The control also works without persistence. */ }
  }

  return (
    <header className="site-header shell" id="top" ref={header} onBlur={event => {
      if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) setMenu(false);
    }}>
      <a className="wordmark" href="/" aria-label="Kodaxa home">kodaxa<BrandMark className="logo-star" /></a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, href]) => <a key={href} href={href} aria-current={pathname?.startsWith(href) ? 'page' : undefined}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <button type="button" className="motion-toggle" onClick={toggleMotion} disabled={systemReduced} aria-label={systemReduced ? 'Animations off: system reduced-motion preference' : motion ? 'Pause animations' : 'Resume animations'} aria-pressed={!motion} title={systemReduced ? 'Your system prefers reduced motion' : motion ? 'Pause animations' : 'Resume animations'}>
          {motion ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}
        </button>
        <a className="header-contact" href="#contact">Let’s talk <ArrowUpRight size={17} aria-hidden="true" /></a>
        <button ref={toggle} type="button" className="menu-toggle" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-controls="mobile-menu" aria-label={menu ? 'Close navigation' : 'Open navigation'}>
          {menu ? <Minus aria-hidden="true" /> : <Plus aria-hidden="true" />}
        </button>
      </div>
      <nav className="mobile-nav" id="mobile-menu" aria-label="Mobile navigation" hidden={!menu}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenu(false)} aria-current={pathname?.startsWith(href) ? 'page' : undefined}>{label}<ArrowUpRight aria-hidden="true" /></a>)}
        <a href="#contact" onClick={() => setMenu(false)}>Let’s talk<ArrowUpRight aria-hidden="true" /></a>
        <p className="mono mobile-nav-note">Independent studio · Clovis, California</p>
      </nav>
    </header>
  );
}
