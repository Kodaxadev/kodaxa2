import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function SassanosProject() {
  return (
    <Link
      href="/work/sassanos-clovis-website-concept"
      className="sassanos-project"
      aria-label="Explore the Sassano’s Men’s Wear design study"
      data-reveal
    >
      <Image unoptimized src="/images/sassanos/campaign-home.webp" alt="Original western boot campaign imagery for the Sassano’s concept" width={900} height={600} loading="lazy" />
      <div className="sassanos-project-shade" />
      <div className="sassanos-project-copy">
        <p className="mono">Independent concept / An Old Town original</p>
        <h3>SASSANO’S</h3>
        <p className="sassanos-project-title">Built for<br />the long haul.</p>
        <p>A Clovis institution.<br />An entirely new first impression.</p>
        <span className="sassanos-project-link">Explore the design study <ArrowUpRight size={20} aria-hidden="true" /></span>
      </div>
      <span className="sassanos-project-tag mono">Heritage retail & western wear</span>
      <span className="sassanos-project-origin">Old Town Clovis<br />Since 1932</span>
    </Link>
  );
}
