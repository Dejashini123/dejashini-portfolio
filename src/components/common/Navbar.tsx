import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

interface NavItem {
  name: string;
  href: string;
  sectionId: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/#hero", sectionId: "hero" },
  { name: "About", href: "/#about", sectionId: "about" },
  { name: "Skills", href: "/#skills", sectionId: "skills" },
  { name: "Experience", href: "/#experience", sectionId: "experience" },
  { name: "Projects", href: "/#projects", sectionId: "projects" },
  { name: "Services", href: "/#services", sectionId: "services" },
  { name: "Achievements", href: "/#achievements", sectionId: "achievements" },
  { name: "Certifications", href: "/#certifications", sectionId: "certifications" },
  { name: "Contact", href: "/#contact", sectionId: "contact" },
];

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = "hero" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    setMobileMenuOpen(false);
    if (isHomePage) {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${sectionId}`);
      }
    } else {
      // If on a project detail page, navigate to home with hash
      e.preventDefault();
      navigate(`/#${sectionId}`);
    }
  };

  const handleHireMeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (isHomePage) {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#11152E]/90 backdrop-blur-xl border-b border-[#7548E8]/20 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <Link
            to="/#hero"
            onClick={(e) => handleNavClick(e as any, "hero")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5865F2] via-[#7548E8] to-[#67E8F9] p-[1.5px] shadow-lg group-hover:shadow-[0_0_20px_rgba(88,101,242,0.6)] transition-all">
              <div className="w-full h-full bg-[#11152E] rounded-[10px] flex items-center justify-center font-extrabold text-white text-lg tracking-wider group-hover:text-[#67E8F9] transition-colors">
                D
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-base tracking-tight leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#67E8F9] transition-all">
                {siteConfig.name}
              </span>
              <span className="text-[10px] font-mono text-[#C4B5FD] tracking-wider uppercase mt-1">
                AI Full Stack
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#171B38]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navItems.map((item) => {
              const isActive = isHomePage && activeSection === item.sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.sectionId)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-[#5865F2] to-[#7548E8] shadow-[0_0_12px_rgba(88,101,242,0.5)]"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: "Hire Me" Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleHireMeClick}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-full font-semibold text-xs text-white group bg-gradient-to-r from-[#5865F2] via-[#7548E8] to-[#67E8F9] shadow-[0_0_20px_rgba(88,101,242,0.4)] hover:shadow-[0_0_30px_rgba(88,101,242,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="px-5 py-2.5 transition-all ease-in duration-200 bg-[#11152E] rounded-full group-hover:bg-transparent flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#67E8F9]" />
                Hire Me
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={handleHireMeClick}
              className="sm:hidden px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#5865F2] to-[#7548E8] text-white"
            >
              Hire Me
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#5865F2]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#11152E]/98 backdrop-blur-2xl border-b border-[#7548E8]/30 px-5 pt-3 pb-6 space-y-1 shadow-2xl transition-all">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-4">
            {navItems.map((item) => {
              const isActive = isHomePage && activeSection === item.sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.sectionId)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? "text-white bg-gradient-to-r from-[#5865F2] to-[#7548E8] shadow-md"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#67E8F9]" />}
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10">
            <button
              onClick={handleHireMeClick}
              className="w-full py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#5865F2] via-[#7548E8] to-[#67E8F9] flex items-center justify-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-[#67E8F9]" />
              Hire Me for Projects
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
