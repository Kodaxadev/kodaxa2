import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Websites & Digital Products by Kodaxa',
  description:
    'Explore Kodaxa’s websites, independent digital products, and design concepts, including the JobWarden website and PWA in trial.',
  alternates: {
    canonical: '/work',
  },
};

export default function WorkIndexPage() {
  return (
    <main className="shell identity-page">
      <a className="arrow-link" href="/#work">
        ← Back to Kodaxa’s work <ArrowUpRight size={16} />
      </a>
      <h1>Websites. Products. Possibilities.</h1>
      <p className="identity-meta">
        Independent products and design explorations by Kodaxa. Each project
        identifies its status—from a working product in trial to an independent
        website concept, rather than a commissioned client engagement.
      </p>
      <section className="identity-grid" aria-label="Project case studies">
        <article className="identity-card">
          <p className="mono">Website + PWA · In trial</p>
          <h2>JobWarden</h2>
          <p>
            A private, offline-first workday log for California hourly workers.
            Product design, a focused website, and an installable app—built by
            Kodaxa. California employment-attorney review is pending.
          </p>
          <Link href="/work/jobwarden" className="arrow-link">
            Explore the project <ArrowUpRight size={16} />
          </Link>
        </article>
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
