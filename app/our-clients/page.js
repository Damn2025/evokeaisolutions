'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider, useTheme } from '../../lib/ThemeContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import {
  BrainCircuit,
  Zap,
  MessagesSquare,
  CheckCircle2,
  ArrowRight,
  X, 

} from 'lucide-react';

const clients = [
  {
    id: 'astroremedis',
    name: 'Astroremedis',
    industry: 'Astrology',
    description: 'Developed an AI-powered astrology assistant that automates report generation and personalized recommendations.',
    summary: 'AI-powered astrology reports and personalized recommendations.',
    services: ['AI Chatbot', 'Automation', 'Analytics'],
    logo: (
      <img
        src="/assets/Astroremedis.png"
        alt="Astromedis Logo"
        className="max-h-8 sm:max-h-9 w-auto object-contain"
      />
    ),
  },
  {
    id: 'meddevices',
    name: 'Med Devices',
    industry: 'Healthcare',
    description: 'We implemented automation in their internal workflows and inventory management system, reducing manual work and accelerating operations.',
    summary: 'Workflow and inventory automation for healthcare.',
    services: ['Workflow Automation', 'RPA Integration', 'Dashboard'],
    logo: (
      <img
        src="/assets/Meddevices.png"
        alt="Med Devices Logo"
        className="max-h-8 sm:max-h-9 w-auto object-contain"
      />
    ),
  },
  {
    id: 'eduonix',
    name: 'Eduonix',
    industry: 'EdTech',
    description: 'We built smart automation systems for course enrollment, certifications, and user communication, streamlining operations and improving learner engagement.',
    summary: 'Enrollment and certification automation for EdTech.',
    services: ['GPT Integration', 'Workflow Automation', 'API Integration'],
    logo: (
      <img
        src="/assets/eduonix.png"
        alt="Eduonix Logo"
        className="max-h-8 sm:max-h-9 w-auto object-contain"
      />
    ),
  },
  {
    id: 'eurocert',
    name: 'Eurocert',
    industry: 'Compliance',
    description: 'We created an AI-driven document verification system that automates compliance checks and certification processes with high accuracy.',
    summary: 'AI document verification for compliance checks.',
    services: ['Vision AI', 'Document Automation', 'Dashboard'],
    logo: (
      <img
        src="/assets/eurocert.webp"
        alt="Eurocert Logo"
        className="max-h-8 sm:max-h-9 w-auto object-contain"
      />
    ),
  },
  {
    id: 'sustainable',
    name: 'Sustainable Futures Trainings',
    industry: 'Education',
    description: 'We developed an intelligent learning platform with automation for student management, certifications, and personalized learning journeys.',
    summary: 'Automated learning and student management platform.',
    services: ['Workflow Automation', 'Analytics', 'WhatsApp Bot'],
    logo: (
      <img
        src="/assets/Sustainable.jpg"
        alt="Sustainable Futures Logo"
        className="max-h-8 sm:max-h-9 w-auto object-contain"
      />
    ),
  },
  {
    id: 'sipcon',
    name: 'Sipcon',
    industry: 'Manufacturing',
    description: 'We automated their business processes and reporting systems, reducing manual intervention and improving overall productivity.',
    summary: 'Business process and reporting automation.',
    services: ['RPA Integration', 'API Automation', 'Analytics'],
    logo: (
      <img
        src="/assets/Sipcon.jpg"
        alt="Sipcon Logo"
        className="max-h-8 sm:max-h-9 w-auto object-contain"
      />
    ),
  },
  {
    id: 'itcindia',
    name: 'ITC India',
    industry: 'Data Tech',
    description: 'We built AI models and automation solutions for data analysis, process optimization, and decision support systems.',
    summary: 'AI models for data analysis and optimization.',
    services: ['AI Models', 'Data Intelligence', 'Analytics'],
    logo: (
      <img
        src="/assets/itc.png"
        alt="ITC India Logo"
        className="max-h-8 sm:max-h-9 w-auto object-contain"
      />
    ),
  },
  {
    id: 'grnata',
    name: 'Grnata',
    industry: 'Real Estate',
    description: 'We implemented a smart automation platform that simplifies client operations, improves workflow efficiency, and enhances user experience.',
    summary: 'Smart automation for real estate operations.',
    services: ['AI Agents', 'Workflow Automation', 'Live Chat'],
    logo: (
      <img
        src="/assets/Grnata.png"
        alt="Grnata Logo"
        className="max-h-8 sm:max-h-9 w-auto object-contain"
      />
    ),
  },
];

