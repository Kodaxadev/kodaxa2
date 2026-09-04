import Image from 'next/image';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export function SassanosHero() {
  return (
    <section className="ss-hero" id="ss-top" aria-labelledby="ss-title">
      <Image
        className="ss-hero-image"
        src="/images/sassanos/campaign.webp"
        alt="Cognac western boots and dark denim in warm light; original concept campaign imagery"
        width={1536}
        height={1024}
        unoptimized
        priority
      />
      <div className="ss-hero-shade" />
      <div className="ss-hero-copy ss-wrap">
        <p className="ss-eyebrow ss-hero-eyebrow">
          <span /> Old Town Clovis · Since 1932
        </p>
        <h1 id="ss-title">
          BUILT FOR
          <br />
          <span className="ss-outline">THE LONG</span>
          <br />
          <em>HAUL.</em>
        </h1>
        <div className="ss-hero-intro">
          <p>
            Good boots. Honest denim.
            <br />A little Old Town backbone.
          </p>
          <a className="ss-button" href="#ss-goods">
            Explore the goods <ArrowDown size={18} />
          </a>
        </div>
      </div>
      <div className="ss-hero-side" aria-hidden="true">
        FAMILY ROOTS. WESTERN SOUL.
      </div>
      <div className="ss-hero-bottom ss-wrap">
        <span>01 / An Old Town original</span>
        <a href="#ss-visit">
          448 Pollasky Avenue <ArrowUpRight size={16} />
        </a>
        <a href="#ss-story">
          A story worth knowing <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
