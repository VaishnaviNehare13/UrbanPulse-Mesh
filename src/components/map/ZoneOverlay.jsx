import React from 'react';
import { Polygon, Polyline, Tooltip } from 'react-leaflet';
import { PUNE_SECTORS, PUNE_WATER_BODIES } from '../../data/puneMapData';

export default function ZoneOverlay({ 
  showSectors, 
  showWaterBodies, 
  onSelectSector, 
  selectedSector 
}) {
  return (
    <>
      {/* Rivers (Mula & Mutha Rivers) - Muted GIS Blue */}
      {showWaterBodies && PUNE_WATER_BODIES.map((water) => (
        <Polyline
          key={water.id}
          positions={water.coordinates}
          pathOptions={{
            color: '#0284c7',
            weight: 3.5,
            opacity: 0.65,
            lineCap: 'round',
            lineJoin: 'round'
          }}
        >
          <Tooltip sticky direction="top" className="text-xs font-sans">
            <span className="font-semibold text-slate-800">{water.name}</span>
          </Tooltip>
        </Polyline>
      ))}

      {/* Ward Boundaries / Administrative Sectors - Subtle Translucent Dash */}
      {showSectors && PUNE_SECTORS.map((sector) => {
        const isSelected = selectedSector?.id === sector.id;
        return (
          <Polygon
            key={sector.id}
            positions={sector.coordinates}
            pathOptions={{
              color: isSelected ? '#1e40af' : '#94a3b8',
              weight: isSelected ? 2 : 1,
              fillColor: '#64748b',
              fillOpacity: isSelected ? 0.08 : 0.02,
              dashArray: isSelected ? undefined : '4, 6'
            }}
            eventHandlers={{
              click: () => onSelectSector && onSelectSector(sector)
            }}
          >
            <Tooltip sticky direction="top" className="text-xs font-sans">
              <span className="font-semibold text-slate-900">{sector.name}</span>
              <span className="text-[10px] text-slate-500 block">Pop: {sector.population} • Area: {sector.areaKm2} km²</span>
            </Tooltip>
          </Polygon>
        );
      })}
    </>
  );
}
