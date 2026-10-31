import { ArrowUpRight, ChevronDown } from 'lucide-react';
import type { Project } from '../data/projects';
import { ProjectDetails } from './ProjectDetails';
import { ProjectVisual } from './ProjectVisual';

export function ProjectCard({ project, featured = false, expanded, onToggle }: { project: Project; featured?: boolean; expanded: boolean; onToggle: () => void }) {
  const github = project.links.find(link => link.label === 'GitHub') ?? project.links[0];
  return <article className={`project-card ${featured ? 'featured' : ''} ${expanded ? 'project-open' : ''}`} data-project={project.id}>
    <div className="project-summary">
      <ProjectVisual id={project.id} featured={featured} />
      <div className="project-body">
        <div className="project-heading"><h3 id={`project-title-${project.id}`}>{project.name}</h3><span className="kind">{project.badge}</span></div>
        <p>{project.description}</p>
        <div className="chips">{project.tags.map(tag => <span className="chip" key={tag}>{tag}</span>)}</div>
        {featured && <div className="pipeline">{project.details.workflow.map((step, index) => <span key={step}>{step}{index < project.details.workflow.length - 1 && <b aria-hidden="true">→</b>}</span>)}</div>}
        <div className="project-actions">
          <a className="project-github" href={github.href} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
          <button className="explore-button" type="button" aria-expanded={expanded} aria-controls={`project-details-${project.id}`} onClick={onToggle}>{expanded ? 'Close details' : 'Explore project'}<ChevronDown className={expanded ? 'rotated' : ''} size={15} aria-hidden="true" /></button>
        </div>
      </div>
    </div>
    <ProjectDetails project={project} expanded={expanded} />
  </article>;
}
