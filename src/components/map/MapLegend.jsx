import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function MapLegend() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="absolute bottom-3 left-3 z-[1000] select-none text-xs">
      <div className="bg-white border border-slate-300 shadow-sm rounded overflow-hidden w-48">
        {/* Toggle Bar */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-2.5 py-1.5 flex items-center justify-between text-slate-700 hover:bg-slate-50 transition-colors"
        >
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
            LEGEND
          </span>
          {isExpanded ? (
            <ChevronDown className="w-3 h-3 text-slate-400" />
          ) : (
            <ChevronUp className="w-3 h-3 text-slate-400" />
          )}
        </button>

        {/* Compact Legend Content */}
        {isExpanded && (
          <div className="px-2.5 pb-2.5 pt-1 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-700">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block shrink-0"></span>
              <span>Active Incident</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-sm border border-slate-400 bg-white inline-block shrink-0"></span>
              <span>Infrastructure</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3.5 h-[3px] bg-slate-500 inline-block shrink-0"></span>
              <span>Primary Corridor</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3.5 h-[1px] border-b border-dashed border-slate-400 inline-block shrink-0"></span>
              <span>Ward Boundary</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3.5 h-[3px] bg-sky-600 inline-block shrink-0"></span>
              <span>Water Body</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
