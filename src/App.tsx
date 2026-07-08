import { useEffect, useState } from 'react';
import './index.css';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certs from './components/Certs';
import Contact from './components/Contact';

import { Home, Folder, Briefcase, Cpu, Mail } from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'projects', 'experience', 'skills', 'contact'];
      const scrollPos = window.scrollY + 160;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="site">
      <Nav isDark={isDark} onToggleTheme={() => setIsDark(d => !d)} />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Certs />
        <Contact />
      </main>
      <footer className="footer container">
        <span>© {new Date().getFullYear()} Madhavan Shivakumar</span>
        <span>Built with React, TypeScript &amp; Motion</span>
      </footer>

      {/* Floating Bottom App Nav Bar for Mobile */}
      <nav className="bottom-nav">
        <button 
          className={`bottom-nav-item ${activeSection === 'top' ? 'active' : ''}`}
          onClick={() => scrollToSection('top')}
          aria-label="Home"
        >
          <Home size={20} />
          <span>Home</span>
        </button>
        <button 
          className={`bottom-nav-item ${activeSection === 'projects' ? 'active' : ''}`}
          onClick={() => scrollToSection('projects')}
          aria-label="Projects"
        >
          <Folder size={20} />
          <span>Projects</span>
        </button>
        <button 
          className={`bottom-nav-item ${activeSection === 'experience' ? 'active' : ''}`}
          onClick={() => scrollToSection('experience')}
          aria-label="Experience"
        >
          <Briefcase size={20} />
          <span>Timeline</span>
        </button>
        <button 
          className={`bottom-nav-item ${activeSection === 'skills' ? 'active' : ''}`}
          onClick={() => scrollToSection('skills')}
          aria-label="Skills"
        >
          <Cpu size={20} />
          <span>Skills</span>
        </button>
        <button 
          className={`bottom-nav-item ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={() => scrollToSection('contact')}
          aria-label="Contact"
        >
          <Mail size={20} />
          <span>Contact</span>
        </button>
      </nav>
    </div>
  );
}
