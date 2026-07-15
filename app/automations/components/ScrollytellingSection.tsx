import React, { useEffect, useRef, useState } from 'react';
import {
  MessageSquare, Heart, MessageCircle, Smartphone, Twitter, Repeat2, Share, ChevronLeft, Instagram, Sparkles, Info
} from 'lucide-react';

const STAGES = [
  {
    title: "Instagram & Facebook",
    tagline: "SOCIAL COMMERCE",
    description: "Convert comments to DMs and checkout links instantly. Turn every post into a high-converting sales funnel using our advanced triggers.",
    color: "from-pink-500 to-rose-500",
    accent: "bg-pink-50 text-pink-600",
    icon: <Instagram className="w-6 h-6" />
  },
  {
    title: "WhatsApp",
    tagline: "24/7 CONVERSATIONS",
    description: "Automate service, order updates, and reminders on the world's most popular messaging app. Build trust with instantaneous, intent-based replies.",
    color: "from-emerald-500 to-teal-600",
    accent: "bg-emerald-50 text-emerald-600",
    icon: <MessageCircle className="w-6 h-6" />
  },
  {
    title: "SMS & Telegram",
    tagline: "DIRECT RE-ENGAGEMENT",
    description: "Re-engage cold leads with high open-rate messages. Move conversations from social platforms to direct personal lines to close deals faster.",
    color: "from-blue-500 to-indigo-600",
    accent: "bg-blue-50 text-blue-600",
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    title: "Twitter (X)",
    tagline: "REAL-TIME ENGAGEMENT",
    description: "Auto-reply to mentions and specific keywords in real-time. Convert viral threads into leads and drive traffic from public posts to private DMs seamlessly.",
    color: "from-slate-800 to-slate-950",
    accent: "bg-slate-100 text-slate-900",
    icon: <Twitter className="w-6 h-6" />
  }
];

