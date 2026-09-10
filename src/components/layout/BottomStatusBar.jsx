import React from 'react';
import { useTranslation } from '../../i18n';

export default function BottomStatusBar({
  currentZoom = 13
}) {
  const { t } = useTranslation();

  return (
    <footer className="h-6 bg-white border-t border-slate-200 px-4 flex items-center justify-between text-[11px] text-slate-500 select-none shrink-0 z-30 font-sans">
      <div className="flex items-center space-x-2">
        <span className="font-semibold text-slate-700">Pune Municipal Area</span>
        <span className="text-slate-300">|</span>
        <span>GIS / OSM</span>
        <span className="text-slate-300">|</span>
        <span>Zoom {currentZoom}</span>
      </div>

      <div className="flex items-center space-x-3">
        <span className="flex items-center gap-1.5 text-slate-600">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
          <span>{t('app.servicesOperational')}</span>
        </span>
        <span className="text-slate-300">|</span>
        <span className="text-[10px] text-slate-400 uppercase tracking-wider">{t('app.simulatedDisclosure')}</span>
      </div>
    </footer>
  );
}
