"use client";

import Image from "next/image";
import AutomationPlatform from "./components/AutomationPlatform";
import EvokeAI from "./components/EvokeAI";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import styles from "./page.module.css";

export default function Features() {
  const jumpTo = (sectionId) => {
    let el = document.getElementById(sectionId);
    if (!el && sectionId === "features") {
      el = document.getElementById("capabilities");
    }
    if (!el && sectionId === "contact") {
      el = document.getElementById("footer");
    }
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://evokeaisolutions.com/#organization",
        "name": "Evoke AI Solutions",
        "url": "https://evokeaisolutions.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://evokeaisolutions.com/assets/logo.png",
        },
        "description":
          "Enterprise AI agents working together to create smarter solutions, workflow automation, and measurable revenue growth.",
        "sameAs": [
          "https://twitter.com/evokeaisolutions",
          "https://linkedin.com/company/evoke-ai-solutions",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://evokeaisolutions.com/#website",
        "url": "https://evokeaisolutions.com",
        "name": "Evoke AI Solutions",
        "description": "Enterprise AI Agents & Workflow Automation Platform",
        "publisher": { "@id": "https://evokeaisolutions.com/#organization" },
      },
      {
        "@type": "ItemList",
        "@id": "https://evokeaisolutions.com/#services",
        "name": "Evoke AI Specialized Agents",
        "description": "Specialized AI employees working 24/7 for enterprise workflows",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Service",
              "name": "NOVA - AI Email Marketer",
              "description": "AI-powered email automation with smart personalization and optimized delivery.",
            },
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Service",
              "name": "AEON - AI Assistant",
              "description": "Conversational architect for 24/7 engagement and response trees.",
            },
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Service",
              "name": "ORION - AI Course Creator",
              "description": "Synthesizes knowledge bases into structured educational modules.",
            },
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Service",
              "name": "CIPHER - Cyber Security AI",
              "description": "Scans web and mobile APK to identify vulnerabilities and security threats.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className={styles.container} aria-label="Evoke AI Solutions Features">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation jumpTo={jumpTo} />

      <section id="about" className={styles.heroSection} aria-label="Hero Section">
        <div className={styles.heroContent}>
          <div className={styles.heroContentInner}>
            <h1 className={styles.heroSubtitle}>
              Intelligent AI solutions that work like a full team—24/7.
            </h1>
            <p className={styles.heroDescription}>
              From answering customer queries to managing leads and automating workflows, Evoke AI gives your business a team of AI employees that never sleep, never miss opportunities, and scale with your growth.
            </p>
            <div className={styles.heroCta}>
              <a href="https://evokeaisolutions.com/contact/" rel="noopener noreferrer" className="inline-block" aria-label="Get Started with Evoke AI Solutions">
                <button type="button" className={`${styles.primaryBtn} !bg-gradient-to-r !from-[#0eaac8] !to-[#1dc393] !text-white !shadow-lg !shadow-cyan-500/30 hover:!shadow-cyan-500/50 hover:scale-105 transition-all font-extrabold tracking-wide`} aria-label="Get Started Button">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.heroImageWrapperFull}>
          <Image
            src="/hero 1.png"
            alt="Evoke AI Solutions - Intelligent AI Robot Employee automating business workflows and customer interactions"
            className={styles.heroImageFull}
            width={1920}
            height={750}
            priority
          />

          <div className={`${styles.pointerContainer} ${styles.leftPointer} ${styles.pointer1}`}>
            <div className={styles.pointerText}>
              <div className={styles.pointerTitle}>AI Chatbots</div>
              <div className={styles.pointerDescription}>
                Human-like conversations across channels.
              </div>
            </div>
            <div className={styles.pointerLine}></div>
            <div className={styles.pointerDot}></div>
          </div>

          <div className={`${styles.pointerContainer} ${styles.leftPointer} ${styles.pointer2}`}>
            <div className={styles.pointerText}>
              <div className={styles.pointerTitle}>AI Voice Agents</div>
              <div className={styles.pointerDescription}>
                Intelligent calling and support automation.
              </div>
            </div>
            <div className={styles.pointerLine}></div>
            <div className={styles.pointerDot}></div>
          </div>

          <div className={`${styles.pointerContainer} ${styles.leftPointer} ${styles.pointer3}`}>
            <div className={styles.pointerText}>
              <div className={styles.pointerTitle}>Workflow Automation</div>
              <div className={styles.pointerDescription}>
                Automate repetitive business tasks.
              </div>
            </div>
            <div className={styles.pointerLine}></div>
            <div className={styles.pointerDot}></div>
          </div>

          <div className={`${styles.pointerContainer} ${styles.rightPointer} ${styles.pointer4}`}>
            <div className={styles.pointerText}>
              <div className={styles.pointerTitle}>Lead Management</div>
              <div className={styles.pointerDescription}>
                Capture and convert leads automatically.
              </div>
            </div>
            <div className={styles.pointerLine}></div>
            <div className={styles.pointerDot}></div>
          </div>

          <div className={`${styles.pointerContainer} ${styles.rightPointer} ${styles.pointer5}`}>
            <div className={styles.pointerText}>
              <div className={styles.pointerTitle}>Analytics & Insights</div>
              <div className={styles.pointerDescription}>
                Real-time business intelligence.
              </div>
            </div>
            <div className={styles.pointerLine}></div>
            <div className={styles.pointerDot}></div>
          </div>

          <div className={`${styles.pointerContainer} ${styles.rightPointer} ${styles.pointer6}`}>
            <div className={styles.pointerText}>
              <div className={styles.pointerTitle}>AI Consultancy & Strategy</div>
              <div className={styles.pointerDescription}>
                Expert guidance to identify, build, and implement AI solutions tailored to your business.
              </div>
            </div>
            <div className={styles.pointerLine}></div>
            <div className={styles.pointerDot}></div>
          </div>
        </div>
      </section>

      <section id="agents" className={styles.aboutUsSection} aria-label="Specialized AI Agents">
        <div className={styles.aboutUsHeader}>
          <h2 className={styles.aboutUsTitle}>Smart agents, smarter outcomes</h2>
          <p className={styles.aboutUsDesc}>
            Specialized AI agents working together to create smarter solutions and measurable impact.
          </p>
        </div>

        <div className={styles.teamGrid}>
          <div className={`${styles.teamCard} ${styles.novaCard}`}>
            <div className={styles.cardImageWrapper}>
              <video
                src="/NOVA_V.mp4"
                className={styles.cardVideo}
                autoPlay
                loop
                muted
                playsInline
                aria-label="NOVA AI Email Marketer demonstration video"
                title="NOVA AI Email Marketer demonstration video"
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>NOVA</h3>
              <p className={`${styles.cardSubtitle} ${styles.novaSub}`}>AI EMAIL MARKETER</p>
              <p className={styles.cardDescription}>
                AI-powered email automation with smart personalization and optimized delivery.
              </p>
            </div>
          </div>

          <div className={`${styles.teamCard} ${styles.aeonCard}`}>
            <div className={styles.cardImageWrapper}>
              <video
                src="/AEON_V.mp4"
                className={styles.cardVideo}
                autoPlay
                loop
                muted
                playsInline
                aria-label="AEON AI Assistant demonstration video"
                title="AEON AI Assistant demonstration video"
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>AEON</h3>
              <p className={`${styles.cardSubtitle} ${styles.aeonSub}`}>AI ASSISTANT</p>
              <p className={styles.cardDescription}>
                Conversational architect for 24/7 engagement and response trees.
              </p>
            </div>
          </div>

          <div className={`${styles.teamCard} ${styles.orionCard}`}>
            <div className={styles.cardImageWrapper}>
              <video
                src="/ORION_V.mp4"
                className={styles.cardVideo}
                autoPlay
                loop
                muted
                playsInline
                aria-label="ORION AI Course Creator demonstration video"
                title="ORION AI Course Creator demonstration video"
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>ORION</h3>
              <p className={`${styles.cardSubtitle} ${styles.orionSub}`}>AI COURSE CREATOR</p>
              <p className={styles.cardDescription}>
                Synthesizes knowledge bases into structured educational modules.
              </p>
            </div>
          </div>

          <div className={`${styles.teamCard} ${styles.cipherCard}`}>
            <div className={styles.cardImageWrapper}>
              <video
                src="/CIPHER_VI.mp4"
                className={styles.cardVideo}
                autoPlay
                loop
                muted
                playsInline
                aria-label="CIPHER Cyber Security AI demonstration video"
                title="CIPHER Cyber Security AI demonstration video"
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>CIPHER</h3>
              <p className={`${styles.cardSubtitle} ${styles.cipherSub}`}>CYBER SECURITY</p>
              <p className={styles.cardDescription}>
                Scans web and mobile APK to identify vulnerabilities and security threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AutomationPlatform />
      <EvokeAI />

      <Footer />
    </main>
  );
}
