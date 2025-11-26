"use client";
import React from "react";

const CTASection: React.FC = () => {
  return (
    <section
      id="join"
      className="py-32 relative overflow-hidden flex items-center justify-center border-t border-white/5"
    >
      <div className="absolute inset-0 bg-white/5"></div>
      <div className="relative z-10 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
          READY TO <span className="text-slate-400">INITIATE?</span>
        </h2>
        <p className="text-slate-400 font-rajdhani text-xl mb-10 max-w-xl mx-auto">
          Join the elite tech enthusiasts of Dhaka College.
        </p>
        <button className="px-12 py-5 bg-white text-black font-orbitron font-bold text-lg tracking-wider hover:scale-105 transition-transform -skew-x-10">
          <span className="skew-x-10">APPLY NOW</span>
        </button>
      </div>
    </section>
  );
};

export default CTASection;
