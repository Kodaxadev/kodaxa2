import type { Metadata } from 'next';
import { WebDesignServiceJsonLd } from '@/components/seo/web-design-service-jsonld';
import { WebDesignServices } from '@/components/site/editorial-pages';

export const metadata: Metadata = {
  title: 'Web Design & Development for Small Businesses in Clovis, California',
  description: 'Specialized web design, web development, and e-commerce services for Clovis and Fresno-area small businesses.',
  alternates: { canonical: '/services/web-design' },
  openGraph: { title: 'Web Design & Development for Small Businesses in Clovis, California', description: 'Kodaxa builds practical websites for small businesses in Clovis, Fresno, and the Central Valley.', url: 'https://www.kodaxa.dev/services/web-design', type: 'article' },
};
export default function WebDesignServicePage() { return <><WebDesignServiceJsonLd /><WebDesignServices /></>; }
