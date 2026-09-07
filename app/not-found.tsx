import { ArrowUpRight } from 'lucide-react';
import './not-found.css';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <header className="not-found-header">
        <a className="not-found-wordmark" href="/" aria-label="Kodaxa home">
          kodaxa
          <span aria-hidden="true">✳</span>
        </a>
        <span className="not-found-status mono">404 / page not found</span>
      </header>

      <section className="not-found-content" aria-labelledby="not-found-heading">
        <div className="not-found-copy">
          <p className="section-label mono">A small wrong turn</p>
          <h1 id="not-found-heading">
            This page wandered <em>off.</em>
          </h1>
          <p className="not-found-intro">
            Nothing broke. The page you followed just isn&apos;t here anymore.
            Our little star is still looking for it.
          </p>

          <div className="not-found-actions" aria-label="Helpful destinations">
            <a className="pill" href="/">
              Back home <ArrowUpRight size={18} />
            </a>
            <a className="not-found-link" href="/work">
              See our work <ArrowUpRight size={16} />
            </a>
            <a className="not-found-link" href="/services/web-design">
              Web design <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="not-found-art" aria-hidden="true">
          <div className="not-found-orbit orbit-one" />
          <div className="not-found-orbit orbit-two" />
          <div className="not-found-number">
            <span>4</span>
            <span className="zero">0</span>
            <span>4</span>
          </div>
          <div className="lost-star-track">
            <div className="lost-star">✳</div>
          </div>
          <span className="orbit-note orbit-note-a mono">looking...</span>
          <span className="orbit-note orbit-note-b mono">not here either</span>
        </div>
      </section>

      <footer className="not-found-footer mono">
        <span>Clovis, California</span>
        <span>Wrong page. Right studio.</span>
        <span>kodaxa.dev</span>
      </footer>
    </main>
  );
}
