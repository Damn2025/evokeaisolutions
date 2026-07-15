'use client';

import React, { useEffect, useRef, useState } from 'react';

const WhyEvoke = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section className="ap-why-evoke-section" ref={ref}>
      <div className={`ap-why-evoke-container ${isVisible ? 'ap-animate-in' : ''}`}>
        <div className="ap-why-evoke-content">
          <div className="ap-why-evoke-left">
            <h2>
              <span className="ap-why-text">Why</span>
              EVOKE AI?
            </h2>
          </div>
          <div className="ap-why-evoke-line"></div>
          <div className="ap-why-evoke-right">
            <p>
              EVOKE AI brings automation, AI agents, branding, workflows, and integrations into one scalable ecosystem. It helps businesses save time, improve engagement, and manage intelligent operations with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEvoke;
