import { STATS } from '../data';

export default function Dashboard() {
  return (
    <section id="dashboard" className="page-section" style={{ gap: '32px', paddingTop: '48px', paddingBottom: '20px' }}>
      
      {/* KNOCKOUT HOOK — first thing eyes land on */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '-16px' }}>
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#86efac', boxShadow: '0 0 0 3px #86efac44' }} />
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#666', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Available for placement · Open to work
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 800, lineHeight: 1, margin: 0, letterSpacing: '-0.02em' }}>
          MADHAVAN S.
        </h1>
        <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '22px', fontWeight: 600, color: 'var(--color-purple)', margin: 0 }}>
          Full-Stack Developer · AI Engineer
        </h2>
        {/* THE HOOK — one punchy memorable line */}
        <p style={{ fontSize: '18px', fontWeight: 500, color: 'var(--fg-main)', margin: 0, maxWidth: '680px', lineHeight: 1.5 }}>
          I found and patched a{' '}
          <span style={{ borderBottom: '2px solid var(--color-yellow)', paddingBottom: '1px' }}>
            critical Next.js RCE vulnerability
          </span>{' '}
          in production. Then wrote 96+ tests to make sure nothing else breaks.
        </p>
      </div>

      <div style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--fg-muted)', maxWidth: '700px' }}>
        I build secure, concurrent backend systems with Django/Python and AI-integrated frontends with Next.js/TypeScript. 
        Track record of shipping real production applications — not just tutorials.
      </div>

      {/* STAT CARDS — real variance, not 100% everything */}
      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-title">Critical CVEs Patched</div>
          <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--fg-main)', margin: '8px 0 4px' }}>2 → 0</div>
          <div className="stat-bottom"><span style={{ color: 'var(--color-green)', fontWeight: 600 }}>RCE + Auth bypass</span><span>Audited</span></div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Tests Passing</div>
          <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--fg-main)', margin: '8px 0 4px' }}>96+</div>
          <div className="stat-bottom"><span style={{ color: 'var(--color-yellow)', fontWeight: 600 }}>Pytest + Vitest</span><span>Across 4 projects</span></div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Concurrency Test</div>
          <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--fg-main)', margin: '8px 0 4px' }}>50 threads</div>
          <div className="stat-bottom"><span style={{ color: 'var(--color-blue)', fontWeight: 600 }}>0 double-bookings</span><span>Verified</span></div>
        </div>
      </div>

      {/* CTA BUTTONS */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <a href="#projects" className="btn-primary">View Projects ↓</a>
        <a href="#contact" className="btn-primary" style={{ backgroundColor: '#fff' }}>Get in Touch →</a>
        <a href="https://github.com/Madhavan-dev18" target="_blank" rel="noreferrer" className="btn-primary" style={{ backgroundColor: '#fff' }}>GitHub ↗</a>
      </div>

    </section>
  );
}
