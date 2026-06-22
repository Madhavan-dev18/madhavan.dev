import React from 'react';

const EXPERIENCE = [
  {
    company: 'NEXTGEN TECHNOLOGY PVT. LTD.',
    shortName: 'NEXTGEN\nTECH',
    role: 'Python Developer Intern',
    location: 'Vellore, India',
    date: 'MAY 2025 — JUN 2025',
    type: 'INTERNSHIP',
    bullets: [
      'Built a Django-based bus reservation system with SQLite, implementing complete session flows from route search through booking confirmation for a multi-stage passenger workflow.',
      'Designed a relational schema via Django ORM to map bus schedules, seat inventory, and passenger records, supporting accurate real-time seat availability tracking.',
      'Implemented server-side form validation and CSRF protection across all booking endpoints, closing edge cases including duplicate submissions and invalid seat selections.',
    ],
  },
];

const EDUCATION = {
  institution: 'KMG COLLEGE OF ARTS & SCIENCE',
  shortName: 'KMG\nCOLLEGE',
  degree: 'B.Sc. Computer Science',
  affiliation: 'Thiruvalluvar University',
  location: 'Vellore, India',
  date: '2023 — 2026',
  type: 'GRADUATING',
};

export default function Experience() {
  return (
    <section className="section" id="exp">
      <div className="section-header">
        <span className="section-num">[ 03 ]</span>
        <h2 className="section-title">Experience & Education</h2>
        <span className="section-meta">FIELD ASSIGNMENTS — CLEARANCE LEVEL 3</span>
      </div>

      {/* WORK EXPERIENCE */}
      {EXPERIENCE.map((exp) => (
        <div className="experience-grid" key={exp.company} style={{ borderBottom: '1px solid #222' }}>
          <div className="exp-sidebar">
            <div className="exp-timeline-marker">
              <div className="exp-date">{exp.date}</div>
              <div className="exp-company-label">{exp.shortName}</div>
              <span className="exp-type-badge">{exp.type}</span>
            </div>
          </div>
          <div className="exp-main">
            <h3 className="exp-title">{exp.role}</h3>
            <div className="exp-location">{exp.company} / {exp.location}</div>
            <ul className="exp-bullets">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* EDUCATION */}
      <div className="experience-grid">
        <div className="exp-sidebar">
          <div className="exp-timeline-marker">
            <div className="exp-date">{EDUCATION.date}</div>
            <div className="exp-company-label">{EDUCATION.shortName}</div>
            <span className="exp-type-badge" style={{ color: '#4AF626', borderColor: '#4AF626' }}>
              {EDUCATION.type}
            </span>
          </div>
        </div>
        <div className="exp-main">
          <h3 className="exp-title">{EDUCATION.degree}</h3>
          <div className="exp-location">{EDUCATION.institution} / {EDUCATION.location}</div>
          <ul className="exp-bullets">
            <li>
              Affiliated with {EDUCATION.affiliation} — Final year student on track to graduate in 2026.
            </li>
            <li>
              Active placement season candidate targeting AI/ML engineering and full-stack developer roles.
            </li>
            <li>
              Portfolio of 4+ production-grade projects with verified metrics, live deployments, and full test coverage across Python and TypeScript stacks.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
