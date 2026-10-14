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
        return <Code2 className="w-6 h-6 text-[#DCA996]" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-[#EFC8B8]" />;
      case "Award":
        return <Award className="w-6 h-6 text-[#B9A5CF]" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-emerald-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#DCA996]" />;
    }
  };

  return (
    <section
      id="achievements"
      className="py-24 relative overflow-hidden theme-transition"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* Background accents */}
      <div
        className="absolute top-1/2 -left-20 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{ backgroundColor: "var(--accent-peach)" }}
      />
      <div
        className="absolute top-1/2 -right-20 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{ backgroundColor: "var(--accent-lavender)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Verified Milestones"
          badgeVariant="plum"
          title="Milestones Along My Engineering Journey"
          subtitle="A factual record of competitive coding, national hackathon builds, and real model evaluation results."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-8 border shadow-warm-sm hover:shadow-warm-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group flex flex-col justify-between paper-surface"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
              }}
            >
              {/* Subtle accent hover indicator */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: "linear-gradient(to right, var(--accent-dusty-peach), var(--accent-lavender))",
                }}
              />

              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div
                    className="p-3.5 rounded-2xl border group-hover:scale-105 transition-transform"
                    style={{
                      backgroundColor: "var(--bg-tertiary)",
                      borderColor: "var(--border-subtle)",
                    }}
                  >
                    {getIcon(item.iconName)}
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold border"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      borderColor: "var(--border-subtle)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {item.category}
                  </span>
                </div>

                <h3
                  className="text-xl sm:text-2xl font-display-serif font-bold tracking-tight mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </h3>
                <h4
                  className="text-xs font-mono uppercase tracking-wider mb-4"
                  style={{ color: "var(--accent-dusty-peach)" }}
                >
                  {item.organization}
                </h4>

                <p
                  className="text-sm leading-relaxed font-normal"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.details}
                </p>
              </div>

              {/* Link if LeetCode */}
              {item.category === "Competitive Coding" && (
                <div
                  className="mt-6 pt-4 border-t flex items-center justify-between text-xs font-mono"
                  style={{ borderColor: "var(--border-subtle)" }}
                >
                  <span style={{ color: "var(--text-muted)" }}>LeetCode Profile</span>
                  <a
                    href={siteConfig.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold transition-opacity hover:opacity-80"
                    style={{ color: "var(--accent-dusty-peach)" }}
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
