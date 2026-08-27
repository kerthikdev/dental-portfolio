import React from 'react';
import { Cpu, Sparkles, CheckCircle2, ShieldCheck, Zap, Layers, RefreshCw } from 'lucide-react';
import { technologyData } from '../data/clinicData';

export default function Technology({ onOpenBooking }) {
  return (
    <section id="technology" className="py-12 sm:py-20 relative bg-white overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/2 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-sky-100/40 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            <span>PRECISION CLINICAL INFRASTRUCTURE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900">
            Modern Technology. <br className="hidden sm:inline" />
            <span className="text-gradient">Thoughtful Dentistry.</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            At Siva Tooth Care, we invest in advanced digital diagnostics and painless tools so your treatment is faster, gentler, and permanently predictable.
          </p>
        </div>

        {/* 6 Technology Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {technologyData.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200 hover:border-sky-300 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                <img
                  src={tech.image}
                  alt={tech.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-3 left-3 sm:left-4 right-3 sm:right-4">
                  <span className="px-2.5 py-1 rounded-md bg-white/95 text-sky-900 text-[10px] font-extrabold tracking-wider uppercase shadow-sm">
                    {tech.badge}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-bold text-sky-700">
                    {tech.subtitle}
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 mt-1 group-hover:text-sky-600 transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <div className="p-3 sm:p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Patient Advantage:</strong> {tech.benefit}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
