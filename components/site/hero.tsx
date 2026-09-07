import { ArrowDown, ArrowUpRight, Asterisk } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <>
      <section className="hero shell" aria-labelledby="hero-heading">
        <div className="hero-topline mono">
          <span>
            <i className="status-dot" /> Independent minds. Shared ambition.
          </span>
          <span>Design + technology, with a human touch</span>
        </div>
        <div className="hero-body">
          <div className="hero-copy">
            <h1 id="hero-heading">
              <span>Small business.</span>
              <br />
              <span>
                Big <em>presence.</em>
              </span>
            </h1>
            <div className="hero-description">
              <p>
                We turn what makes your business different into something people
                can’t ignore.
              </p>
              <p className="section-label mono" style={{ marginTop: 12 }}>
                Kodaxa builds websites for small businesses in Clovis and the
                Central Valley.
              </p>
              <a href="#work" className="pill">
                See what’s possible <ArrowUpRight />
              </a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-orbit" />
            <div className="art-parallax">
              <Image
                unoptimized
                className="hero-sculpture"
                src="/images/kodaxa-knot.webp"
                alt=""
                width="1254"
                height="1254"
                fetchPriority="high"
              />
            </div>
            <span className="art-coordinate mono">
              K / 001 — THE CONNECTION
            </span>
            <div className="art-badge">
              <Asterisk size={30} />
              <span>
                BIG IDEAS.
                <br />
                LOCAL ROOTS.
              </span>
            </div>
          </div>
        </div>
        <div className="hero-bottom mono">
          <a href="#work">
            <ArrowDown size={15} /> A little further. A lot to discover.
          </a>
          <span className="location-label">
            Clovis, California <span className="location-dot">↗</span> Built for
            everywhere.
          </span>
          <span className="hero-index">01 / 04</span>
        </div>
      </section>
      <div
        className="ticker"
        aria-label="Strategy, design, development, and a little extra"
      >
        <div className="ticker-track">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} aria-hidden={i > 0 ? true : undefined}>
              Strategy <Asterisk /> Design <Asterisk /> Development <Asterisk />{' '}
              A little extra <Asterisk />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
