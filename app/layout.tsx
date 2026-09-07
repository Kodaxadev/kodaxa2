import type { Metadata } from 'next';
import { Manrope, Geist_Mono } from 'next/font/google';
import { OrganizationJsonLd } from '@/components/seo/organization-jsonld';
import './globals.css';

const sans = Manrope({ variable: '--font-manrope', subsets: ['latin'] });
const mono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kodaxa.dev'),
  title: {
    template: '%s | Kodaxa',
    default: 'Kodaxa | Web design and development studio in Clovis, CA',
  },
  description:
    'Kodaxa is an independent web design and development studio based in Clovis, California, serving small businesses in Fresno and the Central Valley.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Kodaxa — Web Design & Development in Clovis, California',
    description:
      'Independent web design, web development, and e-commerce work for small businesses in Clovis.',
    url: 'https://www.kodaxa.dev/',
    type: 'website',
    locale: 'en_US',
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable}`}>
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
