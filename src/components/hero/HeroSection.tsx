import React, { useState, useEffect } from "react";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Sparkles,
  Bot,
  Brain,
  Layers,
  Cpu,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "../../data/siteConfig";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "../common/BrandIcons";

export const HeroSection: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % siteConfig.rotatingTitles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#11152E]"
    >
      {/* Background Decorative Gradients & Glow Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#5865F2]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-[#7548E8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#5865F2]/10 via-[#7548E8]/10 to-[#67E8F9]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f254715_1px,transparent_1px),linear-gradient(to_bottom,#1f254715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Content & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Animated Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#5865F2]/20 via-[#7548E8]/20 to-[#67E8F9]/20 border border-[#5865F2]/40 backdrop-blur-md mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#67E8F9] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#67E8F9] uppercase">
                {siteConfig.heroPillBadge}
              </span>
            </motion.div>

            {/* Salutation & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-3"
            >
              <span className="text-lg sm:text-xl font-semibold text-[#C4B5FD] tracking-wide block mb-1">
                Hi, I'm
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
                {siteConfig.name}
              </h1>
            </motion.div>

            {/* Rotating Title */}
            <div className="h-12 sm:h-14 flex items-center mb-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={titleIndex}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -25 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#5865F2] via-[#C4B5FD] to-[#67E8F9] flex items-center gap-2.5"
                >
                  <Bot className="w-6 h-6 text-[#67E8F9] flex-shrink-0 inline-block" />
                  <span>{siteConfig.rotatingTitles[titleIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Large Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight leading-snug mb-5"
            >
              {siteConfig.headline}
            </motion.h2>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal"
            >
              {siteConfig.subheadline}
            </motion.p>

            {/* Three Attractive Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 items-center w-full mb-8"
            >
              {/* Button 1: Explore My Projects */}
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#5865F2] to-[#7548E8] shadow-[0_0_25px_rgba(88,101,242,0.4)] hover:shadow-[0_0_35px_rgba(88,101,242,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 text-[#67E8F9]" />
              </button>

              {/* Button 2: Let's Work Together */}
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#171B38] border border-[#5865F2]/40 hover:bg-[#5865F2]/20 hover:border-[#67E8F9] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 shadow-sm"
              >
                <span>Let's Work Together</span>
                <Sparkles className="w-4 h-4 text-[#C4B5FD]" />
              </button>

              {/* Button 3: Download My Resume */}
              <a
                href={siteConfig.resumeUrl}
                download="Resume_Dejashini.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-white/5 border border-white/10 hover:bg-white/15 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#67E8F9]" />
                <span>Download My Resume</span>
              </a>
            </motion.div>

            {/* Social Icons & Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800/80 w-full"
            >
              {/* Social links */}
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:text-white hover:border-[#5865F2] hover:bg-[#5865F2]/10 transition-all hover:-translate-y-0.5"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:text-white hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all hover:-translate-y-0.5"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-300 hover:text-[#FFA116] hover:border-[#FFA116] hover:bg-[#FFA116]/10 transition-all hover:-translate-y-0.5"
                  aria-label="LeetCode Profile"
                >
                  <LeetCodeIcon className="w-5 h-5" />
                </a>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{siteConfig.statusBadge}</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Portrait Frame with Gradient Border & Floating Tech Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-64 sm:w-72 md:w-80 aspect-[4/5]"
            >
              {/* Glowing Outer Rings */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#5865F2] via-[#7548E8] to-[#67E8F9] opacity-40 blur-2xl animate-pulse-slow" />
              <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-[#5865F2] via-[#7548E8] to-[#F5B8D5] opacity-80" />

              {/* Photo Frame Container */}
              <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-[#171B38] border-2 border-white/20 p-2 shadow-2xl flex items-center justify-center">
                {!imageError ? (
                  <img
                    src={siteConfig.profileImage}
                    alt={siteConfig.name}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top rounded-[24px]"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#171B38] to-[#11152E] rounded-[24px] text-center p-6 border border-white/10">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#5865F2] to-[#7548E8] flex items-center justify-center text-4xl font-extrabold text-white mb-3 shadow-[0_0_25px_rgba(88,101,242,0.6)]">
                      {siteConfig.profilePlaceholderInitial}
                    </div>
                    <h3 className="text-xl font-bold text-white">{siteConfig.name}</h3>
                    <p className="text-xs text-[#C4B5FD] mt-1 font-mono">
                      Add photo to /public/images/profile.jpeg
                    </p>
                  </div>
                )}

                {/* Internal gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#11152E]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Tech Badge 1: YOLOv8 / Computer Vision (Top-Left) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-6 sm:-left-8 bg-[#171B38]/95 backdrop-blur-xl border border-[#5865F2]/40 rounded-2xl px-3.5 py-2 shadow-xl flex items-center gap-2.5 z-20"
              >
                <div className="p-1.5 rounded-lg bg-[#5865F2]/20 text-[#67E8F9]">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block leading-tight">Focus</span>
                  <span className="text-xs font-bold text-white">YOLOv8 & CV</span>
                </div>
              </motion.div>

              {/* Floating Tech Badge 2: Full Stack / React & Python (Bottom-Right) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 sm:-right-6 bg-[#171B38]/95 backdrop-blur-xl border border-[#7548E8]/40 rounded-2xl px-3.5 py-2 shadow-xl flex items-center gap-2.5 z-20"
              >
                <div className="p-1.5 rounded-lg bg-[#7548E8]/20 text-[#C4B5FD]">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block leading-tight">Stack</span>
                  <span className="text-xs font-bold text-white">Python + React</span>
                </div>
              </motion.div>

              {/* Floating Tech Badge 3: Fast Inference (Bottom-Left) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 left-6 hidden sm:flex bg-[#171B38]/95 backdrop-blur-xl border border-emerald-500/40 rounded-2xl px-3 py-1.5 shadow-xl items-center gap-2 z-20"
              >
                <div className="p-1 rounded-md bg-emerald-500/20 text-emerald-400">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-emerald-300">FastAPI & IoT</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-slate-500 hover:text-white transition-colors cursor-pointer" onClick={() => scrollToSection("about")}>
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#67E8F9]" />
      </div>
    </section>
  );
};
