import { useState, type FC, type FormEvent } from 'react';
import { ChevronRight, Globe, Mail, MapPin, Rocket } from 'lucide-react';

export const StrategyConsultationSection: FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div id="audit-form" className="min-h-0 sm:min-h-screen bg-slate-200 font-sans transition-colors duration-500">
      <section className="py-10 sm:py-16 md:py-24 px-4 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-[1800px] mx-auto bg-white overflow-hidden flex flex-col lg:flex-row shadow-xl sm:shadow-2xl rounded-2xl sm:rounded-[3rem] lg:rounded-[4rem] border border-slate-200">

          {/* Left Side: Content — desktop only */}
          <div className="hidden lg:flex lg:w-[58%] bg-slate-50 p-5 sm:p-10 md:p-16 lg:p-20 flex-col justify-center relative overflow-hidden lg:border-r border-slate-200 text-left items-stretch">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse pointer-events-none"></div>

            <div className="relative z-10 w-full flex flex-col items-start">
              <div className="inline-block px-3 sm:px-5 py-1 sm:py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 text-[10px] sm:text-sm font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-8">
                Enterprise AI Strategy
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-[1.15] mb-3 sm:mb-10 text-slate-900 tracking-tighter">
                Ready to Quantify{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Your AI Opportunity?</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-2xl md:text-3xl mb-6 sm:mb-14 leading-relaxed opacity-90 max-w-xl">
                Stop experimenting and start scaling. Let us help you identify exactly where AI can cut costs and drive revenue.
              </p>

              <div className="space-y-5 sm:space-y-10 w-full max-w-md lg:max-w-none">
                <div className="flex items-start space-x-3 sm:space-x-6 group justify-start text-left">
                  <div className="p-2.5 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm group-hover:bg-indigo-50 transition-all shrink-0">
                    <Globe className="w-5 h-5 sm:w-8 sm:h-8 text-indigo-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-[0.2em]">Website</p>
                    <a href="https://evokeaisolutions.com/" className="text-base sm:text-2xl text-slate-900 hover:text-indigo-600 transition-colors tracking-tight underline decoration-slate-200 underline-offset-4 sm:underline-offset-8 break-all">www.evokeaisolutions.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-6 group justify-start text-left">
                  <div className="p-2.5 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm group-hover:bg-indigo-50 transition-all shrink-0">
                    <Mail className="w-5 h-5 sm:w-8 sm:h-8 text-indigo-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-[0.2em]">Email</p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=help@evokeaisolutions.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-2xl text-slate-900 hover:text-indigo-600 transition-colors tracking-tight underline decoration-slate-200 underline-offset-4 sm:underline-offset-8 break-all"
                    >
                      help@evokeaisolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm group-hover:bg-indigo-50 transition-all">
                    <MapPin className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-[0.2em]">Serving</p>
                    <p className="text-2xl text-slate-900 tracking-tight">United States | Canada | Netherlands</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-200 relative z-10">
              <p className="text-sm tracking-wide text-slate-400 uppercase">
                Evoke AI — <span className="text-slate-900">Intelligence Engineered for Enterprise.</span>
              </p>
            </div>
          </div>

          {/* Right Side: Form Section */}
          <div className="w-full lg:w-[42%] p-5 sm:p-10 md:p-16 lg:p-20 relative overflow-hidden flex flex-col justify-center bg-white">
            {!isSubmitted ? (
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-4xl md:text-5xl text-slate-900 mb-2 sm:mb-4 font-black tracking-tighter">
                  Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Consultation</span>
                </h2>
                <p className="text-slate-500 mb-6 sm:mb-10 text-sm sm:text-xl font-medium leading-relaxed">
                  Fill out the details below for a comprehensive AI Strategy Consultation.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                    <div className="space-y-1.5 sm:space-y-2">
                      <label className="block text-[10px] sm:text-sm text-slate-900 uppercase tracking-[0.2em] px-1">First Name</label>
                      <input
                        type="text"
                        placeholder="Jane"
                        required
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl text-slate-900 text-sm sm:text-lg placeholder:text-slate-300 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all outline-none font-bold shadow-sm"
                      />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <label className="block text-[10px] sm:text-sm text-slate-900 uppercase tracking-[0.2em] px-1">Last Name</label>
                      <input
                        type="text"
                        placeholder="Smith"
                        required
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl text-slate-900 text-sm sm:text-lg placeholder:text-slate-300 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all outline-none font-bold shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="block text-[10px] sm:text-sm text-slate-900 uppercase tracking-[0.2em] px-1">Organization Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Evoke AI"
                      required
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl text-slate-900 text-sm sm:text-lg placeholder:text-slate-300 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all outline-none font-bold shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="block text-[10px] sm:text-sm text-slate-900 uppercase tracking-[0.2em] px-1">Business Email</label>
                    <input
                      type="email"
                      placeholder="jane@enterprise.com"
                      required
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl text-slate-900 text-sm sm:text-lg placeholder:text-slate-300 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all outline-none font-bold shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="block text-[10px] sm:text-sm text-slate-900 uppercase tracking-[0.2em] px-1">Consultancy Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="E.g.write here your requirements..."
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl text-slate-900 text-sm sm:text-lg placeholder:text-slate-300 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all outline-none font-bold resize-none shadow-sm"
                    ></textarea>
                  </div>

                  <div className="pt-2 sm:pt-6">
                    <button
                      type="submit"
                      className="w-full py-3.5 sm:py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base sm:text-2xl font-black rounded-xl sm:rounded-[2rem] transition-all hover:shadow-2xl hover:shadow-blue-600/20 active:scale-[0.98] flex items-center justify-center gap-2 sm:gap-4 group"
                    >
                      Request Final Audit
                      <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-8 sm:py-12 relative z-10">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-green-500/10 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-8 border border-green-500/20">
                  <Rocket className="w-7 h-7 sm:w-10 sm:h-10 text-green-600" />
                </div>
                <h2 className="text-xl sm:text-3xl font-black text-slate-900 mb-2 sm:mb-4 tracking-tight">Strategy Logged!</h2>
                <p className="text-slate-500 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-10 max-w-sm font-medium">
                  Our specialists are reviewing your organization&apos;s requirements. We&apos;ll reach out within 24 hours with a custom AI roadmap.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white border border-slate-200 text-slate-600 text-sm sm:text-base font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                >
                  Edit details
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
