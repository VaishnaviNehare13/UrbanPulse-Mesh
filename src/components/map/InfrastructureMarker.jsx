import React, { useMemo } from 'react';
import { Marker, Popup, Tooltip } from 'react-leaflet';
import { createFacilityMarker } from '../../styles/mapStyles';

export default function InfrastructureMarker({ facility, isSelected, onSelect, zoomLevel = 13 }) {
  const icon = useMemo(() => {
    return createFacilityMarker(facility.type, isSelected);
  }, [facility.type, isSelected]);

  return (
    <Marker
      position={[facility.lat, facility.lng]}
      icon={icon}
      eventHandlers={{
        click: () => onSelect(facility)
      }}
    >
      <Tooltip 
        direction="top" 
        offset={[0, -10]} 
        permanent={zoomLevel >= 15}
        className="text-xs font-sans"
      >
        <span className="font-semibold text-slate-900">{facility.name}</span>
        <span className="text-[10px] text-slate-500 block">({facility.subtype || facility.type})</span>
      </Tooltip>

      <Popup className="gis-popup">
        <div className="p-3 max-w-[250px] text-slate-800 text-xs select-none">
          {/* Header */}
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
            <span className="font-mono text-[10px] font-bold uppercase text-slate-500">
              {facility.type.replace('_', ' ')}
            </span>
            <span className="text-[10px] font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
              {facility.simulatedStatus || 'Operational'}
            </span>
          </div>

          {/* Name & Subtype */}
          <div className="mt-2 space-y-1">
            <h4 className="font-bold text-slate-900 text-xs leading-snug">{facility.name}</h4>
            <div className="text-[11px] text-slate-500">{facility.subtype}</div>
            
            <div className="pt-1.5 text-[11px] space-y-1 text-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Ward:</span>
                <span className="font-medium text-slate-800">{facility.ward}</span>
              </div>

              {facility.capacityBeds && (
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Bed Capacity:</span>
                  <span className="font-semibold text-slate-800">{facility.capacityBeds} (ICU: {facility.icuAvailable})</span>
                </div>
              )}

              {facility.availableEngines !== undefined && (
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Engines / Turnout:</span>
                  <span className="font-semibold text-slate-800">{facility.availableEngines} Engines ({facility.turnoutTime})</span>
                </div>
              )}

              {facility.dailyFootfall && (
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Daily Footfall:</span>
                  <span className="font-semibold text-slate-800">{facility.dailyFootfall}</span>
                </div>
              )}

              {facility.simulatedPressure && (
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Water Pressure:</span>
                  <span className="font-semibold text-blue-700">{facility.simulatedPressure}</span>
                </div>
              )}

              {facility.simulatedLoadPercent !== undefined && (
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Transformer Load:</span>
                  <span className="font-semibold text-amber-700">{facility.simulatedLoadPercent}%</span>
                </div>
              )}
            </div>

            {facility.emergencyContact && (
              <div className="pt-1.5 mt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                <span>Emergency Contact:</span>
                <span className="font-mono font-medium text-slate-800">{facility.emergencyContact}</span>
              </div>
            )}

            <div className="text-[9px] text-slate-400 italic pt-1 text-right">
              SIMULATED OPERATIONAL DATA
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
