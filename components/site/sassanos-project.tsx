import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function SassanosProject() {
  return (
    <Link
      href="/concepts/sassanos"
      className="sassanos-project"
      aria-label="Explore Sassano’s Men’s Wear website concept"
      data-reveal
    >
      <Image
        unoptimized
        src="/images/sassanos/campaign.webp"
        alt="Original western boot campaign imagery for the Sassano’s concept"
        width={1536}
        height={1024}
        loading="lazy"
      />
      <div className="sassanos-project-shade" />
      <div className="sassanos-project-copy">
        <p className="mono">Featured concept / An Old Town original</p>
        <h3>SASSANO’S</h3>
        <p className="sassanos-project-title">
          Built for
          <br />
          the long haul.
        </p>
        <p>
          A Clovis institution.
          <br />
          An entirely new first impression.
        </p>
        <span className="sassanos-project-link">
          Experience the website <ArrowUpRight size={20} />
        </span>
      </div>
      <span className="sassanos-project-tag mono">
        01 / Heritage retail & western wear
      </span>
      <span className="sassanos-project-origin">
        Old Town Clovis
        <br />
        Since 1932
      </span>
    </Link>
  );
}
