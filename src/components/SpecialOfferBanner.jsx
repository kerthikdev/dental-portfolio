import React from 'react';
import { Sparkles, Phone, ShieldCheck, CheckCircle2, ArrowRight, Calendar, Heart } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function SpecialOfferBanner({ onOpenBooking }) {
  return (
    <section className="py-10 sm:py-16 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Big High-Impact Banner */}
        <div className="relative bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 rounded-3xl p-5 sm:p-12 shadow-2xl overflow-hidden text-center text-white space-y-5 sm:space-y-6">
          
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative max-w-3xl mx-auto space-y-3.5 sm:space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-wider shadow-sm backdrop-blur-md">
                <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-sky-200 shrink-0" />
                <span>FREE CONSULTATION + 3D DIGITAL SCAN</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-purple-500/30 border border-purple-300/40 text-purple-100 text-[10px] sm:text-xs font-bold shadow-sm backdrop-blur-md">
                <Heart className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-purple-300 text-purple-300 shrink-0" />
                <span>LGBTQ+ Friendly</span>
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight">
              Ready to Take the Next Step <br className="hidden sm:inline" />
              Toward Your Perfect Smile?
            </h2>

            <p className="text-sky-100 text-xs sm:text-base leading-relaxed">
              Book your free private consultation with <strong className="text-white font-bold">Dr. Kiran Kumar</strong> at Siva Tooth Care, Karuppur. Receive your complimentary 3D digital smile scan and explore flexible 0% interest EMI options.
            </p>

            {/* Micro Highlights */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 pt-2 text-[11px] sm:text-xs text-sky-100 font-bold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-sky-300 shrink-0" /> Complimentary 3D Scan
              </span>
              <span className="text-sky-300/60 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-sky-300 shrink-0" /> Free Specialist Consultation
              </span>
              <span className="text-sky-300/60 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-sky-300 shrink-0" /> 0% Interest EMI Available
              </span>
            </div>

            {/* Buttons */}
            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => onOpenBooking({ title: "Special Offer Free Scan & Consult" })}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 font-extrabold text-xs sm:text-sm shadow-xl transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Claim Free Scan & Consult</span>
                <ArrowRight className="w-4 h-4 text-slate-900 shrink-0" />
              </button>

              <a
                href={`tel:${clinicInfo.phoneFormatted}`}
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-black/20 hover:bg-black/30 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-sky-300 shrink-0" />
                <span>Call Helpline: {clinicInfo.phoneFormatted}</span>
              </a>
            </div>

            {/* Emergency Prompt Bar */}
            <div className="pt-6 sm:pt-8 border-t border-white/20 text-xs text-sky-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div>
                <span className="font-bold text-white">Need Prompt Dental Care or Same-Day Tooth Replacement?</span>
                <p className="text-sky-200 text-[10px] sm:text-[11px] mt-0.5 font-medium">Call our direct patient desk at {clinicInfo.phoneFormatted} or visit Karuppur clinic.</p>
              </div>

              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-center">
                <a
                  href={`tel:${clinicInfo.phoneFormatted}`}
                  className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl bg-white text-slate-900 font-extrabold text-xs hover:bg-sky-50 transition-all shadow-sm text-center"
                >
                  Call Helpline
                </a>
                <button
                  onClick={() => onOpenBooking({ title: "Priority Slot Booking" })}
                  className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl bg-black/30 text-white font-bold text-xs hover:bg-black/40 border border-white/20 transition-all text-center"
                >
                  Book Priority Slot
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
