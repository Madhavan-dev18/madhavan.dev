"use client";
import { motion } from 'motion/react';

export default function Hero() {

  const anim = (yOffset: number, delay = 0) => ({
    initial: { opacity: 0, y: yOffset },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }
  });

  return (
    <section id="top" className="container hero">
      <motion.div {...anim(14, 0)}>
        <span className="eyebrow">
          Open to full-stack &amp; AI engineering roles
        </span>
      </motion.div>

      <motion.h1
        className="hero-title"
        {...anim(22, 0.1)}
      >
        <span className="hero-name">Madhavan Shivakumar</span> builds software that <em>survives contact</em> with real users.
      </motion.h1>

      <motion.p
        className="hero-sub"
        {...anim(18, 0.2)}
      >
        Full-stack &amp; AI engineer. Five shipped projects, one live EHR platform with a patched
        cross-tenant PHI leak, a closed Next.js RCE, and real test suites behind every claim —
        not just green checkmarks.
      </motion.p>

      <motion.div
        className="hero-actions"
        {...anim(14, 0.3)}
      >
        <a href="#projects" className="btn btn-primary">View projects</a>
        <a href="/Madhavan_S_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Résumé</a>
        <a href="#contact" className="btn btn-secondary">Get in touch</a>
      </motion.div>

      <motion.div
        className="hero-context"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <strong>The standard:</strong> 100% tenant isolation enforced structurally, 100+ tests written across shipped projects, and absolutely zero critical CVEs left unpatched in production environments.
      </motion.div>
    </section>
  );
}
