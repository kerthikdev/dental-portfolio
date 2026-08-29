import React, { useState } from 'react';
import { Sparkles, Award, GraduationCap, CheckCircle2, ArrowRight, UserCheck, Calendar, X, ShieldCheck, Heart } from 'lucide-react';
import { doctorsData, clinicInfo } from '../data/clinicData';

export default function Doctors({ onOpenBooking }) {
  const [activeDoctorModal, setActiveDoctorModal] = useState(null);

  return (
    <section id="doctors" className="py-12 sm:py-20 relative bg-slate-50/70 overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/3 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-sky-100/50 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            <span>MEET YOUR DENTAL SPECIALIST</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900">
            Meet the Doctor <br className="hidden sm:inline" />
            <span className="text-gradient">Behind the Smiles.</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Chief Dental Surgeon with 10+ years of clinical experience, specialist in painless Root Canal Treatment (RCT) and gentle dental care at Siva Tooth Care, Karuppur.
          </p>
        </div>

        {/* Doctor Showcase Card (Centered) */}
        <div className="max-w-3xl mx-auto">
          {doctorsData.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl border border-slate-200 hover:border-sky-300 overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Doctor Header Banner */}
              <div className="p-5 sm:p-8 bg-gradient-to-br from-sky-50 via-slate-50 to-white border-b border-slate-100 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                <div className="relative shrink-0">
                  <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-3xl overflow-hidden border-2 border-sky-500/40 shadow-md bg-slate-100 shrink-0">
                    <img
                      src={doc.avatar}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 p-1.5 rounded-xl bg-sky-600 text-white shadow-md">
                    <Award className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-2 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-[10px] font-bold">
                      {doc.experience}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-[10px] font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                      <span>Karuppur</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-100 border border-purple-200 text-purple-800 text-[10px] font-bold">
                      LGBTQ+ Friendly
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-display font-extrabold text-slate-900 truncate">
                    {doc.name}
                  </h3>
                  
                  <div className="text-xs sm:text-sm font-bold text-sky-700">
                    {doc.role} • {doc.degrees}
                  </div>
                  
                  <p className="text-xs text-slate-500 font-medium truncate">
                    Siva Tooth Care, Karuppur, Salem
                  </p>
                </div>
              </div>

              {/* Doctor Details Body */}
              <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between space-y-5 sm:space-y-6">
                <div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {doc.bio}
                  </p>

                  <div className="mt-4 sm:mt-5 space-y-2 sm:space-y-2.5 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
                    <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
                      Key Clinical Focus & Patient Care:
                    </div>
                    {doc.focusAreas.map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Doctor Card Footer */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <button
                    onClick={() => setActiveDoctorModal(doc)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200 transition-all text-center"
                  >
                    View Credentials & Bio
                  </button>

                  <button
                    onClick={() => onOpenBooking({ 
                      title: `Appointment with ${doc.name}`,
                      notes: `Specialist: ${doc.name} (${doc.role})`
                    })}
                    className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-500 hover:to-blue-500 text-white text-xs sm:text-sm font-extrabold shadow-md shadow-sky-600/20 transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
                  >
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>Book Consultation with Dr. Kiran Kumar</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Doctor Full Bio Modal */}
        {activeDoctorModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl p-5 sm:p-8 space-y-5 sm:space-y-6 max-h-[90vh] overflow-y-auto">
              
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <img
                    src={activeDoctorModal.avatar}
                    alt={activeDoctorModal.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border border-sky-300 shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 truncate">{activeDoctorModal.name}</h4>
                    <div className="text-xs font-bold text-sky-700 truncate">{activeDoctorModal.role}</div>
                    <div className="text-[11px] text-slate-500 font-semibold truncate">{activeDoctorModal.degrees}</div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveDoctorModal(null)}
                  className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 shrink-0 ml-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>{activeDoctorModal.bio}</p>

                <div className="p-3.5 sm:p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="font-bold text-slate-900 text-xs uppercase tracking-wider text-sky-700">
                    Accreditations & Professional Experience:
                  </div>
                  {activeDoctorModal.accreditations.map((acc, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{acc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => {
                    const doc = activeDoctorModal;
                    setActiveDoctorModal(null);
                    onOpenBooking({ title: `Consultation with ${doc.name}` });
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-sky-600/20 active:scale-[0.99]"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>Book Consultation with Dr. Kiran Kumar</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
