import React from "react";
import {
  Globe,
  Terminal,
  Cpu,
  ArrowRight,
  CheckCircle,
  Target,
  Layers,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "../common/SectionHeader";
import {
  servicesData,
  whyWorkWithMeData,
} from "../../data/portfolioData";

export const ServicesSection: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-6 h-6 text-[#DCA996]" />;
      case "Terminal":
        return <Terminal className="w-6 h-6 text-[#B9A5CF]" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-[#EFC8B8]" />;
      default:
        return <Globe className="w-6 h-6 text-[#DCA996]" />;
    }
  };

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "Target":
        return <Target className="w-5 h-5 text-[#DCA996]" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-[#B9A5CF]" />;
      case "MessageSquare":
        return <MessageSquare className="w-5 h-5 text-[#EFC8B8]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#DCA996]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#DCA996]" />;
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden theme-transition"
      style={{
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-primary)",
      }}
    >
      {/* Background accents */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ backgroundColor: "var(--accent-peach)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SERVICES OFFERED */}
        <SectionHeader
          badge="Engineering & Services"
          badgeVariant="lavender"
          title="Practical Solutions for Modern Demands"
          subtitle="Whether you need a bespoke web platform, custom Python automation, or an AI prototype tailored to your workflow."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl p-8 border shadow-warm-md hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between paper-surface"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <div>
                {/* Service Header */}
                <div
                  className="p-3.5 rounded-2xl border inline-block mb-5 shadow-sm"
                  style={{
                    backgroundColor: "var(--bg-tertiary)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  {getServiceIcon(service.iconName)}
                </div>

                <h3
                  className="text-xl font-display-serif font-bold mb-3 tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-6 font-normal"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {service.description}
                </p>

                {/* Offerings list */}
                <div className="space-y-2.5 mb-8">
                  {service.offerings.map((offering, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: "var(--accent-dusty-peach)" }}
                      />
                      <span
                        className="text-xs font-medium leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {offering}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={scrollToContact}
                className="w-full py-3 rounded-xl font-mono font-bold text-xs border transition-all flex items-center justify-center gap-2 group hover:scale-[1.01]"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  borderColor: "var(--border-subtle)",
                  color: "var(--text-primary)",
                }}
              >
                <span>Discuss This Service</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Central Consultation Banner */}
        <div
          className="max-w-4xl mx-auto mb-24 rounded-3xl p-8 sm:p-10 border shadow-warm-lg flex flex-col sm:flex-row items-center justify-between gap-6 paper-surface"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-subtle)",
          }}
        >
          <div className="text-left">
            <h4
              className="text-xl sm:text-2xl font-display-serif font-bold tracking-tight mb-1"
              style={{ color: "var(--text-primary)" }}
            >
              Have a custom project or AI engineering idea in mind?
            </h4>
            <p
              className="text-xs sm:text-sm font-normal"
              style={{ color: "var(--text-secondary)" }}
            >
              Let's talk through your goals, scope, and technical roadmap with zero obligation.
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="px-6 py-3.5 rounded-xl font-mono font-bold text-xs text-[#FAF7F2] shadow-sm flex-shrink-0 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
            style={{
              backgroundColor: "var(--accent-plum)",
              border: "1px solid var(--accent-dusty-peach)",
            }}
          >
            <span>Start Conversation</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#EFC8B8]" />
          </button>
        </div>

        {/* WHY WORK WITH ME SECTION */}
        <SectionHeader
          badge="Guiding Values"
          badgeVariant="peach"
          title="Why Collaborate With Me?"
          subtitle="Honest problem-solving, dual AI and full-stack perspectives, and direct, proactive communication."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyWorkWithMeData.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-7 border shadow-warm-sm hover:shadow-warm-md transition-all duration-300 hover:-translate-y-1 paper-surface"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <div
                className="w-11 h-11 rounded-2xl border flex items-center justify-center mb-5 shadow-sm"
                style={{
                  backgroundColor: "var(--bg-tertiary)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                {getPillarIcon(pillar.iconName)}
              </div>
              <h4
                className="text-base font-display-serif font-bold mb-2 tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                {pillar.title}
              </h4>
              <p
                className="text-xs leading-relaxed font-normal"
                style={{ color: "var(--text-secondary)" }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
