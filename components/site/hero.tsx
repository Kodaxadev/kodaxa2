import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import './hero-transition.css';

export function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-heading">
      <div className="hero-topline mono">
        <span>Web design + development</span>
        <span>Independent studio · Clovis, California</span>
      </div>
      <div className="hero-body">
        <div className="hero-copy">
          <h1 id="hero-heading">
            <span>Small business.</span>
            <br />
            <span>Big <em>presence.</em></span>
          </h1>
          <div className="hero-description">
            <p>What makes your business different deserves to be seen. Distinctive websites, thoughtful design, and the technical care to make it all work.</p>
            <div className="hero-actions">
              <a href="#work" className="pill">Explore selected work <ArrowUpRight aria-hidden="true" /></a>
              <a href="#contact" className="quiet-link">Let’s talk <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-parallax">
            <Image unoptimized className="hero-sculpture" src="/images/kodaxa-knot-hero.webp" alt="" width={860} height={860} loading="eager" fetchPriority="high" priority />
          </div>
        </div>
      </div>
      <div className="hero-transition">
        <div className="hero-capabilities">
          <p className="hero-capabilities-label mono">From first idea to what’s next</p>
          <ul className="hero-capabilities-list" aria-label="Capabilities">
            <li>Strategy</li>
            <li>Design</li>
            <li>Development</li>
            <li>Care</li>
          </ul>
        </div>
        <a href="#work" className="hero-work-link">
          <span>Selected work</span>
          <span className="hero-work-icon"><ArrowDown size={20} aria-hidden="true" /></span>
        </a>
      </div>
    </section>
  );
}
