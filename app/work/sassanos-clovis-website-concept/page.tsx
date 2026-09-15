import type { Metadata } from 'next';
import { ConceptCaseStudy } from '@/components/site/editorial-pages';

export const metadata: Metadata = {
  title: 'Sassano’s — Independent web concept study',
  description: 'A published concept breakdown for a Clovis menswear website by Kodaxa. Independent concept, not a commissioned client project.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/work/sassanos-clovis-website-concept' },
};
export default function SassanosWorkPage() { return <ConceptCaseStudy project="sassanos" />; }
