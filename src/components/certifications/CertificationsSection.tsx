import React from "react";
import { Award, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { certificationsData } from "../../data/portfolioData";

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-24 relative overflow-hidden theme-transition"
      style={{
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Continuous Learning"
          badgeVariant="lavender"
          title="Certifications & Specializations"
          subtitle="Industry credentials, hands-on enterprise simulations, and verified hardware and machine learning coursework."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="rounded-3xl p-7 border shadow-warm-sm hover:shadow-warm-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between paper-surface"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div
                    className="p-3 rounded-2xl border shadow-sm"
                    style={{
                      backgroundColor: "var(--bg-tertiary)",
                      borderColor: "var(--border-subtle)",
                    }}
                  >
                    <Award className="w-6 h-6 text-[#DCA996]" />
                  </div>
                  <span
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md border"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      borderColor: "var(--border-subtle)",
                      color: "var(--text-muted)",
                    }}
                  >
                    Verified
                  </span>
                </div>

                <h3
                  className="font-display-serif font-bold text-lg mb-1 leading-snug"
                  style={{ color: "var(--text-primary)" }}
                >
                  {cert.name}
                </h3>
                <p
                  className="text-xs font-mono font-semibold mb-4"
                  style={{ color: "var(--accent-dusty-peach)" }}
                >
                  {cert.issuer}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skillsCovered.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono border"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        borderColor: "var(--border-subtle)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Completed badge */}
              <div
                className="pt-4 border-t"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                    color: "#059669",
                    border: "1px solid rgba(16, 185, 129, 0.25)",
                  }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Completed & Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
