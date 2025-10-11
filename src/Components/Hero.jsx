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
      <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mb-6 animate-pulse">
        <span className="text-white text-5xl font-bold">H</span>
      </div>

      {/* Greeting and Name section. "Hi, I'm" is white, and "Harsh" is blue. */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">
        Hi, I'm <span className="text-blue-500">Harsh</span>
      </h1>

      {/* Typewriter effect container */}
      <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-6 text-center h-12 flex items-center">
        <span className="relative">
          {displayText}
          <span className="absolute -right-1 top-0 w-0.5 h-full bg-blue-400 animate-pulse"></span>
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
          className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transform hover:scale-105 text-center"
        >
          Explore My Projects
        </a>

        {/* "Download Resume" button. White border, blue text, rounded corners,
            padding, and hover effect. */}
        <a 
          href="/resume.pdf" 
          download="Harsh_Kumar_Singh_Resume.pdf"
          className="border border-blue-600 text-blue-500 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transform hover:scale-105 text-center"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;