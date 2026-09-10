import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import { PUNE_CENTER, DEFAULT_ZOOM } from '../../data/puneMapData';
import IncidentMarker from './IncidentMarker';
import ZoneOverlay from './ZoneOverlay';
import RouteOverlay from './RouteOverlay';
import FacilityOverlay from './FacilityOverlay';
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
      if (typeof coords[0] === 'number') {
        map.setView(coords, 14, { animate: true });
      }
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
  selectedObject,
  onSelectObject,
  onOpenActionPanel,
  isResolved,
  onLayerToggle
}) {
  const [zoomLevel, setZoomLevel] = useState(DEFAULT_ZOOM);

  const isIncidentSelected = selectedObject?.id === 'UP-1024' || selectedObject?.type === 'incident';

  return (
    <div className="w-full h-full relative bg-slate-100 overflow-hidden select-none">
      
      {/* Small White Floating Layer Control */}
      <MapLayers layers={layers} setLayers={setLayers} onLayerToggle={onLayerToggle} />

      {/* Dynamic GIS Legend at Bottom-Left */}
      <MapLegend layers={layers} />

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

        {/* Clean, Public OpenStreetMap Basemap without API Key Watermarks */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />

        {/* Real GIS Sector Boundaries (Wards) & Water Bodies (Rivers/Lakes) */}
        <ZoneOverlay
          showWards={layers.wards}
          showWaterBodies={layers.waterBodies}
          selectedWard={selectedObject?.type === 'ward' || selectedObject?.wardNo ? selectedObject : null}
          onSelectWard={(ward) => onSelectObject({ ...ward, type: 'ward' })}
          zoomLevel={zoomLevel}
        />

        {/* Real Road Network & Traffic Flow Overlay */}
        <RouteOverlay
          showRoads={layers.roads}
          showTraffic={layers.traffic}
          selectedRoad={selectedObject?.class ? selectedObject : null}
          onSelectRoad={(rd) => onSelectObject(rd)}
          isDiversionActive={isResolved || layers.diversionRoutes}
          isIncidentSelected={isIncidentSelected}
        />

        {/* Real Pune Municipal Infrastructure Assets (Hospitals, Fire Stations, Transit, Parks, Utilities) */}
        <FacilityOverlay
          layers={layers}
          selectedObject={selectedObject}
          onSelectObject={(obj) => onSelectObject(obj)}
          zoomLevel={zoomLevel}
        />

        {/* Active Incident (UP-1024) with Subtle Halo Pulse */}
        {layers.incidents && incidents.map((inc, index) => (
          <IncidentMarker
            key={inc.id}
            incident={inc}
            isSelected={selectedObject?.id === inc.id}
            onSelect={(item) => onSelectObject(item)}
            onOpenActionPanel={onOpenActionPanel}
            isDominant={index === 0}
          />
        ))}

      </MapContainer>

    </div>
  );
}
