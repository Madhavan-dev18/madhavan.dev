import { useState } from 'react';
import { PROJECTS } from '../data';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const toggleProject = (id: string) => setExpandedProject(prev => prev === id ? null : id);

  return (
    <section id="projects" className="page-section" style={{ gap: '16px' }}>
      <h2 className="section-title" style={{ marginBottom: 0 }}>Projects</h2>
      <div className="project-grid">
        {PROJECTS.map((proj, i) => (
          <div className="project-card-large" key={i}>
            <div className="project-card-header">
              <div className="project-icon-large" style={{ backgroundColor: proj.color }}>✦</div>
              <div className="project-date">{proj.date}</div>
            </div>
            <div className="project-card-title">{proj.name}</div>
            <div className="project-tech" style={{ marginBottom: '12px' }}>
              {proj.tech.map(t => <span className="tech-tag" style={{ backgroundColor: proj.color }} key={t}>{t}</span>)}
            </div>

            {/* Always show first 120 chars, expand for full */}
            <div style={{ color: 'var(--fg-muted)', fontSize: '14px', lineHeight: '1.6', marginBottom: '8px' }}>
              {proj.desc.substring(0, 120)}...
            </div>

            {expandedProject === proj.id && (
              <div style={{ color: 'var(--fg-muted)', fontSize: '14px', lineHeight: '1.6', marginTop: '4px' }}>
                {proj.desc.substring(120)}
              </div>
            )}

            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <button className="btn-primary" onClick={() => toggleProject(proj.id)} style={{ width: 'fit-content' }}>
                {expandedProject === proj.id ? 'Hide Deep Dive' : 'Read Technical Deep Dive ↓'}
              </button>
              <a href={proj.live} target="_blank" rel="noreferrer" className="btn-primary" style={{ backgroundColor: '#fff', width: 'fit-content' }}>
                {proj.live.includes('github') ? 'View Source ↗' : 'View Live ↗'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
