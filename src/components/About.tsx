import React from "react";
import { CLUB } from "../constants";
import SectionTitle from "./UI/SectionTitle";

const MISSION_STATEMENT: string = CLUB.MISSION.STATEMENT;

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-24 bg-black relative border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-full sm:max-w-xl md:max-w-4xl mx-auto px-4 sm:px-6 md:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Mission Protocol"
          subtitle="Core objectives of the DCITC initiative"
        />

        <div className="glass-panel p-6 sm:p-8 md:p-12 border-l-2 sm:border-l-4 border-l-white relative overflow-hidden group rounded-lg">
          <div className="absolute top-0 right-0 p-2 sm:p-4 opacity-20">
            <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 sm:w-20 sm:h-20"
            >
              <path d="M0 0H100V100H0V0Z" fill="url(#grid-pattern)" />
              <defs>
                <pattern
                  id="grid-pattern"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M10 0L0 0L0 10"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
            </svg>
          </div>

          <p className="font-rajdhani text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center leading-normal sm:leading-relaxed text-slate-200 relative px-4 sm:px-6">
            <span
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-500 absolute top-0 left-0 sm:left-4 md:left-6 leading-none"
              style={{ transform: "translateY(-0.5rem)" }}
            >
              "
            </span>

            <span className="inline-block px-2">{MISSION_STATEMENT}</span>

            <span
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-500 absolute bottom-0 right-0 sm:right-4 md:right-6 leading-none"
              style={{ transform: "translateY(0.5rem)" }}
            >
              "
            </span>
          </p>

          <div className="absolute top-0 left-0 w-full h-1 bg-white/20 blur-sm animate-[scan_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
