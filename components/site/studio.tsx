import { Asterisk, ArrowUpRight } from 'lucide-react';

const steps = [
  [
    '01',
    'Listen first.',
    'Your business isn’t a template. We get to know your people, your challenges, and where you want to go.',
  ],
  [
    '02',
    'Make it matter.',
    'We connect a clear direction with considered design. You stay part of the conversation, from the first idea to the fine details.',
  ],
  [
    '03',
    'Build it better.',
    'We bring it to life, refine the experience, and give you something you can feel proud to put into the world.',
  ],
];

export function Studio() {
  return (
    <section
      className="studio-section shell"
      id="about"
      aria-labelledby="studio-heading"
    >
      <div className="studio-top">
        <p className="section-label mono">
          03 / Your neighbors. Your creative partners.
        </p>
        <span className="mono">Rooted in Clovis, CA ↗</span>
      </div>
      <div className="studio-main" data-reveal>
        <h2 id="studio-heading">
          Small studio.
          <br />
          Expansive <span>thinking.</span>
        </h2>
        <div className="studio-story">
          <div className="studio-asterisk" aria-hidden="true">
            <Asterisk size={84} strokeWidth={1} />
          </div>
          <p>
            We believe the businesses that make a community special deserve a
            digital presence just as distinctive.
          </p>
          <p>
            That’s why Kodaxa brings design and implementation together. A
            direct relationship, thoughtful work, and the kind of care you’d
            expect from a neighbor.
          </p>
          <a
            href="mailto:Justin@Kodaxa.dev?subject=Hello%20Kodaxa"
            className="arrow-link"
          >
            Get to know us <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
      <div className="process-grid">
        {steps.map(([number, title, description]) => (
          <article key={number} data-reveal>
            <span className="mono">{number} /</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
      <div className="studio-bottom mono">
        <span>Human by design.</span>
        <span>Precise by nature.</span>
        <span>Local at heart.</span>
      </div>
    </section>
  );
}
