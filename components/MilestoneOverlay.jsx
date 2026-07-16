'use client';

import React, { lazy, Suspense } from 'react';
import { MILESTONES } from '../lib/constants';

const AboutSection = lazy(() => import('./milestones/AboutSection'));
const AgentsSection = lazy(() => import('./milestones/AgentsSection'));
const AutomationSection = lazy(() => import('./milestones/AutomationSection'));
const PartnersSection = lazy(() => import('./milestones/PartnersSection'));
const SocialSection = lazy(() => import('./milestones/SocialSection'));
const BlogSection = lazy(() => import('./milestones/BlogSection'));
const ContactSection = lazy(() => import('./milestones/ContactSection'));
const FAQSection = lazy(() => import('./milestones/FAQSection'));

const MilestoneOverlay = ({ theme }) => {
  const renderSection = (milestone) => {
    switch (milestone.id) {
      case 'about':
        return <AboutSection milestone={milestone} theme={theme} />;
      case 'agents':
        return <AgentsSection milestone={milestone} theme={theme} />;
      case 'features':
      case 'automation':
        return <AutomationSection milestone={milestone} theme={theme} />;
      case 'partners':
        return <PartnersSection milestone={milestone} theme={theme} />;
      case 'social':
        return <SocialSection milestone={milestone} theme={theme} />;
      case 'blogs':
        return <BlogSection milestone={milestone} theme={theme} />;
      case 'contact':
        return <ContactSection milestone={milestone} theme={theme} />;
      case 'faq':
        return <FAQSection milestone={milestone} theme={theme} />;
      default:
        return null;
    }
  };

  return (
    <Suspense fallback={
      <div className={`h-screen w-full flex items-center justify-center ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className="w-10 h-10 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
      </div>
    }>
      <div className="relative z-50">
        {MILESTONES.map((m) => (
          <section
            key={m.id}
            id={m.id}
            className={`relative min-h-screen flex items-center justify-center p-6 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
          >
            <div className="w-full mx-auto">
              {renderSection(m)}
            </div>
          </section>
        ))}
      </div>
    </Suspense>
  );
};

export default MilestoneOverlay;
