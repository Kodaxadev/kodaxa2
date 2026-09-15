import type { ReactNode } from 'react';
import { Header } from './header';
import { Contact } from './contact';
import { Motion } from './motion';
import './editorial.css';
import './project-details.css';
import './showcase-polish.css';
import './direction-publishing.css';

/** Shared studio chrome. Concept sites keep their own navigation and identity. */
export function SiteFrame({ children, mainClassName = '' }: { children: ReactNode; mainClassName?: string }) {
  return (
    <div className="studio-site direction-publishing">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1} className={mainClassName}>{children}</main>
      <Contact />
      <Motion />
    </div>
  );
}
