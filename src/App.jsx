import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import ContactSection from './Components/Contact';
import BlogSection from './Components/BlogSection';
import PortfolioFooter from './Components/Footer';
export default function App() {
  return (
    <div>
      <Navbar />
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
  );
}
