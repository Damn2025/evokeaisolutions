'use client';

import { useEffect, Suspense, lazy } from 'react';
import { useSearchParams } from 'next/navigation';
import { ThemeProvider, useTheme } from '../lib/ThemeContext';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';

const MilestoneOverlay = lazy(() => import('../components/MilestoneOverlay'));
const Footer = lazy(() => import('../components/Footer'));

function HomeContent() {
  const { theme, setTheme } = useTheme();
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTo = searchParams.get('scrollTo');
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [searchParams]);

  const jumpTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-700 overflow-x-hidden ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <Navigation theme={theme} setTheme={setTheme} jumpTo={jumpTo} />
      <Hero theme={theme} jumpTo={jumpTo}/>
      <Suspense fallback={null}>
        <MilestoneOverlay theme={theme} />
      </Suspense>
      <Suspense fallback={null}>
        <Footer theme={theme} />
      </Suspense>
    </div>
  );
}

export default function HomeClient() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}
