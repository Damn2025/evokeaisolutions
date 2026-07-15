import React from 'react';
import { Cpu, Globe, BarChart3, Zap, Play } from 'lucide-react';

const TECH_ITEMS = [
  {
    title: 'Custom LLM Integration',
    description: 'Tailored models trained on your specific business data for 100% accuracy.',
    icon: <Cpu className="w-6 h-6 text-[#00d2ff]" />,
  },
  {
    title: 'Full-Stack Excellence',
    description: 'Seamlessly integrated into your existing web infrastructure with optimized API endpoints.',
    icon: <Globe className="w-6 h-6 text-[#34d399]" />,
  },
  {
    title: 'Real-Time Analytics',
    description: 'Track user sentiment, conversion rates, and interaction depth through our intuitive dashboard.',
    icon: <BarChart3 className="w-6 h-6 text-[#00d2ff]" />,
  }
];

const TechStack = () => {
  return (
    <section id="techstack" className="py-32 bg-neutral-100 text-black overflow-hidden relative border-y border-neutral-200">
      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Video */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-video w-full bg-neutral-900 rounded-[3rem] shadow-2xl overflow-hidden relative border-[8px] border-white">
              <video 
                className="w-full h-full object-cover scale-[1.15]"
                autoPlay
                loop
                muted
                playsInline
                src="/vd1.mp4"
              />
            </div>
            
            {/* Decorative elements behind video */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#00d2ff]/20 blur-[80px] -z-10 rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#34d399]/20 blur-[80px] -z-10 rounded-full"></div>
          </div>

          {/* Right Column: Content */}
          <div className="space-y-12 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1 border border-black/5 bg-black/5 rounded-full text-[10px] font-bold text-neutral-500 tracking-[0.3em] uppercase">
                <Zap className="w-3 h-3 text-[#34d399]" />
                The Infrastructure
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black leading-[1.1]">
                Engineered for <br />
                <span className="bg-gradient-to-r from-[#00d2ff] to-[#34d399] bg-clip-text text-transparent">Performance.</span>
              </h2>
              <p className="text-xl text-neutral-600 font-medium max-w-lg">
                We don't just build bots; we build intelligent ecosystems designed for scale.
              </p>
            </div>

            <div className="space-y-6">
              {TECH_ITEMS.map((item, index) => (
                <div 
                  key={index} 
                  className="group flex gap-6 p-6 bg-white border border-neutral-200 rounded-3xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500"
                >
                  <div className="w-14 h-14 shrink-0 bg-neutral-50 rounded-2xl flex items-center justify-center border border-neutral-100 group-hover:scale-110 group-hover:border-[#00d2ff]/30 transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1.5 text-black">
                      {item.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;
