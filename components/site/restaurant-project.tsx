import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function RestaurantProject() {
  return (
    <Link
      href="/work/las-mananitas-restaurant-website-concept"
      className="restaurant-project"
      aria-label="Explore the Las Mañanitas restaurant design study"
      data-reveal
    >
      <div className="restaurant-project-copy">
        <p className="mono">Independent concept / A local story</p>
        <h3>Las Mañanitas</h3>
        <p className="restaurant-project-title">Good food.<br />Full hearts.</p>
        <p>A family’s Fresno roots. A new home in Clovis.<br />A digital experience with just as much corazón.</p>
        <span className="restaurant-project-link">Explore the design study <ArrowUpRight size={20} aria-hidden="true" /></span>
      </div>
      <div className="restaurant-project-photo">
        <Image unoptimized src="/images/las-mananitas/chilaquiles-home.webp" alt="Chilaquiles imagery used in the restaurant concept" width={900} height={540} loading="lazy" />
      </div>
      <span className="restaurant-project-tag mono">Restaurant & hospitality</span>
    </Link>
  );
}
