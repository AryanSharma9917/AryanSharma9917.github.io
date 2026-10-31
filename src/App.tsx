import { useEffect, useState } from 'react';
import { ContactSection } from './components/ContactSection';
import { ExperienceSection } from './components/ExperienceSection';
import { HeroSection } from './components/HeroSection';
import { ProfileRail, sections } from './components/ProfileRail';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';

function useActiveSection() {
  const [active, setActive] = useState('about');
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: '-18% 0px -62% 0px', threshold: [0, .1, .3, .6] });
    sections.forEach(([id]) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);
  return active;
}

function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach(element => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }), { threshold: .08, rootMargin: '0px 0px -45px' });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const active = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);
  useScrollReveal();
  return <div className="shell">
    <ProfileRail active={active} menuOpen={menuOpen} onMenuToggle={() => setMenuOpen(open => !open)} onNavigate={() => setMenuOpen(false)} />
    <main className="content">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <footer>© {new Date().getFullYear()} Aryan Sharma · Built with care.</footer>
    </main>
  </div>;
}

export default App;
