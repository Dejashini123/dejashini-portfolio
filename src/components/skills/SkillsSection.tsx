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
        return <Code2 className="w-5 h-5 text-blue-600" />;
      case "Frontend Development":
        return <Layout className="w-5 h-5 text-cyan-600" />;
      case "Backend Development":
        return <Server className="w-5 h-5 text-purple-600" />;
      case "AI and Machine Learning":
        return <Brain className="w-5 h-5 text-emerald-600" />;
      case "Generative AI and NLP":
        return <Sparkles className="w-5 h-5 text-pink-600" />;
      case "Tools and Core Concepts":
        return <Wrench className="w-5 h-5 text-amber-600" />;
      default:
        return <Code2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-24 bg-white text-slate-900 relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-50/80 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-50/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Core Competencies"
          badgeVariant="brand"
          title="Technologies I Work With"
          subtitle="The tools and technologies I use to transform ideas into working applications."
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="group relative bg-[#F7F7FC] rounded-3xl p-7 border border-slate-200/90 hover:border-[#5865F2]/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Category Top Card Info */}
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-3 rounded-2xl bg-white shadow-sm border border-slate-200/80 group-hover:scale-110 transition-transform">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg group-hover:text-[#5865F2] transition-colors">
                      {cat.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 text-xs font-semibold text-slate-800 shadow-sm hover:border-[#5865F2]/50 hover:bg-[#5865F2]/5 hover:text-[#5865F2] transition-all"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5865F2]/60" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{cat.skills.length} competencies</span>
                <span className="text-[#5865F2] opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                  Verified In Projects <ChevronRight className="w-3 h-3 ml-0.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
