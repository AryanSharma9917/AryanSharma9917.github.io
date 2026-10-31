import { useState, type CSSProperties } from 'react';
import { projects, type ProjectId } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<ProjectId | null>(null);
  const toggle = (id: ProjectId) => setExpandedId(current => current === id ? null : id);
  return <section className="section" id="projects">
    <div className="section-head" data-reveal><p className="eyebrow">01 / SELECTED WORK</p><h2>Things I've built<span className="accent">.</span></h2><p>Projects focused on practical engineering challenges, from incident investigation to deployment and monitoring.</p></div>
    <div data-reveal><ProjectCard project={projects[0]} featured expanded={expandedId === projects[0].id} onToggle={() => toggle(projects[0].id)} /></div>
    <div className="project-grid">{projects.slice(1, 3).map((project, index) => <div className={`project-slot ${expandedId === project.id ? 'expanded' : ''}`} data-reveal style={{ '--reveal-order': index + 1 } as CSSProperties} key={project.id}><ProjectCard project={project} expanded={expandedId === project.id} onToggle={() => toggle(project.id)} /></div>)}</div>
    <h3 className="subhead" data-reveal>More projects</h3>
    <div className="project-grid">{projects.slice(3).map((project, index) => <div className={`project-slot ${expandedId === project.id ? 'expanded' : ''}`} data-reveal style={{ '--reveal-order': index % 2 } as CSSProperties} key={project.id}><ProjectCard project={project} expanded={expandedId === project.id} onToggle={() => toggle(project.id)} /></div>)}</div>
  </section>;
}
