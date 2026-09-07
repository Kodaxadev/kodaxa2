import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Las Mañanitas — Independent restaurant website concept',
  description:
    'A concept case study showing how Kodaxa reworked a local restaurant website experience. Independent concept, not a commissioned client project.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/work/las-mananitas-restaurant-website-concept',
  },
};

export default function LasMananitasWorkPage() {
  return (
    <main className="shell identity-page">
      <a className="arrow-link" href="/work">
        ← Explore all case work <ArrowLeft size={16} />
      </a>
      <h1>Las Mañanitas restaurant website concept</h1>
      <p className="identity-meta">
        Independent concept study by Kodaxa · Not commissioned client work
      </p>
      <section className="identity-section">
        <div className="identity-callout">
          <p className="mono">Business problem</p>
          <p>
            A family restaurant concept in Clovis needed a website that could
            show food identity, location context, and weekly flow without
            overwhelming first-time visitors. The goal was clearer decisions and a
            stronger online invite.
          </p>
        </div>
        <div className="identity-callout">
          <p className="mono">Kodaxa approach</p>
          <ul>
            <li>
              Reframed the homepage as a menu-first journey with distinct
              identity cues for first-time users.
            </li>
            <li>
              Simplified location and contact hierarchy to make visit planning
              immediate.
            </li>
            <li>
              Designed stronger visual rhythm for dish storytelling and reduced
              cognitive load on mobile screens.
            </li>
          </ul>
        </div>
      </section>
      <section className="identity-section">
        <h2 className="identity-heading">What changed across the concept</h2>
        <ul className="identity-list">
          <li>Added clearer visual priority for hours, menu highlights, and booking context.</li>
          <li>Removed decorative noise that competed with the key restaurant actions.</li>
          <li>Strengthened the storytelling flow to support local families and weekend traffic.</li>
        </ul>
      </section>
      <section className="identity-section">
        <h2 className="identity-heading">What to inspect</h2>
        <div className="identity-media-grid">
          <figure>
            <Image
              src="/images/las-mananitas/dining-room.webp"
              alt="Las Mañanitas dining room concept frame"
              width="1600"
              height="1000"
              unoptimized
            />
            <figcaption>Dining context and local hospitality rhythm.</figcaption>
          </figure>
          <figure>
            <Image
              src="/images/las-mananitas/table.webp"
              alt="Las Mañanitas concept menu section"
              width="1600"
              height="1000"
              unoptimized
            />
            <figcaption>Menu-first content blocks and ordering cues.</figcaption>
          </figure>
        </div>
        <a className="arrow-link" href="/concepts/las-mananitas">
          View interactive concept version <ArrowUpRight size={16} />
        </a>
      </section>
    </main>
  );
}

