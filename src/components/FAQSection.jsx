import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { faqData } from '../data/clinicData';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-12 sm:py-20 relative bg-slate-50/80 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            <span>PATIENT QUESTIONS & ANSWERS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Everything you need to know about our treatments, 3D digital scans, and flexible 0% interest EMI options in Salem at Siva Tooth Care.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 text-slate-900 hover:text-sky-600 transition-colors"
                >
                  <span className="font-bold text-xs sm:text-base">{item.q}</span>
                  <ChevronDown className={`w-4 sm:w-5 h-4 sm:h-5 text-sky-600 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 sm:pt-4 bg-slate-50/60">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
