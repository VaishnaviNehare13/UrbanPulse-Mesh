import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import { PUNE_CENTER, DEFAULT_ZOOM } from '../../data/puneMapData';
import IncidentMarker from './IncidentMarker';
import InfrastructureMarker from './InfrastructureMarker';
import ZoneOverlay from './ZoneOverlay';
import RouteOverlay from './RouteOverlay';
import MapControls from './MapControls';
import MapLegend from './MapLegend';
import MapLayers from './MapLayers';

// Map View Syncer Component
function MapViewController({ selectedObject }) {
  const map = useMap();

  useEffect(() => {
    if (!selectedObject) return;

    if (selectedObject.lat && selectedObject.lng) {
      map.setView([selectedObject.lat, selectedObject.lng], 15, { animate: true });
    } else if (selectedObject.coordinates) {
      const coords = Array.isArray(selectedObject.coordinates[0])
        ? selectedObject.coordinates[0]
        : selectedObject.coordinates;
      map.setView(coords, 14, { animate: true });
    }
  }, [selectedObject, map]);

  return null;
}

// Zoom Tracking Component for Cartographic Level of Detail (LoD)
function ZoomTracker({ onZoomChange }) {
  const map = useMapEvents({
    zoomend: () => {
      onZoomChange(map.getZoom());
    }
  });
  return null;
}

export default function MunicipalMap({
  layers,
  setLayers,
  incidents,
  facilities,
  selectedObject,
  onSelectObject,
  onOpenActionPanel,
  isResolved
}) {
  const [zoomLevel, setZoomLevel] = useState(DEFAULT_ZOOM);

  // Key facilities visible at city-level zoom
  const primaryFacilityIds = [
    'FAC-HOSP-01', // Sassoon General Hospital
    'FAC-FIRE-01', // Central Fire Station
    'FAC-TRANS-01', // Pune Junction Rail
    'FAC-WATER-01'  // Parvati Water Works
  ];

  const isIncidentSelected = selectedObject?.id === 'UP-1024' || selectedObject?.type === 'incident';

  return (
    <div className="w-full h-full relative bg-slate-100 overflow-hidden select-none">
      
      {/* Small White Floating Layer Control */}
      <MapLayers layers={layers} setLayers={setLayers} />

      {/* Compact GIS Legend at Bottom-Left */}
      <MapLegend />

      {/* Leaflet Map Container */}
      <MapContainer
        center={PUNE_CENTER}
        zoom={DEFAULT_ZOOM}
        scrollWheelZoom={true}
        className="w-full h-full"
        zoomControl={false}
      >
        <MapViewController selectedObject={selectedObject} />
        <ZoomTracker onZoomChange={setZoomLevel} />

        {/* Minimal Controls (+ / - / Reset) at Top-Right */}
        <MapControls onResetView={() => onSelectObject(null)} />

        {/* Clean, Public Basemap with No API Key Watermarks */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />

        {/* GIS Sector Boundaries & Water Bodies */}
        <ZoneOverlay
          showSectors={layers.sectors}
          showWaterBodies={layers.waterBodies}
          selectedSector={selectedObject?.type === 'sector' ? selectedObject : null}
          onSelectSector={(sec) => onSelectObject({ ...sec, type: 'sector' })}
        />

        {/* Road Network & Traffic Flow Overlay */}
        <RouteOverlay
          showRoads={layers.roads}
          showTraffic={layers.traffic}
          selectedRoad={selectedObject?.class ? selectedObject : null}
          onSelectRoad={(rd) => onSelectObject(rd)}
          isDiversionActive={isResolved}
          isIncidentSelected={isIncidentSelected}
        />

        {/* Municipal Assets with Zoom-Dependent Cartographic Level of Detail */}
        {facilities.map((fac) => {
          let visible = true;
          if (fac.type === 'hospital' && !layers.hospitals) visible = false;
          if (fac.type === 'fire_station' && !layers.fireStations) visible = false;
          if (fac.type === 'transit' && !layers.transit) visible = false;
          if ((fac.type === 'water' || fac.type === 'power' || fac.type === 'waste') && !layers.utilities) visible = false;

          // At city zoom (<= 13), only show key landmark facilities unless selected
          if (zoomLevel <= 13 && !primaryFacilityIds.includes(fac.id) && selectedObject?.id !== fac.id) {
            visible = false;
          }

          if (!visible) return null;

          return (
            <InfrastructureMarker
              key={fac.id}
              facility={fac}
              isSelected={selectedObject?.id === fac.id}
              onSelect={(item) => onSelectObject(item)}
              zoomLevel={zoomLevel}
            />
          );
        })}

        {/* Active Incidents - One Visually Dominant Active Incident (UP-1024) */}
        {layers.incidents && incidents.map((inc, index) => (
          <IncidentMarker
            key={inc.id}
            incident={inc}
            isSelected={selectedObject?.id === inc.id}
            onSelect={(item) => onSelectObject(item)}
            onOpenActionPanel={onOpenActionPanel}
            isDominant={index === 0} // Only halo pulse on the primary active incident
          />
        ))}

      </MapContainer>

    </div>
  );
}
