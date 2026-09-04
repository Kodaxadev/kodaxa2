'use client';

import { ArrowUpRight } from 'lucide-react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { departments, sassanos } from '@/lib/sassanos';

export function SassanosGoods() {
  return (
    <section
      className="ss-goods ss-wrap"
      id="ss-goods"
      aria-labelledby="ss-goods-title"
    >
      <div className="ss-section-rule">
        <p className="ss-eyebrow">02 / The goods</p>
        <span className="ss-eyebrow">Made for your kind of day.</span>
      </div>
      <div className="ss-goods-layout">
        <div className="ss-goods-intro" data-reveal>
          <h2 className="ss-display" id="ss-goods-title">
            GOOD GEAR.
            <br />
            <span>NO FUSS.</span>
          </h2>
          <p>
            For early starts. Late nights.
            <br />
            And everything you put into the day.
          </p>
          <p className="ss-goods-note">
            Start here. Find your favorites in the store. Call ahead for current
            styles, sizes, and prices.
          </p>
          <span className="ss-script" aria-hidden="true">
            Wear it well.
          </span>
        </div>
        <Accordion className="ss-departments" defaultValue={['boots']}>
          {departments.map((department) => (
            <AccordionItem
              key={department.id}
              value={department.id}
              className="ss-department"
            >
              <AccordionTrigger className="ss-department-trigger">
                <span className="ss-department-number">
                  {department.number}
                </span>
                <span className="ss-department-title">
                  <span className="ss-eyebrow">{department.label}</span>
                  <span>{department.name}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="ss-department-content">
                <p>{department.description}</p>
                <ul
                  className="ss-brand-tags"
                  aria-label={`${department.label} brands and offerings`}
                >
                  {department.brands.map((brand) => (
                    <li key={brand}>{brand}</li>
                  ))}
                </ul>
                <a className="ss-text-link" href={sassanos.telephone}>
                  {department.link}
                  <ArrowUpRight size={17} />
                </a>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="ss-goods-foot">
        <span className="ss-eyebrow">Work. Western. Everyday.</span>
        <a href={sassanos.official} target="_blank" rel="noreferrer">
          See the store’s current website <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
