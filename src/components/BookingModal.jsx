import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Phone, MapPin, Video, ArrowRight, ShieldCheck, Clock, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { clinicInfo } from '../data/clinicData';

export default function BookingModal({ isOpen, onClose, initialData = {} }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    consultMode: 'in-clinic',
    treatment: initialData?.title || 'Free Consultation & 3D Scan',
    notes: initialData?.notes || ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 }
      });
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col justify-between">
        
        {/* Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-sky-50 via-slate-50 to-white border-b border-slate-100 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-sky-100 text-sky-600 border border-sky-200 flex items-center justify-center shadow-sm shrink-0">
              <Sparkles className="w-4 sm:w-5 h-4 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-sky-800 bg-sky-100 px-2 py-0.5 rounded border border-sky-200">
                  Priority Slot
                </span>
                <span className="text-[9px] sm:text-[10px] font-extrabold text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-200">
                  0% EMI
                </span>
              </div>
              <h3 className="text-base sm:text-xl font-display font-extrabold text-slate-900 mt-0.5 truncate">
                {formData.treatment}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors shrink-0 ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-4 sm:py-6 text-center space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-300 animate-bounce">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900">Priority Booking Confirmed!</h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong className="text-sky-700">{formData.fullName}</strong>. Our senior coordinator at Siva Tooth Care Karuppur will call you on <strong className="text-slate-900">{formData.phone}</strong> within 15 minutes to confirm your appointment time and doctor slot.
              </p>

              <div className="p-3.5 sm:p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs space-y-1.5 text-slate-700">
                <div><span className="text-slate-500">Treatment:</span> <strong className="text-slate-900">{formData.treatment}</strong></div>
                <div><span className="text-slate-500">Mode:</span> {formData.consultMode === 'in-clinic' ? 'In-Clinic with Free 3D Intraoral Scan' : 'Online Video Live Call'}</div>
                <div><span className="text-slate-500">Location:</span> Siva tooth care, New Muruga complex, Thattanchavadi, Karuppur</div>
                <div><span className="text-slate-500">Perks:</span> Free 3D Scan + MDS Specialist Smile Evaluation + 0% EMI</div>
              </div>

              <div className="pt-2 sm:pt-3 flex flex-col gap-2.5">
                <a
                  href={`https://wa.me/${clinicInfo.whatsappNumber}?text=Hi%20Siva%20Tooth%20Care,%20I%20have%20booked%20an%20appointment%20for%20${encodeURIComponent(formData.fullName)}%20(${encodeURIComponent(formData.treatment)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all"
                >
                  <span>Connect with Coordinator on WhatsApp</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              {/* Consultation Mode */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Consultation Mode *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, consultMode: 'in-clinic' })}
                    className={`p-2.5 rounded-2xl text-left text-xs border transition-all flex items-start gap-2 ${
                      formData.consultMode === 'in-clinic'
                        ? 'bg-sky-50 border-sky-500 text-sky-950 font-bold shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-white hover:text-slate-900'
                    }`}
                  >
                    <MapPin className={`w-4 h-4 mt-0.5 shrink-0 ${formData.consultMode === 'in-clinic' ? 'text-sky-600' : 'text-slate-400'}`} />
                    <div className="min-w-0">
                      <div className="font-bold">In-Clinic Visit</div>
                      <div className="text-[10px] text-sky-600 font-semibold truncate">Karuppur Clinic + 3D Scan</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, consultMode: 'online-video' })}
                    className={`p-2.5 rounded-2xl text-left text-xs border transition-all flex items-start gap-2 ${
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

              {/* Clinic Location Info Box */}
              <div className="p-3 sm:p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5 truncate">
                    <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span className="truncate">Siva Tooth Care — Karuppur</span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-purple-700 bg-purple-100 px-1.5 py-0.5 rounded shrink-0">
                    LGBTQ+ friendly
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-500 leading-snug truncate">
                  New Muruga complex, Thattanchavadi, Karuppur (P3HX+W9)
                </p>
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

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 079040 91317"
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

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-500 hover:to-blue-500 text-white font-extrabold text-sm shadow-lg shadow-sky-600/25 transition-all flex items-center justify-center gap-2 disabled:opacity-75 active:scale-[0.99]"
              >
                {loading ? (
                  <span>Reserving Time Slot...</span>
                ) : (
                  <>
                    <span>Request Free Consultation</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </>
                )}
              </button>

              {/* Confidential note */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center pt-1 font-medium">
                <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>100% Confidential • Our doctors call back in 15 mins</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
