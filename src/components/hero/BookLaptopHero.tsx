import React, { useState, useEffect, useRef } from "react";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Sparkles,
  Bot,
  Brain,
  Layers,
  Cpu,
  Wifi,
  BookOpen,
  FastForward,
  RotateCcw,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "../../data/siteConfig";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "../common/BrandIcons";
import { MagneticButton } from "../common/MagneticButton";

// ── Realistic Laptop Frame ─────────────────────────────────────────────────────
const LaptopFrame: React.FC<{
  children: React.ReactNode;
  lidRotation?: number;
  isTouch?: boolean;
}> = ({ children, lidRotation = 0 }) => (
  <div
    className="relative w-full select-none"
    style={{
      perspective: "1400px",
      transformStyle: "preserve-3d",
    }}
  >
    {/* Screen / Lid */}
    <div
      className="relative mx-auto rounded-t-2xl border-[6px] sm:border-[8px] transition-transform duration-700 ease-out"
      style={{
        aspectRatio: "16/10",
        borderColor: "var(--accent-plum)",
        backgroundColor: "var(--bg-tertiary)",
        boxShadow: "0 -4px 40px rgba(52, 38, 51, 0.25), 0 20px 40px rgba(0, 0, 0, 0.15)",
        transformOrigin: "bottom center",
        transform: `rotateX(${lidRotation}deg)`,
      }}
    >
      {/* Camera and ambient sensor */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
        <div className="w-1.5 h-1.5 rounded-full bg-stone-700 ring-1 ring-white/10" />
        <div className="w-1 h-1 rounded-full bg-emerald-500/80" />
      </div>

      {/* Screen bezel inner highlight */}
      <div
        className="absolute inset-0 rounded-lg pointer-events-none z-10"
        style={{ boxShadow: "inset 0 0 25px rgba(220, 169, 150, 0.1)" }}
      />

      {/* Screen Content */}
      <div className="w-full h-full overflow-hidden">{children}</div>
    </div>

    {/* Hinge */}
    <div
      className="relative mx-auto rounded-b-sm h-3 sm:h-3.5"
      style={{
        width: "101.5%",
        background: "linear-gradient(to bottom, #342633, #251C27)",
      }}
    >
      <div className="absolute left-1/2 -translate-x-1/2 top-1 w-20 h-1 rounded-full bg-stone-600/60" />
    </div>

    {/* Bottom Chassis / Keyboard Deck */}
    <div
      className="mx-auto rounded-b-2xl h-4 sm:h-5 shadow-[0_25px_60px_rgba(37,28,39,0.35)] relative overflow-hidden"
      style={{
        width: "106%",
        background: "linear-gradient(to bottom, #2D212C, #211823)",
        borderBottom: "1px solid rgba(220, 210, 233, 0.1)",
      }}
    >
      {/* Notch indent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-1.5 rounded-b-md bg-[#1C141E]" />

      {/* Subtle keyboard grid glow */}
      <div className="w-full h-full flex items-center justify-center gap-1 opacity-25">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-sm bg-[#DCD2E9]" />
        ))}
      </div>
    </div>

    {/* Table Reflection */}
    <div
      className="mx-auto h-2 rounded-b-3xl opacity-40 blur-sm"
      style={{
        width: "110%",
        background: "radial-gradient(ellipse at center, rgba(185, 165, 207, 0.35), transparent 70%)",
      }}
    />
  </div>
);

