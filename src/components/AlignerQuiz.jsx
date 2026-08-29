import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, RotateCcw, ShieldCheck, HeartHandshake, Eye, Award, Check, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';
import { quizQuestions, clinicInfo } from '../data/clinicData';

export default function AlignerQuiz({ onOpenBooking }) {
  const [selectedConcern, setSelectedConcern] = useState(quizQuestions[0].options[0]);
  const [selectedTimeline, setSelectedTimeline] = useState(quizQuestions[1].options[0]);
  const [selectedHistory, setSelectedHistory] = useState(quizQuestions[2].options[0]);
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = (e) => {
    e.preventDefault();
    setShowResult(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  const handleReset = () => {
    setShowResult(false);
  };

  return (
    <section id="aligner-quiz" className="py-12 sm:py-20 relative bg-white overflow-hidden">
      
      {/* Subtle Blobs */}
      <div className="absolute top-1/2 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-sky-100/50 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            <span>INVISIBLE ALIGNER SOLUTION</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900">
            Straighten Your Smile <br className="hidden sm:inline" />
            <span className="text-gradient">Without Changing Your Lifestyle.</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Discover a discreet, modern approach to teeth alignment at <strong className="text-slate-900">Siva Tooth Care</strong> with Invisalign clear aligners custom-engineered for your unique facial aesthetics. No painful metal brackets, no food restrictions, and zero social embarrassment.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div className="bg-slate-50 p-5 sm:p-6 rounded-3xl border border-slate-200 hover:border-sky-300 transition-all text-center sm:text-left space-y-2 shadow-sm">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto sm:mx-0">
              <Eye className="w-5 sm:w-6 h-5 sm:h-6" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">100% Discreet</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Virtually invisible transparent medical polymer custom-molded to your gums.
            </p>
          </div>

          <div className="bg-slate-50 p-5 sm:p-6 rounded-3xl border border-slate-200 hover:border-sky-300 transition-all text-center sm:text-left space-y-2 shadow-sm">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto sm:mx-0">
              <HeartHandshake className="w-5 sm:w-6 h-5 sm:h-6" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">Eat Anything</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Removable trays for meals, flossing, brushing, and special celebrations.
            </p>
          </div>

          <div className="bg-slate-50 p-5 sm:p-6 rounded-3xl border border-slate-200 hover:border-sky-300 transition-all text-center sm:text-left space-y-2 shadow-sm">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center mx-auto sm:mx-0">
              <Sparkles className="w-5 sm:w-6 h-5 sm:h-6" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">3D Prediction</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Preview your step-by-step smile results before day 1 with our intraoral optical scanner.
            </p>
          </div>
        </div>

        {/* Interactive Aligner Assessment Engine */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-10 shadow-xl">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-slate-100 pb-5 sm:pb-6 mb-6 sm:mb-8">
              <div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100 border border-sky-200 px-2.5 sm:px-3 py-1 rounded-full">
                  Quick Aligner Assessment
                </span>
                <h3 className="text-lg sm:text-2xl font-display font-extrabold text-slate-900 mt-2">
                  Find out if you are a candidate in 30 seconds
                </h3>
              </div>

              <div className="px-3 py-1 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Instant Result Engine</span>
              </div>
            </div>

            {!showResult ? (
              <form onSubmit={handleCalculate} className="space-y-6 sm:space-y-8">
                {/* Step 1: Concern */}
                <div className="space-y-2.5 sm:space-y-3">
                  <label className="block text-xs sm:text-sm font-bold text-slate-900">
                    {quizQuestions[0].title}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                    {quizQuestions[0].options.map((opt) => (
                      <button
                        type="button"
                        key={opt.label}
                        onClick={() => setSelectedConcern(opt)}
                        className={`p-3 sm:p-3.5 rounded-2xl text-left text-xs sm:text-sm border transition-all flex items-center justify-between min-h-[44px] active:scale-[0.99] ${
                          selectedConcern.label === opt.label
                            ? 'bg-sky-50 border-sky-500 text-sky-950 font-bold shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-white'
                        }`}
                      >
                        <span>{opt.label}</span>
                        {selectedConcern.label === opt.label && (
                          <Check className="w-4 h-4 text-sky-600 shrink-0 ml-2" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Timeline */}
                <div className="space-y-2.5 sm:space-y-3">
                  <label className="block text-xs sm:text-sm font-bold text-slate-900">
                    {quizQuestions[1].title}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                    {quizQuestions[1].options.map((opt) => (
                      <button
                        type="button"
                        key={opt.label}
                        onClick={() => setSelectedTimeline(opt)}
                        className={`p-3 sm:p-3.5 rounded-2xl text-left text-xs sm:text-sm border transition-all flex items-center justify-between min-h-[44px] active:scale-[0.99] ${
                          selectedTimeline.label === opt.label
                            ? 'bg-sky-50 border-sky-500 text-sky-950 font-bold shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-white'
                        }`}
                      >
                        <span>{opt.label}</span>
                        {selectedTimeline.label === opt.label && (
                          <Check className="w-4 h-4 text-sky-600 shrink-0 ml-2" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Prior Braces History */}
                <div className="space-y-2.5 sm:space-y-3">
                  <label className="block text-xs sm:text-sm font-bold text-slate-900">
                    {quizQuestions[2].title}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                    {quizQuestions[2].options.map((opt) => (
                      <button
                        type="button"
                        key={opt.label}
                        onClick={() => setSelectedHistory(opt)}
                        className={`p-3 sm:p-3.5 rounded-2xl text-left text-xs sm:text-sm border transition-all flex items-center justify-between min-h-[44px] active:scale-[0.99] ${
                          selectedHistory.label === opt.label
                            ? 'bg-sky-50 border-sky-500 text-sky-950 font-bold shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-white'
                        }`}
                      >
                        <span>{opt.label}</span>
                        {selectedHistory.label === opt.label && (
                          <Check className="w-4 h-4 text-sky-600 shrink-0 ml-2" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 sm:py-4 px-6 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-500 hover:to-blue-500 text-white font-extrabold text-sm shadow-xl shadow-sky-600/25 transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
                  >
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>View My Aligner Compatibility</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>

                  <a
                    href={`tel:${clinicInfo.phonePrimary}`}
                    className="w-full sm:w-auto px-5 py-3.5 sm:py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200 transition-all text-center"
                  >
                    Call Specialist: 96297 29294
                  </a>
                </div>
              </form>
            ) : (
              /* Quiz Result Assessment Screen */
              <div className="space-y-5 sm:space-y-6">
                <div className="p-4 sm:p-6 rounded-2xl bg-sky-50 border border-sky-200 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> High Compatibility Match
                      </span>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                        You are {selectedConcern.score}% Eligible for Invisalign!
                      </h4>
                    </div>

                    <div className="text-left sm:text-right flex sm:flex-col items-center sm:items-end gap-2 sm:gap-0">
                      <div className="text-3xl sm:text-4xl font-display font-extrabold text-sky-600">
                        {selectedConcern.score}%
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold">Suitability Index</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-3 text-xs border-t border-sky-200/60 text-slate-700">
                    <div className="p-3 bg-white rounded-xl border border-sky-100">
                      <span className="text-slate-500 block text-[11px] font-medium">Primary Concern:</span>
                      <strong className="text-slate-900">{selectedConcern.label}</strong>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-sky-100">
                      <span className="text-slate-500 block text-[11px] font-medium">Timeline Track:</span>
                      <strong className="text-slate-900">{selectedTimeline.label}</strong>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-sky-100">
                      <span className="text-slate-500 block text-[11px] font-medium">Supervising Specialist:</span>
                      <strong className="text-sky-700">Dr. Kiran Kumar (BDS)</strong>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed bg-white p-3.5 rounded-xl border border-sky-200 font-medium">
                    💡 <strong>Clinical Assessment Note:</strong> {selectedConcern.note}. At Siva Tooth Care, under the direct supervision of Dr. Kiran Kumar BDS (10+ Years Experience, Specialist in RCT), your 3D digital simulation will showcase exact aligner movements and estimated finish date before you start.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
                  <button
                    onClick={() => onOpenBooking({ 
                      title: `Invisalign Consultation (${selectedConcern.score}% Match)`,
                      notes: `Concern: ${selectedConcern.label}, Timeline: ${selectedTimeline.label}`
                    })}
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-500 hover:to-blue-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-sky-600/20 transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
                  >
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>Book Invisalign Appointment in Salem</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200 transition-all flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5 shrink-0" />
                    <span>Retake Quiz</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
