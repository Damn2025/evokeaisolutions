'use client';

import React from 'react';

const getInitials = (name) => {
  if (!name) return '';
  const parts = name.trim().split(' ');
  if (parts.length > 1) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return parts[0][0].toUpperCase();
};

const teamData = {
  vp: {
    id: 1,
    name: "COL SUKHPAL SINGH KHETARPAL",
    designation: "VICE PRESIDENT",
    content: "Former Army officer leveraging 38+ years of leadership to bridge industry, academia, and sustainable ESG initiatives.",
    image: "/about_assets/colsir.webp",
  },
  lead: {
    id: 2,
    name: "GULADAB BAWA",
    designation: "HEAD OF AI-DIVISION",
    content: "M.S. in Artificial Intelligence & Robotics",
    image: "/about_assets/guladab.webp",
  },
  members: [
    { id: 3, name: "ETHAN BLACKWELL", designation: "DATA PRIVACY STRATEGIST", image: "/about_assets/vikas.webp", content: "Master of Science (M.S.) in Cybersecurity & Data Governance" },
    { id: 4, name: "JYOTI KHETWAL", designation: "DATA SCIENTIST", image: "/about_assets/jyoti.webp", content: "M.Tech in Data Science & Advanced Analytics" },
    { id: 5, name: "SAUMYA  AGARWAL", designation: "AI DEVELOPER", image: "/about_assets/saumya.webp", content: "B.Tech in computer science" },
    { id: 6, name: "DAVID THORNE", designation: "MARKETING HEAD", image: "/about_assets/david.webp", content: "Master of Business Administration (MBA) in International Marketing & Brand Strategy" },
    { id: 7, name: "ADITI MEHRA", designation: "FULL-STACK DEVELOPER", image: "/about_assets/aditi.webp", content: "B.Tech in Computer Science & Engineering" },
    { id: 8, name: "Emily Carter", designation: "AI Integration Architect", image: "/about_assets/mia.webp", content: "M.Tech in Enterprise Software Architecture & Systems Engineering" },
  ]
};

const TEAM_IMAGE_SIZES = {
  '/about_assets/colsir.webp': { width: 255, height: 183 },
  '/about_assets/guladab.webp': { width: 512, height: 640 },
  '/about_assets/vikas.webp': { width: 512, height: 769 },
  '/about_assets/jyoti.webp': { width: 512, height: 640 },
  '/about_assets/saumya.webp': { width: 512, height: 640 },
  '/about_assets/david.webp': { width: 512, height: 611 },
  '/about_assets/aditi.webp': { width: 512, height: 768 },
  '/about_assets/mia.webp': { width: 1254, height: 1254 },
};

const allMembers = [
  teamData.vp,
  teamData.lead,
  ...teamData.members
];

const TeamCard = ({ member }) => {
  const hasBgImage = Boolean(member.image);
  return (
    <div className="ap-team-card">
      <div className="ap-team-image-wrapper">
        {hasBgImage ? (
          <img
            src={member.image}
            alt={member.name}
            width={TEAM_IMAGE_SIZES[member.image]?.width || 512}
            height={TEAM_IMAGE_SIZES[member.image]?.height || 512}
            loading="lazy"
            decoding="async"
            className="ap-team-img"
          />
        ) : (
          <div className="ap-team-avatar-container">
            <div className="ap-team-initials">{getInitials(member.name)}</div>
          </div>
        )}
      </div>
      <div className="ap-team-info">
        <h3 className="ap-team-name">{member.name}</h3>
        <p className="ap-team-designation">{member.designation}</p>
        {member.content && <p className="ap-team-content">{member.content}</p>}
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section className="ap-team-section" id="team">
      <div className="ap-team-container">
        <div className="ap-team-header">
          <h2 className="ap-team-title">Meet Our <span className="ap-text-gradient">Team</span></h2>
          <p className="ap-team-description">
            The visionary minds driving the future of enterprise automation.
          </p>
        </div>

        <div className="ap-team-grid-wrapper">
          <div className="ap-team-row ap-top-row">
            {allMembers.slice(0, 4).map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
          <div className="ap-team-row ap-bottom-row">
            {allMembers.slice(4, 8).map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
