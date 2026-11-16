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
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-surface border border-brand-border rounded text-xs font-mono font-semibold text-brand-orange uppercase tracking-wider mb-5 shadow-clean">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
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
            {/* Primary Action: solid #EA580C bg + pure white text & icon */}
            <button
              onClick={onOpenOrderModal}
              className="flex items-center justify-center gap-2.5 px-6 py-4 bg-[#EA580C] hover:bg-[#C2410C] active:scale-[0.98] text-white font-heading font-bold text-sm sm:text-base tracking-wide rounded shadow-md transition-all"
            >
              <span className="text-white font-bold">{t.heroBtnOrder}</span>
              <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
            </button>

            {/* Quick Call: renamed to "Зателефонувати" */}
            <a
              href="tel:+380672778800"
              className="flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-slate-50 active:scale-[0.98] border border-slate-200 text-brand-text font-heading font-bold text-sm sm:text-base tracking-wide rounded shadow-clean transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#EA580C]" />
              <span>{t.heroBtnCall}</span>
            </a>
          </div>

          {/* Neutral Service Advantages (Without invented numbers) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-brand-border text-xs">
            <div className="p-3 bg-brand-surface border border-brand-border rounded shadow-clean flex items-start gap-2">
              <Clock className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <span className="text-brand-text font-bold block leading-snug">{t.feature1}</span>
              </div>
            </div>

            <div className="p-3 bg-brand-surface border border-brand-border rounded shadow-clean flex items-start gap-2">
              <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <span className="text-brand-text font-bold block leading-snug">{t.feature2}</span>
              </div>
            </div>

            <div className="p-3 bg-brand-surface border border-brand-border rounded shadow-clean flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <span className="text-brand-text font-bold block leading-snug">{t.feature3}</span>
              </div>
            </div>

            <div className="p-3 bg-brand-surface border border-brand-border rounded shadow-clean flex items-start gap-2">
              <Navigation className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <span className="text-brand-text font-bold block leading-snug">{t.feature4}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Solid clean "How it works" block (no glassmorphism) */}
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

            {/* 3 Simple Steps */}
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3.5">
                <div className="w-7 h-7 rounded bg-[#EA580C] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  1
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-brand-text">
                    {t.step1Title}
                  </h3>
                  <p className="text-xs text-brand-textMuted mt-1 leading-relaxed">
                    {t.step1Desc}
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3.5">
                <div className="w-7 h-7 rounded bg-[#EA580C] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  2
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-brand-text">
                    {t.step2Title}
                  </h3>
                  <p className="text-xs text-brand-textMuted mt-1 leading-relaxed">
                    {t.step2Desc}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3.5">
                <div className="w-7 h-7 rounded bg-[#EA580C] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  3
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-brand-text">
                    {t.step3Title}
                  </h3>
                  <p className="text-xs text-brand-textMuted mt-1 leading-relaxed">
                    {t.step3Desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct CTA button in the block with solid #EA580C and white text */}
            <div className="mt-6 pt-4 border-t border-slate-200">
              <button
                onClick={onOpenOrderModal}
                className="w-full py-3 px-4 bg-[#EA580C] hover:bg-[#C2410C] active:scale-[0.99] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span className="text-white font-bold">{t.heroBtnOrder}</span>
                <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
