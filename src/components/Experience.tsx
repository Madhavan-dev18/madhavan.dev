import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { EXP, SKILLS } from '../data';

export default function Experience() {
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const toggleExp = (idx: number) => setExpandedExp(prev => prev === idx ? null : idx);

  return (
    <>
      <section id="experience" className="page-section" style={{ gap: '16px' }}>
        <h2 className="section-title" style={{ marginBottom: 0 }}>Experience & Timeline</h2>
        <div className="project-grid">
          {EXP.map((e, i) => (
            <div className="side-card" key={i}>
              <div className="side-card-label">
                <span style={{ fontSize: '16px', display: 'inline-flex', verticalAlign: 'middle', marginRight: '4px' }}><Calendar size={16} /></span> {e.date}
              </div>
              <div className="side-card-title">{e.title}</div>
              <div style={{ color: e.btnColor, fontSize: '14px', fontWeight: 600, marginBottom: '16px', marginTop: '-8px' }}>{e.label}</div>

              {expandedExp === i ? (
                <div className="side-card-desc">
                  {e.desc}
                </div>
              ) : (
                <div className="side-card-desc">{e.desc.substring(0, 100)}...</div>
              )}

              <div style={{ display: 'flex', gap: '12px' }}>
                <button className="side-card-btn" style={{ backgroundColor: '#fff', cursor: 'pointer' }} onClick={() => toggleExp(i)}>
                  {expandedExp === i ? 'Less' : 'More Details'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="page-section" style={{ gap: '16px' }}>
        <h2 className="section-title" style={{ marginBottom: 0 }}>Technical Skills</h2>
        <div className="project-grid">
          {SKILLS.map((skillGroup, i) => (
            <div className="skill-group" key={i}>
              <div className="skill-category">{skillGroup.category}</div>
              <div className="skill-items">
                {skillGroup.items.map(skill => (
                  <span className="skill-tag" style={{ borderColor: skillGroup.color, backgroundColor: skillGroup.color + '22' }} key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
