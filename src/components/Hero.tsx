"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { CLUB_NAME, MOTTO, FOUNDED } from '../constants';
import CTAButtons from './CTAButtons';






const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      
      {}
      <div className="absolute inset-0 bg-size-[50px_50px] bg-tech-grid opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black pointer-events-none"></div>
      
      {}
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-slate-500 to-transparent opacity-20 animate-pulse"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-slate-500 to-transparent opacity-20 animate-pulse delay-75"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        
        {}
        <div className="order-2 md:order-1 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-slate-700 bg-slate-900/50 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-slate-400 text-xs font-orbitron tracking-widest">EST. {FOUNDED}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-orbitron text-white leading-tight mb-6" data-text={MOTTO}>
              SHAPING <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-slate-300 to-slate-500">
                TOMORROW
              </span> <br />
              TODAY
            </h1>
            
            <p className="text-slate-400 font-rajdhani text-lg md:text-2xl mb-8 tracking-wide max-w-xl mx-auto md:mx-0">
              {CLUB_NAME}
            </p>

            <CTAButtons />
          </motion.div>
        </div>

        {}
        <div className="order-1 md:order-2 flex justify-center relative">
           {}
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-slate-800 rounded-full animate-spin-slow opacity-30 border-dashed"></div>
              <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] border border-slate-700 rounded-full animate-spin-slow opacity-20" style={{ animationDirection: 'reverse', animationDuration: '20s' }}></div>
           </div>

           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             className="relative z-10"
           >
              {}
              <div className="relative w-64 h-64 md:w-96 md:h-96 group">
                <div className="absolute inset-0 bg-slate-500/10 blur-[50px] rounded-full group-hover:bg-slate-500/20 transition-all duration-500"></div>
                <Image 
                  src="/hero.png" 
                  alt="DCITC Shield Logo" 
                  fill
                  className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] grayscale contrast-125 brightness-110"
                  priority
                />
                
                {}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-slate-400"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-slate-400"></div>
              </div>
           </motion.div>
        </div>
      </div>

      {}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] font-orbitron tracking-[0.3em] uppercase">Scroll to Initialize</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
};

export default Hero;