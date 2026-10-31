import { ActionLink } from './ActionLink';

export function ContactSection() {
  return <section className="section contact" id="contact" data-reveal>
    <p className="eyebrow">05 / SAY HELLO</p><h2>Let's build something <em>useful.</em></h2><p>Interested in backend engineering, infrastructure or AI systems? I'd be happy to connect.</p>
    <div className="hero-actions"><ActionLink primary href="mailto:sharmaaryan9837@gmail.com">Get in touch</ActionLink><ActionLink href="https://linkedin.com/in/aryansharma9917">LinkedIn</ActionLink></div>
  </section>;
}
