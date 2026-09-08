import React from 'react';
import { Polyline, Tooltip, Popup } from 'react-leaflet';
import { PUNE_ROADS } from '../../data/puneMapData';

export default function RouteOverlay({ 
  showRoads, 
  showTraffic, 
  onSelectRoad, 
  selectedRoad,
  isDiversionActive = false,
  isIncidentSelected = false
}) {
  if (!showRoads) return null;

  // Diversion coordinates: JM Road connecting to Shivaji Road / Senapati Bapat
  const diversionCoords = [
    [18.5165, 73.8405], // Deccan
    [18.5220, 73.8440], // JM Road
    [18.5280, 73.8485], 
    [18.5312, 73.8525], // Sancheti
    [18.5310, 73.8550], // PMC / Shivaji Rd
    [18.5220, 73.8555]  // Shaniwar Wada
  ];

  return (
    <>
      {/* Base Pune Road Network */}
      {PUNE_ROADS.map((road) => {
        const isSelected = selectedRoad?.id === road.id;
        const isFCRoad = road.id === 'RD-FC';
        
        let color = '#64748b'; // Muted grey baseline
        let weight = road.class.includes('National') || road.class.includes('Primary') ? 3.5 : 2.5;
        let opacity = 0.55;

        if (showTraffic) {
          if (road.trafficStatus === 'critical') {
            color = '#dc2626';
            opacity = 0.85;
            weight = 3.5;
          } else if (road.trafficStatus === 'moderate') {
            color = '#d97706';
            opacity = 0.7;
          } else {
            color = '#16a34a';
            opacity = 0.6;
          }
        }

        if (isSelected) {
          color = '#2563eb';
          opacity = 1;
          weight = weight + 1.5;
        }

        return (
          <Polyline
            key={road.id}
            positions={road.coordinates}
            pathOptions={{
              color: color,
              weight: weight,
              opacity: opacity,
              lineCap: 'round',
              lineJoin: 'round'
            }}
            eventHandlers={{
              click: () => onSelectRoad && onSelectRoad(road)
            }}
          >
            <Tooltip sticky direction="top" className="text-xs font-sans">
              <span className="font-semibold text-slate-900">{road.name}</span>
              <span className="text-[10px] text-slate-500 block">{road.class} • {road.corridor}</span>
            </Tooltip>

            <Popup className="gis-popup">
              <div className="p-3 max-w-[240px] text-slate-800 text-xs select-none">
                <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                  <span className="font-mono text-[10px] font-bold text-slate-500 uppercase">
                    ROAD SEGMENT
                  </span>
                  <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded uppercase ${
                    road.trafficStatus === 'critical' ? 'bg-red-100 text-red-700' :
                    road.trafficStatus === 'moderate' ? 'bg-amber-100 text-amber-700' :
                    'bg-emerald-100 text-emerald-700'
                  }`}>
                    {road.trafficStatus}
                  </span>
                </div>

                <div className="mt-2 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs leading-snug">{road.name}</h4>
                  <div className="text-[11px] text-slate-500">{road.corridor}</div>
                  
                  <div className="pt-1.5 space-y-1 text-[11px] text-slate-700">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Congestion:</span>
                      <span className="font-semibold text-slate-800">{road.congestion}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Average Speed:</span>
                      <span className="font-semibold text-slate-800">{road.averageSpeed}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Sector:</span>
                      <span className="text-slate-800">{road.affectedSector}</span>
                    </div>
                  </div>

                  <div className="text-[9px] text-slate-400 italic pt-1 text-right">
                    SIMULATED DATA
                  </div>
                </div>
              </div>
            </Popup>
          </Polyline>
        );
      })}

      {/* ONE Restrained Blue Diversion Route - Shown when incident is selected or diversion active */}
      {(isDiversionActive || isIncidentSelected) && (
        <Polyline
          positions={diversionCoords}
          pathOptions={{
            color: '#2563eb',
            weight: 4,
            opacity: 0.9,
            dashArray: '6, 8',
            lineCap: 'round',
            lineJoin: 'round'
          }}
        >
          <Tooltip sticky direction="top" className="text-xs font-sans">
            <span className="font-bold text-blue-700">ACTIVE DIVERSION CORRIDOR</span>
            <span className="text-[10px] text-slate-600 block">JM Road → Shivaji Road Bypass</span>
          </Tooltip>
        </Polyline>
      )}
    </>
  );
}
