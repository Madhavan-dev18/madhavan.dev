import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowUpRight, Github, ShieldCheck, Sprout, Bus, MessageCircle, PlayCircle, ChevronDown } from 'lucide-react';
import { PROJECTS } from '../data';
import Reveal from './Reveal';
import { Project } from '../types';

const ICONS = { shield: ShieldCheck, sprout: Sprout, bus: Bus, chat: MessageCircle, play: PlayCircle };

function Card({ p }: { p: Project }) {
  const Icon = ICONS[p.icon];
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCentered, setIsCentered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCentered(entry.isIntersecting);
      },
      {
        rootMargin: '-15% 0px -15% 0px',
        threshold: 0.2,
      }
    );
    const el = cardRef.current;
    if (el) {
      observer.observe(el);
    }
    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, [isMobile]);

  const isActiveCard = isMobile && (isCentered || (p.id === '00' && scrollY < 120));

  return (
    <div ref={cardRef} className={`path-card accent-${p.accent} ${isActiveCard ? 'active-card' : ''}`}>
      <div className="path-card-head">
        <Icon size={22} strokeWidth={1.5} />
        <span className="project-date">{p.date}</span>
        {p.featured && <span className="project-flag">Flagship</span>}
      </div>
      <h3 className="project-name">{p.name}</h3>
      <p className={`project-desc ${expanded ? 'is-expanded' : ''}`}>{p.desc}</p>
      
      <button className="desc-toggle" onClick={() => setExpanded(e => !e)} aria-expanded={expanded}>
        {expanded ? 'Show less' : 'Read more'}
        <ChevronDown size={13} strokeWidth={2.2} className={expanded ? 'flip' : ''} />
      </button>

      {p.note && expanded && <p className="project-note">{p.note}</p>}
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
  const [filter, setFilter] = useState<'all' | 'web' | 'ai' | 'backend'>('all');
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

      {/* Horizontal scrolling filter pills for mobile */}
      <div className="project-filters">
        <button 
          className={`filter-pill ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
          aria-pressed={filter === 'all'}
        >
          All
        </button>
        <button 
          className={`filter-pill ${filter === 'web' ? 'active' : ''}`}
          onClick={() => setFilter('web')}
          aria-pressed={filter === 'web'}
        >
          Web Apps
        </button>
        <button 
          className={`filter-pill ${filter === 'ai' ? 'active' : ''}`}
          onClick={() => setFilter('ai')}
          aria-pressed={filter === 'ai'}
        >
          AI &amp; Vision
        </button>
        <button 
          className={`filter-pill ${filter === 'backend' ? 'active' : ''}`}
          onClick={() => setFilter('backend')}
          aria-pressed={filter === 'backend'}
        >
          Backend / APIs
        </button>
      </div>

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

        {PROJECTS.map((p, i) => {
          const isVisible = filter === 'all' || 
            (filter === 'web' && p.tech.some(t => t.toLowerCase().includes('react') || t.toLowerCase().includes('next.js'))) ||
            (filter === 'ai' && p.tech.some(t => t.toLowerCase().includes('gemini') || t.toLowerCase().includes('genkit') || t.toLowerCase().includes('roberta') || t.toLowerCase().includes('face-api'))) ||
            (filter === 'backend' && p.tech.some(t => t.toLowerCase().includes('django') || t.toLowerCase().includes('flask') || t.toLowerCase().includes('trpc') || t.toLowerCase().includes('celery') || t.toLowerCase().includes('redis') || t.toLowerCase().includes('postgresql')));

          if (!isVisible) return null;

          return (
            <div className={`path-row ${i % 2 === 0 ? 'path-row-left' : 'path-row-right'}`} key={p.id} style={{ '--px': `${points[i].x}%` } as React.CSSProperties}>
              <Reveal y={28}>
                <div className={`path-node accent-${p.accent}`} />
              </Reveal>
              <Reveal delay={0.08} y={28}>
                <Card p={p} />
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
