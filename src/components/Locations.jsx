import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Sparkles, Navigation, Calendar, CheckCircle2, Heart, ShieldCheck, Compass } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function Locations({ onOpenBooking }) {
  const branch = clinicInfo.branches[0];

  return (
    <section id="location" className="py-12 sm:py-20 relative bg-slate-50/80 overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-sky-100/50 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            <span>EASILY ACCESSIBLE CLINIC IN SALEM</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900">
            Visit Our <span className="text-gradient">Karuppur Clinic.</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Conveniently located at New Muruga Complex, near the bus stop in Thattanchavadi, Karuppur.
          </p>
        </div>

        {/* Single Branch Master Card + Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Clinic Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-5 sm:p-8 shadow-xl flex flex-col justify-between space-y-5 sm:space-y-6">
            
            <div className="space-y-4 sm:space-y-5">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] sm:text-xs font-extrabold border border-emerald-200 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                    Open Today
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-[11px] sm:text-xs font-extrabold border border-purple-200 flex items-center gap-1">
                    <Heart className="w-3 h-3 text-purple-600 fill-purple-600 shrink-0" />
                    LGBTQ+ friendly
                  </span>
                </div>

                <span className="px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-800 text-xs font-bold border border-amber-200">
                  ★ 4.8 Rating
                </span>
              </div>

              {/* Title & Address */}
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                  Siva Tooth Care
                </h3>
                <div className="text-xs font-bold text-sky-700 mt-0.5">
                  Dental Clinic • Specialist Implants & Invisalign
                </div>

                <div className="mt-3 sm:mt-4 p-3.5 sm:p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{branch.fullAddress}</span>
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-600">
                    <Compass className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span className="font-semibold text-slate-900">Plus Code:</span>
                    <span>{branch.plusCode}</span>
                  </div>
                </div>
              </div>

              {/* Timings */}
              <div className="p-3.5 sm:p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5 sm:space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>{branch.hoursWeek}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{branch.hoursSun}</span>
                </div>
              </div>

              {/* Phone Helpline */}
              <div className="p-3.5 sm:p-4 bg-sky-50 rounded-2xl border border-sky-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 min-w-0">
                  <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                  <div className="min-w-0">
                    <span className="text-slate-500 block text-[10px] font-semibold truncate">Direct Patient Helpline</span>
                    <strong className="text-slate-900 font-extrabold text-xs sm:text-sm truncate">{branch.phone}</strong>
                  </div>
                </div>

                <a
                  href={`tel:${branch.phone}`}
                  className="px-3 sm:px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-all shadow-sm shrink-0 ml-2"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Actions Bottom */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <a
                href={branch.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm active:scale-[0.99]"
              >
                <Navigation className="w-3.5 h-3.5 shrink-0" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>

              <button
                onClick={() => onOpenBooking({ 
                  title: `Consultation at Siva Tooth Care (Karuppur)`,
                  branch: branch.name
                })}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white text-xs font-extrabold shadow-md shadow-sky-600/20 flex items-center justify-center gap-1.5 active:scale-[0.99]"
              >
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span>Book Priority Slot</span>
              </button>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl p-5 sm:p-8 flex flex-col justify-between space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-slate-100 pb-4 mb-2 sm:mb-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Google Maps Location
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
                  Siva Tooth Care, Karuppur, Salem
                </h4>
              </div>

              <a
                href={branch.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white text-xs font-bold shadow-md shadow-sky-600/20 transition-all self-start sm:self-auto w-full sm:w-auto active:scale-[0.99]"
              >
                <Navigation className="w-3.5 h-3.5 shrink-0" />
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
            </div>

            <div className="aspect-[4/3] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 relative shadow-inner">
              <iframe
                title="Siva Tooth Care Karuppur Google Map"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(branch.embedMapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full filter contrast-105"
              ></iframe>
            </div>

            <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 font-medium">
              <span>📍 Landmark: New Muruga Complex, Bus Stop, Thattanchavadi</span>
              <span className="font-semibold text-slate-700">Plus Code: P3HX+W9</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
