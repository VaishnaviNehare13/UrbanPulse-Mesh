import React from 'react';

export default function AuditLog({ auditLogs }) {
  return (
    <div className="space-y-2 text-xs text-slate-800 select-none">
      <div className="flex items-center justify-between pb-1 border-b border-slate-200">
        <span className="font-bold text-[10px] text-slate-500 uppercase tracking-wider">
          EVENT BUS & AUDIT LOG
        </span>
        <span className="text-[10px] font-mono text-slate-400">PUNE MESH</span>
      </div>

      <div className="space-y-2 overflow-y-auto pr-1">
        {auditLogs.map((log) => (
          <div 
            key={log.id} 
            className="p-2 rounded border border-slate-200 bg-white text-[11px] space-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-slate-400">{log.time} IST</span>
              <span className="text-[9px] font-semibold uppercase px-1.5 py-0.2 rounded bg-slate-100 text-slate-600">
                {log.service}
              </span>
            </div>

            <div className="font-semibold text-slate-900 text-[11px]">
              {log.event}
            </div>

            <p className="text-slate-600 leading-relaxed text-[11px]">
              {log.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
