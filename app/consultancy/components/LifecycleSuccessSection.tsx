import { useState } from 'react';
import {
  X,
  Check,
  ShieldCheck,
  Globe,
  ShieldAlert,
  Zap,

} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const LifecycleSuccessSection = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: "01",
      name: "STRATEGIC BLUEPRINT",
      failure: {
        tag: "THE PILOT PURGATORY",
        title: "Experimentation Without ROI",
        desc: "Deploying AI as a 'nice-to-have' experiment rather than a core business driver. Organizations often burn capital on pilots that lack a path to production scale.",
        outcome: "Stagnant Innovation",
        cost: "100% Sunk Opportunity Cost"
      },
      success: {
        tag: "ROI-FIRST DESIGN",
        title: "The Strategic Blueprint",
        desc: "We define technical success by business metrics first. Every implementation is mapped to specific cost-reduction or revenue-acceleration targets before a single line of code is written.",
        outcome: "Engineered Profitability",
        benefit: "Capital Preservation"
      }
    },
    {
      id: "02",
      name: "ECOSYSTEM INTEGRATION",
      failure: {
        tag: "THE MIDDLEWARE WALL",
        title: "Brittle System Hooks",
        desc: "Forcing off-the-shelf AI into legacy environments using fragile connectors that break during updates or fail to handle high-concurrency data loads.",
        outcome: "Technical Debt Accumulation",
        cost: "High Maintenance Overhead"
      },
      success: {
        tag: "NATIVE STACK SYNC",
        title: "Integrated Native Layers",
        desc: "We build AI as a seamless extension of your existing ERP/CRM. Our zero-latency architecture ensures your proprietary data flows securely and reliably across your entire global stack.",
        outcome: "Synchronized Intelligence",
        benefit: "Operational Friction Zero"
      }
    },
    {
      id: "03",
      name: "GOVERNANCE & TRUST",
      failure: {
        tag: "THE COMPLIANCE CRISIS",
        title: "Unguarded Model Exposure",
        desc: "Relying on public cloud models for sensitive corporate data. This exposes the organization to massive IP theft, regulatory fines, and erratic AI hallucinations.",
        outcome: "Legal & Reputational Risk",
        cost: "Compromised Intellectual Property"
      },
      success: {
        tag: "ZERO-TRUST VAULT",
        title: "Enterprise-Grade Safety",
        desc: "Private RAG implementations with strict bias mitigation and guardrails. We ensure your data remains your competitive advantage—fully compliant, fully secure, and fully brand-safe.",
        outcome: "Verified Reliability",
        benefit: "Future-Proof Governance"
      }
    }
  ];

  return (
    <section id="roadmap" className="py-16 md:py-24 bg-[#f8fafc] text-slate-700 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header Section */}
        <div className="max-w-4xl mb-10 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-[#f5f3ff] px-3 sm:px-6 py-1 sm:py-1.5 rounded-full border border-violet-200 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-[#7c3aed]" />
              <span className="text-[#7c3aed] font-mono text-[10px] sm:text-[15px] tracking-[0.2em] sm:tracking-[0.3em] uppercase font-black">
                Lifecycle Engineering
              </span>
            </div>
          </motion.div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4 sm:mb-8 leading-[0.95] break-words">
            Stop Experimenting. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#4338ca] to-[#6d28d9]">Start Engineering.</span>
          </h2>
          <p className="text-sm sm:text-lg md:text-2xl text-slate-500 leading-relaxed font-medium max-w-2xl">
            Deploying AI safely and effectively requires more than a pilot project. We build enterprise-grade systems that move the needle on your bottom line.
          </p>
        </div>

        {/* Interactive Progress Bar */}
        <div className="flex items-center gap-2 sm:gap-4 mb-12 bg-slate-100/50 p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl border border-slate-200/50 backdrop-blur-sm">
          {stages.map((stage, idx) => (
            <button
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              className={`flex-1 flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-5 rounded-xl sm:rounded-2xl transition-all duration-500 relative ${activeStage === idx
                ? 'bg-white shadow-xl border border-slate-200 text-slate-900 translate-y-[-2px]'
                : 'text-slate-400 hover:text-slate-600'
                }`}
            >
              <span className={`text-[11px] font-black w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-500 ${activeStage === idx ? 'bg-[#7c3aed] border-[#7c3aed] text-white shadow-lg shadow-[#7c3aed]/30' : 'border-slate-300'
                }`}>
                {stage.id}
              </span>
              <span className="text-sm font-black tracking-widest hidden md:block uppercase">{stage.name}</span>
              {activeStage === idx && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-2xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch min-h-[500px]">
          <AnimatePresence mode="wait">
            {/* Failure Column */}
            <motion.div
              key={`failure-${activeStage}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="group bg-blue-50/60 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 border border-blue-100/80 transition-all hover:bg-blue-50 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-10">
                <span className="text-[10px] font-black bg-blue-100/50 text-blue-600 px-4 py-1.5 rounded-full uppercase tracking-widest border border-blue-200/50 shadow-sm">
                  {stages[activeStage].failure.tag}
                </span>
                <div className="h-px flex-1 bg-blue-100/50" />
              </div>

              <div className="flex-grow flex flex-col">
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 tracking-tight">{stages[activeStage].failure.title}</h3>
                <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
                  {stages[activeStage].failure.desc}
                </p>

                <div className="mt-auto space-y-5 pt-8 border-t border-slate-200">
                  <div className="flex items-center gap-3 text-slate-900 font-black text-sm uppercase tracking-widest">
                    <X className="w-5 h-5 text-slate-400" />
                    Status: {stages[activeStage].failure.outcome}
                  </div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-slate-300" /> Capital Risk: {stages[activeStage].failure.cost}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Success Column */}
            <motion.div
              key={`success-${activeStage}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={`group ${
                activeStage === 0 ? 'bg-[#34d399]' : 
                activeStage === 1 ? 'bg-[#3b0764]' : 
                'bg-[#1e3a8a]'
              } rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 ${activeStage === 0 ? 'text-slate-900' : 'text-white'} shadow-2xl transition-all hover:scale-[1.01] flex flex-col relative overflow-hidden`}
            >
              {/* Dynamic background glow */}
              <div className={`absolute -top-24 -right-24 w-64 h-64 ${
                activeStage === 0 ? 'bg-white/30' : 
                activeStage === 1 ? 'bg-purple-400/20' : 
                'bg-blue-400/20'
              } blur-[80px] rounded-full pointer-events-none`} />

              <div className="flex items-center gap-2 mb-10 relative z-10">
                <span className={`text-[10px] font-black ${activeStage === 0 ? 'bg-slate-950 text-white' : 'bg-white text-slate-950'} px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg`}>
                  {stages[activeStage].success.tag}
                </span>
                <div className="h-px flex-1 bg-slate-950/10" />
              </div>

              <div className="flex-grow flex flex-col relative z-10">
                <h3 className={`text-3xl sm:text-4xl font-black mb-6 tracking-tight ${activeStage === 0 ? 'text-slate-950' : 'text-white'}`}>{stages[activeStage].success.title}</h3>
                <p className={`text-xl font-medium leading-relaxed mb-10 opacity-90 ${activeStage === 0 ? 'text-slate-900' : 'text-slate-50'}`}>
                  {stages[activeStage].success.desc}
                </p>

                <div className={`mt-auto space-y-5 pt-8 border-t ${activeStage === 0 ? 'border-slate-950/10' : 'border-white/20'}`}>
                  <div className={`flex items-center gap-3 font-black text-sm uppercase tracking-widest ${activeStage === 0 ? 'text-slate-950' : 'text-white'}`}>
                    <Check className="w-5 h-5" />
                    Metric: {stages[activeStage].success.outcome}
                  </div>
                  <div className={`text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 ${activeStage === 0 ? 'text-slate-800' : 'text-slate-200'}`}>
                    <ShieldCheck className={`w-4 h-4 ${activeStage === 0 ? 'text-slate-950/40' : 'text-white/40'}`} /> Core Value: {stages[activeStage].success.benefit}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>


      </div>

      {/* Global Markets Footer */}
      <div className="mt-20 md:mt-24 flex flex-col items-center gap-8 opacity-40 text-center">
        <div className="flex items-center gap-6 sm:gap-10 flex-wrap justify-center text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-slate-600">
          <span className="flex items-center gap-2 group cursor-default hover:text-slate-900 transition-colors">
            <Globe className="w-3.5 h-3.5 text-[#34d399]" /> North America
          </span>
          <span className="hidden md:block text-slate-300">/</span>
          <span className="flex items-center gap-2.5 group cursor-default hover:text-slate-900 transition-colors">
            <Globe className="w-4 h-4 text-[#34d399]" /> The Netherlands
          </span>
          <span className="hidden md:block text-slate-300">/</span>
          <span className="flex items-center gap-2.5 group cursor-default hover:text-slate-900 transition-colors">
            <Globe className="w-4 h-4 text-[#34d399]" /> UK & EU
          </span>
        </div>
      </div>

    </section>
  );
};
