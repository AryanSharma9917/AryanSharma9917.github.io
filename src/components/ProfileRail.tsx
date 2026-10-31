import { ExternalLink, Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export const sections = [['about', 'About'], ['projects', 'Projects'], ['skills', 'Skills'], ['experience', 'Experience'], ['opensource', 'Open source'], ['contact', 'Contact']] as const;
export type SectionId = typeof sections[number][0];

export function ProfileRail({ active, menuOpen, onMenuToggle, onNavigate }: { active: string; menuOpen: boolean; onMenuToggle: () => void; onNavigate: () => void }) {
  return <aside className={`rail ${menuOpen ? 'menu-open' : ''}`}>
    <div className="identity">
      <a href="#about" className="avatar" aria-label="Back to top">AS</a>
      <div><strong>Aryan Sharma</strong><small>Software Engineer</small></div>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={onMenuToggle}>{menuOpen ? <X /> : <Menu />}</button>
    </div>
    <div className="rail-content">
      <p className="rail-caption">NAVIGATION</p>
      <nav aria-label="Sections">{sections.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={onNavigate}>{label}</a>)}</nav>
      <div className="rail-bottom">
        <div className="socials">
          <a href="https://github.com/AryanSharma9917" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={19} /></a>
          <a href="https://linkedin.com/in/aryansharma9917" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
          <a href="mailto:sharmaaryan9837@gmail.com" aria-label="Email"><Mail size={19} /></a>
        </div>
        <a className="resume-link" href="#experience">Experience <ExternalLink size={15} aria-hidden="true" /></a>
      </div>
    </div>
  </aside>;
}
