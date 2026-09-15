'use client';

import { ArrowUpRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const services = [
  { title: 'Identity & direction', description: 'Clarify what the business should look and sound like before the page gets decorated.', tags: ['Brand strategy', 'Visual identity', 'Art direction'], href: '/work/sassanos-clovis-website-concept', link: 'See the Sassano’s study' },
  { title: 'Web design & development', description: 'Plan, design, and build the site as one job instead of handing it between separate teams.', tags: ['Website design', 'Development', 'E-commerce'], href: '/work/las-mananitas-restaurant-website-concept', link: 'See the restaurant study' },
  { title: 'Digital products & tools', description: 'Design focused interfaces and software around the person doing the work.', tags: ['Product design', 'Custom software', 'Workflow automation'], href: '/work/jobwarden', link: 'Explore JobWarden' },
  { title: 'Ongoing improvements', description: 'Fix what is getting in the way, keep the useful parts working, and improve the site as the business changes.', tags: ['Website care', 'Refinement', 'Technical guidance'], href: '#contact', link: 'Discuss your website' },
];
export function Services() {
  return <section className="services-section shell" id="services" aria-labelledby="services-heading"><div className="services-intro" data-reveal><p className="section-label mono">Services</p><h2 id="services-heading">What I can help with.</h2><p>Design, development, and digital product work without the agency handoff.</p><a className="arrow-link" href="/services/web-design">See how I work<ArrowUpRight size={18} aria-hidden="true" /></a></div><Accordion className="service-accordion" defaultValue={['service-1']} data-reveal>{services.map((service, index) => <AccordionItem value={`service-${index}`} key={service.title} className="service-item"><AccordionTrigger className="service-trigger"><span className="service-number mono">{String(index + 1).padStart(2, '0')}</span><span>{service.title}</span></AccordionTrigger><AccordionContent className="service-content"><p>{service.description}</p><div className="service-tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="quiet-link service-proof" href={service.href}>{service.link}<ArrowUpRight size={16} aria-hidden="true" /></a></AccordionContent></AccordionItem>)}</Accordion></section>;
}
