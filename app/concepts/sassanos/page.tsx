import { SassanosHeader } from '@/components/sassanos/header';
import { SassanosHero } from '@/components/sassanos/hero';
import { SassanosGoods } from '@/components/sassanos/goods';
import { SassanosStory } from '@/components/sassanos/story';
import { SassanosVisit } from '@/components/sassanos/visit';
import { Motion } from '@/components/site/motion';

export default function SassanosPage() {
  return (
    <>
      <Motion />
      <SassanosHeader />
      <main id="ss-main">
        <SassanosHero />
        <SassanosGoods />
        <SassanosStory />
        <SassanosVisit />
      </main>
    </>
  );
}
