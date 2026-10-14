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
      <div
        className="min-h-screen flex flex-col justify-between theme-transition"
        style={{
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      >
        <Navbar />
        <div className="max-w-xl mx-auto px-4 py-32 text-center">
          <div
            className="p-4 rounded-2xl border inline-block mb-4"
            style={{
              backgroundColor: "var(--bg-tertiary)",
              borderColor: "var(--border-subtle)",
              color: "var(--accent-dusty-peach)",
            }}
          >
            <AlertCircle className="w-10 h-10" />
          </div>
          <h2
            className="text-3xl font-display-serif font-bold mb-2 tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Project Not Found
          </h2>
          <p
            className="mb-6 text-sm font-normal"
            style={{ color: "var(--text-secondary)" }}
          >
            The project you're looking for doesn't exist or may have been updated.
          </p>
          <Link
            to="/#projects"
            className="px-6 py-3 rounded-2xl font-mono font-bold text-xs text-[#FAF7F2] inline-flex items-center gap-2 shadow-sm"
            style={{
              backgroundColor: "var(--accent-plum)",
              border: "1px solid var(--accent-dusty-peach)",
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
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
    <div
      className="min-h-screen flex flex-col justify-between theme-transition"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Navigation Bar */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold px-4 py-2 rounded-2xl border transition-all hover:scale-[1.01]"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
                color: "var(--text-primary)",
              }}
            >
              <ArrowLeft className="w-4 h-4 text-[#DCA996]" />
              <span>Back to Featured Projects</span>
            </Link>

            <span
              className="text-xs font-mono font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              Verified Engineering Case Study
            </span>
          </div>

          {/* PROJECT HERO SECTION */}
          <div
            className="rounded-3xl p-8 sm:p-12 border shadow-warm-lg overflow-hidden mb-12 relative paper-surface"
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

            <div className="max-w-4xl">
              <span
                className="text-xs font-mono font-bold tracking-widest uppercase block mb-2"
                style={{ color: "var(--accent-dusty-peach)" }}
              >
                {project.subtitle}
              </span>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-display-serif font-bold tracking-tight mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                {project.title}
              </h1>
              <p
                className="text-base sm:text-lg leading-relaxed mb-8 font-normal"
                style={{ color: "var(--text-secondary)" }}
              >
                {project.summary}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl font-mono font-bold text-xs text-[#FAF7F2] shadow-warm-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
                  style={{
                    backgroundColor: "var(--accent-plum)",
                    border: "1px solid var(--accent-dusty-peach)",
                  }}
                >
                  <GithubIcon className="w-4 h-4 text-[#EFC8B8]" />
                  <span>View Source Repository</span>
                </a>

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-2xl font-mono font-semibold text-xs border transition-all flex items-center gap-2 hover:scale-[1.02]"
                    style={{
                      backgroundColor: "rgba(16, 185, 129, 0.1)",
                      borderColor: "rgba(16, 185, 129, 0.3)",
                      color: "#059669",
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Launch Live Application</span>
                  </a>
                )}

                <Link
                  to="/#contact"
                  className="px-6 py-3.5 rounded-2xl font-mono font-semibold text-xs border transition-all flex items-center gap-2 hover:scale-[1.02]"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--border-subtle)",
                    color: "var(--text-primary)",
                  }}
                >
                  <Sparkles className="w-4 h-4 text-[#B9A5CF]" />
                  <span>Inquire About Project</span>
                </Link>
              </div>
            </div>

            {/* Empirical Metrics Grid */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              {project.metrics.map((metric, mIdx) => (
                <div
                  key={mIdx}
                  className="p-4 rounded-2xl border shadow-sm"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  <span
                    className="text-[10px] font-mono uppercase tracking-wider block mb-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {metric.label}
                  </span>
                  <div
                    className="text-2xl sm:text-3xl font-display-serif font-bold"
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
          </div>

          {/* MAIN CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            
            {/* Left Content Column (Problem, Solution, Contributions) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Problem Statement Card */}
              <div
                className="rounded-3xl p-8 border shadow-warm-sm paper-surface"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-2.5 rounded-xl border flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--bg-tertiary)",
                      borderColor: "var(--border-subtle)",
                    }}
                  >
                    <AlertCircle className="w-5 h-5 text-[#DCA996]" />
                  </div>
                  <h3
                    className="text-xl font-display-serif font-bold tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    The Engineering Challenge
                  </h3>
                </div>
                <p
                  className="text-base leading-relaxed font-normal"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.problem}
                </p>
              </div>

              {/* Solution & Implementation Card */}
              <div
                className="rounded-3xl p-8 border shadow-warm-sm paper-surface"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-2.5 rounded-xl border flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--bg-tertiary)",
                      borderColor: "var(--border-subtle)",
                    }}
                  >
                    <Compass className="w-5 h-5 text-[#B9A5CF]" />
                  </div>
                  <h3
                    className="text-xl font-display-serif font-bold tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Solution & Architectural Approach
                  </h3>
                </div>
                <p
                  className="text-base leading-relaxed mb-6 font-normal"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.solution}
                </p>

                {/* Key Features List */}
                <h4
                  className="text-xs font-mono uppercase tracking-widest font-semibold mb-3.5"
                  style={{ color: "var(--accent-dusty-peach)" }}
                >
                  Core Implementation Features
                </h4>
                <div className="space-y-3">
                  {project.keyFeatures.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0 mt-1"
                        style={{ color: "var(--accent-dusty-peach)" }}
                      />
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* My Direct Contributions Card */}
              <div
                className="rounded-3xl p-8 border shadow-warm-sm paper-surface"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-2.5 rounded-xl border flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--bg-tertiary)",
                      borderColor: "var(--border-subtle)",
                    }}
                  >
                    <Code className="w-5 h-5 text-[#DCA996]" />
                  </div>
                  <h3
                    className="text-xl font-display-serif font-bold tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    My Direct Engineering Contributions
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {project.myContributions.map((contrib, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-3">
                      <div
                        className="w-6 h-6 rounded-lg border flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5"
                        style={{
                          backgroundColor: "var(--bg-tertiary)",
                          borderColor: "var(--border-subtle)",
                          color: "var(--accent-dusty-peach)",
                        }}
                      >
                        {cIdx + 1}
                      </div>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {contrib}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* INTERACTIVE SCREENSHOT GALLERY */}
              <div
                className="rounded-3xl p-8 border shadow-warm-sm paper-surface"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3
                      className="text-xl font-display-serif font-bold tracking-tight"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Technical Visual Gallery
                    </h3>
                    <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                      Click any screenshot to inspect in full-resolution lightbox
                    </p>
                  </div>
                  <span
                    className="text-xs font-mono px-3 py-1 rounded-full border"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      borderColor: "var(--border-subtle)",
                      color: "var(--accent-dusty-peach)",
                    }}
                  >
                    {project.gallery.length} Images
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((item, gIdx) => (
                    <div
                      key={item.id}
                      onClick={() => handleOpenLightbox(gIdx)}
                      className="group relative rounded-2xl overflow-hidden border cursor-pointer shadow-sm hover:scale-[1.02] transition-all"
                      style={{
                        borderColor: "var(--border-subtle)",
                        backgroundColor: "var(--bg-primary)",
                      }}
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5 text-[#EFC8B8]" />
                          {item.title}
                        </span>
                        <p className="text-[11px] text-stone-200 line-clamp-1 mt-0.5">
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
              <div
                className="rounded-3xl p-7 border shadow-warm-sm paper-surface"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <h4
                  className="text-xs font-mono uppercase tracking-widest font-semibold mb-4"
                  style={{ color: "var(--accent-dusty-peach)" }}
                >
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl border text-xs font-mono font-medium"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        borderColor: "var(--border-subtle)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Quick Links */}
              <div
                className="rounded-3xl p-7 border shadow-warm-sm space-y-3 paper-surface"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <h4
                  className="text-xs font-mono uppercase tracking-widest font-semibold mb-2"
                  style={{ color: "var(--accent-dusty-peach)" }}
                >
                  Project Resources
                </h4>
                
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl border text-xs font-mono font-semibold transition-all hover:scale-[1.01]"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderColor: "var(--border-subtle)",
                    color: "var(--text-primary)",
                  }}
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-[#DCA996]" />
                    Source Repository
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" style={{ color: "var(--text-muted)" }} />
                </a>

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl border text-xs font-mono font-semibold transition-all hover:scale-[1.01]"
                    style={{
                      backgroundColor: "rgba(16, 185, 129, 0.1)",
                      borderColor: "rgba(16, 185, 129, 0.3)",
                      color: "#059669",
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Application Demo
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Other Projects */}
              <div
                className="rounded-3xl p-7 border shadow-warm-sm paper-surface"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <h4
                  className="text-xs font-mono uppercase tracking-widest font-semibold mb-4"
                  style={{ color: "var(--accent-dusty-peach)" }}
                >
                  Other Featured Works
                </h4>

                <div className="space-y-3.5">
                  {relatedProjects.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/projects/${rel.slug}`}
                      className="block p-4 rounded-2xl border transition-all hover:-translate-y-0.5 group"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        borderColor: "var(--border-subtle)",
                      }}
                    >
                      <span
                        className="text-[10px] font-mono uppercase tracking-wider block mb-1"
                        style={{ color: "var(--accent-dusty-peach)" }}
                      >
                        {rel.subtitle}
                      </span>
                      <h5
                        className="font-display-serif font-bold text-base transition-colors group-hover:underline"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {rel.title}
                      </h5>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Back Button */}
          <div
            className="pt-8 border-t flex justify-center"
            style={{ borderColor: "var(--border-subtle)" }}
          >
            <Link
              to="/#projects"
              className="px-8 py-3.5 rounded-2xl font-mono font-bold text-xs text-[#FAF7F2] flex items-center gap-2 shadow-warm-md hover:scale-[1.02] transition-all"
              style={{
                backgroundColor: "var(--accent-plum)",
                border: "1px solid var(--accent-dusty-peach)",
              }}
            >
              <ArrowLeft className="w-4 h-4 text-[#EFC8B8]" />
              <span>Back to All Projects</span>
            </Link>
          </div>

        </div>
      </main>

      <Footer />

      {/* Lightbox Modal */}
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

export default ProjectDetailPage;
