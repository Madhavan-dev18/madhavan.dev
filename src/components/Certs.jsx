import React from 'react';

const CERTS = [
  {
    num: '01',
    name: 'Python & Object-Oriented Programming',
    issuer: 'Infosys Springboard',
  },
  {
    num: '02',
    name: 'Data Science & Analytics',
    issuer: 'Infosys Springboard',
  },
  {
    num: '03',
    name: 'Agile Methodology',
    issuer: 'Infosys Springboard',
  },
];

const LANGS = [
  { lang: 'Tamil', level: 'NATIVE', bar: 100 },
  { lang: 'English', level: 'PROFESSIONAL', bar: 90 },
];

export default function Certs() {
  return (
    <section className="section" id="certs">
      <div className="section-header">
        <span className="section-num">[ 05 ]</span>
        <h2 className="section-title">Certifications & Languages</h2>
        <span className="section-meta">VERIFIED CREDENTIALS</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#222' }}>
        {/* CERTS BLOCK */}
        <div style={{ background: '#0A0A0A' }}>
          <div className="certs-grid" style={{ gridTemplateColumns: '1fr' }}>
            {CERTS.map((c) => (
              <div className="cert-item" key={c.num}>
                <div className="cert-num">[ CERT {c.num} ]</div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">// {c.issuer}</div>
              </div>
            ))}
          </div>
        </div>

        {/* LANGUAGES BLOCK */}
        <div style={{ background: '#111', padding: '32px 36px', borderLeft: '1px solid #222' }}>
          <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E61919', marginBottom: '28px' }}>
            SPOKEN LANGUAGES
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {LANGS.map((l) => (
              <div key={l.lang}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: '20px', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
                    {l.lang}
                  </span>
                  <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', color: '#888', alignSelf: 'flex-end' }}>
                    {l.level}
                  </span>
                </div>
                <div style={{ height: '3px', background: '#1A1A1A', position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: 0, top: 0, bottom: 0,
                    width: `${l.bar}%`,
                    background: l.bar === 100 ? '#E61919' : '#EAEAEA',
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* Tech metrics */}
          <div style={{ marginTop: '48px' }}>
            <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E61919', marginBottom: '20px' }}>
              DEPLOYMENT METRICS
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#222' }}>
              {[
                { label: 'LIVE DEPLOYS', val: '2' },
                { label: 'CVEs PATCHED', val: '3+' },
                { label: 'TESTS PASSING', val: '73+' },
                { label: 'LANGUAGES SUPPORTED', val: '23' },
              ].map(m => (
                <div key={m.label} style={{ background: '#0D0D0D', padding: '14px 16px' }}>
                  <div style={{ fontSize: '9px', color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>{m.label}</div>
                  <div style={{ fontFamily: 'Archivo Black, sans-serif', fontSize: '26px', letterSpacing: '-0.03em', color: '#EAEAEA' }}>{m.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
