import React from 'react';
import { Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import { createFacilityMarker } from '../../styles/mapStyles';
import { PUNE_HOSPITALS_GEOJSON } from '../../data/geo/puneHospitals';
import { PUNE_FIRE_STATIONS_GEOJSON } from '../../data/geo/puneFireStations';
import { PUNE_TRANSIT_GEOJSON } from '../../data/geo/puneTransit';
import { PUNE_PARKS_GEOJSON } from '../../data/geo/puneParks';
import { PUNE_WATER_INFRA_GEOJSON, PUNE_WASTE_FACILITIES_GEOJSON } from '../../data/geo/puneUtilities';
import { PUNE_POWER_INFRA_GEOJSON } from '../../data/geo/punePowerInfra';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useTranslation } from '../../i18n';

export default function FacilityOverlay({
  layers,
  selectedObject,
  onSelectObject,
  onViewService,
  activeServiceFilter = 'all',
  zoomLevel = 13
}) {
  const map = useMap();
  const { t } = useTranslation();

  // Helper renderer with tiered Cartographic Level of Detail (LoD)
  const renderFacility = (feature, type, domain, minZoom = 11) => {
    const isSelected = selectedObject?.id === feature.id;

    // Decluttering: filter out features that require a higher zoom level unless explicitly selected
    if (zoomLevel < minZoom && !isSelected) {
      return null;
    }

    // Visual dimming if service filter is active and doesn't match this domain
    const isDimmed = activeServiceFilter !== 'all' && activeServiceFilter !== domain;

    const [lng, lat] = feature.geometry.coordinates;
    const props = feature.properties;
    const icon = createFacilityMarker(type, isSelected);

    return (
      <Marker
        key={feature.id}
        position={[lat, lng]}
        icon={icon}
        opacity={isDimmed ? 0.35 : 1.0}
        eventHandlers={{
          click: () => onSelectObject && onSelectObject({ ...props, lat, lng, type, domain })
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
          <div className="p-3 max-w-[250px] text-slate-800 text-xs select-none font-sans">
            
            {/* Header with Domain Category */}
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
              <span className={`font-mono text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-xs border ${
                domain === 'emergency' ? 'bg-red-50 text-red-700 border-red-200' :
                domain === 'water' ? 'bg-sky-50 text-sky-700 border-sky-200' :
                domain === 'power' ? 'bg-amber-50 text-amber-800 border-amber-200' :
                domain === 'transit' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                domain === 'waste' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                'bg-slate-100 text-slate-700 border-slate-200'
              }`}>
                {domain === 'emergency' ? t('servicesList.emergency') :
                 domain === 'water' ? t('servicesList.water') :
                 domain === 'power' ? t('servicesList.power') :
                 domain === 'transit' ? t('servicesList.transit') :
                 domain === 'waste' ? t('servicesList.waste') : 'MUNICIPAL'}
              </span>
              <span className="font-mono text-[10px] text-slate-400 font-medium">
                {t('inspection.puneGis')}
              </span>
            </div>

            {/* Title & Location */}
            <div className="mt-2 space-y-1">
              <h4 className="font-bold text-slate-900 text-xs leading-snug">{props.name}</h4>
              <div className="text-[11px] text-slate-500">{props.subtype || props.type}</div>
              
              <div className="pt-1.5 space-y-1 text-[11px] text-slate-700 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">{t('inspection.ward')}:</span>
                  <span className="font-medium text-slate-800">{props.ward}</span>
                </div>

                {/* Domain Specific Simulated Metrics */}
                {props.capacityBeds && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Bed Capacity:</span>
                    <span className="font-semibold text-slate-800">{props.capacityBeds} Beds</span>
                  </div>
                )}

                {props.capacityMLD && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Treatment Capacity:</span>
                    <span className="font-semibold text-sky-700">{props.capacityMLD}</span>
                  </div>
                )}

                {props.voltageLevel && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Voltage / Feeders:</span>
                    <span className="font-mono text-slate-800 font-semibold">{props.voltageLevel} ({props.feeders} Feeders)</span>
                  </div>
                )}

                {props.simulatedLoad && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">{t('inspection.load')}:</span>
                    <span className={`font-semibold ${parseInt(props.simulatedLoad) > 85 ? 'text-amber-700' : 'text-slate-800'}`}>
                      {props.simulatedLoad}
                    </span>
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

                {/* Simulated Operating Status */}
                <div className="flex items-center justify-between pt-0.5">
                  <span className="text-slate-500">{t('inspection.status')}:</span>
                  <span className="font-semibold text-emerald-700 text-[10px] bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                    {props.simulatedStatus || 'Normal Operations'}
                  </span>
                </div>
              </div>

              {/* Action Buttons: [ZOOM] & [VIEW SERVICE] */}
              <div className="pt-2 flex items-center space-x-1.5">
                <button
                  onClick={() => {
                    map.setView([lat, lng], 16, { animate: true });
                  }}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-[10px] py-1 px-1.5 rounded flex items-center justify-center space-x-1 transition-colors cursor-pointer border border-slate-300"
                >
                  <span>{t('inspection.zoomToLocation')}</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </button>
                {onViewService && domain && (
                  <button
                    onClick={() => onViewService(domain)}
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[10px] py-1 px-1.5 rounded flex items-center justify-center space-x-1 transition-colors cursor-pointer"
                  >
                    <span>{t('inspection.viewService')}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </button>
                )}
              </div>
            </div>

          </div>
        </Popup>
      </Marker>
    );
  };

  return (
    <>
      {/* 1. Hospitals (Emergency): Major at Zoom 11+, Secondary at Zoom 13+ */}
      {layers.hospitals && PUNE_HOSPITALS_GEOJSON.features.map(f => 
        renderFacility(f, 'hospital', 'emergency', f.properties.isMajorFacility ? 11 : 13)
      )}

      {/* 2. Fire Stations (Emergency): Major at Zoom 11+, Secondary at Zoom 13+ */}
      {layers.fireStations && PUNE_FIRE_STATIONS_GEOJSON.features.map(f => 
        renderFacility(f, 'fire_station', 'emergency', f.properties.isMajorFacility ? 11 : 13)
      )}

      {/* 3. Transit (Transit): Major Hubs at Zoom 11+, Metro Stations at Zoom 13+, Local Stops at Zoom 15+ */}
      {layers.transit && PUNE_TRANSIT_GEOJSON.features.map(f => {
        const isHub = f.properties.isMajorHub;
        const isMetro = f.id.includes('METRO');
        const minZoom = isHub ? 11 : (isMetro ? 13 : 15);
        return renderFacility(f, 'transit', 'transit', minZoom);
      })}

      {/* 4. Power Infrastructure (Power): High-voltage substations at Zoom 11+ */}
      {layers.powerInfra && PUNE_POWER_INFRA_GEOJSON.features.map(f => 
        renderFacility(f, 'power', 'power', 11)
      )}

      {/* 5. Water Infrastructure (Water): Major WTP at Zoom 11+, STPs at Zoom 13+ */}
      {layers.waterInfra && PUNE_WATER_INFRA_GEOJSON.features.map(f => {
        const isParvati = f.id === 'UTIL-WATER-PARVATI';
        return renderFacility(f, 'water_infra', 'water', isParvati ? 11 : 13);
      })}

      {/* 6. Solid Waste Facilities (Waste): Main Hubs at Zoom 13+, Local Posts at Zoom 15+ */}
      {layers.wasteFacilities && PUNE_WASTE_FACILITIES_GEOJSON.features.map(f => 
        renderFacility(f, 'waste_facility', 'waste', 13)
      )}

      {/* 7. Parks & Public Gardens: Prominent at Zoom 13+ */}
      {layers.parks && PUNE_PARKS_GEOJSON.features.map(f => 
        renderFacility(f, 'park', 'waste', 13)
      )}
    </>
  );
}
