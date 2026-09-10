import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from '../../i18n';

export default function MapLegend({ layers, activeServiceFilter = 'all' }) {
  const { t } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const legendItems = [
    // OPERATIONS
    {
      label: 'Active Incident',
      symbolType: 'incident-dot',
      category: t('map.operations'),
      visible: layers.incidents
    },
    {
      label: 'Diversion Route (DIV-R-8842)',
      symbolType: 'line-dashed-blue',
      category: t('map.operations'),
      visible: layers.diversionRoutes
    },
    // MUNICIPAL ASSETS
    {
      label: t('map.hospitals'),
      symbolType: 'symbol-hospital',
      category: t('map.municipalServices'),
      domain: 'emergency',
      visible: layers.hospitals
    },
    {
      label: t('map.fireStations'),
      symbolType: 'symbol-fire',
      category: t('map.municipalServices'),
      domain: 'emergency',
      visible: layers.fireStations
    },
    {
      label: t('map.metroRail'),
      symbolType: 'symbol-transit',
      category: t('map.municipalServices'),
      domain: 'transit',
      visible: layers.transit
    },
    {
      label: t('map.powerInfra'),
      symbolType: 'symbol-power',
      category: t('map.municipalServices'),
      domain: 'power',
      visible: layers.powerInfra
    },
    {
      label: t('map.waterInfra'),
      symbolType: 'symbol-water',
      category: t('map.municipalServices'),
      domain: 'water',
      visible: layers.waterInfra
    },
    {
      label: t('map.wasteFacilities'),
      symbolType: 'symbol-waste',
      category: t('map.municipalServices'),
      domain: 'waste',
      visible: layers.wasteFacilities
    },
    // GEOGRAPHY
    {
      label: t('map.trafficCorridors'),
      symbolType: 'line-traffic-corridor',
      category: t('map.geography'),
      visible: layers.roads
    },
    {
      label: t('map.wardBoundaries'),
      symbolType: 'line-dashed-gray',
      category: t('map.geography'),
      visible: layers.wards
    },
    {
      label: t('map.waterBodies'),
      symbolType: 'line-river',
      category: t('map.geography'),
      visible: layers.waterBodies
    }
  ];

  // Filter based on active layers and active service filter
  const visibleItems = legendItems.filter((item) => {
    if (!item.visible) return false;
    if (activeServiceFilter !== 'all' && item.domain && item.domain !== activeServiceFilter) {
      return false;
    }
    return true;
  });

  const grouped = visibleItems.reduce((acc, curr) => {
    if (!acc[curr.category]) acc[curr.category] = [];
    acc[curr.category].push(curr);
    return acc;
  }, {});

  const renderSymbol = (type) => {
    switch (type) {
      case 'incident-dot':
        return (
          <span className="w-3 h-3 rounded-full bg-red-600 border border-white flex items-center justify-center shrink-0 shadow-2xs">
            <span className="w-1 h-1 rounded-full bg-white"></span>
          </span>
        );
      case 'line-dashed-blue':
        return <span className="w-4 h-0.5 border-t-2 border-blue-600 border-dashed shrink-0"></span>;
      case 'symbol-hospital':
        return <span className="w-3 h-3 rounded-xs bg-red-50 border border-red-300 text-red-700 flex items-center justify-center text-[8px] font-black shrink-0">+</span>;
      case 'symbol-fire':
        return <span className="w-3 h-3 rounded-xs bg-amber-50 border border-amber-300 text-amber-700 flex items-center justify-center text-[8px] font-black shrink-0">F</span>;
      case 'symbol-transit':
        return <span className="w-3 h-3 rounded-xs bg-blue-50 border border-blue-300 text-blue-700 flex items-center justify-center text-[8px] font-black shrink-0">T</span>;
      case 'symbol-power':
        return <span className="w-3 h-3 rounded-xs bg-amber-50 border border-amber-400 text-amber-800 flex items-center justify-center text-[8px] font-black shrink-0">P</span>;
      case 'symbol-water':
        return <span className="w-3 h-3 rounded-xs bg-sky-50 border border-sky-300 text-sky-700 flex items-center justify-center text-[8px] font-black shrink-0">W</span>;
      case 'symbol-waste':
        return <span className="w-3 h-3 rounded-xs bg-emerald-50 border border-emerald-300 text-emerald-700 flex items-center justify-center text-[8px] font-black shrink-0">S</span>;
      case 'line-traffic-corridor':
        return <span className="w-4 h-1 bg-slate-500 rounded-xs shrink-0"></span>;
      case 'line-dashed-gray':
        return <span className="w-4 h-0.5 border-t border-slate-400 border-dashed shrink-0"></span>;
      case 'line-river':
        return <span className="w-4 h-1 bg-sky-500 rounded-xs shrink-0"></span>;
      default:
        return <span className="w-2.5 h-2.5 rounded-full bg-slate-400 shrink-0"></span>;
    }
  };

  return (
    <div className="absolute bottom-4 left-3 z-[1000] select-none font-sans">
      <div className="bg-white/95 backdrop-blur-xs border border-slate-300 shadow-sm rounded-xs p-2.5 w-60 text-xs text-slate-800">
        
        {/* Header Toggle */}
        <div 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center justify-between pb-1 border-b border-slate-200 cursor-pointer"
        >
          <div className="flex items-center space-x-1.5">
            <span className="font-bold text-[10px] uppercase tracking-wider text-slate-800">
              {t('map.legend')}
            </span>
            {activeServiceFilter !== 'all' && (
              <span className="font-mono text-[9px] uppercase px-1 py-0.2 rounded-xs bg-slate-900 text-white font-semibold">
                {activeServiceFilter}
              </span>
            )}
          </div>
          {isCollapsed ? (
            <ChevronUp className="w-3 h-3 text-slate-500" />
          ) : (
            <ChevronDown className="w-3 h-3 text-slate-500" />
          )}
        </div>

        {/* Legend Body */}
        {!isCollapsed && (
          <div className="mt-2 space-y-2 max-h-56 overflow-y-auto">
            {Object.keys(grouped).length === 0 ? (
              <p className="text-[10px] text-slate-400 italic">
                {t('map.legendEmpty')}
              </p>
            ) : (
              Object.entries(grouped).map(([category, items]) => (
                <div key={category} className="space-y-1">
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                    {category}
                  </div>
                  <div className="space-y-1 pl-0.5">
                    {items.map((item) => (
                      <div key={item.label} className="flex items-center space-x-2 text-[11px] text-slate-700">
                        {renderSymbol(item.symbolType)}
                        <span className="truncate">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

      </div>
    </div>
  );
}
