import React, { useState } from 'react';
import { Star, CheckCircle2, Quote, ExternalLink, Sparkles, MessageSquare, ThumbsUp, CornerDownRight } from 'lucide-react';
import { reviewsData, clinicInfo } from '../data/clinicData';

export default function Reviews({ onOpenBooking }) {
  const [activeTag, setActiveTag] = useState('All');

  const filterTags = [
    { id: 'All', label: 'All Reviews (5)' },
    { id: 'kind doctor', label: 'kind doctor (2)' },
    { id: 'dental issues', label: 'dental issues (4)' }
  ];

  const filteredReviews = activeTag === 'All'
    ? reviewsData
    : reviewsData.filter(r => r.filterTags && r.filterTags.includes(activeTag));

  return (
    <section id="reviews" className="py-12 sm:py-20 relative bg-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-amber-100/50 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="space-y-2.5 sm:space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
              <span>PATIENT REVIEWS & EXPERIENCES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900">
              Smiles That Speak <br className="hidden sm:inline" />
              <span className="text-gradient">for Themselves.</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
              Read real verified Google reviews from patients treated by <strong className="text-slate-900">Dr. Kiran Kumar</strong> at Siva Tooth Care, Karuppur.
            </p>
          </div>

          {/* Google Verified Rating Card */}
          <a
            href="https://maps.google.com/?q=Siva+Tooth+Care+New+Muruga+complex+Thattanchavadi+Karuppur+Salem+636012"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 sm:p-4 rounded-3xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-all flex items-center gap-3.5 sm:gap-4 shadow-sm hover:shadow-md self-start md:self-auto group active:scale-[0.99]"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white flex items-center justify-center font-bold text-slate-900 border border-slate-200 shadow-sm shrink-0">
              <span className="text-xl sm:text-2xl text-blue-600 font-display">G</span>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-base sm:text-lg text-slate-900">4.8 / 5.0</span>
                <div className="flex -space-x-0.5 ml-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-[11px] sm:text-xs text-slate-600 flex items-center gap-1 group-hover:text-amber-700 font-medium transition-colors">
                <span>Verified Google Reviews</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </div>
            </div>
          </a>
        </div>

        {/* Filter Pills: Swipeable on mobile */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 overflow-x-auto no-scrollbar pb-1 sm:pb-0 w-full">
          <span className="text-xs font-bold text-slate-500 mr-1 shrink-0">Filter:</span>
          {filterTags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => setActiveTag(tag.id)}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shrink-0 active:scale-95 ${
                activeTag === tag.id
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                  : 'bg-slate-50 text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl border border-slate-200 hover:border-sky-300 p-5 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 sm:space-y-6 relative"
            >
              <div className="space-y-3 sm:space-y-4">
                {/* Author Info & Star Rating */}
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h4 className="font-extrabold text-slate-900 text-sm sm:text-base truncate">{rev.name}</h4>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5 flex items-center gap-1.5 truncate">
                      <span>{rev.badge}</span>
                      <span>•</span>
                      <span>{rev.timeAgo}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 bg-amber-50 px-2 py-1 rounded-lg border border-amber-200 shrink-0">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.review}"
                </p>

                {/* Highlight Callout */}
                <div className="p-2.5 sm:p-3 rounded-2xl bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span className="truncate">{rev.highlight}</span>
                </div>

                {/* Owner Response Box */}
                {rev.ownerResponse && (
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900 text-[11px]">
                      <CornerDownRight className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>Response from Siva Tooth Care</span>
                    </div>
                    <p className="pl-4 sm:pl-5 text-slate-600 italic">"{rev.ownerResponse}"</p>
                  </div>
                )}
              </div>

              {/* Verified Footer */}
              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium truncate">
                  {rev.location}
                </span>

                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-extrabold border border-emerald-200 flex items-center gap-1 shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View on Google Maps Link */}
        <div className="mt-8 sm:mt-12 text-center">
          <a
            href="https://maps.google.com/?q=Siva+Tooth+Care+New+Muruga+complex+Thattanchavadi+Karuppur+Salem+636012"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold border border-slate-200 hover:border-sky-300 transition-all shadow-sm w-full sm:w-auto active:scale-[0.99]"
          >
            <span>View All Reviews on Google Maps</span>
            <ExternalLink className="w-4 h-4 text-sky-600 shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
}
