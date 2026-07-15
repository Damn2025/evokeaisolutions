"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronRight,
  X,
  MailOpen
} from "lucide-react";

export default function AutomationPlatform() {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our AI integration architects are generating your blueprint assessment and will email you shortly.");
    setIsModalOpen(false);
  };

  return (
    <>
      <section id="capabilities" className="min-h-screen flex flex-col justify-center py-24 bg-white border-y border-slate-300 font-sans shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">
              Automate Every Business Process
            </h2>
            <p className="text-lg text-black font-medium">
              Stop spending time on repetitive work. Let AI handle it.
              Our automation platform streamlines your operations by connecting systems, automating workflows, and eliminating manual tasks so your team can focus on high-value work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-center bg-slate-50 rounded-3xl p-8 md:p-16 border border-slate-200 shadow-md">
            <div className="lg:col-span-5 space-y-1">
              <div
                className="border-b border-slate-200 py-6 cursor-pointer group"
                onClick={() => setActiveTab(0)}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-2xl transition-all duration-300 ${activeTab === 0
                      ? "text-black font-bold"
                      : "text-black font-semibold"
                      }`}
                  >
                    Lead Distribution & Assignment
                  </h3>
                  <span
                    className={`transition-colors ${activeTab === 0
                      ? "text-emerald-500"
                      : "text-black/70 group-hover:text-emerald-500"
                      }`}
                  >
                    <ChevronRight
                      className={`w-5 h-5 transition-transform duration-300 ${activeTab === 0 ? "rotate-90" : ""}`}
                    />
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeTab === 0 ? "max-h-48" : "max-h-0"
                    }`}
                >
                  <p className="text-base text-black font-medium mt-4 leading-relaxed">
                    Automatically capture and score inbound leads from any
                    channel. Instantly assign them to appropriate sales reps
                    based on geo, capacity, or performance, and trigger immediate
                    Slack or CRM follow-up steps.
                  </p>
                </div>
              </div>

              <div
                className="border-b border-slate-200 py-6 cursor-pointer group"
                onClick={() => setActiveTab(1)}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-2xl transition-all duration-300 ${activeTab === 1
                      ? "text-black font-bold"
                      : "text-black font-semibold"
                      }`}
                  >
                    CRM Updates & Data Entry
                  </h3>
                  <span
                    className={`transition-colors ${activeTab === 1
                      ? "text-emerald-500"
                      : "text-black/70 group-hover:text-emerald-500"
                      }`}
                  >
                    <ChevronRight
                      className={`w-5 h-5 transition-transform duration-300 ${activeTab === 1 ? "rotate-90" : ""}`}
                    />
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeTab === 1 ? "max-h-48" : "max-h-0"
                    }`}
                >
                  <p className="text-base text-black font-medium mt-4 leading-relaxed">
                    Eliminate transcription tasks entirely. Let AI scan
                    transcripts, customer interactions, emails, and WhatsApp
                    threads to extract and log key properties directly inside
                    Hubspot, Salesforce, or Airtable.
                  </p>
                </div>
              </div>

              <div
                className="border-b border-slate-200 py-6 cursor-pointer group"
                onClick={() => setActiveTab(2)}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-2xl transition-all duration-300 ${activeTab === 2
                      ? "text-black font-bold"
                      : "text-black font-semibold"
                      }`}
                  >
                    Email & WhatsApp Follow-ups
                  </h3>
                  <span
                    className={`transition-colors ${activeTab === 2
                      ? "text-emerald-500"
                      : "text-black/70 group-hover:text-emerald-500"
                      }`}
                  >
                    <ChevronRight
                      className={`w-5 h-5 transition-transform duration-300 ${activeTab === 2 ? "rotate-90" : ""}`}
                    />
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeTab === 2 ? "max-h-48" : "max-h-0"
                    }`}
                >
                  <p className="text-base text-black font-medium mt-4 leading-relaxed">
                    Deploy dynamic, high-converting drip follow-ups. AetherFlow
                    responds to incoming customer objections and answers
                    questions naturally over WhatsApp or Email using context
                    custom-fit to your product.
                  </p>
                </div>
              </div>

              <div
                className="border-b border-slate-200 py-6 cursor-pointer group"
                onClick={() => setActiveTab(3)}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-2xl transition-all duration-300 ${activeTab === 3
                      ? "text-black font-bold"
                      : "text-black font-semibold"
                      }`}
                  >
                    Internal Approvals & Notifications
                  </h3>
                  <span
                    className={`transition-colors ${activeTab === 3
                      ? "text-emerald-500"
                      : "text-black/70 group-hover:text-emerald-500"
                      }`}
                  >
                    <ChevronRight
                      className={`w-5 h-5 transition-transform duration-300 ${activeTab === 3 ? "rotate-90" : ""}`}
                    />
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeTab === 3 ? "max-h-48" : "max-h-0"
                    }`}
                >
                  <p className="text-base text-black font-medium mt-4 leading-relaxed">
                    Connect multi-department actions together. Request management
                    signatures, send instant alert summaries on Teams or Slack
                    when sensitive thresholds are met, and auto-release pending
                    actions effortlessly.
                  </p>
                </div>
              </div>

              <div
                className="border-b border-slate-200 py-6 cursor-pointer group"
                onClick={() => setActiveTab(4)}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-2xl transition-all duration-300 ${activeTab === 4
                      ? "text-black font-bold"
                      : "text-black font-semibold"
                      }`}
                  >
                    Document Processing & Reporting
                  </h3>
                  <span
                    className={`transition-colors ${activeTab === 4
                      ? "text-emerald-500"
                      : "text-black/70 group-hover:text-emerald-500"
                      }`}
                  >
                    <ChevronRight
                      className={`w-5 h-5 transition-transform duration-300 ${activeTab === 4 ? "rotate-90" : ""}`}
                    />
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeTab === 4 ? "max-h-48" : "max-h-0"
                    }`}
                >
                  <p className="text-base text-black font-medium mt-4 leading-relaxed">
                    Automatically extract line items, key numbers, and dates from
                    PDF invoices, contracts, or tax reports. Feed raw parsed
                    outputs to financial dashboards or draft executive memos
                    inside Google Docs.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex justify-center items-center">
              <div className="relative w-full max-w-[580px] aspect-[4/3] rounded-3xl bg-gradient-to-tr from-[#e2faf1] via-[#d4f8eb] to-[#eafefa] p-0 flex flex-col justify-between overflow-hidden shadow-2xl shadow-emerald-100 border border-emerald-100 shadow-[0_0_40px_rgba(34,197,94,0.15)]">

                <div className="w-full h-full flex flex-col justify-between relative z-10">
                  {activeTab === 0 && (
                    <div className="w-full h-full animate-in fade-in zoom-in duration-300">
                      <Image
                        src="/img 1.png"
                        alt="Lead Distribution & Assignment"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                        priority
                      />
                    </div>
                  )}

                  {activeTab === 1 && (
                    <div className="w-full h-full animate-in fade-in zoom-in duration-300">
                      <Image
                        src="/img 2.png"
                        alt="CRM Updates & Data Entry"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                        priority
                      />
                    </div>
                  )}

                  {activeTab === 2 && (
                    <div className="w-full h-full animate-in fade-in zoom-in duration-300">
                      <Image
                        src="/img 3.png"
                        alt="Email & WhatsApp Follow-ups"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                        priority
                      />
                    </div>
                  )}

                  {activeTab === 3 && (
                    <div className="w-full h-full animate-in fade-in zoom-in duration-300">
                      <Image
                        src="/img 4.png"
                        alt="Internal Approvals & Notifications"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                        priority
                      />
                    </div>
                  )}

                  {activeTab === 4 && (
                    <div className="w-full h-full animate-in fade-in zoom-in duration-300">
                      <Image
                        src="/img 5.png"
                        alt="AI Document Parser"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                        priority
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm font-sans">
          <div className="bg-white text-slate-900 max-w-md w-full mx-4 rounded-3xl p-8 shadow-2xl relative border border-slate-100">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600">
              <X className="w-5 h-5" />
            </button>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <MailOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Claim Your Automation Assessment</h3>
              <p className="text-sm text-slate-500">Get a personalized automation blueprint from our workflow engineers. See exactly where your bottlenecks are.</p>
              <form onSubmit={handleFormSubmit} className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Your Name</label>
                  <input type="text" required placeholder="John Doe" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Business Email</label>
                  <input type="email" required placeholder="john@company.com" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm" />
                </div>
                <button type="submit" className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-md">Submit & Request Assessment</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
