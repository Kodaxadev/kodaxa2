import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web Design Concept Work by Kodaxa',
  description:
    'Indexable case-study pages showing Kodaxa web design work in Clovis and the Central Valley.',
  alternates: {
    canonical: '/work',
  },
};

export default function WorkIndexPage() {
  return (
    <main className="shell identity-page">
      <a className="arrow-link" href="/#work">
        ← Browse site work sections <ArrowUpRight size={16} />
      </a>
      <h1>Work from Kodaxa concepts</h1>
      <p className="identity-meta">
        The following pages document independent concept studies created by Kodaxa.
        These are design explorations, not commissioned client projects.
      </p>
      <section className="identity-grid">
        <article className="identity-card">
          <h2>Clovis menswear website concept</h2>
          <p>
            How Kodaxa restructured a small-business site for clearer product
            storytelling and mobile decision paths.
          </p>
          <Link href="/work/sassanos-clovis-website-concept" className="arrow-link">
            Read case study <ArrowUpRight size={16} />
          </Link>
        </article>
        <article className="identity-card">
          <h2>Restaurant website concept</h2>
          <p>
            How Kodaxa designed information hierarchy for local dining audiences and
            visit intent.
          </p>
          <Link href="/work/las-mananitas-restaurant-website-concept" className="arrow-link">
            Read case study <ArrowUpRight size={16} />
          </Link>
        </article>
      </section>
    </main>
  );
}

