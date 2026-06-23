
import { Award } from 'lucide-react';
import { CERTS } from '../data';

export default function Certs() {
  return (
    <section id="certificates" className="page-section" style={{ gap: '16px' }}>
      <h2 className="section-title" style={{ marginBottom: 0 }}>Certificates</h2>
      <div className="slider-container">
        <div className="slider-track">
          {[...CERTS, ...CERTS].map((cert, i) => (
            <div className="slider-card" key={i}>
              <div style={{ marginBottom: '16px', color: 'var(--color-yellow)' }}><Award size={32} /></div>
              <div className="slider-card-title">{cert.name}</div>
              <div className="slider-card-issuer">{cert.issuer}</div>
              <a href={`/Certificates/${encodeURIComponent(cert.file)}`} target="_blank" rel="noreferrer" className="slider-card-btn">
                View Certificate ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
