import { useEffect, useState, useMemo } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { TrendingUp, BarChart3, PieChart, ArrowRight, Activity } from 'lucide-react';

// Pre-generate star properties outside component to avoid useMemo purity issues
const generateStars = () => [...Array(100)].map(() => ({
  width: Math.random() * 2 + 'px',
  height: Math.random() * 2 + 'px',
  top: Math.random() * 100 + '%',
  left: Math.random() * 100 + '%',
  animationDuration: 2 + Math.random() * 4 + 's'
}));

const STARS_DATA = generateStars();

export const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const starsArray = useMemo(() => STARS_DATA, []);

  const xLeft = useMotionValue(0);
  const rotateLeft = useTransform(xLeft, [-300, 300], [-15, 15]);

  const xRight = useMotionValue(0);
  const rotateRight = useTransform(xRight, [-300, 300], [-15, 15]);

  // Handle subtle parallax based on mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-white overflow-hidden flex flex-col items-center justify-center font-sans transition-colors duration-300">

      {/* --- Background Stars & Glow --- */}
      <div className="absolute inset-0 z-0">
        {/* Stars */}
        {/* Stars */}
        {starsArray.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: star.width,
              height: star.height,
              top: star.top,
              left: star.left,
              boxShadow: '0 0 10px rgba(255,255,255,0.5)',
              animation: `pulse ${star.animationDuration} infinite ease-in-out`
            }}
          />
        ))}

        {/* Main Bottom Glow Arc */}
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[140%] h-[60%] rounded-[100%] bg-gradient-to-t from-blue-900/40 via-transparent to-transparent blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-[#00d2ff]/30 to-transparent blur-sm" />
      </div>

      {/* --- Floating Content Container --- */}
      <div className="relative z-10 w-full max-w-[1800px] px-4 sm:px-6 min-h-[100svh] sm:h-screen flex items-center justify-center pt-24 pb-16 sm:pt-0 sm:pb-0">

        {/* --- Floating Cards Area --- */}

        {/* Left Card: Operational ROI / Consultancy Impact */}
        <div
          className="hidden lg:block absolute left-[2%] top-[55%] -translate-y-1/2 transition-transform duration-300 ease-out z-40"
          style={{
            transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px) perspective(1200px) rotateY(35deg) rotateX(10deg)`
          }}
        >
          <div className="animate-float">
            <motion.div
              drag
              style={{ x: xLeft, rotate: rotateLeft }}
              dragConstraints={{ left: -200, right: 300, top: -200, bottom: 200 }}
              dragElastic={0.2}
              whileDrag={{ scale: 1.05, cursor: "grabbing" }}
              className="w-96 p-8 rounded-[2rem] border border-white/10 bg-zinc-900/30 backdrop-blur-[20px] shadow-2xl cursor-grab"
            >
              <div className="flex justify-between items-start mb-10">
                <div>
                  <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Client ROI Growth</p>
                  <h3 className="text-4xl font-bold mt-2 text-[#00d2ff]">38.2%</h3>
                </div>
                <div className="bg-[#34d399]/10 text-[#34d399] px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 border border-[#34d399]/20">
                  <TrendingUp size={14} /> +12.4%
                </div>
              </div>

              {/* Efficiency Curve */}
              <svg viewBox="0 0 200 80" className="w-full h-28 overflow-visible">
                <defs>
                  <linearGradient id="impact-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#00d2ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,70 Q30,65 50,45 T90,50 T140,25 T200,15"
                  fill="none"
                  stroke="#00d2ff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0,70 Q30,65 50,45 T90,50 T140,25 T200,15 V80 H0 Z"
                  fill="url(#impact-gradient)"
                />
              </svg>

              <div className="mt-6 flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-400">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-zinc-500 font-medium italic">"Q4 Strategy Active"</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Center Content Component */}
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center relative z-20">
          <h1 className="text-3xl leading-[1.12] md:text-4xl lg:text-6xl font-black md:leading-[1.05] mb-4 md:mb-10 tracking-tighter text-white px-1">
            TRANSFORMING BUSINESS OPERATIONS THROUGH STRATEGIC,{' '}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] via-[#3a7bd5] to-[#34d399] uppercase tracking-tight shadow-sm">ROI DRIVEN ARTIFICIAL INTELLIGENCE</span>
          </h1>
          <h6 className="block text-sm sm:text-base md:text-xl lg:text-2xl font-semibold sm:font-black leading-relaxed mb-2 sm:mb-0 tracking-normal text-white/85 sm:text-white px-2 max-w-2xl">
            We help modern businesses adopt Strategic AI to capture high-quality leads, unlock massive ROI, and long-term client retention.
          </h6>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-6 relative z-30 w-full max-w-md sm:max-w-none">
            <a
              href="#audit-form"
              className="group relative w-full sm:w-auto px-6 sm:px-12 py-3.5 sm:py-5 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white rounded-full font-bold text-sm sm:text-lg overflow-hidden transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3 no-underline outline-none"
            >
              <span className="relative z-10">Book Free AI Audit</span>
              <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#methodology" className="w-full sm:w-auto px-6 sm:px-12 py-3.5 sm:py-5 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full font-bold text-sm sm:text-lg transition-all backdrop-blur-xl text-white no-underline flex items-center justify-center">Our Methodology</a>
          </div>
        </div>

        {/* Right Card: Strategic Advisory Portfolio - ENHANCED WITH MORE GRAPHS */}
        <div
          className="hidden lg:block absolute right-[2%] top-[45%] -translate-y-1/2 transition-transform duration-300 ease-out z-40"
          style={{
            transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px) perspective(1200px) rotateY(-35deg) rotateX(10deg)`
          }}
        >
          <div className="animate-float-delayed">
            <motion.div
              drag
              style={{ x: xRight, rotate: rotateRight }}
              dragConstraints={{ left: -300, right: 200, top: -200, bottom: 200 }}
              dragElastic={0.2}
              whileDrag={{ scale: 1.05, cursor: "grabbing" }}
              className="w-96 p-8 rounded-[2rem] border border-white/10 bg-zinc-900/30 backdrop-blur-[20px] shadow-2xl cursor-grab"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00d2ff]/10 flex items-center justify-center">
                    <Activity size={18} className="text-[#00d2ff]" />
                  </div>
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest leading-none">
                    Global Advisory <br />
                    <span className="text-[10px] text-zinc-600 font-medium lowercase tracking-normal">Real-time Analysis</span>
                  </h4>
                </div>
                <BarChart3 size={20} className="text-[#00d2ff]" />
              </div>

              {/* Enhanced Visualization Area */}
              <div className="relative h-32 mb-10 group">
                {/* Subtle Grid Background */}
                <div className="absolute inset-0 grid grid-cols-8 gap-2 opacity-20">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-full border-l border-zinc-700 border-dashed" />
                  ))}
                </div>

                {/* Bar Chart */}
                <div className="absolute inset-0 flex items-end justify-between gap-2 z-10">
                  {[30, 45, 80, 60, 95, 75, 85, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-zinc-800/30 rounded-t-md relative overflow-hidden h-full">
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#00d2ff] to-[#3a7bd5] rounded-t-md transition-all duration-1000 shadow-[0_0_15px_rgba(0,210,255,0.3)]"
                        style={{ height: `${h}%`, animation: `growUp 1.5s ease-out ${i * 0.1}s forwards` }}
                      />
                    </div>
                  ))}
                </div>

                {/* Overlay Trend Line SVG */}
                <svg viewBox="0 0 200 100" className="absolute inset-0 w-full h-full z-20 pointer-events-none overflow-visible">
                  <path
                    d="M0,80 Q25,75 50,60 T100,65 T150,40 T200,30"
                    fill="none"
                    stroke="rgba(0,210,255,0.4)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="animate-dash"
                  />
                  <circle cx="100" cy="65" r="3" fill="#fff" className="animate-pulse" />
                  <circle cx="200" cy="30" r="3" fill="#fff" />
                </svg>
              </div>

              {/* Middle Dashboard Strip */}
              <div className="flex justify-between items-center mb-6 px-2">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className={`w-3 h-1.5 rounded-full ${i < 3 ? 'bg-[#00d2ff]' : 'bg-zinc-800'}`} />
                    ))}
                  </div>
                  <span className="text-[8px] text-zinc-500 uppercase font-bold tracking-widest">Market Saturation</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#00d2ff] font-black">+4.2%</span>
                  <p className="text-[8px] text-zinc-600 uppercase font-bold">Index Delta</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 border-t border-white/5 pt-6">
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Active Projects</p>
                  <p className="text-2xl font-bold tracking-tight text-[#00d2ff]">142</p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Core Markets</p>
                  <p className="text-2xl font-bold tracking-tight text-[#34d399]">12</p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#00d2ff] text-xs font-black uppercase tracking-tighter">
                  <PieChart size={14} /> Strategic Portfolio 2024
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] text-zinc-500 font-bold uppercase">Live</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#34d399] animate-pulse shadow-[0_0_12px_#34d399]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Global Markets Footer / Capsules */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 sm:gap-4 z-40 flex-wrap w-full px-4 w-max">
        {[
          { flag: '🇮🇳', name: 'India' },
          { flag: '🇺🇸', name: 'United States' },
          { flag: '🇨🇦', name: 'Canada' },
          { flag: '🇳🇱', name: 'Netherland' }
        ].map((loc, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + idx * 0.1 }}
            className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-md shadow-lg hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
          >
            <span className="text-sm sm:text-base leading-none">{loc.flag}</span>
            <span className="text-white/80 text-[9px] sm:text-[11px] font-bold uppercase tracking-widest mt-0.5">{loc.name}</span>
          </motion.div>
        ))}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-1deg); }
        }
        @keyframes growUp {
          from { height: 0; }
        }
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        .animate-dash {
          stroke-dasharray: 5;
          animation: dash 5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
