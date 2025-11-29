"use client";
import React from "react";

const CTASection: React.FC = () => {
  return (
    <section
      id="join"
      className="py-20 sm:py-32 relative overflow-hidden flex items-center justify-center border-t border-white/5"
    >
      <div className="absolute inset-0 bg-white/5"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-full">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-orbitron font-bold text-white mb-4 sm:mb-6">
          READY TO <span className="text-slate-400">INITIATE?</span>
        </h2>

        <p className="text-slate-400 font-rajdhani text-base sm:text-xl mb-8 sm:mb-10 max-w-xl mx-auto px-4">
          Join the elite tech enthusiasts of Dhaka College.
        </p>

        <button className=" group relative inline-flex items-center justify-center px-12 py-5 font-orbitron font-bold tracking-wider text-lg text-[#0A0A0A] bg-[#F3DF6C] -skew-x-12 shadow-[0_0_25px_rgba(243,223,108,0.35)] transition-all duration-300 ease-out hover:shadow-[0_0_40px_rgba(243,223,108,0.55)] hover:bg-[#FFE97F] active:scale-[0.97] mb-16 cursor-pointer">
          <span className="skew-x-12">APPLY NOW</span>
        </button>
      </div>
    </section>
  );
};

export default CTASection;
