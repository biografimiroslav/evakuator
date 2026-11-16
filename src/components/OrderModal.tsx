import React, { useState } from 'react';
import {
  X,
  Crosshair,
  Car,
  Truck,
  Wrench,
  CheckCircle2,
  MapPin,
  ArrowRight
} from 'lucide-react';
import {
  Language,
  VehicleCategory,
  VehicleCondition,
  LocationCoordinates
} from '../types';
import { siteTranslations } from '../data/translations';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  if (!isOpen) return null;

  const t = siteTranslations[currentLang];

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('+380');
  const [vehicleCategory, setVehicleCategory] = useState<VehicleCategory>('passenger');
  const [condition, setCondition] = useState<VehicleCondition>('standard');
  const [address, setAddress] = useState<string>('');
  const [coords, setCoords] = useState<LocationCoordinates>({
    x: 200,
    y: 110,
    lat: 48.6210,
    lng: 22.2880,
  });
  const [gpsStatus, setGpsStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const handleDetectGps = () => {
    setGpsStatus('Пошук GPS...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = Number(pos.coords.latitude.toFixed(4));
          const lng = Number(pos.coords.longitude.toFixed(4));
          const newCoords = {
            x: 200,
            y: 110,
            lat,
            lng,
          };
          setCoords(newCoords);
          setGpsStatus(`GPS зафіксовано: ${lat}° N, ${lng}° E`);
          if (!address) {
            setAddress(`GPS координати: ${lat}° N, ${lng}° E`);
          }
        },
        () => {
          const lat = 48.6210;
          const lng = 22.2880;
          setCoords({ x: 200, y: 110, lat, lng });
          setGpsStatus('GPS зафіксовано: м. Ужгород');
          if (!address) {
            setAddress('м. Ужгород, об\'їзна дорога (М-06)');
          }
        },
        { timeout: 4000 }
      );
    } else {
      setCoords({ x: 200, y: 110, lat: 48.6210, lng: 22.2880 });
      setGpsStatus('GPS зафіксовано: м. Ужгород');
      setAddress('м. Ужгород, об\'їзна дорога (М-06)');
    }
  };

  const handleMapClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 400);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 200);

    const lat = Number((48.68 - (y / 200) * 0.25).toFixed(4));
    const lng = Number((22.18 + (x / 400) * 0.55).toFixed(4));

    setCoords({ x, y, lat, lng });
    setGpsStatus(`Точка на карті: ${lat}° N, ${lng}° E`);
    setAddress(`Вказана точка: ${lat}° N, ${lng}° E`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.trim().length < 10) {
      setPhoneError('Введіть коректний номер телефону для зв\'язку (+380...)');
      return;
    }
    setPhoneError(null);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 500);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
      {/* Dark Translucent Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Container: Solid Opaque Pure-White */}
      <div className="relative bg-white opacity-100 border border-slate-200 rounded-xl w-full max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl z-10 flex flex-col">
        {/* Header: Solid Pure-White */}
        <div className="p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white z-10 opacity-100">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase text-[#EA580C] tracking-wider">
              СЛУЖБА ЕВАКУАЦІЇ
            </span>
            <h2 className="font-heading font-extrabold text-xl text-slate-900">
              {isSuccess ? t.modalSuccessTitle : t.modalTitle}
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
            title="Закрити"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content: Solid Pure-White */}
        <div className="p-5 sm:p-6 space-y-5 bg-white opacity-100">
          {isSuccess ? (
            /* SUCCESS CONFIRMATION SCREEN */
            <div className="py-6 flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-2xl text-brand-text">
                  {t.modalSuccessTitle}
                </h3>
                <p className="text-sm text-brand-textMuted mt-2 max-w-[46ch] leading-relaxed">
                  {t.modalSuccessDesc}
                </p>
              </div>

              <div className="p-4 bg-brand-bg border border-brand-border rounded-lg font-mono text-xs text-brand-text w-full max-w-md space-y-2 text-left">
                <div className="flex justify-between border-b border-brand-border pb-1">
                  <span className="text-brand-textMuted">Ім'я:</span>
                  <span className="font-bold">{name || 'Не вказано'}</span>
                </div>
                <div className="flex justify-between border-b border-brand-border pb-1">
                  <span className="text-brand-textMuted">Телефон:</span>
                  <span className="font-bold text-brand-orange">{phone}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-brand-textMuted">Точка подачі:</span>
                  <span className="font-bold truncate max-w-[24ch]">{address || 'Вказано на карті'}</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-brand-textMuted">
                <span>Терміновий виклик на дорозі? </span>
                <a
                  href="tel:+380672778800"
                  className="font-bold text-brand-orange hover:underline font-mono ml-1"
                >
                  +38 (067) 277-88-00
                </a>
              </div>

              {/* Close Button with solid #EA580C bg and pure white text */}
              <button
                onClick={handleClose}
                className="w-full max-w-md py-3.5 px-4 bg-[#EA580C] hover:bg-[#C2410C] text-white font-heading font-bold text-sm uppercase tracking-wider rounded transition-colors shadow-sm"
              >
                <span className="text-white font-bold">{t.modalSuccessClose}</span>
              </button>
            </div>
          ) : (
            /* ORDER FORM */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-brand-text uppercase mb-1">
                    {t.modalNameLabel}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.modalNamePlaceholder}
                    className="w-full bg-brand-bg border border-brand-border focus:border-brand-orange focus:bg-white rounded px-3 py-2 text-sm text-brand-text placeholder-brand-textSubtle focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-brand-text uppercase mb-1">
                    {t.modalPhoneLabel} <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (phoneError) setPhoneError(null);
                    }}
                    placeholder={t.modalPhonePlaceholder}
                    className={`w-full bg-brand-bg border ${
                      phoneError ? 'border-red-500' : 'border-brand-border'
                    } focus:border-brand-orange focus:bg-white rounded px-3 py-2 text-sm text-brand-text font-mono placeholder-brand-textSubtle focus:outline-none transition-colors`}
                  />
                  {phoneError && (
                    <p className="text-[11px] text-red-600 mt-1 font-mono">{phoneError}</p>
                  )}
                </div>
              </div>

              {/* Vehicle Category Selector */}
              <div>
                <label className="block text-xs font-mono font-bold text-brand-text uppercase mb-1.5">
                  {t.modalVehicleLabel}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setVehicleCategory('passenger')}
                    className={`p-2.5 rounded border text-left text-xs transition-all ${
                      vehicleCategory === 'passenger'
                        ? 'bg-brand-orange/10 border-brand-orange text-brand-text font-bold shadow-sm'
                        : 'bg-brand-bg border-brand-border text-brand-textMuted hover:border-brand-borderStrong'
                    }`}
                  >
                    <Car className="w-4 h-4 mb-1 text-brand-orange" />
                    <div>{t.modalVehiclePassenger}</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setVehicleCategory('crossover')}
                    className={`p-2.5 rounded border text-left text-xs transition-all ${
                      vehicleCategory === 'crossover'
                        ? 'bg-brand-orange/10 border-brand-orange text-brand-text font-bold shadow-sm'
                        : 'bg-brand-bg border-brand-border text-brand-textMuted hover:border-brand-borderStrong'
                    }`}
                  >
                    <Car className="w-4 h-4 mb-1 text-brand-orange" />
                    <div>{t.modalVehicleCrossover}</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setVehicleCategory('van')}
                    className={`p-2.5 rounded border text-left text-xs transition-all ${
                      vehicleCategory === 'van'
                        ? 'bg-brand-orange/10 border-brand-orange text-brand-text font-bold shadow-sm'
                        : 'bg-brand-bg border-brand-border text-brand-textMuted hover:border-brand-borderStrong'
                    }`}
                  >
                    <Truck className="w-4 h-4 mb-1 text-brand-orange" />
                    <div>{t.modalVehicleVan}</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setVehicleCategory('moto')}
                    className={`p-2.5 rounded border text-left text-xs transition-all ${
                      vehicleCategory === 'moto'
                        ? 'bg-brand-orange/10 border-brand-orange text-brand-text font-bold shadow-sm'
                        : 'bg-brand-bg border-brand-border text-brand-textMuted hover:border-brand-borderStrong'
                    }`}
                  >
                    <Wrench className="w-4 h-4 mb-1 text-brand-orange" />
                    <div>{t.modalVehicleMoto}</div>
                  </button>
                </div>
              </div>

              {/* Vehicle Condition Selector */}
              <div>
                <label className="block text-xs font-mono font-bold text-brand-text uppercase mb-1.5">
                  {t.modalCondLabel}
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setCondition('standard')}
                    className={`p-2.5 rounded border text-left transition-all ${
                      condition === 'standard'
                        ? 'bg-brand-orange/10 border-brand-orange text-brand-text font-bold'
                        : 'bg-brand-bg border-brand-border text-brand-textMuted hover:border-brand-borderStrong'
                    }`}
                  >
                    {t.modalCondStandard}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCondition('locked')}
                    className={`p-2.5 rounded border text-left transition-all ${
                      condition === 'locked'
                        ? 'bg-brand-orange/10 border-brand-orange text-brand-text font-bold'
                        : 'bg-brand-bg border-brand-border text-brand-textMuted hover:border-brand-borderStrong'
                    }`}
                  >
                    {t.modalCondLocked}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCondition('accident')}
                    className={`p-2.5 rounded border text-left transition-all ${
                      condition === 'accident'
                        ? 'bg-brand-orange/10 border-brand-orange text-brand-text font-bold'
                        : 'bg-brand-bg border-brand-border text-brand-textMuted hover:border-brand-borderStrong'
                    }`}
                  >
                    {t.modalCondAccident}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCondition('ditch')}
                    className={`p-2.5 rounded border text-left transition-all ${
                      condition === 'ditch'
                        ? 'bg-brand-orange/10 border-brand-orange text-brand-text font-bold'
                        : 'bg-brand-bg border-brand-border text-brand-textMuted hover:border-brand-borderStrong'
                    }`}
                  >
                    {t.modalCondDitch}
                  </button>
                </div>
              </div>

              {/* Location Input & Interactive Simple Location Picker */}
              <div className="space-y-2 pt-1 border-t border-brand-border">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono font-bold text-brand-text uppercase flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                    <span>{t.modalLocationLabel}</span>
                  </label>
                  {gpsStatus && (
                    <span className="text-[11px] font-mono text-emerald-700 font-semibold">
                      {gpsStatus}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder={t.modalLocationPlaceholder}
                    className="flex-1 bg-brand-bg border border-brand-border focus:border-brand-orange focus:bg-white rounded px-3 py-2 text-xs text-brand-text placeholder-brand-textSubtle focus:outline-none transition-colors"
                  />
                  <button
                    type="button"
                    onClick={handleDetectGps}
                    className="px-3 py-2 bg-brand-surface hover:bg-brand-bg border border-brand-orange text-brand-orange text-xs font-mono font-bold rounded flex items-center gap-1.5 transition-colors shrink-0"
                    title="Визначити координати"
                  >
                    <Crosshair className="w-3.5 h-3.5" />
                    <span>GPS</span>
                  </button>
                </div>

                {/* Clean Light Vector Map for Single Pickup Pin Placement */}
                <div>
                  <span className="text-[10px] font-mono text-brand-textMuted block mb-1">
                    {t.modalMapClickHint}
                  </span>
                  <div className="border border-brand-border rounded bg-brand-bg overflow-hidden relative h-[150px] cursor-crosshair">
                    <svg
                      viewBox="0 0 400 200"
                      className="w-full h-full select-none"
                      onClick={handleMapClick}
                    >
                      <rect width="400" height="200" fill="#F8FAFC" />

                      {/* River Uzh */}
                      <path
                        d="M 240 0 Q 200 60 170 100 T 130 140 Q 90 180 70 200"
                        stroke="#CBD5E1"
                        strokeWidth="8"
                        fill="none"
                      />

                      {/* M-06 Highway line */}
                      <path
                        d="M 60 180 L 100 130 L 170 100 L 260 90 L 340 120 L 390 130"
                        stroke="#EA580C"
                        strokeWidth="3.5"
                        fill="none"
                      />

                      {/* Landmarks */}
                      <text x="175" y="95" fill="#0F172A" fontSize="9" fontFamily="Outfit, sans-serif" fontWeight="bold">
                        м. Ужгород
                      </text>
                      <text x="60" y="192" fill="#475569" fontSize="8" fontFamily="Outfit, sans-serif">
                        Чоп (КПП Тиса)
                      </text>
                      <text x="320" y="132" fill="#475569" fontSize="8" fontFamily="Outfit, sans-serif">
                        м. Мукачево
                      </text>
                      <text x="75" y="75" fill="#64748B" fontSize="8" fontFamily="Outfit, sans-serif">
                        КПП «Вишнє Нємецьке» (SK)
                      </text>
                      <line x1="120" y1="20" x2="80" y2="120" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />

                      {/* User Clicked Pin (Single Pin) */}
                      <g transform={`translate(${coords.x}, ${coords.y})`}>
                        <circle r="14" fill="#EA580C" fillOpacity="0.2" className="animate-pulse" />
                        <circle r="6" fill="#EA580C" stroke="#FFFFFF" strokeWidth="2" />
                        <path d="M 0 0 L -7 -14 A 7 7 0 0 1 7 -14 Z" fill="#EA580C" />
                        <circle cx="0" cy="-14" r="3" fill="#FFFFFF" />
                        <rect x="-35" y="8" width="70" height="14" fill="#0F172A" rx="2" />
                        <text x="0" y="18" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontFamily="JetBrains Mono" fontWeight="bold">
                          ТОЧКА ПОДАЧІ
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit Button with solid #EA580C background and pure white #FFFFFF text */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#EA580C] hover:bg-[#C2410C] active:scale-[0.99] text-white font-heading font-black text-sm sm:text-base py-3.5 px-4 rounded uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="text-white font-bold">{t.modalSubmitting}</span>
                ) : (
                  <>
                    <span className="text-white font-bold">{t.modalSubmitBtn}</span>
                    <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
