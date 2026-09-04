import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function RestaurantProject() {
  return (
    <Link
      href="/concepts/las-mananitas"
      className="restaurant-project"
      aria-label="Explore Las Mañanitas restaurant website concept"
      data-reveal
    >
      <div className="restaurant-project-copy">
        <p className="mono">Featured concept / A local story</p>
        <h3>Las Mañanitas</h3>
        <p className="restaurant-project-title">
          Good food.
          <br />
          Full hearts.
        </p>
        <p>
          A family’s Fresno roots. A new home in Clovis.
          <br />A digital experience with just as much corazón.
        </p>
        <span className="restaurant-project-link">
          Experience the website <ArrowUpRight size={20} />
        </span>
      </div>
      <div className="restaurant-project-photo">
        <Image
          unoptimized
          src="/images/las-mananitas/chilaquiles.webp"
          alt="The restaurant’s signature chilaquiles breakfast"
          width={1242}
          height={745}
          loading="lazy"
        />
      </div>
      <span className="restaurant-project-tag mono">
        02 / Restaurant & hospitality
      </span>
    </Link>
  );
}
