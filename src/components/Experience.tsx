import { EXP, SKILLS } from '../data';
import Reveal from './Reveal';

const getInitials = (label: string) => {
  if (label.toLowerCase().includes('nextgen')) return 'NG';
  if (label.toLowerCase().includes('education')) return 'ED';
  return label.substring(0, 2).toUpperCase();
};

export default function Experience() {
  return (
    <>
      <section id="experience" className="container section">
        <Reveal>
          <div className="section-head">
            <div>
              <h2 className="section-title">Experience &amp; education</h2>
            </div>
          </div>
        </Reveal>

        <div className="timeline">
          {EXP.map((e, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="timeline-item">
                <div className="timeline-date">
                  <div className="timeline-avatar">{getInitials(e.label)}</div>
                  <span className="timeline-date-text">{e.date}</span>
                </div>
                <div>
                  <h3 className="timeline-title">{e.title}</h3>
                  <div className="timeline-label">{e.label}</div>
                  <p className="timeline-desc">{e.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="skills" className="container section">
        <Reveal>
          <div className="section-head">
            <div>
              <h2 className="section-title">Skills</h2>
            </div>
          </div>
        </Reveal>

        <div className="skills-grid">
          {SKILLS.map((g, i) => (
            <Reveal key={g.category} delay={i * 0.05}>
              <div className="skill-card">
                <h3 className="skill-category">{g.category}</h3>
                <div className="skill-items">
                  {g.items.map(s => <span className="skill-tag" key={s}>{s}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
