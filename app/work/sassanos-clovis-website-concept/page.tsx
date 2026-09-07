import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sassano’s — Independent web concept study',
  description:
    'A published concept breakdown for a Clovis menswear website by Kodaxa. Independent concept, not a commissioned client project.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/work/sassanos-clovis-website-concept',
  },
};

const questions = [
  'How can the homepage communicate craft heritage without losing mobile speed?',
  'What section structure lets visitors decide quickly: who is served, what is offered, why it matters?',
  'How should the product stories present seasonal changes without overwhelming the first impression?',
];

export default function SassanosWorkPage() {
  return (
    <main className="shell identity-page">
      <a className="arrow-link" href="/work">
        ← Explore all case work <ArrowLeft size={16} />
      </a>
      <h1>Sassano&apos;s Clovis website concept</h1>
      <p className="identity-meta">
        Independent concept study by Kodaxa · Not commissioned client work
      </p>
      <section className="identity-section">
        <div className="identity-callout">
          <p className="mono">Business problem</p>
          <p>
            A menswear brand concept in Clovis needed stronger clarity on what to
            buy, how products are organized, and why someone should trust the
            brand on a first visit. The visual direction needed to remain
            distinctive while staying practical for shoppers.
          </p>
        </div>
        <div className="identity-callout">
          <p className="mono">Kodaxa approach</p>
          <ul>
            <li>
              Reworked the top-level structure into a simple information path:
              category, offer, process, and call to action.
            </li>
            <li>
              Introduced denser hierarchy for product storytelling to reduce
              browsing friction on mobile.
            </li>
            <li>
              Prioritized legibility, contrast, and reduced visual clutter to
              improve practical usability.
            </li>
          </ul>
        </div>
      </section>
      <section className="identity-section">
        <h2 className="identity-heading">Design questions resolved</h2>
        <ol className="identity-steps">
          {questions.map((question) => (
            <li key={question}>
              <span>•</span> {question}
            </li>
          ))}
        </ol>
      </section>
      <section className="identity-section">
        <h2 className="identity-heading">What to inspect</h2>
        <div className="identity-media-grid">
          <figure>
            <Image
              src="/images/sassanos/storefront.webp"
              alt="Sassano&apos;s concept homepage frame"
              width="1600"
              height="1000"
              unoptimized
            />
            <figcaption>Homepage pattern and visual hierarchy test.</figcaption>
          </figure>
          <figure>
            <Image
              src="/images/sassanos/campaign.webp"
              alt="Sassano&apos;s concept campaign section"
              width="1600"
              height="1000"
              unoptimized
            />
            <figcaption>Campaign and offer-driven layout decisions.</figcaption>
          </figure>
        </div>
        <a className="arrow-link" href="/concepts/sassanos">
          View interactive concept version <ArrowUpRight size={16} />
        </a>
      </section>
    </main>
  );
}

