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
        return <Globe className="w-7 h-7 text-[#5865F2]" />;
      case "Terminal":
        return <Terminal className="w-7 h-7 text-[#7548E8]" />;
      case "Cpu":
        return <Cpu className="w-7 h-7 text-[#67E8F9]" />;
      default:
        return <Globe className="w-7 h-7 text-[#5865F2]" />;
    }
  };

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "Target":
        return <Target className="w-6 h-6 text-[#5865F2]" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-[#7548E8]" />;
      case "MessageSquare":
        return <MessageSquare className="w-6 h-6 text-[#67E8F9]" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-[#F5B8D5]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#5865F2]" />;
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="py-24 bg-[#EFEFF8] text-slate-900 relative overflow-hidden"
    >
      {/* Background radial highlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#C4B5FD]/30 to-[#F5B8D5]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SERVICES SECTION */}
        <SectionHeader
          badge="Freelance Offerings"
          badgeVariant="purple"
          title="Let's Build Something That Works for You"
          subtitle="Practical technology solutions for businesses, startups, and creative ideas."
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Service Header */}
                <div className="p-3.5 rounded-2xl bg-[#F7F7FC] border border-slate-100 inline-block mb-5 shadow-sm">
                  {getServiceIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Offerings list */}
                <div className="space-y-2.5 mb-8">
                  {service.offerings.map((offering, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#5865F2] flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-medium leading-relaxed">
                        {offering}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Trigger */}
              <button
                onClick={scrollToContact}
                className="w-full py-3 rounded-xl font-bold text-xs text-slate-800 bg-[#F7F7FC] hover:bg-[#5865F2] hover:text-white border border-slate-200/80 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Discuss This Service</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Central Consultation Banner */}
        <div className="max-w-4xl mx-auto mb-28 text-center bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-xl font-extrabold text-slate-900 tracking-tight mb-1">
              Have a custom project or engineering idea in mind?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Let's talk through your goals, scope, and technical roadmap with zero obligation.
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#5865F2] via-[#7548E8] to-[#67E8F9] hover:shadow-xl hover:shadow-[#5865F2]/40 transition-all flex-shrink-0 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* WHY WORK WITH ME SECTION */}
        <SectionHeader
          badge="Guiding Principles"
          badgeVariant="brand"
          title="Why Collaborate With Me?"
          subtitle="Honest problem-solving, dual AI and full-stack perspectives, and direct, clear communication."
          theme="light"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyWorkWithMeData.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F7F7FC] border border-slate-100 flex items-center justify-center mb-5 shadow-sm">
                {getPillarIcon(pillar.iconName)}
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2 tracking-tight">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
