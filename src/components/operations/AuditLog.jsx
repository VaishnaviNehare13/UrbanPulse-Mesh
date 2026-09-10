import React from 'react';
import { Clock, ShieldCheck, AlertCircle } from 'lucide-react';

export default function AuditLog({ auditLogs }) {
  return (
    <div className="space-y-2.5 text-xs text-slate-800 select-none font-sans">
      <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
        <div>
          <span className="font-bold text-[9px] text-slate-400 uppercase tracking-wider block">
            PUNE MESH EVENT BUS
          </span>
          <h3 className="font-bold text-xs text-slate-900 leading-none mt-0.5">
            MUNICIPAL AUDIT TRAIL
          </h3>
        </div>
        <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-xs border border-slate-200">
          {auditLogs.length} EVENTS
        </span>
      </div>

      <div className="space-y-2 overflow-y-auto max-h-[480px] pr-1">
        {auditLogs.map((log) => {
          const isWarning = log.severity === 'warning';
          const isSuccess = log.severity === 'normal' || log.event?.includes('APPLIED') || log.event?.includes('ACTIVE');

          return (
            <div 
              key={log.id} 
              className="p-2.5 rounded-xs border border-slate-200 bg-white text-[11px] space-y-1.5 hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>{log.time} IST</span>
                </div>
                <span className={`text-[9px] font-bold uppercase px-1.5 py-0.2 rounded-xs border ${
                  isWarning ? 'bg-amber-50 text-amber-800 border-amber-200' :
                  isSuccess ? 'bg-emerald-50 text-emerald-800 border-emerald-200' :
                  'bg-slate-100 text-slate-700 border-slate-200'
                }`}>
                  {log.service}
                </span>
              </div>

              <div className="font-bold text-slate-900 text-xs flex items-center justify-between">
                <span>{log.event}</span>
                {log.operator && (
                  <span className="text-[10px] font-normal text-slate-500 font-sans">
                    By: {log.operator}
                  </span>
                )}
              </div>

              <p className="text-slate-600 leading-relaxed text-[11px]">
                {log.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

