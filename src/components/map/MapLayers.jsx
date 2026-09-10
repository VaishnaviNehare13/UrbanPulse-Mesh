import React, { useState } from 'react';
import { Layers, ChevronDown, ChevronUp, CheckSquare, Square } from 'lucide-react';

export default function MapLayers({ layers, setLayers, onLayerToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLayer = (key, label) => {
    const nextState = !layers[key];
    setLayers((prev) => ({
      ...prev,
      [key]: nextState
    }));
    if (onLayerToggle) {
      onLayerToggle(label, nextState);
    }
  };

  const handleShowAll = () => {
    setLayers((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach(k => { updated[k] = true; });
      return updated;
    });
    if (onLayerToggle) onLayerToggle("All GIS Layers", true);
  };

  const handleClearAll = () => {
    setLayers((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach(k => { updated[k] = false; });
      // Keep base road and ward visible by default for map context
      updated.roads = true;
      updated.wards = true;
      return updated;
    });
    if (onLayerToggle) onLayerToggle("Municipal Assets & Operations", false);
  };

  const layerGroups = [
    {
      group: 'BASE',
      items: [
        { key: 'roads', label: 'Roads' },
        { key: 'wards', label: 'Ward Boundaries' },
        { key: 'waterBodies', label: 'Water Bodies' }
      ]
    },
    {
      group: 'MUNICIPAL ASSETS',
      items: [
        { key: 'hospitals', label: 'Hospitals' },
        { key: 'fireStations', label: 'Fire Stations' },
        { key: 'transit', label: 'Transit' },
        { key: 'parks', label: 'Parks & Gardens' },
        { key: 'waterInfra', label: 'Water Infrastructure' },
        { key: 'wasteFacilities', label: 'Waste Facilities' }
      ]
    },
    {
      group: 'OPERATIONS',
      items: [
        { key: 'incidents', label: 'Incidents' },
        { key: 'operationalZones', label: 'Operational Zones' },
        { key: 'diversionRoutes', label: 'Diversion Routes' }
      ]
    }
  ];

  return (
    <div className="absolute top-3 left-3 z-[1000] select-none text-xs font-sans">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle Layer Visibility Panel"
        className="bg-white border border-slate-300 shadow-xs rounded-xs px-2.5 py-1.5 flex items-center space-x-2 text-slate-700 hover:bg-slate-50 font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
      >
        <Layers className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-800">LAYERS</span>
        {isOpen ? (
          <ChevronUp className="w-3 h-3 text-slate-400" />
        ) : (
          <ChevronDown className="w-3 h-3 text-slate-400" />
        )}
      </button>

      {/* Layer Control Panel */}
      {isOpen && (
        <div className="mt-1 bg-white border border-slate-300 rounded-xs shadow-md p-3 w-64 space-y-3 max-h-[460px] overflow-y-auto">
          
          {/* Quick Actions Header */}
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
            <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wide">
              GIS Layer Catalog
            </span>
            <div className="flex items-center space-x-1.5 text-[10px]">
              <button
                onClick={handleShowAll}
                className="text-blue-700 hover:text-blue-900 font-semibold uppercase hover:underline cursor-pointer"
              >
                Show All
              </button>
              <span className="text-slate-300">|</span>
              <button
                onClick={handleClearAll}
                className="text-slate-500 hover:text-slate-800 font-medium uppercase hover:underline cursor-pointer"
              >
                Clear All
              </button>
            </div>
          </div>

          {layerGroups.map((grp) => (
            <div key={grp.group} className="space-y-1">
              <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider pb-0.5 border-b border-slate-100">
                {grp.group}
              </div>
              <div className="space-y-0.5 pt-0.5">
                {grp.items.map((item) => {
                  const active = layers[item.key] !== undefined ? layers[item.key] : false;
                  return (
                    <label
                      key={item.key}
                      className="flex items-center justify-between text-slate-700 hover:text-slate-900 hover:bg-slate-50/80 px-1.5 py-1 rounded-xs cursor-pointer text-[11px] transition-colors"
                    >
                      <span>{item.label}</span>
                      <input
                        type="checkbox"
                        checked={!!active}
                        onChange={() => toggleLayer(item.key, item.label)}
                        className="rounded-xs border-slate-300 text-slate-900 focus:ring-slate-500 w-3.5 h-3.5 cursor-pointer"
                      />
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

