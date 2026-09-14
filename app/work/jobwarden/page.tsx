import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { JobWardenPreview } from '@/components/site/jobwarden-project';
import styles from '@/components/site/jobwarden-project.module.css';

export const metadata: Metadata = {
  title: 'JobWarden — Website & PWA in Trial',
  description: 'An independent Kodaxa product: a private, offline-first workday log for California hourly workers. Explore the website, installable PWA, and design approach.',
  alternates: { canonical: '/work/jobwarden' },
  openGraph: {
    title: 'JobWarden — A Kodaxa website + PWA, in trial',
    description: 'A private record. A clearer picture. Product design and development by Kodaxa.',
    url: 'https://www.kodaxa.dev/work/jobwarden',
    type: 'website',
  },
};

export default function JobWardenCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <main className={styles.casePage} id="main">
        <Link href="/work" className={styles.back}>← All projects</Link>
        <header className={styles.caseHero}>
          <div>
            <p className={styles.eyebrow}>KODAXA / INDEPENDENT PRODUCT / IN TRIAL</p>
            <h1>JobWarden</h1>
            <p className={styles.caseLead}>A private record of your working day.<br />A clearer picture when you look back.</p>
            <div className={styles.caseActions}>
              <a href="https://jobwarden.kodaxa.dev/" target="_blank" rel="noopener noreferrer">Visit website <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a href="https://jobwarden.kodaxa.dev/index.html" target="_blank" rel="noopener noreferrer">Try the PWA <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
          <dl className={styles.caseMeta}>
            <div><dt>Format</dt><dd>Website + progressive web app</dd></div>
            <div><dt>Status</dt><dd>In trial</dd></div>
            <div><dt>Made by</dt><dd>Kodaxa · Design &amp; development</dd></div>
            <div><dt>Built for</dt><dd>California hourly workers</dd></div>
          </dl>
        </header>
        <div className={styles.caseArt}><JobWardenPreview /></div>
        <div className={styles.caseSections}>
          <section><p className={styles.eyebrow}>01 / THE PROBLEM</p><h2>Details don’t wait.</h2><p>A missed break, unpaid work, or a conversation can be difficult to reconstruct later. Notes, photos, and times end up in different places. JobWarden gives workers a structured place to record their own account while the details are still fresh.</p></section>
          <section><p className={styles.eyebrow}>02 / THE APPROACH</p><h2>Clarity without clutter.</h2><p>A focused website explains the purpose; a separate guide explains the workflow. Inside the PWA, issue-led forms ask for relevant details. Navy, warm paper, and restrained gold give the product a consistent identity without presenting it as a law firm.</p></section>
          <section><p className={styles.eyebrow}>03 / THE PRODUCT</p><h2>Useful. On your terms.</h2><p>Capture events and photos, review related records, and export a printable report, spreadsheet, or restorable backup. Records stay on the device unless the user chooses to share. No account or cloud synchronization is required.</p></section>
        </div>
        <aside className={styles.trialNotice} aria-label="Trial status and product limitations">
          <div><h2>A working product.<br />Still in trial.</h2><p>This is an independent Kodaxa product, not a commissioned client concept. The website and installable PWA are in trial. Review by a licensed California employment attorney is pending.</p></div>
          <div><p>JobWarden is a recordkeeping tool, not legal advice. It does not decide claims, calculate damages, or make filings. Local records are separate on each device; clearing browser data can erase them.</p><a href="https://jobwarden.kodaxa.dev/how-it-works.html">How the product works <ArrowUpRight size={16} aria-hidden="true" /></a></div>
        </aside>
        <nav className={styles.caseFoot} aria-label="Project navigation">
          <Link href="/#work">← Back to Kodaxa’s work</Link>
          <a href="https://jobwarden.kodaxa.dev/install.html">PWA installation guide <ArrowUpRight size={16} aria-hidden="true" /></a>
        </nav>
      </main>
    </>
  );
}
