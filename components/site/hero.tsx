import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import './hero-transition.css';

export function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-heading">
      <div className="hero-topline mono"><span>Kodaxa / web design + development</span><span>Clovis, California</span></div>
      <div className="hero-body"><div className="hero-copy"><h1 id="hero-heading"><span>Your business shouldn’t</span><br /><span>look like everyone else’s.</span></h1><div className="hero-description"><p>Kodaxa designs and builds websites for independent businesses in Clovis, Fresno, and beyond.</p><div className="hero-actions"><a href="#work" className="pill">See the work <ArrowUpRight aria-hidden="true" /></a><a href="#contact" className="quiet-link">Start a project <ArrowUpRight size={16} aria-hidden="true" /></a></div></div></div><div className="hero-art" aria-hidden="true"><div className="art-parallax"><Image unoptimized className="hero-sculpture" src="/images/kodaxa-knot-hero.webp" alt="" width={860} height={860} loading="eager" fetchPriority="high" priority /></div></div></div>
      <div className="hero-transition"><div className="hero-capabilities"><p className="hero-capabilities-label mono">Capabilities</p><ul className="hero-capabilities-list" aria-label="Capabilities"><li>Strategy</li><li>Design</li><li>Development</li><li>Care</li></ul></div><a href="#work" className="hero-work-link"><span>Selected work</span><span className="hero-work-icon"><ArrowDown size={20} aria-hidden="true" /></span></a></div>
    </section>
  );
}
