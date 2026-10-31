import { AlertTriangle, ArrowUpRight, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import type { Project } from '../data/projects';

export function ProjectDetails({ project, expanded }: { project: Project; expanded: boolean }) {
  const detailsId = `project-details-${project.id}`;
  return <div id={detailsId} className={`project-details-shell ${expanded ? 'expanded' : ''}`} aria-hidden={!expanded}>
    <div className="project-details-inner">
      <div className="project-details-content" role="region" aria-labelledby={`project-title-${project.id}`}>
        <div className="case-study-intro">
          <p className="detail-kicker">CASE STUDY / {project.name.toUpperCase()}</p>
          <p className="case-overview">{project.details.overview}</p>
        </div>

        <div className="case-narrative">
          <article><span>01</span><h4>Problem</h4><p>{project.details.problem}</p></article>
          <article><span>02</span><h4>Solution</h4><p>{project.details.solution}</p></article>
        </div>

        <div className="detail-grid">
          <section className="detail-block">
            <h4>Key capabilities</h4>
            <ul className="capability-list">{project.details.capabilities.map(item => <li key={item}><CheckCircle2 size={15} aria-hidden="true" />{item}</li>)}</ul>
          </section>
          <section className="detail-block">
            <h4>Technology stack</h4>
            <div className="stack-groups">{project.details.stack.map(group => <div key={group.label}><span className="stack-label">{group.label}</span><div className="chips">{group.items.map(item => <span className="chip" key={item}>{item}</span>)}</div></div>)}</div>
          </section>
        </div>

        <section className="detail-block workflow-block">
          <h4>Architecture / workflow</h4>
          <div className={`detail-workflow ${project.details.workflow.length > 5 ? 'detail-workflow-long' : ''}`}>{project.details.workflow.map((step, index) => <div className="workflow-step" key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{index < project.details.workflow.length - 1 && <b aria-hidden="true">→</b>}</div>)}</div>
        </section>

        <section className="detail-block project-media">
          <div className="detail-heading-row"><h4>Project media</h4><span>{project.details.media.length ? 'Repository media' : 'Concept preview'}</span></div>
          {project.details.media.length ? <div className="media-grid">{project.details.media.map(media => <figure key={media.src}>
            <div className="media-frame"><img src={media.src} alt={media.alt} loading="lazy" decoding="async" /></div>
            <figcaption><span className={`media-provenance ${media.provenance}`}>{media.provenance === 'genuine' ? 'Genuine screenshot' : 'Mocked rehearsal'}</span>{media.caption}</figcaption>
          </figure>)}</div> : <div className="media-empty"><ImageIcon size={20} aria-hidden="true" /><div><strong>Concept interface shown above</strong><p>No verified UI screenshot is currently stored in this project's repository.</p></div></div>}
        </section>

        <div className="detail-grid detail-grid-footer">
          <section className="detail-block limitations"><h4><AlertTriangle size={16} aria-hidden="true" /> Limitations</h4><ul>{project.details.limitations.map(item => <li key={item}>{item}</li>)}</ul></section>
          <section className="detail-block"><h4>Project links</h4><div className="detail-links">{project.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" tabIndex={expanded ? 0 : -1}>{link.label}<ArrowUpRight size={14} aria-hidden="true" /></a>)}</div></section>
        </div>
      </div>
    </div>
  </div>;
}
