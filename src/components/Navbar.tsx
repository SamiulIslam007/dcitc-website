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

  const getNavbarHeight = () => {
    return 5.0;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrolled(window.scrollY > 50);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (isOpen) {
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
      } else {
        document.body.style.overflow = "auto";
        document.body.style.position = "";
        document.body.style.width = "";
      }
    }

    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "auto";
        document.body.style.position = "";
        document.body.style.width = "";
      }
    };
  }, [isOpen]);

  const mobileMenuTop = `${getNavbarHeight()}rem`;

  return (
    <nav
      className={`bg-black fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 glass-panel border-b border-white/10"
          : "py-6 md:py-3 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-all duration-300">
            <Image
              src="/logo.png"
              alt={`${CLUB_SHORT} Logo`}
              width={200}
              height={200}
              priority
              className="object-contain"
            />
          </div>
        </a>
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

        <button
          className="md:hidden text-white z-[60] relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              top: mobileMenuTop,
              height: `calc(100vh - ${mobileMenuTop})`,
            }}
            className="md:hidden fixed left-0 w-full bg-black border-t border-white/10 shadow-xl overflow-y-auto"
          >
            <div className="flex flex-col p-6 gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-rajdhani font-bold text-2xl text-slate-200 hover:text-white border-b border-white/10 pb-3 last:border-b-0 transition-colors tracking-wider"
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setApplyOpen(true);
                  setIsOpen(false);
                }}
                className="mt-4 w-full px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-orbitron text-base tracking-widest rounded-none backdrop-blur-sm transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] -skew-x-10"
              >
                <span className="skew-x-10 inline-block cursor-pointer uppercase">
                  APPLY NOW
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ApplyNowModal open={applyOpen} onClose={() => setApplyOpen(false)} />
    </nav>
  );
};

export default Navbar;
