import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowUpRight, Github, ShieldCheck, Sprout, Bus, MessageCircle, PlayCircle } from 'lucide-react';
import { PROJECTS } from '../data';
import Reveal from './Reveal';
import { Project } from '../types';

const ICONS = { shield: ShieldCheck, sprout: Sprout, bus: Bus, chat: MessageCircle, play: PlayCircle };

function Card({ p }: { p: Project }) {
  const Icon = ICONS[p.icon];
  return (
    <div className={`path-card accent-${p.accent}`}>
      <div className="path-card-head">
        <Icon size={22} strokeWidth={1.5} />
        <span className="project-date">{p.date}</span>
        {p.featured && <span className="project-flag">Flagship</span>}
      </div>
      <h3 className="project-name">{p.name}</h3>
      <p className="project-desc">{p.desc}</p>
      {p.note && <p className="project-note">{p.note}</p>}
      <div className="project-tech">
        {p.tech.map(t => <span className="tech-pill" key={t}>{t}</span>)}
      </div>
      <div className="project-link-row">
        <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-link">
          {p.live.includes('github.com') ? 'View source' : 'View live'}
          <ArrowUpRight size={15} strokeWidth={2} />
        </a>
        {!p.live.includes('github.com') && (
          <a href={p.repo} target="_blank" rel="noopener noreferrer" className="project-link">
            <Github size={15} strokeWidth={2} /> Source
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 0.75', 'end 0.35'] });
  const pathLength = useSpring(scrollYProgress, { stiffness: 90, damping: 28, restDelta: 0.001 });

  const n = PROJECTS.length;
  const rowH = 100 / n;
  const points = PROJECTS.map((_, i) => {
    const y = rowH * i + rowH / 2;
    const x = i % 2 === 0 ? 18 : 82;
    return { x, y };
  });

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midY = (prev.y + curr.y) / 2;
    d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`;
  }

  return (
    <section id="projects" className="container section">
      <Reveal>
        <div className="section-head">
          <div>
            <div className="section-kicker">Selected work</div>
            <h2 className="section-title">Projects</h2>
          </div>
          <p className="section-note">Ranked by how much real engineering is under the hood, not how recent they are.</p>
        </div>
      </Reveal>

      <div className="path-track" ref={trackRef}>
        <svg className="path-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d={d} className="path-track-bg" vectorEffect="non-scaling-stroke" fill="none" />
          <motion.path
            d={d}
            className="path-track-fg"
            vectorEffect="non-scaling-stroke"
            fill="none"
            style={{ pathLength }}
          />
        </svg>

        {PROJECTS.map((p, i) => (
          <div className={`path-row ${i % 2 === 0 ? 'path-row-left' : 'path-row-right'}`} key={p.id} style={{ '--px': `${points[i].x}%` } as React.CSSProperties}>
            <Reveal y={28}>
              <div className={`path-node accent-${p.accent}`} />
            </Reveal>
            <Reveal delay={0.08} y={28}>
              <Card p={p} />
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
