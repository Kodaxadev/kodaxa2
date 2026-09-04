import type { Metadata } from 'next';
import { Fraunces, Caveat } from 'next/font/google';
import './restaurant.css';

const serif = Fraunces({
  subsets: ['latin'],
  variable: '--font-lm-serif',
  style: ['normal', 'italic'],
  display: 'swap',
});
const script = Caveat({
  subsets: ['latin'],
  variable: '--font-lm-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Las Mañanitas — A family table in Clovis | Kodaxa Concept',
  description:
    'An independent website concept by Kodaxa for Las Mañanitas. Discover the family story, Mexican breakfast favorites, and the restaurant’s home in Clovis, California.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Las Mañanitas — Made with corazón',
    description:
      'A restaurant website concept by Kodaxa, inspired by a real family story in Clovis.',
  },
};

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`lm ${serif.variable} ${script.variable}`}>{children}</div>
  );
}
