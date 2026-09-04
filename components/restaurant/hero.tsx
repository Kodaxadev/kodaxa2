import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Heart, Sun } from 'lucide-react';
import { restaurant } from '@/lib/restaurant/details';

export function RestaurantHero() {
  return (
    <>
      <section className="lm-hero lm-shell" aria-labelledby="lm-hero-title">
        <div className="lm-hero-copy">
          <p className="lm-eyebrow">
            <span /> Family-owned · Clovis, California
          </p>
          <h1 id="lm-hero-title">
            Good food.
            <br />
            Full hearts.
            <br />
            <em>Buenos días.</em>
          </h1>
          <p className="lm-hero-description">
            The kind of food that brings everyone to the table. Mexican
            breakfast, lunch, and a little piece of home—right here in Clovis.
          </p>
          <div className="lm-hero-links">
            <a className="lm-button" href="#lm-menu">
              Find your favorite <ArrowDown size={17} />
            </a>
            <a
              className="lm-hero-order"
              href={restaurant.order}
              target="_blank"
              rel="noreferrer"
            >
              Order online <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="lm-hero-origin">
            <Heart size={20} strokeWidth={1.3} />
            <p>
              Fresno roots. A Clovis home.
              <br />
              <span>Cooking with corazón since 2017.</span>
            </p>
          </div>
        </div>
        <div className="lm-hero-visual">
          <div className="lm-photo-arch">
            <Image
              unoptimized
              src="/images/las-mananitas/chilaquiles.webp"
              alt="Las Mañanitas chilaquiles with salsa, crema, Cotija, eggs and beans"
              width={1242}
              height={746}
              priority
            />
          </div>
          <div className="lm-sun-seal" aria-label="Made with corazón">
            <Sun size={35} strokeWidth={1} />
            <span>
              Made with
              <br />
              <em>corazón</em>
            </span>
          </div>
          <p className="lm-handwritten lm-hero-note">
            A very good reason
            <br />
            to get out of bed.
          </p>
          <a className="lm-photo-caption" href="#lm-menu">
            <span>
              <small>A HOUSE FAVORITE</small>Chilaquiles, of course.
            </span>
            <ArrowUpRight size={24} />
          </a>
        </div>
        <div className="lm-hero-bottom">
          <span>Una mesa para todos.</span>
          <span>
            Pull up a chair. Stay a little longer. <ArrowDown size={14} />
          </span>
        </div>
      </section>
      <div className="lm-marquee" aria-hidden="true">
        <div>
          {[0, 1, 2, 3].map((i) => (
            <span key={i}>
              BUENOS DÍAS <Sun /> BUENA COMIDA <Sun /> BUENA COMPAÑÍA{' '}
              <Sun />{' '}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
