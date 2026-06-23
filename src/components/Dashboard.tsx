
import { STATS } from '../data';

export default function Dashboard() {
  return (
    <section id="dashboard" className="page-section" style={{ gap: '32px', paddingTop: '40px', paddingBottom: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '64px', fontWeight: 800, lineHeight: 1, margin: 0, letterSpacing: '-0.02em' }}>
          MADHAVAN S.
        </h1>
        <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '24px', fontWeight: 600, color: 'var(--color-purple)', margin: 0 }}>
          Full-Stack Developer / AI Engineer
        </h2>
      </div>

      <div style={{ fontSize: '18px', lineHeight: '1.6', color: 'var(--fg-muted)', maxWidth: '800px', fontWeight: 500 }}>
        I build secure, concurrent backend systems and applied AI integrations. 
        Track record of remediating CVE-level vulnerabilities, enforcing row-level database locks for race-condition-free transactions, and shipping production-ready applications.
      </div>
      <div className="stats-row" style={{ marginTop: '16px' }}>
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
