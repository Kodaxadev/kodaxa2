import type { Metadata } from 'next';
import { AboutStudio } from '@/components/site/editorial-pages';

export const metadata: Metadata = {
  title: 'About Kodaxa',
  description: 'Kodaxa is an independent Clovis, California design and development studio founded by Justin Davis. Thoughtful websites for small businesses in the Central Valley.',
  alternates: { canonical: '/about' },
  openGraph: { title: 'About Kodaxa', description: 'An independent web design and development studio in Clovis, California.', url: 'https://www.kodaxa.dev/about', type: 'website' },
};
export default function AboutPage() { return <AboutStudio />; }
