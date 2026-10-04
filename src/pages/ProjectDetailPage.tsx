import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Maximize2,
  Code,
  Compass,
} from "lucide-react";
import { projectsData } from "../data/portfolioData";
import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";
import { Lightbox } from "../components/common/Lightbox";
import type { LightboxImage } from "../components/common/Lightbox";
import { GithubIcon } from "../components/common/BrandIcons";

export const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Match project
  const project = projectsData.find(
    (p) => p.slug === projectId || p.id === projectId
  );

  // Scroll to top when project route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#11152E] text-white flex flex-col justify-between">
        <Navbar />
        <div className="max-w-xl mx-auto px-4 py-32 text-center">
          <div className="p-4 rounded-2xl bg-pink-500/10 border border-pink-500/20 text-[#F5B8D5] inline-block mb-4">
            <AlertCircle className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-extrabold mb-2">Project Not Found</h2>
          <p className="text-slate-400 mb-6 text-sm">
            The project you're looking for doesn't exist or may have been moved.
          </p>
          <Link
            to="/#projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#5865F2] to-[#7548E8] text-white font-bold text-sm inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Related projects
  const relatedProjects = projectsData.filter((p) => p.id !== project.id);

  // Lightbox handler
  const handleOpenLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const galleryImages: LightboxImage[] = project.gallery.map((g) => ({
    src: g.src,
    title: g.title,
    caption: g.caption,
  }));

  return (
    <div className="min-h-screen bg-[#11152E] text-white selection:bg-[#5865F2] selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Navigation Bar */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#67E8F9] hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Featured Projects</span>
            </Link>

            <span className="text-xs font-mono text-slate-400">
              Verified Technical Case Study
            </span>
          </div>

          {/* PROJECT HERO SECTION */}
          <div className="relative bg-gradient-to-b from-[#171B38] to-[#12152F] rounded-3xl p-8 sm:p-12 border border-[#7548E8]/30 shadow-2xl overflow-hidden mb-12">
            {/* Top Glowing Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#5865F2] via-[#7548E8] to-[#67E8F9]" />

            <div className="max-w-4xl">
              <span className="text-xs font-mono font-bold tracking-widest text-[#67E8F9] uppercase block mb-2">
                {project.subtitle}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                {project.summary}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#5865F2] to-[#7548E8] shadow-[0_0_20px_rgba(88,101,242,0.4)] hover:shadow-[0_0_30px_rgba(88,101,242,0.6)] transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Source on GitHub</span>
                </a>

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 hover:text-white transition-all flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4 text-[#67E8F9]" />
                    <span>Launch Live Demo</span>
                  </a>
                )}

                <Link
                  to="/#contact"
                  className="px-6 py-3.5 rounded-xl font-semibold text-sm text-[#C4B5FD] bg-[#11152E] border border-[#7548E8]/40 hover:border-[#67E8F9] transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Discuss Similar Project</span>
                </Link>
              </div>
            </div>

            {/* Empirical Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/10">
              {project.metrics.map((metric, mIdx) => (
                <div
                  key={mIdx}
                  className="bg-[#11152E]/90 p-4 rounded-2xl border border-white/10"
                >
                  <span className="text-[11px] font-mono text-[#C4B5FD] uppercase tracking-wider block mb-1">
                    {metric.label}
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#67E8F9]">
                    {metric.value}
                  </div>
                  {metric.description && (
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      {metric.description}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* MAIN CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            
            {/* Left Content Column (Problem, Solution, Contributions) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Problem Statement Card */}
              <div className="bg-[#171B38] rounded-3xl p-8 border border-white/10 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-pink-500/20 text-[#F5B8D5]">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    The Problem & Challenge
                  </h3>
                </div>
                <p className="text-slate-300 text-base leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution & Implementation Card */}
              <div className="bg-[#171B38] rounded-3xl p-8 border border-white/10 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#5865F2]/20 text-[#67E8F9]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Solution & Architectural Approach
                  </h3>
                </div>
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  {project.solution}
                </p>

                {/* Key Features List */}
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#C4B5FD] font-semibold mb-3">
                  Core Implementation Features
                </h4>
                <div className="space-y-2.5">
                  {project.keyFeatures.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#67E8F9] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-300 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* My Direct Contributions Card */}
              <div className="bg-[#171B38] rounded-3xl p-8 border border-white/10 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-purple-500/20 text-[#C4B5FD]">
                    <Code className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    My Engineering Contributions
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {project.myContributions.map((contrib, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono text-[#67E8F9] flex-shrink-0 mt-0.5">
                        {cIdx + 1}
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {contrib}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* INTERACTIVE SCREENSHOT GALLERY */}
              <div className="bg-[#171B38] rounded-3xl p-8 border border-white/10 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Screenshot & Visual Gallery
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Click any screenshot to inspect in high-resolution lightbox
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#67E8F9] bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {project.gallery.length} Images
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((item, gIdx) => (
                    <div
                      key={item.id}
                      onClick={() => handleOpenLightbox(gIdx)}
                      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 cursor-pointer shadow-md hover:border-[#5865F2] transition-all"
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5 text-[#67E8F9]" />
                          {item.title}
                        </span>
                        <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar Column (Technologies, Metadata, Related Projects) */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Technologies Card */}
              <div className="bg-[#171B38] rounded-3xl p-7 border border-white/10 shadow-xl">
                <h4 className="text-sm font-mono uppercase tracking-wider text-[#C4B5FD] font-semibold mb-4">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Quick Links */}
              <div className="bg-[#171B38] rounded-3xl p-7 border border-white/10 shadow-xl space-y-3">
                <h4 className="text-sm font-mono uppercase tracking-wider text-[#C4B5FD] font-semibold mb-2">
                  Project Links
                </h4>
                
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-[#5865F2]/20 border border-white/10 hover:border-[#5865F2]/50 text-xs font-semibold text-white transition-all"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-[#67E8F9]" />
                    Source Repository
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-[#5865F2]/20 border border-white/10 hover:border-[#5865F2]/50 text-xs font-semibold text-white transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-emerald-400" />
                      Live Application Demo
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                )}
              </div>

              {/* Related Projects */}
              <div className="bg-[#171B38] rounded-3xl p-7 border border-white/10 shadow-xl">
                <h4 className="text-sm font-mono uppercase tracking-wider text-[#C4B5FD] font-semibold mb-4">
                  Other Featured Projects
                </h4>

                <div className="space-y-4">
                  {relatedProjects.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/projects/${rel.slug}`}
                      className="block p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                    >
                      <span className="text-[11px] font-mono text-[#67E8F9] block mb-1">
                        {rel.subtitle}
                      </span>
                      <h5 className="font-bold text-sm text-white group-hover:text-[#C4B5FD] transition-colors">
                        {rel.title}
                      </h5>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Back Button */}
          <div className="pt-8 border-t border-white/10 flex justify-center">
            <Link
              to="/#projects"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#5865F2] to-[#7548E8] text-white font-bold text-sm flex items-center gap-2 shadow-lg"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </Link>
          </div>

        </div>
      </main>

      <Footer />

      {/* Lightbox for gallery inspection */}
      <Lightbox
        isOpen={lightboxOpen}
        images={galleryImages}
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setCurrentImageIndex((prev) =>
            prev === 0 ? galleryImages.length - 1 : prev - 1
          )
        }
        onNext={() =>
          setCurrentImageIndex((prev) =>
            prev === galleryImages.length - 1 ? 0 : prev + 1
          )
        }
      />
    </div>
  );
};
