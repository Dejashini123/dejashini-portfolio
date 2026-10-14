import React from "react";
import { Download, FileText, CheckCircle2, Eye } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export const ResumeSection: React.FC = () => {
  return (
    <section
      className="py-20 relative overflow-hidden border-y theme-transition"
      style={{
        backgroundColor: "var(--accent-plum)",
        borderColor: "rgba(239, 200, 184, 0.2)",
        color: "#FAF7F2",
      }}
    >
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none opacity-25"
        style={{
          background: "radial-gradient(ellipse at center, var(--accent-dusty-peach), var(--accent-lavender))",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold mb-6 border"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            borderColor: "rgba(239, 200, 184, 0.3)",
            color: "#EFC8B8",
          }}
        >
          <FileText className="w-3.5 h-3.5 text-[#EFC8B8]" />
          <span>Curriculum Vitae</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display-serif font-bold text-white tracking-tight mb-4">
          Want a Comprehensive Overview of My Work?
        </h2>

        <p className="text-base sm:text-lg text-[#DCD2E9] max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
          Review my formal resume detailing engineering coursework at Saveetha, full-stack technologies,
          REtech AI internship metrics, and project architectures.
        </p>

        {/* Action Button Row */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={siteConfig.resumeUrl}
            download="Resume_Dejashini.pdf"
            className="px-8 py-4 rounded-2xl font-mono font-bold text-xs text-[#292522] shadow-warm-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5"
            style={{
              backgroundColor: "var(--accent-dusty-peach)",
            }}
          >
            <Download className="w-4 h-4 text-[#292522]" />
            <span>Download Resume (PDF)</span>
          </a>

          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl font-mono font-semibold text-xs text-[#FAF7F2] border transition-all flex items-center gap-2 hover:bg-white/10"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              borderColor: "rgba(239, 200, 184, 0.3)",
            }}
          >
            <Eye className="w-4 h-4 text-[#EFC8B8]" />
            <span>View PDF Online</span>
          </a>
        </div>

        {/* Metadata bar */}
        <div
          className="mt-8 pt-6 border-t flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#A79A8D]"
          style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
        >
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            Verified Resume Document
          </span>
          <span>•</span>
          <span>Format: PDF (198 KB)</span>
          <span>•</span>
          <span>Saveetha ECE Graduate Candidate</span>
        </div>
      </div>
    </section>
  );
};
