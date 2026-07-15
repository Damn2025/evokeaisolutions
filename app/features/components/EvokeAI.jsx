

import React, { useState, useEffect } from "react";
import { ShieldCheck, Repeat, Route, Cpu, Check, Sparkles, Eye, GitMerge, TrendingUp, X, ArrowRight } from "lucide-react";

export default function EvokeAI() {
  const [focusedFeature, setFocusedFeature] = useState("lead-qual");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFocusedFeature("lead-qual"), 800);
    return () => clearTimeout(timer);
  }, []);

  const focusElement = (id) => setFocusedFeature(id);
  const focusResults = () => setFocusedFeature("results");
  const closeSetupModal = () => setIsModalOpen(false);

  const handleDemoSubmission = (event) => {
    event.preventDefault();
    const target = event.target;
    const business = target.elements?.businessName?.value || "";
    closeSetupModal();
    alert(`Evoke Pipeline Configured for ${business}! Check your email.`);
  };

  return (
    <section id="features" className="bg-slate-100 text-slate-950 min-h-screen overflow-x-hidden selection:bg-indigo-500 selection:text-white font-sans border-t border-slate-300 flex flex-col justify-between pt-[120px] lg:pt-[150px] pb-16 lg:pb-24 px-4 sm:px-6 md:px-8 bg-canvas-gradient relative">
      <div className="absolute inset-0 bg-slate-100/40 backdrop-blur-[1px] z-0 pointer-events-none"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between gap-8 lg:gap-14 my-auto">
        <div className="text-center max-w-4xl mx-auto space-y-3 lg:space-y-4 shrink-0 mt-2 lg:mt-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-display leading-[1.15]">Turn Every Conversation Into Revenue</h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">Capture, qualify, and nurture leads automatically. Evoke AI identifies high-intent prospects and moves them through your sales pipeline instantly.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center justify-center my-auto w-full max-w-7xl mx-auto py-2">
          <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-5 justify-center z-10 order-2 lg:order-1">
            <div onClick={() => focusElement('lead-qual')} className="interactive-card text-left bg-white border border-rose-100 hover:border-rose-400/60 rounded-3xl p-5 lg:p-6 card-shadow fan-left-1 relative overflow-hidden group cursor-pointer select-none min-h-[140px] lg:min-h-[155px] xl:min-h-[160px] flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-36 h-36 bg-rose-50/60 rounded-bl-full -z-10 transition-transform duration-300 group-hover:scale-110"></div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                  <ShieldCheck className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-extrabold text-slate-900 text-base lg:text-lg xl:text-[19px] tracking-tight">Lead Qualification & Scoring</h3>
                  <p className="text-xs lg:text-sm xl:text-[14.5px] text-slate-600 leading-relaxed font-medium">Identify high-intent prospects using real-time behavioral and conversational signals.</p>
                </div>
              </div>
            </div>
            <div onClick={() => focusElement('auto-follow')} className="interactive-card text-left bg-white border border-rose-100 hover:border-rose-400/60 rounded-3xl p-5 lg:p-6 card-shadow fan-left-2 relative overflow-hidden group cursor-pointer select-none min-h-[140px] lg:min-h-[155px] xl:min-h-[160px] flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-36 h-36 bg-rose-50/60 rounded-bl-full -z-10 transition-transform duration-300 group-hover:scale-110"></div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                  <Repeat className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-extrabold text-slate-900 text-base lg:text-lg xl:text-[19px] tracking-tight">Automated Follow-up Sequences</h3>
                  <p className="text-xs lg:text-sm xl:text-[14.5px] text-slate-600 leading-relaxed font-medium">Never miss an opportunity with instant automated conversation branches across channels.</p>
                </div>
              </div>
            </div>
            <div onClick={() => focusElement('journey')} className="interactive-card text-left bg-white border border-rose-100 hover:border-rose-400/60 rounded-3xl p-5 lg:p-6 card-shadow fan-left-3 relative overflow-hidden group cursor-pointer select-none min-h-[140px] lg:min-h-[155px] xl:min-h-[160px] flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-36 h-36 bg-rose-50/60 rounded-bl-full -z-10 transition-transform duration-300 group-hover:scale-110"></div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                  <Route className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-extrabold text-slate-900 text-base lg:text-lg xl:text-[19px] tracking-tight">Customer Journey Analytics</h3>
                  <p className="text-xs lg:text-sm xl:text-[14.5px] text-slate-600 leading-relaxed font-medium">Full visibility into conversational touchpoints mapping straight into your CRM platform.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center z-20 order-1 lg:order-2 my-4 lg:my-0">
            <div className="relative mx-auto border-slate-950 bg-slate-900 border-[10px] sm:border-[12px] rounded-[3rem] h-[540px] sm:h-[580px] lg:h-[600px] xl:h-[630px] w-[280px] sm:w-[300px] lg:w-[310px] xl:w-[330px] phone-shadow overflow-hidden ring-4 ring-slate-800/10 transition-all duration-300 flex flex-col">
              <div className="absolute top-2 sm:top-2.5 left-1/2 -translate-x-1/2 h-4 sm:h-4.5 w-24 sm:w-28 bg-black rounded-full z-50 flex items-center justify-between px-3">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                <div className="w-2 h-2 rounded-full border border-zinc-900 bg-zinc-800"></div>
              </div>
              <div className="bg-white h-full flex flex-col justify-between pt-8 sm:pt-9 pb-4 sm:pb-5 px-4 sm:px-5 overflow-hidden select-none relative flex-1">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-2 sm:mb-3 text-xs sm:text-[13px] text-slate-400 font-bold tracking-tight shrink-0">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Cpu className="w-4 h-4 text-indigo-600" />
                    <span>Evoke Core</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-600">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span>ONLINE</span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-5 text-center px-1 my-auto">
                  <div className="space-y-1.5 mb-1">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto border border-indigo-100 shadow-sm relative overflow-hidden group">
                      <div className="absolute inset-0 bg-indigo-500/10 animate-pulse"></div>
                      <TrendingUp className={`w-6 h-6 sm:w-7 sm:h-7 text-indigo-600 transition-transform duration-300 ${focusedFeature === 'results' ? 'scale-110' : ''}`} />
                    </div>
                    <h4 className="text-xs sm:text-sm font-extrabold uppercase text-slate-900 tracking-wider">Live Performance</h4>
                    <p className="text-xs sm:text-[13px] text-slate-500 font-medium leading-tight">Converting conversations to revenue.</p>
                  </div>
                  <div className="w-full space-y-3 sm:space-y-3.5">
                    <div className={`p-3.5 sm:p-4 bg-slate-50 border rounded-2xl transition-all duration-300 w-full text-left flex items-center justify-between ${focusedFeature !== 'results' && focusedFeature !== 'pipeline' ? 'border-indigo-400 bg-indigo-50 scale-[1.02] shadow-md' : 'border-slate-200'}`}>
                      <div>
                        <p className={`text-[11px] sm:text-xs font-bold uppercase tracking-wider ${focusedFeature !== 'results' && focusedFeature !== 'pipeline' ? 'text-indigo-600' : 'text-slate-500'}`}>
                          Qualified Leads
                        </p>
                        <p className="text-[11px] sm:text-xs text-slate-400 font-semibold mt-0.5">Real-time pipeline</p>
                      </div>
                      <span className={`text-2xl sm:text-3xl font-black ${focusedFeature !== 'results' && focusedFeature !== 'pipeline' ? 'text-indigo-700' : 'text-slate-800'}`}>
                        1,842
                      </span>
                    </div>
                    <div className={`p-3.5 sm:p-4 bg-emerald-50 border rounded-2xl transition-all duration-300 w-full text-left flex items-center justify-between ${focusedFeature === 'results' || focusedFeature === 'pipeline' ? 'border-emerald-400 scale-[1.02] shadow-lg bg-emerald-500' : 'border-emerald-100'}`}>
                      <div>
                        <p className={`text-[11px] sm:text-xs font-bold uppercase tracking-wider ${focusedFeature === 'results' || focusedFeature === 'pipeline' ? 'text-white' : 'text-emerald-700'}`}>
                          Conversion Rate
                        </p>
                        <p className={`text-[11px] sm:text-xs font-semibold mt-0.5 ${focusedFeature === 'results' || focusedFeature === 'pipeline' ? 'text-emerald-100' : 'text-emerald-500'}`}>
                          Industry Leading
                        </p>
                      </div>
                      <span className={`text-2xl sm:text-3xl font-black ${focusedFeature === 'results' || focusedFeature === 'pipeline' ? 'text-white' : 'text-emerald-700'}`}>
                        14.8%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-5 justify-center z-10 order-3">
            <div onClick={() => focusElement('lead-tracking')} className="interactive-card text-left bg-white border border-emerald-100 hover:border-emerald-400/60 rounded-3xl p-5 lg:p-6 card-shadow fan-right-1 relative overflow-hidden group cursor-pointer select-none min-h-[140px] lg:min-h-[155px] xl:min-h-[160px] flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-50/60 rounded-bl-full -z-10 transition-transform duration-300 group-hover:scale-110"></div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                  <Eye className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-extrabold text-slate-900 text-base lg:text-lg xl:text-[19px] tracking-tight">Real-Time Lead Tracking</h3>
                  <p className="text-xs lg:text-sm xl:text-[14.5px] text-slate-600 leading-relaxed font-medium">Watch leads live as they qualify. Track pipeline position and communication logs instantly.</p>
                </div>
              </div>
            </div>
            <div onClick={() => focusElement('pipeline')} className="interactive-card text-left bg-white border border-emerald-100 hover:border-emerald-400/60 rounded-3xl p-5 lg:p-6 card-shadow fan-right-2 relative overflow-hidden group cursor-pointer select-none min-h-[140px] lg:min-h-[155px] xl:min-h-[160px] flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-50/60 rounded-bl-full -z-10 transition-transform duration-300 group-hover:scale-110"></div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                  <GitMerge className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-extrabold text-slate-900 text-base lg:text-lg xl:text-[19px] tracking-tight">Sales Pipeline Management</h3>
                  <p className="text-xs lg:text-sm xl:text-[14.5px] text-slate-600 leading-relaxed font-medium">Segment conversations based on real potential. Handover high-intent buyers directly to salespeople.</p>
                </div>
              </div>
            </div>
            <div onClick={focusResults} className="interactive-card text-left bg-white border border-emerald-100 hover:border-emerald-400/60 rounded-3xl p-5 lg:p-6 card-shadow fan-right-3 relative overflow-hidden group cursor-pointer select-none min-h-[140px] lg:min-h-[155px] xl:min-h-[160px] flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-50/60 rounded-bl-full -z-10 transition-transform duration-300 group-hover:scale-110"></div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                  <TrendingUp className="w-6 h-6 lg:w-7 lg:h-7" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-extrabold text-slate-900 text-base lg:text-lg xl:text-[19px] tracking-tight">Expected Revenue Uplift</h3>
                  <p className="text-xs lg:text-sm xl:text-[14.5px] text-slate-600 leading-relaxed font-medium">Fast responses, higher conversion rates, better lead quality, and increased sales efficiency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-[32px] p-6 sm:p-8 md:p-10 max-w-lg w-full border border-slate-100 shadow-2xl relative">
            <button onClick={closeSetupModal} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors">
              <X className="w-6 h-6" />
            </button>
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-150 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">Configure Evoke AI System</h3>
              <p className="text-sm text-slate-500 mt-1.5">Get custom-built conversational systems scaled specifically for your sales pipeline.</p>
            </div>

            <form onSubmit={handleDemoSubmission} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Business Name</label>
                <input required name="businessName" type="text" placeholder="e.g., Sterling Enterprises" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Work Email Address</label>
                <input required type="email" placeholder="you@sterling.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Primary Focus Channel</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
                  <option>SMS & Web Chat Bot Integration</option>
                  <option>Omnichannel Voice Agents</option>
                  <option>Cross-App Workflow Automation</option>
                </select>
              </div>
              <button type="submit" className="w-full py-4 bg-slate-950 hover:bg-slate-800 text-white rounded-xl text-sm font-bold transition-all shadow-md">Activate Live Sales Pilot Audit</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
