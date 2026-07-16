'use client';

import { useEffect } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function PrivacyPolicyPage() {
  const theme = 'light';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const jumpTo = (sectionId) => {
    if (sectionId === 'about') {
      window.location.href = '/about-us';
    } else if (sectionId === 'contact') {
      window.location.href = '/contact';
    } else if (sectionId === 'features' || sectionId === 'automation') {
      window.location.href = '/features';
    } else if (sectionId === 'partners') {
      window.location.href = '/our-clients';
    } else if (sectionId === 'blogs') {
      window.location.href = '/blog';
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const linkClass = 'underline decoration-[#0eaac8]/40 underline-offset-2 hover:text-[#0eaac8] transition-colors';

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-800 font-sans">
      <Navigation theme={theme} jumpTo={jumpTo} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="mb-8 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0eaac8] mb-3">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-black">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-500">
            Last updated: 10th April 2026
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10 text-slate-700">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">1. Introduction</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Welcome to EVOKE AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our products and services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{' '}
              <a href="https://evokeaisolutions.com" className={linkClass}>evokeaisolutions.com</a>,
              including when you reach us through our LinkedIn ads, campaigns, or other marketing channels.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">2.1 Information You Provide</h3>
                <p className="text-sm sm:text-base leading-relaxed">We may collect information that you voluntarily provide to us when you:</p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-sm sm:text-base ml-4">
                  <li>Submit our contact form (name, email, phone, company, location, message)</li>
                  <li>Contact us through our contact form or other channels</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">2.2 Automatically Collected Information</h3>
                <p className="text-sm sm:text-base leading-relaxed">When you visit our website, we may automatically collect:</p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-sm sm:text-base ml-4">
                  <li>IP address and browser type</li>
                  <li>Operating system and pages visited</li>
                  <li>Referring website addresses (e.g., LinkedIn)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">3. Marketing &amp; Advertising</h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              You may reach this website through our advertising on LinkedIn. When you click on our ads:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base ml-4">
              <li>
                <strong>LinkedIn Ads:</strong> We use LinkedIn Insight Tags to measure performance. LinkedIn&apos;s{' '}
                <a href="https://www.linkedin.com/legal/privacy-policy" className={linkClass} target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>{' '}
                applies.
              </li>
              <li><strong>Conversion Tracking:</strong> We use pixels to track form submissions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">4. How We Use Your Information</h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base ml-4">
              <li>To provide, maintain, and improve our services</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To measure and optimize the effectiveness of our advertising and landing pages</li>
              <li>To analyze website usage and improve user experience</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">5. Information Sharing and Disclosure</h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base ml-4">
              <li>
                <strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as email delivery (SMTP), analytics, hosting, and advertising platforms (e.g., LinkedIn).
              </li>
              <li>
                <strong>Advertising Platforms:</strong> When you interact with our ads or reach us via LinkedIn, we may share data with LinkedIn and other ad platforms for measurement, optimization, and reporting.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share your information with your explicit consent.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">6. Data Security</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">7. Your Rights</h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base ml-4">
              <li>The right to access your personal information</li>
              <li>The right to rectify inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to processing of your information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
              <li>The right to opt out of marketing communications</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-4">
              To exercise these rights, please contact us using the information provided in the &quot;Contact Us&quot; section below. You can also manage your LinkedIn ad preferences in your LinkedIn settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">8. Cookies and Tracking Technologies</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              We may use cookies and similar tracking technologies to track activity on our website and store certain information. Third-party advertising platforms (including LinkedIn) may also place cookies or similar technologies when you visit our site after clicking our ads. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">9. Third-Party Links</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">10. Children&apos;s Privacy</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">11. Changes to This Privacy Policy</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-black">12. Contact Us</h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-[#dce9ef] shadow-sm">
              <p className="text-sm sm:text-base font-semibold mb-2 text-black">EVOKE AI</p>
              <p className="text-sm sm:text-base">
                Email:{' '}
                <a href="mailto:help@evokeaisolutions.com" className={linkClass}>
                  help@evokeaisolutions.com
                </a>
              </p>
              <p className="text-sm sm:text-base mt-2">
                Website:{' '}
                <a href="https://evokeaisolutions.com" className={linkClass} target="_blank" rel="noopener noreferrer">
                  evokeaisolutions.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer theme={theme} />
    </div>
  );
}
