'use client';

import { ThemeProvider } from '../../lib/ThemeContext';
import AboutPage from '../../components/AboutPage/AboutPage';

function AboutContent() {
  return <AboutPage />;
}

export default function AboutUsClient() {
  return (
    <ThemeProvider>
      <AboutContent />
    </ThemeProvider>
  );
}
