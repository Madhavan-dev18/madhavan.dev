import { Mail, Github, Linkedin } from 'lucide-react';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="container section">
      <Reveal>
        <div className="contact-panel">
          <h2 className="contact-title">Let's build something that has to work.</h2>
          <p className="contact-sub">
            Final-year B.Sc. CS student, based in Vellore, Tamil Nadu. Looking for full-stack or
            AI engineering roles. Strongest with Django, Next.js, and finding the bug before your users do.
          </p>
          <div className="contact-links">
            <a href="mailto:madhavan.shivakumar.in@gmail.com" className="btn btn-primary">
              <Mail size={15} /> madhavan.shivakumar.in@gmail.com
            </a>
            <a href="https://linkedin.com/in/madhavan-shivakumar-dev" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Linkedin size={15} /> LinkedIn
            </a>
            <a href="https://github.com/Madhavan-dev18" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Github size={15} /> GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
