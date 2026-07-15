import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative py-48 overflow-hidden bg-neutral-50 flex items-center justify-center px-6">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#00d2ff]/5 blur-[120px] rounded-full animate-pulse"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] z-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '60px 60px' }}></div>

      <div className="container mx-auto max-w-6xl relative z-10 text-center space-y-16">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2 border border-neutral-200 bg-neutral-50 rounded-full text-[12px] font-bold text-neutral-500 tracking-[0.3em] uppercase">
          <Sparkles className="w-4 h-4 text-[#00d2ff]" />
          Instant Deployment
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-neutral-900 leading-[1.05]">
            Stop Responding. <br />
            <span className="bg-gradient-to-r from-[#00d2ff] to-[#34d399] bg-clip-text text-transparent">
              Start Connecting.
            </span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-xl md:text-3xl text-neutral-600 font-medium leading-relaxed">
            Deploy your first Evoke AI assistant in <span className="text-neutral-900">minutes</span>, not months.
          </p>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <a href="#contact" className="group relative px-12 py-5 bg-gradient-to-r from-[#00d2ff] to-[#34d399] rounded-2xl text-black font-black text-xl transition-all shadow-[0_20px_50px_rgba(0,210,255,0.3)] hover:scale-105 hover:shadow-[0_25px_60px_rgba(0,210,255,0.4)] active:scale-95 flex items-center gap-3">
            Get Started for Free
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Support Text */}
        <p className="text-neutral-400 text-sm font-medium tracking-wide">
          No credit card required. Cancel anytime.
        </p>

      </div>

      {/* Side Decorative Borders */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>

    </section>
  );
};

export default CTA;
