import React, { useState } from 'react';

const aeonImage = '/ai-assistants/aeon-image.png';

const ImageSection = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      id: 'knowledge',
      title: 'Knowledge',
      subtitle: 'integration',
      content: 'Use your own models and knowledge bases for accuracy and precision.',
      position: 'top-[12%] left-[10%]',
      align: 'right',
      color: 'cyan'
    },
    {
      id: 'intelligence',
      title: 'Conversational',
      subtitle: 'Intelligence',
      content: 'Understands complex nuances, sarcasm, and multi-turn dialogues with human-level accuracy.',
      position: 'top-[42%] left-[25%]',
      align: 'right',
      color: 'emerald'
    },
    {
      id: 'tasks',
      title: 'Task execution &',
      subtitle: 'skills',
      content: 'Capable of booking appointments, updating CRM data, and handling logic-driven workflows.',
      position: 'bottom-[28%] left-[28%]',
      align: 'right',
      color: 'cyan'
    },
    {
      id: 'embed',
      title: 'Embeddable',
      subtitle: 'everywhere',
      content: 'Deploy across Web, WhatsApp, Discord, and Slack with a single unified neural core.',
      position: 'bottom-[18%] right-[28%]',
      align: 'left',
      color: 'white'
    }
  ];

  return (
    <section id="image-section" className="relative bg-neutral-950 overflow-hidden flex flex-col">
      <style>{`
        .minimal-content {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateY(-10px);
        }
        .active-content {
          max-height: 200px;
          opacity: 1;
          transform: translateY(0);
          margin-top: 1rem;
        }
        .text-glow {
          text-shadow: 0 0 30px rgba(0,0,0,1);
        }
      `}</style>

      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* 1. Headline Area */}
      <div className="relative z-30 w-full text-center px-4 pt-32 pb-16 bg-neutral-950">
        <h2 className="font-black tracking-tighter text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] max-w-[95vw] mx-auto leading-none whitespace-nowrap overflow-hidden"
          style={{ fontSize: 'clamp(2rem, 5vw, 6rem)' }}>
          Built for real-time <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/40">humanlike interactions</span>
        </h2>
      </div>

      <div className="w-full relative z-10 flex-grow">
        <div className="relative group h-full">
          {/* Cinematic Blending */}
          <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-neutral-950 to-transparent z-20"></div>
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-neutral-950 to-transparent z-20"></div>

          <div className="relative h-screen md:h-[100vh] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)]">
            <img
              src={aeonImage}
              alt="Aeon Neural Core Full Width Hero"
              className="w-full h-full object-cover object-top transform scale-[1.02] transition-transform duration-[5000ms] ease-out opacity-90"
            />
          </div>

          {/* Interactive Feature Elements - Staggered Organic Architecture */}
          <div className="absolute inset-0 z-40 pointer-events-none">
            {features.map((f) => (
              <div
                key={f.id}
                className={`absolute ${f.position} flex ${f.align === 'left' ? 'flex-row-reverse text-left' : 'flex-row text-right'} items-start gap-0 pointer-events-auto z-50`}
                onMouseEnter={() => setActiveFeature(f.id)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                {/* 1. Neural Node Connector */}
                <div className={`flex items-center ${f.align === 'left' ? 'flex-row-reverse' : 'flex-row'} mt-4`}>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500 ${activeFeature === f.id ? 'scale-125 border-white bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.4)]' : 'border-white/40 bg-black/40 backdrop-blur-md'
                    } border`}>
                    <span className="text-[12px] text-white font-bold">+</span>
                  </div>
                  <div className="w-16 h-px border-t border-dotted border-white/40"></div>
                </div>

                {/* 2. Content Container (Black Background) */}
                <div className={`max-w-[280px] transition-all duration-500 ${activeFeature && activeFeature !== f.id ? 'opacity-20 scale-95' : 'opacity-100'
                  }`}>
                  <h3 className="text-white text-lg md:text-3xl font-black tracking-tight leading-none text-glow">
                    {f.title} <br /> {f.subtitle}
                  </h3>

                  <div className={`minimal-content ${activeFeature === f.id ? 'active-content' : ''}`}>
                    <div className={`p-6 bg-black border border-white/10 rounded-2xl shadow-2xl shadow-black/50`}>
                      <p className="text-white text-sm leading-relaxed font-medium">
                        {f.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default ImageSection;
