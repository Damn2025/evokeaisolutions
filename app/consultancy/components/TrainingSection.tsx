"use client";

import { ArrowRight, Users, ShieldCheck, TrendingUp, GraduationCap } from "lucide-react";

const trainingImg1 = "/consultancy/training-1.png";
const trainingImg2 = "/consultancy/training-2.png";
const trainingImg3 = "/consultancy/training-3.png";
const trainingImg4 = "/consultancy/training-4.png";

export const TrainingSection = () => {
  const trainingModules = [
    {
      title: "Skill Upgrade: Prompt Engineering vs. Basic Chat",
      description:
        "Stop treating AI like a Google search. Most teams use 'First-Generation' prompting—asking simple questions and getting generic answers. Our training moves your staff into Prompt Architecture, where they learn to build autonomous triggers.",
      image: trainingImg1,
      stats: "40% Efficiency Gain",
      category: "Capacity Building",
      icon: <GraduationCap size={14} />,
    },
    {
      title: "Cultural Upgrade: Resistance vs. Adoption",
      description:
        "Legacy mindsets are the biggest 'bugs' in your system. Software updates are easy; people updates are hard. We help your organization shed the 'Legacy Department' mentality where AI is feared or ignored, replacing it with a culture of deep adoption.",
      image: trainingImg2,
      stats: "98% Adoption Rate",
      category: "Cultural Shift",
      icon: <Users size={14} />,
    },
    {
      title: "Security Upgrade: The Wild West vs. Governance",
      description:
        "Unregulated AI is a ticking time bomb. Using AI without a governance framework is an outdated risk that modern enterprises can’t afford. We provide the 'Risk Guardrails' necessary to scale safely.",
      image: trainingImg3,
      stats: "Identity-Centric Secure",
      category: "Enterprise Security",
      icon: <ShieldCheck size={14} />,
    },
    {
      title: "Strategic Upgrade: Expense vs. ROI",
      description:
        "Move beyond AI as a 'cost center.' Treating AI as a trendy experiment is a 2023 mindset. In 2026, AI is a financial lever. We train leadership to identify high-value use cases that prevent 'Model Drift' and technical debt.",
      image: trainingImg4,
      stats: "2.5x ROI Target",
      category: "ROI Strategy",
      icon: <TrendingUp size={14} />,
    },
  ];

  return (
    <section
      id="capacity-building"
      className="bg-slate-300 pt-10 sm:pt-16 pb-6 sm:pb-4 px-4 sm:px-6 md:px-12 relative font-display text-slate-900 w-full"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,38%)_minmax(0,1fr)] gap-8 sm:gap-12 lg:gap-20 xl:gap-28 items-start">
          <aside
            className="training-sticky-col w-full mb-4 lg:mb-0 text-left z-20"
            style={{ position: "sticky", top: "7.5rem" }}
          >
            <div className="inline-flex items-center gap-2 bg-[#f5f3ff] px-3 sm:px-6 py-1 sm:py-1.5 rounded-full border border-violet-200 shadow-sm mb-4 sm:mb-8">
              <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7c3aed]" />
              <span className="text-[#7c3aed] font-mono text-[10px] sm:text-[15px] tracking-[0.2em] sm:tracking-[0.3em] uppercase font-black">
                skill upgradation
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl xl:text-8xl font-black mb-4 sm:mb-12 leading-[1.1] tracking-tighter text-slate-900 break-words">
              From Legacy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#4338ca] to-[#6d28d9]">
                to AI Mastery.
              </span>
            </h2>
            <div className="mb-6 sm:mb-16 pl-0 lg:pl-8 border-none lg:border-l-4 border-indigo-600/30">
              <p className="text-slate-900 text-base sm:text-2xl md:text-3xl font-bold tracking-tight mb-3 sm:mb-8 leading-[1.3]">
                The &quot;Wait-and-See&quot; approach is now the &quot;Falling Behind&quot; approach.
              </p>
              <p className="text-slate-600 text-sm sm:text-xl md:text-2xl leading-relaxed font-medium font-sans max-w-2xl">
                We bridge the gap between basic deployment and true operational mastery, upgrading
                your human capital for the AI-first era.
              </p>
            </div>
            <div className="flex justify-start">
              <a
                href="#audit-form"
                className="hidden lg:flex items-center gap-3 bg-slate-950 text-white px-12 py-6 rounded-2xl font-bold text-sm uppercase tracking-[0.2em] hover:bg-indigo-700 transition-all shadow-xl active:scale-95 w-fit"
              >
                Upgrade Your Team Now <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </aside>

          {/* Mobile marquee cards | Desktop vertical stack */}
          <div className="w-full min-w-0">
            <div className="lg:hidden -mx-4 overflow-hidden pb-4">
              <div className="flex w-max gap-4 animate-cards-marquee hover:[animation-play-state:paused]">
                {[...trainingModules, ...trainingModules].map((module, index) => (
                  <article
                    key={index}
                    className="shrink-0 w-[280px] bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden"
                  >
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={module.image}
                        alt={module.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 right-2 backdrop-blur-md bg-white/90 px-2.5 py-1 rounded-xl text-[10px] font-black text-indigo-700">
                        {module.stats}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#f5f3ff] border border-violet-200 rounded-full mb-2">
                        <span className="text-[#7c3aed]">{module.icon}</span>
                        <span className="text-[9px] font-black uppercase tracking-wider text-[#7c3aed]">
                          {module.category}
                        </span>
                      </div>
                      <h3 className="text-base font-black tracking-tight text-slate-900 leading-snug mb-2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] to-[#6d28d9]">
                          {module.title.split(":")[0]}:
                        </span>{" "}
                        {module.title.split(":")[1]}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed font-medium font-sans line-clamp-4 mb-3">
                        {module.description}
                      </p>
                      <a
                        href="#audit-form"
                        className="inline-flex items-center gap-1.5 text-indigo-600 font-bold text-[10px] uppercase tracking-widest"
                      >
                        Explore Scope <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="hidden lg:block space-y-40 pb-8">
              {trainingModules.map((module, index) => (
                <article key={index} className="group relative">
                  <div className="relative rounded-[3rem] overflow-hidden aspect-video mb-12 border border-slate-200 shadow-2xl bg-white">
                    <img
                      src={module.image}
                      alt={module.title}
                      className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
                    <div className="absolute bottom-10 right-10 backdrop-blur-xl bg-white/90 border border-white/20 px-6 py-3 rounded-[2rem] shadow-2xl">
                      <p className="text-indigo-700 font-black text-2xl mb-1">{module.stats}</p>
                      <div className="h-1 w-full bg-indigo-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600 w-3/4" />
                      </div>
                    </div>
                  </div>

                  <div className="px-4 text-left">
                    <div className="inline-flex items-center gap-2.5 px-6 py-1.5 bg-[#f5f3ff] border border-violet-200 rounded-full mb-6 shadow-sm">
                      <span className="text-[#7c3aed]">{module.icon}</span>
                      <span className="text-[15px] font-black uppercase tracking-[0.2em] text-[#7c3aed]">
                        {module.category}
                      </span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 leading-tight mb-8">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#4338ca] to-[#6d28d9]">
                        {module.title.split(":")[0]}:
                      </span>{" "}
                      {module.title.split(":")[1]}
                    </h3>
                    <p className="text-slate-600 text-2xl md:text-3xl leading-relaxed mb-12 max-w-3xl font-medium font-sans">
                      {module.description}
                    </p>
                    <a
                      href="#audit-form"
                      className="mt-12 flex items-center gap-3 text-indigo-600 font-bold text-sm uppercase tracking-[0.2em] cursor-pointer group/btn w-fit"
                    >
                      Explore Scope
                      <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-3 transition-transform" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
