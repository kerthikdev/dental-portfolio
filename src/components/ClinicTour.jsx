import React from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export default function ClinicTour() {
  const tourItems = [
    {
      title: "Welcoming Reception & Lounge",
      subtitle: "Clinic Ambience",
      description: "Spacious, hygienic, and calming reception lounge designed to eliminate dental anxiety before your appointment.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
      badge: "Zero Waiting Anxiety"
    },
    {
      title: "Doctor Consultation Cabin",
      subtitle: "Consultation Suite",
      description: "Private consultation suite equipped with 4K digital diagnostic monitors for transparent 3D smile case discussions.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
      badge: "100% Private Evaluation"
    },
    {
      title: "Hi-Tech Surgical Operatory",
      subtitle: "Dr. Kiran Kumar Performing In-Clinic Procedure",
      description: "Hospital-grade ergonomic operatory with 6-tier Class-B sterilized instruments and live intraoral surgical monitoring.",
      image: "/images/dr-kiran-working.jpg",
      badge: "Active Surgical Suite"
    }
  ];

  return (
    <section className="py-12 sm:py-20 relative bg-slate-50/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            <span>INFRASTRUCTURE & ENVIRONMENT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900">
            Salem Clinic Tour & <span className="text-gradient">World-Class Facilities</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Designed to soothe dental anxiety with spacious consultation cabins, ergonomic dental chairs, and strict sterilization protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {tourItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200 hover:border-sky-300 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-48 sm:h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-white/90 text-sky-900 text-[11px] sm:text-xs font-bold shadow-sm backdrop-blur-md">
                    {item.badge}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-1.5 sm:space-y-2">
                <div className="text-xs font-bold text-sky-700">
                  {item.subtitle}
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
