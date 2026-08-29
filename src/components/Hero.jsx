import React, { useState } from 'react';
import { Phone, Calendar, MapPin, Sparkles, CheckCircle2, ShieldCheck, Video, UserCheck, ArrowRight, Clock, Award, Star, Heart, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { clinicInfo } from '../data/clinicData';

export default function Hero({ onOpenBooking }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    chiefComplaint: '',
    consultMode: 'in-clinic'
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const complaintsList = [
    "Severe Tooth Pain / RCT",
    "Wisdom Tooth Removal",
    "Dental Implants",
    "Invisalign / Clear Aligners",
    "Teeth Cleaning / Whitening",
    "General Checkup"
  ];

  const getWhatsAppUrl = () => {
    const modeText = formData.consultMode === 'in-clinic' ? 'In-Clinic Visit (Karuppur)' : 'Online Video Call';
    const message = 
`*New Dental Appointment Request*
---------------------------------------
👤 *Patient Name:* ${formData.fullName}
📱 *Phone Number:* ${formData.phone}
${formData.email ? `📧 *Email:* ${formData.email}\n` : ''}🦷 *Chief Complaint:* ${formData.chiefComplaint || 'General Dental Consultation / RCT'}
📍 *Clinic:* Siva Tooth Care, Karuppur, Salem
🗓 *Preferred Mode:* ${modeText}
---------------------------------------
_Sent via Siva Tooth Care Website_`;

    return `https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    setSubmitting(true);
    
    // Open WhatsApp directly
    const whatsappUrl = getWhatsAppUrl();
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 400);
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-6 pb-12 sm:pt-8 sm:pb-16 lg:py-20 bg-gradient-to-b from-sky-50/50 via-white to-slate-50/80">
      {/* Background Decorative Blobs */}
      <div className="absolute top-10 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-72 sm:w-[30rem] h-72 sm:h-[30rem] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Hero Content & USPs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7 text-center lg:text-left">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="px-3 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-sky-800 font-bold text-[11px] sm:text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-pulse shrink-0" />
                <span>SPECIALIST DENTAL CARE • KARUPPUR</span>
              </span>

              <span className="px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-[11px] sm:text-xs font-bold flex items-center gap-1.5 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>BOOK AN APPOINTMENT</span>
              </span>

              <span className="px-2.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-800 text-[11px] sm:text-xs font-bold flex items-center gap-1.5 shadow-sm">
                <Heart className="w-3 h-3 text-purple-600 fill-purple-600 shrink-0" />
                <span>LGBTQ+ Friendly</span>
              </span>
            </div>

            {/* H1 Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Best Dental <br className="hidden sm:inline" />
              <span className="text-gradient">Clinic In Salem.</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Advanced dental care for confident, healthy smiles at <strong className="text-slate-900 font-bold">Siva Tooth Care</strong> (Karuppur, Salem) — with specialist-led treatment in <strong className="text-slate-900 font-bold">Root Canal Treatment (RCT)</strong>, <strong className="text-slate-900 font-bold">Dental Implants</strong>, and <strong className="text-slate-900 font-bold">Invisalign Clear Aligners</strong> with easy 0% Interest EMI plans.
            </p>

            {/* Helpline and Location CTA Links */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              <a
                href={`tel:${clinicInfo.phoneFormatted}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-sky-600/25 hover:shadow-sky-600/35 transition-all flex items-center justify-center gap-2.5 group"
              >
                <Phone className="w-4 h-4 text-sky-100 group-hover:rotate-12 transition-transform shrink-0" />
                <span>Call Helpline: {clinicInfo.phoneFormatted}</span>
              </a>

              <a
                href="#location"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm border border-slate-300 hover:border-sky-500 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Our Karuppur Clinic</span>
              </a>
            </div>

            {/* 4 Feature USP Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
              <div className="bg-white p-3 sm:p-3.5 rounded-2xl border border-slate-200 shadow-sm hover:border-sky-300 hover:shadow-md transition-all text-center lg:text-left">
                <div className="text-sky-700 font-bold text-xs sm:text-sm flex items-center justify-center lg:justify-start gap-1">
                  <UserCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-sky-600 shrink-0" /> Free Consult
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5 font-medium">Zero Obligation</div>
              </div>

              <div className="bg-white p-3 sm:p-3.5 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all text-center lg:text-left">
                <div className="text-emerald-700 font-bold text-xs sm:text-sm flex items-center justify-center lg:justify-start gap-1">
                  <Calendar className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-600 shrink-0" /> Quick Booking
                </div>
                <div className="text-[11px] sm:text-xs text-emerald-600 font-bold mt-0.5">WhatsApp Direct</div>
              </div>

              <div className="bg-white p-3 sm:p-3.5 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all text-center lg:text-left">
                <div className="text-blue-700 font-bold text-xs sm:text-sm flex items-center justify-center lg:justify-start gap-1">
                  <Award className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-blue-600 shrink-0" /> RCT Specialist
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5 font-medium">10+ Yrs • BDS</div>
              </div>

              <div className="bg-white p-3 sm:p-3.5 rounded-2xl border border-slate-200 shadow-sm hover:border-amber-300 hover:shadow-md transition-all text-center lg:text-left">
                <div className="text-amber-700 font-bold text-xs sm:text-sm flex items-center justify-center lg:justify-start gap-1">
                  <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-amber-600 shrink-0" /> 0% EMI
                </div>
                <div className="text-[11px] sm:text-xs text-amber-600 font-bold mt-0.5">Instant Approval</div>
              </div>
            </div>

            {/* Trust Proof Micro-Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-1 font-bold text-amber-600">
                <div className="flex -space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-slate-900 ml-1">4.8 / 5.0</span>
                <span className="text-slate-500 font-normal hidden sm:inline">(Verified Google Rating)</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="text-slate-700 font-medium">10+ Years Clinical Leadership</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="text-slate-700 font-medium">Karuppur, Salem</span>
            </div>
          </div>

          {/* Right Column: Priority Booking Card Engine */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Soft decorative shadow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 rounded-3xl blur-md opacity-20"></div>

              <div className="relative bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-8 shadow-xl">
                
                {/* Form Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4 sm:mb-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-100 border border-sky-200 px-2.5 py-0.5 rounded-full">
                        PRIORITY BOOKING
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-bold text-emerald-700 bg-emerald-100 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <MessageSquare className="w-3 h-3" /> WhatsApp Direct
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-display font-extrabold text-slate-900 mt-2">
                      Book an Appointment
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium leading-relaxed">
                      Connect directly with Dr. Kiran Kumar & clinical team in Karuppur.
                    </p>
                  </div>
                </div>

                {submitted ? (
                  <div className="py-6 text-center space-y-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-300 animate-bounce">
                      <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-extrabold text-slate-900">Appointment Request Sent!</h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                      Thank you, <strong className="text-sky-700">{formData.fullName}</strong>. Your details and chief complaint have been sent to Dr. Kiran Kumar's clinic desk.
                    </p>
                    
                    <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs space-y-1.5 text-slate-700">
                      <div><span className="text-slate-500">Chief Complaint:</span> <strong className="text-slate-900">{formData.chiefComplaint || 'General Dental Consultation'}</strong></div>
                      <div><span className="text-slate-500">Phone:</span> {formData.phone}</div>
                      <div><span className="text-slate-500">Mode:</span> {formData.consultMode === 'in-clinic' ? 'In-Clinic Visit' : 'Online Video Call'}</div>
                      <div><span className="text-slate-500">Location:</span> Siva tooth care, New Muruga complex, Thattanchavadi, Karuppur</div>
                    </div>

                    <div className="pt-2 flex flex-col gap-2">
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all"
                      >
                        <MessageSquare className="w-4 h-4 shrink-0" />
                        <span>Open Chat on WhatsApp</span>
                      </a>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-xs text-slate-500 hover:text-sky-600 font-semibold underline pt-1"
                      >
                        Book another appointment
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                    {/* Consultation Mode Selector */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Consultation Mode *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, consultMode: 'in-clinic' })}
                          className={`p-2.5 rounded-xl text-left text-xs border transition-all flex items-start gap-2 ${
                            formData.consultMode === 'in-clinic'
                              ? 'bg-sky-50 border-sky-500 text-sky-950 font-bold shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-white hover:text-slate-900'
                          }`}
                        >
                          <MapPin className={`w-4 h-4 mt-0.5 shrink-0 ${formData.consultMode === 'in-clinic' ? 'text-sky-600' : 'text-slate-400'}`} />
                          <div className="min-w-0">
                            <div className="font-bold">In-Clinic Visit</div>
                            <div className="text-[10px] text-sky-600 font-semibold truncate">Karuppur Clinic</div>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, consultMode: 'online-video' })}
                          className={`p-2.5 rounded-xl text-left text-xs border transition-all flex items-start gap-2 ${
                            formData.consultMode === 'online-video'
                              ? 'bg-sky-50 border-sky-500 text-sky-950 font-bold shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-white hover:text-slate-900'
                          }`}
                        >
                          <Video className={`w-4 h-4 mt-0.5 shrink-0 ${formData.consultMode === 'online-video' ? 'text-sky-600' : 'text-slate-400'}`} />
                          <div className="min-w-0">
                            <div className="font-bold">Online Video</div>
                            <div className="text-[10px] text-slate-500 truncate">Live Specialist Call</div>
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Patient Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramasamy / Divya"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white font-medium"
                      />
                    </div>

                    {/* Phone Number & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 79040 91317"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Gmail / Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="name@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white font-medium"
                        />
                      </div>
                    </div>

                    {/* Chief Complaint / Dental Problem */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Chief Complaint / Dental Problem *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Severe tooth pain / Root canal / Missing teeth"
                        value={formData.chiefComplaint}
                        onChange={(e) => setFormData({ ...formData, chiefComplaint: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white font-medium"
                      />
                      {/* Quick Chips */}
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {complaintsList.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setFormData({ ...formData, chiefComplaint: item })}
                            className={`text-[10px] px-2.5 py-1 rounded-lg border font-medium transition-all ${
                              formData.chiefComplaint === item
                                ? 'bg-sky-600 text-white border-sky-600 font-bold'
                                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 hover:from-emerald-500 hover:to-sky-500 text-white font-extrabold text-sm shadow-xl shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 group disabled:opacity-75 active:scale-[0.99]"
                    >
                      <MessageSquare className="w-4 h-4 shrink-0" />
                      {submitting ? (
                        <span>Connecting to Doctor WhatsApp...</span>
                      ) : (
                        <>
                          <span>Book Appointment via WhatsApp</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    {/* Confidential Notice */}
                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center pt-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Direct WhatsApp to Dr. Kiran Kumar's clinic desk ({clinicInfo.phoneFormatted})</span>
                    </div>
                  </form>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
