
import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-ignore
import TOPOLOGY from 'vanta/dist/vanta.topology.min';
import { Search, Bell } from 'lucide-react';
import './index.css';

import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Repos from './components/Repos';
import Certs from './components/Certs';
import Contact from './components/Contact';

export default function App() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(TOPOLOGY({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xb794f4,
        backgroundColor: 0xfcfaf8
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    }
  }, [vantaEffect]);

  return (
    <>
      <div className="vanta-bg" ref={vantaRef}></div>
      <div className="dashboard-layout">
        {/* TOPBAR */}
        <header className="topbar">
          <div className="brand">
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-brutal)'
            }}>
              <img src="/logo.png" alt="Logo" style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: 'scale(1.3)'
              }} />
            </div>
            MADHAVAN S.
          </div>
          
          <nav className="nav-group">
            <a href="#dashboard" className="nav-item">Overview</a>
            <a href="#projects" className="nav-item">Projects</a>
            <a href="#experience" className="nav-item">Experience</a>
            <a href="#skills" className="nav-item">Skills</a>
            <a href="#repos" className="nav-item">Repos</a>
            <a href="#certificates" className="nav-item">Certs</a>
            <a href="#contact" className="nav-item">Contact</a>
          </nav>
          
          <div className="topbar-right">
            <div className="user-info">
              <span className="user-name">Madhavan</span>
              <span className="user-role">Full-Stack Dev</span>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="main-content">
          <div className="top-nav">
            <div style={{fontWeight: 600, fontSize: '14px', letterSpacing: '0.05em'}}>MADHAVAN-PORTFOLIO / SYS-STATUS: ONLINE</div>
            <div style={{display: 'flex', gap: '16px'}}>
              <Search size={20} />
              <Bell size={20} />
            </div>
          </div>
          
          <Dashboard />
          <Projects />
          <Experience />
          <Repos />
          <Certs />
          <Contact />
          
        </main>
      </div>
    </>
  );
}
