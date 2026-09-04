import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import './sassanos.css';

const display = Oswald({
  subsets: ['latin'],
  variable: '--font-sassanos',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sassano’s — Built for the long haul | Kodaxa Concept',
  description:
    'An independent concept for Sassano’s Men’s Wear in Old Town Clovis. Western boots, denim, workwear, and a family story with roots in 1907.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Sassano’s — Built for the long haul',
    description:
      'A heritage outfitter, reimagined by Kodaxa. Independent design concept.',
  },
};

export default function SassanosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`ss ${display.variable}`}>{children}</div>;
}
