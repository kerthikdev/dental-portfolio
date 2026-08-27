import React from 'react';
import { Phone, MapPin, Sparkles, ShieldCheck, Heart, Award, Star, ArrowUp, Compass } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function Footer({ onOpenBooking }) {
  const branch = clinicInfo.branches[0];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs">
      
      {/* Upper Footer: Main Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          
          {/* Col 1: Brand & Credo (4 cols) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 p-0.5 shadow-md shadow-sky-500/20 shrink-0">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                  <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C7.58 2 4 4.58 4 8c0 2.22 1.5 4.56 2.5 7.5.8 2.35 1.5 5.5 3 6.5.7.46 1.6.3 2.5-.5.9.8 1.8.96 2.5.5 1.5-1 2.2-4.15 3-6.5C18.5 12.56 20 10.22 20 8c0-3.42-3.58-6-8-6zm0 2c3.31 0 6 1.79 6 4 0 1.67-1.28 3.73-2.12 6.13-.75 2.15-1.35 4.57-2.18 5.2-.51.39-.93.07-1.7-.87L12 18.25l-.12.21c-.77.94-1.19 1.26-1.7.87-.83-.63-1.43-3.05-2.18-5.2C7.28 11.73 6 9.67 6 8c0-2.21 2.69-4 6-4z"/>
                  </svg>
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-base sm:text-lg text-white block">Siva Tooth Care</span>
                <span className="text-[11px] text-sky-400 font-semibold">Karuppur, Salem</span>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-xs">
              Salem's premier center for advanced dental implantology, painless wisdom tooth removal, Invisalign clear aligners, and aesthetic smile rehabilitation. Led by <strong className="text-white">Dr. Kiran Kumar BDS., MDS</strong>.
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" /> Hospital Grade Sterilization
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-semibold flex items-center gap-1">
                <Award className="w-3 h-3 text-sky-400 shrink-0" /> MDS Specialists
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-semibold flex items-center gap-1">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0" /> 4.8 Google Rating
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-purple-300 text-[10px] font-semibold flex items-center gap-1">
                <Heart className="w-3 h-3 text-purple-400 fill-purple-400 shrink-0" /> LGBTQ+ Friendly
              </span>
            </div>

            <div className="pt-2 text-white font-semibold flex items-center gap-3">
              <a href={`tel:${clinicInfo.phoneFormatted}`} className="hover:text-sky-400 transition-colors flex items-center gap-1.5 font-bold">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" /> {clinicInfo.phoneFormatted}
              </a>
            </div>
          </div>

          {/* Col 2: Specialist Treatments (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider text-sky-400">
              Specialist Treatments
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#treatments" className="hover:text-sky-300 transition-colors block py-0.5">
                  Full Mouth Dental Implants (All-on-4/6)
                </a>
              </li>
              <li>
                <a href="#invisalign" className="hover:text-sky-300 transition-colors block py-0.5">
                  Invisalign Clear Aligners
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-sky-300 transition-colors block py-0.5">
                  Single & Multi-Tooth Implants
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-sky-300 transition-colors block py-0.5">
                  Hi-Tech Root Canal Treatment
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-sky-300 transition-colors block py-0.5">
                  Diode Laser Cosmetic Dentistry
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-sky-300 transition-colors block py-0.5">
                  3D CBCT Bone Planning & DSD
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Patient Center (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider text-sky-400">
              Patient Center
            </h4>
            <ul className="space-y-2">
              <li><a href="#doctors" className="hover:text-sky-300 transition-colors block py-0.5">Meet the Doctors</a></li>
              <li><a href="#why-us" className="hover:text-sky-300 transition-colors block py-0.5">Why Choose Us</a></li>
              <li><a href="#reels" className="hover:text-sky-300 transition-colors block py-0.5">AI Patient Reels</a></li>
              <li><a href="#technology" className="hover:text-sky-300 transition-colors block py-0.5">Clinic Infrastructure</a></li>
              <li><a href="#reviews" className="hover:text-sky-300 transition-colors block py-0.5">Patient Reviews (4.8★)</a></li>
              <li><a href="#location" className="hover:text-sky-300 transition-colors block py-0.5">Karuppur Location</a></li>
            </ul>
          </div>

          {/* Col 4: Karuppur Clinic Details (3 cols) */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider text-sky-400">
              Our Clinic Location
            </h4>

            {/* Single Clinic Card */}
            <div className="p-4 bg-slate-800/90 rounded-2xl border border-slate-700 space-y-2">
              <div className="flex items-center justify-between text-white font-semibold">
                <span>Siva Tooth Care</span>
                <span className="text-[10px] text-sky-400 bg-sky-950 px-1.5 py-0.5 rounded font-bold">Karuppur</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                {branch.fullAddress}
              </p>
              <div className="text-[10px] text-slate-400 font-medium">
                Plus Code: {branch.plusCode}
              </div>
              <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-[11px]">
                <span className="text-sky-300 font-bold">{branch.phone}</span>
                <a href={branch.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white underline">Directions</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Compliance */}
      <div className="border-t border-slate-800 bg-slate-950 py-5 sm:py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[10px] sm:text-[11px]">
          <div>
            © 2026 Siva Tooth Care. All rights reserved. Specialist Dental Clinic in Karuppur, Salem.
            <div className="text-slate-500 mt-0.5">
              Full Mouth Dental Implants • Invisalign Clear Aligners • Single-Visit Root Canals
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              NABH Safety Standards
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span>Sterilization Compliant</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors active:scale-95"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
