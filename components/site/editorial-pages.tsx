import type { ReactNode } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { SiteFrame } from './site-frame';
import { BrandMark } from './brand-mark';
import { JobWardenProject, JobWardenPreview } from './jobwarden-project';
import { ConceptInspector } from './concept-inspector';
import './project-details.css';

function PageIntro({ label, children, description }: { label: string; children: ReactNode; description: string }) {
  return <header className="page-intro"><p className="section-label mono">{label}</p><h1>{children}</h1><div className="page-deck"><p>{description}</p></div></header>;
}
function EditorialRow({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  return <section className="editorial-row"><div><p className="mono">{label}</p><h2>{title}</h2></div><div>{children}</div></section>;
}
const concepts = {
  sassanos: {
    name: 'Sassano’s', category: 'Heritage retail', location: 'Old Town Clovis, California',
    path: '/work/sassanos-clovis-website-concept', href: '/concepts/sassanos',
    image: '/images/sassanos/campaign-home.webp', cover: '/images/sassanos/campaign.webp',
    alt: 'Western-wear campaign imagery used in the Sassano’s concept',
    lead: 'An Old Town original. An entirely new first impression.',
    summary: 'A heritage retail concept balancing character, merchandise, and a clear invitation to visit.',
    challenge: 'Make the heritage feel present.',
    challengeCopy: 'The question was not how to make a long-established store look like every other online retailer. It was how to give its character room to speak, while helping a new visitor understand what is on offer and where to find it.',
    direction: 'Character, without the clutter.',
    directionCopy: 'The concept pairs expressive campaign imagery with quieter navigation, considered typography, and a clear sequence from the store’s identity to its goods and its location. The photographs set the atmosphere; the interface carries the practical information.',
    decisions: [
      ['Lead with identity', 'The opening introduces the store through a strong visual and a short statement, rather than a crowded wall of offers.'],
      ['Give merchandise a structure', 'Distinct sections let visitors move from the overall character of the store into its product stories.'],
      ['Keep the visit in view', 'Store information and the route to visiting have their own place in the journey, rather than competing with every image.'],
    ],
    gallery: [
      ['/images/sassanos/storefront.webp', 'Storefront imagery used in the Sassano’s concept', 'Place / the storefront imagery'],
      ['/images/sassanos/archive.webp', 'Heritage imagery used in the Sassano’s concept', 'Heritage / the visual story'],
    ],
    next: 'restaurant' as const,
  },
  restaurant: {
    name: 'Las Mañanitas', category: 'Restaurant & hospitality', location: 'Clovis, California',
    path: '/work/las-mananitas-restaurant-website-concept', href: '/concepts/las-mananitas',
    image: '/images/las-mananitas/chilaquiles-home.webp', cover: '/images/las-mananitas/table.webp',
    alt: 'Food imagery used in the Las Mañanitas restaurant concept',
    lead: 'Good food. Full hearts. A warmer welcome online.',
    summary: 'A restaurant concept that lets the food lead, gives the family story room, and makes planning a visit simpler.',
    challenge: 'An invitation, not an information overload.',
    challengeCopy: 'A restaurant website needs to create an appetite and answer practical questions. This exploration brings the food, family story, menu, and location into a deliberate sequence, instead of asking them all to be the first thing a visitor sees.',
    direction: 'Let the food set the tone.',
    directionCopy: 'Warm imagery and generous typography establish the atmosphere. Clear navigation and distinct menu and visit sections do the practical work. The aim is to retain the restaurant’s personality without letting decorative detail interrupt the path to useful information.',
    decisions: [
      ['Start with the invitation', 'A focused opening gives the food and the restaurant’s character the first word.'],
      ['Make the menu approachable', 'A dedicated menu section creates a clear destination for visitors who already know what they need.'],
      ['Separate story from logistics', 'Family storytelling and visit information have distinct roles, so browsing and planning a visit do not compete.'],
    ],
    gallery: [
      ['/images/las-mananitas/dining-room.webp', 'Dining-room imagery used in the restaurant concept', 'Atmosphere / the dining-room imagery'],
      ['/images/las-mananitas/chilaquiles.webp', 'Chilaquiles imagery used in the restaurant concept', 'Food / the visual invitation'],
    ],
    next: 'sassanos' as const,
  },
};

function CollectionCard({ project }: { project: typeof concepts.sassanos | typeof concepts.restaurant }) {
  return <article className="collection-card"><a className="collection-image" href={project.path} aria-label={`Explore the ${project.name} design study`}><Image unoptimized src={project.image} alt={project.alt} width={900} height={600} loading="lazy" /><span><ArrowUpRight aria-hidden="true" /></span></a><div className="collection-meta"><h2><a href={project.path}>{project.name}</a></h2><p className="mono">{project.category}<br />Independent concept</p></div><p>{project.summary}</p><a href={project.path} className="arrow-link">Explore the design study<ArrowUpRight size={18} aria-hidden="true" /></a></article>;
}

export function WorkCollection() {
  return <SiteFrame mainClassName="shell editorial-page"><PageIntro label="Selected work / Kodaxa" description="Independent products and thoughtful explorations. Different businesses, different visual worlds, the same attention to how an experience feels and works.">Websites. Products.<br /><em>Possibilities.</em></PageIntro><div className="collection"><section aria-labelledby="featured-product"><h2 id="featured-product" className="sr-only">Featured independent product</h2><JobWardenProject /></section><div className="collection-pair"><CollectionCard project={concepts.sassanos} /><CollectionCard project={concepts.restaurant} /></div></div><div className="collection-note"><p>JobWarden is an independent product in trial. Sassano’s and Las Mañanitas are self-initiated concepts, not commissioned client engagements. Each study explains what was designed and why.</p><a href="/#work" className="arrow-link">More design explorations<ArrowUpRight size={18} aria-hidden="true" /></a></div></SiteFrame>;
}

export function AboutStudio() {
  return <SiteFrame mainClassName="shell editorial-page"><PageIntro label="The studio / Clovis, California" description="Kodaxa is an independent design and development studio for small businesses in Clovis, Fresno, and the Central Valley. A direct relationship, from the first conversation to the final details.">Small studio.<br /><em>Personal by design.</em></PageIntro><section className="founder-note" aria-labelledby="founder-title"><div><p className="mono">The person behind Kodaxa</p><h2 id="founder-title">You work<br />directly with me.</h2><div className="founder-signature"><BrandMark size={34} /><div><strong>Justin Davis</strong><span>Founder · Design & development</span></div></div></div><div><p>I started Kodaxa around a simple idea: the businesses that make a community interesting deserve websites with just as much character.</p><p>Working together means a direct conversation about your business, not a template with your logo added. I bring the design and the build together, so the idea and the finished experience stay connected.</p><p>Clear decisions. Useful details. Something that feels like your business.</p></div></section><EditorialRow label="01 / The approach" title="Understand first. Make with purpose."><ol className="principle-list"><li><span className="mono">01</span><div><h3>Start with the business.</h3><p>Who are your customers? What do they need to know? What should happen next? Those answers give the design its direction.</p></div></li><li><span className="mono">02</span><div><h3>Make the thinking visible.</h3><p>Review the structure, the visual direction, and the important decisions as the project takes shape—not only when it is finished.</p></div></li><li><span className="mono">03</span><div><h3>Care about the small things.</h3><p>Readable type, useful mobile layouts, clear navigation, and an understandable handoff belong in the work from the beginning.</p></div></li></ol></EditorialRow><EditorialRow label="02 / The work" title="A distinct point of view. A practical outcome."><p>From a local storefront to an independent digital product, the goal is the same: an experience that reflects the people behind it and makes sense to the people using it.</p><a href="/work" className="arrow-link">Explore the work<ArrowUpRight size={18} aria-hidden="true" /></a></EditorialRow></SiteFrame>;
}

export function WebDesignServices() {
  const offerings = [
    ['Website design', 'A visual direction that belongs to your business. Thoughtful layouts, a clear content structure, and considered desktop and mobile experiences.', '/work/sassanos-clovis-website-concept', 'See the retail design study'],
    ['Web development', 'Design and implementation brought together. Responsive pages, useful interactions, and a handoff that makes the structure of your website understandable.', '/work/las-mananitas-restaurant-website-concept', 'See the restaurant design study'],
    ['E-commerce planning', 'Organize your products, clarify the shopping journey, and choose the right approach for how your business sells. Scope and platform are agreed around your needs.', '/#contact', 'Discuss your store'],
    ['Accessibility & performance', 'Careful attention to legibility, keyboard use, image delivery, and responsive behavior. Review what matters before launch and identify improvements as the site evolves.', '/#contact', 'Discuss your website'],
  ];
  return <SiteFrame mainClassName="shell editorial-page"><PageIntro label="Web design + development / Clovis, California" description="Websites for independent businesses in Clovis, Fresno, and the Central Valley. Designed around your customers, your character, and what you need your website to do.">A better first impression.<br /><em>A more useful website.</em></PageIntro><EditorialRow label="01 / What we do" title="From the first idea to the final detail."><div className="offering-list">{offerings.map(([title, text, href, link], i) => <article className="offering" key={title}><span className="mono">0{i + 1}</span><div><h3>{title}</h3><p>{text}</p><a href={href} className="arrow-link">{link}<ArrowUpRight size={16} aria-hidden="true" /></a></div></article>)}</div></EditorialRow><EditorialRow label="02 / Working together" title="A clear path. No black box."><ol className="principle-list">{[
    ['Understand', 'Talk through your business, customers, existing website, and priorities. Agree what the project needs to accomplish.'],
    ['Shape', 'Organize the content and establish a visual direction. Review the important choices before they become a finished website.'],
    ['Build & refine', 'Bring the design into the browser. Check layouts, links, interactions, and the details that change across screen sizes.'],
    ['Launch & hand over', 'Prepare the site for launch and explain how it is managed. Agree any ongoing care separately, with clear responsibilities.'],
  ].map(([title, text], i) => <li key={title}><span className="mono">0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></EditorialRow><EditorialRow label="03 / In context" title="See the thinking in the work."><div className="services-proof-pair"><CollectionCard project={concepts.sassanos} /><CollectionCard project={concepts.restaurant} /></div></EditorialRow><EditorialRow label="04 / Start here" title="Bring the business. We’ll find the direction."><p>A new website, a tired first impression, or a specific problem to solve. Start with your business, the website you have now, and what you would like to change. The right scope comes from that conversation.</p><a className="arrow-link" href="#contact">Tell me about your project<ArrowUpRight size={18} aria-hidden="true" /></a></EditorialRow></SiteFrame>;
}

export function ConceptCaseStudy({ project: key }: { project: keyof typeof concepts }) {
  const project = concepts[key];
  const next = concepts[project.next];
  return <SiteFrame mainClassName="shell editorial-page"><a className="page-back" href="/work"><ArrowLeft size={17} aria-hidden="true" />All projects</a><header className="page-intro case-heading"><div><p className="section-label mono">Independent concept / {project.category}</p><h1>{project.name}</h1><p className="case-lead">{project.lead}</p><div className="case-actions"><a className="pill" href={project.href}>Experience the concept<ArrowUpRight aria-hidden="true" /></a></div></div><dl className="case-metadata"><div><dt>Discipline</dt><dd>Art direction · Web design · Development</dd></div><div><dt>Context</dt><dd>{project.location}</dd></div><div><dt>Status</dt><dd>Self-initiated exploration<br />Not commissioned client work</dd></div></dl></header><figure className="case-cover"><Image unoptimized src={project.cover} alt={project.alt} width={1600} height={1000} loading="eager" /><figcaption><span>Visual direction / concept imagery</span><span>Explore the live website below to inspect the interface.</span></figcaption></figure><EditorialRow label="01 / The question" title={project.challenge}><p>{project.challengeCopy}</p></EditorialRow><EditorialRow label="02 / The direction" title={project.direction}><p>{project.directionCopy}</p></EditorialRow><div className="case-gallery">{project.gallery.map(([src, alt, caption]) => <figure key={src}><Image unoptimized src={src} alt={alt} width={1200} height={900} loading="lazy" /><figcaption>{caption}</figcaption></figure>)}</div><EditorialRow label="03 / Design decisions" title="The details do the work."><ol className="principle-list">{project.decisions.map(([title, text], i) => <li key={title}><span className="mono">0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></EditorialRow><ConceptInspector name={project.name} href={project.href} /><aside className="case-status" aria-label="Project status"><p className="mono">About this study</p><p>This is an independent Kodaxa design exploration, not a commissioned project or an official business website. The observations explain design intent; they are not claims of measured customer or business results. Concept content is illustrative and should not be used to plan a visit.</p></aside><nav className="case-navigation" aria-label="Project navigation"><div><p className="mono">Continue exploring</p><h2>{next.name}</h2></div><a href={next.path}>Next design study<ArrowUpRight size={26} aria-hidden="true" /></a></nav></SiteFrame>;
}

export function JobWardenStudy() {
  return <SiteFrame mainClassName="shell editorial-page"><a className="page-back" href="/work"><ArrowLeft size={17} aria-hidden="true" />All projects</a><header className="page-intro case-heading"><div><p className="section-label mono">Independent product / In trial</p><h1>JobWarden</h1><p className="case-lead">Your side of the working day.<br />A little space for what happened.</p><div className="case-actions"><a className="pill" href="https://jobwarden.kodaxa.dev/" target="_blank" rel="noopener noreferrer">Visit the website<ArrowUpRight aria-hidden="true" /><span className="sr-only"> in a new tab</span></a><a className="quiet-link" href="https://jobwarden.kodaxa.dev/index.html" target="_blank" rel="noopener noreferrer">Try the PWA<ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> in a new tab</span></a></div></div><dl className="case-metadata"><div><dt>Discipline</dt><dd>Product identity · Website · Progressive web app</dd></div><div><dt>Built for</dt><dd>California hourly workers</dd></div><div><dt>Status</dt><dd>In trial · Attorney review pending</dd></div></dl></header><div className="product-case-art"><JobWardenPreview /></div><EditorialRow label="01 / The problem" title="Details don’t wait."><p>A missed break, unpaid work, or a conversation can be difficult to reconstruct later. Notes, photos, and times end up in different places. JobWarden gives workers a structured place to record their own account while the details are still fresh.</p></EditorialRow><EditorialRow label="02 / The approach" title="The person, not the paperwork."><p>The public identity starts with recognizable moments in a working day. Warm paper, deep ink, terracotta, and expressive serif type make room for a personal account rather than another dashboard.</p><p>A separate guide explains the practical details; the app keeps its focused recordkeeping workflow. The journal illustration above is a fictional example, not a real worker’s record or an app screenshot.</p></EditorialRow><EditorialRow label="03 / The product" title="Useful. On your terms."><p>Capture events and photos, review related records, and export a printable report, spreadsheet, or restorable backup. Records stay on the device unless the user chooses to share. No account or cloud synchronization is required.</p><a className="arrow-link" href="https://jobwarden.kodaxa.dev/install.html">Read the installation guide<ArrowUpRight size={18} aria-hidden="true" /></a></EditorialRow><aside className="product-limitations" aria-label="Trial status and product limitations"><div><h2>A working product.<br />Still in trial.</h2><p>This is an independent Kodaxa product, not a commissioned client concept. The website and installable PWA are in trial. Review by a licensed California employment attorney is pending.</p></div><div><p>JobWarden is a recordkeeping tool, not legal advice. It does not decide claims, calculate damages, or make filings. Local records are separate on each device; clearing browser data can erase them.</p><a className="arrow-link" href="https://jobwarden.kodaxa.dev/how-it-works.html">How the product works<ArrowUpRight size={16} aria-hidden="true" /></a></div></aside><nav className="case-navigation" aria-label="Project navigation"><div><p className="mono">A different kind of challenge</p><h2>Sassano’s</h2></div><a href={concepts.sassanos.path}>Next design study<ArrowUpRight size={26} aria-hidden="true" /></a></nav></SiteFrame>;
}
