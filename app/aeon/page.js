"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import AeonContent from "./AeonContent";
import "./aeon.css";

export default function AeonPage() {
  const theme = "dark";

  const jumpTo = (sectionId) => {
    if (sectionId === "about") {
      window.location.href = "/about-us";
    } else if (sectionId === "contact") {
      const el = document.getElementById("contact");
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
    <div className="aeon-page min-h-screen bg-[#0A0A0A] text-[#E0E0E0] selection:bg-[#FFC700]/30 font-sans antialiased relative">
      <Navigation theme={theme} jumpTo={jumpTo} />
      <main className="relative z-10">
        <AeonContent />
      </main>
      <Footer theme={theme} />
    </div>
  );
}
