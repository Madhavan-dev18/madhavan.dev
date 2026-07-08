import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const LINKS = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav({ isDark, onToggleTheme }: { isDark: boolean; onToggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#top" className="nav-brand">Madhavan S.</a>
          <nav className="nav-links">
            {LINKS.map(l => <a key={l.href} href={l.href} className="nav-link">{l.label}</a>)}
          </nav>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button className="mobile-menu-btn" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav-panel"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            {LINKS.map(l => (
              <a key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
