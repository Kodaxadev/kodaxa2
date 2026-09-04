import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { restaurant } from '@/lib/restaurant/details';

export function RestaurantPlace() {
  return (
    <figure className="lm-place lm-shell" data-lm-reveal>
      <div className="lm-place-photos">
        <Image
          unoptimized
          src="/images/las-mananitas/dining-room.webp"
          alt="The Clovis dining room, with wooden tables and bright windows"
          width={1000}
          height={563}
          loading="lazy"
        />
        <Image
          unoptimized
          src="/images/las-mananitas/clovis.webp"
          alt="Las Mañanitas sun sign and entrance at 902 Clovis Avenue"
          width={750}
          height={1000}
          loading="lazy"
        />
      </div>
      <figcaption>
        <span className="lm-handwritten">Your table is right here.</span>
        <a href={restaurant.directions} target="_blank" rel="noreferrer">
          902 Clovis Avenue <ArrowUpRight size={14} />
        </a>
      </figcaption>
    </figure>
  );
}
