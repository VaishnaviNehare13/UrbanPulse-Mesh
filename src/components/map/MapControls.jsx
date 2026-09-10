import React from 'react';
import { useMap } from 'react-leaflet';
import { Plus, Minus, RotateCcw } from 'lucide-react';
import { PUNE_CENTER, DEFAULT_ZOOM } from '../../data/puneMapData';

export default function MapControls({ onResetView }) {
  const map = useMap();

  const handleZoomIn = () => map.zoomIn();
  const handleZoomOut = () => map.zoomOut();
  
  const handleReset = () => {
    map.setView(PUNE_CENTER, DEFAULT_ZOOM);
    if (onResetView) onResetView();
  };

  return (
    <div className="absolute top-3 right-3 z-[1000] flex flex-col space-y-1 select-none font-sans" role="toolbar" aria-label="Map Navigation Controls">
      <button
        onClick={handleZoomIn}
        title="Zoom In"
        aria-label="Zoom In"
        className="w-7 h-7 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs rounded-xs flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
      >
        <Plus className="w-3.5 h-3.5" />
      </button>
      <button
        onClick={handleZoomOut}
        title="Zoom Out"
        aria-label="Zoom Out"
        className="w-7 h-7 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs rounded-xs flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
      >
        <Minus className="w-3.5 h-3.5" />
      </button>
      <button
        onClick={handleReset}
        title="Reset Map View (Pune Default)"
        aria-label="Reset Map View"
        className="w-7 h-7 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs rounded-xs flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
      >
        <RotateCcw className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

