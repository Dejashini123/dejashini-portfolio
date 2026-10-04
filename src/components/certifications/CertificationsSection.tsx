import React from "react";
import { Award, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { certificationsData } from "../../data/portfolioData";

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-24 bg-white text-slate-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Continuous Education"
          badgeVariant="purple"
          title="Learning and Professional Development"
          subtitle="Industry certifications, hands-on simulations, and technical specializations."
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#F7F7FC] rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-white shadow-sm border border-slate-200 text-[#5865F2]">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 font-medium">
                    Verified
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base mb-1 leading-snug">
                  {cert.name}
                </h3>
                <p className="text-xs font-semibold text-[#5865F2] mb-4">
                  {cert.issuer}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skillsCovered.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-white text-[11px] font-medium text-slate-600 border border-slate-200/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Completed badge */}
              <div className="pt-4 border-t border-slate-200/70">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Completed
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
