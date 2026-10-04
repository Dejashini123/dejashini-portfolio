import React from "react";
import { Download, FileText, CheckCircle2, Eye } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export const ResumeSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#171B38] via-[#11152E] to-[#171B38] text-white relative overflow-hidden border-y border-white/10">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#5865F2]/20 via-[#7548E8]/20 to-[#67E8F9]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#67E8F9] text-xs font-mono font-semibold mb-6">
          <FileText className="w-3.5 h-3.5 text-[#67E8F9]" />
          <span>Curriculum Vitae</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Want to Know More About My Experience?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          Explore my resume for a concise overview of my education, technical skills,
          internship experience, and projects.
        </p>

        {/* Action Button Row */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={siteConfig.resumeUrl}
            download="Resume_Dejashini.pdf"
            className="px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#5865F2] via-[#7548E8] to-[#67E8F9] shadow-[0_0_30px_rgba(88,101,242,0.4)] hover:shadow-[0_0_40px_rgba(88,101,242,0.7)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5"
          >
            <Download className="w-4 h-4 text-white" />
            <span>Download My Resume</span>
          </a>

          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 hover:text-white transition-all flex items-center gap-2"
          >
            <Eye className="w-4 h-4 text-[#67E8F9]" />
            <span>View PDF Online</span>
          </a>
        </div>

        {/* Small metadata bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Verified Resume Document
          </span>
          <span>•</span>
          <span>Format: PDF (198 KB)</span>
          <span>•</span>
          <span>Last Updated: October 2026</span>
        </div>
      </div>
    </section>
  );
};
