"use client";
import React, { useState, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
  LayoutGroup,
} from 'framer-motion';
import { ScrollytellingSection } from './components/ScrollytellingSection';
import Sectors from './components/Sectors';
import Timeline from './components/Timeline';
import {
  Zap,
  ArrowRight,
  CheckCircle2,
  Clock,
  Globe,
  Smartphone,
  TrendingUp,
  ChevronDown,
  Phone,
  MessageCircle,
  Send,
  Users,
  Cpu,
  Shield,
} from 'lucide-react';

const Hero = () => {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-40 pb-32 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      {/* Background Video */}
      <div className="absolute inset-0 -z-20 bg-black">
        <video
          src="https://www.damnart.com/wp-content/uploads/2026/02/grok-video-67b35e07-881e-4721-8a2f-bbfacb975c84.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>


      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-bold mb-8 border border-white/20 backdrop-blur-sm"
          >
            <Zap size={16} className="fill-current" />
            <span>New: AEON AI Framework 2.0</span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-6xl md:text-[5.5rem] font-black leading-[0.9] tracking-tighter mb-10 text-white">
            Your Business, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-evoke-accent via-blue-500 to-indigo-600 animate-gradient-x">Automated.</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="space-y-8 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-evoke-accent rounded-full" />
              <p className="text-lg font-black text-white uppercase tracking-widest bg-white/10 px-3 py-1 rounded-lg backdrop-blur-sm">U.S. buyers expect instant responses.</p>
            </div>

            <p className="text-xl text-white/90 max-w-xl leading-relaxed font-medium">
              We deploy the <span className="text-white font-bold border-b-2 border-evoke-accent">AEON AI Framework</span> via Manychat to transform your DMs into a high-performance sales machine—across Instagram, Facebook, WhatsApp, Telegram, TikTok, and SMS.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 25px 30px -10px rgb(37 99 235 / 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-evoke-accent text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-evoke-accent/20"
            >
              Get your free audit <ArrowRight size={22} />
            </motion.button>
            <motion.button
              whileHover={{ backgroundColor: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.6)" }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-[rgba(255,255,255,0.3)] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all backdrop-blur-sm"
            >
              Enterprise Solutions
            </motion.button>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-16 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map(i => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8, scale: 1.1, zIndex: 20 }}
                  className="relative"
                >
                  <img
                    src={`https://picsum.photos/seed/user${i}/80/80`}
                    className="w-12 h-12 rounded-full border-4 border-white shadow-lg cursor-pointer object-cover"
                    alt="User"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-yellow-400 mb-1">
                {[1, 2, 3, 4, 5].map(i => <Zap key={i} size={14} className="fill-current" />)}
              </div>
              <p className="text-white/70 font-medium">Trusted by <span className="text-white font-bold">50+ Global Brands</span></p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          {/* Floating UI Elements */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 z-20 glass-card p-4 flex items-center gap-3 shadow-2xl"
          >
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
              <TrendingUp size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-gray-400">Conversion Rate</p>
              <p className="text-lg font-black text-green-600">+400%</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -right-10 z-20 glass-card p-4 flex items-center gap-3 shadow-2xl"
          >
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
              <MessageCircle size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-gray-400">Response Time</p>
              <p className="text-lg font-black text-blue-600">3 Seconds</p>
            </div>
          </motion.div>

          <div className="relative z-10 bg-evoke-black rounded-[3rem] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-white max-w-[340px] mx-auto">
            <div className="bg-white rounded-[2.5rem] h-[600px] overflow-hidden flex flex-col">
              <div className="p-5 border-b flex items-center justify-between bg-gray-50/50 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-evoke-accent to-blue-400 flex items-center justify-center shadow-lg">
                    <Zap size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-black tracking-tight">Evoke AEON Agent</p>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <p className="text-[10px] text-gray-400 font-bold">Active Now</p>
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <Phone size={14} className="text-gray-400" />
                </div>
              </div>
              <div className="flex-1 p-5 space-y-5 overflow-y-auto scrollbar-hide bg-gradient-to-b from-white to-gray-50">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key="msg-1"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="bg-gray-100 p-4 rounded-3xl rounded-tl-none text-sm max-w-[85%] shadow-sm"
                  >
                    Hi! I saw you were looking at our <span className="font-bold">Enterprise Solutions</span>. Would you like a personalized ROI audit?
                  </motion.div>
                  <motion.div
                    key="msg-2"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 1.5 }}
                    className="bg-evoke-accent text-white p-4 rounded-3xl rounded-tr-none text-sm max-w-[85%] ml-auto shadow-lg shadow-evoke-accent/20"
                  >
                    Yes, that would be great!
                  </motion.div>
                  <motion.div
                    key="msg-3"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 3 }}
                    className="bg-gray-100 p-4 rounded-3xl rounded-tl-none text-sm max-w-[85%] shadow-sm"
                  >
                    Perfect. I've analyzed your traffic. You're currently losing <span className="text-red-500 font-bold">$12k/mo</span> to slow response times. Ready to fix it?
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="p-5 border-t bg-white flex gap-3">
                <div className="flex-1 h-10 bg-gray-100 rounded-2xl px-4 flex items-center text-gray-400 text-xs">
                  Type a message...
                </div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-evoke-accent rounded-2xl flex items-center justify-center cursor-pointer shadow-lg shadow-evoke-accent/30"
                >
                  <Send size={18} className="text-white" />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-r from-evoke-accent/10 to-blue-400/10 rounded-full blur-[100px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
};


