import React from 'react';
import { Quote, MessageSquare, Zap, GraduationCap } from 'lucide-react';

const TESTIMONIAL_DATA = [
  {
    category: "Core AI",
    icon: <MessageSquare className="w-3 h-3 text-[#00d2ff]" />,
    text: "Evoke AI made our chatbot deployment seamless. The Neural Intent Recognition and UI polish really stand out. It doesn't just reply; it understands.",
    author: "Vikas Malhotra",
    handle: "@vikas_ai"
  },
  {
    category: "Core AI",
    icon: <MessageSquare className="w-3 h-3 text-[#00d2ff]" />,
    text: "The balance between design and intelligence is perfect. Our customer support automation feels premium, localized, and truly human.",
    author: "Ananya Sharma",
    handle: "@supportlabs_in"
  },
  {
    category: "Core AI",
    icon: <MessageSquare className="w-3 h-3 text-[#00d2ff]" />,
    text: "Building intelligent experiences feels intuitive and fast. Evoke is the go-to for teams that value both speed and high-end engineering.",
    author: "Ritika Kapoor",
    handle: "@uxlabs_in"
  },
  {
    category: "NOVA Ecosystem",
    icon: <Zap className="w-3 h-3 text-[#34d399]" />,
    text: "The automation workflows saved us countless hours. Campaign management is now frictionless and driven by real-time AI insights.",
    author: "Amit Singhal",
    handle: "@growthops_india"
  },
  {
    category: "NOVA Ecosystem",
    icon: <Zap className="w-3 h-3 text-[#34d399]" />,
    text: "Evoke brings a level of clarity to our data that we haven't seen before. Their smart targeting and analytics moved the needle for us in week one.",
    author: "Nidhi Bansal",
    handle: "@crmstack"
  },
  {
    category: "NOVA Ecosystem",
    icon: <Zap className="w-3 h-3 text-[#34d399]" />,
    text: "Personalization used to be a bottleneck. With Evoke’s AI ecosystem, it’s now our biggest competitive advantage. Scalable and incredibly smart.",
    author: "Sneha Iyer",
    handle: "@brandpulse_ai"
  },
  {
    category: "ORION Knowledge",
    icon: <GraduationCap className="w-3 h-3 text-purple-400" />,
    text: "Evoke helped us convert complex technical material into structured, interactive knowledge bases effortlessly. A game-changer for our internal logic.",
    author: "Sandeep Joshi",
    handle: "@corporate_lnd"
  },
  {
    category: "ORION Knowledge",
    icon: <GraduationCap className="w-3 h-3 text-purple-400" />,
    text: "Structuring and scaling AI-driven content is now effortless. It reduced our team onboarding time by 60%.",
    author: "Swati Choudhary",
    handle: "@hrtech_india"
  }
];

// Duplicate for infinite loop
const ALL_TESTIMONIALS = [...TESTIMONIAL_DATA, ...TESTIMONIAL_DATA];

const Testimonials = () => {
  return (
    <section className="py-32 bg-neutral-950 relative overflow-hidden">
      
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#00d2ff]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 mb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-white/10 bg-white/5 rounded-full text-[10px] font-bold text-white/60 tracking-[0.3em] uppercase">
            <Quote className="w-3 h-3 text-[#00d2ff]" />
            Transmission Feed
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Loved by <br /> 
            <span className="bg-gradient-to-r from-[#00d2ff] to-[#34d399] bg-clip-text text-transparent">
              High-Growth Teams.
            </span>
          </h2>
        </div>
      </div>

      {/* Auto-Scroller Container */}
      <div className="relative group/scroller overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-neutral-950 via-neutral-950/80 to-transparent z-20 pointer-events-none"></div>

        {/* Marquee Inner */}
        <div className="flex animate-marquee group-hover/scroller:pause-marquee gap-8 px-6">
          {ALL_TESTIMONIALS.map((item, idx) => (
            <div 
              key={idx} 
              className="min-w-[380px] md:min-w-[450px] p-8 bg-neutral-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] flex flex-col justify-between hover:border-white/20 transition-all duration-500 hover:-translate-y-2 group/card"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                      {item.icon}
                      <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{item.category}</span>
                   </div>
                   <Quote className="w-6 h-6 text-neutral-800 group-hover/card:text-[#00d2ff]/30 transition-colors" />
                </div>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-medium italic">
                  "{item.text}"
                </p>
              </div>
              
              <div className="pt-8 mt-8 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-col text-left">
                  <span className="text-white font-bold tracking-tight">{item.author}</span>
                  <span className="text-neutral-500 text-sm font-mono tracking-tighter">{item.handle}</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#34d399]/40 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-380px * 8 - 32px * 8)); }
        }
        @media (min-width: 768px) {
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-450px * 8 - 32px * 8)); }
          }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .pause-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
