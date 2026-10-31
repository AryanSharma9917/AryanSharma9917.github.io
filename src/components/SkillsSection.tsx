import type { CSSProperties } from 'react';

const skills: Record<string, string[]> = {
  Backend: ['Go', 'Python', 'Java', 'FastAPI', 'Microservices'],
  Cloud: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'Helm', 'Argo CD'],
  Infrastructure: ['Terraform', 'Linux', 'OpenShift', 'GitHub Actions'],
  Observability: ['Prometheus', 'Grafana'],
  AI: ['RAG', 'FAISS', 'Azure OpenAI', 'LangGraph'],
};

export function SkillsSection() {
  return <section className="section" id="skills">
    <div className="section-head" data-reveal><p className="eyebrow">02 / TOOLKIT</p><h2>Technologies I work with<span className="accent">.</span></h2></div>
    <div className="skills-grid">{Object.entries(skills).map(([group, items], index) => <div className="skill-card" data-reveal style={{ '--reveal-order': index % 2 } as CSSProperties} key={group}><span className="skill-index">0{index + 1}</span><h3>{group}</h3><div className="chips">{items.map(item => <span key={item} className="chip">{item}</span>)}</div></div>)}</div>
  </section>;
}
