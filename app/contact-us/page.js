"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { User, Building2, Mail, Phone, PhoneCall, Globe, MapPin, ArrowUpRight, MessageSquare, Send, CheckCircle2, X } from "lucide-react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const LOCATIONS = [
  {
    country: "INDIA (PUNJAB)",
    addressLine1: "SCO No. 09-Ground Floor, Aero View Plaza,",
    addressLine2: "Airport Road, Dyalpura - 140603",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(
        "SCO No. 09 Ground Floor Aero View Plaza Airport Road Dyalpura Punjab 140603 India"
      ),
  },
  {
    country: "INDIA (GUJARAT)",
    addressLine1: "310 - Sampada, Navarangpura,",
    addressLine2: "Ahmedabad - 380009",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(
        "310 Sampada Navarangpura Ahmedabad Gujarat 380009 India"
      ),
  },
  {
    country: "UNITED KINGDOM",
    addressLine1: "20-22 Wenlock Road, Hoxton,",
    addressLine2: "London N1 7GU",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("20-22 Wenlock Road Hoxton London N1 7GU United Kingdom"),
  },
  {
    country: "UNITED STATES",
    addressLine1: "616, Corporate Way Suite 2,",
    addressLine2: "6015 Valley Cottage, NY 10989",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(
        "616 Corporate Way Suite 2 6015 Valley Cottage NY 10989 USA"
      ),
  },
  {
    country: "CANADA",
    addressLine1: "8449, 116 A Street, Delta - V4C7N7,",
    addressLine2: "Greater Vancouver",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(
        "8449 116 A Street Delta V4C 7N7 Greater Vancouver Canada"
      ),
  },
  {
    country: "DUBAI (UAE)",
    addressLine1: "Suite No 2902 and 2903, The Prism Tower,",
    addressLine2: "Business Bay, Dubai",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("Suite No 2902 and 2903 The Prism Tower Business Bay Dubai UAE"),
  },
];

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    location: "",
    vision: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [theme, setTheme] = useState("light");

  const jumpTo = (sectionId) => {
    if (sectionId === "contact") {
      const el = document.getElementById("contact-form-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "about") {
      window.location.href = "/about-us";
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#00b4d8', '#00bda5', '#0fa3b1', '#3b82f6'],
        });
        setShowSuccessModal(true);
      } else {
        alert('Failed to send the message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      location: "",
      vision: "",
    });
  };

  return (
    <>
      <Navigation theme={theme} setTheme={setTheme} jumpTo={jumpTo} />

      <section className="relative w-full min-h-screen flex flex-col justify-center items-center pt-28 sm:pt-36 md:pt-44 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
          <img
            src="assets/contact-hero.png"
            alt="Hero Background"
            className="w-full h-full object-cover object-[80%_center] scale-100"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center py-8 sm:py-12">
          <div className="w-full max-w-4xl bg-white/75 backdrop-blur-md border border-white rounded-[36px] p-6 sm:p-10 md:p-14 shadow-2xl shadow-slate-950/10 mb-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black font-display tracking-tight mb-6 leading-[1.05] sm:leading-[1.08] text-slate-950">
              Join the{' '}
              <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm">
                AI Revolution.
              </span>
            </h1>

            <div className="font-sans text-slate-950 text-sm sm:text-base md:text-lg font-bold leading-relaxed space-y-3 max-w-3xl mx-auto">
              <p>
                Whether you are a high-growth startup or a global enterprise, Evoke AI provides the state-of-the-art tools and intelligence to build what's next.
              </p>
              <p className="font-black text-slate-950 pt-2">
                Ready to deploy next-generation intelligence?{' '}
                <a
                  href="#contact-form-section"
                  className="underline decoration-emerald-500 decoration-2 underline-offset-4 hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  Let's talk.
                </a>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-3xl">
            <a
              href="mailto:help@evokeaisolutions.com"
              className="flex items-center justify-between p-4 sm:p-5 bg-white/95 backdrop-blur-xl border border-cyan-100/80 rounded-2xl shadow-md hover:shadow-xl hover:shadow-emerald-500/15 hover:border-emerald-400 hover:-translate-y-0.5 transition-all duration-200 group text-left"
            >
              <div className="flex items-center gap-3.5 min-w-0 flex-1">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-50/80 via-teal-50/50 to-emerald-50/80 border border-emerald-200/80 text-teal-600 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-tr group-hover:from-cyan-500 group-hover:via-teal-500 group-hover:to-emerald-500 group-hover:text-white group-hover:border-transparent transition-all duration-200 shadow-sm">
                  <Mail className="text-lg sm:text-xl" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-black uppercase tracking-wider text-slate-900 mb-0.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"></span>
                    Email Us 
                  </div>
                  <div className="text-xs sm:text-sm font-black text-slate-950 group-hover:text-emerald-600 transition-colors break-words">
                    help@evokeaisolutions.com
                  </div>
                </div>
              </div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-800 group-hover:text-emerald-600 group-hover:bg-white transition-all shrink-0 ml-2 shadow-sm">
                <ArrowUpRight className="text-xs sm:text-sm" />
              </div>
            </a>

            <a
              href="tel:7986175240"
              className="flex items-center justify-between p-4 sm:p-5 bg-white/95 backdrop-blur-xl border border-cyan-100/80 rounded-2xl shadow-md hover:shadow-xl hover:shadow-emerald-500/15 hover:border-emerald-400 hover:-translate-y-0.5 transition-all duration-200 group text-left"
            >
              <div className="flex items-center gap-3.5 min-w-0 flex-1">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-50/80 via-teal-50/50 to-emerald-50/80 border border-emerald-200/80 text-teal-600 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-tr group-hover:from-cyan-500 group-hover:via-teal-500 group-hover:to-emerald-500 group-hover:text-white group-hover:border-transparent transition-all duration-200 shadow-sm">
                  <PhoneCall className="text-lg sm:text-xl" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-black uppercase tracking-wider text-slate-900 mb-0.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"></span>
                     Phone Call
                  </div>
                  <div className="text-xs sm:text-sm font-black text-slate-950 group-hover:text-emerald-600 transition-colors break-words">
                    7986175240
                  </div>
                </div>
              </div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-800 group-hover:text-emerald-600 group-hover:bg-white transition-all shrink-0 ml-2 shadow-sm">
                <Phone className="text-xs sm:text-sm" />
              </div>
            </a>
          </div>
        </div>
      </section>

      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pb-16">
        <div className="w-full max-w-7xl mb-24 px-2 sm:px-6">
          <div className="flex items-center justify-center mb-10 mt-10">
            <div className="inline-flex items-center bg-[#dffcff] rounded-full px-5 py-2.5 shadow-sm ring-1 ring-[#7eeaf0]/60 border border-[#7eeaf0]/60">
              <span className="w-2 h-2 rounded-full bg-[#06b6d4] mr-3 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-black font-display uppercase tracking-widest bg-gradient-to-r from-[#06b6d4] to-[#7ef2c8] bg-clip-text text-transparent">
                Our Global Presence
              </span>
            </div>
          
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {LOCATIONS.map((loc, idx) => (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-xl border border-emerald-100/80 rounded-3xl p-8 sm:p-10 min-h-[220px] sm:min-h-[250px] shadow-md hover:shadow-2xl hover:shadow-emerald-500/15 hover:border-emerald-400 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between text-left"
              >
                <div className="absolute top-0 left-0 bottom-0 w-2.5 bg-gradient-to-b from-cyan-400 via-teal-400 to-emerald-500 group-hover:w-3.5 transition-all duration-300" />

                <div className="pl-3">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-black font-display text-base sm:text-lg md:text-xl tracking-wide uppercase text-slate-950 group-hover:text-emerald-600 transition-colors flex items-center gap-3">
                      <MapPin className="text-teal-500 text-lg" />
                      {loc.country}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-bold pl-1">
                    {loc.addressLine1}
                    <br />
                    {loc.addressLine2}
                  </p>
                </div>

                <div className="pl-3 mt-6 pt-4 border-t border-slate-200/80 flex flex-col gap-3">
                  <a
                    href={
                      loc.mapUrl ||
                      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${loc.addressLine1} ${loc.addressLine2} ${loc.country}`)}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full py-3 px-4 bg-gradient-to-r from-cyan-50/80 via-teal-50/80 to-emerald-50/80 hover:from-cyan-500 hover:via-teal-500 hover:to-emerald-500 text-teal-800 hover:text-white border border-emerald-200/80 hover:border-transparent rounded-xl font-black text-xs sm:text-sm tracking-wide transition-all duration-200 group/btn shadow-sm"
                  >
                    <span className="flex items-center gap-2">
                      <MapPin className="text-sm group-hover/btn:scale-110 transition-transform" />
                      View Location
                    </span>
                    <ArrowUpRight className="text-xs opacity-75 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section
          id="contact-form-section"
          className="w-full min-h-screen bg-gradient-to-tr from-[#f3fafb] via-[#f7fcfd] to-[#edf7f9] rounded-[36px] border border-[#d8f0ed]/50 flex items-center justify-center p-4 sm:p-8 md:p-10 lg:p-14 font-sans selection:bg-[#00bda5]/20 selection:text-[#008f7e] scroll-mt-6 shadow-sm relative overflow-hidden"
        >
          <div className="w-full max-w-6xl mx-auto rounded-[32px] border border-[#d8f0ed] bg-white/40 backdrop-blur-sm p-4 sm:p-6 md:p-10 lg:p-14 shadow-2xl shadow-cyan-950/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-5 flex flex-col space-y-6 md:space-y-8 text-left">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-cyan-50 text-cyan-600 border border-cyan-100 tracking-wider uppercase mb-4">
                    Partner with Evoke AI
                  </span>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0fa3b1] tracking-tight leading-tight sm:leading-[1.1] md:leading-[1.15]">
                    TRANSFORM YOUR <br />
                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#00bda5] bg-clip-text text-transparent">
                      VISION INTO REALITY
                    </span>
                  </h1>
                </div>

                <p className="hidden sm:block text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  Partner with Evoke AI to redefine what's possible. Our specialized AI solutions and expert consultancy will turn your projects into global successes. Whether you are at the concept stage or scaling up, we provide the strategic foresight you need.
                </p>

                <div className="relative hidden lg:block w-full max-w-[320px] mx-auto lg:mx-0 pt-4">
                  <svg
                    viewBox="0 0 200 150"
                    className="w-full h-auto drop-shadow-md select-none pointer-events-none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="40" y1="80" x2="60" y2="50" stroke="#00b4d8" strokeWidth="1" strokeOpacity="0.4" />
                    <line x1="40" y1="80" x2="80" y2="110" stroke="#00bda5" strokeWidth="1.2" strokeOpacity="0.5" />
                    <line x1="60" y1="50" x2="100" y2="40" stroke="#00b4d8" strokeWidth="1" strokeOpacity="0.4" />
                    <line x1="60" y1="50" x2="110" y2="80" stroke="#00bda5" strokeWidth="1.5" strokeOpacity="0.6" />
                    <line x1="100" y1="40" x2="110" y2="80" stroke="#00b4d8" strokeWidth="1" strokeOpacity="0.5" />
                    <line x1="100" y1="40" x2="150" y2="50" stroke="#00bda5" strokeWidth="1" strokeOpacity="0.3" />
                    <line x1="80" y1="110" x2="110" y2="80" stroke="#00bda5" strokeWidth="1.8" strokeOpacity="0.7" />
                    <line x1="80" y1="110" x2="120" y2="130" stroke="#00b4d8" strokeWidth="1" strokeOpacity="0.4" />
                    <line x1="110" y1="80" x2="150" y2="50" stroke="#00b4d8" strokeWidth="1.2" strokeOpacity="0.5" />
                    <line x1="110" y1="80" x2="160" y2="90" stroke="#00bda5" strokeWidth="1.5" strokeOpacity="0.7" />
                    <line x1="110" y1="80" x2="120" y2="130" stroke="#00bda5" strokeWidth="1.2" strokeOpacity="0.5" />
                    <line x1="150" y1="50" x2="160" y2="90" stroke="#00b4d8" strokeWidth="1" strokeOpacity="0.4" />
                    <line x1="120" y1="130" x2="160" y2="90" stroke="#00bda5" strokeWidth="1.2" strokeOpacity="0.5" />
                    <line x1="40" y1="80" x2="50" y2="110" stroke="#00bda5" strokeWidth="0.8" strokeOpacity="0.3" />
                    <line x1="80" y1="110" x2="60" y2="130" stroke="#00b4d8" strokeWidth="0.8" strokeOpacity="0.3" />
                    <line x1="150" y1="50" x2="180" y2="40" stroke="#00bda5" strokeWidth="0.8" strokeOpacity="0.3" />
                    <line x1="160" y1="90" x2="180" y2="110" stroke="#00b4d8" strokeWidth="0.8" strokeOpacity="0.3" />
                    <circle cx="50" cy="110" r="2.5" fill="#00bda5" fillOpacity="0.5" />
                    <circle cx="60" cy="130" r="3" fill="#00b4d8" fillOpacity="0.4" />
                    <circle cx="180" cy="40" r="2.5" fill="#00bda5" fillOpacity="0.5" />
                    <circle cx="180" cy="110" r="3" fill="#00b4d8" fillOpacity="0.4" />
                    <circle cx="40" cy="80" r="5" fill="#00b4d8" className="animate-pulse" style={{ animationDuration: "4s" }} />
                    <circle cx="60" cy="50" r="6" fill="#00bda5" />
                    <circle cx="100" cy="40" r="7.5" fill="#00b4d8" />
                    <circle cx="80" cy="110" r="7" fill="#00bda5" />
                    <circle cx="110" cy="80" r="11" fill="#00bda5" className="animate-pulse" style={{ animationDuration: "3s" }} />
                    <circle cx="150" cy="50" r="6.5" fill="#00b4d8" />
                    <circle cx="160" cy="90" r="8" fill="#00bda5" />
                    <circle cx="120" cy="130" r="5.5" fill="#00b4d8" />
                  </svg>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="bg-white rounded-[24px] border border-slate-100 shadow-xl shadow-cyan-950/5 p-6 sm:p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="block">
                        <span className="block text-[11px] sm:text-xs font-bold text-slate-800 tracking-wider uppercase">
                          Full Name
                        </span>
                        <div className="relative group mt-2">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400 group-focus-within:text-[#00bda5] transition-colors">
                            <User size={18} />
                          </span>
                          <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 pl-12 text-sm text-slate-900 placeholder-slate-400/80 outline-none transition focus:border-[#00bda5] focus:ring-4 focus:ring-[#00bda5]/10"
                          />
                        </div>
                      </label>
                      <label className="block">
                        <span className="block text-xs font-bold text-slate-800 tracking-wider uppercase">
                          Company (Optional)
                        </span>
                        <div className="relative group mt-2">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400 group-focus-within:text-[#00bda5] transition-colors">
                            <Building2 size={18} />
                          </span>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Evoke AI"
                            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 pl-12 text-sm text-slate-900 placeholder-slate-400/80 outline-none transition focus:border-[#00bda5] focus:ring-4 focus:ring-[#00bda5]/10"
                          />
                        </div>
                      </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <label className="block">
                        <span className="block text-xs font-bold text-slate-800 tracking-wider uppercase">
                          Email
                        </span>
                        <div className="relative group mt-2">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400 group-focus-within:text-[#00bda5] transition-colors">
                            <Mail size={18} />
                          </span>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@evoke.ai"
                            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 pl-12 text-sm text-slate-900 placeholder-slate-400/80 outline-none transition focus:border-[#00bda5] focus:ring-4 focus:ring-[#00bda5]/10"
                          />
                        </div>
                      </label>
                      <label className="block">
                        <span className="block text-xs font-bold text-slate-800 tracking-wider uppercase">
                          Phone
                        </span>
                        <div className="relative group mt-2">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400 group-focus-within:text-[#00bda5] transition-colors">
                            <Phone size={18} />
                          </span>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 000-0000"
                            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 pl-12 text-sm text-slate-900 placeholder-slate-400/80 outline-none transition focus:border-[#00bda5] focus:ring-4 focus:ring-[#00bda5]/10"
                          />
                        </div>
                      </label>
                    </div>

                    <label className="block">
                      <span className="block text-[11px] sm:text-xs font-bold text-slate-800 tracking-wider uppercase">
                        Location
                      </span>
                      <div className="relative group mt-2">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400 group-focus-within:text-[#00bda5] transition-colors">
                          <Globe size={18} />
                        </span>
                        <input
                          type="text"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="Global"
                          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 pl-12 text-sm text-slate-900 placeholder-slate-400/80 outline-none transition focus:border-[#00bda5] focus:ring-4 focus:ring-[#00bda5]/10"
                        />
                      </div>
                    </label>

                    <label className="block">
                      <span className="block text-[11px] sm:text-xs font-bold text-slate-800 tracking-wider uppercase">
                        The Vision
                      </span>
                      <div className="relative group mt-2">
                        <span className="absolute top-4 left-4 pointer-events-none text-slate-400 group-focus-within:text-[#00bda5] transition-colors">
                          <MessageSquare size={18} />
                        </span>
                        <textarea
                          name="vision"
                          required
                          rows={4}
                          value={formData.vision}
                          onChange={handleInputChange}
                          placeholder="Describe your project's vision..."
                          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 pl-12 text-sm text-slate-900 placeholder-slate-400/80 outline-none transition focus:border-[#00bda5] focus:ring-4 focus:ring-[#00bda5]/10 resize-none leading-relaxed"
                        />
                      </div>
                    </label>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative overflow-hidden group py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-white font-semibold text-sm sm:text-base shadow-lg shadow-cyan-500/10 active:scale-[0.99] disabled:opacity-80 transition-all bg-gradient-to-r from-[#00b4d8] to-[#00bda5]"
                    >
                      <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      <div className="flex items-center justify-center space-x-2">
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Get Free Consultation</span>
                            <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                          </>
                        )}
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {showSuccessModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md animate-fadeIn">
              <div className="relative w-full max-w-md bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-100 text-center animate-scaleUp">
                <button
                  onClick={closeModal}
                  type="button"
                  className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors rounded-lg p-1.5 hover:bg-slate-50"
                >
                  <X size={18} />
                </button>

                <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-emerald-50 text-emerald-500 mb-5">
                  <CheckCircle2 size={32} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">Consultation Requested!</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  Thank you, <strong className="text-slate-800">{formData.fullName || "there"}</strong>. We have successfully received your project details. An expert from Evoke AI will contact you at <strong className="text-slate-800">{formData.email}</strong> shortly.
                </p>

                <button
                  onClick={closeModal}
                  type="button"
                  className="w-full py-3 px-5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors focus:ring-4 focus:ring-slate-900/10"
                >
                  Got it, thanks!
                </button>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer theme={theme} />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
        .animate-scaleUp {
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
}
