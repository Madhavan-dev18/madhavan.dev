import React, { useState, useEffect } from 'react';

export default function Nav() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="nav">
      <div className="nav-id">
        <span>[ MS-DEV18 ]</span> &nbsp;// PORTFOLIO TERMINAL &nbsp;
        <span style={{ color: '#4AF626', fontSize: '10px' }}>{time}</span>
      </div>
      <ul className="nav-links">
        {[
          ['skills',  'SKILLS'],
          ['projects','PROJECTS'],
          ['exp',     'EXPERIENCE'],
          ['repos',   'REPOS'],
          ['contact', 'CONTACT'],
        ].map(([id, label]) => (
          <li key={id}>
            <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
