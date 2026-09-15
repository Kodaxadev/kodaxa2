'use client';
import { useEffect } from 'react';

export function Motion() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.studio-site [data-reveal]').forEach(element => observer.observe(element));
    const hero = document.querySelector<HTMLElement>('.studio-site .hero-art');
    const art = document.querySelector<HTMLElement>('.studio-site .art-parallax');
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const reset = () => { cancelAnimationFrame(frame); if (art) art.style.transform = ''; };
    const move = (event: PointerEvent) => {
      if (!hero || !art || event.pointerType !== 'mouse' || media.matches || window.innerWidth <= 760 || document.documentElement.dataset.motion !== 'on') return;
      const rect = hero.getBoundingClientRect();
      const x = Math.max(-6, Math.min(6, (event.clientX - rect.left - rect.width / 2) * 0.018));
      const y = Math.max(-6, Math.min(6, (event.clientY - rect.top - rect.height / 2) * 0.018));
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => { art.style.transform = `translate(${x}px, ${y}px)`; });
    };
    hero?.addEventListener('pointermove', move);
    hero?.addEventListener('pointerleave', reset);
    media.addEventListener('change', reset);
    return () => { observer.disconnect(); reset(); hero?.removeEventListener('pointermove', move); hero?.removeEventListener('pointerleave', reset); media.removeEventListener('change', reset); };
  }, []);
  return null;
}
