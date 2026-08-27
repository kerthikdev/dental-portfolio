import React from 'react';
import { Award, GraduationCap, ShieldCheck, Cpu, FileCheck, CreditCard, ArrowRight, Sparkles } from 'lucide-react';
import { advantagesData } from '../data/clinicData';

export default function WhyUs({ onOpenBooking }) {
  const iconMap = {
    Award,
    GraduationCap,
    ShieldCheck,
    Cpu,
    FileCheck,
    CreditCard
  };

  return (
    <section id="why-us" className="py-12 sm:py-20 relative bg-white overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-0 w-72 sm:w-80 h-72 sm:h-80 bg-sky-100/40 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            <span>THE SIVA TOOTH CARE ADVANTAGE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900">
            Dentistry Built Around <br className="hidden sm:inline" />
            <span className="text-gradient">Trust, Technology & You.</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Since 2015, we have combined clinical precision with warm, patient-first care to establish Salem's premier standard in dental wellness.
          </p>
        </div>

        {/* 6 Advantages Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {advantagesData.map((adv) => {
            const Icon = iconMap[adv.icon] || Award;
            return (
              <div
                key={adv.number}
                className="bg-slate-50 hover:bg-white rounded-3xl border border-slate-200 hover:border-sky-300 p-5 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group space-y-4 sm:space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-extrabold text-2xl sm:text-3xl text-slate-300 group-hover:text-sky-600 transition-colors">
                      {adv.number}
                    </span>
                    <div className="p-2.5 sm:p-3 rounded-2xl bg-white border border-slate-200 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
                    </div>
                  </div>

                  <div className="mt-3 sm:mt-4 space-y-1.5">
                    <div className="text-xs font-bold text-sky-700">
                      {adv.subtitle}
                    </div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {adv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3.5 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 group-hover:text-sky-600 font-bold transition-colors">
                  <span>Explore Standard</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
