import React from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { experienceData } from "../../data/portfolioData";

export const ExperienceSection: React.FC = () => {
  const exp = experienceData[0];

  return (
    <section
      id="experience"
      className="py-24 bg-[#11152E] text-white relative overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#5865F2]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#7548E8]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Industry Track Record"
          badgeVariant="cyan"
          title="Where I've Applied My Skills"
          subtitle="Real-world engineering, deep learning model optimization, and production pipeline deployment."
          theme="dark"
        />

        <div className="max-w-5xl mx-auto">
          {/* Main Experience Card */}
          <div className="relative bg-gradient-to-b from-[#171B38] to-[#12152F] rounded-3xl p-8 sm:p-12 border border-[#7548E8]/30 shadow-2xl overflow-hidden">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#5865F2] via-[#7548E8] to-[#67E8F9]" />

            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-[#5865F2]/20 border border-[#5865F2]/40 text-[#67E8F9]">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#5865F2]/15 border border-[#5865F2]/30 text-[#67E8F9] text-xs font-mono font-semibold mb-2">
                    {exp.type}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-[#C4B5FD] font-semibold mt-0.5">
                    {exp.company}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <Calendar className="w-4 h-4 text-[#67E8F9]" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <MapPin className="w-4 h-4 text-[#F5B8D5]" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Role Overview Paragraph */}
            <div className="py-6 text-slate-300 text-base leading-relaxed">
              <p>{exp.description}</p>
            </div>

            {/* Metric Statistic Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
              {exp.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-[#11152E]/80 backdrop-blur-md rounded-2xl p-5 border border-[#5865F2]/30 hover:border-[#67E8F9]/50 transition-colors shadow-lg"
                >
                  <span className="text-xs font-mono text-[#C4B5FD] block uppercase tracking-wider mb-1">
                    {metric.label}
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#67E8F9] to-white">
                    {metric.value}
                  </div>
                  {metric.description && (
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      {metric.description}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Key Contributions List */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-sm font-mono uppercase tracking-wider text-[#C4B5FD] font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#67E8F9]" />
                Key Engineering Contributions
              </h4>

              <div className="space-y-3">
                {exp.contributions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#67E8F9] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Note */}
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Verified Industrial Work Experience
              </span>
              <span className="text-[#C4B5FD]">
                Tech: Python • YOLOv8 • OpenCV • Deep Learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
