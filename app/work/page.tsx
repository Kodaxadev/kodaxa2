import type { Metadata } from 'next';
import { WorkCollection } from '@/components/site/editorial-pages';

export const metadata: Metadata = {
  title: 'Websites & Digital Products by Kodaxa',
  description: 'Explore Kodaxa’s websites, independent digital products, and design concepts, including the JobWarden website and PWA in trial.',
  alternates: { canonical: '/work' },
};
export default function WorkIndexPage() { return <WorkCollection />; }
