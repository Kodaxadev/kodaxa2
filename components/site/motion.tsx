'use client';
import { useEffect } from 'react';

export function Motion() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll('[data-reveal]')
      .forEach((element) => observer.observe(element));
    const hero = document.querySelector<HTMLElement>('.hero-art');
    const art = document.querySelector<HTMLElement>('.art-parallax');
    const move = (event: PointerEvent) => {
      if (
        !hero ||
        !art ||
        event.pointerType !== 'mouse' ||
        document.documentElement.dataset.motion === 'off'
      )
        return;
      const rect = hero.getBoundingClientRect();
      art.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * 0.025}px, ${(event.clientY - rect.top - rect.height / 2) * 0.025}px)`;
    };
    const reset = () => {
      if (art) art.style.transform = '';
    };
    hero?.addEventListener('pointermove', move);
    hero?.addEventListener('pointerleave', reset);
    return () => {
      observer.disconnect();
      hero?.removeEventListener('pointermove', move);
      hero?.removeEventListener('pointerleave', reset);
    };
  }, []);
  return null;
}
