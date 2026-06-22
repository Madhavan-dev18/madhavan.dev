import React, { useState } from 'react';

const PROJECTS = [
  {
    id: '01',
    name: 'VIVASAYI',
    subtitle: 'AI Farm Management Platform',
    year: '2025 — PRESENT',
    live: 'https://vivasayi-wheat.vercel.app',
    repo: 'https://github.com/Madhavan-dev18/vivasayi',
    tech: ['Next.js 15', 'TypeScript', 'React 19', 'Supabase', 'Google Gemini', 'Genkit', 'Vitest', 'RLS'],
    bullets: [
      'Production-deployed farm management platform with 4 AI-backed tools (crop diagnosis, advisory, record keeping) for Indian farmers, securing all user data with Supabase row-level security.',
      'Identified and resolved a critical Next.js RCE vulnerability (GHSA-9qr9-h5gf-34mp) and a jsPDF dependency CVE chain through full security audit — from multiple critical CVEs to zero.',
      'Engineered AI call resilience with exponential backoff, automatic fallback to secondary Gemini model, and quota-type detection to distinguish transient rate limits from daily caps.',
      'Architected a 23-language i18n system (React context + custom hook) with active translation coverage across Tamil, Hindi, and 21 other Indian languages.',
    ],
    score: 91,
  },
  {
    id: '02',
    name: 'HAVAN TRANSIT',
    subtitle: 'High-Concurrency Bus Booking Engine',
    year: '2025',
    live: 'https://havan-bus-booking-engine.vercel.app',
    repo: 'https://github.com/Madhavan-dev18/havan-transit',
    tech: ['Django REST', 'Celery', 'Redis', 'Neon PostgreSQL', 'React', 'GitHub Actions', 'ReportLab'],
    bullets: [
      'Decoupled, production-style bus reservation REST API using Django select_for_update() row-level locking to serialize concurrent seat-booking transactions at the database level.',
      'Validated locking strategy with 50-thread simultaneous booking test: exactly 1 transaction succeeded, 0 double-bookings — verified and documented as honest performance metric.',
      'Closed a timing-attack vector by switching to hmac.compare_digest() for constant-time internal token comparison, eliminating statistical side-channel exposure.',
      'Offloaded PDF ticket generation to async Celery + Redis pipeline, decoupling slow rendering from request/response cycle to keep the booking API responsive.',
    ],
    score: 86,
  },
  {
    id: '03',
    name: 'HAVAN VISION',
    subtitle: 'Emotion-Aware AI Chat Assistant',
    year: '2025',
    live: null,
    repo: 'https://github.com/Madhavan-dev18/havan-vision',
    tech: ['Flask', 'DeepFace', 'OpenCV', 'React 19', 'HuggingFace', 'Groq', 'LLaMA 3.1', 'JWT', 'SQLAlchemy'],
    bullets: [
      'Full-stack AI chat assistant that fuses real-time webcam emotion data (face-api.js SSD MobileNet V1) with LLaMA 3.1 inference via Groq to generate emotion-aware responses.',
      'Production-grade backend with app factory pattern, JWT access/refresh tokens (header-based, cross-origin safe), SQLAlchemy, HuggingFace transformers with rule-based fallback.',
      '62 backend pytest + 11 frontend Vitest tests verified and passing; resolved live deployment issues including CORS regex for Vercel preview URLs and JWT sub string-type enforcement.',
      'Resolved cross-origin deployment failures caused by SameSite cookie blocking by migrating to Authorization header-based JWT — fully documented debugging session.',
    ],
    score: 88,
  },
  {
    id: '04',
    name: 'HAVAN STREAM',
    subtitle: 'Adaptive Streaming Platform',
    year: '2025',
    live: null,
    repo: 'https://github.com/Madhavan-dev18/havan-stream',
    tech: ['Django REST', 'React 19', 'HLS', 'JWT', 'Vite', 'SQLite', 'PIN Auth'],
    bullets: [
      'Full Django REST + React/Vite streaming platform with HLS adaptive bitrate, multi-profile PIN architecture, and JWT refresh rotation.',
      'Implemented PIN-based profile switching system with per-profile content isolation and JWT token rotation on every profile switch.',
      'Added comprehensive test suite with verified passing coverage across stream endpoints, profile management, and PIN authentication flows.',
    ],
    score: 79,
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="section" id="projects">
      <div className="section-header">
        <span className="section-num">[ 02 ]</span>
        <h2 className="section-title">Engineering Projects</h2>
        <span className="section-meta">FIELD DEPLOYMENTS — {PROJECTS.length} UNITS OPERATIONAL</span>
      </div>

      <div className="projects-list">
        {PROJECTS.map((p) => (
          <div
            className="project-card"
            key={p.id}
            onClick={() => setExpanded(expanded === p.id ? null : p.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="project-num">{p.id}</div>
            <div className="project-content">
              <div className="project-header">
                <span className="project-name">{p.name}</span>
                <span style={{ fontSize: '12px', color: '#888', fontFamily: 'inherit' }}>
                  {p.subtitle}
                </span>
                <span className="project-year">{p.year}</span>
                <span style={{
                  fontSize: '9px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: p.score >= 88 ? '#4AF626' : p.score >= 80 ? '#EAEAEA' : '#888',
                  border: '1px solid currentColor',
                  padding: '2px 8px',
                  marginLeft: 'auto',
                }}>
                  SCORE {p.score}/100
                </span>
              </div>
              <div className="project-tech">
                {p.tech.map(t => (
                  <span className="tech-badge" key={t}>{t}</span>
                ))}
              </div>
              {/* Always show first 2, expand for more */}
              <ul className="project-bullets">
                {p.bullets.slice(0, expanded === p.id ? p.bullets.length : 2).map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              {p.bullets.length > 2 && (
                <div style={{
                  marginTop: '12px',
                  fontSize: '9px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: '#E61919',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}>
                  {expanded === p.id ? '[ — COLLAPSE ]' : `[ + ${p.bullets.length - 2} MORE ]`}
                </div>
              )}
            </div>
            <div className="project-links">
              {p.live && (
                <a
                  className="project-link"
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  onClick={e => e.stopPropagation()}
                >
                  <span className="link-icon">↗</span>
                  <span>LIVE</span>
                </a>
              )}
              <a
                className="project-link"
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.stopPropagation()}
              >
                <span className="link-icon">⌥</span>
                <span>REPO</span>
              </a>
              {!p.live && (
                <div className="project-link" style={{ color: '#444', cursor: 'default' }}>
                  <span className="link-icon" style={{ fontSize: '12px' }}>○</span>
                  <span>OFFLINE</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
