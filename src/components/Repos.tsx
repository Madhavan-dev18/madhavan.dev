

export default function Repos() {
  return (
    <section id="repos" className="page-section" style={{ gap: '16px' }}>
      <h2 className="section-title" style={{ marginBottom: 0 }}>Top GitHub Repositories</h2>
      <div className="project-grid">
        {['havan-transit', 'havan-stream', 'vivasayi', 'havan-vision', 'chr-system'].map(repo => (
          <div className="project-card-large" style={{ padding: '16px' }} key={repo}>
            <div className="project-card-title" style={{ fontSize: '16px', marginBottom: '8px' }}>{repo}</div>
            <a href={`https://github.com/Madhavan-dev18/${repo}`} target="_blank" rel="noreferrer" style={{ color: 'var(--color-blue)', fontSize: '14px', fontWeight: 600 }}>View Repo ↗</a>
          </div>
        ))}
      </div>
      <a href="https://github.com/Madhavan-dev18" target="_blank" rel="noreferrer" className="btn-primary" style={{ margin: '0 auto', marginTop: '24px' }}>View All on GitHub</a>
    </section>
  );
}
