"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Hexagon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, CLUB_SHORT } from "../constants";
import ApplyNowModal from "./ApplyNowModal";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-black fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 glass-panel border-b border-white/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12">
            <Image
              src="/logo.png"
              alt="{CLUB_SHORT} Logo"
              width={200}
              height={200}
              priority
            />
          </div>
        </a>

        {}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-rajdhani font-semibold text-lg text-slate-400 hover:text-white transition-colors relative group tracking-wider"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button
            type="button"
            onClick={() => setApplyOpen(true)}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-orbitron text-sm tracking-wider rounded-none backdrop-blur-sm transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] -skew-x-10"
          >
            <span className="skew-x-10 inline-block cursor-pointer">
              APPLY NOW
            </span>
          </button>
        </div>

        {}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-rajdhani font-bold text-xl text-slate-300 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ApplyNowModal open={applyOpen} onClose={() => setApplyOpen(false)} />
    </nav>
  );
};

export default Navbar;
