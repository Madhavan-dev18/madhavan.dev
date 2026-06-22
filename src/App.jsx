import React, { useState } from 'react';
import './index.css';

// Projects Data
const PROJECTS = [
  {
    id: '01', name: 'Vivasayi — AI Farm Management', date: '2025 - Present',
    live: 'https://vivasayi-wheat.vercel.app',
    tech: ['Next.js 15', 'TypeScript', 'Supabase', 'Genkit', 'React 19'], color: 'var(--color-green)',
    desc: "Engineered a production AI farm management platform with 4 distinct AI tools. Secured application against critical Next.js RCE vulnerabilities, maintaining 0 critical runtime CVEs. Integrated a 23-language i18n architecture with active Tamil and Hindi localization. Built resilient AI pipelines using exponential backoff to handle transient rate limits gracefully. Verified logic with 4/4 Vitest suites passing."
  },
  {
    id: '02', name: 'Havan Bus Booking Engine', date: '2025',
    live: 'https://havan-bus-booking-engine.vercel.app',
    tech: ['Django REST', 'Celery', 'Redis', 'PostgreSQL'], color: 'var(--color-yellow)',
    desc: "Architected a decoupled, high-concurrency REST API for bus reservations. Enforced database integrity under load using Django's select_for_update() row-level locking to serialize transactions. Hardened authentication by mitigating timing-attack vectors with constant-time HMAC comparison. Offloaded heavy PDF ticket generation to an asynchronous Celery/Redis queue. Validated with passing Pytest suites for auth flows."
  },
  {
    id: '03', name: 'Havan Vision AI Chat', date: 'Oct 2025',
    live: 'https://github.com/Madhavan-dev18/havan-vision',
    tech: ['Flask', 'DistilRoBERTa', 'DeepFace'], color: 'var(--color-blue)',
    desc: "Developed a composite emotion-aware AI chat assistant. Fused visual telemetry with text sentiment analyzed via HuggingFace DistilRoBERTa transformers, including memory-safe fallback algorithms. Engineered a hard-coded crisis interception engine bypassing the LLM during severe distress. Achieved rigorous coverage with 73 passing tests (62 Pytest, 11 Vitest) across auth, JWT refresh, and core AI flows."
  },
  {
    id: '04', name: 'Havan Streaming Service', date: 'Jun 2026',
    live: 'https://github.com/Madhavan-dev18/havan-stream',
    tech: ['Django', 'Python', 'React', 'HLS'], color: 'var(--color-purple)',
    desc: "Engineered a robust streaming service backend emphasizing multi-profile account architecture. Implemented secure PIN-profile logic consistently across Django models, views, and serializers. Validated core functionality—including authentication, secure profiles, watchlists, and viewing history—with 15 comprehensive Pytest suites."
  }
];

// Stats Data
const STATS = [
  { title: 'Critical Runtime CVEs', value: 'Zero', percent: '100%', color: 'var(--color-green)', date: 'Audited' },
  { title: 'Test Coverage', value: '96+ Passing', percent: '100%', color: 'var(--color-yellow)', date: 'Pytest & Vitest' },
  { title: 'Security & Auth', value: 'HMAC / JWT', percent: '100%', color: 'var(--color-blue)', date: 'Timing-Safe' }
];

// Experience Data
const EXP = [
  { date: 'May 2025 - Jun 2025', title: 'Python Developer Intern', desc: 'Built a Django-based bus reservation system with SQLite, implementing complete session flows from route search through booking confirmation. Designed a relational schema via Django ORM and implemented server-side form validation and CSRF protection.', label: 'Nextgen Technology Pvt. Ltd.', btnColor: 'var(--color-purple)' },
  { date: '2023 - 2026', title: 'B.Sc. Computer Science', desc: 'Thiruvalluvar University, KMG College of Arts & Science. Active placement-season candidate. Consistently developing production-ready systems outside of standard curriculum.', label: 'Education', btnColor: 'var(--color-blue)' },
  { date: 'Continuous', title: 'Certifications', desc: 'Python & OOP, Data Science & Analytics, Agile Methodology (Infosys Springboard)', label: 'Infosys', btnColor: 'var(--color-green)' }
];

