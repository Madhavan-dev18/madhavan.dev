import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import './index.css';

import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Repos from './components/Repos';
import Certs from './components/Certs';
import Contact from './components/Contact';

export default function App() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let effect: any = null;
    let isMounted = true;
    
    if (vantaRef.current) {
      Promise.all([
        import('three'),
        import('vanta/dist/vanta.topology.min')
      ]).then(([THREE, VantaModule]) => {
        if (!isMounted) return;
        const TOPOLOGY = VantaModule.default || VantaModule;
        effect = TOPOLOGY({
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
        });
      }).catch(err => console.error("Vanta load error:", err));
    }
    
    return () => {
      isMounted = false;
      if (effect) effect.destroy();
    }
  }, []);

  return (
    <>
      <div className="vanta-bg" ref={vantaRef}></div>
      <div className="dashboard-layout">
        {/* TOPBAR */}
        <header className="topbar">
          <div className="brand" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '8px', overflow: 'hidden', display: 'flex',
                alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-brutal)'
              }}>
                <img src="/logo.webp" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              MADHAVAN S.
            </div>
            
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ color: '#fff', fontSize: '24px', background: 'transparent', border: 'none', cursor: 'pointer' }}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          
          <nav className={`nav-group ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#dashboard" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Overview</a>
            <a href="#projects" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#experience" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Experience</a>
            <a href="#skills" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#repos" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Repos</a>
            <a href="#certificates" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Certs</a>
            <a href="#contact" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Contact</a>
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
          <div style={{ fontSize: '13px', color: 'var(--fg-muted)', marginBottom: '8px' }}>madhavan-dev18 / portfolio</div>
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