const BOOKING_URL = 'https://evokeaisolutions.com/contact-us';

function CountUp({ to, duration = 1500, suffix = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const end = parseInt(to, 10);
    if (isNaN(end)) return;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, to, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

function OurClientsContent() {
  const { theme } = useTheme();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <div className={`min-h-screen text-black font-sans selection:bg-evoke-cyan/30 overflow-x-hidden relative ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <Navigation theme={theme} jumpTo={(sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }} />

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[8%] left-[-8%] w-[40vw] h-[40vw] rounded-full bg-evoke-cyan/10 blur-[100px] animate-pulse" />
        <div className="absolute top-[35%] right-[-8%] w-[35vw] h-[35vw] rounded-full bg-evoke-teal/10 blur-[110px]" />
        <div className="absolute bottom-[10%] left-[12%] w-[30vw] h-[30vw] rounded-full bg-evoke-mint/5 blur-[90px]" />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: `radial-gradient(#028FBE 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
      </div>

      <section id="vision" className="relative min-h-[100dvh] flex flex-col justify-center items-center pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-16 px-4 sm:px-6 max-w-[86rem] mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-black tracking-[-0.03em] leading-[1.1]">
              Empowering Organizations <br />
              with <span className="evoke-gradient-text">AI-Led Solutions</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-2xl text-black/80 max-w-2xl leading-relaxed">
              We partner with forward-thinking organizations to deliver AI, Automation, and Chatbot solutions that drive efficiency, engagement, and growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-1 max-w-2xl lg:max-w-3xl">
              <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-3.5 bg-white border border-evoke-border px-4 py-3.5 sm:p-4 rounded-2xl shadow-sm hover:border-evoke-cyan hover:shadow-md transition-all duration-300 group">
                <div className="bg-evoke-cyan/10 p-2.5 sm:p-3 rounded-xl group-hover:scale-110 transition-transform shrink-0">
                  <BrainCircuit className="w-5 h-5 sm:w-6 sm:h-6 text-evoke-cyan" />
                </div>
                <div className="min-w-0 text-left">
                  <h4 className="font-bold text-sm sm:text-base text-black leading-tight">AI Systems</h4>
                  <p className="text-xs text-black/65 leading-snug mt-1">Intelligent Logic & Models</p>
                </div>
              </div>
              <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-3.5 bg-white border border-evoke-border px-4 py-3.5 sm:p-4 rounded-2xl shadow-sm hover:border-evoke-teal hover:shadow-md transition-all duration-300 group">
                <div className="bg-evoke-teal/10 p-2.5 sm:p-3 rounded-xl group-hover:scale-110 transition-transform shrink-0">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-evoke-teal" />
                </div>
                <div className="min-w-0 text-left">
                  <h4 className="font-bold text-sm sm:text-base text-black leading-tight">Automation</h4>
                  <p className="text-xs text-black/65 leading-snug mt-1">Smarter Fast Workflows</p>
                </div>
              </div>
              <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-3.5 bg-white border border-evoke-border px-4 py-3.5 sm:p-4 rounded-2xl shadow-sm hover:border-evoke-mint hover:shadow-md transition-all duration-300 group">
                <div className="bg-evoke-mint/10 p-2.5 sm:p-3 rounded-xl group-hover:scale-110 transition-transform shrink-0">
                  <MessagesSquare className="w-5 h-5 sm:w-6 sm:h-6 text-evoke-mint" />
                </div>
                <div className="min-w-0 text-left">
                  <h4 className="font-bold text-sm sm:text-base text-black leading-tight">Chatbots</h4>
                  <p className="text-xs text-black/65 leading-snug mt-1">24/7 Human-like Agents</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a href="#clients" className="w-full sm:w-auto px-6 py-3.5 sm:px-9 sm:py-4 evoke-gradient-bg text-white font-bold text-base sm:text-lg rounded-xl hover:shadow-lg hover:shadow-evoke-cyan/30 transition-all hover:-translate-y-0.5 duration-300 flex items-center justify-center sm:justify-center space-x-2.5">
                <span>Explore Case Studies</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:flex justify-center lg:justify-end items-center relative z-10 py-4 lg:py-0">
            <div className="relative w-full max-w-xl sm:max-w-2xl lg:max-w-none flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-evoke-cyan/15 via-evoke-teal/15 to-transparent rounded-full blur-3xl -z-10 scale-100 animate-pulse" />
              <img
                src="/assets/hero.png"
                alt="AI Solutions Hero"
                className="w-full h-auto max-h-[38vh] sm:max-h-[48vh] lg:max-h-[62vh] object-contain drop-shadow-[0_25px_50px_rgba(2,143,190,0.22)] hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="py-16 sm:py-20 px-4 sm:px-6 border-t border-evoke-border relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h3 className="text-evoke-cyan font-extrabold text-xs tracking-widest uppercase mb-1.5 flex items-center">
                OUR WORK. REAL IMPACT.
                <span className="w-10 h-[2px] bg-evoke-teal ml-2.5 inline-block" />
              </h3>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">Case Study Showcases</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {clients.map((client) => (
              <div
                key={client.id}
                onClick={() => setSelectedCaseStudy(client)}
                className="group relative bg-evoke-bg-base border border-evoke-border hover:border-evoke-cyan rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_35px_rgba(2,143,190,0.12)] cursor-pointer flex flex-col justify-between h-full"
              >
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-evoke-cyan/0 group-hover:bg-evoke-cyan/5 blur-sm transition-all duration-300" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 sm:h-11 flex items-center overflow-hidden origin-left">
                      {client.logo}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-evoke-surface text-evoke-teal border border-evoke-border/80 uppercase tracking-wider shrink-0">
                      {client.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-black mb-2 tracking-tight group-hover:text-evoke-cyan transition-colors">{client.name}</h3>
                  <p className="text-xs sm:text-sm text-black/75 leading-relaxed mb-5 line-clamp-2">{client.summary}</p>
                </div>
                <div>
                  <div className="space-y-2 mb-5">
                    {client.services.map((service, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-black/85 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-evoke-mint shrink-0" />
                        <span className="truncate">{service}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-3.5 border-t border-evoke-border/80 flex items-center justify-between text-evoke-cyan font-bold text-xs uppercase tracking-wider group-hover:text-evoke-teal transition-all">
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stats" className="py-14 sm:py-16 px-4 sm:px-6 border-t border-evoke-border relative bg-evoke-bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="space-y-1.5 p-4 rounded-2xl bg-white/60 border border-evoke-border/50 shadow-2xs">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-evoke-cyan tracking-tight"><CountUp to="80" suffix="%" />+</div>
              <div className="text-xs sm:text-sm font-bold text-black/80 uppercase tracking-wider">Operational Efficiency Increase</div>
            </div>
            <div className="space-y-1.5 p-4 rounded-2xl bg-white/60 border border-evoke-border/50 shadow-2xs">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-evoke-teal tracking-tight"><CountUp to="60" />+</div>
              <div className="text-xs sm:text-sm font-bold text-black/80 uppercase tracking-wider">Workflow Tasks Automated</div>
            </div>
            <div className="space-y-1.5 p-4 rounded-2xl bg-white/60 border border-evoke-border/50 shadow-2xs">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-evoke-mint tracking-tight"><CountUp to="90" suffix="%" />+</div>
              <div className="text-xs sm:text-sm font-bold text-black/80 uppercase tracking-wider">Customer Satisfaction Rate</div>
            </div>
            <div className="space-y-1.5 p-4 rounded-2xl bg-white/60 border border-evoke-border/50 shadow-2xs">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight"><CountUp to="100" />+</div>
              <div className="text-xs sm:text-sm font-bold text-black/80 uppercase tracking-wider">Enterprise Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-7 relative z-10 bg-evoke-bg-elevated border border-evoke-border rounded-3xl p-6 sm:p-12 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-evoke-cyan/[0.05] via-evoke-teal/[0.05] to-evoke-mint/[0.05] rounded-3xl pointer-events-none" />
          <span className="text-xs font-extrabold text-evoke-teal tracking-widest uppercase bg-evoke-teal/10 px-3.5 py-1.5 rounded-full inline-block">Accelerate Growth Today</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight">Ready to Build Your AI Future?</h2>
          <p className="text-sm sm:text-base text-black/75 max-w-xl mx-auto leading-relaxed">Schedule a Free Consultation and outline an implementation strategy tailored to your custom workflow bottlenecks.</p>
          <div className="pt-2">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 sm:px-9 sm:py-4.5 evoke-gradient-bg text-white font-bold text-sm sm:text-base rounded-xl hover:shadow-lg hover:shadow-evoke-cyan/40 transition-all hover:-translate-y-0.5 duration-300">
              <span>Book Your Free Strategy Session</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer theme={theme} />

      {selectedCaseStudy && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-start sm:items-center justify-center p-3 sm:p-4 pt-6 sm:pt-10 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-md sm:max-w-lg overflow-hidden shadow-2xl relative border border-evoke-border max-h-[88vh] flex flex-col">
            <div className="h-2.5 evoke-gradient-bg shrink-0" />
            <div className="p-4 sm:p-5 md:p-7 overflow-y-auto">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-5 gap-4">
                <div className="w-full sm:max-w-[70%]">
                  <span className="text-[11px] uppercase font-extrabold tracking-widest text-evoke-mint bg-evoke-mint/10 px-3 py-1 rounded-full mb-2.5 inline-block">{selectedCaseStudy.industry} Case Integration</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">{selectedCaseStudy.name}</h3>
                </div>
            
              </div>
              <div className="bg-evoke-surface rounded-2xl p-5 sm:p-6 flex justify-center items-center mb-6 border border-evoke-border min-h-[96px]">
                <div className="scale-110 sm:scale-125 flex items-center justify-center">{selectedCaseStudy.logo}</div>
              </div>
              <div className="space-y-5">
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-black/80 mb-2">Challenge & Solution Outline</h4>
                  <p className="text-sm sm:text-base text-black/85 leading-relaxed">{selectedCaseStudy.description} We automated internal workflows, optimized API communication latency, and integrated specialized NLP model nodes to offer instant analytics feedback dashboards.</p>
                </div>
                <div className="pt-4 border-t border-evoke-border">
                  <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-black/80 mb-3">Implemented Technology Nodes</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCaseStudy.services.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-black bg-evoke-surface p-3 rounded-xl border border-evoke-border">
                        <CheckCircle2 className="w-4 h-4 text-evoke-cyan shrink-0" />
                        <span className="text-xs sm:text-sm font-bold truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-evoke-border flex justify-end">
                <button onClick={() => setSelectedCaseStudy(null)} className="w-full sm:w-auto px-5 py-3 rounded-xl text-sm font-bold bg-[#028fbe] text-black shadow-lg shadow-evoke-cyan/10 hover:bg-[#0179a5] hover:shadow-xl hover:shadow-evoke-cyan/20 transition-colors duration-300">Close Profile</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function OurClientsPage() {
  return (
    <ThemeProvider>
      <OurClientsContent />
    </ThemeProvider>
  );
}