// Skills Data
const SKILLS = [
  { category: 'Languages & Backend', items: ['TypeScript', 'Python', 'Next.js', 'Django REST', 'Flask', 'Celery', 'Redis'], color: 'var(--color-blue)' },
  { category: 'Data & Cloud', items: ['Supabase', 'Neon PostgreSQL', 'Firebase', 'SQLite', 'GitHub Actions'], color: 'var(--color-green)' },
  { category: 'Frontend', items: ['React 19', 'Tailwind CSS', 'Radix UI', 'Zod', 'PWA'], color: 'var(--color-purple)' },
  { category: 'AI & Vision', items: ['Google Gemini', 'Genkit', 'DeepFace', 'OpenCV', 'Prompt Eng'], color: 'var(--color-yellow)' },
  { category: 'Testing & Security', items: ['Vitest', 'RTL', 'CVE Remediation', 'Concurrency Control', 'RLS'], color: 'var(--color-pink)' }
];

export default function App() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [expandedExp, setExpandedExp] = useState(null);

  const toggleProject = (id) => setExpandedProject(prev => prev === id ? null : id);
  const toggleExp = (idx) => setExpandedExp(prev => prev === idx ? null : idx);

  return (
    <div className="dashboard-layout">
      
      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="brand">
          MADHAVAN S <div className="brand-dot"></div>
        </div>
        
        <div className="nav-group">
          <div className="nav-label">Navigation</div>
          <a href="#dashboard" className="nav-item">
            <div><span className="nav-icon">✦</span> Dashboard</div>
            <div className="nav-badge">04</div>
          </a>
          <a href="#projects" className="nav-item">
            <div><span className="nav-icon">▢</span> Projects</div>
          </a>
          <a href="#experience" className="nav-item">
            <div><span className="nav-icon">▤</span> Experience & Skills</div>
          </a>
          <a href="#repos" className="nav-item">
            <div><span className="nav-icon">◳</span> Repositories</div>
            <div className="nav-badge" style={{backgroundColor: 'var(--color-green)'}}>08</div>
          </a>
          <a href="#contact" className="nav-item">
            <div><span className="nav-icon">✉</span> Contact</div>
          </a>
        </div>

        <div className="sidebar-bottom">
          <div className="avatar"></div>
          <div className="user-info">
            <span className="user-name">Madhavan Shivakumar</span>
            <span className="user-role">AI App Builder</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">
        
        {/* TOP NAV */}
        <div className="top-nav">
          <h1 className="page-title">Portfolio</h1>
          <div className="top-actions">
            <span className="action-icon">🔍</span>
            <span className="action-icon">🔔</span>
            <button className="btn-primary" onClick={() => window.location.href="mailto:madhavantt2017@gmail.com"}>
              <span>+</span> Hire Me
            </button>
          </div>
        </div>

        <div className="scrolling-sections" style={{display: 'flex', flexDirection: 'column', gap: '80px'}}>
          
          {/* DASHBOARD SECTION */}
          <section id="dashboard" className="page-section" style={{gap: '24px'}}>
            <h2 className="section-title" style={{marginBottom: 0}}>Overview</h2>
            <div style={{fontSize: '16px', lineHeight: '1.6', color: 'var(--fg-muted)', marginBottom: '16px'}}>
              Full-stack developer specializing in secure, concurrent backend systems and applied AI integrations, built primarily with Python/Django and Next.js/TypeScript. Track record of auditing and remediating real production vulnerabilities (CVE-level RCE fixes), implementing row-level locking for race-condition-free transactions, and shipping deployed, end-to-end applications.
            </div>
            <div className="stats-row">
              {STATS.map((stat, i) => (
                <div className="stat-card" key={i}>
                  <div className="stat-title">{stat.title}</div>
                  <div className="stat-progress-bar">
                    <div className="stat-progress-fill" style={{width: stat.percent, backgroundColor: stat.color}}></div>
                  </div>
                  <div className="stat-bottom">
                    <span>{stat.date}</span>
                    <span style={{color: '#111'}}>{stat.percent}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects" className="page-section" style={{gap: '24px'}}>
            <h2 className="section-title" style={{marginBottom: 0}}>Projects</h2>
            <div className="project-grid">
              {PROJECTS.map((proj, i) => (
                <div className="project-card-large" key={i}>
                  <div className="project-card-header">
                    <div className="project-icon-large" style={{backgroundColor: proj.color}}>✦</div>
                    <div className="project-date">{proj.date}</div>
                  </div>
                  <div className="project-card-title">{proj.name}</div>
                  <div className="project-tech">
                    {proj.tech.map(t => <span className="tech-tag" style={{backgroundColor: proj.color}} key={t}>{t}</span>)}
                  </div>
                  
                  {expandedProject === proj.id && (
                    <div className="project-details" style={{marginTop: '16px', color: 'var(--fg-muted)', fontSize: '14px', lineHeight: '1.6'}}>
                      {proj.desc}
                    </div>
                  )}

                  <div style={{display: 'flex', gap: '12px', marginTop: '24px'}}>
                    <button className="btn-primary" onClick={() => toggleProject(proj.id)} style={{width: 'fit-content'}}>
                      {expandedProject === proj.id ? 'Collapse' : 'Expand Details'}
                    </button>
                    <a href={proj.live} target="_blank" rel="noreferrer" className="btn-primary" style={{backgroundColor: '#fff', width: 'fit-content'}}>View Live ↗</a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EXPERIENCE SECTION */}
          <section id="experience" className="page-section" style={{gap: '24px'}}>
            <div className="dashboard-grid">
              <div className="left-panel">
                <h2 className="section-title">Timeline</h2>
                {EXP.map((e, i) => (
                  <div className="side-card mb-4" key={i}>
                    <div className="side-card-label">
                      <span style={{fontSize: '16px'}}>📅</span> {e.date}
                    </div>
                    <div className="side-card-title">{e.title}</div>
                    
                    {expandedExp === i ? (
                      <div className="side-card-desc">
                        {e.desc}
                      </div>
                    ) : (
                      <div className="side-card-desc">{e.desc.substring(0, 100)}...</div>
                    )}
                    
                    <div style={{display: 'flex', gap: '12px'}}>
                      <div className="side-card-btn" style={{backgroundColor: e.btnColor}}>{e.label}</div>
                      <button className="side-card-btn" style={{backgroundColor: '#fff', cursor: 'pointer'}} onClick={() => toggleExp(i)}>
                        {expandedExp === i ? 'Less' : 'More Details'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="right-panel">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-container">
                  {SKILLS.map((skillGroup, i) => (
                    <div className="skill-group" key={i}>
                      <div className="skill-category">{skillGroup.category}</div>
                      <div className="skill-items">
                        {skillGroup.items.map(skill => (
                          <span className="skill-tag" style={{borderColor: skillGroup.color, backgroundColor: skillGroup.color + '22'}} key={skill}>{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* REPOS SECTION */}
          <section id="repos" className="page-section" style={{gap: '24px'}}>
            <h2 className="section-title" style={{marginBottom: 0}}>Top GitHub Repositories</h2>
            <div className="project-grid">
              {['havan-transit', 'havan-stream', 'vivasayi', 'havan-vision', 'chr-system', 'Swiggy-Clone'].map(repo => (
                <div className="project-card-large" style={{padding: '16px'}} key={repo}>
                  <div className="project-card-title" style={{fontSize: '16px', marginBottom: '8px'}}>{repo}</div>
                  <a href={`https://github.com/Madhavan-dev18/${repo}`} target="_blank" rel="noreferrer" style={{color: 'var(--color-blue)', fontSize: '14px', fontWeight: 600}}>View Repo ↗</a>
                </div>
              ))}
            </div>
            <a href="https://github.com/Madhavan-dev18" target="_blank" rel="noreferrer" className="btn-primary" style={{margin: '0 auto', marginTop: '24px'}}>View All on GitHub</a>
          </section>

          {/* CONTACT SECTION */}
          <section id="contact" className="page-section contact-section" style={{gap: '24px', alignItems: 'flex-start'}}>
            <h2 className="section-title" style={{marginBottom: 0, width: '100%'}}>Contact</h2>
            <div className="contact-card" style={{margin: '0 auto', width: '100%'}}>
              <h2>Get in Touch</h2>
              <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">✉</span>
                  <a href="mailto:madhavantt2017@gmail.com">madhavantt2017@gmail.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <a href="tel:+919840978445">+91 9840978445</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Vellore, India</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🔗</span>
                  <a href="https://linkedin.com/in/madhavan-shivakumar-dev" target="_blank" rel="noreferrer">LinkedIn Profile</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💻</span>
                  <a href="https://github.com/Madhavan-dev18" target="_blank" rel="noreferrer">github.com/Madhavan-dev18</a>
                </div>
              </div>

              <button className="btn-primary" style={{marginTop: '24px', margin: '0 auto'}} onClick={() => window.location.href="mailto:madhavantt2017@gmail.com"}>
                Send an Email
              </button>
            </div>
          </section>

        </div>
      </div>

    </div>
  );
}
