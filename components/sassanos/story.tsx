import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { milestones, sassanos } from '@/lib/sassanos';

export function SassanosStory() {
  return (
    <>
      <div
        className="ss-ribbon"
        aria-label="Family owned, Clovis grown, since 1932"
      >
        <div className="ss-ribbon-track">
          {[0, 1].map((copy) => (
            <span key={copy} aria-hidden={copy === 1}>
              FAMILY OWNED <b>✦</b> CLOVIS GROWN <b>✦</b> SINCE 1932{' '}
              <b>✦</b>{' '}
            </span>
          ))}
        </div>
      </div>
      <section
        className="ss-story ss-wrap"
        id="ss-story"
        aria-labelledby="ss-story-title"
      >
        <div className="ss-section-rule">
          <p className="ss-eyebrow">03 / Deep roots. Real people.</p>
          <a href={sassanos.history} target="_blank" rel="noreferrer">
            The family archive <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="ss-story-layout">
          <figure className="ss-archive" data-reveal>
            <div className="ss-archive-mat">
              <Image
                src="/images/sassanos/archive.webp"
                width={1100}
                height={771}
                unoptimized
                alt="Historic Sassano’s shop interior with rows of hats and shoe boxes, from the store’s published archive"
                loading="lazy"
              />
            </div>
            <figcaption>
              <span>From the Sassano’s archive</span>
              <span>Clovis, California</span>
            </figcaption>
            <span className="ss-archive-handwriting" aria-hidden="true">
              Some things stay with you.
            </span>
          </figure>
          <div className="ss-story-copy" data-reveal>
            <h2 className="ss-display" id="ss-story-title">
              YOU CAN’T
              <br />
              FAKE
              <br />
              <span>ROOTS.</span>
            </h2>
            <p>
              Before the boots and blue jeans, there was a cobbler with a small
              shop and a name above the door.
            </p>
            <p>
              Aniello. Shorty. Les. Greg. Generations of the Sassano family,
              woven into the story of Clovis.
            </p>
            <p>
              Through changing times, the store has kept something simple at its
              heart: people helping people find good things to wear.
            </p>
            <a
              className="ss-text-link"
              href={sassanos.history}
              target="_blank"
              rel="noreferrer"
            >
              Read the family’s story <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <ol className="ss-timeline">
          {milestones.map((milestone) => (
            <li key={milestone.year} data-reveal>
              <span className="ss-timeline-dot" />
              <span className="ss-timeline-year ss-display">
                {milestone.year}
              </span>
              <h3>{milestone.title}</h3>
              <p>{milestone.text}</p>
            </li>
          ))}
        </ol>
        <div className="ss-community">
          <span className="ss-eyebrow">More than a storefront</span>
          <p>
            The Sassano Blanket Award began in 1936, honoring local high-school
            athletes. Around here, showing up for your town has a long history.
          </p>
          <span className="ss-community-signature">
            Clovis, through & through.
          </span>
        </div>
      </section>
    </>
  );
}
