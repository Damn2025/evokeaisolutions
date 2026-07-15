import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

const newImg = '/consultancy/img-sec2.png';

export const ProblemStatementSection = () => (
  <section id="strategy" className="relative py-12 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#f3f4f6] text-[var(--color-text)] overflow-hidden transition-colors duration-300">
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00d2ff]/5 blur-[120px] rounded-full pointer-events-none" />
    <div className="max-w-[1400px] mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="inline-flex items-center gap-2 px-3 sm:px-6 py-1 sm:py-1.5 rounded-xl bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#7c3aed] text-[10px] sm:text-[10px] font-black uppercase tracking-[0.25em] sm:tracking-[0.4em] mb-5 sm:mb-8">
            <Target className="w-3.5 h-3.5" />
            AI Strategy & Readiness
          </div>
          <h2 className="text-4xl sm:text-4xl md:text-6xl font-black text-[var(--color-text)] mb-5 sm:mb-8 leading-tight tracking-tight">
            Moving Beyond <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#4338ca] to-[#6d28d9]">The AI Hype</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-6 sm:mb-10 max-w-xl">
            AI experimentation is a relic of the past—strategic profitability is the future. Most firms are stuck navigating technical debt and privacy barriers, losing ground to faster movers. We cut through the noise, engineering AI-driven architectures that protect your assets and maximize ROI.
          </p>
          <div className="p-0.5 sm:p-1 rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 backdrop-blur-3xl inline-block shadow-lg max-w-full">
            <div className="px-5 sm:px-10 py-4 sm:py-6 rounded-[1.1rem] sm:rounded-[2.3rem] glass-card border-none shadow-xl">
              <p className="text-base sm:text-lg text-[var(--color-text)] font-bold italic">
                &quot;We do not just build technology; we engineer business outcomes.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Desktop only — hide robot/hands graphic on mobile */}
        <div className="hidden lg:flex lg:col-span-7 relative justify-center items-center">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 group w-full lg:translate-x-24"
          >
            <img
              src={newImg}
              alt="Advanced AI Architecture"
              className="w-full h-auto object-contain drop-shadow-[0_0_100px_rgba(37,99,235,0.3)] transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </motion.div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 blur-[120px] rounded-full -z-10 animate-pulse" />
        </div>
      </div>
    </div>
  </section>
);
