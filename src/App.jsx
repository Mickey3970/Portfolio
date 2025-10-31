import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import ContactSection from './Components/Contact';
import BlogSection from './Components/BlogSection';
import PortfolioFooter from './Components/Footer';
import MatrixBackground from './Components/MatrixBackground';
import { useState } from 'react';

export default function App() {
  const [matrixEnabled, setMatrixEnabled] = useState(true);

  return (
    <div className="relative z-10 min-h-screen overflow-hidden">
      <MatrixBackground enabled={matrixEnabled} />
      <Navbar matrixEnabled={matrixEnabled} onToggleMatrix={() => setMatrixEnabled((v) => !v)} />
      <Hero />
      <Projects />
      <ContactSection />
      <PortfolioFooter />
    </div>
  );
}
