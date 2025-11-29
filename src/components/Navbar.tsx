"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, CLUB } from "../constants";
import ApplyNowModal from "./modals/ApplyNowModal";

const Logo: React.FC = () => (
  <a href="#" className="flex items-center gap-3 group">
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-all duration-300">
      <Image
        src="/logo.png"
        alt={`${CLUB.SHORT} Logo`}
        width={200}
        height={200}
        priority
        className="object-contain"
      />
    </div>
  </a>
);

interface DesktopNavProps {
  onApplyClick: () => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ onApplyClick }) => (
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

    <ApplyButton onClick={onApplyClick} />
  </div>
);

interface MobileMenuButtonProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isOpen,
  setIsOpen,
}) => (
  <button
    className="md:hidden text-white z-[60] relative"
    onClick={() => setIsOpen(!isOpen)}
    aria-label={isOpen ? "Close menu" : "Open menu"}
  >
    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
  </button>
);

interface ApplyButtonProps {
  onClick: () => void;
}

const ApplyButton: React.FC<ApplyButtonProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-orbitron text-sm tracking-wider rounded-none backdrop-blur-sm transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] -skew-x-10"
  >
    <span className="skew-x-10 inline-block cursor-pointer">APPLY NOW</span>
  </button>
);

interface MobileNavMenuProps {
  top: string;
  onClose: () => void;
  onApplyClick: () => void;
}

const MobileNavMenu: React.FC<MobileNavMenuProps> = ({
  top,
  onClose,
  onApplyClick,
}) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.2 }}
    style={{ top, height: `calc(100vh - ${top})` }}
    className="md:hidden fixed left-0 w-full bg-black border-t border-white/10 shadow-xl overflow-y-auto"
  >
    <div className="flex flex-col p-6 gap-6">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={onClose}
          className="font-rajdhani font-bold text-2xl text-slate-200 hover:text-white border-b border-white/10 pb-3 last:border-b-0 transition-colors tracking-wider"
        >
          {item.label}
        </a>
      ))}
      <ApplyButton onClick={onApplyClick} />
    </div>
  </motion.div>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.width = "";
    }
  }, [isOpen]);

  const mobileMenuTop = `5rem`;

  return (
    <nav
      className={`bg-black fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 glass-panel border-b border-white/10"
          : "py-6 md:py-3 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo />

        <DesktopNav onApplyClick={() => setApplyOpen(true)} />

        <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <MobileNavMenu
            top={mobileMenuTop}
            onClose={() => setIsOpen(false)}
            onApplyClick={() => {
              setApplyOpen(true);
              setIsOpen(false);
            }}
          />
        )}
      </AnimatePresence>

      <ApplyNowModal open={applyOpen} onClose={() => setApplyOpen(false)} />
    </nav>
  );
};

export default Navbar;
