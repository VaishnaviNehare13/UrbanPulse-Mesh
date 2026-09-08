// Pune GIS Data Sources & Attribution Registry
// Stage 2: Real Pune GIS Layers

export const PUNE_GIS_DATA_SOURCES = [
  {
    id: "pmc-wards",
    dataset: "Pune Administrative & Electoral Ward Boundaries",
    publisher: "Pune Municipal Corporation (PMC) / OpenCity.in",
    format: "GeoJSON / Polygon Geometry",
    usage: "Municipal administrative boundaries, ward code, population and area analysis",
    license: "Open Data Commons / Public Domain",
    geometryType: "Polygon / MultiPolygon",
    realData: true
  },
  {
    id: "pune-rivers",
    dataset: "Mula, Mutha Rivers & Natural Water Bodies",
    publisher: "OpenStreetMap Contributors & Central Water Commission Pune Basin",
    format: "GeoJSON / LineString & Polygon",
    usage: "Natural hydrological network, Mula-Mutha confluence and urban water basins",
    license: "Open Database License (ODbL)",
    geometryType: "LineString / Polygon",
    realData: true
  },
  {
    id: "pune-road-network",
    dataset: "Pune Major Road Centerlines & Operational Corridors",
    publisher: "Pune Municipal Corporation & OpenStreetMap",
    format: "GeoJSON / LineString",
    usage: "Major operational transit and arterial corridors for municipal coordination",
    license: "ODbL / PMC Open Data",
    geometryType: "LineString",
    realData: true
  },
  {
    id: "pune-healthcare",
    dataset: "Pune Hospitals, Clinics & Trauma Centers",
    publisher: "PMC Health Department & OpenCity Public Health Dataset",
    format: "GeoJSON / Point Features",
    usage: "Public and private healthcare infrastructure mapping",
    license: "Public Domain / Open Data",
    geometryType: "Point",
    realData: true
  },
  {
    id: "pune-fire-brigade",
    dataset: "Pune Municipal Fire Brigade Stations",
    publisher: "Pune Municipal Corporation Fire Department",
    format: "GeoJSON / Point Features",
    usage: "Emergency response and fire fighting depot locations",
    license: "Public Domain",
    geometryType: "Point",
    realData: true
  },
  {
    id: "pune-transit",
    dataset: "PMPML Bus Stops & Maha-Metro Line 1 & 2 Stations",
    publisher: "Pune Mahanagar Parivahan Mahamandal Ltd (PMPML) & Maha-Metro",
    format: "GeoJSON / Point & LineString",
    usage: "Multimodal public transit nodes and corridor mapping",
    license: "Open Data",
    geometryType: "Point / LineString",
    realData: true
  },
  {
    id: "pune-parks",
    dataset: "PMC Parks, Gardens & Botanical Sanctuaries",
    publisher: "PMC Garden Department / OpenCity",
    format: "GeoJSON / Point Features",
    usage: "Urban green spaces and public recreational facilities",
    license: "Open Data",
    geometryType: "Point",
    realData: true
  },
  {
    id: "pune-water-infra",
    dataset: "Water Treatment Plants (WTP) & Sewage Treatment Plants (STP)",
    publisher: "PMC Water Supply & Sewerage Department",
    format: "GeoJSON / Point Features",
    usage: "Critical municipal water treatment and distribution nodes",
    license: "Open Data",
    geometryType: "Point",
    realData: true
  },
  {
    id: "pune-swm-infra",
    dataset: "Solid Waste Management (SWM) Processing & Transfer Facilities",
    publisher: "PMC Solid Waste Management Department",
    format: "GeoJSON / Point Features",
    usage: "Municipal waste processing and feeder transfer hubs",
    license: "Open Data",
    geometryType: "Point",
    realData: true
  }
];

export const DATA_SEPARATION_POLICY = {
  geographicData: "REAL — Based on verified Pune geographic datasets (PMC, OSM, OpenCity, Maha-Metro)",
  operationalData: "SIMULATED — Real-time telemetry, incidents, congestion metrics, and what-if calculations are simulated for system design prototype evaluation"
};
