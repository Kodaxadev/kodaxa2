import { RestaurantHeader } from '@/components/restaurant/header';
import { RestaurantHero } from '@/components/restaurant/hero';
import { RestaurantStory } from '@/components/restaurant/story';
import { RestaurantMenu } from '@/components/restaurant/menu';
import { RestaurantVisit } from '@/components/restaurant/visit';
import { RestaurantMotion } from '@/components/restaurant/motion';

export default function RestaurantPage() {
  return (
    <>
      <a className="lm-skip" href="#lm-main">
        Skip to content
      </a>
      <RestaurantHeader />
      <main id="lm-main">
        <RestaurantHero />
        <RestaurantStory />
        <RestaurantMenu />
        <RestaurantVisit />
      </main>
      <RestaurantMotion />
    </>
  );
}
