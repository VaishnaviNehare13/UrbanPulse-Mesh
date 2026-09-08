import L from 'leaflet';

// Professional GIS Marker Factory Functions for Municipal Operations

export const createIncidentMarker = (severity, isSelected = false, isDominant = true) => {
  const isCrit = severity === 'HIGH' || severity === 'CRITICAL';
  const color = isCrit ? '#dc2626' : '#d97706';

  const html = `
    <div class="custom-incident-wrapper ${isSelected ? 'is-selected' : ''}">
      ${isDominant ? `<div class="incident-halo" style="border-color: ${color};"></div>` : ''}
      <div class="incident-point" style="background-color: ${color}; border: 2px solid #ffffff; box-shadow: 0 1px 4px rgba(0,0,0,0.25);">
        <span class="incident-dot"></span>
      </div>
    </div>
  `;

  return L.divIcon({
    html,
    className: 'gis-incident-icon',
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    popupAnchor: [0, -12]
  });
};

// Professional Minimal SVG GIS Symbols for Infrastructure Assets
export const createFacilityMarker = (type, isSelected = false) => {
  let svgIcon = '';
  let color = '#475569';
  let borderColor = '#cbd5e1';

  switch (type) {
    case 'hospital':
      color = '#dc2626';
      borderColor = '#fca5a5';
      // Medical cross SVG
      svgIcon = `<svg width="11" height="11" viewBox="0 0 24 24" fill="${color}"><path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"/></svg>`;
      break;
    case 'fire_station':
      color = '#ea580c';
      borderColor = '#fdba74';
      // Fire / Emergency flame SVG
      svgIcon = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z"/></svg>`;
      break;
    case 'transit':
      color = '#2563eb';
      borderColor = '#93c5fd';
      // Transit bus/train SVG
      svgIcon = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M8 15h.01"/><path d="M16 15h.01"/><path d="m6 19-2 2"/><path d="m18 21-2-2"/></svg>`;
      break;
    case 'water':
      color = '#0284c7';
      borderColor = '#7dd3fc';
      // Water droplet SVG
      svgIcon = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>`;
      break;
    case 'power':
      color = '#d97706';
      borderColor = '#fcd34d';
      // Power bolt SVG
      svgIcon = `<svg width="11" height="11" viewBox="0 0 24 24" fill="${color}" stroke="${color}" stroke-width="1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
      break;
    case 'waste':
      color = '#16a34a';
      borderColor = '#86efac';
      // Waste / recycling SVG
      svgIcon = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/><path d="M11 19h8.2a1.8 1.8 0 0 0 1.58-1"/><path d="m17 7-5 9"/><path d="m20 10-2.5-4.5a1.8 1.8 0 0 0-1.5-1H10"/><path d="m3 14 2 3.5"/><path d="m14 4-3-2-3 2"/></svg>`;
      break;
    case 'municipal':
      color = '#475569';
      borderColor = '#cbd5e1';
      // Building SVG
      svgIcon = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>`;
      break;
    default:
      color = '#475569';
      borderColor = '#cbd5e1';
      svgIcon = `<span style="width: 5px; height: 5px; background: ${color}; border-radius: 50%;"></span>`;
  }

  const html = `
    <div class="gis-sym-badge ${isSelected ? 'is-selected' : ''}" style="
      width: 20px; 
      height: 20px; 
      border-radius: 3px; 
      background: #ffffff; 
      border: 1px solid ${borderColor}; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      cursor: pointer;
    ">
      ${svgIcon}
    </div>
  `;

  return L.divIcon({
    html,
    className: 'gis-facility-icon',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10]
  });
};
