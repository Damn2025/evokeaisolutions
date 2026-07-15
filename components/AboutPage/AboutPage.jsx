'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTheme } from '../../lib/ThemeContext';
import Navigation from '../../components/Navigation';
import Hero from './Hero';
import Footer from '../../components/Footer';
import WhoWeAre from './WhoWeAre';
import WhyEvoke from './WhyEvoke';
import MissionCards from './MissionCards';
import Stats from './Stats';
import Team from './Team';
import GlobalPresence from './GlobalPresence';
import './AboutPage.css';

const AboutPage = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
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
    } else {
      router.push('/?scrollTo=' + encodeURIComponent(sectionId));
    }
  };

  return (
    <div className={`about-page${theme === 'dark' ? ' dark' : ''}`}>
      <Navigation theme={theme} setTheme={setTheme} jumpTo={jumpTo} />
      <Hero theme={theme} jumpTo={jumpTo} />
      <WhoWeAre />
      <WhyEvoke />
      <MissionCards />
      <Stats />
      <Team />
      <GlobalPresence />
      <Footer theme={theme} />
    </div>
  );
};

export default AboutPage;
