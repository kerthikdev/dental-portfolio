import React from 'react';
import { Phone, MessageCircle, Sparkles, Calendar } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function FloatingActions({ onOpenBooking }) {
  return (
    <>
      {/* Floating Desktop Quick Trigger Widget (Bottom Right) */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-auto">
        
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${clinicInfo.whatsappNumber}?text=Hi%20Siva%20Tooth%20Care%20Karuppur,%20I%20would%20like%20to%20inquire%20about%20a%20Free%203D%20Digital%20Scan%20and%20Consultation.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-2xl shadow-emerald-600/30 hover:scale-105 transition-all duration-300 border border-emerald-400/40"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">
            WhatsApp Desk
          </span>
        </a>

        {/* Primary CTA: Book Free 3D Scan */}
        <button
          onClick={() => onOpenBooking({ title: "Free 3D Scan & Specialist Consultation" })}
          className="flex items-center gap-2.5 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-500 hover:to-blue-500 text-white font-extrabold text-xs tracking-wide shadow-2xl shadow-sky-600/40 hover:scale-105 transition-all duration-300 border border-sky-400/40 uppercase"
        >
          <Sparkles className="w-4 h-4 text-sky-200 animate-pulse" />
          <span>Claim Free 3D Scan</span>
        </button>
      </div>

      {/* Floating Sticky Mobile Bottom Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 pt-2.5 px-3 pb-safe flex items-center gap-2 shadow-[0_-8px_25px_rgba(0,0,0,0.08)]">
        <a
          href={`tel:${clinicInfo.phoneFormatted}`}
          className="flex-1 py-2.5 px-2 rounded-xl bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-300 active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-sky-600 shrink-0" />
          <span className="truncate">{clinicInfo.phoneFormatted}</span>
        </a>

        <a
          href={`https://wa.me/${clinicInfo.whatsappNumber}?text=Hi%20Siva%20Tooth%20Care,%20I%20want%20to%20book%20a%20Free%203D%20Scan%20Consultation.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center border border-emerald-400/40 active:scale-95 transition-transform shrink-0 shadow-md"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
        </a>

        <button
          onClick={() => onOpenBooking({ title: "Free 3D Scan & Consultation" })}
          className="flex-1 py-2.5 px-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-sky-600/30 active:scale-95 transition-transform"
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Book Free Scan</span>
        </button>
      </div>
    </>
  );
}
