import { ArrowUpRight } from 'lucide-react';
import { BrandMark } from './brand-mark';

const steps = [
  ['01', 'Listen first.', 'Your business isn’t a template. Start with your people, your challenges, and where you want to go.'],
  ['02', 'Make it matter.', 'Connect a clear direction with considered design. Stay part of the conversation, from the first idea to the fine details.'],
  ['03', 'Build it better.', 'Bring the idea into the browser, refine the experience, and prepare something you can feel proud to put into the world.'],
];
export function Studio() {
  return <section className="studio-section shell" id="about" aria-labelledby="studio-heading"><div className="studio-top"><p className="section-label mono">03 / Independent by choice</p><span className="mono">Clovis, California</span></div><div className="studio-main" data-reveal><h2 id="studio-heading">Small studio.<br />Expansive <span>thinking.</span></h2><div className="studio-story"><div className="studio-asterisk"><BrandMark size={76} /></div><p>The businesses that make a community special deserve a digital presence just as distinctive.</p><p>At Kodaxa, you work directly with Justin—from understanding your business to designing and building the experience. No handoff between the idea and its execution.</p><a href="/about" className="arrow-link">Meet the studio<ArrowUpRight size={18} aria-hidden="true" /></a></div></div><div className="process-grid">{steps.map(([number, title, description]) => <article key={number} data-reveal><span className="mono">{number} /</span><h3>{title}</h3><p>{description}</p></article>)}</div><div className="studio-bottom mono"><span>Human by design.</span><span>Precise by nature.</span><span>Local at heart.</span></div></section>;
}
