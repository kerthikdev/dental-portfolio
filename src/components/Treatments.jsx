import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Anchor, ShieldAlert, Cpu, HeartPulse, Scissors, Info, Clock, CreditCard } from 'lucide-react';
import { flagshipTreatments, allTreatments } from '../data/clinicData';

export default function Treatments({ onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Restorative', 'Endodontics', 'Aesthetic', 'Cosmetic', 'General', 'Surgical'];

  const filteredTreatments = selectedCategory === 'All'
    ? allTreatments
    : allTreatments.filter(t => t.category === selectedCategory);

  return (
    <section id="treatments" className="py-12 sm:py-20 relative bg-slate-50/70 overflow-hidden">
      
      {/* Mid CTA Highlight Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20">
        <div className="relative bg-gradient-to-r from-sky-100/90 via-blue-50 to-indigo-50 rounded-3xl p-5 sm:p-10 border border-sky-200 shadow-lg overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-8 space-y-2.5 sm:space-y-3 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-200/80 text-sky-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-sky-300">
                <Sparkles className="w-3.5 h-3.5 text-sky-600 shrink-0" /> 3D Digital Smile Simulator
              </span>
              <h3 className="text-xl sm:text-3xl font-display font-extrabold text-slate-900">
                Want to see what your smile will look like?
              </h3>
              <p className="text-xs sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                Book your complimentary clinical consultation with 3D intraoral digital smile scan in Salem at <strong className="text-slate-900">Siva Tooth Care</strong>. See your simulated final bite and teeth alignment in minutes.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center gap-2.5 sm:gap-3">
              <button
                onClick={() => onOpenBooking({ title: "Clinical Consultation Booking" })}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-sky-600/20 transition-all text-center active:scale-[0.99]"
              >
                Book an Appointment
              </button>

              <div className="text-center text-[10px] sm:text-[11px] text-slate-500 font-semibold">
                Direct WhatsApp Confirmation • Zero Waiting • 0% EMI
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            SPECIALIST TREATMENTS
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900">
            Two Treatments. <span className="text-gradient">One Goal: Your Best Smile.</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            At Siva Tooth Care, we specialize in high-impact restorative and cosmetic treatments that completely transform oral function and confidence.
          </p>
        </div>

        {/* 2 Flagship Treatments: Full Mouth Implants & Invisalign */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-14 sm:mb-20">
          {flagshipTreatments.map((treatment) => (
            <div
              key={treatment.id}
              id={treatment.id === 'invisalign' ? 'invisalign' : 'implants'}
              className="relative bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Banner Image */}
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-wrap gap-2">
                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-white/95 text-sky-900 font-extrabold text-[11px] sm:text-xs border border-white/40 shadow-sm backdrop-blur-md">
                    {treatment.tag}
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-extrabold text-[11px] sm:text-xs shadow-sm">
                    {treatment.subtag}
                  </span>
                </div>
              </div>

              {/* Treatment Body Content */}
              <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between space-y-5 sm:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-3xl font-display font-bold text-slate-900 mb-2 sm:mb-3">
                    {treatment.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 sm:mb-6">
                    {treatment.shortDesc}
                  </p>

                  {/* Key Highlights / Features */}
                  <div className="space-y-2.5 sm:space-y-3 bg-slate-50 p-3.5 sm:p-5 rounded-2xl border border-slate-200/80">
                    <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
                      Key Clinical Advantages:
                    </div>
                    {treatment.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <button
                    onClick={() => onOpenBooking({ title: treatment.title })}
                    className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-500 hover:to-blue-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-sky-600/20 transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
                  >
                    <span>{treatment.id === 'implants' ? 'Book Implant Consultation' : 'Check Invisalign Options'}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>

                  <a
                    href={treatment.id === 'invisalign' ? '#aligner-quiz' : '#emi-calculator'}
                    className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200 transition-all text-center"
                  >
                    {treatment.id === 'invisalign' ? 'Aligner Suitability Quiz' : '0% EMI Calculator'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comprehensive Multi-Specialty Care Grid */}
        <div className="mt-10 sm:mt-16 space-y-6 sm:space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100 border border-sky-200 px-3 py-1 rounded-full">
                COMPREHENSIVE MULTI-SPECIALTY CARE
              </span>
              <h3 className="text-xl sm:text-3xl font-display font-extrabold text-slate-900 mt-2">
                Additional Advanced Dental Treatments
              </h3>
            </div>

            {/* Category Filter Pills (Swipeable on mobile) */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-sky-600 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Specialty Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredTreatments.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200 hover:border-sky-300 p-5 sm:p-6 flex flex-col justify-between space-y-4 sm:space-y-5 transition-all shadow-sm hover:shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-700 text-[10px] font-extrabold uppercase tracking-wider border border-sky-200">
                      {item.category}
                    </span>
                    {item.popular && (
                      <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 text-[10px] font-bold border border-amber-200">
                        Popular
                      </span>
                    )}
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-3 sm:mt-4 space-y-1.5">
                    {item.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0"></div>
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onOpenBooking({ title: item.title })}
                    className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Book for {item.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </button>

                  <span className="text-[11px] text-slate-400 font-semibold">Salem Clinics</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
