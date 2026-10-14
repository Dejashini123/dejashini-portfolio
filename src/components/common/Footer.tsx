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
    <footer
      className="py-16 border-t relative overflow-hidden theme-transition"
      style={{
        backgroundColor: "var(--accent-plum)",
        borderColor: "rgba(239, 200, 184, 0.2)",
        color: "#FAF7F2",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center font-display-serif font-bold text-xl shadow-sm"
                style={{
                  backgroundColor: "var(--accent-dusty-peach)",
                  color: "#292522",
                }}
              >
                D
              </div>
              <div>
                <h3 className="text-xl font-display-serif font-bold tracking-tight text-white">
                  {siteConfig.name}
                </h3>
                <p className="text-xs font-mono text-[#EFC8B8]">
                  AI Full Stack Engineer • Machine Learning • Vision
                </p>
              </div>
            </div>

            <p className="text-sm text-[#DCD2E9] italic font-display-serif">
              "{siteConfig.tagline}"
            </p>

            <p className="text-xs text-[#A79A8D] leading-relaxed max-w-sm">
              Engineering practical AI and computer vision systems, geospatial machine learning models,
              and modern full-stack web applications with emphasis on reliability and design.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#EFC8B8] font-semibold mb-4">
              Folio Index
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#DCD2E9]/70 hover:text-[#FAF7F2] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Social Icons */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#EFC8B8] font-semibold mb-4">
              Connect
            </h4>

            <div className="flex items-center gap-3">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all hover:-translate-y-0.5"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all hover:-translate-y-0.5"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-[#EFC8B8]" />
              </a>

              <a
                href={siteConfig.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all hover:-translate-y-0.5"
                aria-label="LeetCode Profile"
              >
                <LeetCodeIcon className="w-4 h-4 text-[#DCA996]" />
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-all hover:-translate-y-0.5"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#DCD2E9] hover:text-[#FAF7F2] transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5 text-[#EFC8B8]" />
                <span>Return to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A79A8D]">
          <p>© 2026 {siteConfig.name}. Designed & Built with Pride.</p>
          <p className="flex items-center gap-1.5">
            React • TypeScript • Tailwind CSS • Vercel
          </p>
        </div>
      </div>
    </footer>
  );
};
