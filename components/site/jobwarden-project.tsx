import Link from 'next/link';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import styles from './jobwarden-project.module.css';
import journal from './jobwarden-journal.module.css';

/** A fictional workday note, not a live form, app screenshot, or customer record. */
export function JobWardenPreview() {
  return (
    <figure className={journal.frame}>
      <div className={journal.inside}>
        <div className={journal.context}>
          <div className={journal.brand}><ShieldCheck aria-hidden="true" /><span>JobWarden</span></div>
          <p className={journal.headline}>Your side of<br />the <em>working day.</em></p>
          <p className={journal.subtitle}>For the person behind the timesheet.</p>
        </div>
        <div className={journal.board}>
          <div className={journal.cover} aria-hidden="true"><span>My workday.<br />My words.</span></div>
          <div className={journal.note} role="group" aria-label="Fictional example of an interrupted lunch note">
            <div className={journal.date}><span>A NOTE TO MYSELF</span><span>25 JUL</span></div>
            <p className={journal.noteTitle}>The lunch<br />I didn’t <em>finish.</em></p>
            <p className={journal.story}>Asked to come back to the floor before my break was over.</p>
            <div className={journal.times}><span>Break started<b>12:42 PM</b></span><span aria-hidden="true">→</span><span>Back on the floor<b>1:08 PM</b></span></div>
            <p className={journal.ending}>Before the day gets away.</p>
          </div>
        </div>
      </div>
      <figcaption className={journal.caption}>Illustrative entry · Not a real worker’s record</figcaption>
    </figure>
  );
}
export function JobWardenProject() {
  return <article className={styles.project} aria-labelledby="jobwarden-project-title" data-reveal><JobWardenPreview /><div className={styles.copy}><p className={styles.eyebrow}>INDEPENDENT PRODUCT / KODAXA</p><div className={styles.badges}><span>Website</span><span>PWA</span><span className={styles.trial}><i />In trial</span></div><h3 id="jobwarden-project-title">JobWarden</h3><p className={styles.tagline}>Your side of<br />the working day.</p><p className={styles.description}>The lunch you didn’t finish. The work after clock-out. A private place for California hourly workers to keep the details, in their own words.</p><p className={styles.disciplines}>Product identity · Website · Installable app</p><Link className={styles.caseLink} href="/work/jobwarden">Explore the project<ArrowUpRight size={19} aria-hidden="true" /></Link><p className={styles.disclosure}>In trial. California employment-attorney review pending. Not legal advice.</p></div></article>;
}
