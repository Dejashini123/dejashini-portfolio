import React from "react";
import {
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Compass,
  Cpu,
} from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { educationData, approachPillars } from "../../data/portfolioData";
import { siteConfig } from "../../data/siteConfig";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden theme-transition"
      style={{
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-primary)",
      }}
    >
      {/* Background ambient accents */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: "var(--accent-peach)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: "var(--accent-lavender)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Background & Philosophy"
          badgeVariant="peach"
          title="Curious by Nature. Creative by Design."
          subtitle="Combining rigorous electronics and communication engineering foundations with practical machine learning and full-stack software development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Editorial Bio & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div
              className="rounded-3xl p-8 sm:p-10 border transition-all paper-surface"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <div className="flex items-center gap-3.5 mb-6">
                <div
                  className="p-3 rounded-2xl flex items-center justify-center shadow-sm"
                  style={{
                    backgroundColor: "var(--bg-tertiary)",
                    color: "var(--accent-dusty-peach)",
                  }}
                >
                  <Cpu className="w-6 h-6 text-[#DCA996]" />
                </div>
                <div>
                  <h3
                    className="text-2xl font-display-serif font-bold tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Engineering Foundations Meets Intelligent Code
                  </h3>
                  <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                    Saveetha Engineering College • Chennai, India
                  </span>
                </div>
              </div>

              <div
                className="space-y-4 text-base leading-relaxed font-normal"
                style={{ color: "var(--text-secondary)" }}
              >
                <p>
                  I'm <strong style={{ color: "var(--text-primary)" }}>{siteConfig.name}</strong>,
                  an Electronics and Communication Engineering student at{" "}
                  <span className="font-semibold" style={{ color: "var(--accent-dusty-peach)" }}>
                    {educationData.institution}
                  </span>{" "}
                  with an active focus on artificial intelligence, machine learning, computer vision,
                  and modern software engineering.
                </p>
                <p>
                  My journey combines rigorous hardware, signal processing, and communications engineering
                  fundamentals with practical software craftsmanship. I love building systems where AI
                  capabilities are not just experimental models, but responsive, scalable digital products
                  with measurable impact.
                </p>
                <p>
                  From geospatial carbon stock estimation using satellite LiDAR to real-time YOLOv8
                  telemetry demonstrated at national hackathons, I approach every project with engineering
                  integrity, clean architecture, and respect for user experience.
                </p>
              </div>

              {/* Competency Pills */}
              <div
                className="mt-8 pt-6 border-t flex flex-wrap gap-2.5"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                {[
                  "Computer Vision",
                  "YOLOv8 & OpenCV",
                  "FastAPI & Python",
                  "React Frontend",
                  "Satellite GIS AI",
                  "Embedded Hardware",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors"
                    style={{
                      backgroundColor: "var(--bg-tertiary)",
                      color: "var(--text-primary)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* My Approach / Working Principles */}
            <div
              className="rounded-3xl p-8 sm:p-10 border transition-all paper-surface"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <div className="flex items-center gap-3.5 mb-6">
                <div
                  className="p-3 rounded-2xl flex items-center justify-center shadow-sm"
                  style={{
                    backgroundColor: "var(--bg-tertiary)",
                    color: "var(--accent-lavender)",
                  }}
                >
                  <Compass className="w-6 h-6 text-[#B9A5CF]" />
                </div>
                <div>
                  <h3
                    className="text-xl font-display-serif font-bold tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Working Approach & Principles
                  </h3>
                  <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                    How I think, architect, and collaborate
                  </p>
                </div>
              </div>

              <div className="space-y-3.5">
                {approachPillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-4 h-4 flex-shrink-0 mt-1"
                      style={{ color: "var(--accent-dusty-peach)" }}
                    />
                    <span
                      className="text-sm font-medium leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {pillar}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education & Quick Stats */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education Folio Card */}
            <div
              className="rounded-3xl p-8 sm:p-10 border shadow-warm-lg transition-all relative overflow-hidden"
              style={{
                backgroundColor: "var(--accent-plum)",
                color: "#FAF7F2",
                borderColor: "var(--accent-dusty-peach)",
              }}
            >
              {/* Subtle accent border */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: "linear-gradient(to right, var(--accent-dusty-peach), var(--accent-lavender))",
                }}
              />

              <div className="flex items-center justify-between mb-6">
                <div
                  className="p-3 rounded-2xl flex items-center justify-center shadow-sm"
                  style={{
                    backgroundColor: "rgba(239, 200, 184, 0.15)",
                    border: "1px solid rgba(239, 200, 184, 0.3)",
                    color: "#EFC8B8",
                  }}
                >
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold"
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    color: "#34D399",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                  }}
                >
                  {educationData.score}
                </div>
              </div>

              <h4 className="text-xs font-mono uppercase tracking-widest text-[#EFC8B8] mb-1">
                Higher Education
              </h4>
              <h3 className="text-2xl font-display-serif font-bold text-white tracking-tight mb-1">
                {educationData.institution}
              </h3>
              <p className="text-sm font-medium text-[#DCD2E9] mb-3">
                {educationData.degree}
              </p>
              <div className="text-xs font-mono text-[#A79A8D] mb-6 flex items-center gap-2">
                <span>{educationData.duration}</span>
                <span>•</span>
                <span>Chennai, India</span>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                {educationData.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#FAF7F2]/90 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EFC8B8] mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* At a Glance Grid */}
            <div
              className="rounded-3xl p-6 sm:p-8 border shadow-warm-sm transition-all paper-surface"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <h4
                className="text-base font-display-serif font-bold mb-4 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                <Sparkles className="w-4 h-4 text-[#DCA996]" />
                At a Glance
              </h4>

              <div className="grid grid-cols-2 gap-3.5">
                <div
                  className="p-3.5 rounded-2xl border"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  <span className="text-[10px] font-mono block mb-1 uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                    Degree
                  </span>
                  <span className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
                    B.E. ECE
                  </span>
                </div>

                <div
                  className="p-3.5 rounded-2xl border"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  <span className="text-[10px] font-mono block mb-1 uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                    Academic CGPA
                  </span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    8.74 / 10
                  </span>
                </div>

                <div
                  className="p-3.5 rounded-2xl border"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  <span className="text-[10px] font-mono block mb-1 uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                    Core Stack
                  </span>
                  <span className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
                    Python • React • AI
                  </span>
                </div>

                <div
                  className="p-3.5 rounded-2xl border"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  <span className="text-[10px] font-mono block mb-1 uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                    Status
                  </span>
                  <span className="text-sm font-bold" style={{ color: "var(--accent-dusty-peach)" }}>
                    Open to Work
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
