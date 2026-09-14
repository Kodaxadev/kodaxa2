import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Clock3, ClipboardList, ListChecks, Download, Settings } from 'lucide-react';
import styles from './jobwarden-project.module.css';

/** Static product illustration, never a live form or a customer record. */
export function JobWardenPreview() {
  return (
    <figure className={styles.visual}>
      <div className={styles.visualBrand}><ShieldCheck aria-hidden="true" /><span>JobWarden</span></div>
      <p className={styles.visualHeadline}>Your workday,<br /><span>on the record.</span></p>
      <div className={styles.paper} aria-hidden="true">
        <span className={styles.paperLabel}>PERSONAL ACCOUNT / 001</span>
        <strong>Interrupted lunch.</strong>
        <span>25 July 2026 · Store 12</span>
        <p>Asked to return to the floor before the break was finished.</p>
        <small>Your words. Your record.</small>
      </div>
      <div className={styles.phone} role="img" aria-label="Illustration of JobWarden’s log screen with example data and categories for meals, rest breaks, pay, and speaking up.">
        <div className={styles.phoneTop}><span>9:41</span><i /></div>
        <div className={styles.phoneBrand}><ShieldCheck aria-hidden="true" size={21} /><span>JobWarden<small>FIELD LOG</small></span></div>
        <div className={styles.quick}><Clock3 size={13} aria-hidden="true" /> Interrupted lunch</div>
        <div className={styles.logCard}>
          <strong>What happened?</strong>
          <div className={styles.fields}><span>Date<b>07 / 25 / 2026</b></span><span>Place<b>Store 12</b></span></div>
          {['Meal breaks', 'Rest breaks', 'Pay & schedule', 'Speaking up'].map((label) => (
            <div className={styles.logRow} key={label}><span /><b>{label}</b><i>⌄</i></div>
          ))}
        </div>
        <div className={styles.tabs}><span><ClipboardList size={14} aria-hidden="true" />Log</span><span><ListChecks size={14} aria-hidden="true" />Records</span><span><Download size={14} aria-hidden="true" />Export</span><span><Settings size={14} aria-hidden="true" />Settings</span></div>
      </div>
      <figcaption className={styles.visualCaption}>Interface illustration · Example entry</figcaption>
    </figure>
  );
}

export function JobWardenProject() {
  return (
    <article className={styles.project} aria-labelledby="jobwarden-project-title" data-reveal>
      <JobWardenPreview />
      <div className={styles.copy}>
        <p className={styles.eyebrow}>INDEPENDENT PRODUCT / KODAXA</p>
        <div className={styles.badges}><span>Website</span><span>PWA</span><span className={styles.trial}><i />In trial</span></div>
        <h3 id="jobwarden-project-title">JobWarden</h3>
        <p className={styles.tagline}>A private record.<br />A clearer picture.</p>
        <p className={styles.description}>An offline-first workday log for California hourly workers. Capture what happened, keep supporting details together, and export your own records.</p>
        <p className={styles.disciplines}>Product design · Web development · Installable app</p>
        <Link className={styles.caseLink} href="/work/jobwarden">Explore the project <ArrowUpRight size={19} aria-hidden="true" /></Link>
        <div className={styles.liveLinks}><a href="https://jobwarden.kodaxa.dev/" target="_blank" rel="noopener noreferrer">Visit website <ArrowUpRight size={15} aria-hidden="true" /></a><a href="https://jobwarden.kodaxa.dev/install.html" target="_blank" rel="noopener noreferrer">Install the PWA <ArrowUpRight size={15} aria-hidden="true" /></a></div>
        <p className={styles.disclosure}>In trial. California employment-attorney review pending. Not legal advice.</p>
      </div>
    </article>
  );
}
