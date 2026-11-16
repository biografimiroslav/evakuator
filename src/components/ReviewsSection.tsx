import React from 'react';
import { MessageSquare, MapPin } from 'lucide-react';
import { Language } from '../types';
import { siteTranslations } from '../data/translations';
import { REVIEWS_DATA } from '../data/reviewsAndFaq';

interface ReviewsSectionProps {
  currentLang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ currentLang }) => {
  const t = siteTranslations[currentLang];

  return (
    <section id="reviews" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto border-b border-brand-border scroll-mt-20">
      {/* Section Header with Scroll Reveal */}
      <div className="reveal-init mb-10 text-left">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[#EA580C] tracking-wider mb-1.5">
          <MessageSquare className="w-4 h-4 text-[#EA580C]" />
          <span>ВІДГУКИ ВОДІЇВ</span>
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-text tracking-tight">
          {t.reviewsTitle}
        </h2>
        <p className="text-brand-textMuted text-sm sm:text-base mt-1 max-w-[65ch]">
          {t.reviewsSubtitle}
        </p>
      </div>

      {/* Grid of Simplified Driver Reviews with Cascading Scroll Reveal & Hover Lift */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {REVIEWS_DATA.map((rev, index) => {
          const delayClass = index === 0 ? 'delay-1' : index === 1 ? 'delay-2' : index === 2 ? 'delay-3' : 'delay-4';
          return (
            <div
              key={rev.id}
              className={`reveal-init ${delayClass} group p-6 bg-white border border-slate-200 hover:border-orange-500/40 rounded-lg shadow-clean hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
            >
              {/* Review text */}
              <p className="text-sm text-brand-text leading-relaxed italic mb-5 group-hover:text-slate-800 transition-colors">
                «{rev.text}»
              </p>

              {/* Author and location line */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-mono text-brand-textMuted">
                <MapPin className="w-3.5 h-3.5 text-[#EA580C] shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-bold text-brand-text">{rev.author}</span>
                <span>•</span>
                <span className="truncate">{rev.location}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
