import React, { useState } from 'react';
import { CreditCard, CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Calculator, Phone } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function EMICalculator({ onOpenBooking }) {
  const treatments = [
    { name: "Full Mouth Dental Implants (All-on-4 / All-on-6)", estimatedAmount: 180000 },
    { name: "Invisalign Clear Aligners (Full Arch)", estimatedAmount: 120000 },
    { name: "Single Dental Implant with Zirconia Crown", estimatedAmount: 32000 },
    { name: "Aesthetic Smile Makeover & Ceramic Veneers", estimatedAmount: 45000 }
  ];

  const tenures = [3, 6, 9, 12, 18, 24];

  const [selectedTreatment, setSelectedTreatment] = useState(treatments[0]);
  const [selectedTenure, setSelectedTenure] = useState(12);

  const monthlyEMI = Math.round(selectedTreatment.estimatedAmount / selectedTenure);

  return (
    <section id="emi-calculator" className="py-12 sm:py-20 relative bg-slate-50/80 overflow-hidden">
      
      {/* Ambient background */}
      <div className="absolute top-1/2 left-1/3 w-72 sm:w-80 h-72 sm:h-80 bg-amber-100/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <CreditCard className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>EASY 0% INTEREST EMI FINANCING</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900">
            World-Class Smiles. <span className="text-gradient-gold">Zero Financial Stress.</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Get your dream smile today with hassle-free, zero-interest monthly EMI plans from 3 to 24 months. Transparent pricing with instant paperless approval at our Salem clinics.
          </p>
        </div>

        {/* EMI Calculator Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center max-w-5xl mx-auto">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-5 sm:space-y-6">
            
            {/* Select Treatment */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                1. Select Desired Treatment:
              </label>
              <div className="space-y-2">
                {treatments.map((t) => (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => setSelectedTreatment(t)}
                    className={`w-full p-3 sm:p-3.5 rounded-2xl text-left text-xs sm:text-sm border transition-all flex items-center justify-between gap-2 min-h-[44px] active:scale-[0.99] ${
                      selectedTreatment.name === t.name
                        ? 'bg-amber-50 border-amber-400 text-amber-950 font-bold shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <span className="min-w-0">{t.name}</span>
                    <span className="text-xs font-extrabold text-amber-700 shrink-0 ml-2">
                      ₹{t.estimatedAmount.toLocaleString('en-IN')}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Select Tenure */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                2. Choose Flexible Tenure (Months):
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {tenures.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setSelectedTenure(m)}
                    className={`py-2.5 sm:py-3 px-3 rounded-2xl text-center text-xs font-bold border transition-all min-h-[44px] active:scale-95 ${
                      selectedTenure === m
                        ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md shadow-amber-500/20 font-extrabold'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    {m} Mos
                  </button>
                ))}
              </div>
            </div>

            {/* Features check list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Interest (0% EMI)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>No Hidden Charges</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant Digital Approval</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Major Cards & NBFCs</span>
              </div>
            </div>
          </div>

          {/* EMI Result Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 p-5 sm:p-8 rounded-3xl text-white shadow-2xl space-y-5 sm:space-y-6 text-center lg:text-left relative">
            <div className="flex items-center justify-between lg:block">
              <span className="px-2.5 py-1 rounded-full bg-black/20 text-white text-[10px] font-bold border border-white/30 uppercase inline-block">
                0% APR Guarantee
              </span>
            </div>

            <div>
              <div className="text-xs font-bold text-amber-100 uppercase tracking-wide">Estimated Monthly Installment</div>
              <div className="text-3xl sm:text-5xl font-display font-extrabold text-white mt-1.5 sm:mt-2">
                ₹{monthlyEMI.toLocaleString('en-IN')}
                <span className="text-base font-semibold text-amber-200">/mo</span>
              </div>
              <div className="text-xs text-amber-100 font-bold mt-1">
                for {selectedTenure} months • 0% Extra Interest
              </div>
            </div>

            <div className="space-y-2 p-3.5 sm:p-4 bg-black/15 rounded-2xl border border-white/20 text-xs text-amber-50">
              <div className="flex justify-between items-center gap-2">
                <span className="text-amber-200 shrink-0">Treatment:</span>
                <span className="font-bold text-white truncate text-right">{selectedTreatment.name}</span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-amber-200 shrink-0">Total Amount:</span>
                <span className="font-bold text-white">₹{selectedTreatment.estimatedAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-amber-200 shrink-0">Processing Fee:</span>
                <span className="font-bold text-white">₹0 (Zero)</span>
              </div>
            </div>

            <div className="space-y-2 pt-1 sm:pt-2">
              <button
                onClick={() => onOpenBooking({ 
                  title: `0% EMI Plan for ${selectedTreatment.name}`,
                  notes: `Tenure: ${selectedTenure} months, Estimated EMI: ₹${monthlyEMI}/mo`
                })}
                className="w-full py-3.5 px-6 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-sm shadow-xl transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Apply for Instant 0% EMI</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <div className="text-[10px] sm:text-[11px] text-amber-100 text-center font-medium">
                *Subject to standard eligibility. Instant verification at Salem clinics.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
