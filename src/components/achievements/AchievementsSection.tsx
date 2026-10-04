import React from "react";
import {
  Code2,
  Zap,
  Award,
  TrendingUp,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { achievementsData } from "../../data/portfolioData";
import { siteConfig } from "../../data/siteConfig";

export const AchievementsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case "Code2":
        return <Code2 className="w-7 h-7 text-[#FFA116]" />;
      case "Zap":
        return <Zap className="w-7 h-7 text-[#67E8F9]" />;
      case "Award":
        return <Award className="w-7 h-7 text-[#F5B8D5]" />;
      case "TrendingUp":
        return <TrendingUp className="w-7 h-7 text-[#34D399]" />;
      default:
        return <Sparkles className="w-7 h-7 text-[#67E8F9]" />;
    }
  };

  return (
    <section
      id="achievements"
      className="py-24 bg-[#11152E] text-white relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#5865F2]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-[#7548E8]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Verified Milestones"
          badgeVariant="cyan"
          title="Milestones Along My Journey"
          subtitle="Key technical accomplishments, competitive coding, hackathon builds, and real model metrics."
          theme="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#171B38] rounded-3xl p-8 border border-[#7548E8]/30 hover:border-[#67E8F9]/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Top ambient line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#5865F2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-white/5 border border-white/10 text-[#C4B5FD]">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1 group-hover:text-[#67E8F9] transition-colors">
                  {item.title}
                </h3>
                <h4 className="text-xs font-mono text-[#C4B5FD] uppercase tracking-wider mb-4">
                  {item.organization}
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.details}
                </p>
              </div>

              {/* Footer link if relevant */}
              {item.category === "Competitive Coding" && (
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">LeetCode Profile</span>
                  <a
                    href={siteConfig.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FFA116] hover:underline"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
