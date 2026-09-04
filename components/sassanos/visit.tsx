import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowUp, Phone, MapPin } from 'lucide-react';
import { sassanos, storeHours } from '@/lib/sassanos';

export function SassanosVisit() {
  return (
    <>
      <section
        className="ss-visit ss-wrap"
        id="ss-visit"
        aria-labelledby="ss-visit-title"
      >
        <div className="ss-section-rule">
          <p className="ss-eyebrow">04 / We’ll see you in Old Town.</p>
          <span className="ss-eyebrow">448 Pollasky Ave · Clovis, CA</span>
        </div>
        <div className="ss-visit-top">
          <h2 className="ss-display" id="ss-visit-title" data-reveal>
            COME ON
            <br />
            <span>IN.</span>
            <ArrowUpRight aria-hidden="true" />
          </h2>
          <div className="ss-visit-invitation">
            <p>
              Some things are better
              <br />
              in person.
            </p>
            <p>
              Feel the leather. Find your denim.
              <br />
              Make a little time for Old Town.
            </p>
            <a
              className="ss-button"
              href={sassanos.directions}
              target="_blank"
              rel="noreferrer"
            >
              Get directions <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <div className="ss-visit-details">
          <figure className="ss-storefront">
            <Image
              src="/images/sassanos/storefront.webp"
              width={434}
              height={427}
              unoptimized
              alt="Sassano’s storefront and covered sidewalk on Pollasky Avenue in Old Town Clovis"
              loading="lazy"
            />
            <figcaption>
              Our corner of Old Town.
              <span>Photograph from the store’s website.</span>
            </figcaption>
          </figure>
          <div className="ss-address">
            <p className="ss-eyebrow">
              <MapPin size={15} /> Find the store
            </p>
            <address>
              {sassanos.address}
              <br />
              {sassanos.city}
            </address>
            <a
              className="ss-text-link"
              href={sassanos.directions}
              target="_blank"
              rel="noreferrer"
            >
              Open in maps <ArrowUpRight size={17} />
            </a>
            <p className="ss-eyebrow ss-phone-label">
              <Phone size={15} /> Give us a ring
            </p>
            <a className="ss-phone" href={sassanos.telephone}>
              {sassanos.phone}
            </a>
            <p className="ss-visit-note">
              Looking for a particular style or size?
              <br />
              Call the store before you make the trip.
            </p>
          </div>
          <div className="ss-hours">
            <p className="ss-eyebrow">The door is open</p>
            <dl>
              {storeHours.map((row) => (
                <div key={row.days}>
                  <dt>{row.days}</dt>
                  <dd>{row.hours}</dd>
                </div>
              ))}
            </dl>
            <p>
              Hours listed on the store’s website.
              <br />
              Call ahead for holiday hours.
            </p>
            <a className="ss-text-link" href={sassanos.telephone}>
              Call Sassano’s <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
      <footer className="ss-footer ss-wrap">
        <div className="ss-footer-top">
          <span className="ss-eyebrow">
            Workwear. Western wear. A Clovis original.
          </span>
          <a href="#ss-top">
            Back to the top <ArrowUp size={16} />
          </a>
        </div>
        <div className="ss-footer-wordmark" aria-hidden="true">
          SASSANO’S
        </div>
        <div className="ss-footer-end">
          <p>
            An independent design concept by{' '}
            <Link href="/#work">
              Kodaxa <ArrowUpRight size={13} />
            </Link>
            .<br />
            Not affiliated with or commissioned by Sassano’s Men’s Wear.
          </p>
          <p>
            Campaign image is illustrative, not actual inventory.
            <br />
            Archival and storefront photographs:{' '}
            <a href={sassanos.official} target="_blank" rel="noreferrer">
              Sassano’s website
            </a>
            .
          </p>
        </div>
      </footer>
      <a
        className="ss-mobile-visit"
        href={sassanos.directions}
        target="_blank"
        rel="noreferrer"
      >
        Visit Sassano’s <ArrowUpRight size={17} />
      </a>
    </>
  );
}
