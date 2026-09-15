import { ArrowUpRight } from 'lucide-react';

const steps = [
  ['START', 'Understand the business.', 'Start with what you sell, who needs it, what is not working, and what the site actually has to do.'],
  ['DESIGN', 'Make the right thing clear.', 'Work out the hierarchy, visual direction, and interaction before polishing details that do not matter.'],
  ['BUILD', 'Put it in the browser.', 'Build, test, refine, and keep the design connected to the implementation all the way through launch.'],
];
export function Studio() {
  return <section className="studio-section shell" id="about" aria-labelledby="studio-heading"><div className="studio-top"><p className="section-label mono">About Kodaxa</p><span className="mono">Clovis, California</span></div><div className="studio-main" data-reveal><h2 id="studio-heading">You work with me,<br /><span>start to finish.</span></h2><div className="studio-story"><p>I’m Justin. Kodaxa is my independent design and development studio in Clovis.</p><p>I handle the direction and the build, so the idea does not disappear in a handoff between teams. If something looks generic, confusing, or unnecessary, it gets challenged.</p><a href="/about" className="arrow-link">More about the studio<ArrowUpRight size={18} aria-hidden="true" /></a></div></div><div className="process-grid">{steps.map(([number, title, description]) => <article key={number} data-reveal><span className="mono">{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div><div className="studio-bottom"><span>Independent studio</span><span>Design + development</span><span>Clovis, California</span></div></section>;
}
