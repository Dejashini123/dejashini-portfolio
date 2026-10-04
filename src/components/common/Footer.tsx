import React from "react";
import { Mail, ArrowUp } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./BrandIcons";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "/#hero" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Services", href: "/#services" },
    { label: "Achievements", href: "/#achievements" },
    { label: "Certifications", href: "/#certifications" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="bg-[#0D1024] text-slate-400 py-16 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5865F2] via-[#7548E8] to-[#67E8F9] p-[1.5px]">
                <div className="w-full h-full bg-[#11152E] rounded-[10px] flex items-center justify-center font-extrabold text-white text-lg">
                  D
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {siteConfig.name}
                </h3>
                <p className="text-xs text-[#C4B5FD] font-mono">
                  AI Full Stack Developer | AI & Software Development
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 italic">
              "{siteConfig.tagline}"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Engineering practical AI and machine learning solutions, computer vision systems,
              and modern web applications with focus on quality and user experience.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 hover:text-[#67E8F9] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Social Icons */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Connect With Me
            </h4>

            <div className="flex items-center gap-3">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#0A66C2]/20 border border-white/10 hover:border-[#0A66C2]/50 text-slate-300 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#FFA116]/20 border border-white/10 hover:border-[#FFA116]/50 text-slate-300 hover:text-white transition-all"
                aria-label="LeetCode"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#5865F2]/20 border border-white/10 hover:border-[#5865F2]/50 text-slate-300 hover:text-white transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#67E8F9] transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
