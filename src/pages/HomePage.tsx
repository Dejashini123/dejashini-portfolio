import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/common/Navbar";
import { HeroSection } from "../components/hero/HeroSection";
import { AboutSection } from "../components/about/AboutSection";
import { SkillsSection } from "../components/skills/SkillsSection";
import { ExperienceSection } from "../components/experience/ExperienceSection";
import { ProjectsSection } from "../components/projects/ProjectsSection";
import { ServicesSection } from "../components/services/ServicesSection";
import { AchievementsSection } from "../components/achievements/AchievementsSection";
import { CertificationsSection } from "../components/certifications/CertificationsSection";
import { ResumeSection } from "../components/common/ResumeSection";
import { ContactSection } from "../components/contact/ContactSection";
import { Footer } from "../components/common/Footer";
import { useScrollSpy } from "../hooks/useScrollSpy";

const sectionIds = [
  "hero",
  "about",
  "skills",
  "experience",
  "projects",
  "services",
  "achievements",
  "certifications",
  "contact",
];

export const HomePage: React.FC = () => {
  const activeSection = useScrollSpy(sectionIds, 150);
  const location = useLocation();

  // Scroll to hash on initial load or route transition
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div
      className="min-h-screen theme-transition"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* Floating Study Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ServicesSection />
        <AchievementsSection />
        <CertificationsSection />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
