import React, { useState, useEffect } from 'react';

// App component, which is the main component for this React application.
const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Array of texts to cycle through
  const texts = [
    'Aspiring Developer',
    'Problem Solver',
    'Computer Science Student',
    'Blog Writer',
    'Tech Explorer'
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting phase
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100); // Faster deleting, slower typing

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  return (
    // Main container for the profile card, styled with Tailwind CSS for dark background,
    // centered content, minimum height, and Inter font.
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 font-inter">
      {/* Profile picture/initials container. Uses a blue background, rounded shape,
          and centers the text "JP". */}
      <div className="w-32 h-32 bg-emerald-600 rounded-full flex items-center justify-center mb-6 animate-pulse">
        <span className="text-white text-5xl font-bold">H</span>
      </div>

      {/* Greeting and Name section. "Hi, I'm" is white, and "Harsh" is blue. */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">
        Hi, I'm <span className="text-emerald-400">Harsh</span>
      </h1>

      {/* Typewriter effect container */}
      <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-6 text-center h-12 flex items-center">
        <span className="relative">
          {displayText}
          <span className="absolute -right-1 top-0 w-0.5 h-full bg-emerald-400 animate-pulse"></span>
        </span>
      </div>

      {/* Description paragraph. Centered, responsive text size, and gray color. */}
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl leading-relaxed mb-8">
        Coding, learning, and documenting my journey — one project at a time
      </p>

      {/* Buttons container. Uses flexbox for horizontal layout on larger screens
          and vertical stack on small screens, with spacing. */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* "Explore My Projects" button. Blue background, white text, rounded corners,
            padding, and hover effect. */}
        <a
          href="https://github.com/Mickey3970"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg border border-white/30 text-white font-semibold backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg text-center"
        >
          Explore My Projects
        </a>

        {/* "Download Resume" button. White border, blue text, rounded corners,
            padding, and hover effect. */}
        <a
          href="/Resume.pdf"
          download="Harsh_Kumar_Singh_Resume.pdf"
          className="px-6 py-3 rounded-lg border border-white/30 text-white font-semibold backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg text-center"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;