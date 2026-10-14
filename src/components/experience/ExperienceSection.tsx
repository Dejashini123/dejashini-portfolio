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
      className="py-24 relative overflow-hidden theme-transition"
      style={{
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-primary)",
      }}
    >
      {/* Background accents */}
      <div
        className="absolute top-1/3 left-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{ backgroundColor: "var(--accent-peach)" }}
      />
      <div
        className="absolute bottom-10 right-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{ backgroundColor: "var(--accent-lavender)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Industrial Experience"
          badgeVariant="plum"
          title="Practical Engineering in the Field"
          subtitle="Real-world computer vision model development, empirical hyperparameter tuning, and production inference optimization."
        />

        <div className="max-w-5xl mx-auto">
          {/* Main Experience Editorial Folio Card */}
          <div
            className="rounded-3xl p-8 sm:p-12 border shadow-warm-lg overflow-hidden relative paper-surface"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-subtle)",
            }}
          >
            {/* Top Accent Line */}
            <div
              className="absolute top-0 left-0 right-0 h-1.5"
              style={{
                background: "linear-gradient(to right, var(--accent-dusty-peach), var(--accent-lavender))",
              }}
            />

            {/* Header info */}
            <div
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-3.5 rounded-2xl flex items-center justify-center shadow-sm"
                  style={{
                    backgroundColor: "var(--bg-tertiary)",
                    color: "var(--accent-dusty-peach)",
                  }}
                >
                  <Briefcase className="w-8 h-8 text-[#DCA996]" />
                </div>
                <div>
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold mb-2"
                    style={{
                      backgroundColor: "var(--bg-tertiary)",
                      color: "var(--accent-plum)",
                    }}
                  >
                    {exp.type}
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-display-serif font-bold tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    className="text-lg font-semibold mt-0.5"
                    style={{ color: "var(--accent-dusty-peach)" }}
                  >
                    {exp.company}
                  </p>
                </div>
              </div>

              <div
                className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 text-xs font-mono"
                style={{ color: "var(--text-muted)" }}
              >
                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl border"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  <Calendar className="w-4 h-4 text-[#DCA996]" />
                  <span>{exp.period}</span>
                </div>
                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl border"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  <MapPin className="w-4 h-4 text-[#B9A5CF]" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Role Overview */}
            <div
              className="py-6 text-base leading-relaxed font-normal"
              style={{ color: "var(--text-secondary)" }}
            >
              <p>{exp.description}</p>
            </div>

            {/* Empirical Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
              {exp.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-5 border shadow-sm transition-all hover:scale-[1.02]"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  <span
                    className="text-xs font-mono uppercase tracking-wider block mb-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {metric.label}
                  </span>
                  <div
                    className="text-3xl sm:text-4xl font-display-serif font-bold"
                    style={{ color: "var(--accent-plum)" }}
                  >
                    {metric.value}
                  </div>
                  {metric.description && (
                    <span
                      className="text-[11px] font-mono mt-1 block"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {metric.description}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Key Contributions */}
            <div
              className="pt-6 border-t"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <h4
                className="text-xs font-mono uppercase tracking-widest font-semibold mb-4 flex items-center gap-2"
                style={{ color: "var(--accent-dusty-peach)" }}
              >
                <Sparkles className="w-4 h-4 text-[#B9A5CF]" />
                Key Engineering Contributions
              </h4>

              <div className="space-y-3.5">
                {exp.contributions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-4 h-4 flex-shrink-0 mt-1"
                      style={{ color: "var(--accent-dusty-peach)" }}
                    />
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Verification Note */}
            <div
              className="mt-8 pt-4 border-t flex flex-wrap items-center justify-between gap-3 text-xs font-mono"
              style={{
                borderColor: "var(--border-subtle)",
                color: "var(--text-muted)",
              }}
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Verified Industrial Work Experience
              </span>
              <span style={{ color: "var(--text-secondary)" }}>
                Tech: Python • YOLOv8 • OpenCV • Hyperparameter Tuning
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
