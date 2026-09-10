import React, { useState } from 'react';
import { Polygon, Polyline, Tooltip, Popup, useMap } from 'react-leaflet';
import { PUNE_WARDS_GEOJSON } from '../../data/geo/puneWards';
import { PUNE_WATER_BODIES_GEOJSON } from '../../data/geo/puneWaterBodies';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useTranslation } from '../../i18n';

export default function ZoneOverlay({ 
  showWards, 
  showWaterBodies, 
  onSelectWard, 
  selectedWard,
  onViewService,
  activeServiceFilter = 'all'
}) {
  const map = useMap();
  const { t } = useTranslation();
  const [hoveredWardId, setHoveredWardId] = useState(null);

  const isWaterFilter = activeServiceFilter === 'water' || activeServiceFilter === 'all';

  return (
    <>
      {/* Real Rivers & Water Bodies (Mutha, Mula, Confluence & Lakes) - Restrained GIS Hydro Style */}
      {showWaterBodies && PUNE_WATER_BODIES_GEOJSON.features.map((feature) => {
        const isPolygon = feature.geometry.type === 'Polygon';
        const coords = isPolygon 
          ? feature.geometry.coordinates[0].map(c => [c[1], c[0]])
          : feature.geometry.coordinates.map(c => [c[1], c[0]]);

        if (isPolygon) {
          return (
            <Polygon
              key={feature.id}
              positions={coords}
              pathOptions={{
                color: '#0284c7',
                weight: 1.2,
                opacity: isWaterFilter ? 0.8 : 0.3,
                fillColor: '#38bdf8',
                fillOpacity: isWaterFilter ? 0.25 : 0.08
              }}
            >
              <Tooltip sticky direction="top" className="text-xs font-sans">
                <span className="font-semibold text-slate-800">{feature.properties.name}</span>
                <span className="text-[10px] text-slate-500 block">{feature.properties.type}</span>
              </Tooltip>

              <Popup className="gis-popup">
                <div className="p-3 max-w-[240px] text-slate-800 text-xs select-none font-sans">
                  <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                    <span className="font-mono text-[9px] font-bold text-sky-800 uppercase bg-sky-50 px-1.5 py-0.5 rounded-xs border border-sky-200">
                      {t('map.geography')} • {t('map.waterBodies')}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">{t('inspection.puneGis')}</span>
                  </div>
                  <div className="mt-2 space-y-1">
                    <h4 className="font-bold text-slate-900 text-xs">{feature.properties.name}</h4>
                    <p className="text-[11px] text-slate-600 leading-snug">{feature.properties.description}</p>
                    <div className="pt-1 text-[10px] text-slate-500 space-y-0.5">
                      <div>Area: {feature.properties.areaKm2} km²</div>
                      <div>Ward: {feature.properties.ward}</div>
                    </div>

                    {onViewService && (
                      <button
                        onClick={() => onViewService('water')}
                        className="mt-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[10px] py-1 px-2 rounded flex items-center justify-center space-x-1 transition-colors cursor-pointer"
                      >
                        <span>{t('inspection.viewService')}</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </button>
                    )}
                  </div>
                </div>
              </Popup>
            </Polygon>
          );
        }

        return (
          <Polyline
            key={feature.id}
            positions={coords}
            pathOptions={{
              color: '#0284c7',
              weight: feature.id === 'RIVER-MULA-MUTHA' ? (isWaterFilter ? 4.2 : 2.5) : (isWaterFilter ? 3.2 : 1.8),
              opacity: isWaterFilter ? 0.85 : 0.35,
              lineCap: 'round',
              lineJoin: 'round'
            }}
          >
            <Tooltip sticky direction="top" className="text-xs font-sans">
              <span className="font-semibold text-slate-800">{feature.properties.name}</span>
              <span className="text-[10px] text-slate-500 block">{feature.properties.basin}</span>
            </Tooltip>

            <Popup className="gis-popup">
              <div className="p-3 max-w-[240px] text-slate-800 text-xs select-none font-sans">
                <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                  <span className="font-mono text-[9px] font-bold text-sky-800 uppercase bg-sky-50 px-1.5 py-0.5 rounded-xs border border-sky-200">
                    {t('map.geography')} • RIVER
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">{t('inspection.puneGis')}</span>
                </div>
                <div className="mt-2 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs">{feature.properties.name}</h4>
                  <div className="text-[11px] text-slate-600 leading-snug">{feature.properties.description}</div>
                  <div className="pt-1 text-[10px] text-slate-500 space-y-0.5">
                    <div>Basin: {feature.properties.basin}</div>
                    <div>Length: {feature.properties.flowLengthKm} km</div>
                  </div>

                  {onViewService && (
                    <button
                      onClick={() => onViewService('water')}
                      className="mt-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[10px] py-1 px-2 rounded flex items-center justify-center space-x-1 transition-colors cursor-pointer"
                    >
                      <span>{t('inspection.viewService')}</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </button>
                  )}
                </div>
              </div>
            </Popup>
          </Polyline>
        );
      })}

      {/* Real Pune Municipal Administrative Sectors (Wards 01 - 15) */}
      {showWards && PUNE_WARDS_GEOJSON.features.map((feature) => {
        const isSelected = selectedWard?.id === feature.id;
        const isHovered = hoveredWardId === feature.id;
        const coords = feature.geometry.coordinates[0].map(c => [c[1], c[0]]);

        return (
          <Polygon
            key={feature.id}
            positions={coords}
            pathOptions={{
              color: isSelected ? '#1e40af' : (isHovered ? '#475569' : '#94a3b8'),
              weight: isSelected ? 2.5 : 1.0,
              opacity: isSelected ? 0.9 : 0.5,
              fillColor: isSelected ? '#3b82f6' : (isHovered ? '#cbd5e1' : '#f1f5f9'),
              fillOpacity: isSelected ? 0.12 : (isHovered ? 0.08 : 0.03),
              dashArray: isSelected ? null : '3, 4'
            }}
            eventHandlers={{
              mouseover: () => setHoveredWardId(feature.id),
              mouseout: () => setHoveredWardId(null),
              click: () => onSelectWard && onSelectWard({ ...feature.properties, coordinates: coords })
            }}
          >
            <Tooltip sticky direction="top" className="text-xs font-sans">
              <span className="font-semibold text-slate-800">Ward {feature.properties.wardNo}: {feature.properties.name}</span>
              <span className="text-[10px] text-slate-500 block">Pop: {feature.properties.population?.toLocaleString('en-IN')}</span>
            </Tooltip>

            <Popup className="gis-popup">
              <div className="p-3 max-w-[240px] text-slate-800 text-xs select-none font-sans">
                <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                  <span className="font-mono text-[9px] font-bold text-slate-700 uppercase bg-slate-100 px-1.5 py-0.5 rounded-xs border border-slate-200">
                    {t('map.wardBoundaries')}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">{t('inspection.puneGis')}</span>
                </div>

                <div className="mt-2 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs leading-snug">
                    Ward {feature.properties.wardNo}: {feature.properties.name}
                  </h4>

                  <div className="pt-1.5 space-y-1 text-[11px] text-slate-700 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Zone Jurisdiction:</span>
                      <span className="font-medium text-slate-800">{feature.properties.zone}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Ward Area:</span>
                      <span className="font-medium text-slate-800">{feature.properties.areaKm2} km²</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Population (PMC):</span>
                      <span className="font-medium text-slate-800">{feature.properties.population?.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
          </Polygon>
        );
      })}
    </>
  );
}
