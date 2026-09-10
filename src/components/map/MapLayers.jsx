import React, { useState } from 'react';
import { Layers, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from '../../i18n';

export default function MapLayers({ layers, setLayers, onLayerToggle }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLayer = (key, label) => {
    const nextState = !layers[key];
    setLayers((prev) => ({
      ...prev,
      [key]: nextState
    }));
    if (onLayerToggle) {
      onLayerToggle(label, nextState);
    }
  };

  const handleShowAll = () => {
    setLayers((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach(k => { updated[k] = true; });
      return updated;
    });
    if (onLayerToggle) onLayerToggle(t('toasts.allLayers'), true);
  };

  const handleClearAll = () => {
    setLayers((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach(k => { updated[k] = false; });
      // Keep base road and ward visible by default for geographic orientation
      updated.roads = true;
      updated.wards = true;
      return updated;
    });
    if (onLayerToggle) onLayerToggle(t('toasts.clearedLayers'), false);
  };

  const layerCategories = [
    {
      category: t('map.geography'),
      items: [
        { key: 'roads', label: t('map.roads') },
        { key: 'wards', label: t('map.wardBoundaries') },
        { key: 'waterBodies', label: t('map.waterBodies') }
      ]
    },
    {
      category: t('map.municipalServices'),
      subsections: [
        {
          domain: t('servicesList.traffic'),
          items: [
            { key: 'roads', label: t('map.trafficCorridors') },
            { key: 'traffic', label: t('map.trafficConditions') }
          ]
        },
        {
          domain: t('servicesList.emergency'),
          items: [
            { key: 'hospitals', label: t('map.hospitals') },
            { key: 'fireStations', label: t('map.fireStations') }
          ]
        },
        {
          domain: t('servicesList.transit'),
          items: [
            { key: 'transit', label: t('map.metroRail') }
          ]
        },
        {
          domain: t('servicesList.water'),
          items: [
            { key: 'waterInfra', label: t('map.waterInfra') }
          ]
        },
        {
          domain: t('servicesList.power'),
          items: [
            { key: 'powerInfra', label: t('map.powerInfra') }
          ]
        },
        {
          domain: t('servicesList.waste'),
          items: [
            { key: 'wasteFacilities', label: t('map.wasteFacilities') },
            { key: 'parks', label: 'Parks & Green Spaces' }
          ]
        }
      ]
    },
    {
      category: t('map.operations'),
      items: [
        { key: 'incidents', label: t('map.incidents') },
        { key: 'operationalZones', label: t('map.operationalZones') },
        { key: 'diversionRoutes', label: t('map.diversionRoutes') }
      ]
    }
  ];

  return (
    <div className="absolute top-3 left-3 z-[1000] select-none text-xs font-sans">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle Layer Visibility Panel"
        className="bg-white border border-slate-300 shadow-xs rounded-xs px-2.5 py-1.5 flex items-center space-x-2 text-slate-700 hover:bg-slate-50 font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
      >
        <Layers className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-800">
          {t('map.layers')}
        </span>
        {isOpen ? (
          <ChevronUp className="w-3 h-3 text-slate-400" />
        ) : (
          <ChevronDown className="w-3 h-3 text-slate-400" />
        )}
      </button>

      {/* Layer Control Panel */}
      {isOpen && (
        <div className="mt-1 bg-white border border-slate-300 rounded-xs shadow-md p-3 w-64 space-y-2.5 max-h-[480px] overflow-y-auto">
          
          {/* Quick Actions Header */}
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
            <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wide">
              {t('map.catalog')}
            </span>
            <div className="flex items-center space-x-1.5 text-[10px]">
              <button
                onClick={handleShowAll}
                className="text-blue-700 hover:text-blue-900 font-semibold uppercase hover:underline cursor-pointer"
              >
                {t('map.showAll')}
              </button>
              <span className="text-slate-300">|</span>
              <button
                onClick={handleClearAll}
                className="text-slate-500 hover:text-slate-800 font-medium uppercase hover:underline cursor-pointer"
              >
                {t('map.clearAll')}
              </button>
            </div>
          </div>

          {/* 1. GEOGRAPHY */}
          <div className="space-y-1">
            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider pb-0.5 border-b border-slate-100">
              {layerCategories[0].category}
            </div>
            <div className="space-y-0.5 pt-0.5">
              {layerCategories[0].items.map((item) => (
                <label
                  key={item.key}
                  className="flex items-center justify-between text-slate-700 hover:text-slate-900 hover:bg-slate-50 px-1.5 py-0.5 rounded-xs cursor-pointer text-[11px] transition-colors"
                >
                  <span>{item.label}</span>
                  <input
                    type="checkbox"
                    checked={!!layers[item.key]}
                    onChange={() => toggleLayer(item.key, item.label)}
                    className="rounded-xs border-slate-300 text-slate-900 focus:ring-slate-500 w-3.5 h-3.5 cursor-pointer"
                  />
                </label>
              ))}
            </div>
          </div>

          {/* 2. MUNICIPAL SERVICES */}
          <div className="space-y-1.5 pt-1 border-t border-slate-100">
            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider pb-0.5 border-b border-slate-100">
              {layerCategories[1].category}
            </div>
            {layerCategories[1].subsections.map((sub) => (
              <div key={sub.domain} className="pl-1 border-l border-slate-200 space-y-0.5">
                <span className="text-[9px] font-semibold text-slate-500 uppercase block">
                  {sub.domain}
                </span>
                {sub.items.map((item) => (
                  <label
                    key={`${sub.domain}-${item.key}`}
                    className="flex items-center justify-between text-slate-700 hover:text-slate-900 hover:bg-slate-50 px-1.5 py-0.5 rounded-xs cursor-pointer text-[11px] transition-colors"
                  >
                    <span>{item.label}</span>
                    <input
                      type="checkbox"
                      checked={!!layers[item.key]}
                      onChange={() => toggleLayer(item.key, item.label)}
                      className="rounded-xs border-slate-300 text-slate-900 focus:ring-slate-500 w-3.5 h-3.5 cursor-pointer"
                    />
                  </label>
                ))}
              </div>
            ))}
          </div>

          {/* 3. OPERATIONS */}
          <div className="space-y-1 pt-1 border-t border-slate-100">
            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider pb-0.5 border-b border-slate-100">
              {layerCategories[2].category}
            </div>
            <div className="space-y-0.5 pt-0.5">
              {layerCategories[2].items.map((item) => (
                <label
                  key={item.key}
                  className="flex items-center justify-between text-slate-700 hover:text-slate-900 hover:bg-slate-50 px-1.5 py-0.5 rounded-xs cursor-pointer text-[11px] transition-colors"
                >
                  <span>{item.label}</span>
                  <input
                    type="checkbox"
                    checked={!!layers[item.key]}
                    onChange={() => toggleLayer(item.key, item.label)}
                    className="rounded-xs border-slate-300 text-slate-900 focus:ring-slate-500 w-3.5 h-3.5 cursor-pointer"
                  />
                </label>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
