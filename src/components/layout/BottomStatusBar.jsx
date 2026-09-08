import React from 'react';

export default function BottomStatusBar({
  currentZoom = 13
}) {
  return (
    <footer className="h-6 bg-white border-t border-slate-200 px-4 flex items-center justify-between text-[11px] text-slate-500 select-none shrink-0 z-30">
      <div className="flex items-center space-x-2">
        <span className="font-semibold text-slate-700">Pune Municipal Area</span>
        <span className="text-slate-300">|</span>
        <span>GIS / OSM</span>
        <span className="text-slate-300">|</span>
        <span>Zoom {currentZoom}</span>
      </div>

      <div className="flex items-center space-x-3">
        <span className="flex items-center gap-1.5 text-slate-600">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
          <span>6/6 services operational</span>
        </span>
        <span className="text-slate-300">|</span>
        <span className="text-[10px] text-slate-400">SIMULATED OPERATIONAL DATA</span>
      </div>
    </footer>
  );
}
