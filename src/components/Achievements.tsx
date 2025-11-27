"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "./UI/SectionTitle";
import { DEMO_ACHIEVEMENTS } from "../constants";

const Achievements: React.FC = () => {
  return (
    <section
      id="achievements"
      className="py-12 sm:py-16 md:py-24 bg-black border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-full sm:max-w-6xl md:max-w-7xl mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
        <SectionTitle
          title="Achievements"
          subtitle="Highlight missions successfully executed by DCITC cadets"
        />

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 relative z-10">
          {DEMO_ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-dc-panel border border-white/10 p-4 sm:p-5 md:p-6 flex flex-col gap-3 hover:border-white/40 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 rounded-lg"
            >
              <div className="relative w-full h-32 sm:h-36 md:h-40 mb-3 overflow-hidden border border-white/10 bg-black/40 rounded-md">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <span className="text-xs sm:text-sm font-orbitron tracking-[0.3em] text-slate-500 uppercase">
                {item.year}
              </span>

              <h3 className="text-base sm:text-lg md:text-xl font-orbitron text-white">
                {item.title}
              </h3>

              <p className="font-rajdhani text-sm sm:text-sm md:text-sm text-slate-400 leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Radial Gradient Background */}
      <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />
    </section>
  );
};

export default Achievements;
