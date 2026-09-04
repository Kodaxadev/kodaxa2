import { Header } from '@/components/site/header';
import { Hero } from '@/components/site/hero';
import { Motion } from '@/components/site/motion';
import { Work } from '@/components/site/work';
import { Services } from '@/components/site/services';
import { Studio } from '@/components/site/studio';
import { Contact } from '@/components/site/contact';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Motion />
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Services />
        <Studio />
        <Contact />
      </main>
    </>
  );
}
