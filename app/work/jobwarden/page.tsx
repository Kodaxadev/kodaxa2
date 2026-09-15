import type { Metadata } from 'next';
import { JobWardenStudy } from '@/components/site/editorial-pages';

export const metadata: Metadata = {
  title: 'JobWarden — Website & PWA in Trial',
  description: 'An independent Kodaxa product: a private, offline-first workday log for California hourly workers. Explore the website, installable PWA, and design approach.',
  alternates: { canonical: '/work/jobwarden' },
  openGraph: { title: 'JobWarden — A Kodaxa website + PWA, in trial', description: 'Your side of the working day. A human-centred product identity, website, and private workday app by Kodaxa.', url: 'https://www.kodaxa.dev/work/jobwarden', type: 'website' },
};
export default function JobWardenCaseStudy() { return <JobWardenStudy />; }
