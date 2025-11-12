import React from 'react';

const PortfolioFooter = () => {
  return (
    <footer className="text-white bg-black/20">
      {/* Vision Statement Section */}
      <div className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md px-8 sm:px-12 py-12 text-center shadow-[0_30px_80px_-40px_rgba(15,23,42,0.65)]">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
              Pioneering Tomorrow: My Evolving Tech Vision
            </h2>

            <div className="space-y-8 text-lg md:text-xl text-white/90 leading-relaxed">
              <p>
                My commitment extends beyond current projects; it's about relentlessly pushing boundaries and
                transforming ideas into impactful solutions. I'm actively charting a course towards the technological
                frontiers that will define tomorrow.
              </p>

              <p>
                My goal is to be at the forefront of technological innovation, turning complex challenges
                into elegant, high-value solutions. Let's build the future, together!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="py-6 px-6 border-t border-white/10 bg-black/30">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-6 py-3 text-center shadow-[0_10px_30px_-20px_rgba(15,23,42,0.55)]">
            <p className="text-gray-200 text-sm">
              © 2025 Harsh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;