"use client";
import React from "react";
import { DOMAINS } from "../../constants";
import SectionTitle from "../UI/SectionTitle";
import { motion } from "framer-motion";
import { DomainFeature } from "../../types";

const Domains: React.FC = () => {
  return (
    <section id="domains" className="py-24 bg-dc-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Core Domains"
          subtitle="Four pillars of technological advancement"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOMAINS.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-dc-panel p-8 border border-white/5 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div
                className={`mb-6 p-4 rounded-lg bg-black/50 w-fit border border-white/10 group-hover:border-white/40 transition-colors`}
              >
                <domain.icon className={`w-10 h-10 ${domain.color}`} />
              </div>

              <h3 className="text-2xl font-orbitron font-bold text-white mb-3 group-hover:text-slate-200">
                {domain.title}
              </h3>

              <p className="font-rajdhani text-slate-400 leading-relaxed">
                {domain.description}
              </p>

              <div className="absolute bottom-0 right-0 p-2">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-white/20"></div>
                  <div className="w-1 h-1 bg-white/20"></div>
                  <div className="w-1 h-1 bg-white/20"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
