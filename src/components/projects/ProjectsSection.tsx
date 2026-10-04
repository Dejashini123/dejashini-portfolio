import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  ArrowRight,
  Maximize2,
} from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import { Lightbox } from "../common/Lightbox";
import type { LightboxImage } from "../common/Lightbox";
import { projectsData } from "../../data/portfolioData";
import type { ProjectData } from "../../data/portfolioData";
import { GithubIcon } from "../common/BrandIcons";

export const ProjectsSection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState<LightboxImage[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenLightbox = (project: ProjectData, startIndex: number = 0) => {
    const images: LightboxImage[] = project.gallery.map((item) => ({
      src: item.src,
      title: item.title,
      caption: item.caption,
    }));
    setActiveGallery(images);
    setCurrentImageIndex(startIndex);
    setLightboxOpen(true);
  };

  return (
    <section
      id="projects"
      className="py-24 bg-[#F7F7FC] text-slate-900 relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Featured Portfolio"
          badgeVariant="purple"
          title="Projects That Turn Ideas Into Reality"
          subtitle="A selection of AI, machine learning, computer vision, and full-stack applications I've worked on."
          theme="light"
        />

        <div className="space-y-16">
          {projectsData.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={project.id}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Screenshot & Visual Preview Column */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative group rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 shadow-md">
                    <img
                      src={project.mainImage}
                      alt={project.title}
                      className="w-full h-72 sm:h-80 md:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Floating Zoom / Lightbox Trigger */}
                    <button
                      onClick={() => handleOpenLightbox(project, 0)}
                      className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-black/60 hover:bg-[#5865F2] text-white backdrop-blur-md transition-all shadow-lg flex items-center gap-1.5 text-xs font-semibold"
                      aria-label="Enlarge screenshot"
                    >
                      <Maximize2 className="w-4 h-4" />
                      <span>View Gallery</span>
                    </button>

                    {/* Quick Metric Chip on Image */}
                    {project.metrics.length > 0 && (
                      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-xl text-white text-xs font-mono">
                        <span className="text-[#67E8F9] font-bold">
                          {project.metrics[0].label}:
                        </span>{" "}
                        {project.metrics[0].value}
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Strip */}
                  <div className="flex gap-2.5 mt-3 overflow-x-auto pb-1">
                    {project.gallery.slice(0, 4).map((thumb, tIdx) => (
                      <button
                        key={thumb.id}
                        onClick={() => handleOpenLightbox(project, tIdx)}
                        className="relative w-16 h-12 rounded-lg overflow-hidden border-2 border-transparent hover:border-[#5865F2] focus:border-[#5865F2] transition-all flex-shrink-0"
                      >
                        <img
                          src={thumb.src}
                          alt={thumb.title}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                    {project.gallery.length > 4 && (
                      <button
                        onClick={() => handleOpenLightbox(project, 4)}
                        className="w-16 h-12 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center flex-shrink-0 transition-colors"
                      >
                        +{project.gallery.length - 4}
                      </button>
                    )}
                  </div>
                </div>

                {/* Project Details Column */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-between ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <span className="text-xs font-mono font-bold tracking-wider text-[#5865F2] uppercase block mb-1">
                      {project.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                      {project.summary}
                    </p>

                    {/* Metric Badges */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                      {project.metrics.slice(0, 3).map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="bg-[#F7F7FC] p-3 rounded-xl border border-slate-200/80"
                        >
                          <span className="text-[11px] font-mono text-slate-500 block">
                            {metric.label}
                          </span>
                          <span className="text-base font-black text-slate-900">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#5865F2] to-[#7548E8] hover:shadow-lg hover:shadow-[#5865F2]/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors flex items-center gap-1.5"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl font-semibold text-xs text-[#5865F2] bg-[#5865F2]/10 hover:bg-[#5865F2]/20 border border-[#5865F2]/20 transition-colors flex items-center gap-1.5"
                        title="Live demo link configured - editable in data"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reusable Image Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        images={activeGallery}
        currentIndex={currentImageIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setCurrentImageIndex((prev) =>
            prev === 0 ? activeGallery.length - 1 : prev - 1
          )
        }
        onNext={() =>
          setCurrentImageIndex((prev) =>
            prev === activeGallery.length - 1 ? 0 : prev + 1
          )
        }
      />
    </section>
  );
};
