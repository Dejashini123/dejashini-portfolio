import React from "react";
import {
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Brain,
  Compass,
} from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { educationData, approachPillars } from "../../data/portfolioData";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-[#F7F7FC] text-slate-800 relative overflow-hidden"
    >
      {/* Soft background decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C4B5FD]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5865F2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Background & Philosophy"
          badgeVariant="purple"
          title="A Little About Me"
          subtitle="Curious by Nature. Creative by Design. Driven by Technology."
          theme="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200/80">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-[#5865F2]/10 text-[#5865F2]">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Engineering Foundations Meets Intelligent Code
                </h3>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  I'm <strong className="text-slate-900 font-semibold">Dejashini T. P.</strong>,
                  an Electronics and Communication Engineering student at{" "}
                  <span className="text-[#5865F2] font-semibold">Saveetha Engineering College</span>{" "}
                  with a strong interest in artificial intelligence, machine learning, full-stack
                  development, and software engineering.
                </p>
                <p>
                  My journey combines rigorous hardware and communications engineering
                  fundamentals with practical software development. I enjoy exploring how AI and
                  modern web technologies can solve real-world challenges with measurable impact.
                </p>
                <p>
                  From building computer vision systems to developing full-stack machine learning
                  applications, I focus on creating useful technology that combines functionality
                  with a great user experience.
                </p>
                <p>
                  I have experience working on AI projects, real-time inference pipelines, web
                  applications, and technical prototypes. I'm continuously improving my skills and
                  looking forward to collaborating with teams and clients who have exciting ideas.
                </p>
              </div>

              {/* Quick Highlight Pills */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-2.5">
                {["Computer Vision", "YOLOv8 & OpenCV", "FastAPI & Python", "React Frontend", "IoT Hardware"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-lg bg-[#5865F2]/10 text-[#5865F2] text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* My Approach Section */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200/80">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-[#7548E8]/10 text-[#7548E8]">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    My Working Approach
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">Core principles guiding how I design and code</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {approachPillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#5865F2] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium leading-relaxed">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education Card & Core Attributes */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="bg-gradient-to-br from-[#11152E] via-[#171B38] to-[#202338] text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/10 relative overflow-hidden">
              {/* Subtle top light bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#5865F2] via-[#7548E8] to-[#67E8F9]" />

              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-[#5865F2]/20 text-[#67E8F9] border border-[#5865F2]/30">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-mono font-bold">
                  {educationData.score}
                </div>
              </div>

              <h4 className="text-xs font-mono text-[#C4B5FD] tracking-wider uppercase mb-1">
                Higher Education
              </h4>
              <h3 className="text-2xl font-extrabold text-white tracking-tight mb-1">
                {educationData.institution}
              </h3>
              <p className="text-sm text-[#67E8F9] font-medium mb-3">
                {educationData.degree}
              </p>
              <div className="text-xs text-slate-400 font-mono mb-6 flex items-center gap-2">
                <span>{educationData.duration}</span>
                <span>•</span>
                <span>Chennai, India</span>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                {educationData.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5865F2] mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stat / Attributes Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80">
              <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#7548E8]" />
                At a Glance
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#F7F7FC] border border-slate-200/60">
                  <span className="text-xs font-mono text-slate-500 block mb-1">Degree</span>
                  <span className="text-sm font-bold text-slate-900">B.E. ECE</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#F7F7FC] border border-slate-200/60">
                  <span className="text-xs font-mono text-slate-500 block mb-1">Academic CGPA</span>
                  <span className="text-sm font-bold text-[#5865F2]">8.74 / 10</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#F7F7FC] border border-slate-200/60">
                  <span className="text-xs font-mono text-slate-500 block mb-1">Core Focus</span>
                  <span className="text-sm font-bold text-slate-900">AI & Full Stack</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#F7F7FC] border border-slate-200/60">
                  <span className="text-xs font-mono text-slate-500 block mb-1">Availability</span>
                  <span className="text-sm font-bold text-emerald-600">Internship & Freelance</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
