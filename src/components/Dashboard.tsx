
import { STATS } from '../data';

export default function Dashboard() {
  return (
    <section id="dashboard" className="page-section" style={{ gap: '16px' }}>
      <h2 className="section-title" style={{ marginBottom: 0 }}>Overview</h2>
      <div style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--fg-muted)', marginBottom: '16px' }}>
        Full-stack developer specializing in secure, concurrent backend systems and applied AI integrations, built primarily with Python/Django and Next.js/TypeScript. Track record of auditing and remediating real production vulnerabilities (CVE-level RCE fixes), implementing row-level locking for race-condition-free transactions, and shipping deployed, end-to-end applications.
      </div>
      <div className="stats-row">
        {STATS.map((stat, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-title">{stat.title}</div>
            <div className="stat-progress-bar">
              <div className="stat-progress-fill" style={{ width: stat.percent, backgroundColor: stat.color }}></div>
            </div>
            <div className="stat-bottom">
              <span>{stat.date}</span>
              <span style={{ color: '#111' }}>{stat.percent}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
