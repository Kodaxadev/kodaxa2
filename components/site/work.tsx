'use client';

import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { projects } from '@/lib/projects';
import Image from 'next/image';
import { RestaurantProject } from './restaurant-project';
import { SassanosProject } from './sassanos-project';

export function Work() {
  return (
    <section
      className="work-section shell"
      id="work"
      aria-labelledby="work-heading"
    >
      <div className="section-heading" data-reveal>
        <div>
          <p className="section-label mono">
            01 / A glimpse of what’s possible
          </p>
          <h2 id="work-heading">
            Different businesses.
            <br />
            <span>Same obsession.</span>
          </h2>
        </div>
        <p className="section-intro">
          Every business has a story.
          <br />
          We make yours worth a closer look.
        </p>
      </div>
      <SassanosProject />
      <RestaurantProject />
      <div className="project-grid">
        {projects.map((project, index) => (
          <Dialog key={project.id}>
            <div className={`project-card ${project.className}`} data-reveal>
              <DialogTrigger
                className="project-trigger"
                aria-label={`Explore ${project.name} concept`}
              >
                <div className="project-image">
                  <Image
                    unoptimized
                    src={project.thumbnailImage || project.image}
                    alt={project.alt}
                    width={project.thumbnailWidth || 1400}
                    height={project.thumbnailHeight || 1000}
                    loading="lazy"
                  />
                  <div className="project-scrim" />
                  <div className="project-preview-top">
                    <span className="project-brand">
                      {project.id === 'daybreak' ? 'daybreak®' : 'forma.'}
                    </span>
                    <span className="preview-menu mono">
                      {project.id === 'daybreak'
                        ? 'COFFEE & GOOD COMPANY'
                        : 'CONSIDERED LIVING'}
                    </span>
                  </div>
                  <div className="project-preview-copy">
                    <p className="mono">{project.eyebrow}</p>
                    <h3>
                      {project.headline.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </h3>
                    <span className="preview-line" />
                  </div>
                  <span className="concept-label mono">
                    Independent concept
                  </span>
                  <span className="project-open" aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </div>
                <div className="project-caption">
                  <div>
                    <span className="project-number mono">0{index + 3}</span>
                    <span className="project-name">{project.name}</span>
                  </div>
                  <span>{project.category}</span>
                  <ArrowUpRight size={18} />
                </div>
              </DialogTrigger>
            </div>
              <DialogContent className="project-dialog">
                <Image
                  unoptimized
                  className="dialog-image"
                  src={project.image}
                alt={project.alt}
                width="1400"
                height="1000"
              />
              <div className="dialog-copy">
                <p className="section-label mono">
                  Independent concept / {project.category}
                </p>
                <DialogTitle className="dialog-title">
                  {project.name}
                </DialogTitle>
                <DialogDescription className="dialog-description">
                  {project.description}
                </DialogDescription>
                <div className="dialog-details">
                  <div>
                    <h3>The question</h3>
                    <p>{project.challenge}</p>
                  </div>
                  <div>
                    <h3>The direction</h3>
                    <p>{project.approach}</p>
                  </div>
                </div>
                <div className="service-tags">
                  {project.disciplines.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <p className="concept-disclosure">
                  An original design exploration by Kodaxa. This is a fictional
                  brand, not a client engagement.
                </p>
                <a
                  className="arrow-link"
                  href={`mailto:Justin@Kodaxa.dev?subject=${encodeURIComponent(`Let's create something like ${project.name}`)}`}
                >
                  Let’s make something for you <ArrowUpRight size={18} />
                </a>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
      <div className="work-note">
        <div>
          <p>Independent concepts. A very real attention to detail.</p>
          <a className="arrow-link" href="/work">
            Explore indexable concept case pages
          </a>
        </div>
        <ArrowDownRight size={24} strokeWidth={1.2} />
      </div>
    </section>
  );
}
