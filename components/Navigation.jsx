'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Workflow, Bot, ShieldCheck } from 'lucide-react';
import { MILESTONES } from '../lib/constants';

const evokeLogo = '/assets/evoke.webp';

const Navigation = ({ theme, jumpTo }) => {
  const router = useRouter();
  const pathname = usePathname() || '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAgentsDropdownOpen, setIsAgentsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isComingSoonModalOpen, setIsComingSoonModalOpen] = useState(false);
  const [comingSoonAgent, setComingSoonAgent] = useState('ORION');
  const agentsDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const isDark = theme === 'dark';

  const agentLinks = {
    'AEON': '/aeon',
    'NOVA': null,
    'CIPHER': 'https://cyber-sec.evokeai.info/',
    'ORION': null
  };

  const openComingSoonModal = (agentName) => {
    setIsAgentsDropdownOpen(false);
    setComingSoonAgent(agentName);
    setIsComingSoonModalOpen(true);
  };

  const agentColors = {
    'NOVA': '#12B9A7',
    'AEON': '#FED335',
    'ORION': '#7EC650',
    'CIPHER': '#dc2626'
  };
  const activeAgentColor = agentColors[comingSoonAgent] || '#7EC650';

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (agentsDropdownRef.current && !agentsDropdownRef.current.contains(event.target)) {
        setIsAgentsDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };

    if (isAgentsDropdownOpen || isServicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAgentsDropdownOpen, isServicesDropdownOpen]);

  const routeByNavId = {
    about: '/about-us',
    features: '/features',
    automation: '/features', // legacy milestone id
    partners: '/our-clients',
    blogs: '/blog',
    contact: '/contact-us',
    'ai-assistants': '/ai-assistants',
    consultancy: '/consultancy',
  };

  const isActivePath = (path) => {
    if (path === '/') return pathname === '/';
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const isServicesActive =
    isActivePath('/automations') ||
    isActivePath('/ai-assistants') ||
    isActivePath('/consultancy');

  const desktopNavClass = (active) =>
    `nav-item-shiny text-sm font-bold tracking-[0.15em] uppercase relative overflow-hidden px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 group ${
      active
        ? isDark
          ? 'text-[#27bce2] bg-white/10'
          : 'text-[#028fbe] bg-[#028fbe]/10'
        : isDark
          ? 'text-white'
          : 'text-black'
    }`;

  const mobileNavClass = (active) =>
    `w-full text-left px-4 py-3 rounded-lg font-bold text-sm tracking-[0.15em] uppercase transition-all duration-300 ${
      active
        ? isDark
          ? 'text-[#27bce2] bg-white/10'
          : 'text-[#028fbe] bg-[#028fbe]/10'
        : isDark
          ? 'text-white hover:bg-white/10 active:bg-white/20'
          : 'text-black hover:bg-black/10 active:bg-black/20'
    }`;

  const handleNavClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    setIsAgentsDropdownOpen(false);
    setIsServicesDropdownOpen(false);

    const route = routeByNavId[sectionId];
    if (route) {
      router.push(route);
      return;
    }

    if (typeof jumpTo === 'function') {
      jumpTo(sectionId);
    }
  };

  const handleHomeClick = () => {
    setIsMobileMenuOpen(false);
    setIsAgentsDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    router.push('/');
  };

  const handleAboutClick = () => {
    setIsMobileMenuOpen(false);
    router.push('/about-us');
  };

  const handleFeaturesClick = () => {
    setIsMobileMenuOpen(false);
    setIsAgentsDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    router.push('/features');
  };

  const handleServiceClick = (route) => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    router.push(route);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[200] px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center backdrop-blur-xl border-b transition-all duration-500 ${theme === 'dark' ? 'bg-black/40 border-white/5' : 'bg-white/40 border-black/5'}`}>
        <button
          type="button"
          onClick={handleHomeClick}
          className="flex items-center gap-2"
        >
          <div className="flex items-center group cursor-pointer">
            <img
              src={evokeLogo}
              alt="Evoke AI Logo"
              width="64"
              height="64"
              loading="eager"
              decoding="async"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain transition-transform group-hover:scale-110 translate-y-1"
            />
            <div className="flex flex-col text-left">
              <span className={`font-black text-base sm:text-lg tracking-tighter uppercase ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Evoke AI</span>
              <span className={`text-[9px] sm:text-[10px] md:text-xs font-medium tracking-wide ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                Enterprise AI Platform
              </span>
            </div>
          </div>
        </button>

        <div className="hidden lg:flex items-center gap-10">

          <button
            type="button"
            onClick={handleHomeClick}
            className={desktopNavClass(isActivePath('/'))}
            aria-current={isActivePath('/') ? 'page' : undefined}
          >
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${theme === 'dark' ? 'via-white/40' : 'via-black/20'} to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-lg`}></div>
            <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}></div>
            <span className="relative z-10">Home</span>
            {isActivePath('/') && (
              <span className="absolute left-3 right-3 bottom-1 h-0.5 rounded-full bg-gradient-to-r from-[#0eaac8] to-[#1dc393]" />
            )}
          </button>

          <button
            type="button"
            onClick={handleAboutClick}
            className={desktopNavClass(isActivePath('/about-us'))}
            aria-current={isActivePath('/about-us') ? 'page' : undefined}
          >
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${theme === 'dark' ? 'via-white/40' : 'via-black/20'} to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-lg`}></div>
            <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}></div>
            <span className="relative z-10">About</span>
            {isActivePath('/about-us') && (
              <span className="absolute left-3 right-3 bottom-1 h-0.5 rounded-full bg-gradient-to-r from-[#0eaac8] to-[#1dc393]" />
            )}
          </button>

          <div className="relative" ref={servicesDropdownRef}>
            <button
              type="button"
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className={`${desktopNavClass(isServicesActive)} flex items-center gap-2`}
              aria-current={isServicesActive ? 'page' : undefined}
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${theme === 'dark' ? 'via-white/40' : 'via-black/20'} to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-lg`}></div>
              <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}></div>
              <span className="relative z-10">Services</span>
              <ChevronDown
                size={14}
                className={`relative z-10 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
              />
              {isServicesActive && (
                <span className="absolute left-3 right-3 bottom-1 h-0.5 rounded-full bg-gradient-to-r from-[#0eaac8] to-[#1dc393]" />
              )}
            </button>

            {isServicesDropdownOpen && (
              <div className={`absolute top-full left-0 mt-2 w-56 rounded-xl shadow-2xl overflow-hidden z-[250] ${theme === 'dark' ? 'bg-black/95 border border-white/10' : 'bg-white/95 border border-black/10'} backdrop-blur-xl`}>
                <button
                  type="button"
                  onClick={() => handleServiceClick('/automations')}
                  className={`block w-full text-left px-4 py-3 transition-all duration-300 hover:scale-[1.02] ${theme === 'dark' ? 'hover:bg-white/10 text-white' : 'hover:bg-black/10 text-black'}`}
                >
                  <div className="flex items-center gap-2 font-black text-sm uppercase tracking-wide">
                    <div className="p-1 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Workflow size={16} className="text-blue-400" />
                    </div>
                    AI Automation
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => handleServiceClick('/ai-assistants')}
                  className={`block w-full text-left px-4 py-3 transition-all duration-300 hover:scale-[1.02] ${theme === 'dark' ? 'hover:bg-white/10 text-white' : 'hover:bg-black/10 text-black'}`}
                >
                  <div className="flex items-center gap-2 font-black text-sm uppercase tracking-wide">
                    <div className="p-1 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Bot size={16} className="text-purple-400" />
                    </div>
                    AI Assistant
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => handleServiceClick('/consultancy')}
                  className={`block w-full text-left px-4 py-3 transition-all duration-300 hover:scale-[1.02] ${theme === 'dark' ? 'hover:bg-white/10 text-white' : 'hover:bg-black/10 text-black'}`}
                >
                  <div className="flex items-center gap-2 font-black text-sm uppercase tracking-wide">
                    <div className="p-1 rounded-full bg-green-500/20 flex items-center justify-center">
                      <ShieldCheck size={16} className="text-green-400" />
                    </div>
                    AI Consultancy
                  </div>
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={handleFeaturesClick}
            className={desktopNavClass(isActivePath('/features'))}
            aria-current={isActivePath('/features') ? 'page' : undefined}
          >
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${theme === 'dark' ? 'via-white/40' : 'via-black/20'} to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-lg`}></div>
            <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}></div>
            <span className="relative z-10">Features</span>
            {isActivePath('/features') && (
              <span className="absolute left-3 right-3 bottom-1 h-0.5 rounded-full bg-gradient-to-r from-[#0eaac8] to-[#1dc393]" />
            )}
          </button>

          {MILESTONES.map((m) => {
            // Agents dropdown commented out — hide from nav
            // Features is a dedicated button above — skip milestone duplicate
            if (m.id === 'about' || m.id === 'faq' || m.id === 'social' || m.id === 'agents' || m.id === 'features' || m.id === 'automation') {
              return null;
            }

            if (m.id === 'agents') {
              return (
                <div key={m.id} className="relative" ref={agentsDropdownRef}>
                  <button
                    onClick={() => setIsAgentsDropdownOpen(!isAgentsDropdownOpen)}
                    className={`nav-item-shiny text-sm font-bold tracking-[0.15em] uppercase relative overflow-hidden px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 group flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${theme === 'dark' ? 'via-white/40' : 'via-black/20'} to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-lg`}></div>
                    <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}></div>
                    <span className="relative z-10">
                      {m.label}
                    </span>
                    <ChevronDown
                      size={14}
                      className={`relative z-10 transition-transform duration-300 ${isAgentsDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isAgentsDropdownOpen && (
                    <div className={`absolute top-full left-0 mt-2 w-56 rounded-xl shadow-2xl overflow-hidden z-[250] ${theme === 'dark' ? 'bg-black/95 border border-white/10' : 'bg-white/95 border border-black/10'} backdrop-blur-xl`}>
                      {Object.entries(agentLinks).map(([agentName, link]) => (
                        link ? (
                          <a
                            key={agentName}
                            href={link}
                            rel="noopener noreferrer"
                            className={`block px-4 py-3 transition-all duration-300 hover:scale-[1.02] ${theme === 'dark'
                                ? 'hover:bg-white/10 text-white'
                                : 'hover:bg-black/10 text-black'
                              }`}
                          >
                            <div className="font-bold text-sm">{agentName}</div>
                            <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                              {agentName === 'AEON' && 'ChatBot Builder'}
                              {agentName === 'NOVA' && 'Email Marketer'}
                              {agentName === 'CIPHER' && 'Cyber Security'}
                            </div>
                          </a>
                        ) : (
                          <button
                            key={agentName}
                            onClick={() => {
                              openComingSoonModal(agentName);
                            }}
                            className={`block w-full text-left px-4 py-3 transition-all duration-300 hover:scale-[1.02] ${theme === 'dark'
                                ? 'hover:bg-white/10 text-white'
                                : 'hover:bg-black/10 text-black'
                              }`}
                          >
                            <div className="font-bold text-sm">{agentName}</div>
                            <div className={`text-xs ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                              {agentName === 'NOVA' ? 'Email Marketer' : 'Course Creator'}
                            </div>
                          </button>
                        )
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={m.id}
                type="button"
                onClick={() => handleNavClick(m.id)}
                className={desktopNavClass(isActivePath(routeByNavId[m.id] || ''))}
                aria-current={isActivePath(routeByNavId[m.id] || '') ? 'page' : undefined}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${theme === 'dark' ? 'via-white/40' : 'via-black/20'} to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-lg`}></div>
                <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}></div>
                <span className="relative z-10">
                  {m.label}
                </span>
                {isActivePath(routeByNavId[m.id] || '') && (
                  <span className="absolute left-3 right-3 bottom-1 h-0.5 rounded-full bg-gradient-to-r from-[#0eaac8] to-[#1dc393]" />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden lg:flex nav-item-shiny bg-gradient-to-r from-[#0e99c8] to-[#1dc393] text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-cyan-500/20 hover:scale-105 transition-transform relative overflow-hidden"
          >
            <span className="relative z-10">Connect to Evoke </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden w-10 h-10 rounded-lg flex items-center justify-center border-2 transition-all duration-300 cursor-pointer ${theme === 'dark' ? 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40 text-white' : 'bg-black/10 border-black/20 hover:bg-black/20 hover:border-black/40 text-black'}`}
            aria-label="Toggle menu"
            style={{ zIndex: 201 }}
          >
            {isMobileMenuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[199] bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`lg:hidden fixed top-[73px] left-0 right-0 z-[201] transition-all duration-300 ease-in-out ${isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none'
          } ${theme === 'dark' ? 'bg-black/95 border-b border-white/10' : 'bg-white/95 border-b border-black/10'} backdrop-blur-xl`}
      >
        <div className="px-4 py-6 space-y-2">
          <button
            type="button"
            onClick={handleHomeClick}
            className={mobileNavClass(isActivePath('/'))}
            aria-current={isActivePath('/') ? 'page' : undefined}
          >
            Home
          </button>
          <button
            type="button"
            onClick={handleAboutClick}
            className={mobileNavClass(isActivePath('/about-us'))}
            aria-current={isActivePath('/about-us') ? 'page' : undefined}
          >
            About
          </button>
          <div>
            <button
              type="button"
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className={`${mobileNavClass(isServicesActive)} flex items-center justify-between`}
              aria-current={isServicesActive ? 'page' : undefined}
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isServicesDropdownOpen && (
              <div className="pl-4 mt-2 space-y-1">
                <button
                  type="button"
                  onClick={() => handleServiceClick('/automations')}
                  className={`block w-full text-left px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wide transition-all duration-300 ${
                    isActivePath('/automations')
                      ? isDark
                        ? 'text-[#27bce2] bg-white/10'
                        : 'text-[#028fbe] bg-[#028fbe]/10'
                      : theme === 'dark'
                        ? 'text-white/80 hover:bg-white/10 hover:text-white'
                        : 'text-black/80 hover:bg-black/10 hover:text-black'
                  }`}
                  style={{ borderLeft: '3px solid #0eaac8' }}
                >
                  Automation
                </button>
                <button
                  type="button"
                  onClick={() => handleServiceClick('/ai-assistants')}
                  className={`block w-full text-left px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wide transition-all duration-300 ${
                    isActivePath('/ai-assistants')
                      ? isDark
                        ? 'text-[#27bce2] bg-white/10'
                        : 'text-[#028fbe] bg-[#028fbe]/10'
                      : theme === 'dark'
                        ? 'text-white/80 hover:bg-white/10 hover:text-white'
                        : 'text-black/80 hover:bg-black/10 hover:text-black'
                  }`}
                  style={{ borderLeft: '3px solid #a855f7' }}
                >
                  Assistant
                </button>
                <button
                  type="button"
                  onClick={() => handleServiceClick('/consultancy')}
                  className={`block w-full text-left px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wide transition-all duration-300 ${
                    isActivePath('/consultancy')
                      ? isDark
                        ? 'text-[#27bce2] bg-white/10'
                        : 'text-[#028fbe] bg-[#028fbe]/10'
                      : theme === 'dark'
                        ? 'text-white/80 hover:bg-white/10 hover:text-white'
                        : 'text-black/80 hover:bg-black/10 hover:text-black'
                  }`}
                  style={{ borderLeft: '3px solid #1dc393' }}
                >
                  Consultancy
                </button>
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={handleFeaturesClick}
            className={mobileNavClass(isActivePath('/features'))}
            aria-current={isActivePath('/features') ? 'page' : undefined}
          >
            Features
          </button>
          {MILESTONES.map((m) => {
            // Agents dropdown commented out — hide from nav
            if (m.id === 'about' || m.id === 'faq' || m.id === 'social' || m.id === 'agents' || m.id === 'features' || m.id === 'automation') {
              return null;
            }

            if (m.id === 'agents') {
              return (
                <div key={m.id}>
                  <button
                    onClick={() => setIsAgentsDropdownOpen(!isAgentsDropdownOpen)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-bold text-sm tracking-[0.15em] uppercase transition-all duration-300 flex items-center justify-between ${theme === 'dark'
                        ? 'text-white hover:bg-white/10 active:bg-white/20'
                        : 'text-black hover:bg-black/10 active:bg-black/20'
                      }`}
                  >
                    {m.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${isAgentsDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isAgentsDropdownOpen && (
                    <div className="pl-4 mt-2 space-y-1">
                      {Object.entries(agentLinks).map(([agentName, link]) => (
                        link ? (
                          <a
                            key={agentName}
                            href={link}
                            rel="noopener noreferrer"
                            className={`block px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${theme === 'dark'
                                ? 'text-white/80 hover:bg-white/10 hover:text-white'
                                : 'text-black/80 hover:bg-black/10 hover:text-black'
                              }`}
                            style={{
                              borderLeft: `3px solid ${agentColors[agentName]}`
                            }}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {agentName}
                          </a>
                        ) : (
                          <button
                            key={agentName}
                            onClick={() => {
                              openComingSoonModal(agentName);
                            }}
                            className={`block w-full text-left px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${theme === 'dark'
                                ? 'text-white/80 hover:bg-white/10 hover:text-white'
                                : 'text-black/80 hover:bg-black/10 hover:text-black'
                              }`}
                            style={{
                              borderLeft: `3px solid ${agentColors[agentName]}`
                            }}
                          >
                            {agentName}
                          </button>
                        )
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={m.id}
                type="button"
                onClick={() => handleNavClick(m.id)}
                className={mobileNavClass(isActivePath(routeByNavId[m.id] || ''))}
                aria-current={isActivePath(routeByNavId[m.id] || '') ? 'page' : undefined}
              >
                {m.label}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="w-full mt-4 bg-gradient-to-r from-[#0e99c8] to-[#1dc393] text-white px-4 py-3 rounded-lg text-xs font-black uppercase tracking-widest shadow-xl shadow-cyan-500/20 transition-transform active:scale-95"
          >
            Connect to Evoke
          </button>
        </div>
      </div>

      {isComingSoonModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={() => setIsComingSoonModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

          <div
            className={`relative z-10 w-full max-w-2xl rounded-3xl shadow-2xl transform transition-all duration-500 ease-out ${isDark ? 'bg-gray-900' : 'bg-white'
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none animate-pulse"
              style={{
                background: isDark
                  ? `linear-gradient(to right, ${activeAgentColor}33, ${activeAgentColor}1A, ${activeAgentColor}33)`
                  : `linear-gradient(to right, ${activeAgentColor}1A, ${activeAgentColor}0D, ${activeAgentColor}1A)`
              }}
            ></div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsComingSoonModalOpen(false);
              }}
              className={`absolute top-6 right-6 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 cursor-pointer ${isDark ? 'hover:bg-gray-800 text-white bg-gray-800/50' : 'hover:bg-gray-100 text-gray-600 bg-white/50'
                }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative p-10 sm:p-16 text-center">
              <div className="mb-8">
                <div
                  className="inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full mb-6 animate-pulse"
                  style={{ backgroundColor: isDark ? `${activeAgentColor}33` : `${activeAgentColor}1A` }}
                >
                  <svg className="w-12 h-12 sm:w-14 sm:h-14" style={{ color: activeAgentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'
                }`}>
                Coming Soon
              </h2>

              <p className={`text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 ${isDark ? 'text-white/70' : 'text-gray-600'
                }`}>
                {comingSoonAgent} is currently under development. We're working hard to bring you an amazing experience. Stay tuned!
              </p>

              <div className="flex justify-center gap-2">
                <div className="w-3 h-3 rounded-full animate-bounce" style={{ animationDelay: '0s', backgroundColor: activeAgentColor }}></div>
                <div className="w-3 h-3 rounded-full animate-bounce" style={{ animationDelay: '0.2s', backgroundColor: activeAgentColor }}></div>
                <div className="w-3 h-3 rounded-full animate-bounce" style={{ animationDelay: '0.4s', backgroundColor: activeAgentColor }}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.7) translateY(-50px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </>
  );
};

export default Navigation;
