import type { Metadata } from 'next';
import { ConceptCaseStudy } from '@/components/site/editorial-pages';

export const metadata: Metadata = {
  title: 'Las Mañanitas — Independent restaurant website concept',
  description: 'A concept case study showing how Kodaxa reworked a local restaurant website experience. Independent concept, not a commissioned client project.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/work/las-mananitas-restaurant-website-concept' },
};
export default function LasMananitasWorkPage() { return <ConceptCaseStudy project="restaurant" />; }
