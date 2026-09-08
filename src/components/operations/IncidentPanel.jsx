import React from 'react';
import { 
  Check, 
  Sliders, 
  MapPin, 
  Clock 
} from 'lucide-react';

export default function IncidentPanel({ 
  incident, 
  onApplyDiversion, 
  onOverride, 
  isResolved 
}) {
  if (!incident) return null;

  return (
    <div className="space-y-3.5 text-xs text-slate-800 select-none">
      
      {/* Incident Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <div>
          <span className="font-mono text-[10px] font-bold text-red-600 block">
            ACTIVE INCIDENT
          </span>
          <span className="font-mono text-xs font-bold text-slate-900">
            {incident.id}
          </span>
        </div>
        <span className="font-semibold text-[10px] bg-red-100 text-red-800 px-1.5 py-0.5 rounded uppercase">
          {incident.severity} PRIORITY
        </span>
      </div>

      {/* Incident Details */}
      <div className="space-y-1">
        <h3 className="font-bold text-slate-900 text-xs leading-snug">{incident.title}</h3>
        <div className="flex items-center gap-1 text-[11px] text-slate-600">
          <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
          <span>{incident.locationName}</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500">
          <Clock className="w-3 h-3 text-slate-400 shrink-0" />
          <span>Reported: {incident.timestamp} • Status: {incident.status}</span>
        </div>
      </div>

      {/* Impact Indicators */}
      <div className="bg-slate-50 border border-slate-200 rounded p-2.5 space-y-1 text-[11px]">
        <div className="flex items-center justify-between">
          <span className="text-slate-500">Affected Corridor:</span>
          <span className="font-semibold text-slate-800">FC Road</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-500">Transit Impact:</span>
          <span className="font-semibold text-amber-700">Moderate (+7m Delay)</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-500">Emergency Access:</span>
          <span className="font-semibold text-blue-700">Priority Channel Open</span>
        </div>
      </div>

      {/* Recommended Coordinated Action Plan */}
      <div className="border border-slate-200 bg-white rounded p-2.5 space-y-2">
        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
          <span>Decision Support Proposal</span>
          <span className="font-mono text-slate-400 text-[10px]">DIV-R-8842</span>
        </div>
        <p className="text-[11px] text-slate-700 leading-relaxed">
          {incident.recommendation}
        </p>

        {/* Impact Comparison Table */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-[11px]">
          <div className="bg-slate-50 p-2 rounded">
            <span className="text-[10px] text-slate-500 block">Without Intervention</span>
            <span className="font-bold text-red-700">18 min delay</span>
          </div>
          <div className="bg-slate-50 p-2 rounded">
            <span className="text-[10px] text-slate-500 block">With Coordinated Diversion</span>
            <span className="font-bold text-emerald-700">9 min delay</span>
          </div>
        </div>
      </div>

      {/* Response Actions */}
      {!isResolved ? (
        <div className="space-y-2 pt-1">
          <button
            onClick={() => onApplyDiversion && onApplyDiversion(incident)}
            className="w-full bg-slate-900 hover:bg-slate-800 active:bg-black text-white font-semibold text-xs py-2 px-3 rounded transition-colors flex items-center justify-center space-x-1.5 cursor-pointer shadow-sm"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Apply Coordinated Diversion</span>
          </button>
          
          <button
            onClick={() => onOverride && onOverride(incident)}
            className="w-full bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs py-1.5 px-3 rounded border border-slate-300 transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
          >
            <Sliders className="w-3 h-3 text-slate-400" />
            <span>Manual Override (Hold Baseline)</span>
          </button>
        </div>
      ) : (
        <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded text-emerald-900 space-y-1">
          <div className="font-bold text-xs flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-700" />
            <span>Diversion Active & Synchronized</span>
          </div>
          <p className="text-[11px] text-emerald-800">
            Alternative corridor highlighted. Signal offsets synchronized on JM Road.
          </p>
        </div>
      )}

    </div>
  );
}
