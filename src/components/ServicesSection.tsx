import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { siteTranslations } from '../data/translations';

interface ServicesSectionProps {
  currentLang: Language;
  onOpenOrderModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentLang,
  onOpenOrderModal,
}) => {
  const t = siteTranslations[currentLang];

  const services = [
    {
      num: '01',
      title: t.service1Title,
      desc: t.service1Desc,
      tag: 'Транспортування',
    },
    {
      num: '02',
      title: t.service2Title,
      desc: t.service2Desc,
      tag: 'Витягування лебідкою',
    },
    {
      num: '03',
      title: t.service3Title,
      desc: t.service3Desc,
      tag: 'Складне навантаження',
    },
    {
      num: '04',
      title: t.service4Title,
      desc: t.service4Desc,
      tag: 'Експрес-допомога',
    },
  ];

  return (
    <section id="services" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto border-b border-brand-border scroll-mt-20">
      {/* Section Header with Scroll Reveal */}
      <div className="reveal-init flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <span className="text-xs font-mono font-bold uppercase text-brand-orange tracking-wider">
            ПОСЛУГИ ТА ДОПОМОГА
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-text tracking-tight mt-1.5">
            {t.servicesTitle}
          </h2>
          <p className="text-brand-textMuted text-sm sm:text-base mt-1 max-w-[65ch]">
            {t.servicesSubtitle}
          </p>
        </div>

        <button
          onClick={onOpenOrderModal}
          className="group inline-flex items-center gap-2 self-start md:self-auto px-5 py-2.5 bg-[#EA580C] hover:bg-[#C2410C] active:scale-[0.98] text-white font-heading font-bold text-xs uppercase tracking-wider rounded shadow-sm hover:shadow-lg hover:shadow-orange-600/25 transition-all duration-200"
        >
          <span className="text-white font-bold">{t.orderTowTruck}</span>
          <ArrowRight className="w-4 h-4 text-white stroke-[2.5] group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>

      {/* Services List with Cascading Scroll Reveal & Hover Lift */}
      <div className="space-y-3">
        {services.map((item, index) => {
          const delayClass = index === 0 ? 'delay-1' : index === 1 ? 'delay-2' : index === 2 ? 'delay-3' : 'delay-4';
          return (
            <div
              key={item.num}
              className={`reveal-init ${delayClass} group p-6 sm:p-7 grid grid-cols-1 md:grid-cols-12 gap-5 items-center bg-white border border-slate-200 hover:border-orange-500/40 rounded-lg shadow-card hover:-translate-y-1 hover:shadow-md transition-all duration-300`}
            >
              <div className="md:col-span-1">
                <span className="font-mono text-xl font-black text-[#EA580C] group-hover:scale-110 inline-block transition-transform duration-200">
                  {item.num}
                </span>
              </div>

              <div className="md:col-span-8">
                <span className="inline-block px-2 py-0.5 bg-slate-100 border border-slate-200 text-[10px] font-mono font-semibold uppercase text-brand-textMuted rounded mb-1">
                  {item.tag}
                </span>
                <h3 className="font-heading font-bold text-base sm:text-lg text-brand-text group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-textMuted mt-1 max-w-[68ch] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="md:col-span-3 flex justify-start md:justify-end">
                <button
                  onClick={onOpenOrderModal}
                  className="group/btn inline-flex items-center gap-1.5 px-4 py-2 bg-[#EA580C] hover:bg-[#C2410C] active:scale-[0.98] text-white font-heading font-bold text-xs uppercase tracking-wider rounded shadow-sm hover:shadow-md hover:shadow-orange-600/25 transition-all duration-200"
                >
                  <span className="text-white font-bold">{t.serviceBtnOrder}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white stroke-[2.5] group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
