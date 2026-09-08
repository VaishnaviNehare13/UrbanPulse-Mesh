import React from 'react';
import { Polyline, Tooltip, Popup } from 'react-leaflet';
import { PUNE_ROAD_CORRIDORS_GEOJSON } from '../../data/geo/puneRoadCorridors';

export default function RouteOverlay({ 
  showRoads, 
  showTraffic, 
  onSelectRoad, 
  selectedRoad,
  isDiversionActive = false,
  isIncidentSelected = false
}) {
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

  return (
    <>
      {/* Real Major Road Corridors - Restrained Thin Muted Lines */}
      {PUNE_ROAD_CORRIDORS_GEOJSON.features.map((feature) => {
        const isSelected = selectedRoad?.id === feature.id;
        const isFCRoad = feature.id === 'RD-FC';
        const coords = feature.geometry.coordinates.map(c => [c[1], c[0]]);

        // Default: thin muted neutral corridor line
        let color = '#64748b';
        let weight = 2.0;
        let opacity = 0.45;

        // If traffic flow is toggled on, show subtle operational status only
        if (showTraffic) {
          if (isFCRoad) {
            color = '#dc2626'; // Incident corridor
            weight = 3.2;
            opacity = 0.85;
          } else if (feature.id === 'RD-JM') {
            color = '#d97706'; // Moderate / Attention
            weight = 2.5;
            opacity = 0.65;
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
              click: () => onSelectRoad && onSelectRoad(feature.properties)
            }}
          >
            <Tooltip sticky direction="top" className="text-xs font-sans">
              <span className="font-semibold text-slate-900">{feature.properties.name}</span>
              <span className="text-[10px] text-slate-500 block">{feature.properties.class} • {feature.properties.lengthKm} km</span>
            </Tooltip>

            <Popup className="gis-popup">
              <div className="p-3 max-w-[240px] text-slate-800 text-xs select-none">
                <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                  <span className="font-mono text-[10px] font-bold text-slate-500 uppercase">
                    ROAD CORRIDOR
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    PUNE GIS
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
                      <span className="text-slate-500">Ward Jurisdiction:</span>
                      <span className="font-medium text-slate-800">{feature.properties.ward}</span>
                    </div>
                    {feature.properties.transitUse && (
                      <div className="text-[10px] text-slate-500 pt-0.5">
                        <span className="font-semibold text-slate-700 block">Transit Alignment:</span>
                        {feature.properties.transitUse}
                      </div>
                    )}
                  </div>
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
