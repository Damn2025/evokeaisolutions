import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ZapOff, X, ShieldCheck, Sparkles, Check, Link, TrendingUp, ArrowRight } from 'lucide-react';

const comparisonRows = [
  {
    wrong: { title: "Integration Failure", desc: "Couldn’t securely integrate with custom legacy ERP." },
    right: { title: "Day One Identification", desc: "Architectural limits identified before investment.", icon: ShieldCheck },
  },
  {
    wrong: { title: "Logic Failure", desc: "Couldn’t handle multi-step supply-chain routing." },
    right: { title: "Strategic Alignment", desc: "Right-fit end-to-end solution before you invest.", icon: Check },
  },
  {
    wrong: { title: "Project Scrapped", desc: "Wrong platform fit — capital and months lost.", icon: null },
    right: { title: "Capital Protection", desc: "Spend only on foundations that scale.", icon: Link },
  },
  {
    wrong: { title: "$50k Sunk Cost", desc: "Plus 6 months of lost momentum." },
    right: { title: "Future-Proofing", desc: "Custom architecture for legacy + complex routing.", icon: TrendingUp },
  },
];

export const CostOfGettingItWrongSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#e2e8f0] py-10 lg:py-12 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
        <div className="mb-8 sm:mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 mb-4 sm:mb-6 font-mono">
            <Sparkles className="w-4 h-4 text-[#7c3aed]" />
            <span className="text-[10px] sm:text-[15px] font-black tracking-widest text-[#7c3aed] uppercase">The Evoke Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight text-slate-900">
            The Cost of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#4338ca] to-[#6d28d9] uppercase">Getting It Wrong</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium px-2 sm:px-4">
            We bridge the gap between &quot;off-the-shelf&quot; promises and your actual business reality.
          </p>
        </div>

        {/* Mobile: parallel Wrong vs Evoke comparison */}
        <div className="md:hidden mb-8">
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="rounded-xl bg-slate-300/80 border border-slate-400 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-[#7c3aed]">
              Getting It Wrong
            </div>
            <div className="rounded-xl bg-[#34d399] px-3 py-2 text-[10px] font-black uppercase tracking-widest text-slate-950">
              Evoke Difference
            </div>
          </div>

          <div className="space-y-3">
            {comparisonRows.map((row, idx) => {
              const RightIcon = row.right.icon;
              return (
                <div key={idx} className="grid grid-cols-2 gap-2 items-stretch">
                  <div className="rounded-2xl bg-slate-200 border border-slate-400 p-3 text-left">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <X className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <p className="text-[11px] font-black text-slate-950 leading-tight">{row.wrong.title}</p>
                    </div>
                    <p className="text-[10px] text-slate-600 font-medium leading-snug">{row.wrong.desc}</p>
                  </div>
                  <div className="rounded-2xl bg-white border border-emerald-200 p-3 text-left shadow-sm">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      {RightIcon ? (
                        <div className="w-5 h-5 rounded-md bg-emerald-600 flex items-center justify-center shrink-0">
                          <RightIcon className="w-3 h-3 text-slate-900" />
                        </div>
                      ) : null}
                      <p className="text-[11px] font-black text-slate-900 leading-tight">{row.right.title}</p>
                    </div>
                    <p className="text-[10px] text-slate-600 font-medium leading-snug">{row.right.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href="#audit-form"
            className="mt-5 w-full bg-[#34d399] text-slate-950 font-black py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm uppercase tracking-widest no-underline"
          >
            Schedule Your Audit
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Desktop cards */}
        <div ref={containerRef} className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative w-full h-auto md:h-[780px] mb-8 md:mb-10 perspective">
          <div className="group relative flex w-full">
            <div className="absolute w-[200px] h-[200px] rounded-full blur-[80px] -z-10 opacity-20 transition-opacity duration-500 group-hover:opacity-50 bg-blue-500 -top-10 -right-10"></div>
            <motion.div
              className="w-full bg-slate-200 backdrop-blur-xl border border-slate-400 shadow-2xl rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col relative transition-all duration-500 hover:-translate-y-3 hover:scale-[1.01] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="bg-[#7c3aed]/10 text-[#7c3aed] px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-[#7c3aed]/20">
                  The Sunk Cost
                </div>
                <ZapOff className="text-[#00d2ff]/50 w-6 h-6" />
              </div>

              <div className="space-y-8 flex-grow">
                <h3 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">The &quot;Fast Start&quot; Trap</h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-xl font-medium">
                  To jump into AI, they immediately signed a contract with a popular, off-the-shelf chatbot platform. Six months and $50,000 later, they hit a hard wall.
                </p>

                <div className="pt-8 border-t border-slate-300/50">
                  <p className="text-sm font-black uppercase tracking-[.3em] text-blue-600 mb-6 ">The Collision</p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 text-left">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                        <X className="text-blue-500 w-4 h-4 font-black" />
                      </div>
                      <p className="text-slate-700 font-bold text-lg leading-tight">
                        <span className="text-slate-950">Integration Failure:</span> Architecture could not securely integrate with their custom, legacy ERP system.
                      </p>
                    </div>
                    <div className="flex items-start gap-4 text-left">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                        <X className="text-blue-500 w-4 h-4 font-black" />
                      </div>
                      <p className="text-slate-700 font-bold text-lg leading-tight">
                        <span className="text-slate-950">Logic Failure:</span> It could not handle the complex, multi-step routing their specific supply chain required.
                      </p>
                    </div>
                    <div className="flex items-start gap-4 text-left">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                        <X className="text-blue-500 w-4 h-4 font-black" />
                      </div>
                      <p className="text-slate-700 font-bold text-lg leading-tight">
                        <span className="text-slate-950">Project Scrapped:</span> The platform was fundamentally the wrong fit. The project was completely scrapped.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-slate-300 rounded-[2rem] border border-slate-400 shadow-inner">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-2">
                  <div className="flex flex-col text-left">
                    <span className="text-slate-700 uppercase text-[10px] font-black tracking-widest">Total Value Sunk</span>
                    <span className="text-slate-500 text-[10px] font-bold uppercase mt-1 leading-tight">(plus 6 months of lost momentum)</span>
                  </div>
                  <span className="text-blue-700 font-mono text-2xl sm:text-4xl font-black tracking-tight shrink-0">$50,000.00</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div className="group relative flex w-full">
            <div className="absolute w-[200px] h-[200px] rounded-full blur-[80px] -z-10 opacity-20 transition-opacity duration-500 group-hover:opacity-50 bg-emerald-500 -bottom-10 -left-10"></div>
            <div className="w-full bg-gradient-to-br from-emerald-50 via-white to-white backdrop-blur-xl border border-emerald-200 shadow-xl rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col relative transition-all duration-500 hover:-translate-y-3 hover:scale-[1.01] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]">
              <div className="mb-8 flex items-center justify-between relative z-10">
                <div className="bg-[#34d399] text-slate-950 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-[#34d399]/20 flex items-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  The Evoke Difference
                </div>
              </div>

              <div className="space-y-8 flex-grow relative z-10">
                <h3 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight tracking-tight">The Evoke AI Difference</h3>
                <p className="text-slate-600 leading-relaxed text-xl font-medium">
                  If they had partnered with us first, this expensive mistake would never have happened. We ensure you do not build first and ask questions later.
                </p>

                <div className="pt-8 border-t border-emerald-100">
                  <p className="text-sm font-black uppercase tracking-[.3em] text-emerald-600 mb-6 ">The Evoke Advantage</p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 text-left">
                      <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-emerald-500/20">
                        <ShieldCheck className="text-slate-900 w-4 h-4 font-black" />
                      </div>
                      <p className="text-lg text-slate-600 font-bold leading-tight">
                        <span className="text-slate-900">Day One Identification:</span> Our initial consulting phase identifies architectural limits on day one.
                      </p>
                    </div>
                    <div className="flex items-start gap-4 text-left">
                      <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-emerald-500/20">
                        <Check className="text-slate-900 w-4 h-4 font-black" />
                      </div>
                      <p className="text-lg text-slate-600 font-bold leading-tight">
                        <span className="text-slate-900">Strategic Alignment:</span> We identify the exact, right-fit, end-to-end solution before you invest.
                      </p>
                    </div>
                    <div className="flex items-start gap-4 text-left">
                      <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-emerald-500/20">
                        <Link className="text-slate-900 w-4 h-4 font-black" />
                      </div>
                      <p className="text-lg text-slate-600 font-bold leading-tight">
                        <span className="text-slate-900">Capital Protection:</span> Ensure your time and capital are spent on a foundation that scales.
                      </p>
                    </div>
                    <div className="flex items-start gap-4 text-left">
                      <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-emerald-500/20">
                        <TrendingUp className="text-slate-900 w-4 h-4 font-black" />
                      </div>
                      <p className="text-lg text-slate-600 font-bold leading-tight">
                        <span className="text-slate-900">Future-Proofing:</span> Custom architecture designed for legacy integration and complex routing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 relative z-10 w-full">
                <a
                  href="#audit-form"
                  className="w-full bg-[#34d399] text-slate-950 hover:bg-[#2dc088] shadow-2xl font-black py-5 rounded-[1.5rem] transition-all transform active:scale-95 flex items-center justify-center gap-4 group text-base uppercase tracking-widest no-underline"
                >
                  Schedule Your Audit
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-square bg-blue-500/5 blur-[160px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
