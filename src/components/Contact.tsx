
import { Mail, MapPin, Link as LinkIcon, Code } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="page-section contact-section" style={{ gap: '16px', alignItems: 'flex-start' }}>
      <h2 className="section-title" style={{ marginBottom: 0, width: '100%' }}>Contact</h2>
      <div className="contact-card" style={{ margin: '0 auto', width: '100%' }}>
        <h2>Ask me about the concurrency proof</h2>
        <p>Final-year B.Sc. CS student at KMG College, Vellore. Looking for full-stack or AI engineering roles starting mid-2026. Strongest in Django + React.</p>
        
        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-icon"><Mail size={18} /></span>
            <a href="mailto:madhavantt2017@gmail.com">madhavantt2017@gmail.com</a>
          </div>

          <div className="contact-item">
            <span className="contact-icon"><MapPin size={18} /></span>
            <span>Vellore, India</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon"><LinkIcon size={18} /></span>
            <a href="https://linkedin.com/in/madhavan-shivakumar-dev" target="_blank" rel="noreferrer">LinkedIn Profile</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon"><Code size={18} /></span>
            <a href="https://github.com/Madhavan-dev18" target="_blank" rel="noreferrer">GitHub Profile</a>
          </div>
        </div>
      </div>
    </section>
  );
}