const PainPoints = () => {
  const points = [
    {
      title: "The 5-Minute Rule",
      desc: "Response probability drops by 400% after just 5 minutes of silence.",
      icon: <Clock className="text-red-500" />,
      color: "from-red-500/10 to-red-500/5"
    },
    {
      title: "The 'Ghosting' Epidemic",
      desc: "70% of U.S. customers switch to a competitor if their first inquiry isn't acknowledged instantly.",
      icon: <Users className="text-orange-500" />,
      color: "from-orange-500/10 to-orange-500/5"
    },
    {
      title: "The Labor Trap",
      desc: "Hiring a 24/7 human team costs $15,000+ per month. AI never takes a day off.",
      icon: <TrendingUp className="text-blue-500" />,
      color: "from-blue-500/10 to-blue-500/5"
    }
  ];

  return (
    <section className="section-padding overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full overflow-hidden md:overflow-visible px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">The Silence in Your Inbox <br /><span className="text-red-500">is Costing You.</span></h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">Why hire more staff when you can hire an AI agent that speaks 50 languages and works 24/7?</p>
        </motion.div>
        <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden pb-10 px-4 -mx-4 md:px-0 md:mx-0 w-full scroll-smooth md:grid md:grid-cols-3 gap-5 md:gap-10">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{
                y: -15,
                scale: 1.02,
                boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.1)"
              }}
              className={`bg-white p-8 lg:p-10 min-h-[380px] flex flex-col justify-start rounded-[2.5rem] border border-black/5 transition-all relative overflow-hidden group shadow-sm hover:shadow-xl shrink-0 w-80 min-w-[320px] md:w-auto md:min-w-0`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm relative z-10"
              >
                {React.cloneElement(p.icon as React.ReactElement<any>, { size: 28 })}
              </motion.div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4 tracking-tight">{p.title}</h3>
                <p className="text-gray-500 leading-relaxed text-base">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


// const Solutions = () => {
//   const platforms = [
//     { name: "Instagram & Facebook", desc: "Convert comments to DMs and checkout links.", icon: <Instagram size={24} />, color: "bg-pink-500" },
//     { name: "WhatsApp", desc: "24/7 service, order updates, and reminders.", icon: <MessageCircle size={24} />, color: "bg-green-500" },
//     { name: "SMS & Telegram", desc: "Re-engage cold leads with high-open-rate messages.", icon: <Smartphone size={24} />, color: "bg-blue-500" },
//     { name: "Cross-Channel Sync", desc: "Follow-up via email if a lead goes quiet.", icon: <Globe size={24} />, color: "bg-indigo-500" }
//   ];

//   return (
//     <section id="solutions" className="section-padding bg-white overflow-hidden relative">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-24 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-5xl font-black mb-8 tracking-tight">One Brain. <br /><span className="text-gradient">All Your Platforms.</span></h2>
//             <p className="text-xl text-gray-600 mb-12 leading-relaxed">
//               Most bots are rigid. Evoke AI’s AEON engine understands intent, enabling sophisticated automation across the entire Manychat ecosystem.
//             </p>
//             <div className="grid sm:grid-cols-2 gap-6">
//               {platforms.map((p, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.1 }}
//                   whileHover={{ y: -5, backgroundColor: "rgba(37, 99, 235, 0.05)" }}
//                   className="p-6 rounded-[2rem] border border-black/5 transition-all cursor-default bg-gray-50/50"
//                 >
//                   <div className={`w-12 h-12 ${p.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg`}>
//                     {p.icon}
//                   </div>
//                   <h4 className="font-black text-lg mb-2">{p.name}</h4>
//                   <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//             className="bg-evoke-black rounded-[4rem] p-16 text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(37,99,235,0.2)]"
//           >
//             <div className="relative z-10">
//               <motion.div
//                 animate={{
//                   scale: [1, 1.1, 1],
//                   boxShadow: ["0 0 0px rgba(37,99,235,0)", "0 0 20px rgba(37,99,235,0.5)", "0 0 0px rgba(37,99,235,0)"]
//                 }}
//                 transition={{ duration: 3, repeat: Infinity }}
//                 className="inline-block px-6 py-2 bg-evoke-accent rounded-full text-sm font-black mb-8 tracking-widest uppercase"
//               >
//                 AEON ENGINE
//               </motion.div>
//               <h3 className="text-4xl font-black mb-8 tracking-tight leading-tight">Intent-Based <br />Conversations</h3>
//               <p className="text-gray-400 text-lg mb-12 leading-relaxed">We don't just build "buttons." We build AI that understands what your customers actually want using the AEON framework.</p>
//               <div className="space-y-6">
//                 {[
//                   "Human-in-the-Loop Security",
//                   "Enterprise-grade Encryption",
//                   "Multi-language Support (50+)"
//                 ].map((text, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, x: 20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.5 + (i * 0.15) }}
//                     className="flex items-center gap-4 group"
//                   >
//                     <div className="w-10 h-10 rounded-full bg-evoke-accent/20 flex items-center justify-center group-hover:bg-evoke-accent transition-colors">
//                       <CheckCircle2 className="text-evoke-accent group-hover:text-white" size={24} />
//                     </div>
//                     <span className="text-lg font-bold text-gray-200">{text}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//             <motion.div
//               animate={{
//                 scale: [1, 1.8, 1],
//                 opacity: [0.1, 0.3, 0.1],
//                 rotate: [0, 180, 360]
//               }}
//               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//               className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-evoke-accent rounded-full blur-[120px]"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };


// const Industries = () => {
//   const industries = [
//     { title: "E-Commerce", desc: "Automated abandoned cart recovery and product recommendations.", icon: <TrendingUp size={24} />, color: "text-pink-500" },
//     { title: "Real Estate", desc: "24/7 property lead qualification and viewing scheduling.", icon: <Globe size={24} />, color: "text-emerald-500" },
//     { title: "SaaS & Agencies", desc: "Instant demo booking and lead magnet delivery.", icon: <Zap size={24} />, color: "text-blue-500" },
//     { title: "Professional Services", desc: "Automated FAQ handling and appointment reminders.", icon: <Users size={24} />, color: "text-indigo-500" }
//   ];

//   return (
//     <section id="industries" className="section-padding bg-evoke-surface overflow-hidden relative">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-5xl font-black mb-6 tracking-tight">Tailored for <br /><span className="text-gradient">High-Growth Sectors.</span></h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Industry-specific solutions designed for maximum ROI and seamless integration.</p>
//         </motion.div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {industries.map((ind, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1, duration: 0.5 }}
//               whileHover={{
//                 y: -10,
//                 scale: 1.05,
//                 boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.08)"
//               }}
//               className="bg-white p-10 rounded-[2.5rem] border border-black/5 transition-all group cursor-default relative overflow-hidden"
//             >
//               <div className={`w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-evoke-accent group-hover:text-white transition-all shadow-inner ${ind.color}`}>
//                 {ind.icon}
//               </div>
//               <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-evoke-accent transition-colors">{ind.title}</h3>
//               <p className="text-gray-600 leading-relaxed">{ind.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


const Process = () => {
  const steps = [
    { title: "The Audit", desc: "We analyze your current gaps and identify high-ROI opportunities.", icon: <CheckCircle2 size={36} />, color: "#3B82F6" },
    { title: "The Architecture", desc: "Our engineers build custom, AEON-powered flows tailored to your brand.", icon: <Cpu size={36} />, color: "#6366F1" },
    { title: "The Integration", desc: "We sync your AI agents with your CRM (HubSpot, Zoho, or Salesforce).", icon: <Globe size={36} />, color: "#8B5CF6" },
    { title: "The Scale", desc: "We launch, monitor, and optimize for continuous growth.", icon: <TrendingUp size={36} />, color: "#2563EB" },
  ];

  const chainRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(chainRef, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-black mb-6 tracking-tight">The Road to <span className="text-gradient">Automation.</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">A proven 4-step framework to transform your business communication.</p>
        </motion.div>

        {/* Steps */}
        <div ref={chainRef} className="flex flex-col md:flex-row items-center justify-center gap-0 flex-wrap">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              {/* Step card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center group cursor-default w-52"
              >
                {/* Icon circle */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="relative w-28 h-28 rounded-3xl flex items-center justify-center text-white mb-6 z-10"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}, ${step.color}bb)`,
                    boxShadow: `0 8px 28px ${step.color}40`,
                  }}
                >
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-xs font-black flex items-center justify-center shadow-md" style={{ color: step.color }}>
                    {i + 1}
                  </span>
                  {step.icon}
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                    className="absolute inset-0 rounded-2xl"
                    style={{ background: step.color }}
                  />
                </motion.div>
                <h3 className="text-lg font-black mb-2 tracking-tight group-hover:text-evoke-accent transition-colors">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed px-2">{step.desc}</p>
              </motion.div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <>
                  {/* Desktop arrow */}
                  <motion.div
                    className="hidden md:flex items-center mx-3 mb-16"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.2 + 0.45 }}
                  >
                    <span
                      className="text-4xl font-thin select-none"
                      style={{
                        background: `linear-gradient(to right, ${step.color}, ${steps[i + 1].color})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        opacity: 0.7,
                      }}
                    >
                      →
                    </span>
                  </motion.div>

                  {/* Mobile arrow */}
                  <motion.div
                    className="flex md:hidden items-center justify-center my-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.2 + 0.45 }}
                  >
                    <span
                      className="text-3xl font-thin rotate-90 select-none"
                      style={{
                        background: `linear-gradient(to right, ${step.color}, ${steps[i + 1].color})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        opacity: 0.7,
                      }}
                    >
                      →
                    </span>
                  </motion.div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};




const CaseStudyCard = ({ c, i }: { c: any; i: number; key?: React.Key }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative perspective-1000 antialiased shrink-0 w-80 min-w-[320px] lg:w-auto lg:min-w-0"
    >
      <div className="bg-white rounded-[2.5rem] overflow-hidden border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
        <div style={{ transform: "translateZ(40px)" }} className="h-52 overflow-hidden relative">
          <img
            src={c.image}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            alt={c.company}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-8">
            <p className="text-[10px] font-black text-evoke-accent uppercase tracking-widest mb-1">{c.sector}</p>
            <h3 className="text-2xl font-black text-white tracking-tight">{c.company}</h3>
          </div>
        </div>

        <div className="p-8 flex-1 flex flex-col" style={{ transform: "translateZ(20px)" }}>
          <div className="mb-6">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">The Challenge</p>
            <p className="text-gray-700 font-medium leading-relaxed">{c.pain}</p>
          </div>

          <div className="mt-auto">
            <div className="p-5 bg-evoke-accent/5 rounded-2xl border border-evoke-accent/10 mb-6 group-hover:bg-evoke-accent group-hover:text-white transition-all duration-500">
              <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-70">The Result</p>
              <p className="text-xl font-black text-evoke-accent group-hover:text-white transition-colors">{c.result}</p>
            </div>
            <p className="text-sm text-gray-500 italic leading-relaxed">"{c.desc}"</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudies = () => {
  const cases = [
    {
      company: "Grnata Group",
      sector: "Real Estate",
      pain: "Leads messaging at 2 AM were 'cold' by morning.",
      result: "35% increase in viewing bookings.",
      desc: "Custom AEON discovery bot qualified leads by budget and location in real-time.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      company: "Sipcon",
      sector: "E-Commerce & FinTech",
      pain: "Manual follow-up was slowing the sales cycle.",
      result: "Response time dropped from 24h to 3s.",
      desc: "Integrated Manychat + Zoho CRM automation handled lead routing instantly.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      company: "ITC India",
      sector: "Compliance & Testing",
      pain: "Complex technical questions consumed expert time.",
      result: "Manual support load reduced by 60%.",
      desc: "Knowledge assistant providing instant, automated documentation guidance.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600"
    }
  ];

  return (
    <section id="results" className="section-padding overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full overflow-hidden lg:overflow-visible px-4 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-evoke-accent/10 text-evoke-accent text-xs font-black uppercase tracking-widest mb-4">
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Proven <span className="text-gradient">Results.</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real impact for global enterprises scaling with Evoke AI.</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="flex flex-nowrap overflow-x-auto overflow-y-hidden pb-10 px-4 -mx-4 lg:px-0 lg:mx-0 w-full scroll-smooth lg:grid lg:grid-cols-3 gap-5 lg:gap-10"
        >
          {cases.map((c, i) => (
            <CaseStudyCard key={i} c={c} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};


const faqData = [
  {
    id: 1,
    question: "Will it feel like a robot?",
    answer: "Not at all. Evoke AI uses advanced natural language processing to ensure every interaction feels human, empathetic, and tailored to your specific brand voice. Our goal is seamless integration, not automated repetition."
  },
  {
    id: 2,
    question: "Is it hard to manage?",
    answer: "We've designed our dashboard to be intuitive for everyone. No technical background is required. You can update responses, monitor performance, and tweak settings with a few simple clicks."
  },
  {
    id: 3,
    question: "What is the ROI?",
    answer: "Most of our partners see a significant reduction in support overhead within the first 30 days. By automating repetitive tasks, your team can focus on high-value strategy, typically resulting in a 3x-5x return on investment."
  },
  {
    id: 4,
    question: "How long does setup take?",
    answer: "Standard implementation takes less than 48 hours. Our onboarding team works with you to sync your existing data so you can go live with confidence almost immediately."
  },
  {
    id: 5,
    question: "Does it work with my current tools?",
    answer: "Yes, Evoke AI features native integrations with most popular CRM and helpdesk platforms, ensuring that your data flows smoothly across your entire tech stack."
  }
];

const FAQItem: React.FC<{ item: any; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`mb-5 overflow-hidden border transition-all duration-500 rounded-[2rem] ${isOpen
        ? 'border-blue-500 bg-white shadow-xl shadow-blue-100/50 ring-1 ring-blue-100'
        : 'border-slate-100 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50'
        }`}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-7 text-left focus:outline-none group"
      >
        <div className="flex items-center gap-5">
          <span className={`font-bold text-xl md:text-2xl transition-colors duration-300 ${isOpen ? 'text-blue-900' : 'text-slate-900 group-hover:text-blue-600'
            }`}>
            {item.question}
          </span>
        </div>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            backgroundColor: isOpen ? '#2563eb' : '#eff6ff'
          }}
          className={`p-2.5 rounded-full transition-colors duration-300 ${isOpen ? 'text-white' : 'text-blue-500'}`}
        >
          <ChevronDown size={20} strokeWidth={3} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`answer-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="border-t border-slate-50 px-8 pb-10 pt-6">
              <p className="leading-relaxed text-slate-500 text-lg md:text-xl">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section id="faq" className="min-h-screen flex flex-col justify-center relative bg-[#ffffff] py-12 px-4 font-sans overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-5xl md:text-6xl font-black tracking-tight text-slate-900"
          >
            Got Questions? <span className="text-blue-600">FAQs</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 font-medium"
          >
            Everything you need to know about Evoke AI.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="min-h-[300px]">
          <LayoutGroup>
            <motion.div layout className="space-y-2">
              <AnimatePresence mode="popLayout">
                {faqData.map((item) => (
                  <FAQItem
                    key={item.id}
                    item={item}
                    isOpen={openIndex === item.id}
                    onClick={() => setOpenIndex(openIndex === item.id ? -1 : item.id)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const logos = [
    { src: '/automations/astro.png', alt: 'Astroremedis' },
    { src: '/automations/med.png', alt: 'Meddevices' },
    { src: '/automations/edu.jpeg', alt: 'Eduonix' },
    { src: '/automations/euro.webp', alt: 'Eurocert' },
    { src: '/automations/itc.png', alt: 'ITC India' },
    { src: '/automations/sip.jpeg', alt: 'Sipcon' },
  ];
  // duplicate for seamless loop
  const track = [...logos, ...logos];

  return (
    <section className="min-h-screen flex flex-col justify-center py-20 overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #f0f9ff 50%, #eff6ff 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-black uppercase tracking-[0.25em] text-gray-400 mb-3"
        >
          Trusted by global enterprises
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black tracking-tight"
        >
          50+ Brands Already{' '}
          <span className="text-gradient">Scaling Faster.</span>
        </motion.h2>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#eef2ff] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#eff6ff] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-8 px-4">
          {track.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-lg hover:border-evoke-accent/30 transition-all duration-300 px-10 py-7 mx-4 group"
              style={{ minWidth: 220 }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 w-40 object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const EvokeAdvantage = () => {
  const advantages = [
    {
      title: "1. Intent-Based Conversations",
      desc: "We don't just build \"buttons.\" We build AI that understands what your customers actually want using the AEON framework.",
      icon: <Cpu className="text-evoke-accent" size={32} />,
      gradient: "from-blue-500/10 to-evoke-accent/5"
    },
    {
      title: "2. Human-in-the-Loop Security",
      desc: "If a customer requires human empathy or makes a complex VIP request, the AI instantly notifies your team to step in. You never lose the human touch.",
      icon: <Users className="text-evoke-accent" size={32} />,
      gradient: "from-purple-500/10 to-blue-500/5"
    },
    {
      title: "3. Security Guardrails",
      desc: "Enterprise-grade encryption and compliance with U.S. data standards to keep your customer information secure.",
      icon: <Shield className="text-evoke-accent" size={32} />,
      gradient: "from-evoke-accent/10 to-cyan-500/5"
    }
  ];

  const container: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-none">
            The <span className="text-gradient">Evoke</span> Advantage
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Superior intelligence. Uncompromising security. The human touch where it matters most.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {advantages.map((adv, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative p-10 bg-white rounded-[3rem] border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500 h-full overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${adv.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-8 group-hover:scale-110 transition-transform duration-500">
                  {adv.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-evoke-accent transition-colors">
                  {adv.title}
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


const AnimatedGraph = ({
  pathD,
  areaD,
  lineGradId,
  areaGradId,
  gradFrom,
  gradTo,
  dotStart,
  dotEnd,
  labelStart,
  labelEnd,
  yAxisLabel,
  bgClass,
  delay = 0,
}: {
  pathD: string;
  areaD: string;
  lineGradId: string;
  areaGradId: string;
  gradFrom: string;
  gradTo: string;
  dotStart: { cx: number; cy: number };
  dotEnd: { cx: number; cy: number };
  labelStart: { x: number; y: number; rx: number; ry: number; text: string; textX: number; textY: number; color: string; width: number };
  labelEnd: { x: number; y: number; rx: number; ry: number; text: string; textX: number; textY: number; color: string; width: number };
  yAxisLabel: string;
  bgClass: string;
  delay?: number;
}) => {
  const W = 500, H = 260;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={`relative ${bgClass} rounded-3xl p-5 sm:p-8 sm:pl-12 border border-black/5 shadow-xl shadow-blue-100/40`}
    >
      {/* Desktop/Tablet view: vertical rotated label fixed on the left */}
      <div className="absolute left-2 sm:left-3 top-0 bottom-0 w-6 hidden sm:flex items-center justify-center pointer-events-none">
        <span className="-rotate-90 whitespace-nowrap text-[11px] font-black uppercase tracking-widest text-gray-400">
          {yAxisLabel}
        </span>
      </div>

      {/* Mobile view: horizontal label at top left so it never interrupts the graph */}
      <div className="block sm:hidden mb-2 text-[11px] font-black uppercase tracking-widest text-gray-400">
        {yAxisLabel}
      </div>

      <svg viewBox={`0 0 ${W} ${H + 40}`} className="w-full" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id={lineGradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={gradFrom} />
            <stop offset="100%" stopColor={gradTo} />
          </linearGradient>
          <linearGradient id={areaGradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={gradFrom} stopOpacity="0.12" />
            <stop offset="100%" stopColor={gradTo} stopOpacity="0.01" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[60, 110, 160, 210].map(y => (
          <line key={y} x1="40" y1={y} x2={W - 20} y2={y}
            stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
        ))}

        {/* Area fill — fades in after line draws */}
        <motion.path
          d={areaD}
          fill={`url(#${areaGradId})`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: delay + 1.4 }}
        />

        {/* Main curve — draws from left to right */}
        <motion.path
          d={pathD}
          fill="none"
          stroke={`url(#${lineGradId})`}
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 1 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.5, delay: delay + 0.3, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Start dot */}
        <motion.circle
          cx={dotStart.cx} cy={dotStart.cy} r="7" fill={labelStart.color}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: delay + 0.3 }}
          style={{ transformOrigin: `${dotStart.cx}px ${dotStart.cy}px` }}
        />
        <motion.rect
          x={labelStart.x} y={labelStart.y} width={labelStart.width} height="26" rx="6" fill={labelStart.color}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: delay + 0.5 }}
        />
        <motion.text
          x={labelStart.textX} y={labelStart.textY} textAnchor="middle" fill="white" fontSize="11" fontWeight="800"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: delay + 0.5 }}
        >{labelStart.text}</motion.text>

        {/* End dot */}
        <motion.circle
          cx={dotEnd.cx} cy={dotEnd.cy} r="7" fill={labelEnd.color}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: delay + 1.8 }}
          style={{ transformOrigin: `${dotEnd.cx}px ${dotEnd.cy}px` }}
        />
        <motion.rect
          x={labelEnd.x} y={labelEnd.y} width={labelEnd.width} height="26" rx="6" fill={labelEnd.color}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: delay + 2.0 }}
        />
        <motion.text
          x={labelEnd.textX} y={labelEnd.textY} textAnchor="middle" fill="white" fontSize="11" fontWeight="800"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: delay + 2.0 }}
        >{labelEnd.text}</motion.text>

        {/* X-axis label */}
        <text x={W / 2} y={H + 38} textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="700">Time</text>
      </svg>
    </motion.div>
  );
};

const CostGraph = () => {
  const W = 500, H = 260;
  const costPath = `M 40,30 C 140,30 180,220 ${W - 40},220`;
  const costArea = `M 40,30 C 140,30 180,220 ${W - 40},220 L ${W - 40},${H + 20} L 40,${H + 20} Z`;
  const roiPath = `M 40,220 C 150,220 300,30 ${W - 40},30`;
  const roiArea = `M 40,220 C 150,220 300,30 ${W - 40},30 L ${W - 40},${H + 20} L 40,${H + 20} Z`;

  return (
    <section id="results" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Badge & heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-evoke-accent/10 text-evoke-accent text-xs font-black uppercase tracking-widest mb-4 border border-evoke-accent/20">
            Proven Impact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5">
            Tailored for{' '}
            <span className="text-gradient">High-Growth Sectors.</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            The AEON Framework cuts operational costs dramatically while multiplying your output — measurable from week one.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left — Operational Cost Graph (downward) */}
          <div className="flex flex-col gap-5">
            <AnimatedGraph
              pathD={costPath}
              areaD={costArea}
              lineGradId="lineGrad"
              areaGradId="areaGrad"
              gradFrom="#3B82F6"
              gradTo="#10B981"
              dotStart={{ cx: 40, cy: 30 }}
              dotEnd={{ cx: W - 40, cy: 220 }}
              labelStart={{ x: 48, y: 10, rx: 6, ry: 6, text: "Manual Work", textX: 103, textY: 28, color: "#3B82F6", width: 110 }}
              labelEnd={{ x: W - 175, y: 226, rx: 6, ry: 6, text: "Automated Workflow", textX: W - 105, textY: 244, color: "#10B981", width: 140 }}
              yAxisLabel="Operational Cost"
              bgClass="bg-gradient-to-br from-slate-50 to-blue-50"
              delay={0}
            />
            <p className="text-center text-sm text-gray-500 font-medium px-2">
              <span className="font-black text-evoke-black">Operational Costs</span> drop sharply once the AEON AI Framework takes over repetitive workflows.
            </p>
          </div>

          {/* Right — ROI / Performance Graph (upward) */}
          <div className="flex flex-col gap-5">
            <AnimatedGraph
              pathD={roiPath}
              areaD={roiArea}
              lineGradId="roiLineGrad"
              areaGradId="roiAreaGrad"
              gradFrom="#6366F1"
              gradTo="#3B82F6"
              dotStart={{ cx: 40, cy: 220 }}
              dotEnd={{ cx: W - 40, cy: 30 }}
              labelStart={{ x: 48, y: 226, rx: 6, ry: 6, text: "Before Automation", textX: 122, textY: 244, color: "#6366F1", width: 148 }}
              labelEnd={{ x: W - 178, y: 10, rx: 6, ry: 6, text: "After Automation", textX: W - 108, textY: 28, color: "#3B82F6", width: 140 }}
              yAxisLabel="ROI / Performance"
              bgClass="bg-gradient-to-br from-blue-50 to-indigo-50"
              delay={0.15}
            />
            <p className="text-center text-sm text-gray-500 font-medium px-2">
              <span className="font-black text-evoke-black">ROI & Performance</span> climb steeply as AI handles leads, replies, and follow-ups 24/7.
            </p>
          </div>
        </div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "73%", label: "Cost Reduction", color: "from-blue-500 to-cyan-400" },
            { value: "3×", label: "Faster Response Time", color: "from-indigo-500 to-blue-400" },
            { value: "14 Days", label: "Average ROI Timeline", color: "from-evoke-accent to-blue-500" },
            { value: "50+", label: "Brands Already Scaling", color: "from-teal-500 to-green-400" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center gap-1 p-6 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-all"
            >
              <span className={`text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r ${s.color}`}>{s.value}</span>
              <span className="text-sm font-bold text-gray-500 text-center">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};


export default function AutomationsContent() {
  const webhookUrl = '/api/webhook';
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    setSending(true);
    setError(null);
    setSent(false);
    const form = new FormData(formElement);
    const data: Record<string, string> = {};
    form.forEach((value, key) => { data[key] = String(value); });

    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, target: 'automations' }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSent(true);
      formElement.reset();
    } catch (err: any) {
      setError(err?.message || 'Send failed');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Hero />
      <Sectors />
      <PainPoints />
      <ScrollytellingSection />
      <Timeline />
      <CostGraph />
      <CaseStudies />
      <SocialProof />
      <EvokeAdvantage />
      <FAQ />

      {/* Final CTA */}
      <section id="contact" className="section-padding bg-white text-evoke-black relative overflow-x-clip overflow-y-visible">
        {/* Background Visuals */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-evoke-accent rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -40, 0],
              y: [0, -50, 0],
              opacity: [0.03, 0.08, 0.03],
            }}
            transition={{ duration: 20, repeat: Infinity, delay: 5, ease: "easeInOut" }}
            className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-600 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              opacity: [0, 0.05, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, delay: 2 }}
            className="absolute top-[30%] left-[20%] w-[30%] h-[30%] bg-cyan-400 rounded-full blur-[100px]"
          />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.2]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Context & Headline */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[1.05] overflow-visible">
                Ready to
                <br />
                <span className="text-gradient inline-block pr-[0.18em] pb-[0.12em]">
                  Reclaim Your Time?
                </span>
              </h2>
              <p className="text-2xl text-gray-600 mb-12 max-w-lg leading-relaxed font-medium">
                Experience the future of intelligent business automation. Let's build your growth engine together.
              </p>

              <div className="space-y-6">
                {[
                  "Enterprise-Grade Security",
                  "14-Day Free Evaluation",
                  "24/7 Expert Support"
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-4 text-gray-600"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                      className="w-10 h-10 rounded-full bg-evoke-accent/5 flex items-center justify-center border border-evoke-accent/10 shrink-0"
                    >
                      <CheckCircle2 className="text-evoke-accent" size={18} />
                    </motion.div>
                    <span className="font-bold tracking-tight">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Lead Gen Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              animate={{ y: [-8, 8] }}
              transition={{
                y: { duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
                delay: 0.2
              }}
              className="bg-white/40 backdrop-blur-3xl border border-black/5 p-8 md:p-12 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-evoke-accent/5 to-transparent rounded-[3.5rem] transition-all group-hover:from-evoke-accent/10 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-10 tracking-tight text-evoke-black">Get Your Free AI Audit</h3>
                <motion.form
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: { staggerChildren: 0.15 }
                    }
                  }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      show: { opacity: 1, y: 0 }
                    }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    <input name="fullName" type="text" placeholder="Full Name" className="w-full bg-gray-50/50 border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-evoke-accent/50 focus:bg-white transition-all placeholder:text-gray-400 font-bold" />
                    <input name="email" type="email" placeholder="Email" className="w-full bg-gray-50/50 border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-evoke-accent/50 focus:bg-white transition-all placeholder:text-gray-400 font-bold" />
                  </motion.div>
                  <motion.div variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }} className="grid md:grid-cols-2 gap-6">
                    <input name="company" type="text" placeholder="Company Name " className="w-full bg-gray-50/50 border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-evoke-accent/50 focus:bg-white transition-all placeholder:text-gray-400 font-bold" />
                    <input name="phone" type="tel" placeholder="Phone Number" className="w-full bg-gray-50/50 border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-evoke-accent/50 focus:bg-white transition-all placeholder:text-gray-400 font-bold" />
                  </motion.div>
                  <motion.div variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }}>
                    <input name="location" type="text" placeholder="Location" className="w-full bg-gray-50/50 border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-evoke-accent/50 focus:bg-white transition-all placeholder:text-gray-400 font-bold" />
                  </motion.div>
                  <motion.div variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }}>
                    <textarea name="message" placeholder="How can we help your business?" className="w-full bg-gray-50/50 border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-evoke-accent/50 focus:bg-white transition-all placeholder:text-gray-400 font-bold h-32 resize-none" />
                  </motion.div>
                  <motion.div variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }}>
                    {sent && <p className="text-sm text-green-600 font-medium mb-2">Thanks — we'll contact you soon.</p>}
                    {error && <p className="text-sm text-red-600 font-medium mb-2">{error}</p>}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={sending}
                      aria-busy={sending}
                      className="automations-growth-btn group/btn"
                    >
                      {sending ? 'Sending...' : 'Start Your Growth'}
                      <ArrowRight size={22} className="group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </motion.div>
                </motion.form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
