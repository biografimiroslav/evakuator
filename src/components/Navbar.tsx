import React, { useState, useEffect } from 'react';
import { Phone, Globe, ArrowRight, Menu, X } from 'lucide-react';
import { Language } from '../types';
import { siteTranslations } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenOrderModal,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const t = siteTranslations[currentLang];
  const languages: Language[] = ['UA', 'EN', 'HU', 'SK'];

  // Scroll Progress calculation
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentScroll = window.scrollY;
        const progress = Math.min(100, Math.max(0, (currentScroll / totalScroll) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling while full-screen mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-brand-surface/95 backdrop-blur-md border-b border-brand-border">
        {/* Scroll Progress Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent overflow-hidden pointer-events-none">
          <div
            className="h-full bg-[#EA580C] transition-[width] duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Main navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-3.5 flex items-center justify-between gap-3">
          {/* Brand identity */}
          <a href="#" className="block hover:opacity-90 transition-opacity">
            <span className="font-heading font-extrabold text-lg sm:text-xl text-brand-text tracking-tight leading-none block">
              {t.brandName}
            </span>
            <p className="text-[10px] sm:text-[11px] text-brand-textMuted font-medium leading-none mt-1">
              {t.brandSub}
            </p>
          </a>

          {/* Center links (Desktop >= 768px) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-brand-textMuted">
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

          {/* Right action group */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-brand-bg border border-brand-border rounded p-0.5 text-xs font-mono">
              <Globe className="w-3.5 h-3.5 text-brand-textSubtle ml-1 mr-0.5 hidden sm:inline" />
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-1.5 py-0.5 rounded transition-all font-semibold ${
                    currentLang === lang
                      ? 'bg-brand-surface text-brand-orange shadow-sm font-bold'
                      : 'text-brand-textMuted hover:text-brand-text'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Direct Phone button (Desktop >= 768px) */}
            <a
              href="tel:+380672778800"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-text bg-brand-bg hover:bg-brand-surface border border-brand-border px-3 py-2 rounded transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span>{t.hotlinePhone}</span>
            </a>

            {/* Primary CTA button with solid orange bg, tactile click and arrow slide */}
            <button
              onClick={onOpenOrderModal}
              className="group hidden md:flex items-center gap-1.5 bg-[#EA580C] hover:bg-[#C2410C] active:scale-[0.98] text-white px-4 py-2 sm:px-4 sm:py-2.5 rounded font-heading font-bold text-xs sm:text-sm tracking-wide shadow-sm hover:shadow-lg hover:shadow-orange-600/25 transition-all duration-200 shrink-0"
            >
              <span className="text-white font-bold">{t.orderTowTruck}</span>
              <ArrowRight className="w-4 h-4 text-white stroke-[2.5] group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            {/* Mobile Burger Menu Button (< 768px) */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Відкрити навігаційне меню"
              className="md:hidden p-2 rounded bg-brand-bg hover:bg-brand-surface border border-brand-border text-brand-text transition-colors flex items-center justify-center shrink-0"
            >
              <Menu className="w-5 h-5 text-brand-text" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay (< 768px) Rendered Outside <header> to avoid backdrop-filter stacking context */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white h-[100dvh] w-full flex flex-col justify-between px-6 py-5 md:hidden animate-in fade-in duration-150 overflow-y-auto">
          {/* Top Bar: Brand, Language switcher, Close Button */}
          <div className="flex items-center justify-between gap-3">
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="block hover:opacity-90 transition-opacity"
            >
              <span className="font-heading font-extrabold text-xl text-brand-text tracking-tight leading-none block">
                {t.brandName}
              </span>
              <p className="text-[11px] text-brand-textMuted font-medium leading-none mt-1">
                {t.brandSub}
              </p>
            </a>

            <div className="flex items-center gap-2">
              <div className="flex items-center bg-brand-bg border border-brand-border rounded p-0.5 text-xs font-mono">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => onLanguageChange(lang)}
                    className={`px-2 py-1 rounded transition-all font-semibold ${
                      currentLang === lang
                        ? 'bg-brand-surface text-brand-orange shadow-sm font-bold'
                        : 'text-brand-textMuted hover:text-brand-text'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Закрити меню"
                className="p-2 rounded bg-brand-bg hover:bg-slate-100 border border-brand-border text-brand-text transition-colors flex items-center justify-center shrink-0"
              >
                <X className="w-5 h-5 text-brand-text" />
              </button>
            </div>
          </div>

          {/* Center Navigation Links (strictly centered vertically and horizontally) */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-6 my-8">
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="font-heading font-extrabold text-2xl text-brand-text hover:text-brand-orange transition-colors tracking-tight text-center"
            >
              {t.navServices}
            </a>
            <a
              href="#how-it-works"
              onClick={() => setIsMenuOpen(false)}
              className="font-heading font-extrabold text-2xl text-brand-text hover:text-brand-orange transition-colors tracking-tight text-center"
            >
              {t.navHowItWorks}
            </a>
            <a
              href="#reviews"
              onClick={() => setIsMenuOpen(false)}
              className="font-heading font-extrabold text-2xl text-brand-text hover:text-brand-orange transition-colors tracking-tight text-center"
            >
              {t.navReviews}
            </a>
            <a
              href="#faq"
              onClick={() => setIsMenuOpen(false)}
              className="font-heading font-extrabold text-2xl text-brand-text hover:text-brand-orange transition-colors tracking-tight text-center"
            >
              {t.navFaq}
            </a>
          </nav>

          {/* Bottom Actions: Direct Phone & Order Tow Truck Button */}
          <div className="space-y-3 pt-4 border-t border-brand-border">
            <a
              href="tel:+380672778800"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 bg-brand-bg hover:bg-slate-100 border border-brand-border rounded font-mono font-bold text-base text-brand-text transition-colors shadow-sm"
            >
              <Phone className="w-5 h-5 text-brand-orange" />
              <span>+38 (067) 277-88-00</span>
            </a>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenOrderModal();
              }}
              className="group flex items-center justify-center gap-2 w-full py-4 px-4 bg-[#EA580C] hover:bg-[#C2410C] active:scale-[0.98] text-white font-heading font-bold text-sm uppercase tracking-wider rounded transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-orange-600/25"
            >
              <span className="text-white font-bold">{t.orderTowTruck}</span>
              <ArrowRight className="w-4 h-4 text-white stroke-[2.5] group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
