import { useState, type FC } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Settings } from 'lucide-react';
const methodologyPhaseOneImg = '/consultancy/meth-1.png';
const methodologyPhaseTwoImg = '/consultancy/meth-2.png';
const methodologyPhaseThreeImg = '/consultancy/meth-3.png';
const methodologyPhaseFourImg = '/consultancy/meth-4.png';

const steps = [
  {
    tag: "PHASE 01",
    tagColor: "text-[#a78bfa] bg-[#a78bfa]/10 border-[#a78bfa]/20",
    title: "Discovery & Blueprinting",
    description: "We map your business processes, define clear success metrics (KPIs), and architect the technical solution.",
    date: "INITIATION"
  },
  {
    tag: "PHASE 02",
    tagColor: "text-[#a78bfa] bg-[#a78bfa]/10 border-[#a78bfa]/20",
    title: "The MVP & Pilot",
    description: "We build a Minimum Viable Product (MVP) in a controlled environment to validate data accuracy, user adoption, and technical feasibility without disrupting enterprise operations.",
    date: "VALIDATION"
  },
  {
    tag: "PHASE 03",
    tagColor: "text-[#a78bfa] bg-[#a78bfa]/10 border-[#a78bfa]/20",
    title: "Enterprise Integration",
    description: "Once the ROI is proven, we connect the AI to your live systems, ensuring secure data pipelines and seamless API integrations.",
    date: "DEPLOYMENT"
  },
  {
    tag: "PHASE 04",
    tagColor: "text-[#a78bfa] bg-[#a78bfa]/10 border-[#a78bfa]/20",
    title: "Training & Scaling",
    description: "Technology is only as good as its adoption. We provide change management consulting, team training, and continuous model optimization to prevent model drift.",
    date: "OPTIMIZATION"
  }
];

// Duplicate steps for seamless loop
const duplicatedSteps = [...steps, ...steps, ...steps];

export const ArchitecturalMethodology: FC = () => {
  const [hoveredCardIdx, setHoveredCardIdx] = useState<number | null>(null);

  return (
    <section id="methodology" className="bg-[#0B1121] text-white py-12 sm:py-24 md:py-32 relative overflow-hidden font-sans transition-colors duration-300 dark-theme">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00d2ff]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#3a7bd5]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 px-3 sm:px-6 py-1 sm:py-1.5 rounded-full border border-blue-500/20 shadow-sm">
            <Settings className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-blue-400 font-mono text-[10px] sm:text-[15px] tracking-[0.2em] sm:tracking-[0.3em] uppercase font-black">
              Operational Engineering
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-black mb-3 sm:mb-6 tracking-tighter text-white"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400">Our Proven Engagement Methodology</span>
        </motion.h2>
        <p className="text-white text-sm sm:text-xl md:text-2xl max-w-4xl mx-auto font-medium leading-relaxed italic opacity-90 px-1">
          &quot;We believe in a structured, transparent approach to enterprise AI adoption to minimize risk and maximize returns.&quot;
        </p>
      </div>

      {/* Constraints the scroll width */}
      <div className="max-w-[1600px] mx-auto relative px-4 md:px-6">
        {/* Continuous Slider Area */}
        <div className="relative overflow-hidden py-10 sm:py-16 group/parent border-x border-[var(--color-card-border)] bg-[var(--color-card-bg)] backdrop-blur-3xl rounded-[2rem] sm:rounded-[4rem] shadow-2xl">
          {/* Mask Overlay for smooth fading edges - adjusted for dark theme */}
          <div className="hidden sm:block absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#0B1121] via-[#0B1121]/80 to-transparent z-10 pointer-events-none" />
          <div className="hidden sm:block absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#0B1121] via-[#0B1121]/80 to-transparent z-10 pointer-events-none" />

          <div
            className="flex w-max gap-6 sm:gap-12 animate-infinite-scroll"
            style={{ animationPlayState: hoveredCardIdx !== null ? 'paused' : 'running' }}
          >
            {duplicatedSteps.map((step, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCardIdx(idx)}
                onMouseLeave={() => setHoveredCardIdx(null)}
                className="flex-shrink-0 w-[240px] h-[380px] sm:w-[600px] sm:h-[750px] p-5 sm:p-16 rounded-[1.75rem] sm:rounded-[4rem] glass-card flex flex-col justify-between transition-all duration-500 shadow-xl border-[var(--color-card-border)] group-hover:bg-[var(--color-card-bg)] hover:-translate-y-2 sm:hover:-translate-y-8 hover:scale-[1.02] sm:hover:scale-[1.05] hover:shadow-2xl hover:z-20"
              >
                <div className="space-y-6 sm:space-y-10">
                  <div className={`inline-block px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-[12px] font-black tracking-[0.2em] rounded-lg border ${step.tagColor}`}>
                    {step.tag}
                  </div>

                  <h3 className="text-2xl sm:text-5xl font-black text-white leading-[1.1] tracking-tighter">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm sm:text-xl font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {step.tag === "PHASE 01" && (
                  <img
                    src={methodologyPhaseOneImg}
                    alt="Phase 1 methodology flow"
                    className="w-full flex-1 min-h-[150px] sm:min-h-[250px] object-contain my-6"
                  />
                )}
                {step.tag === "PHASE 02" && (
                  <img
                    src={methodologyPhaseTwoImg}
                    alt="Phase 2 methodology flow"
                    className="w-full flex-1 min-h-[150px] sm:min-h-[250px] object-contain my-6"
                  />
                )}
                {step.tag === "PHASE 03" && (
                  <img
                    src={methodologyPhaseThreeImg}
                    alt="Phase 3 methodology flow"
                    className="w-full flex-1 min-h-[250px] object-contain my-6"
                  />
                )}
                {step.tag === "PHASE 04" && (
                  <img
                    src={methodologyPhaseFourImg}
                    alt="Phase 4 methodology flow"
                    className="w-full flex-1 min-h-[250px] object-contain my-6"
                  />
                )}

                <div className="flex items-center gap-3 text-[#a78bfa] text-lg font-bold uppercase tracking-tighter">
                  <Calendar size={20} className="opacity-40" />
                  <span>{step.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
