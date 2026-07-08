import { CERTS } from '../data';
import Reveal from './Reveal';

export default function Certs() {
  return (
    <section id="certificates" className="container section">
      <Reveal>
        <div className="section-head">
          <div>
            <div className="section-kicker">Credentials</div>
            <h2 className="section-title">Coursework &amp; certificates</h2>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <p className="cert-line">
          {CERTS.map((c, i) => (
            <span key={i}>
              <a href={`/Certificates/${encodeURIComponent(c.file)}`} target="_blank" rel="noreferrer">{c.name}</a>
              {i < CERTS.length - 1 ? <span className="cert-sep">·</span> : null}
            </span>
          ))}
          <span className="cert-issuer-note"> — all via {CERTS[0]?.issuer}</span>
        </p>
      </Reveal>
    </section>
  );
}
