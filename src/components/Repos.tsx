const REPO_DATA = [
  { name: 'havan-transit', desc: 'Django REST bus booking engine. select_for_update() concurrency, HMAC auth, async PDF via Celery.', lang: 'Python', color: 'var(--color-yellow)' },
  { name: 'vivasayi', desc: 'Next.js 15 AI farm assistant. 23-language i18n, Gemini AI via Genkit, 0 critical CVEs.', lang: 'TypeScript', color: 'var(--color-green)' },
  { name: 'havan-vision', desc: 'Emotion-aware chat. DeepFace + DistilRoBERTa fusion, JWT auth, 73 passing tests.', lang: 'Python', color: 'var(--color-blue)' },
  { name: 'havan-stream', desc: 'HLS streaming service. Multi-profile PIN architecture, watchlist, Django REST + React 19.', lang: 'Python', color: 'var(--color-purple)' },
  { name: 'chr-system', desc: 'Character/record management system. Django backend with relational schema.', lang: 'Python', color: 'var(--color-pink)' },
];

export default function Repos() {
  return (
    <section id="repos" className="page-section" style={{ gap: '16px' }}>
      <h2 className="section-title" style={{ marginBottom: 0 }}>GitHub Repositories</h2>
      <div className="project-grid">
        {REPO_DATA.map(repo => (
          <div className="project-card-large" style={{ padding: '20px', gap: '8px' }} key={repo.name}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: repo.color, border: '2px solid var(--border-color)' }} />
              <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--fg-muted)' }}>{repo.lang}</span>
            </div>
            <div className="project-card-title" style={{ fontSize: '15px', marginBottom: '6px' }}>{repo.name}</div>
            <div style={{ fontSize: '13px', color: 'var(--fg-muted)', lineHeight: '1.5', flex: 1 }}>{repo.desc}</div>
            <a href={`https://github.com/Madhavan-dev18/${repo.name}`} target="_blank" rel="noreferrer"
              style={{ color: 'var(--color-blue)', fontSize: '13px', fontWeight: 600, marginTop: '12px', display: 'inline-block' }}>
              View Repo ↗
            </a>
          </div>
        ))}
      </div>
      <a href="https://github.com/Madhavan-dev18" target="_blank" rel="noreferrer" className="btn-primary" style={{ margin: '0 auto', marginTop: '8px' }}>
        All Repos on GitHub ↗
      </a>
    </section>
  );
}
