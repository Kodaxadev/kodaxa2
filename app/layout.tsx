import type { Metadata } from 'next';
import { Manrope, Geist_Mono } from 'next/font/google';
import './globals.css';

const sans = Manrope({ variable: '--font-manrope', subsets: ['latin'] });
const mono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
export const metadata: Metadata = {
  metadataBase: new URL('https://kodaxa-studio.synaptikal.chatgpt.site'),
  title: 'Kodaxa — Small business. Big presence. | Clovis, CA',
  description:
    'Independent thinking. Exceptional execution. Kodaxa designs brands, websites, and practical digital solutions for small businesses in Clovis, California.',
  openGraph: {
    title: 'Kodaxa — Small business. Big presence.',
    description:
      'Design, websites, and digital solutions. Made with ambition in Clovis, California.',
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
      <body className={`${sans.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
