import React, { useState } from 'react';
import { Layers, ChevronDown, ChevronUp } from 'lucide-react';

export default function MapLayers({ layers, setLayers }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLayer = (key) => {
    setLayers((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const layerGroups = [
    {
      group: 'BASE',
      items: [
        { key: 'roads', label: 'Roads' },
        { key: 'sectors', label: 'Ward Boundaries' },
        { key: 'waterBodies', label: 'Water Bodies' }
      ]
    },
    {
      group: 'MUNICIPAL ASSETS',
      items: [
        { key: 'hospitals', label: 'Hospitals' },
        { key: 'fireStations', label: 'Fire Stations' },
        { key: 'transit', label: 'Transit' },
        { key: 'utilities', label: 'Utilities' }
      ]
    },
    {
      group: 'OPERATIONS',
      items: [
        { key: 'incidents', label: 'Incidents' },
        { key: 'traffic', label: 'Diversion Routes / Traffic' },
        { key: 'operationalZones', label: 'Operational Zones' }
      ]
    }
  ];

  return (
    <div className="absolute top-3 left-3 z-[1000] select-none text-xs">
      {/* Small White Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white border border-slate-300 shadow-sm rounded px-2.5 py-1.5 flex items-center space-x-2 text-slate-700 hover:bg-slate-50 font-medium transition-colors"
      >
        <Layers className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-800">LAYERS</span>
        {isOpen ? (
          <ChevronUp className="w-3 h-3 text-slate-400" />
        ) : (
          <ChevronDown className="w-3 h-3 text-slate-400" />
        )}
      </button>

      {/* Layer Control Panel */}
      {isOpen && (
        <div className="mt-1 bg-white border border-slate-300 rounded shadow-md p-3 w-56 space-y-3">
          {layerGroups.map((grp) => (
            <div key={grp.group} className="space-y-1">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pb-0.5 border-b border-slate-100">
                {grp.group}
              </div>
              <div className="space-y-1 pt-0.5">
                {grp.items.map((item) => {
                  const active = layers[item.key] !== undefined ? layers[item.key] : true;
                  return (
                    <label
                      key={item.key}
                      className="flex items-center space-x-2 text-slate-700 hover:text-slate-900 cursor-pointer py-0.5"
                    >
                      <input
                        type="checkbox"
                        checked={!!active}
                        onChange={() => toggleLayer(item.key)}
                        className="rounded border-slate-300 text-slate-900 focus:ring-slate-500 w-3.5 h-3.5"
                      />
                      <span className="text-xs text-slate-700">{item.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
