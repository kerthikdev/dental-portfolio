import React, { useState } from 'react';
import { Play, Volume2, VolumeX, Sparkles, Heart, Eye, CheckCircle2, X, Film, ArrowRight, MonitorPlay, Calendar } from 'lucide-react';
import { aiMockReels } from '../data/clinicData';

export default function ReelsSection({ onOpenBooking }) {
  const [activeReel, setActiveReel] = useState(null);
  const [previewIndex, setPreviewIndex] = useState(0);
  const [previewMuted, setPreviewMuted] = useState(true);

  const currentPreviewReel = aiMockReels[previewIndex] || aiMockReels[0];

  return (
    <section id="reels" className="py-12 sm:py-20 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="space-y-2 sm:space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <Film className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span>AI CLINICAL DEMOS & 3D PROCEDURES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900">
              Clinical Video Demonstrations. <br className="hidden sm:inline" />
              <span className="text-gradient">AI Smile Precision.</span>
            </h2>
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
              Watch step-by-step clinical video demos, 3D intraoral optical scanning, and patient smile journeys by <strong className="text-slate-900">Dr. Kiran Kumar</strong> at Siva Tooth Care, Karuppur.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking({ title: "Clinical Consultation with Dr. Kiran Kumar" })}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white text-xs font-bold shadow-md shadow-sky-600/20 transition-all w-full sm:w-auto"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* 🌟 4-VIDEO CLINICAL SHOWCASE BANNER (EXCLUSIVELY 4 ONLY) 🌟 */}
        <div className="relative bg-gradient-to-br from-sky-50 via-slate-50 to-blue-50/70 border border-sky-200 rounded-3xl p-4 sm:p-8 shadow-xl overflow-hidden">
          
          {/* Banner Top Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4 border-b border-sky-200/80 pb-4 sm:pb-5 mb-5 sm:mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-sky-600 text-white shadow-md shadow-sky-600/20 shrink-0">
                <MonitorPlay className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-sky-800 truncate">
                  Featured 4-Video Clinical Showcase Banner
                </div>
                <h3 className="text-lg sm:text-2xl font-display font-extrabold text-slate-900 mt-0.5 truncate">
                  Live Interactive Video Preview
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold text-sky-800 bg-sky-100/80 border border-sky-200 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full self-start lg:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <span>Tap any thumbnail below to preview</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left: Main Featured Video Player Screen (7 cols) */}
            <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950 shadow-2xl border border-slate-200 group">
              <video
                key={currentPreviewReel.videoUrl}
                src={currentPreviewReel.videoUrl}
                autoPlay
                loop
                muted={previewMuted}
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none"></div>

              {/* Top Bar on Preview Video */}
              <div className="absolute top-2.5 sm:top-4 left-2.5 sm:left-4 right-2.5 sm:right-4 flex items-center justify-between text-xs z-10">
                <span className="px-2.5 py-1 rounded-full bg-black/60 text-white font-extrabold text-[10px] sm:text-[11px] border border-white/20 backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-sky-400 animate-pulse shrink-0"></span>
                  <span className="truncate max-w-[150px] sm:max-w-none">{currentPreviewReel.badge}</span>
                </span>

                <button
                  onClick={() => setPreviewMuted(!previewMuted)}
                  className="p-1.5 sm:p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all shadow-md active:scale-95"
                  title={previewMuted ? "Unmute Preview" : "Mute Preview"}
                >
                  {previewMuted ? <VolumeX className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> : <Volume2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-sky-400" />}
                </button>
              </div>

              {/* Center Play Modal Trigger Button */}
              <button
                onClick={() => setActiveReel(currentPreviewReel)}
                className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all z-10"
                aria-label="Open full screen player"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-slate-900 shadow-2xl">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-slate-900 ml-0.5 text-slate-900" />
                </div>
              </button>

              {/* Bottom Title & Metrics Info */}
              <div className="absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-4 right-2.5 sm:right-4 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-3 pointer-events-none z-10">
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-[11px] font-bold text-sky-300 uppercase tracking-wide truncate">
                    {currentPreviewReel.doctor} • Siva Tooth Care
                  </div>
                  <h4 className="text-xs sm:text-base lg:text-lg font-bold text-white leading-snug mt-0.5 truncate">
                    {currentPreviewReel.title}
                  </h4>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <div className="flex items-center gap-1.5 sm:gap-2 bg-black/60 backdrop-blur-md px-2 sm:px-2.5 py-1 rounded-full border border-white/10 text-[10px] sm:text-xs font-semibold">
                    <span className="flex items-center gap-1 text-sky-300">
                      <Eye className="w-3 h-3 text-sky-400" /> {currentPreviewReel.views}
                    </span>
                    <span className="flex items-center gap-1 text-pink-300">
                      <Heart className="w-3 h-3 text-pink-400 fill-pink-400" /> {currentPreviewReel.likes}
                    </span>
                  </div>

                  <span className="px-2 py-1 rounded-lg bg-sky-600/90 text-white text-[10px] sm:text-[11px] font-extrabold shrink-0 shadow-sm">
                    {currentPreviewReel.tag}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: The 4 Selected Sample Video Thumbnails (5 cols) */}
            <div className="lg:col-span-5 space-y-2 sm:space-y-2.5">
              <div className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-1 flex items-center justify-between">
                <span>Select from 4 Sample Demos:</span>
                <span className="text-sky-700 font-bold">4 HD Tracks</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-2.5">
                {aiMockReels.map((reel, idx) => {
                  const isSelected = previewIndex === idx;

                  return (
                    <button
                      key={reel.id}
                      onClick={() => setPreviewIndex(idx)}
                      className={`w-full p-2 sm:p-3 rounded-2xl border transition-all flex items-center gap-3 text-left cursor-pointer active:scale-[0.99] ${
                        isSelected
                          ? 'bg-white border-sky-500 ring-2 ring-sky-500/20 shadow-md'
                          : 'bg-white/80 hover:bg-white border-slate-200 hover:border-sky-300 shadow-sm'
                      }`}
                    >
                      {/* Thumbnail Image with Play Indicator */}
                      <div className="relative w-14 h-12 sm:w-20 sm:h-16 rounded-xl overflow-hidden bg-slate-900 shrink-0 border border-slate-200">
                        <img
                          src={reel.thumbnail}
                          alt={reel.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ${isSelected ? 'bg-sky-600 text-white' : 'bg-white/80 text-slate-900'}`}>
                            <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current ml-0.5" />
                          </div>
                        </div>
                        <span className="absolute bottom-0.5 right-0.5 text-[8px] sm:text-[9px] font-extrabold px-1 rounded bg-black/70 text-white">
                          0:05
                        </span>
                      </div>

                      {/* Title & Metadata */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-[10px] font-extrabold text-sky-700 uppercase tracking-wide truncate">
                            {reel.tag}
                          </span>
                          {isSelected && (
                            <span className="text-[9px] sm:text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded shrink-0">
                              Active
                            </span>
                          )}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900 truncate mt-0.5">
                          {reel.title}
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-slate-500 truncate mt-0.5">
                          {reel.doctor} • {reel.views} Views
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Banner Bottom Action Bar */}
          <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-sky-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="text-slate-600 text-center sm:text-left text-[11px] sm:text-xs">
              <strong className="text-slate-900">Need expert consultation for RCT, implants, or aligners?</strong> Connect with Dr. Kiran Kumar.
            </div>

            <button
              onClick={() => onOpenBooking({ title: `Appointment for ${currentPreviewReel.tag}` })}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-extrabold text-xs shadow-md shadow-sky-600/20 transition-all flex items-center justify-center gap-1.5 shrink-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book an Appointment</span>
            </button>
          </div>

        </div>

        {/* Full-Screen Video Modal Player */}
        {activeReel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col justify-between">
              
              {/* Header */}
              <div className="p-3.5 sm:p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
                <div className="flex items-center gap-2 min-w-0">
                  <Film className="w-5 h-5 text-sky-600 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 truncate">{activeReel.title}</div>
                    <div className="text-[10px] text-slate-500 truncate">{activeReel.doctor} • Siva Tooth Care, Karuppur</div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveReel(null)}
                  className="p-1.5 rounded-xl bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors shrink-0 ml-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Full Video Player */}
              <div className="relative aspect-[9/14] max-h-[55vh] sm:max-h-[60vh] bg-slate-950 flex items-center justify-center overflow-hidden">
                <video
                  src={activeReel.videoUrl}
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-3 left-3 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 text-white text-[11px] font-bold border border-white/20 backdrop-blur-md flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                    {activeReel.tag}
                  </span>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="p-3 sm:p-4 bg-white border-t border-slate-100 flex items-center gap-3 shrink-0">
                <button
                  onClick={() => {
                    const tag = activeReel.tag;
                    setActiveReel(null);
                    onOpenBooking({ title: `Consultation for ${tag}` });
                  }}
                  className="w-full py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-sky-600/20 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span className="truncate">Book Consultation with Dr. Kiran Kumar</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
