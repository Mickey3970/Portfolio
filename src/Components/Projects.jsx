import React, { useState, useEffect, useRef } from 'react';

// ProjectCard component for individual project details.
const ProjectCard = ({ title, description, technologies, viewProjectLink, liveDemoLink, status, statusColor }) => (
  // Card container: dark background, rounded, padding, shadow, responsive width.
  <div className="interactive-card rounded-xl p-6 shadow-lg flex flex-col items-start w-full md:w-1/2 lg:w-2/5 xl:w-1/3 min-h-[400px] relative border border-white/20 bg-white/10 backdrop-blur-md transform-gpu focus-within:ring-2 focus-within:ring-emerald-500/40 focus-within:ring-offset-2 focus-within:ring-offset-black/30" tabIndex={0} role="group">
    {/* Status Badge (if provided) */}
    {status && (
      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}>
        {status}
      </div>
    )}

    {/* Project Title: blue text, bold, responsive font size, margin bottom. */}
    <h3 className="text-emerald-400 text-2xl md:text-3xl font-bold mb-4 leading-tight pr-20">
      {title}
    </h3>
    {/* Project Description: light gray text, responsive font size, leading (line height). */}
    <p className="text-gray-300 text-base md:text-lg mb-6 flex-grow">
      {description}
    </p>
    {/* Technologies Container: flex wrap for multiple tags, gap for spacing. */}
    <div className="flex flex-wrap gap-2 mb-6">
      {/* Map through technologies to render each tag. */}
      {technologies.map((tech, index) => (
        // Individual Technology Tag: blue background, white text, rounded, small padding.
        <span key={index} className="bg-emerald-600/70 text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full">
          {tech}
        </span>
      ))}
    </div>
    {/* Buttons Container: flex for horizontal layout, gap. */}
    <div className="flex flex-wrap gap-4 mt-auto"> {/* mt-auto pushes buttons to bottom */}
      {/* View Project Button: same style as hero section buttons. */}
      {viewProjectLink && (
        <a
          href={viewProjectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="interactive-button transform-gpu transition-transform duration-300 ease-in-out px-6 py-3 rounded-lg border border-white/30 text-white font-semibold backdrop-blur-md bg-white/10 hover:bg-white/20 shadow-lg text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/20"
        >
          View Project
        </a>
      )}
      {/* Live Demo Button: same style as hero section buttons. */}
      {liveDemoLink && (
        <a
          href={liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="interactive-button transform-gpu transition-transform duration-300 ease-in-out px-6 py-3 rounded-lg border border-white/30 text-white font-semibold backdrop-blur-md bg-white/10 hover:bg-white/20 shadow-lg text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/20"
        >
          Live Demo
        </a>
      )}
    </div>
  </div>
);

// Main App component for the Projects section.
const App = () => {
  // Define project data as an array of objects.
  const projects = [
    {
      title: "🎵 Interactive Drumkit Web App",
      description:
        "Built an interactive web-based drum machine that responds to key presses (w, a, s, d, j, k, l) to play sounds, and supports features like recording, stop/play, saving and loading beats, and BPM control. A fun and creative app showing audio handling and user interaction in the browser.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Audio API", "Responsive Design", "Firebase (Hosting)"],
      viewProjectLink: "https://github.com/Mickey3970/DrumKit", // Placeholder link
      liveDemoLink: "https://drumkit-12a38.web.app/",    // Placeholder link
      status: "Completed",
      statusColor: "bg-green-600 text-white"
    },
    {
      title: "Simon Game",
      description:
        "Recreated the classic Simon memory game and upgraded it with modern web features. Integrated Firebase Authentication (Google & Guest/Anonymous) and a global scoreboard using Firestore, enabling real-time score tracking across users. Deployed with Firebase Hosting to make it accessible on the web.",
      technologies: ["JavaScript", "HTML", "CSS", "Firebase (Auth, Firestore, Hosting)", "Responsive Design"],
      viewProjectLink: "https://github.com/Mickey3970/Simon-Game", // Placeholder link
      liveDemoLink: "https://simon-game-cec07.web.app/",    // Placeholder link
      status: "Completed",
      statusColor: "bg-green-600 text-white"
    },
    {
      title: "Disaster Response Platform (MVP)",
      description:
        "Developing an open-source platform to help coordinate resources and aid during disasters. The current MVP integrates Python backend, file uploads, and template-based frontend. Future plans include real-time maps, user dashboards, and mobile support.",
      technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "SQLite", "Bootstrap"],
      viewProjectLink: "https://github.com/Mickey3970/Disaster_Response_Platform",
      liveDemoLink: null,    // No demo yet
      status: "In Progress",
      statusColor: "bg-yellow-600 text-white"
    }
  ];

  // State to control the visibility and animation of the section.
  const [isVisible, setIsVisible] = useState(false);
  // Ref to target the section for scroll detection.
  const sectionRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    // Function to check if the section is in the viewport.
    const handleScroll = () => {
      if (sectionRef.current) {
        const topPos = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Trigger animation when the top of the section is within 80% of the viewport height.
        if (topPos < windowHeight * 0.8) {
          setIsVisible(true);
        } else {
          // Optionally, reset isVisible to false when scrolling back up
          // setIsVisible(false);
        }
      }
    };

    // Add scroll event listener when the component mounts.
    window.addEventListener('scroll', handleScroll);

    // Initial check in case the section is already in view on load.
    handleScroll();

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount.

  return (
    // Main container for the projects section: dark background, min height, centered content, padding.
    // The animation classes are removed from here.
    <div
      ref={sectionRef} // Attach the ref to this div to detect scroll
      className={`min-h-screen flex flex-col items-center p-8 font-inter bg-black/20 section-motion transform-gpu ${isVisible ? 'is-visible' : ''}`}
    >
      {/* Section Title: white text, bold, large font size, margin bottom, text-shadow for depth. */}
      <h2 className="text-white text-4xl md:text-5xl font-bold mb-12 text-center drop-shadow-lg">
        My High-Impact Projects
      </h2>

      {/* Projects Grid/Flex Container: responsive layout, gap between cards, max width.
          Dynamically apply classes for fade and slide animation based on 'isVisible' state here. */}
      <div
        className={`flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-7xl w-full section-motion transform-gpu ${isVisible ? 'is-visible' : ''}`}
      >
        {/* Map through the projects data to render each ProjectCard. */}
        {projects.map((project, index) => (
          <ProjectCard
            key={index} // Unique key for list rendering
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            viewProjectLink={project.viewProjectLink}
            liveDemoLink={project.liveDemoLink}
            status={project.status}
            statusColor={project.statusColor}
          />
        ))}
      </div>
    </div>
  );
};

export default App;