import React from 'react';
import { Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import { createFacilityMarker } from '../../styles/mapStyles';
import { PUNE_HOSPITALS_GEOJSON } from '../../data/geo/puneHospitals';
import { PUNE_FIRE_STATIONS_GEOJSON } from '../../data/geo/puneFireStations';
import { PUNE_TRANSIT_GEOJSON } from '../../data/geo/puneTransit';
import { PUNE_PARKS_GEOJSON } from '../../data/geo/puneParks';
import { PUNE_WATER_INFRA_GEOJSON, PUNE_WASTE_FACILITIES_GEOJSON } from '../../data/geo/puneUtilities';
import { ArrowRight } from 'lucide-react';

export default function FacilityOverlay({
  layers,
  selectedObject,
  onSelectObject,
  zoomLevel = 13
}) {
  const map = useMap();

  // Helper renderer with tiered Cartographic Level of Detail (LoD)
  const renderFacility = (feature, type, minZoom = 11) => {
    const isSelected = selectedObject?.id === feature.id;

    // Decluttering: filter out features that require a higher zoom level unless explicitly selected
    if (zoomLevel < minZoom && !isSelected) {
      return null;
    }

    const [lng, lat] = feature.geometry.coordinates;
    const props = feature.properties;
    const icon = createFacilityMarker(type, isSelected);

    return (
      <Marker
        key={feature.id}
        position={[lat, lng]}
        icon={icon}
        eventHandlers={{
          click: () => onSelectObject && onSelectObject({ ...props, lat, lng, type })
        }}
      >
        <Tooltip 
          direction="top" 
          offset={[0, -10]} 
          className="text-xs font-sans"
        >
          <span className="font-semibold text-slate-900">{props.name}</span>
          <span className="text-[10px] text-slate-500 block">{props.subtype || props.type}</span>
        </Tooltip>

        <Popup className="gis-popup">
          <div className="p-3 max-w-[240px] text-slate-800 text-xs select-none">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-1 border-b border-slate-200">
              <span className="font-mono text-[10px] font-bold uppercase text-slate-500">
                {type === 'hospital' ? 'HOSPITAL' :
                 type === 'fire_station' ? 'FIRE STATION' :
                 type === 'transit' ? 'TRANSIT' :
                 type === 'park' ? 'PARK / GREEN SPACE' :
                 type === 'water_infra' ? 'WATER UTILITY' :
                 type === 'waste_facility' ? 'WASTE FACILITY' : 'FACILITY'}
              </span>
              <span className="font-mono text-[10px] text-slate-400 font-medium">
                PUNE GIS
              </span>
            </div>

            {/* Title & Location */}
            <div className="mt-2 space-y-1">
              <h4 className="font-bold text-slate-900 text-xs leading-snug">{props.name}</h4>
              <div className="text-[11px] text-slate-500">{props.subtype || props.type}</div>
              
              <div className="pt-1.5 space-y-1 text-[11px] text-slate-700 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Ward:</span>
                  <span className="font-medium text-slate-800">{props.ward}</span>
                </div>

                {props.capacityBeds && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Bed Capacity:</span>
                    <span className="font-semibold text-slate-800">{props.capacityBeds} Beds</span>
                  </div>
                )}

                {props.capacityMLD && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Treatment Capacity:</span>
                    <span className="font-semibold text-blue-700">{props.capacityMLD}</span>
                  </div>
                )}

                {props.processingCapacity && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Processing:</span>
                    <span className="font-semibold text-emerald-700">{props.processingCapacity}</span>
                  </div>
                )}

                {props.dailyFootfall && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Daily Footfall:</span>
                    <span className="font-semibold text-slate-800">{props.dailyFootfall}</span>
                  </div>
                )}

                {props.areaAcres && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Park Area:</span>
                    <span className="font-semibold text-emerald-800">{props.areaAcres} Acres</span>
                  </div>
                )}

                {props.phone && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Contact:</span>
                    <span className="font-mono text-slate-800">{props.phone}</span>
                  </div>
                )}

                {props.location && (
                  <div className="text-[10px] text-slate-500 pt-0.5">
                    <span className="font-semibold text-slate-700">Location: </span>
                    {props.location}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  map.setView([lat, lng], 16, { animate: true });
                }}
                className="mt-2.5 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[11px] py-1.5 px-2 rounded flex items-center justify-center space-x-1 transition-colors cursor-pointer"
              >
                <span>
                  {type === 'hospital' ? 'VIEW ON MAP' : 
                   type === 'fire_station' ? 'ZOOM TO FACILITY' : 
                   'ZOOM TO LOCATION'}
                </span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

          </div>
        </Popup>
      </Marker>
    );
  };

  return (
    <>
      {/* 1. Hospitals Layer: Major at Zoom 11+, Secondary at Zoom 13+ */}
      {layers.hospitals && PUNE_HOSPITALS_GEOJSON.features.map(f => 
        renderFacility(f, 'hospital', f.properties.isMajorFacility ? 11 : 13)
      )}

      {/* 2. Fire Stations Layer: Major at Zoom 11+, Secondary at Zoom 13+ */}
      {layers.fireStations && PUNE_FIRE_STATIONS_GEOJSON.features.map(f => 
        renderFacility(f, 'fire_station', f.properties.isMajorFacility ? 11 : 13)
      )}

      {/* 3. Transit Layer: Major Hubs at Zoom 11+, Metro Stations at Zoom 13+, Local Stops at Zoom 15+ */}
      {layers.transit && PUNE_TRANSIT_GEOJSON.features.map(f => {
        const isHub = f.properties.isMajorHub;
        const isMetro = f.id.includes('METRO');
        const minZoom = isHub ? 11 : (isMetro ? 13 : 15);
        return renderFacility(f, 'transit', minZoom);
      })}

      {/* 4. Parks & Public Gardens: Prominent at Zoom 13+ */}
      {layers.parks && PUNE_PARKS_GEOJSON.features.map(f => 
        renderFacility(f, 'park', 13)
      )}

      {/* 5. Water Infrastructure: Major WTP at Zoom 11+, STPs at Zoom 13+ */}
      {layers.waterInfra && PUNE_WATER_INFRA_GEOJSON.features.map(f => {
        const isParvati = f.id === 'UTIL-WATER-PARVATI';
        return renderFacility(f, 'water_infra', isParvati ? 11 : 13);
      })}

      {/* 6. Solid Waste Facilities: Main Hubs at Zoom 13+, Local Posts at Zoom 15+ */}
      {layers.wasteFacilities && PUNE_WASTE_FACILITIES_GEOJSON.features.map(f => 
        renderFacility(f, 'waste_facility', 13)
      )}
    </>
  );
}
