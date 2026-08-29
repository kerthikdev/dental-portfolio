import React from 'react';
import { Award, Users, Star, ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';
import { clinicInfo } from '../data/clinicData';

export default function TrustBadges() {
  const stats = [
    {
      icon: Award,
      value: "10+ Years",
      label: "Clinical Leadership",
      sub: "Salem's Trusted Clinic Since 2015",
      iconBg: "bg-sky-50 text-sky-600 border-sky-200"
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Smiles Restored",
      sub: "Full Mouth & Aligner Cases",
      iconBg: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      icon: Star,
      value: "4.9 / 5.0",
      label: "Google Rating",
      sub: "850+ Verified Patient Reviews",
      iconBg: "bg-amber-50 text-amber-600 border-amber-200"
    },
    {
      icon: ShieldCheck,
      value: "6-Tier",
      label: "Class-B Sterilization",
      sub: "Hospital-Grade Hygiene Protocol",
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200"
    }
  ];

  return (
    <section className="relative z-10 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-8 shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="p-3 sm:p-4 rounded-2xl bg-slate-50/70 border border-slate-100 lg:bg-transparent lg:border-none flex items-center sm:items-start gap-4 transition-all"
              >
                <div className={`p-3 rounded-2xl border ${item.iconBg} shadow-sm shrink-0`}>
                  <Icon className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5 truncate">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 font-medium truncate">
                    {item.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
