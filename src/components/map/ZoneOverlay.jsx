import React, { useState } from 'react';
import { Polygon, Polyline, Tooltip, Popup, useMap } from 'react-leaflet';
import { PUNE_WARDS_GEOJSON } from '../../data/geo/puneWards';
import { PUNE_WATER_BODIES_GEOJSON } from '../../data/geo/puneWaterBodies';
import { ArrowRight } from 'lucide-react';

export default function ZoneOverlay({ 
  showWards, 
  showWaterBodies, 
  onSelectWard, 
  selectedWard 
}) {
  const map = useMap();
  const [hoveredWardId, setHoveredWardId] = useState(null);

  return (
    <>
      {/* Real Rivers & Water Bodies (Mutha, Mula, Confluence & Lakes) - Restrained GIS Hydro Style */}
      {showWaterBodies && PUNE_WATER_BODIES_GEOJSON.features.map((feature) => {
        const isPolygon = feature.geometry.type === 'Polygon';
        const coords = isPolygon 
          ? feature.geometry.coordinates[0].map(c => [c[1], c[0]])
          : feature.geometry.coordinates.map(c => [c[1], c[0]]);

        if (isPolygon) {
          return (
            <Polygon
              key={feature.id}
              positions={coords}
              pathOptions={{
                color: '#0284c7',
                weight: 1.2,
                opacity: 0.6,
                fillColor: '#38bdf8',
                fillOpacity: 0.18
              }}
            >
              <Tooltip sticky direction="top" className="text-xs font-sans">
                <span className="font-semibold text-slate-800">{feature.properties.name}</span>
                <span className="text-[10px] text-slate-500 block">{feature.properties.type}</span>
              </Tooltip>

              <Popup className="gis-popup">
                <div className="p-3 max-w-[220px] text-slate-800 text-xs select-none">
                  <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                    <span className="font-mono text-[10px] font-bold text-sky-700 uppercase">WATER BODY</span>
                    <span className="text-[10px] text-slate-400 font-mono">PUNE GIS</span>
                  </div>
                  <div className="mt-2 space-y-1">
                    <h4 className="font-bold text-slate-900 text-xs">{feature.properties.name}</h4>
                    <p className="text-[11px] text-slate-600 leading-snug">{feature.properties.description}</p>
                    <div className="pt-1 text-[10px] text-slate-500">
                      <div>Area: {feature.properties.areaKm2} km²</div>
                      <div>Ward: {feature.properties.ward}</div>
                    </div>
                  </div>
                </div>
              </Popup>
            </Polygon>
          );
        }

        return (
          <Polyline
            key={feature.id}
            positions={coords}
            pathOptions={{
              color: '#0284c7',
              weight: feature.id === 'RIVER-MULA-MUTHA' ? 3.8 : 3.0,
              opacity: 0.65,
              lineCap: 'round',
              lineJoin: 'round'
            }}
          >
            <Tooltip sticky direction="top" className="text-xs font-sans">
              <span className="font-semibold text-slate-800">{feature.properties.name}</span>
              <span className="text-[10px] text-slate-500 block">{feature.properties.basin}</span>
            </Tooltip>

            <Popup className="gis-popup">
              <div className="p-3 max-w-[230px] text-slate-800 text-xs select-none">
                <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                  <span className="font-mono text-[10px] font-bold text-sky-700 uppercase">RIVER NETWORK</span>
                  <span className="text-[10px] text-slate-400 font-mono">HYDROLOGY</span>
                </div>
                <div className="mt-2 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs">{feature.properties.name}</h4>
                  <div className="text-[11px] text-slate-600 leading-snug">{feature.properties.description}</div>
                  <div className="pt-1 text-[10px] text-slate-500 space-y-0.5">
                    <div>Basin: {feature.properties.basin}</div>
                    <div>Source: {feature.properties.source}</div>
                    <div>Corridor Length: {feature.properties.flowLengthKm} km</div>
                  </div>
                </div>
              </div>
            </Popup>
          </Polyline>
        );
      })}

      {/* Real Pune Administrative Ward Boundaries - Subtle, Non-Overpowering GIS Styling */}
      {showWards && PUNE_WARDS_GEOJSON.features.map((feature) => {
        const isSelected = selectedWard?.id === feature.id;
        const isHovered = hoveredWardId === feature.id;
        const coords = feature.geometry.coordinates[0].map(c => [c[1], c[0]]);

        return (
          <Polygon
            key={feature.id}
            positions={coords}
            pathOptions={{
              color: isSelected ? '#1e40af' : (isHovered ? '#3b82f6' : '#64748b'),
              weight: isSelected ? 2.2 : (isHovered ? 1.8 : 1.0),
              fillColor: isSelected || isHovered ? '#3b82f6' : '#94a3b8',
              fillOpacity: isSelected ? 0.07 : (isHovered ? 0.05 : 0.015),
              dashArray: isSelected ? undefined : '3, 6'
            }}
            eventHandlers={{
              click: () => onSelectWard && onSelectWard(feature.properties),
              mouseover: () => setHoveredWardId(feature.id),
              mouseout: () => setHoveredWardId(null)
            }}
          >
            {/* Subtle Tooltip on Hover */}
            <Tooltip 
              sticky 
              direction="top" 
              className="text-xs font-sans"
            >
              <div className="font-semibold text-slate-900">
                Ward {feature.properties.wardNo}: {feature.properties.name}
              </div>
              <div className="text-[10px] text-slate-500">
                Area: {feature.properties.areaKm2} km² • Pop: {feature.properties.population.toLocaleString('en-IN')}
              </div>
            </Tooltip>

            {/* Institutional Ward Popup */}
            <Popup className="gis-popup">
              <div className="p-3 max-w-[240px] text-slate-800 text-xs select-none">
                <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                  <span className="font-mono text-[10px] font-bold text-slate-500 uppercase">
                    WARD BOUNDARY
                  </span>
                  <span className="font-mono text-[10px] font-bold text-slate-700">
                    No. {feature.properties.wardNo}
                  </span>
                </div>

                <div className="mt-2 space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-xs leading-snug">
                    {feature.properties.name}
                  </h4>
                  <div className="text-[11px] text-slate-500">
                    {feature.properties.officeLocation}
                  </div>

                  <div className="pt-1 space-y-1 text-[11px] text-slate-700 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Administrative Area:</span>
                      <span className="font-medium text-slate-800">{feature.properties.areaKm2} km²</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Population (Census):</span>
                      <span className="font-medium text-slate-800">{feature.properties.population.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="text-[10px] text-slate-500 pt-0.5">
                      <span className="font-semibold text-slate-700 block mb-0.5">Zone Character:</span>
                      {feature.properties.zoneType}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (coords && coords.length > 0) {
                        map.fitBounds(coords, { padding: [24, 24] });
                      }
                    }}
                    className="mt-2.5 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[11px] py-1.5 px-2 rounded flex items-center justify-center space-x-1 transition-colors cursor-pointer"
                  >
                    <span>ZOOM TO AREA</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </Popup>
          </Polygon>
        );
      })}
    </>
  );
}
