import React from 'react';
import { Polyline, Tooltip, Popup } from 'react-leaflet';
import { PUNE_ROAD_CORRIDORS_GEOJSON } from '../../data/geo/puneRoadCorridors';
import { useTranslation } from '../../i18n';
import { ExternalLink } from 'lucide-react';

export default function RouteOverlay({ 
  showRoads, 
  showTraffic, 
  onSelectRoad, 
  selectedRoad,
  onViewService,
  activeServiceFilter = 'all',
  isDiversionActive = false,
  isIncidentSelected = false
}) {
  const { t } = useTranslation();
  if (!showRoads) return null;

  // Single Restrained Diversion Corridor: JM Road bypass via Sancheti & Shivaji Road
  const diversionCoords = [
    [18.5165, 73.8405], // Deccan Gymkhana
    [18.5220, 73.8440], // JM Road / Sambhaji Park
    [18.5280, 73.8485], // Balgandharva
    [18.5312, 73.8525], // Sancheti Chowk
    [18.5310, 73.8550], // PMC / Shivaji Road
    [18.5220, 73.8555]  // Shaniwar Wada
  ];

  const isTrafficFilter = activeServiceFilter === 'traffic' || activeServiceFilter === 'all';

  return (
    <>
      {/* Real Major Road Corridors - Restrained Thin Muted Lines */}
      {PUNE_ROAD_CORRIDORS_GEOJSON.features.map((feature) => {
        const isSelected = selectedRoad?.id === feature.id;
        const isFCRoad = feature.id === 'RD-FC';
        const coords = feature.geometry.coordinates.map(c => [c[1], c[0]]);

        // Default: thin muted neutral corridor line
        let color = '#64748b';
        let weight = isTrafficFilter ? 2.2 : 1.5;
        let opacity = isTrafficFilter ? 0.65 : 0.25;

        // If traffic flow is toggled on, show subtle operational status only
        if (showTraffic && isTrafficFilter) {
          if (isFCRoad) {
            color = isDiversionActive ? '#16a34a' : '#dc2626'; // Incident corridor vs Stabilized
            weight = 3.2;
            opacity = 0.9;
          } else if (feature.id === 'RD-JM') {
            color = isDiversionActive ? '#2563eb' : '#d97706'; // Diversion route vs Moderate
            weight = 2.8;
            opacity = 0.8;
          }
        }

        // Highlight selected corridor
        if (isSelected) {
          color = '#2563eb';
          weight = 3.5;
          opacity = 1.0;
        }

        return (
          <Polyline
            key={feature.id}
            positions={coords}
            pathOptions={{
              color: color,
              weight: weight,
              opacity: opacity,
              lineCap: 'round',
              lineJoin: 'round'
            }}
            eventHandlers={{
              click: () => onSelectRoad && onSelectRoad({ ...feature.properties, category: 'traffic' })
            }}
          >
            <Tooltip sticky direction="top" className="text-xs font-sans">
              <span className="font-semibold text-slate-900">{feature.properties.name}</span>
              <span className="text-[10px] text-slate-500 block">{feature.properties.class} • {feature.properties.lengthKm} km</span>
            </Tooltip>

            <Popup className="gis-popup">
              <div className="p-3 max-w-[250px] text-slate-800 text-xs select-none font-sans">
                <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                  <span className="font-mono text-[9px] font-bold text-slate-700 uppercase bg-slate-100 px-1.5 py-0.5 rounded-xs border border-slate-200">
                    {t('servicesList.traffic')}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {t('inspection.puneGis')}
                  </span>
                </div>

                <div className="mt-2 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs leading-snug">{feature.properties.name}</h4>
                  <div className="text-[11px] text-slate-500">{feature.properties.corridor}</div>

                  <div className="pt-1.5 space-y-1 text-[11px] text-slate-700 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Corridor Length:</span>
                      <span className="font-medium text-slate-800">{feature.properties.lengthKm} km</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Carriageway Lanes:</span>
                      <span className="font-medium text-slate-800">{feature.properties.lanes} Lanes</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">{t('inspection.ward')}:</span>
                      <span className="font-medium text-slate-800">{feature.properties.ward}</span>
                    </div>
                    <div className="flex items-center justify-between pt-0.5">
                      <span className="text-slate-500">{t('inspection.status')}:</span>
                      <span className={`font-semibold text-[10px] px-1.5 py-0.2 rounded border ${
                        isFCRoad && !isDiversionActive ? 'bg-red-50 text-red-700 border-red-200' :
                        isFCRoad && isDiversionActive ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                        'bg-slate-50 text-slate-700 border-slate-200'
                      }`}>
                        {isFCRoad ? (isDiversionActive ? 'Stabilizing (44 km/h)' : 'Standstill (12 km/h)') : 'Normal Flow (38 km/h)'}
                      </span>
                    </div>
                  </div>

                  {onViewService && (
                    <button
                      onClick={() => onViewService('traffic')}
                      className="mt-2.5 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[10px] py-1.5 px-2 rounded flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                    >
                      <span>{t('inspection.viewService')}</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            </Popup>
          </Polyline>
        );
      })}

      {/* ONE Restrained Blue Diversion Route - Displayed only when diversion active or incident selected */}
      {(isDiversionActive || isIncidentSelected) && (
        <Polyline
          positions={diversionCoords}
          pathOptions={{
            color: '#2563eb',
            weight: 3.5,
            opacity: 0.9,
            dashArray: '5, 7',
            lineCap: 'round',
            lineJoin: 'round'
          }}
        >
          <Tooltip sticky direction="top" className="text-xs font-sans">
            <span className="font-bold text-blue-700">DIVERSION CORRIDOR ACTIVE</span>
            <span className="text-[10px] text-slate-600 block">JM Road → Shivaji Road Bypass</span>
          </Tooltip>
        </Polyline>
      )}
    </>
  );
}
