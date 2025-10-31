import React from 'react';

const PortfolioFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-slate-900 text-white">
      {/* Vision Statement Section */}
      <div className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Pioneering Tomorrow: My Evolving Tech Vision
          </h2>

          <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p className="max-w-4xl mx-auto">
              My commitment extends beyond current projects; it's about relentlessly pushing boundaries and
              transforming ideas into impactful solutions. I'm actively charting a course towards the technological
              frontiers that will define tomorrow.
            </p>

            <p className="max-w-4xl mx-auto">
              My goal is to be at the forefront of technological innovation, turning complex challenges
              into elegant, high-value solutions. Let's build the future, together!
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-slate-900 py-6 px-6 border-t border-gray-700">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Harsh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;