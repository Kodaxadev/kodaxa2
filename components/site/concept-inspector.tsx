'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { ArrowUpRight, Monitor, Smartphone, Plus, Minus } from 'lucide-react';
import './project-details.css';

/** Load the actual concept only on request; do not label artwork as UI screenshots. */
export function ConceptInspector({ name, href }: { name: string; href: string }) {
  const [open, setOpen] = useState(false);
  const [device, setDevice] = useState<'desktop' | 'mobile'>('mobile');
  const [available, setAvailable] = useState(390);
  const container = useRef<HTMLDivElement>(null);
  const id = useId();
  const width = device === 'desktop' ? 1280 : 390;
  const height = device === 'desktop' ? 800 : 740;
  const scale = Math.min(1, available / width);

  useEffect(() => {
    if (!open || !container.current) return;
    const element = container.current;
    const update = () => setAvailable(element.clientWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, [open]);

  return (
    <section className="concept-inspector" aria-label={`${name} interactive design review`}>
      <div className="inspector-heading"><div><p className="mono">The design, in use</p><h2>Look closer.</h2><p>Explore the actual concept at desktop or phone width. This is a live website preview, not a mockup.</p></div>
        <button type="button" className="pill" aria-expanded={open} aria-controls={id} onClick={() => {
          if (!open) setDevice(window.innerWidth > 760 ? 'desktop' : 'mobile');
          setOpen(!open);
        }}>{open ? 'Close preview' : 'Open live preview'}{open ? <Minus aria-hidden="true" /> : <Plus aria-hidden="true" />}</button>
      </div>
      <div id={id} hidden={!open}>
        {open && <><div className="inspector-toolbar"><div className="device-switch" role="group" aria-label="Preview viewport size"><button type="button" aria-pressed={device === 'desktop'} onClick={() => setDevice('desktop')}><Monitor size={17} aria-hidden="true" />Desktop</button><button type="button" aria-pressed={device === 'mobile'} onClick={() => setDevice('mobile')}><Smartphone size={17} aria-hidden="true" />Mobile</button></div><span className="mono">{width}px viewport</span><a href={href} target="_blank" rel="noopener noreferrer" className="quiet-link">Open full site<ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> in a new tab</span></a></div>
          <div ref={container} className="inspector-stage"><div className="inspector-window" style={{ width: width * scale, height: height * scale }}><iframe title={`${name}: interactive ${device} concept preview`} src={href} loading="lazy" width={width} height={height} style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }} /></div></div>
        </>}
      </div>
    </section>
  );
}
