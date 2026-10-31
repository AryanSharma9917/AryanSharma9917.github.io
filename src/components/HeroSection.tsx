import { ArrowDownRight } from 'lucide-react';
import { ActionLink } from './ActionLink';

export function HeroSection() {
  return <section id="about" className="hero section">
    <div className="hero-copy">
      <p className="eyebrow"><span className="dot" /> BACKEND · CLOUD · DEVOPS · AI</p>
      <h1>Engineering <em>reliable</em> systems.</h1>
      <p className="lead">I'm Aryan, a software engineer building backend services, cloud-native infrastructure and AI-powered developer tools. I care about making complex systems useful, observable and dependable.</p>
      <div className="hero-actions"><ActionLink href="#projects" primary>Explore projects</ActionLink><ActionLink href="https://github.com/AryanSharma9917">GitHub</ActionLink></div>
    </div>
    <a className="scroll-hint" href="#projects">SCROLL TO EXPLORE <ArrowDownRight size={17} aria-hidden="true" /></a>
  </section>;
}
