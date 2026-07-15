import { useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Globe2, Fingerprint, Cpu, ArrowUpRight, ShieldCheck } from 'lucide-react';
const featureOneImg = '/consultancy/img-1.png';
const featureTwoImg = '/consultancy/jq9bu.jpg';
const featureThreeImg = '/consultancy/img-3.png';
const featureFourImg = '/consultancy/img4.png';

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
  accent: string;
  tag: string;
  image?: string;
}

const CardContent = ({ feature, index, isHovered }: { feature: Feature, index: number, isHovered: boolean }) => {
  return (
    <div className="relative h-full p-5 sm:p-8 md:p-10 flex flex-col pointer-events-none">
      {/* Background Image Logic */}
      {feature.image && (
        <div className="absolute inset-0 -z-10 h-full w-full">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover"
          />
          {/* Deepened bottom fade to ensure white text visibility and a "catchy" contrast transition */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 via-black/20 to-transparent transition-opacity duration-700" />
        </div>
      )}

      {/* All Content pushed to bottom */}
      <div className="mt-auto relative z-10">
        {/* Icon & Tag Header moved here */}
        <div className="flex justify-between items-start mb-4 sm:mb-10 shrink-0 relative z-10">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-white/20 to-transparent blur-md rounded-full opacity-50" />
            <div className="relative p-2 sm:p-3 rounded-xl bg-white/10 border border-white/20 text-white shadow-sm backdrop-blur-sm">
              {feature.icon}
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#00d2ff] transition-colors duration-300" />
            <span className="text-[9px] sm:text-[10px] font-mono text-white/80 tracking-wider uppercase font-black">
              {feature.tag}
            </span>
          </div>
        </div>

        <h3 className={`text-xl sm:text-3xl md:text-5xl font-black mb-2 sm:mb-4 tracking-tighter leading-tight drop-shadow-xl text-white transition-all duration-500 ${isHovered ? 'translate-y-0' : 'sm:translate-y-4'}`}>
          {feature.title}
        </h3>

        <p className="sm:hidden text-xs leading-snug font-bold text-white/90 line-clamp-3">
          {feature.description}
        </p>
        <motion.p
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20, height: isHovered ? 'auto' : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="hidden sm:block text-lg md:text-xl leading-snug lg:leading-relaxed font-bold max-w-[98%] drop-shadow-lg text-white opacity-90 overflow-hidden"
        >
          {feature.description}
        </motion.p>

        <div className="mt-4 sm:mt-10 flex items-center gap-4 overflow-hidden">
          <div className={`flex-grow h-[2px] bg-white transition-all duration-700 ${isHovered ? 'opacity-60 w-full shadow-[0_0_15px_rgba(255,255,255,0.4)]' : 'opacity-20 w-12'}`} />
          <span className="flex-shrink-0 text-[11px] sm:text-[14px] font-mono uppercase tracking-[0.4em] font-black text-white">
            0{index + 1}
          </span>
        </div>
      </div>

      {/* Subtle Glow Bloom (for cards without images mainly) */}
      {!feature.image && (
        <div className={`absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-br ${feature.gradient} blur-[120px] opacity-20`} />
      )}
    </div>
  );
};

const FlipCard = ({ feature, index }: { feature: Feature, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group h-[280px] sm:h-[400px] md:h-[550px] rounded-2xl sm:rounded-[3rem] overflow-hidden shrink-0 w-[85vw] max-w-[300px] snap-center md:w-auto md:max-w-none md:shrink md:snap-align-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered((v) => !v)}
    >
      <div
        className="w-full h-full rounded-2xl sm:rounded-[2.5rem] glass-card overflow-hidden shadow-xl sm:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] border-[var(--color-card-border)]"
      >
        <CardContent feature={feature} index={index} isHovered={isHovered} />
      </div>
    </div>
  );
};

export const WhyEvokeAI = () => {
  const features = [
    {
      title: "Business-First Mindset",
      description: "We define technical success by business metrics—focusing on reduced processing times, lower costs, and increased margins.",
      icon: <Rocket className="w-6 h-6" />,
      gradient: "from-[#0072ff]/30 to-[#00d2ff]/20",
      accent: "#00d2ff",
      tag: "ROI Driven",
      image: featureOneImg,
    },
    {
      title: "International Expertise",
      description: "Built for the global economy. We navigate the operational and regulatory landscapes of the US, Canadian, and Dutch markets.",
      icon: <Globe2 className="w-6 h-6" />,
      gradient: "from-[#00d2ff]/30 to-[#34d399]/20",
      accent: "#34d399",
      tag: "Global Compliance",
      image: featureTwoImg,
    },
    {
      title: "Enterprise Grade Security",
      description: "Proprietary company data residency and zero-trust architectures ensuring your data is never used to train public models.",
      icon: <Fingerprint className="w-6 h-6" />,
      gradient: "from-[#34d399]/30 to-[#3a7bd5]/20",
      accent: "#3a7bd5",
      tag: "Zero-Trust",
      image: featureThreeImg,
    },
    {
      title: "Scalable Infrastructure",
      description: "Engineered for growth. Our solutions are designed to scale seamlessly with your enterprise, ensuring that today’s innovation becomes tomorrow’s standard without technical debt.",
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-[#3a7bd5]/30 to-[#00d2ff]/20",
      accent: "#00d2ff",
      tag: "Damnart Ecosystem",
      image: featureFourImg,
    }
  ];

  return (
    <section
      id="why-evoke"
      className="relative py-12 sm:py-20 md:py-32 px-4 sm:px-6 bg-[#dbe1e8] overflow-hidden font-sans"
    >
      {/* Refined Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 sm:mb-16 gap-6 sm:gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 sm:mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-[#f5f3ff] px-3 sm:px-6 py-1 sm:py-1.5 rounded-full border border-violet-200 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7c3aed]" />
                <span className="text-[#7c3aed] font-mono text-[10px] sm:text-[15px] tracking-[0.2em] sm:tracking-[0.3em] uppercase font-black">
                  Global Reach & Trust
                </span>
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl md:text-8xl font-black text-[var(--color-text)] tracking-tighter leading-tight break-words"
            >
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#4338ca] to-[#6d28d9]">Evoke Perspective</span>
            </motion.h2>
            <p className="text-slate-800 text-sm sm:text-xl md:text-2xl leading-relaxed font-white opacity-90 mt-2">
              &quot;Engineering excellence drives strategic growth.&quot;
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-900 text-sm sm:text-2xl md:text-3xl max-w-md border-l-2 border-cyan-500/30 pl-4 sm:pl-8 leading-relaxed font-medium italic"
          >
            &quot;Redefining the synergy between global engineering and strategic business growth.&quot;
          </motion.p>
        </div>

        {/* Mobile marquee | Desktop grid */}
        <div className="md:hidden -mx-4 overflow-hidden pb-2">
          <div className="flex w-max gap-4 animate-cards-marquee hover:[animation-play-state:paused]">
            {[...features, ...features].map((feature, index) => (
              <FlipCard key={index} feature={feature} index={index % features.length} />
            ))}
          </div>
        </div>
        <div className="hidden md:grid grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <FlipCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

