// Real Pune High-Voltage Power Substation GeoJSON Dataset
// Sources: MSEDCL Pune Urban Zone & PMC Energy Cell

export const PUNE_POWER_INFRA_GEOJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "UTIL-POWER-RASTAPETH",
      properties: {
        id: "UTIL-POWER-RASTAPETH",
        name: "Rasta Peth 220/33kV MSEDCL Main Substation",
        subtype: "Urban Core 220kV Extra-High Voltage Substation",
        ward: "Ward 07 (Rasta Peth / Kasba)",
        location: "Power House Rd, Rasta Peth",
        voltageLevel: "220/33 kV",
        transformerCapacityMva: "150 MVA",
        feeders: 16,
        simulatedLoad: "91%",
        simulatedStatus: "High Load (Attention Required)",
        servicedZones: ["Central Peths", "Pune Station", "Camp", "Shivajinagar South"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8670, 18.5190]
      }
    },
    {
      type: "Feature",
      id: "UTIL-POWER-GANESHKHIND",
      properties: {
        id: "UTIL-POWER-GANESHKHIND",
        name: "Ganeshkhind 132/33kV Substation",
        subtype: "North-West 132kV Transmission & Distribution Substation",
        ward: "Ward 10 (Ganeshkhind / Aundh)",
        location: "Ganeshkhind Rd, Near SPPU",
        voltageLevel: "132/33 kV",
        transformerCapacityMva: "100 MVA",
        feeders: 12,
        simulatedLoad: "68%",
        simulatedStatus: "Normal Load",
        servicedZones: ["Aundh", "SPPU Campus", "Senapati Bapat Road", "Baner Link"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8340, 18.5390]
      }
    },
    {
      type: "Feature",
      id: "UTIL-POWER-PARVATI",
      properties: {
        id: "UTIL-POWER-PARVATI",
        name: "Parvati 132/33kV Substation",
        subtype: "South Grid Primary Distribution Substation",
        ward: "Ward 08 (Parvati / Sahakarnagar)",
        location: "Parvati Foothills, Sinhagad Road Junction",
        voltageLevel: "132/33 kV",
        transformerCapacityMva: "100 MVA",
        feeders: 14,
        simulatedLoad: "74%",
        simulatedStatus: "Normal Load",
        servicedZones: ["Sinhagad Road", "Parvati", "Sahakarnagar", "Swargate"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8530, 18.4950]
      }
    },
    {
      type: "Feature",
      id: "UTIL-POWER-KOTHRUD",
      properties: {
        id: "UTIL-POWER-KOTHRUD",
        name: "Kothrud 132/33kV Substation",
        subtype: "West Sector 132kV Urban Substation",
        ward: "Ward 12 (Kothrud)",
        location: "Paud Road / Mayur Colony",
        voltageLevel: "132/33 kV",
        transformerCapacityMva: "100 MVA",
        feeders: 12,
        simulatedLoad: "71%",
        simulatedStatus: "Normal Load",
        servicedZones: ["Kothrud", "Karve Road", "Warje", "Bavdhan"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8115, 18.5065]
      }
    },
    {
      type: "Feature",
      id: "UTIL-POWER-HADAPSAR",
      properties: {
        id: "UTIL-POWER-HADAPSAR",
        name: "Hadapsar 132/33kV Industrial Substation",
        subtype: "East Sector High-Demand Substation",
        ward: "Ward 14 (Hadapsar)",
        location: "Gadital Industrial Area, Solapur Road",
        voltageLevel: "132/33 kV",
        transformerCapacityMva: "120 MVA",
        feeders: 14,
        simulatedLoad: "78%",
        simulatedStatus: "Normal Load",
        servicedZones: ["Hadapsar Industrial", "Magarpatta", "Mundhwa", "Wanowrie"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.9310, 18.5020]
      }
    }
  ]
};
