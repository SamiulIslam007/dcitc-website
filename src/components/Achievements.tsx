"use client";
import React from "react";
import { DEMO_ACHIEVEMENTS } from "../constants";
import { motion } from "framer-motion";
import SectionTitle from "./UI/SectionTitle";

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Achievements"
          subtitle="Our Milestones and Victories"
        />

        <div className="space-y-12">
          {DEMO_ACHIEVEMENTS.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row gap-6 md:gap-10 items-start ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-shrink-0 w-full md:w-1/3">
                <div className="relative h-48 sm:h-64 overflow-hidden rounded-lg border border-white/10">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover grayscale opacity-70"
                  />
                  <div className="absolute inset-0 bg-black/50"></div>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/20 text-white font-orbitron text-sm rounded-full">
                    {achievement.year}
                  </span>
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-3xl font-orbitron font-bold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="font-rajdhani text-slate-400 text-lg leading-relaxed mb-4">
                  {achievement.detail}
                </p>
                <a
                  href="#"
                  className="text-white font-orbitron text-sm border-b border-white/50 hover:border-white transition-colors"
                >
                  View Details →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
