import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServiceTelemetry({ servicesData, onSelectIncident, activeIncident }) {
  const serviceRows = [
    {
      id: 'traffic',
      name: 'TRAFFIC',
      detail: 'FC Road — Slow',
      status: '72% attention',
      statusType: 'warning'
    },
    {
      id: 'emergency',
      name: 'EMERGENCY',
      detail: 'Response network — Active',
      status: 'Normal',
      statusType: 'normal'
    },
    {
      id: 'transit',
      name: 'TRANSIT',
      detail: 'PMPML / Metro',
      status: 'Minor delay',
      statusType: 'warning'
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
      status: 'High load',
      statusType: 'warning'
    },
    {
      id: 'waste',
      name: 'WASTE',
      detail: 'Logistics routes',
      status: 'Normal',
      statusType: 'normal'
    }
  ];

  return (
    <div className="space-y-4 text-xs text-slate-800">
      
      {/* 1. CITY STATUS */}
      <div>
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
          CITY STATUS
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded p-2.5 space-y-1.5 text-[11px]">
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Services</span>
            <span className="font-semibold text-emerald-700">6/6 OPERATIONAL</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Active Incident</span>
            <span className="font-semibold text-red-600">1</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Network State</span>
            <span className="font-semibold text-slate-800">NORMAL</span>
          </div>
        </div>
      </div>

      {/* 2. ACTIVE INCIDENT */}
      {activeIncident && (
        <div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
            ACTIVE INCIDENT
          </div>
          <div className="border border-red-200 bg-red-50/50 rounded p-2.5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-red-700">{activeIncident.id}</span>
              <span className="text-[10px] font-bold text-red-700 uppercase bg-red-100 px-1.5 py-0.2 rounded">
                HIGH SEVERITY
              </span>
            </div>
            
            <div>
              <div className="font-semibold text-slate-900 leading-snug">{activeIncident.title}</div>
              <div className="text-[11px] text-slate-600">{activeIncident.locationName}</div>
            </div>

            <div className="flex items-center justify-between text-[11px] pt-1 border-t border-red-200/60">
              <span className="text-red-700 font-medium">Status: Active</span>
              <button
                onClick={() => onSelectIncident(activeIncident)}
                className="text-[11px] font-semibold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 px-2 py-0.5 rounded transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>INSPECT</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. SERVICE STATUS (ROWS INSTEAD OF BIG CARDS) */}
      <div>
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
          SERVICE STATUS
        </div>
        <div className="border border-slate-200 rounded divide-y divide-slate-100 bg-white">
          {serviceRows.map((svc) => (
            <div key={svc.id} className="p-2 flex items-center justify-between text-[11px]">
              <div>
                <span className="font-semibold text-slate-800 mr-2">{svc.name}</span>
                <span className="text-slate-500">{svc.detail}</span>
              </div>
              <span className={`font-medium ${
                svc.statusType === 'warning' ? 'text-amber-700' : 'text-emerald-700'
              }`}>
                {svc.status}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
