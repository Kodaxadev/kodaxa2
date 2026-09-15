'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowUp, Copy, Check } from 'lucide-react';
import { BrandMark } from './brand-mark';

export function Contact() {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  async function copyEmail() {
    try { await navigator.clipboard.writeText('Justin@Kodaxa.dev'); setCopyState('copied'); }
    catch { setCopyState('error'); }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopyState('idle'), 4000);
  }
  return <><section className="contact-section shell" id="contact" aria-labelledby="contact-heading"><div className="contact-top"><p className="section-label mono">Good things start with a conversation</p><BrandMark size={28} /></div><div className="contact-main" data-reveal><h2 id="contact-heading">Let’s make<br /><span>your next</span> happen.</h2><a className="contact-orb" href="mailto:Justin@Kodaxa.dev?subject=Let%E2%80%99s%20build%20something%20with%20Kodaxa" aria-label="Start a project — email Justin at Kodaxa"><ArrowUpRight strokeWidth={1} aria-hidden="true" /><span>START A PROJECT</span></a></div><div className="contact-bottom"><p>Tell me about your business, your current website, and what you’d like to improve.</p><div className="contact-email"><a href="mailto:Justin@Kodaxa.dev">Justin@Kodaxa.dev</a><button type="button" onClick={copyEmail} className="copy-email" aria-label="Copy email address">{copyState === 'copied' ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}</button><output className="copy-status" aria-live="polite" aria-atomic="true">{copyState === 'copied' ? 'Email copied' : copyState === 'error' ? 'Select the email address to copy it.' : ''}</output></div></div></section><footer className="footer shell"><div className="footer-top"><p>Independent thinking.<br />Considered, down to the details.</p><p className="mono">Clovis, California<br /><span>Design + development</span></p><a href="#top" className="back-top">Back to top<ArrowUp size={16} aria-hidden="true" /></a></div><nav className="footer-links" aria-label="Footer navigation"><a href="/work">Work</a><a href="/services/web-design">Web design</a><a href="/about">The studio</a><a href="mailto:Justin@Kodaxa.dev">Email Justin</a></nav><div className="footer-wordmark" aria-hidden="true">kodaxa<BrandMark /></div><div className="footer-bottom mono"><span>© {new Date().getFullYear()} Kodaxa</span><span>Small business. Big presence.</span><span>Made with intention.</span></div></footer></>;
}
