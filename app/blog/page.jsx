"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { posts } from "./data/posts";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
    return () => clearTimeout(timer);
  }, [selectedPost]);

  const handleSelectPost = (post) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
    setTimeout(() => window.scrollTo(0, 0), 10);
  };

  const jumpTo = (sectionId) => {
    if (sectionId === "about") {
      window.location.href = "https://evokeaisolutions.com/about-us/";
    } else if (sectionId === "contact") {
      window.location.href = "https://evokeaisolutions.com/contact/";
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.location.href = `https://evokeaisolutions.com/#${sectionId}`;
    }
  };

  return (
    <div className="text-slate-800 min-h-screen flex flex-col justify-between bg-brand-light-bg font-sans">
      <Navigation theme={theme} setTheme={setTheme} jumpTo={jumpTo} />
      <div className="max-w-7xl mx-auto pt-24 sm:pt-28 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-10 flex-1 w-full">

        {selectedPost ? (
          <div className="animate-fadeIn max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-slate-200/60 pb-5">
              <button
                onClick={() => handleSelectPost(null)}
                className="flex items-center gap-3 px-6 py-3 bg-white hover:bg-slate-900 border-2 border-slate-900 hover:border-slate-900 text-slate-900 hover:text-white font-black rounded-full text-sm sm:text-base transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:-translate-x-1 group"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span> Back to Portfolio
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-900 font-bold uppercase tracking-wider">
                <button onClick={() => handleSelectPost(null)} className="hover:text-brand-accent transition-colors cursor-pointer">Blog</button>
                <span>➔</span>
                <span className="text-slate-900 font-extrabold">{selectedPost.category}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
              <div className="lg:col-span-7 pr-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] font-display mb-6">{selectedPost.title}</h1>

                <div className="flex items-center gap-3.5 mt-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-extrabold text-xs shadow-sm uppercase">
                    {selectedPost.author ? selectedPost.author.split(" ").map(n => n[0]).join("") : "AB"}
                  </div>
                  <div className="text-sm">
                    <p className="font-extrabold text-slate-900">{selectedPost.author}</p>
                    <p className="text-slate-900 font-semibold mt-0.5">Published {selectedPost.date} • {selectedPost.readTime || "5 min read"}</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 w-full">
                {selectedPost.image ? (
                  <div className="relative w-full aspect-[16/9] sm:aspect-[1.78] rounded-3xl overflow-hidden shadow-md border border-slate-200/40 bg-[#0B0F19]">
                    <Image src={selectedPost.image} alt={selectedPost.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain object-center" priority />
                  </div>
                ) : null}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-6">
              <div className="lg:col-span-4 lg:sticky lg:top-6 self-start">
                <div className="bg-slate-50 border border-slate-100/80 rounded-3xl p-7 shadow-sm">
                  <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-5 border-b border-slate-200/60 pb-3">Table of Contents</h3>
                  <ul className="space-y-4 text-sm font-semibold text-slate-800">
                    {selectedPost.toc.map((item, index) => (
                      <li key={index} className="leading-relaxed flex items-start gap-2"><span className="mt-0.5 text-slate-900">•</span><span className="text-left font-semibold text-slate-800">{item.label}</span></li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-8 flex flex-col gap-7">
                <div className="bg-slate-50 border border-slate-100/80 rounded-3xl p-7 shadow-sm">
                  <h4 className="text-base font-extrabold text-slate-900 mb-3 font-display">Quick Answer: {selectedPost.title}</h4>
                  <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-semibold">{selectedPost.quickAnswer || selectedPost.shortDescription}</p>
                </div>

                <div className="prose prose-slate max-w-none text-slate-900 text-base sm:text-[17px] leading-loose" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />

                <div className="bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-3xl p-7 sm:p-10 mt-6 shadow-md border border-slate-800">
                  <h4 className="text-xl sm:text-2xl font-bold font-display text-white mb-3">Ready to scale your business with custom AI solutions?</h4>
                  <p className="text-sm sm:text-base text-slate-300 mb-7 font-medium leading-relaxed">Schedule a diagnostic audit with our technical consultants to identify ready use cases and design a roadmap.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://evoke.ai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent hover:bg-blue-600 text-white font-black rounded-2xl text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer">Book 15-Min Strategy Session</a>
                    <button onClick={() => handleSelectPost(null)} className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-800/80 hover:bg-white border-2 border-slate-600 hover:border-white text-white hover:text-slate-950 font-black rounded-2xl text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer group"><span className="transition-transform duration-300 group-hover:-translate-x-1">←</span> Back to Portfolio</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div id="intro-feature-card" className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden mb-14 p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center transition-all duration-500 shadow-xl hover:shadow-2xl">
              <div className="w-full lg:w-[48%] relative rounded-2xl overflow-hidden aspect-[16/10] bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center group shadow-md">
                <Image src="/img%201.png" alt="AI Solutions Powering Modern Businesses" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
              </div>

              <div className="w-full lg:w-[52%] flex flex-col justify-center py-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-black text-slate-950 mt-1 mb-5 leading-[1.12] font-display tracking-tight drop-shadow-sm">Discover the AI Solutions Powering Modern Businesses</h2>
                <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 font-normal">From intelligent assistants and marketing automation to enterprise AI consulting and cybersecurity, explore the complete Evoke AI ecosystem built to automate, accelerate, and scale your business.</p>
                <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-slate-100">
                  <span className="px-3.5 py-1.5 bg-slate-100/80 border border-slate-200/60 text-slate-900 font-extrabold text-xs sm:text-sm rounded-xl shadow-xs">⚡ 400% Faster Response</span>
                  <span className="px-3.5 py-1.5 bg-slate-100/80 border border-slate-200/60 text-slate-900 font-extrabold text-xs sm:text-sm rounded-xl shadow-xs">🤖 99.9% AI Accuracy</span>
                  <span className="px-3.5 py-1.5 bg-slate-100/80 border border-slate-200/60 text-slate-900 font-extrabold text-xs sm:text-sm rounded-xl shadow-xs">🔒 Enterprise Governance</span>
                </div>
              </div>
            </div>

            <div id="posts-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 mt-4">
              {posts.map((post) => (
                <div key={post.id} onClick={() => handleSelectPost(post)} className="group flex flex-col h-full cursor-pointer">
                  {post.image ? (
                    <div className="relative w-full aspect-[16/9] sm:aspect-[1.78] rounded-3xl overflow-hidden shadow-sm border border-slate-200/60 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1.5 bg-[#0B0F19]">
                      <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.01]" priority />
                    </div>
                  ) : (
                    <div className={`relative w-full aspect-[1.45] rounded-3xl overflow-hidden bg-gradient-to-br ${post.gradient} p-7 flex items-center justify-between shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1.5`}>
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#fff,transparent)]"></div>
                      <div className="relative z-10 text-white font-extrabold text-xl sm:text-2xl md:text-[1.6rem] leading-snug font-display max-w-[58%] drop-shadow-sm pr-2">{post.cardHeading}</div>
                      {post.icon ? (
                        <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/20 backdrop-blur-md border border-white/40 shadow-xl flex items-center justify-center text-white text-3xl sm:text-4xl transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30 group-hover:rotate-6 shrink-0"><i className={post.icon}></i></div>
                      ) : (
                        <div className="relative z-10 text-7xl sm:text-8xl drop-shadow-md select-none transform transition-transform duration-300 group-hover:scale-110">{post.emoji}</div>
                      )}
                      <div className="relative z-10 absolute bottom-4 right-5 text-white/90 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm font-bold flex items-center gap-1 drop-shadow-md">Details ➔</div>
                    </div>
                  )}

                  <div className="mt-5 px-1 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">{post.category === "AI Agents" ? "Business" : post.category === "Services & Integrations" ? "Integration" : "Strategy"}</span>
                      <h3 className="text-xl font-extrabold text-slate-900 mt-2.5 mb-2.5 leading-snug font-display hover:text-brand-accent transition-colors">{post.title}</h3>
                      <p className="text-sm sm:text-[15px] text-slate-900 leading-relaxed font-medium mb-3">{post.shortDescription}</p>
                    </div>
                    <div className="text-xs text-slate-900 font-bold mt-auto pt-1">{post.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer theme={theme} />
    </div>
  );
}
