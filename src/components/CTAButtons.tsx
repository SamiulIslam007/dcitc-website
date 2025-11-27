import React from "react";
import { ArrowRight } from "lucide-react";

const CTAButtons: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start overflow-hidden max-w-full px-2">
      <a
        href="#about"
        className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-orbitron font-bold tracking-wider hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 -skew-x-10 group"
      >
        <span className="skew-x-10 text-sm sm:text-base">EXPLORE CLUB</span>
        <ArrowRight className="w-4 h-4 skew-x-10 group-hover:translate-x-1 transition-transform" />
      </a>
      <a
        href="#join"
        className="px-6 sm:px-8 py-3 sm:py-4 border border-white/30 text-white font-orbitron font-bold tracking-wider hover:bg-white/10 transition-colors -skew-x-10"
      >
        <span className="skew-x-10 text-sm sm:text-base">JOIN MISSION</span>
      </a>
    </div>
  );
};

export default CTAButtons;
