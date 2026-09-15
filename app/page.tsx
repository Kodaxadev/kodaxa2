import { SiteFrame } from '@/components/site/site-frame';
import { Hero } from '@/components/site/hero';
import { Work } from '@/components/site/work';
import { Services } from '@/components/site/services';
import { Studio } from '@/components/site/studio';

export default function Home() {
  return <SiteFrame><Hero /><Work /><Services /><Studio /></SiteFrame>;
}
