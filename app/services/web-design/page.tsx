import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import { WebDesignServiceJsonLd } from '@/components/seo/web-design-service-jsonld';

export const metadata: Metadata = {
  title: 'Web Design & Development for Small Businesses in Clovis, California',
  description:
    'Specialized web design, web development, and e-commerce services for Clovis and Fresno-area small businesses.',
  alternates: {
    canonical: '/services/web-design',
  },
  openGraph: {
    title: 'Web Design & Development for Small Businesses in Clovis, California',
    description:
      'Kodaxa builds practical websites for small businesses in Clovis, Fresno, and the Central Valley.',
    url: 'https://www.kodaxa.dev/services/web-design',
    type: 'article',
  },
};

const offerings = [
  {
    title: 'Website design',
    details:
      'Brand-aligned layout, messaging hierarchy, and conversion-focused section structure for local audiences.',
  },
  {
    title: 'Web development',
    details:
      'Reliable implementation, clean code, CMS-ready handoff options, and clear maintenance ownership.',
  },
  {
    title: 'E-commerce',
    details:
      'Store information architecture, product structure, shopping flow clarity, and mobile purchase usability.',
  },
  {
    title: 'Accessibility and performance',
    details:
      'Improved semantics, reduced visual complexity, keyboard and assistive support, and speed-minded delivery.',
  },
];

const process = [
  'Discovery with your business goals, service mix, and target local customers.',
  'Content and information architecture designed for clarity and navigation confidence.',
  'Implementation with responsive systems for desktop and mobile conversion paths.',
  'QA review, performance pass, and launch preparation with ownership documentation.',
];

export default function WebDesignServicePage() {
  return (
    <>
      <WebDesignServiceJsonLd />
      <main className="shell identity-page">
        <a className="arrow-link" href="/">
          ← Back to home <ArrowUpRight size={16} />
        </a>
        <section className="identity-hero">
          <p className="section-label mono">
            Web design & development | Clovis, California
          </p>
          <h1>
            Web Design &amp; Development for Small Businesses in Clovis, California.
          </h1>
          <p>
            Kodaxa builds websites for independent businesses in Clovis, Fresno,
            and the Central Valley with practical design, useful content
            structure, and local clarity. We work with restaurants, retail
            brands, and professional services that need a dependable digital
            presence and measurable direction.
          </p>
        </section>

        <section className="identity-section">
          <h2 className="identity-heading">What we build</h2>
          <div className="identity-grid">
            {offerings.map((item) => (
              <article key={item.title} className="identity-card">
                <h3>{item.title}</h3>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="identity-section">
          <h2 className="identity-heading">How we work</h2>
          <ol className="identity-steps">
            {process.map((step, index) => (
              <li key={step}>
                <span className="mono">{index + 1}.</span> {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="identity-section">
          <h2 className="identity-heading">Who this is for</h2>
          <ul className="identity-list">
            <li>
              Restaurant and hospitality owners launching or refreshing local
              pages.
            </li>
            <li>Retail operators in Clovis, Fresno, and nearby communities.</li>
            <li>
              Freelancers and professional service businesses with a serious
              brand signal.
            </li>
            <li>
              Teams wanting a first-party web presence instead of a template
              site.
            </li>
          </ul>
        </section>

        <section className="identity-section">
          <h2 className="identity-heading">Proof pages to review</h2>
          <div className="identity-cases">
            <a
              className="arrow-link"
              href="/work/sassanos-clovis-website-concept"
            >
              Read the Sassano&apos;s concept case study <ArrowUpRight size={16} />
            </a>
            <a
              className="arrow-link"
              href="/work/las-mananitas-restaurant-website-concept"
            >
              Read the Las Mañanitas concept case study{' '}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
