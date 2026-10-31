const experience = [
  { period: '2024 — Present', role: 'Software Engineer', company: 'Accenture · Gurugram', items: ['Build backend services and semantic retrieval pipelines.', 'Work with secure Azure OpenAI integrations and supporting application services.'] },
  { period: '2023 — 2024', role: 'DevOps Engineer', company: 'Fintricity · Remote', items: ['Worked on cloud deployments across AWS and Azure.', 'Built infrastructure and delivery workflows with Terraform and Kubernetes.'] },
];

export function ExperienceSection() {
  return <section className="section" id="experience">
    <div className="section-head" data-reveal><p className="eyebrow">03 / EXPERIENCE</p><h2>Engineering journey<span className="accent">.</span></h2><p>Backend, cloud and platform work focused on dependable systems and useful developer workflows.</p></div>
    <div className="timeline">{experience.map((item, index) => <article key={item.period} data-reveal>
      <div className="timeline-marker"><span>0{index + 1}</span></div>
      <div className="timeline-date">{item.period}</div>
      <div><h3>{item.role}</h3><p className="muted">{item.company}</p><ul>{item.items.map(point => <li key={point}>{point}</li>)}</ul></div>
    </article>)}</div>
  </section>;
}
