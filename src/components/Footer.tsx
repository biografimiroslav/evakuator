import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { siteTranslations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onOpenOrderModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenOrderModal }) => {
  const t = siteTranslations[currentLang];

  return (
    <footer className="bg-brand-surface border-t border-brand-border pt-12 pb-24 md:pb-14 px-4 sm:px-6">
      <div className="reveal-init max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
        {/* Brand & Short Tagline */}
        <div className="space-y-2 max-w-sm">
          <div>
            <span className="font-heading font-extrabold text-lg text-brand-text block">
              {t.brandName}
            </span>
            <p className="text-[11px] text-brand-textMuted font-medium leading-none mt-1">
              {t.brandSub}
            </p>
          </div>
          <p className="text-xs text-brand-textMuted leading-relaxed pt-1">
            {t.footerTagline}
          </p>
        </div>

        {/* Minimal Navigation Links */}
        <nav className="flex flex-wrap items-center gap-6 text-sm text-brand-textMuted font-medium">
          <a href="#services" className="hover:text-brand-orange transition-colors">
            {t.navServices}
          </a>
          <a href="#how-it-works" className="hover:text-brand-orange transition-colors">
            {t.navHowItWorks}
          </a>
          <a href="#reviews" className="hover:text-brand-orange transition-colors">
            {t.navReviews}
          </a>
          <a href="#faq" className="hover:text-brand-orange transition-colors">
            {t.navFaq}
          </a>
        </nav>

        {/* Phone & Order Action */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          <a
            href="tel:+380672778800"
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-50 hover:bg-white border border-slate-200 text-brand-text font-mono font-bold text-xs sm:text-sm rounded transition-colors"
          >
            <Phone className="w-4 h-4 text-[#EA580C]" />
            <span>{t.hotlinePhone}</span>
          </a>

          {/* Button with solid #EA580C bg, tactile feedback and hover arrow slide */}
          <button
            onClick={onOpenOrderModal}
            className="group flex items-center justify-center gap-2 px-5 py-2.5 bg-[#EA580C] hover:bg-[#C2410C] active:scale-[0.98] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-orange-600/25"
          >
            <span className="text-white font-bold">{t.orderTowTruck}</span>
            <ArrowRight className="w-4 h-4 text-white stroke-[2.5] group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>

      {/* Bottom copyright line */}
      <div className="max-w-7xl mx-auto border-t border-brand-border pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-brand-textSubtle gap-2">
        <div>{t.allRightsReserved} (2026)</div>
        <div>Ужгород • Чоп • Мукачево • Закарпаття</div>
      </div>
    </footer>
  );
};
