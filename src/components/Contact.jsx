import React, { useState } from 'react';

const LINKS = [
  { type: 'EMAIL', value: 'madhavantt2017@gmail.com', href: 'mailto:madhavantt2017@gmail.com' },
  { type: 'PHONE', value: '+91 9840978445', href: 'tel:+919840978445' },
  { type: 'GITHUB', value: 'github.com/Madhavan-dev18', href: 'https://github.com/Madhavan-dev18' },
  { type: 'LINKEDIN', value: 'linkedin.com/in/madhavan-shivakumar-dev', href: 'https://linkedin.com/in/madhavan-shivakumar-dev' },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('madhavantt2017@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="section-header">
          <span className="section-num">[ 06 ]</span>
          <h2 className="section-title">Open Comms Channel</h2>
          <span className="section-meta">AVAILABLE FOR HIRE — IMMEDIATE</span>
        </div>

        <div className="contact-inner">
          <div className="contact-left">
            <h2 className="contact-headline">
              LET'S<br />
              <span>BUILD</span><br />
              SOMETHING.
            </h2>
            <p className="contact-tagline">
              Final-year CS student targeting AI/ML and full-stack engineering roles.
              I build production-grade systems with real security audits, verified metrics,
              and zero tolerance for tutorial code.
            </p>
            <button
              onClick={copyEmail}
              style={{
                marginTop: '32px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'transparent',
                border: '1px solid #E61919',
                color: copied ? '#4AF626' : '#E61919',
                padding: '12px 24px',
                fontFamily: 'inherit',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {copied ? '[ ✓ COPIED ]' : '[ COPY EMAIL ]'}
            </button>
          </div>

          <div className="contact-right">
            {LINKS.map((l) => (
              <a
                className="contact-link-row"
                key={l.type}
                href={l.href}
                target={l.type !== 'EMAIL' && l.type !== 'PHONE' ? '_blank' : undefined}
                rel={l.type !== 'EMAIL' && l.type !== 'PHONE' ? 'noreferrer' : undefined}
              >
                <span className="cl-type">{l.type}</span>
                <span className="cl-value">{l.value}</span>
                <span className="cl-arrow">→</span>
              </a>
            ))}

            {/* Availability block */}
            <div style={{
              marginTop: 'auto',
              paddingTop: '32px',
              borderTop: '1px solid #222',
            }}>
              <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#555', marginBottom: '16px' }}>
                [ AVAILABILITY STATUS ]
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#222' }}>
                {[
                  { label: 'FULL-TIME', status: 'OPEN', green: true },
                  { label: 'INTERNSHIP', status: 'OPEN', green: true },
                  { label: 'FREELANCE', status: 'SELECTIVE', green: false },
                  { label: 'RELOCATION', status: 'WILLING', green: false },
                ].map(s => (
                  <div key={s.label} style={{ background: '#0D0D0D', padding: '12px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555' }}>{s.label}</span>
                    <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', color: s.green ? '#4AF626' : '#EAEAEA' }}>{s.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-left">© 2026 MADHAVAN S // ALL RIGHTS RESERVED</div>
        <div className="footer-center">MS-DEV18</div>
        <div className="footer-right">
          BUILT WITH <span>REACT</span> // INDUSTRIAL BRUTALISM UI
        </div>
      </footer>
    </>
  );
}
