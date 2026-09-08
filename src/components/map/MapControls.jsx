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
    <div className="absolute top-3 right-3 z-[1000] flex flex-col space-y-1 select-none">
      <button
        onClick={handleZoomIn}
        title="Zoom In"
        className="w-7 h-7 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm rounded flex items-center justify-center text-slate-700 font-bold transition-colors cursor-pointer"
      >
        <Plus className="w-3.5 h-3.5" />
      </button>
      <button
        onClick={handleZoomOut}
        title="Zoom Out"
        className="w-7 h-7 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm rounded flex items-center justify-center text-slate-700 font-bold transition-colors cursor-pointer"
      >
        <Minus className="w-3.5 h-3.5" />
      </button>
      <button
        onClick={handleReset}
        title="Reset Map View"
        className="w-7 h-7 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm rounded flex items-center justify-center text-slate-700 transition-colors cursor-pointer"
      >
        <RotateCcw className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
