'use client';
import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Menu,
  X,
  Pause,
  Play,
  Sun,
} from 'lucide-react';
import { restaurant } from '@/lib/restaurant/details';
import Link from 'next/link';

export function RestaurantHeader() {
  const [open, setOpen] = useState(false);
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
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  return (
    <>
      <div className="lm-concept-bar">
        <Link href="/#work">
          <ArrowLeft size={12} /> Kodaxa <span>/ Independent concept</span>
        </Link>
        <a href={restaurant.website} target="_blank" rel="noreferrer">
          Official restaurant website <ArrowUpRight size={12} />
        </a>
      </div>
      <header className="lm-header lm-shell" id="lm-top">
        <a
          href="#lm-top"
          className="lm-wordmark"
          aria-label="Las Mañanitas home"
        >
          <Sun strokeWidth={1.3} />
          <span>
            <small>Las</small>Mañanitas
          </span>
        </a>
        <nav className="lm-desktop-nav" aria-label="Restaurant navigation">
          <a href="#lm-menu">The menu</a>
          <a href="#lm-story">Our story</a>
          <a href="#lm-visit">Come on over</a>
        </nav>
        <div className="lm-header-actions">
          <button
            className="lm-motion"
            aria-label={motion ? 'Pause animations' : 'Resume animations'}
            onClick={() => setMotion(!motion)}
          >
            {motion ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <a
            className="lm-button lm-header-order"
            href={restaurant.order}
            target="_blank"
            rel="noreferrer"
          >
            Order online <ArrowUpRight size={16} />
          </a>
          <button
            className="lm-nav-toggle"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="lm-mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            className="lm-mobile-nav"
            id="lm-mobile-nav"
            aria-label="Mobile restaurant navigation"
          >
            {[
              ['The menu', '#lm-menu'],
              ['Our story', '#lm-story'],
              ['Come on over', '#lm-visit'],
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
