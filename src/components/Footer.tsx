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
        <div className="flex justify-between items-start gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-orbitron font-bold text-2xl text-white">
              DCITC
            </h3>
            <p className="font-rajdhani text-slate-400 max-w-xs">
              Empowering students to shape the future through technology and
              innovation.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-orbitron font-bold text-lg text-white">
              Connect
            </h4>
            <div className="flex gap-4">
              <div className="flex gap-4">
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
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-rajdhani text-slate-600 uppercase tracking-widest">
          <p>
            &copy; {FOUNDED} {CLUB_NAME}. All rights reserved.
          </p>
          <p>System Status: Online</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
