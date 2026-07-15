import { useState, type FC } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Cpu, Layers, ShieldCheck, Zap } from 'lucide-react';

export const ConsultingWorkflowSection: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      title: "AI Readiness & Strategy",
      description: "Before writing a single line of code, we align AI with your business goals to ensure long-term scalability.",
      icon: BarChart3,
      items: [
        { label: "Data Audits", sub: "Evaluating quality and security." },
        { label: "ROI Analysis", sub: "Prioritizing high-impact use cases." }
      ]
    },
    {
      title: "Custom AI Solutions",
      description: "Proprietary AI systems tailored to your exact operational workflows and data privacy requirements.",
      icon: Cpu,
      items: [
        { label: "Agentic AI", sub: "Autonomous, self-correcting agents." },
        { label: "Secure RAG", sub: "Private data analysis systems." }
      ]
    },
    {
      title: "Legacy Modernization",
      description: "Enhancing your existing ecosystem without disruption. We build bridges, not silos.",
      icon: Layers,
      items: [
        { label: "ERP/CRM Integration", sub: "Salesforce, SAP, and HubSpot sync." },
        { label: "Cloud-Native", sub: "Scalable AI engineering." }
      ]
    },
    {
      title: "Governance & Security",
      description: "Deploying AI safely is just as critical as deploying it quickly. We ensure complete brand safety.",
      icon: ShieldCheck,
      items: [
        { label: "Global Compliance", sub: "GDPR, CCPA, and HIPAA expertise." },
        { label: "Bias Mitigation", sub: "Guardrails for accurate outputs." }
      ]
    }
  ];

  const progressWidth = (activeIndex / (services.length - 1)) * 100;
  const Icon = services[activeIndex].icon;

  return (
    <section id="roadmap" className="relative py-10 lg:py-12 px-4 sm:px-6 bg-[#e5e7eb] text-[var(--color-text)] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-8 sm:mb-16 lg:mb-24 text-center lg:text-left mx-auto lg:mx-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 mb-4 sm:mb-6 font-mono">
            <Zap className="w-4 h-4 text-[#7c3aed]" />
            <span className="text-[10px] sm:text-[15px] font-black tracking-widest text-[#7c3aed] uppercase">Strategic ROI Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-[var(--color-text)] mb-3 sm:mb-6 tracking-tight leading-[1.05]">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] to-[#6d28d9]">Strategic Roadmap</span>
          </h2>
          <p className="text-sm sm:text-xl lg:text-3xl text-slate-600 leading-relaxed font-medium">
            A linear progression designed to move your enterprise from AI curiosity to operational excellence.
          </p>
        </div>

        {/* Mobile: vertical roadmap 1 → 4 */}
        <div className="lg:hidden relative pl-2">
          <div className="absolute left-[27px] top-4 bottom-4 w-[3px] bg-gradient-to-b from-[#4f46e5] via-[#7c3aed] to-indigo-300 rounded-full" />
          <div className="space-y-5">
            {services.map((service, idx) => {
              const StepIcon = service.icon;
              return (
                <div key={idx} className="relative flex gap-4">
                  <div className="relative z-10 w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] text-white flex items-center justify-center shadow-lg shadow-indigo-500/30 border border-white/20">
                    <span className="text-lg font-black">{idx + 1}</span>
                  </div>
                  <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-indigo-500/10">
                        <StepIcon className="w-4 h-4 text-indigo-600" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7c3aed]">
                        Phase 0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-base font-black text-slate-900 mb-1.5 leading-snug">{service.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium mb-3">{service.description}</p>
                    <div className="grid grid-cols-1 gap-2">
                      {service.items.map((item, i) => (
                        <div key={i} className="rounded-xl bg-slate-50 border border-slate-100 px-3 py-2 text-left">
                          <p className="text-xs font-black text-slate-900">{item.label}</p>
                          <p className="text-[10px] text-slate-500 font-medium">{item.sub}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="relative mb-12 hidden lg:block px-10">
          <div className="absolute top-[25px] left-10 right-10 h-[6px] bg-black/10 rounded-full" />
          <div
            className="absolute top-[25px] left-10 h-[6px] bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] transition-all duration-700 ease-in-out shadow-[0_0_20px_rgba(79,70,229,0.5)] rounded-full"
            style={{ width: `${progressWidth}%` }}
          />
          <div className="relative flex justify-between">
            {services.map((_, idx) => (
              <div key={idx} className="flex flex-col items-center cursor-pointer" onClick={() => setActiveIndex(idx)}>
                <motion.div
                  animate={idx <= activeIndex ? {
                    boxShadow: [
                      "0 0 0px rgba(124, 58, 237, 0)",
                      "0 0 20px rgba(124, 58, 237, 0.4)",
                      "0 0 0px rgba(124, 58, 237, 0)"
                    ],
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-700 z-20 relative
                    ${idx <= activeIndex
                      ? 'bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] border-white/30 text-white scale-110 shadow-xl shadow-indigo-500/30'
                      : 'bg-white border-slate-200 text-black group-hover:border-indigo-400/40 shadow-sm'}`}
                >
                  {idx <= activeIndex && (
                    <div className="absolute inset-0 bg-[#7c3aed] blur-xl rounded-2xl -z-10 opacity-40 animate-pulse" />
                  )}
                  <span className="text-xl font-black">{idx + 1}</span>
                </motion.div>
                <div className={`mt-5 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${idx <= activeIndex ? 'text-[#7c3aed]' : 'text-black'}`}>
                  Phase 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Card Slider */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-center">
          <div className="relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-16 rounded-[3rem] relative min-h-[550px] flex flex-col group overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />

              <div className="p-4 rounded-2xl border bg-indigo-500/10 border-indigo-500/20 group-hover:bg-indigo-500/20 w-fit mb-8 transition-all">
                <Icon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-5xl font-black text-[var(--color-text)] mb-8 transition-colors leading-[1.1] group-hover:text-indigo-600">
                {services[activeIndex].title}
              </h3>
              <p className="text-2xl text-slate-600 leading-relaxed font-medium mb-12 italic">
                &quot;{services[activeIndex].description}&quot;
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-auto">
                {services[activeIndex].items.map((item, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-[var(--color-card-bg)] border border-[var(--color-card-border)] transition-all group/item shadow-sm hover:border-indigo-500/30">
                    <p className="text-xl font-black text-[var(--color-text)] mb-2 transition-colors group-hover/item:text-indigo-600">{item.label}</p>
                    <p className="text-base text-slate-500 font-medium">{item.sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6">
              {services.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`p-12 rounded-[2.5rem] border transition-all duration-500 cursor-pointer group relative overflow-hidden
                      ${idx === activeIndex
                      ? 'bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] text-white border-white/20 shadow-2xl shadow-indigo-500/30 scale-[1.05]'
                      : 'bg-white/60 border-slate-200 text-slate-600 hover:border-indigo-400/40 hover:bg-white/80'}`}
                >
                  {idx === activeIndex && (
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-300/20 blur-3xl rounded-full" />
                  )}

                  <div className="flex items-center gap-6 mb-6 relative z-10">
                    <span className={`text-[14px] font-black uppercase tracking-[0.3em] ${idx === activeIndex ? 'text-white/70' : 'text-slate-400 group-hover:text-[#4f46e5]'}`}>0{idx + 1}</span>
                    <div className={`h-[1px] flex-grow transition-all duration-700 ${idx === activeIndex ? 'bg-white/30 w-full' : 'bg-slate-200 group-hover:bg-indigo-300/20'}`} />
                  </div>
                  <p className={`text-[20px] font-black tracking-tight uppercase leading-tight relative z-10 ${idx === activeIndex ? 'text-white' : 'text-slate-900'}`}>{item.title}</p>
                  <div className={`mt-6 h-[5px] transition-all duration-1000 bg-current rounded-full ${idx === activeIndex ? 'w-20 opacity-100' : 'w-0 opacity-0 group-hover:w-12 group-hover:opacity-40 group-hover:bg-[#4f46e5]'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
