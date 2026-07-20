
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Certs from '../components/Certs';
import Contact from '../components/Contact';
import PageClient from './PageClient';

export default function Page() {
  return (
    <PageClient>
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
    </PageClient>
  );
}
