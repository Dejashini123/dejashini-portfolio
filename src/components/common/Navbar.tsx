import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  BookOpen,
  X,
  Sun,
  Moon,
  ArrowUpRight,
  Sparkles,
  FileText,
  Compass,
} from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { useTheme } from "../../context/ThemeContext";

interface NavItem {
  number: string;
  name: string;
  href: string;
  sectionId: string;
}

const navItems: NavItem[] = [
  { number: "01", name: "Home", href: "/#hero", sectionId: "hero" },
  { number: "02", name: "About", href: "/#about", sectionId: "about" },
  { number: "03", name: "Skills", href: "/#skills", sectionId: "skills" },
  { number: "04", name: "Experience", href: "/#experience", sectionId: "experience" },
  { number: "05", name: "Projects", href: "/#projects", sectionId: "projects" },
  { number: "06", name: "Services", href: "/#services", sectionId: "services" },
  { number: "07", name: "Achievements", href: "/#achievements", sectionId: "achievements" },
  { number: "08", name: "Certifications", href: "/#certifications", sectionId: "certifications" },
  { number: "09", name: "Contact", href: "/#contact", sectionId: "contact" },
];

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = "hero" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [studyDeskOpen, setStudyDeskOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // Track scroll position & scroll progress
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close study desk on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && studyDeskOpen) {
        setStudyDeskOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [studyDeskOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    setStudyDeskOpen(false);
    if (isHomePage) {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${sectionId}`);
      }
    } else {
      e.preventDefault();
      navigate(`/#${sectionId}`);
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setStudyDeskOpen(false);
    if (isHomePage) {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
  };

  const currentItem = navItems.find((item) => item.sectionId === activeSection) || navItems[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 theme-transition ${
        isScrolled
          ? "py-2.5 backdrop-blur-xl shadow-warm-sm border-b"
          : "py-4 bg-transparent"
      }`}
      style={{
        backgroundColor: isScrolled
          ? theme === "warm"
            ? "rgba(250, 247, 242, 0.9)"
            : "rgba(37, 28, 39, 0.9)"
          : "transparent",
        borderColor: isScrolled ? "var(--border-subtle)" : "transparent",
      }}
    >
      {/* Scroll Progress Line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] transition-all duration-150 ease-out"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: "var(--accent-dusty-peach)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Wordmark */}
          <Link
            to="/#hero"
            onClick={(e) => handleNavClick(e as any, "hero")}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-display-serif font-bold text-lg transition-transform group-hover:scale-105 shadow-sm"
              style={{
                backgroundColor: "var(--accent-plum)",
                color: "#FAF7F2",
                border: "1px solid var(--accent-dusty-peach)",
              }}
            >
              D
            </div>
            <div className="flex flex-col">
              <span
                className="font-display-serif font-bold text-base sm:text-lg tracking-tight leading-none group-hover:opacity-80 transition-opacity"
                style={{ color: "var(--text-primary)" }}
              >
                {siteConfig.name}
              </span>
              <span
                className="text-[9.5px] font-mono tracking-widest uppercase mt-0.5"
                style={{ color: "var(--text-muted)" }}
              >
                AI Full Stack Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Editorial Minimalist) */}
          <nav
            className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border shadow-sm theme-transition"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-subtle)",
            }}
          >
            {navItems.slice(0, 6).map((item) => {
              const isActive = isHomePage && activeSection === item.sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.sectionId)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? "font-bold shadow-sm"
                      : "hover:opacity-100 opacity-70"
                  }`}
                  style={{
                    backgroundColor: isActive ? "var(--accent-plum)" : "transparent",
                    color: isActive ? "#FAF7F2" : "var(--text-primary)",
                  }}
                >
                  {item.name}
                </a>
              );
            })}

            {/* Study Index Trigger Button (Unfolds full study folio) */}
            <button
              onClick={() => setStudyDeskOpen(!studyDeskOpen)}
              className="ml-1 px-3 py-1 rounded-full text-xs font-mono font-semibold flex items-center gap-1.5 transition-all"
              style={{
                backgroundColor: studyDeskOpen ? "var(--accent-dusty-peach)" : "var(--bg-tertiary)",
                color: studyDeskOpen ? "#292522" : "var(--text-primary)",
              }}
              title="Open full study folio index"
              aria-expanded={studyDeskOpen}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Index</span>
            </button>
          </nav>

          {/* Right Action Bar: Theme Toggle + Contact CTA */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-sm"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-primary)",
              }}
              aria-label={`Switch to ${theme === "warm" ? "Lavender After Hours" : "Warm Editorial"} theme`}
              title={`Switch to ${theme === "warm" ? "Lavender After Hours" : "Warm Editorial"} theme`}
            >
              {theme === "warm" ? (
                <Moon className="w-4 h-4 text-[#342633]" />
              ) : (
                <Sun className="w-4 h-4 text-[#EFC8B8]" />
              )}
            </button>

            {/* "Let's Connect" CTA */}
            <button
              onClick={handleContactClick}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold text-[#FAF7F2] shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
              style={{
                backgroundColor: "var(--accent-plum)",
                border: "1px solid var(--accent-dusty-peach)",
              }}
            >
              <Sparkles className="w-3 h-3 text-[#EFC8B8]" />
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>

            {/* Mobile / Compact Folio Trigger */}
            <button
              onClick={() => setStudyDeskOpen(!studyDeskOpen)}
              className="lg:hidden p-2 rounded-xl transition-all shadow-sm flex items-center gap-1.5"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-primary)",
              }}
              aria-label="Toggle navigation menu"
            >
              {studyDeskOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <>
                  <BookOpen className="w-4 h-4 text-[#DCA996]" />
                  <span className="text-xs font-mono font-bold pr-0.5">
                    {currentItem.number}
                  </span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* ── Signature Floating Study Desk / Folio Modal ────────────────────── */}
      {studyDeskOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6 backdrop-blur-md animate-fadeIn"
          style={{ backgroundColor: "rgba(37, 28, 39, 0.65)" }}
          onClick={() => setStudyDeskOpen(false)}
        >
          <div
            className="w-full max-w-3xl rounded-3xl p-6 sm:p-8 shadow-2xl border transition-all transform animate-scaleUp overflow-hidden paper-surface relative"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border-subtle)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header: Title & Close Button */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b" style={{ borderColor: "var(--border-subtle)" }}>
              <div className="flex items-center gap-2.5">
                <Compass className="w-5 h-5 text-[#DCA996]" />
                <div>
                  <h3 className="font-display-serif font-bold text-xl sm:text-2xl" style={{ color: "var(--text-primary)" }}>
                    Studio Folio & Navigation
                  </h3>
                  <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                    Dejashini T. P. — Saveetha ECE & AI Engineering
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-xl text-xs font-mono flex items-center gap-1.5 border"
                  style={{
                    backgroundColor: "var(--bg-tertiary)",
                    borderColor: "var(--border-subtle)",
                    color: "var(--text-primary)",
                  }}
                >
                  {theme === "warm" ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5 text-[#EFC8B8]" />}
                  <span className="hidden sm:inline">
                    {theme === "warm" ? "Dark Mode" : "Light Mode"}
                  </span>
                </button>

                <button
                  onClick={() => setStudyDeskOpen(false)}
                  className="p-2 rounded-xl hover:opacity-80 transition-opacity"
                  style={{
                    backgroundColor: "var(--bg-tertiary)",
                    color: "var(--text-primary)",
                  }}
                  aria-label="Close study folio"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Grid of Navigation Items */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {navItems.map((item) => {
                const isActive = isHomePage && activeSection === item.sectionId;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.sectionId)}
                    className="p-3 rounded-2xl border transition-all flex items-center justify-between group hover:-translate-y-0.5"
                    style={{
                      backgroundColor: isActive ? "var(--accent-plum)" : "var(--bg-primary)",
                      borderColor: isActive ? "var(--accent-dusty-peach)" : "var(--border-subtle)",
                      color: isActive ? "#FAF7F2" : "var(--text-primary)",
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="text-xs font-mono font-bold"
                        style={{ color: isActive ? "#EFC8B8" : "var(--text-muted)" }}
                      >
                        {item.number}
                      </span>
                      <span className="text-sm font-semibold group-hover:underline">
                        {item.name}
                      </span>
                    </div>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#EFC8B8]" />
                    ) : (
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-70 transition-opacity" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Bottom Quick Actions */}
            <div
              className="pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono"
              style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}
            >
              <div className="flex items-center gap-4">
                <a
                  href={siteConfig.resumeUrl}
                  download="Resume_Dejashini.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:underline font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  <FileText className="w-3.5 h-3.5 text-[#DCA996]" />
                  <span>Download Resume (PDF)</span>
                </a>
                <span>•</span>
                <span className="text-emerald-600 font-semibold">Available for Work</span>
              </div>

              <button
                onClick={handleContactClick}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-white shadow-sm transition-transform hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--accent-plum)",
                }}
              >
                Send Message
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
