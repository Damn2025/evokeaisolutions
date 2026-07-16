"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import AutomationsContent from "./AutomationsContent";
import "./automations.css";

export default function AutomationsPage() {
  const theme = "light";

  const jumpTo = (sectionId) => {
    if (sectionId === "about") {
      window.location.href = "/about-us";
    } else if (sectionId === "contact") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.href = "/contact-us";
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
    <div className="automations-page min-h-screen bg-[#faf9ff] text-evoke-black selection:bg-evoke-accent/30 font-sans antialiased relative">
      <Navigation theme={theme} jumpTo={jumpTo} />
      <main className="relative z-10">
        <AutomationsContent />
      </main>
      <Footer theme={theme} />
    </div>
  );
}