// ── Screen Content with Real Project Tabs ─────────────────────────────────────
const ScreenContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Forest Carbon AI", "Smart Traffic", "AI Shield"];

  useEffect(() => {
    const t = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 3800);
    return () => clearInterval(t);
  }, [tabs.length]);

  return (
    <div
      className="w-full h-full flex flex-col select-none overflow-hidden font-sans"
      style={{
        backgroundColor: "#1E1720",
        color: "#FAF7F2",
      }}
    >
      {/* macOS-style Header */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 bg-[#251C27]/90 flex-shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-[#E57373]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFD54F]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#81C784]" />
        <span className="flex-1 mx-2 text-[9px] font-mono text-[#DCD2E9]/70 text-center truncate">
          dejashini.dev — research & engineering studio
        </span>
        <Wifi className="w-3 h-3 text-[#DCD2E9]/70" />
      </div>

      {/* Editorial Navigation Tabs */}
      <div className="flex border-b border-white/10 bg-[#2A1F2C] flex-shrink-0">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={`px-3 py-1.5 text-[8.5px] font-mono transition-all ${
              activeTab === i
                ? "text-[#FAF7F2] bg-[#342633] border-b-2 border-[#DCA996] font-semibold"
                : "text-[#DCD2E9]/60 hover:text-[#FAF7F2]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Screen Content */}
      <div className="flex-1 p-2.5 overflow-hidden flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {activeTab === 0 && (
            <motion.div
              key="forest"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono text-[#EFC8B8] font-bold">
                  Sentinel-2 + NASA GEDI LiDAR
                </span>
                <span className="text-[7.5px] font-mono px-1.5 py-0.5 rounded bg-[#DCA996]/20 text-[#FAF7F2]">
                  Vercel Live
                </span>
              </div>
              <p className="text-[8px] text-[#DCD2E9]/80 line-clamp-2">
                Geospatial machine learning pipeline analyzing 3,126 spatial coordinates across Southern India.
              </p>
              <div className="grid grid-cols-3 gap-1.5 pt-1">
                <div className="bg-white/5 p-1 rounded border border-white/5 text-center">
                  <div className="text-[6.5px] font-mono text-[#A79A8D]">R² Accuracy</div>
                  <div className="text-[10px] font-black text-[#FAF7F2]">0.39</div>
                </div>
                <div className="bg-white/5 p-1 rounded border border-white/5 text-center">
                  <div className="text-[6.5px] font-mono text-[#A79A8D]">Coordinates</div>
                  <div className="text-[10px] font-black text-[#EFC8B8]">3,126</div>
                </div>
                <div className="bg-white/5 p-1 rounded border border-white/5 text-center">
                  <div className="text-[6.5px] font-mono text-[#A79A8D]">MAE</div>
                  <div className="text-[10px] font-black text-[#FAF7F2]">30.24</div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 1 && (
            <motion.div
              key="traffic"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono text-[#B9A5CF] font-bold">
                  YOLOv8 & Piezoelectric Harvesting
                </span>
                <span className="text-[7.5px] font-mono px-1.5 py-0.5 rounded bg-[#B9A5CF]/20 text-[#FAF7F2]">
                  24-Hr Hackathon
                </span>
              </div>
              <p className="text-[8px] text-[#DCD2E9]/80 line-clamp-2">
                Real-time multi-lane vehicle queue detection paired with kinetic roadway transducer prototype.
              </p>
              <div className="grid grid-cols-3 gap-1.5 pt-1">
                <div className="bg-white/5 p-1 rounded border border-white/5 text-center">
                  <div className="text-[6.5px] font-mono text-[#A79A8D]">mAP@50</div>
                  <div className="text-[10px] font-black text-[#B9A5CF]">91%</div>
                </div>
                <div className="bg-white/5 p-1 rounded border border-white/5 text-center">
                  <div className="text-[6.5px] font-mono text-[#A79A8D]">False Alarm ↓</div>
                  <div className="text-[10px] font-black text-[#FAF7F2]">18%</div>
                </div>
                <div className="bg-white/5 p-1 rounded border border-white/5 text-center">
                  <div className="text-[6.5px] font-mono text-[#A79A8D]">Dataset</div>
                  <div className="text-[10px] font-black text-[#EFC8B8]">1,200+</div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 2 && (
            <motion.div
              key="shield"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono text-[#EFC8B8] font-bold">
                  AI Shield — Real-Time Moderation
                </span>
                <span className="text-[7.5px] font-mono px-1.5 py-0.5 rounded bg-[#EFC8B8]/20 text-[#FAF7F2]">
                  WebSockets
                </span>
              </div>
              <p className="text-[8px] text-[#DCD2E9]/80 line-clamp-2">
                Transformer-based toxicity interception and Whisper AI voice pipeline with automated user timeouts.
              </p>
              <div className="grid grid-cols-3 gap-1.5 pt-1">
                <div className="bg-white/5 p-1 rounded border border-white/5 text-center">
                  <div className="text-[6.5px] font-mono text-[#A79A8D]">Target Latency</div>
                  <div className="text-[10px] font-black text-[#FAF7F2]">&lt;200ms</div>
                </div>
                <div className="bg-white/5 p-1 rounded border border-white/5 text-center">
                  <div className="text-[6.5px] font-mono text-[#A79A8D]">Connections</div>
                  <div className="text-[10px] font-black text-[#B9A5CF]">500+</div>
                </div>
                <div className="bg-white/5 p-1 rounded border border-white/5 text-center">
                  <div className="text-[6.5px] font-mono text-[#A79A8D]">Modality</div>
                  <div className="text-[10px] font-black text-[#EFC8B8]">Text+Voice</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Status Bar */}
        <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[7px] font-mono text-[#A79A8D]">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            FastAPI + PyTorch Pipeline Active
          </span>
          <span>Saveetha ECE • AI Engineering</span>
        </div>
      </div>
    </div>
  );
};

// ── Main Hero Section with Book-and-Laptop Sequence ───────────────────────────
export const BookLaptopHero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [introSeen, setIntroSeen] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    return sessionStorage.getItem("dejashini_intro_seen") === "true";
  });
  const [isIntroRunning, setIsIntroRunning] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadySeen = sessionStorage.getItem("dejashini_intro_seen") === "true";
    return !alreadySeen && !reduced;
  });

  const [bookCoverAngle, setBookCoverAngle] = useState(isIntroRunning ? 0 : -145);
  const [laptopLift, setLaptopLift] = useState(isIntroRunning ? 0 : 1);
  const [laptopLidAngle, setLaptopLidAngle] = useState(isIntroRunning ? -90 : 0);

  const laptopWrapperRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleCompleteIntro = () => {
    sessionStorage.setItem("dejashini_intro_seen", "true");
    setIntroSeen(true);
    setIsIntroRunning(false);
    setBookCoverAngle(-145);
    setLaptopLift(1);
    setLaptopLidAngle(0);
  };

  // Rotating titles
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % siteConfig.rotatingTitles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Choreographed Book-and-Laptop Sequence (Max 2.8s, non-blocking)
  useEffect(() => {
    if (!isIntroRunning) {
      return;
    }

    // Step 2: Book cover swings open at 350ms
    const t1 = setTimeout(() => {
      setBookCoverAngle(-145);
    }, 350);

    // Step 3: Laptop elevates from the book pages at 950ms
    const t2 = setTimeout(() => {
      setLaptopLift(1);
    }, 950);

    // Step 4: Laptop lid smoothly unfolds open at 1500ms
    const t3 = setTimeout(() => {
      setLaptopLidAngle(0);
    }, 1500);

    // Step 5: Animation settles completely at 2700ms
    const t4 = setTimeout(() => {
      handleCompleteIntro();
    }, 2700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [isIntroRunning]);

  const handleReplayIntro = () => {
    sessionStorage.removeItem("dejashini_intro_seen");
    setIntroSeen(false);
    setIsIntroRunning(true);
  };

  // Subtle 3D Pointer Tilt on desktop
  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const card = laptopWrapperRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (y / (rect.height / 2)) * -6,
      y: (x / (rect.width / 2)) * 6,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden theme-transition"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Editorial warm noise texture */}
      <div className="absolute inset-0 bg-warm-noise pointer-events-none opacity-40" />

      {/* Warm Ambient Orbs */}
      <div
        className="absolute top-1/4 -left-40 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none opacity-25"
        style={{ backgroundColor: "var(--accent-peach)" }}
      />
      <div
        className="absolute bottom-10 -right-40 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none opacity-25"
        style={{ backgroundColor: "var(--accent-lavender)" }}
      />

      {/* Non-blocking Intro Controls (Skip / Replay) */}
      <div className="absolute top-20 right-6 sm:right-10 z-30 flex items-center gap-2">
        {isIntroRunning ? (
          <button
            onClick={handleCompleteIntro}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold transition-all shadow-sm"
            style={{
              backgroundColor: "var(--bg-card)",
              color: "var(--text-primary)",
              border: "1px solid var(--border-subtle)",
            }}
            title="Skip notebook intro"
          >
            <FastForward className="w-3.5 h-3.5 text-[#DCA996]" />
            <span>Skip Intro</span>
          </button>
        ) : introSeen ? (
          <button
            onClick={handleReplayIntro}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono opacity-60 hover:opacity-100 transition-opacity"
            style={{
              color: "var(--text-muted)",
              border: "1px solid var(--border-subtle)",
            }}
            title="Replay book opening sequence"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="hidden sm:inline">Replay Intro</span>
          </button>
        ) : null}
      </div>

      {/* Main Content Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Editorial Copy & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Editorial Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5 transition-colors"
              style={{
                backgroundColor: "var(--bg-tertiary)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-secondary)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#DCA996]" />
              <span className="text-[11px] font-mono font-semibold tracking-widest uppercase">
                {siteConfig.heroPillBadge}
              </span>
            </motion.div>

            {/* Name with expressive display serif typography */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-2"
            >
              <span
                className="text-base sm:text-lg font-mono font-medium block mb-1 tracking-wider"
                style={{ color: "var(--text-muted)" }}
              >
                Hi, my name is
              </span>
              <h1
                className="text-4xl sm:text-6xl lg:text-7xl font-display-serif font-bold tracking-tight leading-none"
                style={{ color: "var(--text-primary)" }}
              >
                {siteConfig.name}
              </h1>
            </motion.div>

            {/* Rotating Title */}
            <div className="h-10 sm:h-12 flex items-center mb-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={titleIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg sm:text-xl font-mono font-bold flex items-center gap-2"
                  style={{ color: "var(--accent-dusty-peach)" }}
                >
                  <Bot className="w-5 h-5 text-[#B9A5CF] flex-shrink-0" />
                  <span>{siteConfig.rotatingTitles[titleIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-display-serif font-semibold tracking-tight leading-snug mb-4 max-w-xl"
              style={{ color: "var(--text-primary)" }}
            >
              {siteConfig.headline}
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-normal"
              style={{ color: "var(--text-secondary)" }}
            >
              {siteConfig.subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-3.5 items-center mb-8"
            >
              <MagneticButton
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3.5 rounded-2xl font-bold text-sm text-[#FAF7F2] transition-all flex items-center gap-2 shadow-warm-md hover:shadow-warm-lg hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  backgroundColor: "var(--accent-plum)",
                }}
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 text-[#EFC8B8]" />
              </MagneticButton>

              <MagneticButton
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3.5 rounded-2xl font-semibold text-sm transition-all flex items-center gap-2 paper-surface hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  color: "var(--text-primary)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <span>Let's Work Together</span>
                <Sparkles className="w-4 h-4 text-[#B9A5CF]" />
              </MagneticButton>

              <MagneticButton
                href={siteConfig.resumeUrl}
                download="Resume_Dejashini.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-2xl font-mono text-xs font-semibold transition-all flex items-center gap-2"
                style={{
                  backgroundColor: "var(--bg-tertiary)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <Download className="w-3.5 h-3.5 text-[#DCA996]" />
                <span>Resume (PDF)</span>
              </MagneticButton>
            </motion.div>

            {/* Socials & Live Status */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="flex flex-wrap items-center gap-5 pt-4 border-t w-full"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <div className="flex items-center gap-2.5">
                {[
                  { href: siteConfig.github, icon: <GithubIcon className="w-4 h-4" />, label: "GitHub" },
                  { href: siteConfig.linkedin, icon: <LinkedinIcon className="w-4 h-4" />, label: "LinkedIn" },
                  { href: siteConfig.leetcode, icon: <LeetCodeIcon className="w-4 h-4" />, label: "LeetCode" },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-xl transition-all hover:-translate-y-0.5"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>

              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium"
                style={{
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.25)",
                  color: "#059669",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>{siteConfig.statusBadge}</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Signature Book-and-Laptop Visual Showcase */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end gap-6">
            
            {/* The 3D Book & Emerging Laptop Container */}
            <div
              ref={laptopWrapperRef}
              className="relative w-full max-w-lg transition-transform duration-300 ease-out"
              style={{
                perspective: "1600px",
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            >
              {/* EDITORIAL NOTEBOOK BASE */}
              <div
                className="relative w-full rounded-3xl p-3 sm:p-4 transition-all duration-700"
                style={{
                  backgroundColor: "var(--accent-plum)",
                  boxShadow: "0 25px 50px -12px rgba(37, 28, 39, 0.35)",
                  border: "2px solid rgba(220, 210, 233, 0.2)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Book Spine Detail (Left side) */}
                <div
                  className="absolute left-0 top-3 bottom-3 w-3 rounded-l-md"
                  style={{
                    background: "linear-gradient(to right, rgba(0,0,0,0.4), transparent)",
                    borderRight: "1px solid rgba(239, 200, 184, 0.3)",
                  }}
                />

                {/* Book Paper Texture & Gilded Edges */}
                <div
                  className="relative rounded-2xl p-2 sm:p-3 overflow-hidden"
                  style={{
                    backgroundColor: "var(--bg-elevated)",
                    boxShadow: "inset 0 0 20px rgba(52, 38, 51, 0.15)",
                  }}
                >
                  {/* Subtle Book Ribbon Bookmark */}
                  <div
                    className="absolute -top-1 right-8 w-4 h-12 shadow-md z-10"
                    style={{
                      backgroundColor: "var(--accent-dusty-peach)",
                      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 50% 80%, 0% 100%)",
                    }}
                  />

                  {/* Animated Book Cover Flap (Visible during intro sequence) */}
                  {isIntroRunning && (
                    <div
                      className="absolute inset-0 rounded-2xl z-30 transition-transform duration-1000 ease-out origin-left pointer-events-none"
                      style={{
                        backgroundColor: "var(--accent-plum)",
                        border: "2px solid var(--accent-dusty-peach)",
                        transform: `rotateY(${bookCoverAngle}deg)`,
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#FAF7F2]">
                        <BookOpen className="w-8 h-8 text-[#EFC8B8] mb-2" />
                        <span className="text-[10px] font-mono tracking-widest uppercase text-[#DCD2E9]">
                          Portfolio Journal
                        </span>
                        <h3 className="text-xl font-display-serif font-bold text-[#FAF7F2]">
                          Dejashini T. P.
                        </h3>
                        <p className="text-[9px] font-mono text-[#EFC8B8] mt-1">
                          Opening Engineering Folio...
                        </p>
                      </div>
                    </div>
                  )}

                  {/* THE LAPTOP (Rises and Opens From The Notebook) */}
                  <div
                    className="transition-all duration-1000 ease-out"
                    style={{
                      transform: `translateY(${laptopLift === 1 ? 0 : 40}px) scale(${laptopLift === 1 ? 1 : 0.94})`,
                      opacity: laptopLift === 1 ? 1 : 0.8,
                    }}
                  >
                    <LaptopFrame lidRotation={laptopLidAngle}>
                      {/* Split Screen Layout: Left has Interactive Dashboard, Right has Profile Image */}
                      <div className="w-full h-full flex">
                        <div className="flex-1 overflow-hidden">
                          <ScreenContent />
                        </div>

                        {/* Profile Photo on the right side */}
                        <div className="hidden sm:flex w-[38%] relative bg-[#251C27] border-l border-white/10 overflow-hidden items-end justify-center">
                          {!imageError ? (
                            <img
                              src={siteConfig.profileImage}
                              alt={siteConfig.name}
                              onError={() => setImageError(true)}
                              className="w-full h-full object-cover object-top filter contrast-[1.05]"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-[#342633]">
                              <div className="w-12 h-12 rounded-full bg-[#EFC8B8] flex items-center justify-center text-2xl font-display-serif font-bold text-[#342633]">
                                D
                              </div>
                            </div>
                          )}

                          {/* Subtle warm gradient overlay over photo */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#251C27] via-transparent to-transparent opacity-75" />

                          {/* Terminal prompt pill over photo */}
                          <div className="absolute bottom-2 left-2 right-2 bg-[#251C27]/90 backdrop-blur-sm rounded-md p-1.5 border border-white/10">
                            <div className="flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                              <span className="text-[7.5px] font-mono text-[#DCD2E9] truncate">
                                dejashini@saveetha-ece:~$
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </LaptopFrame>
                  </div>
                </div>
              </div>

              {/* Floating Tech Highlights Around Laptop */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 sm:-left-6 px-3 py-2 rounded-2xl shadow-warm-md flex items-center gap-2 z-20 paper-surface"
              >
                <div className="p-1.5 rounded-lg bg-[#EFC8B8]/20 text-[#DCA996]">
                  <Brain className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[8.5px] font-mono text-[#A79A8D] block leading-none">Focus</span>
                  <span className="text-[11px] font-mono font-bold" style={{ color: "var(--text-primary)" }}>
                    YOLOv8 & CV
                  </span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 px-3 py-2 rounded-2xl shadow-warm-md flex items-center gap-2 z-20 paper-surface"
              >
                <div className="p-1.5 rounded-lg bg-[#B9A5CF]/20 text-[#B9A5CF]">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[8.5px] font-mono text-[#A79A8D] block leading-none">Stack</span>
                  <span className="text-[11px] font-mono font-bold" style={{ color: "var(--text-primary)" }}>
                    Python + React
                  </span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-5 left-8 hidden sm:flex px-2.5 py-1.5 rounded-xl shadow-warm-sm items-center gap-1.5 z-20 paper-surface"
              >
                <Cpu className="w-3 h-3 text-[#DCA996]" />
                <span className="text-[10px] font-mono font-semibold" style={{ color: "var(--text-secondary)" }}>
                  FastAPI & IoT Telemetry
                </span>
              </motion.div>
            </div>

            {/* Empirical Metric Highlights Below Visual Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex items-center gap-8 text-center pt-2"
            >
              {[
                { value: "3+", label: "Verified Projects" },
                { value: "91%", label: "Peak YOLO mAP" },
                { value: "8.74", label: "Academic CGPA" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <div
                    className="text-2xl font-display-serif font-bold tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {value}
                  </div>
                  <div
                    className="text-[10px] font-mono uppercase tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {/* Editorial Scroll Prompt */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 transition-opacity opacity-60 hover:opacity-100"
        style={{ color: "var(--text-muted)" }}
        aria-label="Scroll down to About section"
      >
        <span className="text-[9px] font-mono tracking-widest uppercase">Explore Story</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#DCA996]" />
      </button>
    </section>
  );
};
