const experience = [
  {
    period: 'August 2024 — Present',
    role: 'Software Developer',
    company: 'Accenture',
    location: 'Gurugram, India',
    items: [
      { label: 'Agentic AI & Backend', description: 'Developed enterprise Agentic AI solutions using Python, LangGraph, RAG, FAISS and Azure OpenAI for IT incident investigation and resolution.', technologies: ['Python', 'LangGraph', 'RAG', 'FAISS', 'Azure OpenAI'] },
      { label: 'Cloud & DevOps', description: 'Deployed applications on Red Hat OpenShift using Kubernetes, Kustomize and Azure DevOps CI/CD pipelines, with secure secrets management and approval-based releases.', technologies: ['OpenShift', 'Kubernetes', 'Kustomize', 'Azure DevOps'] },
      { label: 'Automation & Reliability', description: 'Improved backend reliability and automated testing using pytest, SonarQube and CI/CD workflows, including session-state and microservice improvements.', technologies: ['pytest', 'SonarQube', 'CI/CD', 'Microservices'] },
    ],
  },
  {
    period: 'December 2023 — August 2024',
    role: 'DevOps Engineer',
    company: 'Fintricity',
    location: 'Remote, India',
    items: [
      { label: 'AWS & Kubernetes', description: 'Deployed cloud-native platforms using AWS EKS, Terraform, Kubernetes and Argo CD, automating infrastructure provisioning and deployment workflows.', technologies: ['AWS EKS', 'Terraform', 'Kubernetes', 'Argo CD'] },
      { label: 'Cloud & DevOps Automation', description: 'Deployed MageAI using Terraform and Helm on AWS, and containerized Flowise workflows on Azure using Docker.', technologies: ['MageAI', 'Terraform', 'Helm', 'AWS', 'Azure', 'Docker'] },
      { label: 'Multi-Cloud Engineering', description: 'Built cross-cloud data ingestion pipelines to support centralized analytics and monitoring across multiple cloud environments.', technologies: ['Multi-cloud', 'Data pipelines', 'Monitoring'] },
    ],
  },
];

export function ExperienceSection() {
  return <section className="section" id="experience">
    <div className="section-head" data-reveal><p className="eyebrow">03 / EXPERIENCE</p><h2>Engineering journey<span className="accent">.</span></h2><p>Backend, cloud and platform work focused on dependable systems and useful developer workflows.</p></div>
    <div className="timeline">{experience.map((item, index) => <article key={item.period} data-reveal>
      <div className="timeline-marker"><span>0{index + 1}</span></div>
      <div className="timeline-date">{item.period}</div>
      <div className="experience-entry"><h3>{item.role}</h3><p className="muted"><strong>{item.company}</strong><span>{item.location}</span></p><ul>{item.items.map(point => <li key={point.label}><div><strong>{point.label}:</strong> {point.description}</div><div className="experience-tech" aria-label={`${point.label} technologies`}>{point.technologies.map(technology => <span key={technology}>{technology}</span>)}</div></li>)}</ul></div>
    </article>)}</div>
  </section>;
}
