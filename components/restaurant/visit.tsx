import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowUp, MapPin, Phone, Sun } from 'lucide-react';
import { restaurant } from '@/lib/restaurant/details';
import { RestaurantPlace } from './place';

export function RestaurantVisit() {
  return (
    <>
      <section className="lm-table-banner" aria-labelledby="lm-table-title">
        <Image
          unoptimized
          src="/images/las-mananitas/table.webp"
          alt="Traditional ingredients arranged on colorful ceramic plates at Las Mañanitas"
          width={2048}
          height={1348}
          loading="lazy"
        />
        <div className="lm-table-copy" data-lm-reveal>
          <p className="lm-eyebrow">A little more time together.</p>
          <h2 id="lm-table-title">
            Come hungry.
            <br />
            Leave <em>happy.</em>
          </h2>
          <p className="lm-handwritten">That’s what the table is for.</p>
        </div>
      </section>
      <section
        className="lm-visit lm-shell"
        id="lm-visit"
        aria-labelledby="lm-visit-title"
      >
        <div className="lm-visit-heading" data-lm-reveal>
          <p className="lm-eyebrow">03 / Aquí estamos</p>
          <h2 id="lm-visit-title">
            Same family.
            <br />
            <em>Clovis home.</em>
          </h2>
          <p>
            From our beginnings off Hazelwood in Fresno to our one home in
            Clovis. We’d love to see you at the table.
          </p>
          <a
            className="lm-button"
            href={restaurant.directions}
            target="_blank"
            rel="noreferrer"
          >
            Come on over <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="lm-visit-details" data-lm-reveal>
          <div>
            <MapPin size={22} strokeWidth={1.4} />
            <p>
              <span className="lm-eyebrow">Our only location</span>
              <a href={restaurant.directions} target="_blank" rel="noreferrer">
                {restaurant.address}
                <br />
                {restaurant.city}
              </a>
            </p>
          </div>
          <div>
            <Sun size={22} strokeWidth={1.4} />
            <p>
              <span className="lm-eyebrow">Make a day of it</span>
              <strong>Daily · 7:00am–8:30pm</strong>
              <small>
                Published restaurant hours.
                <br />
                Please call to confirm today’s service.
              </small>
            </p>
          </div>
          <div>
            <Phone size={22} strokeWidth={1.4} />
            <p>
              <span className="lm-eyebrow">Give us a ring</span>
              <a href={restaurant.telephone}>{restaurant.phone}</a>
            </p>
          </div>
          <a
            className="lm-text-link"
            href={restaurant.order}
            target="_blank"
            rel="noreferrer"
          >
            Bringing the good food home? Order online <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
      <RestaurantPlace />
      <footer className="lm-footer lm-shell">
        <div className="lm-footer-top">
          <p>
            From our family, <em>con amor.</em>
          </p>
          <a href="#lm-top" aria-label="Back to top">
            <ArrowUp size={20} />
          </a>
        </div>
        <p className="lm-footer-wordmark">Las Mañanitas</p>
        <div className="lm-footer-bottom">
          <p>
            Clovis, California <span>·</span> Family-owned since 2017
          </p>
          <p>
            A concept crafted by <Link href="/">kodaxa ↗</Link>
          </p>
        </div>
        <div className="lm-disclosure">
          <p>
            Independent design concept by Kodaxa. Not the official restaurant
            website or a commissioned client project. Restaurant names and
            photography belong to their respective owners.
          </p>
          <a href={restaurant.website} target="_blank" rel="noreferrer">
            Visit the official website <ArrowUpRight size={12} />
          </a>
        </div>
      </footer>
    </>
  );
}
