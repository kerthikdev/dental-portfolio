import React, { useState } from 'react';
import { Phone, Calendar, MapPin, Sparkles, Menu, X, Shield, Clock, ChevronRight, Heart } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function Navbar({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Treatments", href: "#treatments" },
    { name: "Invisalign", href: "#invisalign" },
    { name: "AI Reels", href: "#reels" },
    { name: "Aligner Quiz", href: "#aligner-quiz" },
    { name: "0% EMI", href: "#emi-calculator" },
    { name: "Doctors", href: "#doctors" },
    { name: "Technology", href: "#technology" },
    { name: "Reviews", href: "#reviews" },
    { name: "Location", href: "#location" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      {/* Top Notification Bar - Symmetrical & Clean on all screens */}
      <div className="bg-slate-950 text-white text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-9 sm:h-10 flex items-center justify-between gap-2 overflow-hidden">
          
          {/* Left: Appointment Pill */}
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-[10px] sm:text-[11px] border border-emerald-400/30 tracking-wide truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span className="truncate">BOOK AN APPOINTMENT</span>
            </span>
            <span className="hidden md:inline text-slate-400 text-xs">
              • Karuppur, Salem
            </span>
          </div>

          {/* Right: Location & Call Trigger */}
          <div className="flex items-center gap-2 sm:gap-4 text-xs font-semibold shrink-0">
            <a 
              href="#location" 
              className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-sky-300 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Karuppur, Salem</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a 
              href={`tel:${clinicInfo.phoneFormatted}`} 
              className="flex items-center gap-1.5 text-sky-300 hover:text-white transition-colors font-bold text-[11px] sm:text-xs"
            >
              <Phone className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-sky-400 shrink-0" />
              <span>{clinicInfo.phoneFormatted}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left Column: Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group min-w-0">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-sky-600 to-blue-700 p-0.5 shadow-md shadow-sky-600/20 group-hover:shadow-sky-600/40 transition-all duration-300 shrink-0">
            <div className="w-full h-full bg-white rounded-[10px] sm:rounded-[14px] flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C7.58 2 4 4.58 4 8c0 2.22 1.5 4.56 2.5 7.5.8 2.35 1.5 5.5 3 6.5.7.46 1.6.3 2.5-.5.9.8 1.8.96 2.5.5 1.5-1 2.2-4.15 3-6.5C18.5 12.56 20 10.22 20 8c0-3.42-3.58-6-8-6zm0 2c3.31 0 6 1.79 6 4 0 1.67-1.28 3.73-2.12 6.13-.75 2.15-1.35 4.57-2.18 5.2-.51.39-.93.07-1.7-.87L12 18.25l-.12.21c-.77.94-1.19 1.26-1.7.87-.83-.63-1.43-3.05-2.18-5.2C7.28 11.73 6 9.67 6 8c0-2.21 2.69-4 6-4z"/>
              </svg>
            </div>
          </div>
          <div className="min-w-0">
            <div className="font-display font-extrabold text-base sm:text-xl tracking-tight text-slate-900 flex items-center gap-1.5 leading-none truncate">
              <span>Siva Tooth Care</span>
              <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-extrabold border border-emerald-200 uppercase shrink-0">
                ★ 4.8
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium tracking-wide mt-0.5 truncate">
              Karuppur • Salem
            </p>
          </div>
        </a>

        {/* Center Column: Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 px-3 py-1.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs xl:text-sm font-bold text-slate-600 hover:text-sky-600 hover:bg-white px-2.5 xl:px-3 py-1.5 rounded-xl transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Column: CTA Buttons */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          <a
            href={`tel:${clinicInfo.phoneFormatted}`}
            className="h-10 sm:h-11 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 border border-slate-200 flex items-center justify-center gap-1.5 transition-all shadow-sm"
          >
            <Phone className="w-4 h-4 text-sky-600" />
            <span>{clinicInfo.phoneFormatted}</span>
          </a>
          
          <button
            onClick={() => onOpenBooking({ title: "Appointment Booking" })}
            className="h-10 sm:h-11 px-4 sm:px-4.5 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-500 hover:to-blue-500 text-white text-xs font-extrabold shadow-md shadow-sky-600/25 hover:shadow-sky-600/35 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 shadow-sm shrink-0 active:scale-95 transition-transform"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 sm:px-6 py-4 sm:py-5 shadow-2xl animate-fadeIn max-h-[calc(100vh-6rem)] overflow-y-auto">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-slate-700 hover:text-sky-600 py-2.5 px-2 rounded-xl hover:bg-slate-50 border-b border-slate-100 flex items-center justify-between transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href={`tel:${clinicInfo.phoneFormatted}`}
                className="w-full py-3 rounded-xl bg-slate-100 text-center text-sm font-bold text-slate-800 border border-slate-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call Helpline: {clinicInfo.phoneFormatted}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking({ title: "Appointment Booking" });
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 text-white text-sm font-extrabold text-center shadow-lg shadow-sky-600/25 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
