import React from "react";
import { CLUB } from "../constants";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const CLUB_NAME: string = CLUB.NAME;
const FOUNDED: string = CLUB.FOUNDED;

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/DCITC" },
    { icon: Instagram, href: "https://www.instagram.com/dcitc_official/" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/dhaka-college-it-club/",
    },
    { icon: Mail, href: "mailto:dhakacollegeitclubofficial@gmail.com" },
  ];

  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-12">


          <div className="space-y-4 text-center md:text-left">
            <h4 className="font-orbitron font-bold text-lg text-white">
              Connect
            </h4>
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-slate-700 rounded hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-slate-400"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-rajdhani text-slate-600 uppercase tracking-widest text-center md:text-left">
          <p>
            &copy; {FOUNDED} {CLUB_NAME}. All rights reserved.
          </p>
          <p>
            Designed & Developed by <span className="text-orange-500">DC Swartz</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
