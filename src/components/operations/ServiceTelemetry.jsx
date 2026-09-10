import React from 'react';
import { ArrowRight, AlertTriangle } from 'lucide-react';

export default function ServiceTelemetry({ servicesData, onSelectIncident, activeIncident }) {
  const serviceRows = [
    {
      id: 'traffic',
      name: 'TRAFFIC',
      detail: 'FC Road — Slow',
      status: '72% Attention',
      statusType: 'attention'
    },
    {
      id: 'emergency',
      name: 'EMERGENCY',
      detail: 'Response Network — Active',
      status: 'Normal',
      statusType: 'normal'
    },
    {
      id: 'transit',
      name: 'TRANSIT',
      detail: 'PMPML / Metro',
      status: 'Minor Delay',
      statusType: 'minor-delay'
    },
    {
      id: 'water',
      name: 'WATER',
      detail: 'Parvati WTP',
      status: 'Normal',
      statusType: 'normal'
    },
    {
      id: 'power',
      name: 'POWER',
      detail: 'Rasta Peth',
      status: 'High Load',
      statusType: 'high-load'
    },
    {
      id: 'waste',
      name: 'WASTE',
      detail: 'Logistics Routes',
      status: 'Normal',
      statusType: 'normal'
    }
  ];

  return (
    <div className="space-y-3.5 text-xs text-slate-800 font-sans select-none">
      
      {/* 1. CITY STATUS */}
      <div>
        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">
          CITY STATUS
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xs p-2.5 space-y-1.5 text-[11px]">
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Services</span>
            <span className="font-semibold text-emerald-700">6/6 SERVICES OPERATIONAL</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Active Incidents</span>
            <span className="font-semibold text-red-700 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
              <span>1 ACTIVE INCIDENT</span>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Network State</span>
            <span className="font-semibold text-slate-800">NETWORK NORMAL</span>
          </div>
        </div>
      </div>

      {/* 2. ACTIVE INCIDENT HIGHLIGHT */}
      {activeIncident && (
        <div>
          <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>PRIORITY ALERT</span>
            <span className="text-red-700 font-mono text-[9px]">UP-1024</span>
          </div>
          <div className="border border-red-200 bg-red-50/40 rounded-xs p-2.5 space-y-2">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="font-bold text-slate-900 text-xs leading-snug">
                  Multi-Vehicle Collision & Transit Stoppage
                </div>
                <div className="text-[11px] text-slate-600 mt-0.5">
                  FC Road near Goodluck Chowk
                </div>
              </div>
              <span className="text-[9px] font-bold text-red-700 uppercase bg-red-100/80 border border-red-200 px-1.5 py-0.5 rounded-xs shrink-0">
                HIGH SEVERITY
              </span>
            </div>

            <div className="flex items-center justify-between text-[11px] pt-1.5 border-t border-red-100">
              <span className="text-red-800 font-medium">Status: Active</span>
              <button
                onClick={() => onSelectIncident(activeIncident)}
                className="text-[11px] font-semibold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 px-2.5 py-1 rounded-xs transition-colors flex items-center gap-1 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 shadow-2xs"
              >
                <span>OPEN INCIDENT RESPONSE</span>
                <ArrowRight className="w-3 h-3 text-slate-700" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. SERVICE STATUS (COMPACT ROWS) */}
      <div>
        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">
          SERVICE STATUS
        </div>
        <div className="border border-slate-200 rounded-xs divide-y divide-slate-100 bg-white">
          {serviceRows.map((svc) => {
            const isAttention = svc.statusType === 'attention' || svc.statusType === 'high-load';
            const isMinor = svc.statusType === 'minor-delay';
            const isNormal = svc.statusType === 'normal';

            return (
              <div key={svc.id} className="p-2 px-2.5 flex items-center justify-between text-[11px]">
                <div>
                  <span className="font-bold text-slate-900 mr-2 text-[10px] tracking-wide">{svc.name}</span>
                  <span className="text-slate-600">{svc.detail}</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium shrink-0">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    isAttention ? 'bg-amber-500' : isMinor ? 'bg-amber-400' : 'bg-emerald-600'
                  }`}></span>
                  <span className={
                    isAttention ? 'text-amber-800 font-semibold' : isMinor ? 'text-amber-700' : 'text-emerald-700'
                  }>
                    {svc.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}

