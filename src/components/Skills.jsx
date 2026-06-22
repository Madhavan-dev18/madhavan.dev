import React from 'react';

const SKILL_CATEGORIES = [
  {
    label: 'LANGUAGES & BACKEND',
    primary: ['TypeScript', 'Python', 'JavaScript ES6+'],
    secondary: ['Next.js App Router', 'Django REST Framework', 'Flask', 'Celery', 'Redis', 'REST APIs'],
  },
  {
    label: 'DATA & CLOUD',
    primary: ['Supabase', 'PostgreSQL', 'Redis'],
    secondary: ['Neon PostgreSQL', 'Firebase', 'SQLite', 'GitHub Actions CI', 'Vercel', 'Render'],
  },
  {
    label: 'FRONTEND',
    primary: ['React 19', 'Next.js 15', 'Tailwind CSS'],
    secondary: ['Radix UI', 'shadcn/ui', 'React Hook Form', 'Zod', 'PWA', 'HLS Streaming'],
  },
  {
    label: 'AI & VISION',
    primary: ['Google Gemini', 'Genkit', 'DeepFace'],
    secondary: ['OpenCV', 'HuggingFace Transformers', 'LLaMA 3.1', 'Prompt Engineering', 'Groq'],
  },
  {
    label: 'TESTING & SECURITY',
    primary: ['Vitest', 'pytest', 'CVE Remediation'],
    secondary: ['React Testing Library', 'Django TransactionTestCase', 'Concurrency Control', 'Row-Level Security', 'HMAC Auth'],
  },
  {
    label: 'TOOLS & WORKFLOW',
    primary: ['Git', 'GitHub', 'VS Code'],
    secondary: ['GitHub Actions', 'Docker-ready', 'JWT Auth', 'CORS', 'CSRF Protection', 'Celery Beat'],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-header">
        <span className="section-num">[ 01 ]</span>
        <h2 className="section-title">Technical Arsenal</h2>
        <span className="section-meta">REV 2.6 — UNIT / D-01 — CLASSIFIED</span>
      </div>
      <div className="skills-grid">
        {SKILL_CATEGORIES.map((cat) => (
          <div className="skill-category" key={cat.label}>
            <div className="skill-cat-label">{cat.label}</div>
            <div className="skill-tags">
              {cat.primary.map(t => (
                <span className="skill-tag primary" key={t}>{t}</span>
              ))}
              {cat.secondary.map(t => (
                <span className="skill-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
