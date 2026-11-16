import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { Language } from './types';
import { PhoneCall } from 'lucide-react';

export const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>('UA');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-orange selection:text-white flex flex-col">
      {/* Top Architectural Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenOrderModal={() => setIsModalOpen(true)}
      />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* Asymmetric Split Hero Section */}
        <HeroSection
          currentLang={currentLang}
          onOpenOrderModal={() => setIsModalOpen(true)}
        />

        {/* Services & Equipment Section */}
        <ServicesSection
          currentLang={currentLang}
          onOpenOrderModal={() => setIsModalOpen(true)}
        />

        {/* Verified Driver Reviews Section */}
        <ReviewsSection
          currentLang={currentLang}
        />

        {/* Frequently Asked Questions (Accordion) */}
        <FaqSection
          currentLang={currentLang}
        />
      </main>

      {/* Architectural Light Footer */}
      <Footer
        currentLang={currentLang}
        onOpenOrderModal={() => setIsModalOpen(true)}
      />

      {/* Mobile Sticky Action Bar (< 768px) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-brand-surface/95 backdrop-blur-md border-t border-brand-border p-2.5 shadow-elevated">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="tel:+380672778800"
            className="flex items-center justify-center gap-1.5 py-3 px-2 bg-brand-surface hover:bg-brand-bg border border-brand-border text-brand-text font-heading font-bold text-xs uppercase tracking-wide rounded text-center transition-transform active:scale-95"
          >
            <PhoneCall className="w-3.5 h-3.5 text-brand-orange shrink-0" />
            <span>Зателефонувати</span>
          </a>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-1.5 py-3 px-2 bg-[#EA580C] hover:bg-[#C2410C] active:bg-[#C2410C] text-white font-heading font-bold text-xs uppercase tracking-wide rounded text-center transition-transform active:scale-95 shadow-sm"
          >
            <span className="text-white font-bold">Замовити евакуатор</span>
          </button>
        </div>
      </div>

      {/* Interactive Order Modal with Clean Location Picker */}
      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
};

export default App;
