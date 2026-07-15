'use client';

import { useState, useEffect, useRef } from 'react';
const aeonImage = '/assets/AEON.webp';
const novaImage = '/assets/NOVA.webp';
const cipherImage = '/assets/CIPHER.webp';
const orionImage = '/assets/O.webp';

const AutomationSection = ({ milestone, theme }) => {
  const isDark = theme === 'dark';
  const brandGradient = "bg-gradient-to-br from-[#0eaac8] via-[#27bce2] to-[#1dc393]";
  const textGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#0eaac8] to-[#1dc393]";
  const [visibleImages, setVisibleImages] = useState(new Set());
  const imageRefs = useRef([]);

  const images = [aeonImage, novaImage, orionImage, cipherImage];

  useEffect(() => {
    const observers = [];

    imageRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleImages((prev) => new Set([...prev, index]));
              observer.unobserve(ref);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="relative w-full py-10 sm:py-16 lg:py-20 px-3 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 sm:mb-6 lg:mb-8 relative overflow-hidden group shiny-badge">
            <div className={`absolute inset-0 ${brandGradient} opacity-30 rounded-full`}></div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-full"></div>
            
            <span className="relative z-10 w-2 h-2 rounded-full bg-[#00d2ff] animate-pulse shadow-lg shadow-[#00d2ff]/60"></span>
            
            <span 
              className={`relative z-10 ${textGradient} text-xs sm:text-sm font-bold tracking-[0.15em] uppercase`}
              style={{ fontFamily: '"Poppins", "Montserrat", "Inter", sans-serif' }}
            >
              {milestone.category}
            </span>
            
            <div className="absolute inset-0 rounded-full border-2 border-[#00d2ff]/40 group-hover:border-[#27bce2]/60 transition-all duration-300 shadow-lg shadow-[#00d2ff]/20"></div>
          </div>
          
          <h2 className={`text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 lg:mb-8 uppercase tracking-tighter italic ${isDark ? 'text-white' : 'text-black'}`}>
            Build Once<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0eaac8] to-[#1dc393]">Automate </span> Everything
          </h2>
          
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed ${isDark ? 'text-white/80' : 'text-black/70'}`}>
            With AI at the core. EVOKE AI delivers enterprise-grade automation for workflows, communication, and learning—driving growth without added complexity.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {images.map((image, index) => {
            const isVisible = visibleImages.has(index);
            const isEven = index % 2 === 0;
            const direction = isEven ? 'left' : 'right';
            
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) imageRefs.current[index] = el;
                }}
                className={`w-full transition-all duration-1000 ease-out ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : `opacity-0 ${direction === 'left' ? '-translate-x-20' : 'translate-x-20'}`
                }`}
                style={{
                  transitionDelay: `${index * 0.15}s`
                }}
              >
                <img
                  src={image}
                  alt={`Automation ${index + 1}`}
                  width="1366"
                  height="768"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AutomationSection;
