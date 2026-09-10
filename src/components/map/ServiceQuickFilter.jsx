import React from 'react';
import { useTranslation } from '../../i18n';

export default function ServiceQuickFilter({ activeFilter = 'all', onSelectFilter }) {
  const { t } = useTranslation();

  const filters = [
    { id: 'all', label: t('servicesList.all') },
    { id: 'traffic', label: t('servicesList.traffic') },
    { id: 'emergency', label: t('servicesList.emergency') },
    { id: 'transit', label: t('servicesList.transit') },
    { id: 'water', label: t('servicesList.water') },
    { id: 'power', label: t('servicesList.power') },
    { id: 'waste', label: t('servicesList.waste') }
  ];

  return (
    <div className="absolute top-3 left-28 z-[1000] select-none font-sans hidden sm:block">
      <div 
        className="bg-white/95 backdrop-blur-xs border border-slate-300 rounded-xs shadow-xs p-0.5 flex items-center space-x-0.5"
        role="group"
        aria-label={t('map.filterByService')}
      >
        {filters.map((f) => {
          const isActive = activeFilter === f.id;
          return (
            <button
              key={f.id}
              onClick={() => onSelectFilter(f.id)}
              className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 ${
                isActive
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
