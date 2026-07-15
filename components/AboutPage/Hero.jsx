'use client';

import React from "react";
import ParticleBackground from "../../components/ParticleBackground";

const Hero = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      className="ap-hero-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: isDark ? "#000000" : "#ffffff",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <ParticleBackground
          theme={theme}
          particleCount={120}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(4rem, 8vw, 8rem)",
            lineHeight: 1,
            fontWeight: 900,
            letterSpacing: "-4px",
            marginBottom: "2rem",
            color: isDark ? "#ffffff" : "#0f172a",
          }}
        >
          ABOUT{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #00d4ff 0%, #22c55e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              whiteSpace: "nowrap",
            }}
          >
            EVOKE AI
          </span>
        </h1>

        <p
          style={{
            maxWidth: "1000px",
            width: "100%",
            fontSize: "clamp(1rem, 1.5vw, 1.4rem)",
            lineHeight: 1.9,
            color: isDark ? "#cbd5e1" : "#475569",
            marginBottom: "4rem",
          }}
        >
          EVOKE AI provides an all-in-one orchestration layer for intelligent
          automation, AI integration, and workflow management. Through a single
          user-friendly interface, teams can seamlessly build, manage, and scale
          AI agents that train on business data, follow brand guidelines, and
          handle multiple business processes.
        </p>

        <a
          href="https://evokeaisolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "260px",
            padding: "18px 42px",
            borderRadius: "999px",
            fontSize: "clamp(1rem, 1.2vw, 1.3rem)",
            fontWeight: 700,
            textDecoration: "none",
            color: "#ffffff",
            background:
              "linear-gradient(90deg, #00d4ff 0%, #34d399 100%)",
            boxShadow: "0 0 35px rgba(0, 212, 255, 0.35)",
            transition: "all 0.3s ease",
          }}
        >
          View Our Platform
        </a>
      </div>
    </section>
  );
};

export default Hero;
