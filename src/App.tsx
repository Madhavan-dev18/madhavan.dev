import { useEffect, useState } from 'react';
import './index.css';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certs from './components/Certs';
import Contact from './components/Contact';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDark]);

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
    </div>
  );
}
