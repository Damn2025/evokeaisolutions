'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone } from 'lucide-react';

const evokeLogo = '/assets/evoke.webp';

const Footer = ({ theme }) => {
  const brandGradient = "bg-gradient-to-br from-[#0eaac8] via-[#27bce2] to-[#4DC6E3]";
  const textGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#0eaac8] to-[#1dc393]";

  const [showCookiePopup, setShowCookiePopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const consent = localStorage.getItem('evoke-cookie-consent');
      if (!consent) {
        setShowCookiePopup(true);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('evoke-cookie-consent', 'true');
    setShowCookiePopup(false);
  };

  return (
    <footer id="footer" className={`relative z-[300]  transition-colors duration-300 overflow-hidden  text-slate-300`}>

      <div className={`py-12 sm:py-16 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className="w-full px-6 sm:px-10 md:px-16 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10 items-start">

          <div className="space-y-6">
            <div className="flex items-center space-x-2.5">
              <div className="h-8 w-8 rounded-lg flex items-center justify-center">
                <img src={evokeLogo} alt="Evoke AI Logo" width="32" height="32" loading="lazy" decoding="async" className="w-full h-full object-contain" />
              </div>
              <span className={`text-lg font-extrabold tracking-tight uppercase ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Evoke AI</span>
            </div>
            <p className={`text-[13px] leading-relaxed max-w-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
              A next-generation enterprise AI framework setting the standard for intelligent growth and scalable, high-performance systems.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/company/ai-evoke/?viewAsMember=true" rel="noopener noreferrer" className="h-9 w-9 bg-[#00a2e8] hover:opacity-90 rounded-lg flex items-center justify-center text-white transition-opacity">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/ai_evoke?igsh=N2o4NXlvY2Q4emc1" rel="noopener noreferrer" className="h-9 w-9 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 hover:opacity-90 rounded-lg flex items-center justify-center text-white transition-opacity">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@ai_evoke" rel="noopener noreferrer" className="h-9 w-9 bg-[#FF0000] hover:opacity-90 rounded-lg flex items-center justify-center text-white transition-opacity">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/people/Evoke-AI/61583303491623/" rel="noopener noreferrer" className="h-9 w-9 bg-[#1877F2] hover:opacity-90 rounded-lg flex items-center justify-center text-white transition-opacity">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://x.com/ai_evoke" rel="noopener noreferrer" className="h-9 w-9 bg-[#1DA1F2] hover:opacity-90 rounded-lg flex items-center justify-center text-white transition-opacity">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.904 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className={`${theme === 'dark' ? 'text-white' : textGradient} text-xs font-black uppercase tracking-[0.2em]`}>
              Solutions
            </h4>
            <ul className="space-y-4">
              <li><a href="/automations" className={`text-sm font-bold ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-[#4DC6E3]'} transition-colors`}>AI Automations</a></li>
              <li><a href="/ai-assistants" className={`text-sm font-bold ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-[#4DC6E3]'} transition-colors`}>AI Assistants</a></li>
              <li><a href="/consultancy" className={`text-sm font-bold ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-[#4DC6E3]'} transition-colors`}>AI Consultancy</a></li>
            </ul>
          </div>

          {/*
          <div className="space-y-4">
            <h4 className={`${theme === 'dark' ? 'text-white' : textGradient} text-xs font-black uppercase tracking-[0.2em]`}>
              Agents
            </h4>
            <ul className="space-y-4">
              <li><a href="/aeon" className={`text-sm ${theme === 'dark' ? 'text-zinc-400 hover:text-yellow-400' : 'text-zinc-500 hover:text-yellow-400'} transition-colors font-bold uppercase tracking-wide`}>AEON</a></li>
              <li><a href="https://cyber-sec.evokeai.info/" rel="noopener noreferrer" className={`text-sm ${theme === 'dark' ? 'text-zinc-400 hover:text-red-500' : 'text-zinc-500 hover:text-red-500'} transition-colors font-bold uppercase tracking-wide`}>CIPHER</a></li>
              <li className="flex flex-col">
                <span className={`text-sm font-bold uppercase tracking-wide transition-colors cursor-default ${theme === 'dark' ? 'text-zinc-500 hover:text-green-500' : 'text-zinc-600 hover:text-green-500'}`}>NOVA</span>
                <span className={`text-[9px] font-black uppercase ${theme === 'dark' ? 'text-cyan-400/80' : 'text-[#4DC6E3]/60'}`}>Coming Soon</span>
              </li>
              <li className="flex flex-col">
                <span className={`text-sm font-bold uppercase tracking-wide transition-colors cursor-default ${theme === 'dark' ? 'text-zinc-500 hover:text-green-500' : 'text-zinc-600 hover:text-green-500'}`}>ORION</span>
                <span className={`text-[9px] font-black uppercase ${theme === 'dark' ? 'text-cyan-400/80' : 'text-[#4DC6E3]/60'}`}>Coming Soon</span>
              </li>
            </ul>
          </div>
          */}

          <div className="space-y-4">
            <h4 className={`${theme === 'dark' ? 'text-white' : textGradient} text-xs font-black uppercase tracking-[0.2em]`}>
              Pages
            </h4>
            <ul className="space-y-4">
              <li><a href="/about-us" className={`text-sm font-bold ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-[#4DC6E3]'} transition-colors`}>About</a></li>
              <li><a href="/features" className={`text-sm font-bold ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-[#4DC6E3]'} transition-colors`}>Features</a></li>
              <li><a href="/our-clients" className={`text-sm font-bold ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-[#4DC6E3]'} transition-colors`}>Clients</a></li>
              <li><a href="/blog" className={`text-sm font-bold ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-[#4DC6E3]'} transition-colors`}>Blogs</a></li>
              <li><a href="/contact" className={`text-sm font-bold ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-[#4DC6E3]'} transition-colors`}>Contact</a></li>
            </ul>
          </div>

          <div className="space-y-8 border-t border-black/5 dark:border-white/5 pt-10 lg:pt-0 lg:border-t-0 lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-6 gap-x-6">
              <div className="space-y-1.5 relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-r before:from-[#0eaac8] before:to-[#1dc393]">
                <p className={`text-sm font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-white' : 'text-black'}`}>India (Punjab)</p>
                <p className={`text-[13px] ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'} leading-relaxed italic`}>SCO No. 09-Ground Floor, Aero View Plaza,</p>
                <p className={`text-[13px] ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'} leading-relaxed italic`}>Airport Road, Dyalpura - 140603</p>
                <a href="tel:+917986175240" className="text-[13px] font-black text-[#4DC6E3] tracking-wider">7986175240</a>
              </div>

              <div className="space-y-1.5 relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-r before:from-[#0eaac8] before:to-[#1dc393]">
                <p className={`text-sm font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-white' : 'text-black'}`}>India (Gujarat)</p>
                <p className={`text-[13px] ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'} leading-relaxed italic`}>310 - Sampada, Navarangpura,</p>
                <p className={`text-[13px] ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'} leading-relaxed italic`}>Ahmedabad - 380009</p>
              </div>

              <div className="space-y-1.5 relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-r before:from-[#0eaac8] before:to-[#1dc393]">
                <p className={`text-sm font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-white' : 'text-black'}`}>United Kingdom</p>
                <p className={`text-[13px] ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'} leading-relaxed italic`}>20-22 Wenlock Road, Hoxton,</p>
                <p className={`text-[13px] ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'} leading-relaxed italic`}>London N1 7GU</p>
              </div>

              <div className="space-y-1.5 relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-r before:from-[#0eaac8] before:to-[#1dc393]">
                <p className={`text-sm font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-white' : 'text-black'}`}>United States</p>
                <p className={`text-[13px] ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'} leading-relaxed italic`}>616, Corporate Way Suite 2,</p>
                <p className={`text-[13px] ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'} leading-relaxed italic`}>6015 Valley Cottage, NY 10989</p>
              </div>

              <div className="space-y-1.5 relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-r before:from-[#0eaac8] before:to-[#1dc393]">
                <p className={`text-sm font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Canada</p>
                <p className={`text-[13px] ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'} leading-relaxed italic`}>8449, 116 A Street, Delta - V4C7N7,</p>
                <p className={`text-[13px] ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'} leading-relaxed italic`}>Greater Vancouver</p>
                <a href="tel:+17787989624" className="text-[13px] font-black text-[#4DC6E3] tracking-wider">+1 (778) 798-9624</a>
              </div>

              <div className="space-y-1.5 relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-r before:from-[#0eaac8] before:to-[#1dc393]">
                <p className={`text-sm font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Dubai (UAE)</p>
                <p className={`text-[13px] ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'} leading-relaxed italic`}>Suite No 2902 and 2903, The Prism Tower,</p>
                <p className={`text-[13px] ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'} leading-relaxed italic`}>Business Bay, Dubai</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            <div className="text-right space-y-4">
              <h4 className={textGradient + " text-xs font-black uppercase tracking-[0.2em]"}>
                Contact Us
              </h4>
              <div className="flex flex-col items-end gap-3">
                <a href="mailto:help@evokeaisolutions.com" className="group flex items-center gap-3 p-1.5 pr-4 rounded-xl border border-transparent hover:border-[#0eaac8]/30 transition-all duration-300">
                  <span className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-zinc-600'} transition-colors group-hover:text-[#0eaac8]`}>help@evokeaisolutions.com</span>
                  <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-white dark:bg-white/10 text-zinc-400 group-hover:bg-gradient-to-r group-hover:from-[#0eaac8] group-hover:to-[#1dc393] group-hover:text-white transition-all shadow-sm">
                    <Mail size={14} strokeWidth={2.5} />
                  </div>
                </a>

                <a href="tel:+917986175240" className="group flex items-center gap-3 p-1.5 pr-4 rounded-xl border border-transparent hover:border-[#1dc393]/30 transition-all duration-300">
                  <span className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-zinc-600'} transition-colors group-hover:text-[#1dc393]`}>+91 7986175240</span>
                  <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-white dark:bg-white/10 text-zinc-400 group-hover:bg-gradient-to-r group-hover:from-[#0eaac8] group-hover:to-[#1dc393] group-hover:text-white transition-all shadow-sm">
                    <Phone size={14} strokeWidth={2.5} />
                  </div>
                </a>
              </div>
            </div>

          </div>

        </div>

        <div className="mt-12 sm:mt-16 border-t border-black/5 dark:border-white/5 pt-10 text-center px-6 sm:px-10 md:px-16 lg:px-20">
          <p className="text-[10px] sm:text-[11px] font-bold text-zinc-500 uppercase tracking-[0.3em] leading-relaxed">
            &copy; 2026 <a href="https://evokeaisolutions.com/" rel="noopener noreferrer" className="text-xs font-bold text-zinc-500 hover:text-[#4DC6E3] transition-colors uppercase tracking-wider">
              EVOKE AI
            </a>. ALL RIGHTS RESERVED. <a href="https://evokeaisolutions.com/privacy-policy/" rel="noopener noreferrer" className="text-xs font-bold text-zinc-500 hover:text-[#4DC6E3] transition-colors uppercase tracking-wider">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>

      {showCookiePopup && (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-10 md:max-w-sm z-[600] animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out">
          <div className={`p-6 rounded-3xl border shadow-2xl backdrop-blur-2xl ${theme === 'dark' ? 'bg-black/80 border-white/10' : 'bg-white/80 border-black/10'}`}>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-2xl ${brandGradient} flex items-center justify-center text-white shadow-lg shadow-[#0eaac8]/30 shrink-0`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" /><path d="M8.5 8.5v.01" /><path d="M16 15.5v.01" /><path d="M12 12v.01" /><path d="M11 17v.01" /><path d="M7 14v.01" /></svg>
                </div>
                <div>
                  <h3 className={`text-sm font-black uppercase tracking-widest ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Cookies</h3>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Privacy Preferences</p>
                </div>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                We use cookies to optimize site functionality and give you the best possible experience on our AI platform.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={acceptCookies}
                  className={`w-full py-3 px-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] text-white ${brandGradient} hover:opacity-90 transition-all active:scale-[0.98] shadow-lg shadow-[#0eaac8]/20`}
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
