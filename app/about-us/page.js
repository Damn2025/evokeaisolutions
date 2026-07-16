import { Suspense } from 'react';
import AboutUsClient from './AboutUsClient';

export default function AboutUsPage() {
  return (
    <Suspense fallback={null}>
      <AboutUsClient />
    </Suspense>
  );
}
