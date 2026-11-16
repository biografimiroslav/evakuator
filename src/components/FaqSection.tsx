import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { siteTranslations } from '../data/translations';
import { FAQ_DATA } from '../data/reviewsAndFaq';

interface FaqSectionProps {
  currentLang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ currentLang }) => {
  const t = siteTranslations[currentLang];
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto border-b border-brand-border scroll-mt-20">
      {/* Section Header - Strictly Centered with Scroll Reveal */}
      <div className="reveal-init max-w-3xl mx-auto text-center mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[#EA580C] tracking-wider mb-2">
          <HelpCircle className="w-4 h-4 text-[#EA580C]" />
          <span>ВІДПОВІДІ НА ПИТАННЯ</span>
        </div>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-text tracking-tight">
          {t.faqTitle}
        </h2>
        <p className="text-brand-textMuted text-sm sm:text-base mt-2 mx-auto max-w-[55ch]">
          {t.faqSubtitle}
        </p>
      </div>

      {/* Accordion Container - Strictly Centered max-w-3xl with smooth CSS Grid Animation */}
      <div className="reveal-init delay-2 w-full max-w-3xl mx-auto divide-y divide-slate-200 bg-white border border-slate-200 rounded-lg shadow-card overflow-hidden text-left">
        {FAQ_DATA.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="transition-colors">
              <button
                type="button"
                onClick={() => toggleAccordion(item.id)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-heading font-bold text-base sm:text-lg text-brand-text pr-2">
                  {item.question}
                </span>
                <span
                  className={`p-1.5 rounded-full shrink-0 transition-all duration-300 ${
                    isOpen
                      ? 'rotate-180 text-[#EA580C] bg-[#EA580C]/10'
                      : 'text-slate-400 bg-slate-100 hover:text-brand-text'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {/* CSS Grid Smooth Animation (0fr -> 1fr) */}
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-brand-textMuted leading-relaxed border-t border-slate-100/60">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
