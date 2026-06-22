import React from 'react';

const LANG_COLORS = {
  TypeScript: '#3178C6',
  Python: '#3572A5',
  JavaScript: '#F7DF1E',
  '—': '#444',
};

const REPOS = [
  {
    name: 'vivasayi',
    lang: 'TypeScript',
    stars: 1,
    desc: 'AI farm management platform with Gemini, 23-language i18n, Supabase RLS. Live on Vercel.',
    updated: 'UPDATED YESTERDAY',
    href: 'https://github.com/Madhavan-dev18/vivasayi',
    score: 91,
    featured: true,
  },
  {
    name: 'havan-transit',
    lang: 'Python',
    stars: 1,
    desc: 'High-concurrency bus booking engine. Django select_for_update(), Celery, Redis, verified 50-thread locking.',
    updated: 'UPDATED YESTERDAY',
    href: 'https://github.com/Madhavan-dev18/havan-transit',
    score: 86,
    featured: true,
  },
  {
    name: 'havan-vision',
    lang: 'JavaScript',
    stars: 0,
    desc: 'Emotion-aware AI chat assistant. DeepFace + LLaMA 3.1 via Groq, 73 verified tests passing.',
    updated: 'UPDATED YESTERDAY',
    href: 'https://github.com/Madhavan-dev18/havan-vision',
    score: 88,
    featured: true,
  },
  {
    name: 'havan-stream',
    lang: 'JavaScript',
    stars: 0,
    desc: 'HLS adaptive streaming platform with Django REST, multi-profile PIN architecture, JWT refresh.',
    updated: 'UPDATED YESTERDAY',
    href: 'https://github.com/Madhavan-dev18/havan-stream',
    score: 79,
    featured: true,
  },
  {
    name: 'chr-system',
    lang: 'TypeScript',
    stars: 0,
    desc: 'TypeScript project. Work in progress.',
    updated: 'SEP 28, 2025',
    href: 'https://github.com/Madhavan-dev18/chr-system',
    score: 42,
    featured: false,
  },
  {
    name: 'Swiggy-Clone',
    lang: 'TypeScript',
    stars: 0,
    desc: 'Front-end clone project.',
    updated: 'SEP 9, 2025',
    href: 'https://github.com/Madhavan-dev18/Swiggy-Clone',
    score: null,
    featured: false,
  },
  {
    name: 'Madhavan-dev18',
    lang: '—',
    stars: 0,
    desc: 'GitHub profile README repository.',
    updated: '3 DAYS AGO',
    href: 'https://github.com/Madhavan-dev18/Madhavan-dev18',
    score: null,
    featured: false,
  },
  {
    name: 'Madhavan-Portfolio',
    lang: '—',
    stars: 0,
    desc: 'Portfolio website repository.',
    updated: 'AUG 19, 2025',
    href: 'https://github.com/Madhavan-dev18/Madhavan-Portfolio',
    score: null,
    featured: false,
  },
];

export default function Repos() {
  return (
    <section className="section" id="repos">
      <div className="section-header">
        <span className="section-num">[ 04 ]</span>
        <h2 className="section-title">GitHub Repositories</h2>
        <span className="section-meta">
          <a
            href="https://github.com/Madhavan-dev18"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            GITHUB.COM/MADHAVAN-DEV18 — 8 PUBLIC REPOS
          </a>
        </span>
      </div>

      <div className="repos-grid">
        {REPOS.map((r) => (
          <a
            className="repo-card"
            key={r.name}
            href={r.href}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="repo-card-header">
              <span className="repo-name">{r.name}</span>
              {r.stars > 0 && (
                <span className="repo-star">★ {r.stars}</span>
              )}
              {r.score !== null && (
                <span style={{
                  fontSize: '9px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: r.score >= 88 ? '#4AF626' : r.score >= 79 ? '#EAEAEA' : '#888',
                  border: '1px solid currentColor',
                  padding: '2px 6px',
                  marginLeft: r.stars > 0 ? '6px' : 'auto',
                }}>
                  {r.score}
                </span>
              )}
            </div>

            {r.featured && (
              <span style={{
                display: 'inline-block',
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#E61919',
                border: '1px solid #E61919',
                padding: '2px 6px',
                alignSelf: 'flex-start',
              }}>
                FEATURED
              </span>
            )}

            <div className="repo-lang">
              <div
                className="lang-dot"
                style={{ background: LANG_COLORS[r.lang] || '#444' }}
              />
              {r.lang}
            </div>

            <p className="repo-desc">{r.desc}</p>

            <div className="repo-updated">[ {r.updated} ]</div>
          </a>
        ))}
      </div>
    </section>
  );
}
