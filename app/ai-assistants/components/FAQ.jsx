import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "How is Evoke AI different from a basic chatbot?",
    answer: "Traditional bots use rigid scripts and keywords. Evoke AI uses Neural Intent Recognition to understand human context and nuance for natural conversations."
  },
  {
    question: "Can it actually sound like my brand?",
    answer: "Yes. Through Custom LLM Integration, we train the AI on your specific business data to ensure 100% accuracy and a tone that matches your identity."
  },
  {
    question: "What does 'Emotionally Intelligent' mean?",
    answer: "The AI is Emotionally Aware; it detects user sentiment (like frustration) and automatically adjusts its tone to be more empathetic or professional in real-time."
  },
  {
    question: "Will it slow down my website?",
    answer: "No. We use optimized server-side logic and high-performance API endpoints to ensure zero-latency responses without the typical 'typing...' delays."
  },
  {
    question: "How does it help with sales?",
    answer: "Our Sales Automation creates intelligent funnels that qualify leads and schedule meetings directly into your calendar 24/7, even while you sleep."
  },
  {
    question: "Is my company data secure?",
    answer: "Absolutely. We provide enterprise-grade encryption and ensure all builds are fully GDPR-compliant to keep your data and user privacy protected."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`bg-neutral-950 p-8 rounded-[2rem] border transition-all duration-500 ${isOpen ? 'border-[#00d2ff]/50 shadow-[0_0_30px_rgba(0,210,255,0.1)]' : 'border-neutral-800 hover:border-neutral-700'}`}>
      <button
        onClick={onClick}
        className="w-full flex items-start justify-between text-left group"
      >
        <span className={`text-2xl font-bold transition-colors leading-tight pr-4 ${isOpen ? 'text-[#00d2ff]' : 'text-white group-hover:text-neutral-300'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 mt-1 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#00d2ff] border-[#00d2ff]' : 'bg-white/5 border-neutral-800 group-hover:border-neutral-600'}`}>
          {isOpen ? <Minus className="w-5 h-5 text-black" /> : <Plus className="w-5 h-5 text-neutral-500 group-hover:text-white" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-60 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-48 bg-neutral-50 relative overflow-hidden">
      {/* Subtle light background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,210,255,0.03)_0,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-neutral-200 bg-neutral-50 rounded-full text-[12px] font-bold text-neutral-500 tracking-[0.3em] uppercase">
            Intelligence Query
          </div>
          <h2 className="text-6xl md:text-8xl font-bold text-neutral-900 mb-8 tracking-tighter">
            Frequently Asked <br />
            <span className="bg-gradient-to-r from-[#00d2ff] to-[#34d399] bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-neutral-500 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about the next generation of conversational intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-6 md:space-y-8">
            {FAQ_DATA.slice(0, 3).map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
          <div className="space-y-6 md:space-y-8">
            {FAQ_DATA.slice(3, 6).map((item, index) => (
              <FAQItem
                key={index + 3}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index + 3}
                onClick={() => setOpenIndex(openIndex === index + 3 ? -1 : index + 3)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
