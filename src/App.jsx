import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import ContactSection from './Components/Contact';
import BlogSection from './Components/BlogSection';
import PortfolioFooter from './Components/Footer';
import MatrixBackground from './Components/MatrixBackground';
import { useEffect, useState } from 'react';

export default function App() {
  const [matrixEnabled, setMatrixEnabled] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('matrixEnabled');
    if (saved !== null) setMatrixEnabled(saved === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('matrixEnabled', String(matrixEnabled));
    // Toggle a CSS class on body to slightly shift theme even when disabled
    document.documentElement.classList.toggle('matrix-theme', matrixEnabled);
  }, [matrixEnabled]);

  return (
    <div className="relative z-0 min-h-screen overflow-hidden">
      <MatrixBackground enabled={matrixEnabled} />
      <div className="relative z-10">
        <Navbar matrixEnabled={matrixEnabled} onToggleMatrix={() => setMatrixEnabled((v) => !v)} />
        <section id="home">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <PortfolioFooter />
      </div>
    </div>
  );
}
