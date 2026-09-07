'use client';

import { ArrowUpRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const services = [
  {
    title: 'A brand that feels like you.',
    description:
      'Find the story, the look, and the voice that make your business unmistakable. Built around who you are and the people you want to reach.',
    tags: ['Brand strategy', 'Visual identity', 'Creative direction'],
  },
  {
    title: 'A website that means business.',
    description:
      'Your hardest-working first impression. We design and build considered, responsive websites with clear journeys from curious visitor to real conversation.',
    tags: ['Website design', 'Web development', 'E-commerce'],
  },
  {
    title: 'Less busywork. More possibility.',
    description:
      'Thoughtful digital tools for the way you actually work. From connected workflows to custom business software, we turn everyday friction into something simpler.',
    tags: ['Custom software', 'Workflow automation', 'Systems integration'],
  },
  {
    title: 'A partner for what comes next.',
    description:
      'A launch is a beginning. We help you keep the details sharp, improve what matters, and evolve your digital presence as your business grows.',
    tags: ['Website care', 'Ongoing improvements', 'Technical guidance'],
  },
];

export function Services() {
  return (
    <section
      className="services-section shell"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="services-intro" data-reveal>
        <p className="section-label mono">02 / Thought through. Built right.</p>
        <h2 id="services-heading">
          Good design.
          <br />
          Serious capability.
        </h2>
        <p>
            You bring the ambition.
            <br />
            We bring the creative thinking and the technical know-how to make it
            happen.
          </p>
          <a className="arrow-link" href="/services/web-design">
            Find your next step <ArrowUpRight size={18} />
          </a>
        </div>
      <Accordion
        className="service-accordion"
        defaultValue={['service-1']}
        data-reveal
      >
        {services.map((service, index) => (
          <AccordionItem
            value={`service-${index}`}
            key={service.title}
            className="service-item"
          >
            <AccordionTrigger className="service-trigger">
              <span className="service-number mono">0{index + 1}</span>
              <span>{service.title}</span>
            </AccordionTrigger>
            <AccordionContent className="service-content">
              <p>{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
