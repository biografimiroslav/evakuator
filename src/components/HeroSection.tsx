import React from 'react';
import {
  PhoneCall,
  ArrowRight,
  Clock,
  MapPin,
  ShieldCheck,
  Navigation
} from 'lucide-react';
import { Language } from '../types';
import { siteTranslations } from '../data/translations';

interface HeroSectionProps {
  currentLang: Language;
  onOpenOrderModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onOpenOrderModal,
}) => {
  const t = siteTranslations[currentLang];

  return (
    <section className="relative pt-8 pb-16 px-4 sm:px-6 max-w-7xl mx-auto border-b border-brand-border">
      {/* Light technical grid background pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-70 pointer-events-none -z-10" />

      {/* Asymmetric Split Layout: 7 cols left, 5 cols right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Heading, Assurances, Actions */}
        <div className="lg:col-span-7">
          {/* Status Badge with animated radar beacon */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-brand-surface border border-brand-border hover:border-brand-orange/40 rounded text-xs font-mono font-semibold text-brand-orange uppercase tracking-wider mb-5 shadow-clean transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="beacon-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
            </span>
            {t.heroBadge}
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-brand-text tracking-tight leading-[1.1] mb-6">
            {t.heroTitle1}{' '}
            <span className="text-brand-orange underline decoration-brand-orange/40 decoration-4 underline-offset-6">
              {t.heroTitleHighlight}
            </span>{' '}
            {t.heroTitle2}
          </h1>

          {/* Copy description */}
          <p className="text-brand-textMuted text-base sm:text-lg leading-relaxed max-w-[62ch] mb-8 font-normal">
            {t.heroDescription}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            {/* Primary Action: solid #EA580C bg + pure white text & icon with tactile feedback */}
            <button
              onClick={onOpenOrderModal}
              className="group flex items-center justify-center gap-2.5 px-6 py-4 bg-[#EA580C] hover:bg-[#C2410C] active:scale-[0.98] text-white font-heading font-bold text-sm sm:text-base tracking-wide rounded shadow-md hover:shadow-lg hover:shadow-orange-600/25 transition-all duration-200"
            >
              <span className="text-white font-bold">{t.heroBtnOrder}</span>
              <ArrowRight className="w-4 h-4 text-white stroke-[2.5] group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            {/* Quick Call */}
            <a
              href="tel:+380672778800"
              className="group flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-slate-50 active:scale-[0.98] border border-slate-200 hover:border-slate-300 text-brand-text font-heading font-bold text-sm sm:text-base tracking-wide rounded shadow-clean hover:shadow-md transition-all duration-200"
            >
              <PhoneCall className="w-4 h-4 text-[#EA580C] group-hover:rotate-12 transition-transform duration-200" />
              <span>{t.heroBtnCall}</span>
            </a>
          </div>

          {/* Neutral Service Advantages */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-brand-border text-xs">
            <div className="group p-3 bg-brand-surface border border-brand-border hover:border-orange-500/40 rounded shadow-clean flex items-start gap-2 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300">
              <Clock className="w-4 h-4 text-brand-orange shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
              <div>
                <span className="text-brand-text font-bold block leading-snug">{t.feature1}</span>
              </div>
            </div>

            <div className="group p-3 bg-brand-surface border border-brand-border hover:border-orange-500/40 rounded shadow-clean flex items-start gap-2 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300">
              <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
              <div>
                <span className="text-brand-text font-bold block leading-snug">{t.feature2}</span>
              </div>
            </div>

            <div className="group p-3 bg-brand-surface border border-brand-border hover:border-orange-500/40 rounded shadow-clean flex items-start gap-2 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300">
              <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
              <div>
                <span className="text-brand-text font-bold block leading-snug">{t.feature3}</span>
              </div>
            </div>

            <div className="group p-3 bg-brand-surface border border-brand-border hover:border-orange-500/40 rounded shadow-clean flex items-start gap-2 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300">
              <Navigation className="w-4 h-4 text-brand-orange shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
              <div>
                <span className="text-brand-text font-bold block leading-snug">{t.feature4}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Solid clean "How it works" block with hover lift on steps */}
        <div className="lg:col-span-5 scroll-mt-20" id="how-it-works">
          <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-7 shadow-card relative">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-[#EA580C] tracking-wider">
                  ПРОСТИЙ ПРОЦЕС
                </span>
                <h2 className="font-heading font-extrabold text-xl text-brand-text">
                  {t.howItWorksTitle}
                </h2>
              </div>
              <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-brand-text font-mono text-[11px] font-semibold rounded">
                3 КРОКИ
              </span>
            </div>

            {/* 3 Simple Steps with tactile hover lift */}
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="group p-4 bg-slate-50 hover:bg-white border border-slate-200 hover:border-orange-500/40 rounded-lg flex items-start gap-3.5 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default">
                <div className="w-7 h-7 rounded bg-[#EA580C] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform duration-200">
                  1
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-brand-text group-hover:text-brand-orange transition-colors">
                    {t.step1Title}
                  </h3>
                  <p className="text-xs text-brand-textMuted mt-1 leading-relaxed">
                    {t.step1Desc}
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group p-4 bg-slate-50 hover:bg-white border border-slate-200 hover:border-orange-500/40 rounded-lg flex items-start gap-3.5 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default">
                <div className="w-7 h-7 rounded bg-[#EA580C] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform duration-200">
                  2
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-brand-text group-hover:text-brand-orange transition-colors">
                    {t.step2Title}
                  </h3>
                  <p className="text-xs text-brand-textMuted mt-1 leading-relaxed">
                    {t.step2Desc}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group p-4 bg-slate-50 hover:bg-white border border-slate-200 hover:border-orange-500/40 rounded-lg flex items-start gap-3.5 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default">
                <div className="w-7 h-7 rounded bg-[#EA580C] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform duration-200">
                  3
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-brand-text group-hover:text-brand-orange transition-colors">
                    {t.step3Title}
                  </h3>
                  <p className="text-xs text-brand-textMuted mt-1 leading-relaxed">
                    {t.step3Desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct CTA button in the block with solid #EA580C, white text, and hover arrow transition */}
            <div className="mt-6 pt-4 border-t border-slate-200">
              <button
                onClick={onOpenOrderModal}
                className="group w-full py-3.5 px-4 bg-[#EA580C] hover:bg-[#C2410C] active:scale-[0.98] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-orange-600/25 flex items-center justify-center gap-2"
              >
                <span className="text-white font-bold">{t.heroBtnOrder}</span>
                <ArrowRight className="w-4 h-4 text-white stroke-[2.5] group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