export const ScrollytellingSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [libsReady, setLibsReady] = useState(false);

  useEffect(() => {
    const loadScript = (src: string) => {
      return new Promise<void>((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        document.head.appendChild(script);
      });
    };

    const init = async () => {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js');
        setLibsReady(true);
      } catch (err) {
        console.error("GSAP load failed", err);
      }
    };
    init();
  }, []);

  useEffect(() => {
    if (!libsReady || !(window as any).gsap || !(window as any).ScrollTrigger) return;

    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      STAGES.forEach((_, index) => {
        ScrollTrigger.create({
          trigger: stepsRef.current[index],
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [libsReady]);

  return (
    <div id="Platform" className="bg-[#0f172a] font-sans text-white selection:bg-blue-500/30 selection:text-white overflow-clip" ref={containerRef}>
      {/* Scrollytelling Section */}
      <section className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row relative items-start gap-12 pt-4 pb-32">
        <div className="w-full md:w-1/2 relative z-10">
          {STAGES.map((stage, i) => (
            <div
              key={i}
              ref={el => { stepsRef.current[i] = el; }}
              className={`step min-h-[50vh] md:min-h-[100vh] flex items-center justify-center transition-all duration-700 ${activeIndex === i ? 'opacity-100 scale-105 md:scale-100 md:translate-x-4' : 'opacity-20 md:opacity-10'} py-12 md:py-20 px-4 md:px-0`}
            >
              <div className="max-w-xl flex flex-col items-start text-left lg:pr-24">
                <div className="flex items-center gap-3 mb-6">
                  {React.cloneElement(stage.icon as React.ReactElement<any>, { className: "w-8 h-8 text-white" })}
                  <span className="text-base font-black uppercase tracking-[0.25em] text-slate-400">
                    {stage.tagline}
                  </span>
                </div>
                <h2 className="text-4xl md:text-7xl font-black mt-2 mb-6 md:mb-8 tracking-tight text-white leading-tight">
                  {stage.title}
                </h2>
                <p className="text-xl md:text-3xl text-slate-300 leading-relaxed font-medium">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sticky Visuals (No Phone Frame) */}
        <div className="hidden md:flex w-1/2 h-screen sticky top-0 items-center justify-center pointer-events-none z-0">
          <div className="relative flex items-center justify-center h-[560px] w-full px-8">
            {/* Ambient Background Glow */}
            <div className={`absolute -inset-24 transition-all duration-1000 blur-[120px] opacity-30 bg-gradient-to-br ${STAGES[activeIndex].color}`} />

            {/* Direct Image Container */}
            <div className="w-full max-w-[500px] aspect-[4/3] sm:aspect-video md:aspect-square lg:aspect-[4/3] rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.15)] relative overflow-hidden bg-slate-900 ring-1 ring-white/10">
              <div className="relative w-full h-full flex flex-col overflow-hidden">
                {STAGES.map((stage, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 flex flex-col w-full h-full transition-all duration-700 ease-out transform ${activeIndex === i
                      ? 'opacity-100 translate-y-0 scale-100 visible'
                      : activeIndex < i
                        ? 'opacity-0 translate-y-20 scale-95 invisible'
                        : 'opacity-0 -translate-y-20 scale-95 invisible'
                      }`}
                  >
                    {i === 0 && <ScreenInstagramDM />}
                    {i === 1 && <ScreenWhatsAppChat />}
                    {i === 2 && <ScreenSMSChat />}
                    {i === 3 && <ScreenTwitterFeed />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* --- Smartphone Content Components --- */

const ScreenInstagramDM = () => (
  <div className="flex-1 w-full h-full bg-[#1A1A1A] flex items-center justify-center overflow-hidden">
    <img
      src="/automations/instagram.png"
      alt="Instagram Commerce"
      className="w-full h-full object-cover object-center"
    />
  </div>
);

const ScreenWhatsAppChat = () => (
  <div className="flex-1 w-full h-full bg-[#1A1A1A] flex items-center justify-center overflow-hidden">
    <img
      src="/automations/whatsapp.png"
      alt="WhatsApp Booking Confirmation"
      className="w-full h-full object-cover object-center"
    />
  </div>
);

const ScreenSMSChat = () => (
  <div className="flex-1 flex flex-col bg-white">
    {/* Messages Brand Stripe */}
    <div className="bg-white px-4 py-1.5 flex items-center justify-center gap-1.5 border-b border-slate-50">
      <Smartphone size={12} className="text-slate-900" />
      <span className="text-[10px] font-black tracking-widest text-slate-900 uppercase">Messages</span>
    </div>

    <div className="p-4 flex items-center border-b border-slate-50 bg-white/80 backdrop-blur-md">
      <ChevronLeft size={20} className="text-blue-600" />
      <div className="flex flex-col items-center flex-1">
        <div className="flex items-center gap-1.5">
          <MessageSquare size={14} className="text-blue-600" />
          <span className="text-[11px] font-bold text-slate-900">Evoke AI</span>
        </div>
        <span className="text-[7px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">iMessage</span>
      </div>
      <Info size={16} className="text-blue-600" />
    </div>
    <div className="p-4 flex flex-col items-center border-b border-slate-50 bg-slate-50/30">
      <div className="w-10 h-10 rounded-full bg-slate-100 mb-2 overflow-hidden border border-slate-200">
        <img src="https://api.dicebear.com/7.x/initials/svg?seed=EA" alt="EA" />
      </div>
    </div>
    <div className="flex-1 p-4 flex flex-col gap-4">
      <div className="bg-slate-100 p-3 rounded-2xl text-[11px] max-w-[80%] text-slate-800">Want to hop on a quick call?</div>
      <div className="bg-blue-600 text-white p-3 rounded-2xl text-[11px] max-w-[70%] self-end shadow-sm">Send link.</div>
    </div>
  </div>
);

const ScreenTwitterFeed = () => (
  <div className="flex-1 flex flex-col bg-black text-white">
    {/* Twitter Brand Stripe */}
    <div className="bg-black px-4 py-1.5 flex items-center justify-center gap-1.5 border-b border-slate-800">
      <Twitter size={12} className="fill-white text-white" />
      <span className="text-[10px] font-black tracking-widest text-white uppercase">Twitter</span>
    </div>

    {/* X (Twitter) Header */}
    <div className="px-5 py-4 flex items-center border-b border-slate-800">
      <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-800">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=evoke" alt="Profile" />
      </div>
      <div className="mx-auto flex items-center gap-2">
        <Twitter size={18} fill="currentColor" />
        <span className="text-[10px] font-bold tracking-widest">POST</span>
      </div>
      <SettingsIcon className="text-slate-400" size={18} />
    </div>

    {/* Post Content */}
    <div className="p-4 flex gap-3 border-b border-slate-800">
      <div className="w-10 h-10 rounded-full bg-blue-500 shrink-0 overflow-hidden">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=tech_lead" alt="X User" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span className="text-[11px] font-black">Tech Pioneer</span>
          <span className="text-[10px] text-slate-500">@techpioneer · 2h</span>
        </div>
        <p className="text-[11px] leading-relaxed">
          Just automated my entire sales funnel using <span className="text-blue-400">@evoke_ai</span>.
          The AEON engine is actually insane. 🚀
        </p>
        <div className="mt-3 flex justify-between text-slate-500 pr-10">
          <div className="flex items-center gap-1.5"><MessageSquare size={14} /><span className="text-[10px]">42</span></div>
          <div className="flex items-center gap-1.5 text-emerald-500"><Repeat2 size={14} /><span className="text-[10px]">128</span></div>
          <div className="flex items-center gap-1.5 text-pink-500"><Heart size={14} fill="currentColor" /><span className="text-[10px]">1.2k</span></div>
          <Share size={14} />
        </div>
      </div>
    </div>

    {/* Automated Reply Interaction */}
    <div className="p-4 bg-blue-950/20 border-b border-slate-800 animate-pulse">
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-white shrink-0 p-[2px]">
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-blue-500">
            <Sparkles size={14} fill="currentColor" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="text-[11px] font-black">Evoke AI Agent</span>
            <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center text-[6px]">✓</div>
          </div>
          <p className="text-[10px] text-blue-100">
            Glad you like it! Just sent you a DM with the 2.0 expansion pack details. Check your inbox! 📥
          </p>
        </div>
      </div>
    </div>

    {/* Input Mockup */}
    <div className="mt-auto p-3 border-t border-slate-800">
      <div className="h-9 bg-slate-900 rounded-full border border-slate-800 px-4 flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[8px] font-bold">A</div>
        <span className="text-[10px] text-slate-500 italic">Reply to @techpioneer</span>
      </div>
    </div>
  </div>
);

const SettingsIcon = ({ className, size }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
