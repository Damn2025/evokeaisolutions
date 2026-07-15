import React, { useState } from 'react';
import { MessageSquare, TrendingUp, Users, Layout, ArrowUpRight } from 'lucide-react';

const service1 = '/ai-assistants/service-1.png';
const service2 = '/ai-assistants/service-2.png';
const service3 = '/ai-assistants/service-3.png';
const service4 = '/ai-assistants/service-4.png';

const SERVICES_DATA = [
  {
    id: 'enterprise-chatbots',
    title: 'Enterprise Chatbots',
    headline: 'Enterprise Chatbots',
    description: 'Scalable, secure, and ready to handle thousands of concurrent queries with zero latency.',
    icon: <MessageSquare className="w-14 h-14 text-[#00d2ff]" />,
  },
  {
    id: 'sales-automation',
    title: 'Sales Automation',
    headline: 'Sales Automation',
    description: 'Intelligent funnels that qualify leads and schedule meetings while you sleep, maximizing conversion.',
    icon: <TrendingUp className="w-14 h-14 text-[#34d399]" />,
  },
  {
    id: 'customer-success',
    title: 'Customer Success',
    headline: 'Customer Success',
    description: 'Support that understands nuance and resolves complex tickets instantly using advanced NLP.',
    icon: <Users className="w-14 h-14 text-emerald-500" />,
  },
  {
    id: 'interactive-ui-ux',
    title: 'Interactive UI/UX',
    headline: 'Interactive UI/UX',
    description: 'Stunning, responsive chat interfaces designed with Tailwind CSS for a premium, high-converting feel.',
    icon: <Layout className="w-14 h-14 text-purple-500" />,
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(SERVICES_DATA[0].id);
  const activeIdx = SERVICES_DATA.findIndex(s => s.id === activeTab);
  const total = SERVICES_DATA.length;

  return (
    <section id="services" className="relative py-48 bg-neutral-50 flex items-center justify-center p-6 md:p-12 font-sans selection:bg-cyan-100 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1500px] w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

        {/* Left Content Column */}
        <div className="lg:col-span-5 space-y-16 z-50 py-4">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-[12px] font-bold text-cyan-600 tracking-[0.2em] uppercase">
              Core Capabilities
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-900 leading-[1.1] tracking-tighter">
              What sets our <br />
              <span className="bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">solutions apart?</span>
            </h1>
          </div>

          <nav className="flex flex-col space-y-6">
            {SERVICES_DATA.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center text-left group transition-all duration-300 ${activeTab === service.id
                  ? 'text-black font-bold'
                  : 'text-black font-medium'
                  }`}
              >
                <div className={`w-2 h-16 mr-10 rounded-full transition-all duration-500 ${activeTab === service.id
                  ? 'bg-gradient-to-b from-cyan-500 to-emerald-500 opacity-100 shadow-[0_0_30px_rgba(6,182,212,0.4)]'
                  : 'bg-neutral-200 opacity-30 group-hover:opacity-100'
                  }`} />
                <span className="text-2xl md:text-3xl lg:text-4xl tracking-tighter  duration-300 group-hover:translate-x-2">
                  {service.title}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Right Preview Column */}
        <div className="lg:col-span-7 relative h-[900px] flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {SERVICES_DATA.map((service, index) => {
              let displayOffset = (index - activeIdx + total) % total;
              const isFront = displayOffset === 0;

              const isEnterprise = service.id === 'enterprise-chatbots';
              const isSalesAutomation = service.id === 'sales-automation';
              const isCustomerSuccess = service.id === 'customer-success';
              const isUIUX = service.id === 'interactive-ui-ux';
              const hasImage = isEnterprise || isSalesAutomation || isCustomerSuccess || isUIUX;

              let activeImage = null;
              if (isEnterprise) activeImage = service1;
              else if (isSalesAutomation) activeImage = service2;
              else if (isCustomerSuccess) activeImage = service3;
              else if (isUIUX) activeImage = service4;

              const style = {
                transform: `perspective(2000px) translateX(${displayOffset * 150}px) translateZ(${-displayOffset * 150}px) rotateY(${-displayOffset * 5}deg) scale(${1 - displayOffset * 0.08})`,
                zIndex: 40 - displayOffset,
                opacity: isFront ? 1 : Math.max(0, 0.6 - (displayOffset * 0.2)),
                cursor: isFront ? 'default' : 'pointer',
                filter: isFront ? 'none' : `blur(${displayOffset * 1}px)`,
              };

              return (
                <div
                  key={service.id}
                  style={style}
                  onClick={() => !isFront && setActiveTab(service.id)}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-full max-w-[750px] aspect-[16/10] bg-neutral-900 rounded-[3.5rem] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.4)] overflow-hidden border transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${isFront ? 'border-white/10' : 'border-transparent'
                    } group`}
                >
                  {/* Image Background with Blending */}
                  <div className="absolute inset-0 z-0">
                    {hasImage ? (
                      <img
                        src={activeImage}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
                        <div className="w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full animate-pulse"></div>
                      </div>
                    )}
                    {/* Gradient Overlays for Blending */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/20 to-transparent z-10"></div>
                  </div>

                  {/* Icon floating */}
                  <div className="absolute top-10 right-10 z-20">
                    <div className="p-5 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-500/50">
                      {React.cloneElement(service.icon, { className: 'w-8 h-8 text-white' })}
                    </div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-12 md:p-16 z-20 space-y-8">
                    <div className="space-y-3">
                      <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tighter">
                        {service.headline}
                      </h3>
                    </div>
                    <p className="text-neutral-200 text-xl md:text-2xl leading-relaxed font-medium">
                      {service.description}
                    </p>
                    <div className="pt-6">
                      <a href="#contact" className="flex items-center gap-4 text-white font-black text-base md:text-lg uppercase tracking-[0.2em] group/link w-fit border-b border-white/20 pb-1 hover:border-white transition-all">
                        Start Now 
                        <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                      </a>
                    </div>
                  </div>

                  {/* Inner Border Decorative */}
                  <div className="absolute inset-6 border border-white/5 rounded-[2rem] pointer-events-none z-30"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}; export default Services;
