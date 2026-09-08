import React, { useMemo } from 'react';
import { Marker, Popup, Tooltip } from 'react-leaflet';
import { createIncidentMarker } from '../../styles/mapStyles';
import { ArrowRight } from 'lucide-react';

export default function IncidentMarker({ incident, isSelected, onSelect, onOpenActionPanel, isDominant = true }) {
  const icon = useMemo(() => {
    return createIncidentMarker(incident.severity, isSelected, isDominant);
  }, [incident.severity, isSelected, isDominant]);

  return (
    <Marker
      position={[incident.lat, incident.lng]}
      icon={icon}
      eventHandlers={{
        click: () => onSelect(incident)
      }}
    >
      <Tooltip direction="top" offset={[0, -12]} className="text-xs font-sans">
        <div className="font-semibold text-slate-900">
          <span className="text-red-600 mr-1">●</span>
          <span>{incident.id}: {incident.locationName}</span>
        </div>
      </Tooltip>

      <Popup className="gis-popup">
        <div className="p-3 max-w-[240px] text-slate-800 text-xs select-none">
          {/* Header */}
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
            <span className="font-mono text-[10px] font-bold text-red-600 tracking-wider">
              ACTIVE INCIDENT
            </span>
            <span className="font-mono text-[10px] font-bold text-slate-500">
              {incident.id}
            </span>
          </div>

          {/* Title & Location */}
          <div className="mt-2 space-y-1">
            <h4 className="font-bold text-slate-900 leading-snug">{incident.title}</h4>
            <div className="text-[11px] text-slate-600">{incident.locationName}</div>
          </div>

          {/* Key Parameters */}
          <div className="mt-2 pt-2 border-t border-slate-100 space-y-1 text-[11px]">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Severity:</span>
              <span className="font-semibold text-red-600">{incident.severity === 'HIGH' ? 'High' : incident.severity}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Status:</span>
              <span className="font-medium text-slate-800">{incident.status === 'Response in Progress' ? 'Active' : incident.status}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Affected corridor:</span>
              <span className="font-medium text-slate-800">FC Road</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Transit impact:</span>
              <span className="font-medium text-amber-700">Moderate</span>
            </div>
          </div>

          {/* Action CTA */}
          <button
            onClick={() => {
              onSelect(incident);
              if (onOpenActionPanel) onOpenActionPanel(incident);
            }}
            className="mt-3 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[11px] py-1.5 px-2 rounded flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
          >
            <span>INSPECT INCIDENT</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </Popup>
    </Marker>
  );
}
