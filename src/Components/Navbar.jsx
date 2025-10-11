import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#111726]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <span className="text-white font-bold text-2xl">Harsh.dev</span>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-blue-400 text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Nav - Always visible at md and up */}
        <ul className="flex max-md:hidden gap-10 text-blue-400 font-normal text-lg items-center">
          <li><a href="#home" className="hover:text-white transition">Home</a></li>
          <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
        </ul>

        {/* Mobile Nav - Only visible when open */}
        {open && (
          <ul className="flex flex-col md:hidden gap-6 text-blue-400 font-normal text-lg absolute top-16 left-0 w-full bg-[#111726] p-4 z-10">
            <li><a href="#home" onClick={() => setOpen(false)} className="hover:text-white transition">Home</a></li>
            <li><a href="#projects" onClick={() => setOpen(false)} className="hover:text-white transition">Projects</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)} className="hover:text-white transition">Contact</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
