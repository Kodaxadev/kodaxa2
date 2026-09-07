import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Kodaxa',
  description:
    'Kodaxa is a Clovis, California web design and development studio focused on practical websites for small businesses in the Central Valley.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Kodaxa',
    description:
      'An independent web design and development studio in Clovis, California.',
    url: 'https://www.kodaxa.dev/about',
    type: 'website',
  },
};

const process = [
  {
    title: 'Clarity first',
    body: 'We start by understanding who you serve, what matters most, and where your current site drops opportunities.',
  },
  {
    title: 'Execution with ownership',
    body: 'We design and build complete websites and keep implementation ownership with you through handoff and maintenance planning.',
  },
  {
    title: 'Continuous improvement',
    body: 'We refine navigation, accessibility, and performance after launch using real behavior, not vanity signals.',
  },
];

export default function AboutPage() {
  return (
    <main className="shell identity-page">
      <a className="arrow-link" href="/">
        ← Back to home <ArrowUpRight size={16} />
      </a>
      <section className="identity-hero">
        <p className="section-label mono">Who we are</p>
        <h1>Kodaxa, a Clovis-based web studio for small business owners.</h1>
        <p>
          Kodaxa is an independent web design and development studio in Clovis,
          California serving small businesses in Fresno and the Central Valley.
          We focus on distinct, high-performing websites that help local
          businesses communicate clearly, convert better, and remain easy to
          maintain.
        </p>
      </section>
      <section className="identity-section">
        <h2 className="identity-heading">What we do</h2>
        <ul className="identity-list">
          <li>Website design and strategy for small businesses and service providers.</li>
          <li>Responsive web development with practical content structure.</li>
          <li>E-commerce planning and launch support for local retail teams.</li>
          <li>Accessibility fixes and performance optimization.</li>
          <li>Ownership transfer and maintenance readiness.</li>
        </ul>
      </section>
      <section className="identity-section">
        <h2 className="identity-heading">Our process</h2>
        <div className="identity-grid">
          {process.map((step) => (
            <article key={step.title} className="identity-card">
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
