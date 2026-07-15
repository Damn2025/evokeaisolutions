import React, { useState, useMemo } from 'react';
import {
  ChevronDown,
  ShieldCheck,
  Zap,
  BarChart3,

  HelpCircle,
  FileSearch,
  Settings2,
  ArrowRight
} from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  icon?: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
  searchTerm: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, icon, isOpen, onClick, searchTerm }) => {
  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase()
            ? <span key={`h-${i}`} className="bg-blue-500/40 text-white rounded-sm px-0.5">{part}</span>
            : <span key={`t-${i}`}>{part}</span>
        )}
      </span>
    );
  };

  return (
    <div className="border-b border-white/5 last:border-0 transition-all duration-200">
      <button
        onClick={onClick}
        className="w-full py-5 sm:py-10 flex items-start justify-between text-left focus:outline-none group"
      >
        <div className="flex gap-3 sm:gap-6 min-w-0 pr-3">
          {icon && React.isValidElement(icon) && (
            <div className={`mt-1 shrink-0 transition-colors ${isOpen ? 'text-blue-400' : 'text-white/40 group-hover:text-white/80'}`}>
              {React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 20 })}
            </div>
          )}
          <span className="text-base sm:text-2xl md:text-3xl font-black tracking-tight text-white">
            {highlightText(question, searchTerm)}
          </span>
        </div>
        <ChevronDown
          className={`w-5 h-5 sm:w-8 sm:h-8 mt-1 shrink-0 text-white/20 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-400' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 pb-6 sm:pb-12' : 'max-h-0 opacity-0'}`}
      >
        <div className="pl-8 sm:pl-14 text-white/90 leading-relaxed text-sm sm:text-xl space-y-3 sm:space-y-5 font-medium max-w-5xl">
          {answer}
        </div>
      </div>
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const [searchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = useMemo(() => [
    {
      icon: <Zap size={20} />,
      question: "How does Evoke AI help organizations move beyond the 'pilot phase'?",
      answer: (
        <>
          <p>Many organizations get stuck in the experiment phase because they lack a clear roadmap for integration. We provide strategic consulting that bridges the gap between AI technology and measurable business value.</p>
          <p>Our approach focuses on engineering business outcomes—driving efficiency, reducing costs, and accelerating growth—rather than just building technology for technology's sake.</p>
        </>
      )
    },
    {
      icon: <FileSearch size={20} />,
      question: "What is included in an Enterprise AI Readiness Assessment?",
      answer: (
        <div className="space-y-2">
          <p>Our assessment involves a deep dive into three critical areas to ensure your organization is prepared for scale:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Data Audits:</strong> Evaluating the structure, quality, and security of your current data.</li>
            <li><strong>Use-Case Prioritization:</strong> Identifying operational bottlenecks with the highest immediate ROI.</li>
            <li><strong>Financial Modeling:</strong> Building a clear cost-benefit analysis and adoption roadmap.</li>
          </ul>
        </div>
      )
    },
    {
      icon: <Settings2 size={20} />,
      question: "Can your AI solutions integrate with existing legacy ERP and CRM systems?",
      answer: "Yes. Our Legacy Modernization service is designed to enhance your existing ecosystem. We seamlessly embed AI layers into Salesforce, SAP, HubSpot, Shopify, and custom-built legacy platforms using secure, cloud-native engineering."
    },
    {
      icon: <ShieldCheck size={20} />,
      question: "How do you ensure proprietary company data remains secure and private?",
      answer: "We prioritize enterprise-grade security using zero-trust architectures. Through Custom RAG (Retrieval-Augmented Generation) systems, we ensure your proprietary data is never used to train public models, keeping your internal knowledge base strictly private and secure."
    },
    {
      icon: <BarChart3 size={20} />,
      question: "What is the methodology for a successful end-to-end implementation?",
      answer: (
        <div className="space-y-2">
          <p>We follow a structured 4-phase methodology to minimize risk:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong className="text-blue-400">Discovery:</strong> Blueprinting technical solutions and success KPIs.</li>
            <li><strong className="text-blue-400">MVP & Pilot:</strong> Validating feasibility in a controlled environment.</li>
            <li><strong className="text-blue-400">Integration:</strong> Connecting AI to live systems and secure data pipelines.</li>
            <li><strong className="text-blue-400">Scaling:</strong> Managing change and continuous model optimization.</li>
          </ol>
        </div>
      )
    }
  ], []);

  const filteredFaqs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (typeof faq.answer === 'string' && faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div id="FAQs" className="bg-[#0B1121] font-sans antialiased text-white py-12 sm:py-24 relative overflow-hidden">
      {/* Background patterns matching methodology */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header & Search Section - Single Column Flow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-8 sm:mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 px-3 sm:px-6 py-1 sm:py-1.5 rounded-full border border-blue-500/20 shadow-sm mb-4 sm:mb-8">
          <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-blue-400 font-mono text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.4em] uppercase font-black">
            Intelligence Briefing
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-3 sm:mb-6 tracking-tighter">
          How can we help you?
        </h2>
        <h3 className="text-[10px] sm:text-sm font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white">
          {searchTerm ? `Search Results (${filteredFaqs.length})` : "Frequently Asked Questions"}
        </h3>
      </div>

      {/* Main Content Area - Single Vertical Page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-base sm:text-2xl relative z-10">
        {/* FAQ list container */}

        {filteredFaqs.length > 0 ? (
          <div className="bg-white/5 rounded-2xl sm:rounded-[3rem] overflow-hidden border border-white/10 p-4 sm:p-6 md:p-12 shadow-2xl backdrop-blur-3xl">
            <div>
              {filteredFaqs.map((item, index) => (
                <FAQItem
                  key={index}
                  icon={item.icon}
                  question={item.question}
                  answer={item.answer}
                  searchTerm={searchTerm}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-white/5 rounded-3xl border-2 border-dashed border-white/10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 text-white/20 mb-4">
              <HelpCircle size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No results found</h3>
            <p className="text-white/80 max-w-sm mx-auto mb-8 font-medium">
              We couldn't find an answer for "{searchTerm}". Our implementation specialists are available for guidance.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=damnart.ai.guladab@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              Contact Specialists <ArrowRight size={18} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQSection;
