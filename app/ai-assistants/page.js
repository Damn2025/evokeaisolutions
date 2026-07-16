"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import ImageSection from "./components/ImageSection";
import TheGap from "./components/TheGap";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import "./ai-assistants.css";

export default function AiAssistantsPage() {
  const theme = "light";

  const jumpTo = (sectionId) => {
    if (sectionId === "about") {
      window.location.href = "/about-us";
    } else if (sectionId === "contact") {
      window.location.href = "/contact-us";
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
    <div className="ai-assistants-page flex flex-col min-h-screen bg-neutral-950 text-white selection:bg-cyan-500/30">
      <Navigation theme={theme} jumpTo={jumpTo} />

      <header className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-100"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-transparent to-neutral-950/60"></div>
        </div>

        <div className="container mx-auto px-6 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-8 border border-cyan-500/20 bg-black/60 rounded-full text-[9px] font-bold text-[#00d2ff] tracking-[0.2em] uppercase backdrop-blur-md">
                <span className="w-1 h-1 bg-[#00d2ff] rounded-full animate-pulse"></span>
                Neural Engine v2.0
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white leading-[1.05] drop-shadow-2xl">
                Conversational <br />
                AI <br />
                <span className="bg-gradient-to-r from-[#00d2ff] to-[#34d399] bg-clip-text text-transparent">
                  That Feels <br />
                  Human.
                </span>
              </h1>

              <p className="max-w-xl text-base md:text-xl text-neutral-100 leading-relaxed mb-12 font-medium drop-shadow-md">
                Evoke AI builds high-performance, emotionally intelligent chatbots that transform how businesses interact with the world.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <a
                  href="#contact"
                  className="btn-primary w-full sm:w-auto px-10 py-4 rounded-2xl font-bold text-lg transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,210,255,0.4)] flex items-center justify-center"
                >
                  Explore AI solutions
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-4 rounded-2xl font-bold text-lg transition-all backdrop-blur-md flex items-center justify-center"
                >
                  Build your bot
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-end">
              <div className="space-y-4 w-full max-w-[220px]">
                <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-5 rounded-2xl transform hover:scale-105 transition-transform duration-500 group shadow-xl">
                  <div className="text-2xl font-bold text-white mb-0.5 group-hover:text-[#00d2ff] transition-colors">
                    99.9%
                  </div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                    Accuracy
                  </div>
                  <div className="mt-3 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[99.9%] h-full bg-gradient-to-r from-[#00d2ff] to-[#34d399]"></div>
                  </div>
                </div>

                <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-5 rounded-2xl transform hover:scale-105 transition-transform duration-500 group shadow-xl">
                  <div className="text-2xl font-bold text-white mb-0.5 group-hover:text-[#34d399] transition-colors">
                    50M+
                  </div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                    Chats
                  </div>
                </div>

                <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-5 rounded-2xl transform hover:scale-105 transition-transform duration-500 group shadow-xl">
                  <div className="text-2xl font-bold text-white mb-0.5 group-hover:text-[#00d2ff] transition-colors">
                    200+
                  </div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                    Clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Services />
      <ImageSection />
      <TechStack />
      <TheGap />
      <Testimonials />
      <FAQ />

      <div className="h-24 md:h-48 bg-neutral-950"></div>

      <Contact />
      <CTA />
      <Footer theme={theme} />
    </div>
  );
}
