"use client";

import React, { useEffect } from "react";
import Hero from "./components/Hero";
import MeetAEON from "./components/MeetAEON";
import AIAdoption from "./components/AIAdoption";
import TrustedBy from "./components/TrustedBy";
import HowAEONWorksPage from "./components/HowAEONWorksPage";
import AgentAEONCapabilities from "./components/AgentAEONCapabilities";
import DelightfulService from "./components/DelightfulService";
import PricingSection from "./components/PricingSection";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import FinalCTA from "./components/FinalCTA";
import { initScrollAnimations } from "./utils/animations";

/**
 * AEON landing page content (sections only — nav/footer live in page.js)
 */
export default function AeonContent() {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <>
      <Hero />
      <MeetAEON />
      <TrustedBy />
      <HowAEONWorksPage />
      <AgentAEONCapabilities />
      <DelightfulService />
      <AIAdoption />
      <PricingSection />
      <Testimonials />
      <FAQs />
      <Contact />
      <FinalCTA />
    </>
  );
}
