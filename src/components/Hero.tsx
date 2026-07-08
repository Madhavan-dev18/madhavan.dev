import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="top" className="container hero">
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          Open to full-stack &amp; AI engineering roles
        </span>
      </motion.div>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        Madhavan Shivakumar builds software that <em>survives contact</em> with real users.
      </motion.h1>

      <motion.p
        className="hero-sub"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        Full-stack &amp; AI engineer. I patched a critical cross-tenant PHI leak in a live EHR
        platform, closed a Next.js RCE in production, and back both fixes with real test suites —
        not just green checkmarks.
      </motion.p>

      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <a href="#projects" className="btn btn-primary">View projects</a>
        <a href="/Madhavan_S_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Résumé</a>
        <a href="#contact" className="btn btn-secondary">Get in touch</a>
      </motion.div>

      <motion.div
        className="metric-strip"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="metric">
          <span className="metric-value">100%</span>
          <span className="metric-label">Tenant isolation enforced structurally, guarded by CI regression tests</span>
        </div>
        <div className="metric">
          <span className="metric-value">100+</span>
          <span className="metric-label">Tests written across five shipped projects</span>
        </div>
        <div className="metric">
          <span className="metric-value">0</span>
          <span className="metric-label">Critical CVEs left unpatched in production</span>
        </div>
      </motion.div>
    </section>
  );
}
