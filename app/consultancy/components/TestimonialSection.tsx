import { type FC } from 'react';
import {
  Quote,
  Zap,
  Settings,
  Fingerprint,
  Layers
} from 'lucide-react';

const testimonials = [
  {
    name: "Vishal Sood",
    role: "SEO, Damnart",
    content: "Evoke moved us from pilot to a fully integrated agentic ecosystem, scaling our legacy operations without friction.",
    tags: ["Enterprise", "Legacy Sync"],
    icon: <Zap className="w-4 h-4" />
  },
  {
    name: "Sukhpal Singh",
    role: "Ops Lead, Meddevices",
    content: "They automated our complex hardware distribution and real-time inventory routing via a seamless ERP AI integration.",
    tags: ["Supply Chain", "ERP"],
    icon: <Settings className="w-4 h-4" />
  },
  {
    name: "Nikhil Arora",
    role: "MD, Eurocert",
    content: "Their Assessment prevented a $50k platform mismatch, delivering a secure RAG solution for our proprietary data.",
    tags: ["Privacy", "RAG Systems"],
    icon: <Fingerprint className="w-4 h-4" />
  },
  {
    name: "Sneha Iyer",
    role: "VP Growth, BrandPulse",
    content: "Evoke engineered a high-performance system that mastered cross-border compliance across the US and Netherlands.",
    tags: ["Compliance", "Global"],
    icon: <Layers className="w-4 h-4" />
  }
];

const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

export const TestimonialSection: FC = () => {
  return (
    <section id="testimonials" className="pt-12 pb-24 overflow-hidden relative font-sans transition-colors duration-300 bg-[#f1f5f9]">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll-testimonials {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-testimonials {
          display: flex;
          width: max-content;
          animation: scroll-testimonials 40s linear infinite;
        }
        .pause-on-hover:hover .animate-marquee-testimonials {
          animation-play-state: paused;
        }
      `}} />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-16 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#f5f3ff] px-3 sm:px-6 py-1 sm:py-1.5 mb-4 sm:mb-6 rounded-full border border-violet-200 shadow-sm">
          <Zap className="w-3.5 h-3.5 text-[#7c3aed]" />
          <span className="text-[#7c3aed] font-mono text-[10px] sm:text-[15px] font-black tracking-[0.25em] sm:tracking-[0.4em] uppercase">
            Client Success
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-3 sm:mb-6">
          Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] to-[#6d28d9]">Engineered</span> for Scale.
        </h2>
        <p className="text-slate-500 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto font-bold italic px-2">
          &quot;Strategic AI implementation driving measurable business outcomes across the enterprise.&quot;
        </p>
      </div>

      {/* Sliding Marquee Container */}
      <div className="relative pause-on-hover mb-4 sm:mb-8">
        {/* Faded edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#f1f5f9] to-transparent z-10 hidden sm:block"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#f1f5f9] to-transparent z-10 hidden sm:block"></div>

        <div className="animate-marquee-testimonials gap-3 sm:gap-8 px-4">
          {extendedTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="w-[260px] sm:w-[320px] md:w-[400px] flex-shrink-0 group bg-white border border-slate-200/50 rounded-2xl sm:rounded-[3rem] p-5 sm:p-12 transition-all duration-500 hover:bg-white hover:border-[#7c3aed]/30 hover:shadow-[0_30px_70px_rgba(124,58,237,0.15)] hover:-translate-y-4 cursor-pointer shadow-lg sm:shadow-xl relative"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4 sm:mb-8">
                  <div className="p-2 sm:p-3 bg-slate-50 rounded-xl sm:rounded-2xl shadow-sm text-[#7c3aed] group-hover:bg-[#7c3aed] group-hover:text-white transition-colors duration-500 border border-slate-100">
                    {t.icon}
                  </div>
                  <Quote className="w-6 h-6 sm:w-10 sm:h-10 text-slate-200 group-hover:text-[#7c3aed]/10 transition-colors" />
                </div>

                <p className="text-sm sm:text-xl text-slate-900 leading-relaxed font-bold mb-5 sm:mb-10 flex-grow italic">
                  &quot;{t.content}&quot;
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-10">
                  {t.tags.map((tag, tagIdx) => (
                    <span key={`${idx}-${tagIdx}-${tag}`} className="px-2.5 sm:px-4 py-1 sm:py-1.5 bg-slate-100 text-slate-600 text-[10px] sm:text-sm font-black rounded-full uppercase tracking-widest border border-slate-200 group-hover:border-[#7c3aed]/20 group-hover:text-[#7c3aed] transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 sm:gap-5 pt-4 sm:pt-8 border-t border-slate-100">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-slate-900 flex items-center justify-center font-black text-white text-sm sm:text-lg shadow-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-base sm:text-xl leading-tight">{t.name}</h4>
                    <p className="text-[10px] sm:text-sm text-slate-400 font-bold uppercase tracking-wider mt-0.5 sm:mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer info line */}
      <div className="flex justify-center mt-12">
        <p className="text-slate-400 text-[10px] uppercase tracking-[0.4em] font-black">
          Validated Operations • 2022
        </p>
      </div>
    </section>
  );
};

export default TestimonialSection;
