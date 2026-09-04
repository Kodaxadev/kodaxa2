import Image from 'next/image';
import { ArrowUpRight, Heart } from 'lucide-react';
import { restaurant } from '@/lib/restaurant/details';

export function RestaurantStory() {
  return (
    <section
      className="lm-story lm-shell"
      id="lm-story"
      aria-labelledby="lm-story-title"
    >
      <div className="lm-story-heading" data-lm-reveal>
        <p className="lm-eyebrow">01 / De nuestra familia</p>
        <h2 id="lm-story-title">
          A little kitchen.
          <br />A whole lot of <em>heart.</em>
        </h2>
      </div>
      <div className="lm-story-layout">
        <figure className="lm-story-photo" data-lm-reveal>
          <Image
            unoptimized
            src="/images/las-mananitas/ingredients.webp"
            alt="Fresh chiles, tomatoes, cilantro and a molcajete on the restaurant’s wooden table"
            width={1024}
            height={683}
            loading="lazy"
          />
          <figcaption className="lm-handwritten">
            Good things begin at the table.
          </figcaption>
        </figure>
        <div className="lm-story-copy" data-lm-reveal>
          <Heart className="lm-story-heart" size={42} strokeWidth={1} />
          <p className="lm-story-lead">
            Before there was a restaurant,
            <br />
            there was breakfast at home.
          </p>
          <p>
            Anna Navarro would make chilaquiles for her husband, Allen Juarez.
            In 2017, that familiar favorite became part of the menu at their
            little restaurant off Hazelwood in Fresno.
          </p>
          <p>
            With their children lending a hand and neighbors spreading the word,
            Las Mañanitas became a family endeavor. The journey led to a
            long-held dream: a home in Clovis.
          </p>
          <p>
            Today, 902 Clovis Avenue is the family’s one and only location. A
            new chapter, with the same heart at the table.
          </p>
          <a
            className="lm-text-link"
            href={restaurant.story}
            target="_blank"
            rel="noreferrer"
          >
            Meet the story behind the food <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      <div className="lm-story-quote" data-lm-reveal>
        <span className="lm-quote-mark" aria-hidden="true">
          “
        </span>
        <blockquote>
          One of our dreams was to
          <br />
          always come to <em>Clovis.</em>
        </blockquote>
        <p className="lm-eyebrow">
          Allen Juarez, co-owner <span>·</span> The Business Journal, 2025
        </p>
      </div>
    </section>
  );
}
