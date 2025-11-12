import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ matrixEnabled = true, onToggleMatrix = () => { } }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0b0f14]/95 backdrop-blur supports-[backdrop-filter]:backdrop-blur sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <span className="text-white font-bold text-2xl">Harsh.dev</span>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-blue-400 text-3xl interactive-button transform-gpu transition-transform duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Nav - Always visible at md and up */}
        <ul className="flex max-md:hidden gap-10 text-emerald-400 font-normal text-lg items-center">
          <li><a href="#home" className="nav-link interactive-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">Home</a></li>
          <li><a href="#projects" className="nav-link interactive-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">Projects</a></li>
          <li><a href="#contact" className="nav-link interactive-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">Contact</a></li>
          <li>
            <label className="inline-flex items-center gap-2 select-none cursor-pointer interactive-button transform-gpu transition-transform duration-300 ease-in-out">
              <span className="text-sm text-gray-300">Matrix</span>
              <span className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors border border-white/30 backdrop-blur-md ${matrixEnabled ? 'bg-emerald-500/40' : 'bg-white/10'}`}>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={matrixEnabled}
                  onChange={onToggleMatrix}
                  aria-label="Toggle Matrix background"
                />
                <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${matrixEnabled ? 'translate-x-6' : 'translate-x-1'}`}></span>
              </span>
            </label>
          </li>
        </ul>

        {/* Mobile Nav - Only visible when open */}
        {open && (
          <ul className="mobile-menu flex flex-col md:hidden gap-6 text-emerald-400 font-normal text-lg absolute top-16 left-0 w-full bg-[#0b0f14]/95 p-4 z-10 rounded-b-xl border border-white/10">
            <li><a href="#home" onClick={() => setOpen(false)} className="nav-link interactive-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f14]">Home</a></li>
            <li><a href="#projects" onClick={() => setOpen(false)} className="nav-link interactive-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f14]">Projects</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)} className="nav-link interactive-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f14]">Contact</a></li>
            <li>
              <label className="inline-flex items-center gap-3 select-none cursor-pointer interactive-button transform-gpu transition-transform duration-300 ease-in-out">
                <span className="text-sm text-gray-300">Matrix</span>
                <span className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors border border-white/30 backdrop-blur-md ${matrixEnabled ? 'bg-emerald-500/40' : 'bg-white/10'}`}>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={matrixEnabled}
                    onChange={(e) => { onToggleMatrix(); }}
                    aria-label="Toggle Matrix background"
                  />
                  <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${matrixEnabled ? 'translate-x-6' : 'translate-x-1'}`}></span>
                </span>
              </label>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
