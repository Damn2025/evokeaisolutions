import React, { useState, useEffect } from 'react';
import {
  Zap,
  Brain,
  Activity,
  Target,
  RefreshCcw,
  ChevronRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';

const TheGap = () => {
  const [activeTab, setActiveTab] = useState('standard');
  const [isHovered, setIsHovered] = useState(null);

  // Background Neural Animation Effect
  const [dots, setDots] = useState([]);
  useEffect(() => {
    const newDots = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5
    }));
    setDots(newDots);
  }, []);

  return (
    <section id="the-gap" className="py-32 bg-neutral-200 text-neutral-900 font-sans selection:bg-cyan-100 overflow-hidden relative">
      {/* Background Neural Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute bg-[#00d2ff] rounded-full blur-[1px]"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              animation: `float ${dot.duration}s infinite linear ${dot.delay}s`,
            }}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translate(0, 0); opacity: 0; }
            50% { opacity: 0.8; }
            100% { transform: translate(100px, -100px); opacity: 0; }
          }
          .glass-card-gap-light {
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(0, 0, 0, 0.05);
          }
          .neural-glow-gap-light {
            box-shadow: 0 25px 60px -15px rgba(0, 0, 255, 0.1);
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <header className="mb-24 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#00d2ff]/20 bg-white text-[#00d2ff] text-[10px] font-bold tracking-[0.3em] uppercase mb-6 shadow-sm">
            Future-Proof Systems
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-b from-black to-neutral-600 bg-clip-text text-transparent leading-[1.1]">
            Evolution Beyond <br /> Static Automation.
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-1000 font-medium leading-relaxed">
            We bridge the gap between predictable scripts and cognitive intelligence.
          </p>
        </header>

        {/* Interaction Toggle */}
        <div className="flex justify-center mb-20">
          <div className="bg-neutral-900 p-1.5 rounded-2xl border border-neutral-800 flex gap-2 backdrop-blur-xl shadow-2xl">
            <button
              onClick={() => setActiveTab('limitation')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all uppercase tracking-widest ${activeTab === 'limitation'
                ? 'bg-neutral-800 text-red-400 border border-red-500/20'
                : 'text-neutral-400 hover:text-white'
                }`}
            >
              The Limitation
            </button>
            <button
              onClick={() => setActiveTab('standard')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all uppercase tracking-widest ${activeTab === 'standard'
                ? 'bg-gradient-to-r from-[#00d2ff] to-[#34d399] text-black shadow-lg shadow-[#00d2ff]/20'
                : 'text-neutral-400 hover:text-white'
                }`}
            >
              The Evoke Standard
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Visual Narrative Side (40%) */}
          <div className="lg:col-span-5">
            {activeTab === 'limitation' ? (
              <div className="animate-in fade-in slide-in-from-left-8 duration-700">
                <div className="p-10 rounded-[2.5rem] glass-card-gap-light border-red-500/10 relative overflow-hidden group shadow-xl">
                  <h3 className="text-3xl font-bold text-red-500 mb-6 tracking-tight">Static Friction</h3>
                  <div className="space-y-5">
                    {[
                      'Rigid "if-then" loops',
                      'Repetitive, high-friction cycles',
                      'Untapped data insights'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-neutral-600">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-lg font-bold">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-10 text-neutral-500 text-base italic leading-relaxed font-medium">
                    Standard tools fail to adapt to complexity, leaving value trapped in legacy architecture.
                  </p>
                </div>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-left-8 duration-700">
                <div className="p-10 rounded-[2.5rem] glass-card-gap-light border-[#00d2ff]/20 neural-glow-gap-light relative overflow-hidden shadow-xl">
                  <h3 className="text-3xl font-bold text-[#00d2ff] mb-6 tracking-tight">Integrated Ecosystems</h3>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4 text-black">
                      <Brain size={22} className="text-[#00d2ff]" />
                      <span className="text-lg font-bold tracking-tight">Neural Intent Recognition</span>
                    </div>
                    <div className="flex items-center gap-4 text-black">
                      <Activity size={22} className="text-[#34d399]" />
                      <span className="text-lg font-bold tracking-tight">Autonomous Logic Deployment</span>
                    </div>
                    <div className="flex items-center gap-4 text-black">
                      <Target size={22} className="text-[#00d2ff]" />
                      <span className="text-lg font-bold tracking-tight">Real-time Problem Solving</span>
                    </div>
                  </div>
                  <div className="mt-10 pt-8 border-t border-neutral-200">
                    <p className="text-[#34d399] font-black uppercase tracking-widest text-xs mb-2">Cognitive Impact:</p>
                    <p className="text-neutral-600 text-base leading-relaxed font-medium">
                      Moving beyond scripts into systems that interpret the "why" behind every interaction.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Detailed Content Side (60%) */}
          <div className="lg:col-span-7">
            <div className={`transition-all duration-700`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-black">
                {activeTab === 'limitation' ? "The Barrier to Growth" : "Clinical Precision in Motion"}
              </h2>

              <p className="text-xl md:text-2xl leading-relaxed text-black mb-10 font-bold">
                {activeTab === 'limitation'
                  ? "Standard digital tools are trapped in rigid, \"if-then\" loops. They fail to adapt to complex data, frustrate users with repetitive cycles, and ultimately leave your most valuable insights untapped."
                  : "We engineer Integrated AI Ecosystems. By moving beyond simple scripts into Neural Intent Recognition and Autonomous Logic, Evoke AI interprets the \"why\" behind every interaction."
                }
              </p>

              {activeTab === 'standard' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-white border border-neutral-200 hover:border-[#00d2ff]/30 transition-all group shadow-sm">
                    <ShieldCheck className="text-[#00d2ff] mb-4 group-hover:scale-110 transition-transform" size={32} />
                    <h4 className="font-bold text-black text-lg mb-2 tracking-tight">Clinical Precision</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed font-bold">Zero-error deployment for high-stakes environments.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white border border-neutral-200 hover:border-[#34d399]/30 transition-all group shadow-sm">
                    <Cpu className="text-[#34d399] mb-4 group-hover:scale-110 transition-transform" size={32} />
                    <h4 className="font-bold text-black text-lg mb-2 tracking-tight">Autonomous Logic</h4>
                    <p className="text-sm text-neutral-500 leading-relaxed font-bold">Systems that self-optimize as data complexity grows.</p>
                  </div>
                </div>
              )}

              <a
                href="#contact"
                className="mt-12 px-10 py-5 rounded-2xl font-black uppercase tracking-[0.1em] text-sm flex items-center gap-3 transition-all w-fit bg-black text-white hover:bg-[#00d2ff] hover:text-black hover:scale-105 active:scale-95 shadow-xl"
              >
                {activeTab === 'limitation' ? "Evolve Now" : "Deploy Your Ecosystem"}
                <ChevronRight size={20} className={activeTab === 'standard' ? 'animate-bounce-x' : ''} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TheGap;
