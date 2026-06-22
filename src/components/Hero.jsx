import React from 'react';

const COORDS = [
  { label: 'EMAIL', value: 'madhavantt2017@gmail.com' },
  { label: 'PHONE', value: '+91 9840978445' },
  { label: 'GITHUB', value: 'Madhavan-dev18', href: 'https://github.com/Madhavan-dev18' },
  { label: 'LOCATION', value: 'Chennai / Vellore, TN' },
];

const STATUS_CELLS = [
  { label: 'STATUS', value: 'AVAILABLE FOR HIRE', dot: true, green: true },
  { label: 'STACK', value: 'PYTHON · NEXT.JS · DJANGO', dot: false },
  { label: 'FOCUS', value: 'AI APPS · FULL-STACK', dot: false },
  { label: 'GRAD', value: 'B.SC CS — 2026', dot: false },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid">

        {/* LEFT */}
        <div className="hero-left">
          <div>
            <p className="hero-tag">[ UNIT / MS-01 ] &nbsp;// FULL-STACK DEVELOPER &amp; AI BUILDER</p>
            <h1 className="hero-name">
              MADHA<br />VAN S
            </h1>
          </div>
          <div className="hero-role">
            <span className="line-accent">// DESIGNATION</span>
            FULL-STACK DEVELOPER<br />
            AI APPLICATION BUILDER<br />
            <span style={{ color: '#E61919' }}>PYTHON · DJANGO · NEXT.JS · REACT</span>
          </div>
          <div className="hero-bg-text" aria-hidden="true">MS</div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="hero-coords">
            {COORDS.map((c) => (
              <div className="coord-cell" key={c.label}>
                <div className="coord-label">{c.label}</div>
                <div className="coord-value">
                  {c.href
                    ? <a href={c.href} target="_blank" rel="noreferrer">{c.value}</a>
                    : c.value
                  }
                </div>
              </div>
            ))}
          </div>
          <p className="hero-summary">
            Full-stack developer specialising in secure, concurrent backend systems and applied AI
            integrations. Track record of auditing and remediating real CVE-level vulnerabilities,
            implementing row-level locking for race-condition-free transactions, and shipping
            deployed, end-to-end applications — not tutorials.
          </p>
        </div>

      </div>

      {/* STATUS BAR */}
      <div className="hero-status-bar">
        {STATUS_CELLS.map((s) => (
          <div className="status-cell" key={s.label}>
            {s.dot && <div className="status-dot" />}
            <span className="status-label">{s.label}</span>
            <span className="status-value" style={s.green ? { color: '#4AF626' } : {}}>
              {s.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
