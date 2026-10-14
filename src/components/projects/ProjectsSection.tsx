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
      className="py-24 relative overflow-hidden theme-transition"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* Background accents */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: "var(--accent-peach)" }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: "var(--accent-lavender)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Featured Engineering Folio"
          badgeVariant="peach"
          title="Engineered to Solve Real Challenges"
          subtitle="A selection of machine learning architectures, real-time computer vision pipelines, and full-stack applications with verified metrics."
        />

        <div className="space-y-16">
          {projectsData.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={project.id}
                className="rounded-3xl p-6 sm:p-10 border shadow-warm-md hover:shadow-warm-lg transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center paper-surface"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                {/* Screenshot & Visual Preview Column */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div
                    className="relative group rounded-2xl overflow-hidden border shadow-sm"
                    style={{
                      borderColor: "var(--border-subtle)",
                      backgroundColor: "var(--bg-tertiary)",
                    }}
                  >
                    <img
                      src={project.mainImage}
                      alt={project.title}
                      className="w-full h-72 sm:h-80 md:h-96 object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                    {/* Floating Zoom / Lightbox Trigger */}
                    <button
                      onClick={() => handleOpenLightbox(project, 0)}
                      className="absolute bottom-4 right-4 p-2.5 rounded-xl text-white backdrop-blur-md transition-all shadow-md flex items-center gap-1.5 text-xs font-mono font-semibold"
                      style={{
                        backgroundColor: "rgba(52, 38, 51, 0.8)",
                        border: "1px solid rgba(220, 210, 233, 0.2)",
                      }}
                      aria-label="Enlarge project screenshot"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-[#EFC8B8]" />
                      <span>Inspect Gallery</span>
                    </button>

                    {/* Metric Chip on Image */}
                    {project.metrics.length > 0 && (
                      <div
                        className="absolute top-4 left-4 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-mono border shadow-sm text-white"
                        style={{
                          backgroundColor: "rgba(37, 28, 39, 0.85)",
                          borderColor: "rgba(239, 200, 184, 0.3)",
                        }}
                      >
                        <span className="text-[#EFC8B8] font-bold">
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
                        className="relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 hover:scale-105"
                        style={{
                          borderColor: "var(--border-subtle)",
                        }}
                        title={thumb.title}
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
                        className="w-16 h-12 rounded-lg text-xs font-mono font-bold flex items-center justify-center flex-shrink-0 transition-colors border"
                        style={{
                          backgroundColor: "var(--bg-tertiary)",
                          borderColor: "var(--border-subtle)",
                          color: "var(--text-primary)",
                        }}
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
                    <span
                      className="text-xs font-mono font-bold tracking-wider uppercase block mb-1"
                      style={{ color: "var(--accent-dusty-peach)" }}
                    >
                      {project.subtitle}
                    </span>
                    <h3
                      className="text-2xl sm:text-3xl font-display-serif font-bold tracking-tight mb-3"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-sm sm:text-base leading-relaxed mb-6 font-normal"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {project.summary}
                    </p>

                    {/* Metric Badges */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                      {project.metrics.slice(0, 3).map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-3 rounded-2xl border"
                          style={{
                            backgroundColor: "var(--bg-primary)",
                            borderColor: "var(--border-subtle)",
                          }}
                        >
                          <span
                            className="text-[10px] font-mono block uppercase tracking-wider mb-0.5"
                            style={{ color: "var(--text-muted)" }}
                          >
                            {metric.label}
                          </span>
                          <span
                            className="text-base font-bold font-display-serif"
                            style={{ color: "var(--text-primary)" }}
                          >
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
                          className="px-3 py-1 rounded-xl text-xs font-mono font-medium border"
                          style={{
                            backgroundColor: "var(--bg-tertiary)",
                            borderColor: "var(--border-subtle)",
                            color: "var(--text-primary)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div
                    className="flex flex-wrap items-center gap-3 pt-4 border-t"
                    style={{ borderColor: "var(--border-subtle)" }}
                  >
                    <Link
                      to={`/projects/${project.slug}`}
                      className="px-5 py-2.5 rounded-xl font-mono font-bold text-xs text-[#FAF7F2] shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
                      style={{
                        backgroundColor: "var(--accent-plum)",
                        border: "1px solid var(--accent-dusty-peach)",
                      }}
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#EFC8B8]" />
                    </Link>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all flex items-center gap-1.5 border"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        borderColor: "var(--border-subtle)",
                        color: "var(--text-primary)",
                      }}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all flex items-center gap-1.5 border"
                        style={{
                          backgroundColor: "rgba(16, 185, 129, 0.1)",
                          borderColor: "rgba(16, 185, 129, 0.3)",
                          color: "#059669",
                        }}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live App</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
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
