"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ApplyNowModalProps {
  open: boolean;
  onClose: () => void;
}

const ApplyNowModal: React.FC<ApplyNowModalProps> = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="w-full sm:max-w-sm md:max-w-md bg-dc-panel border border-white/10 p-5 sm:p-6 md:p-8 relative rounded-lg"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-slate-400 hover:text-white text-sm font-orbitron tracking-[0.2em] uppercase"
            >
              Close
            </button>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-orbitron text-white mb-3">Apply to DCITC</h2>
            <p className="font-rajdhani text-slate-400 text-sm sm:text-sm md:text-base mb-6">
              This is a demo modal. In the real site, this would contain the application form or an external link to your application portal.
            </p>

            <div className="space-y-3 text-sm sm:text-sm md:text-sm font-rajdhani text-slate-300">
              <p>Demo instructions:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                <li>Collect basic info (Name, Class, Contact).</li>
                <li>Ask domain preferences (Robotics, Programming, Cyber, AI).</li>
                <li>Optionally add a motivation or portfolio link.</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ApplyNowModal;
