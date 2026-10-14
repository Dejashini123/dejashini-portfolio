import React from "react";
import {
  Code2,
  Layout,
  Server,
  Brain,
  Sparkles,
  Wrench,
  ChevronRight,
} from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { skillCategories } from "../../data/portfolioData";

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming Languages":
        return <Code2 className="w-5 h-5 text-[#DCA996]" />;
      case "Frontend Development":
        return <Layout className="w-5 h-5 text-[#B9A5CF]" />;
      case "Backend Development":
        return <Server className="w-5 h-5 text-[#DCA996]" />;
      case "AI and Machine Learning":
        return <Brain className="w-5 h-5 text-[#B9A5CF]" />;
      case "Generative AI and NLP":
        return <Sparkles className="w-5 h-5 text-[#EFC8B8]" />;
      case "Tools and Core Concepts":
        return <Wrench className="w-5 h-5 text-[#A79A8D]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#DCA996]" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden theme-transition"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* Background accents */}
      <div
        className="absolute top-1/2 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: "var(--accent-peach)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: "var(--accent-lavender)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Core Competencies"
          badgeVariant="lavender"
          title="Technologies & Engineering Toolset"
          subtitle="A structured overview of the languages, frameworks, AI libraries, and architectural principles I use to build robust software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl p-7 border transition-all duration-300 hover:shadow-warm-lg hover:-translate-y-1.5 flex flex-col justify-between paper-surface"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div
                    className="p-3 rounded-2xl shadow-sm border group-hover:scale-105 transition-transform"
                    style={{
                      backgroundColor: "var(--bg-tertiary)",
                      borderColor: "var(--border-subtle)",
                    }}
                  >
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3
                      className="font-display-serif font-bold text-xl tracking-tight"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {cat.category}
                    </h3>
                  </div>
                </div>

                <p
                  className="text-xs mb-6 leading-relaxed font-normal"
                  style={{ color: "var(--text-muted)" }}
                >
                  {cat.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-medium shadow-sm border transition-all hover:scale-[1.03]"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        borderColor: "var(--border-subtle)",
                        color: "var(--text-primary)",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DCA996]" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Metadata Bar */}
              <div
                className="mt-6 pt-4 border-t flex items-center justify-between text-[11px] font-mono"
                style={{
                  borderColor: "var(--border-subtle)",
                  color: "var(--text-muted)",
                }}
              >
                <span>{cat.skills.length} competencies</span>
                <span
                  className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center font-semibold"
                  style={{ color: "var(--accent-dusty-peach)" }}
                >
                  Applied in Projects <ChevronRight className="w-3 h-3 ml-0.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
