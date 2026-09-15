import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { BrandMark } from './brand-mark';

export function Hero() {
  return (
    <>
      <section className="hero shell" aria-labelledby="hero-heading">
        <div className="hero-topline mono">
          <span>Web design + development</span>
          <span>Independent studio · Clovis, California</span>
        </div>
        <div className="hero-body">
          <div className="hero-copy">
            <h1 id="hero-heading"><span>Small business.</span><br /><span>Big <em>presence.</em></span></h1>
            <div className="hero-description">
              <p>What makes your business different deserves to be seen. Distinctive websites, thoughtful design, and the technical care to make it all work.</p>
              <div className="hero-actions"><a href="#work" className="pill">Explore selected work <ArrowUpRight aria-hidden="true" /></a><a href="#contact" className="quiet-link">Let’s talk <ArrowUpRight size={16} aria-hidden="true" /></a></div>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-parallax"><Image unoptimized className="hero-sculpture" src="/images/kodaxa-knot-hero.webp" alt="" width={860} height={860} loading="eager" fetchPriority="high" priority /></div>
            <span className="art-caption mono">The connection / A Kodaxa study</span>
          </div>
        </div>
        <div className="hero-bottom mono"><a href="#work"><ArrowDown size={16} aria-hidden="true" />Selected work, below</a><span className="location-label">Clovis roots. An outlook beyond.</span><span className="hero-signature">Design with intention.</span></div>
      </section>
      <div className="ticker" aria-label="Strategy, design, development, and care"><div className="ticker-track"><span>Strategy <BrandMark /></span><span>Design <BrandMark /></span><span>Development <BrandMark /></span><span>Care <BrandMark /></span></div></div>
    </>
  );
}
