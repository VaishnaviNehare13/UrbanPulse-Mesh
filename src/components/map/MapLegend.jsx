import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function MapLegend({ layers = {} }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="absolute bottom-3 left-3 z-[1000] select-none text-xs font-sans">
      <div className="bg-white border border-slate-300 shadow-xs rounded-xs overflow-hidden w-56">
        {/* Toggle Bar */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-label="Toggle GIS Legend"
          className="w-full px-2.5 py-1.5 flex items-center justify-between text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
        >
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">
            GIS LEGEND
          </span>
          {isExpanded ? (
            <ChevronDown className="w-3 h-3 text-slate-400" />
          ) : (
            <ChevronUp className="w-3 h-3 text-slate-400" />
          )}
        </button>

        {/* Dynamic Grouped Legend Content */}
        {isExpanded && (
          <div className="px-2.5 pb-2.5 pt-1.5 border-t border-slate-100 space-y-2.5 text-[11px] text-slate-700 max-h-[320px] overflow-y-auto">
            
            {/* OPERATIONS */}
            {(layers.incidents !== false || layers.diversionRoutes) && (
              <div className="space-y-1">
                <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  OPERATIONS
                </div>
                {layers.incidents !== false && (
                  <div className="flex items-center space-x-2 pl-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block shrink-0"></span>
                    <span>Active Incident</span>
                  </div>
                )}
                {layers.diversionRoutes && (
                  <div className="flex items-center space-x-2 pl-0.5">
                    <span className="w-3.5 h-[3px] border-b-2 border-dashed border-blue-600 inline-block shrink-0"></span>
                    <span>Diversion Corridor</span>
                  </div>
                )}
              </div>
            )}

            {/* MUNICIPAL ASSETS */}
            {(layers.hospitals || layers.fireStations || layers.transit || layers.parks || layers.waterInfra || layers.wasteFacilities) && (
              <div className="space-y-1">
                <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  MUNICIPAL ASSETS
                </div>
                {layers.hospitals && (
                  <div className="flex items-center space-x-2 pl-0.5">
                    <span className="w-2.5 h-2.5 rounded-xs border border-red-300 bg-white text-red-600 font-bold text-[8px] flex items-center justify-center shrink-0">□</span>
                    <span>Hospital</span>
                  </div>
                )}
                {layers.fireStations && (
                  <div className="flex items-center space-x-2 pl-0.5">
                    <span className="w-2.5 h-2.5 rounded-xs border border-orange-300 bg-white text-orange-600 font-bold text-[8px] flex items-center justify-center shrink-0">△</span>
                    <span>Fire Station</span>
                  </div>
                )}
                {layers.transit && (
                  <div className="flex items-center space-x-2 pl-0.5">
                    <span className="w-2.5 h-2.5 rounded-xs border border-blue-300 bg-white text-blue-600 font-bold text-[8px] flex items-center justify-center shrink-0">◇</span>
                    <span>Transit Hub</span>
                  </div>
                )}
                {layers.parks && (
                  <div className="flex items-center space-x-2 pl-0.5">
                    <span className="w-2.5 h-2.5 rounded-xs border border-emerald-300 bg-emerald-50 text-emerald-700 font-bold text-[8px] flex items-center justify-center shrink-0">●</span>
                    <span>Park / Garden</span>
                  </div>
                )}
                {layers.waterInfra && (
                  <div className="flex items-center space-x-2 pl-0.5">
                    <span className="w-2.5 h-2.5 rounded-xs border border-sky-300 bg-sky-50 text-sky-700 font-bold text-[8px] flex items-center justify-center shrink-0">💧</span>
                    <span>Water Utility</span>
                  </div>
                )}
                {layers.wasteFacilities && (
                  <div className="flex items-center space-x-2 pl-0.5">
                    <span className="w-2.5 h-2.5 rounded-xs border border-emerald-300 bg-emerald-50 text-emerald-700 font-bold text-[8px] flex items-center justify-center shrink-0">♻</span>
                    <span>Waste Facility</span>
                  </div>
                )}
              </div>
            )}

            {/* GEOGRAPHY */}
            {(layers.roads !== false || layers.wards || layers.waterBodies) && (
              <div className="space-y-1">
                <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  GEOGRAPHY
                </div>
                {layers.roads !== false && (
                  <div className="flex items-center space-x-2 pl-0.5">
                    <span className="w-3.5 h-[3px] bg-slate-600 inline-block shrink-0"></span>
                    <span>Primary Corridor</span>
                  </div>
                )}
                {layers.wards && (
                  <div className="flex items-center space-x-2 pl-0.5">
                    <span className="w-3.5 h-[1px] border-b border-dashed border-slate-400 inline-block shrink-0"></span>
                    <span>Ward Boundary</span>
                  </div>
                )}
                {layers.waterBodies && (
                  <div className="flex items-center space-x-2 pl-0.5">
                    <span className="w-3.5 h-[3px] bg-sky-600 inline-block shrink-0"></span>
                    <span>Water Body (Mula-Mutha)</span>
                  </div>
                )}
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
}

