"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { ArchitecturalMethodology } from "./components/ArchitecturalMethodology";
import { HeroSection } from "./components/HeroSection";
import { ProblemStatementSection } from "./components/ProblemStatementSection";
import { WhyEvokeAI } from "./components/WhyEvokeAI";
import { CostOfGettingItWrongSection } from "./components/CostOfGettingItWrongSection";
import { ConsultingWorkflowSection } from "./components/ConsultingWorkflowSection";
import { StrategyConsultationSection } from "./components/StrategyConsultationSection";
import { TestimonialSection } from "./components/TestimonialSection";
import { IconBackgroundPattern } from "./components/IconBackgroundPattern";
import { FAQSection } from "./components/FAQSection";
import { TrainingSection } from "./components/TrainingSection";
import { LifecycleSuccessSection } from "./components/LifecycleSuccessSection";
import "./consultancy.css";

export default function ConsultancyPage() {
  const theme = "light";

  const jumpTo = (sectionId) => {
    if (sectionId === "about") {
      window.location.href = "/about-us";
    } else if (sectionId === "contact") {
      const el = document.getElementById("audit-form") || document.getElementById("strategy-consultation") || document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.href = "/contact";
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.href = `/#${sectionId}`;
      }
    }
  };

  return (
    <div className="consultancy-page min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-[#00d2ff]/30 font-sans antialiased relative">
      <Navigation theme={theme} jumpTo={jumpTo} />

      <main className="relative z-10">
        <div className="dark-theme relative overflow-hidden">
          <HeroSection />
        </div>

        <div className="relative overflow-hidden content-dark-text">
          <IconBackgroundPattern />
          <ProblemStatementSection />
          <CostOfGettingItWrongSection />
          <ConsultingWorkflowSection />
        </div>

        <ArchitecturalMethodology />
        <WhyEvokeAI />
        <LifecycleSuccessSection />
        <TrainingSection />

        <div className="relative overflow-hidden content-dark-text">
          <TestimonialSection />
        </div>

        <FAQSection />

        <div className="relative overflow-hidden">
          <StrategyConsultationSection />
        </div>
      </main>

      <Footer theme={theme} />
    </div>
  );
}
