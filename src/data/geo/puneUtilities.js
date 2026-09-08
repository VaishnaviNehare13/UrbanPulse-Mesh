// Real Pune Municipal Utilities GeoJSON Dataset (Water Infrastructure & Solid Waste Facilities)
// Sources: PMC Water Supply Department & PMC Solid Waste Management Department

export const PUNE_WATER_INFRA_GEOJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "UTIL-WATER-PARVATI",
      properties: {
        id: "UTIL-WATER-PARVATI",
        name: "Parvati Water Treatment Plant (WTP)",
        subtype: "Primary Water Treatment & Distribution Hub",
        ward: "Ward 08 (Swargate - Parvati)",
        location: "Parvati Paytha / Sinhagad Road",
        capacityMLD: "535 MLD",
        sourceReservoir: "Khadakwasla Dam Pipeline",
        servicedZones: ["Central Peths", "Shivajinagar", "Kothrud", "Sahakarnagar"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8460, 18.4940]
      }
    },
    {
      type: "Feature",
      id: "UTIL-WATER-WARJE",
      properties: {
        id: "UTIL-WATER-WARJE",
        name: "Warje Water Treatment Plant",
        subtype: "Secondary Urban Water Treatment Plant",
        ward: "Ward 12 (Warje - Kothrud)",
        location: "Near Warje Flyover / Mutha River Bank",
        capacityMLD: "200 MLD",
        sourceReservoir: "Khadakwasla Conduit",
        servicedZones: ["Warje", "Bavdhan", "Kothrud Western Corridors"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.7980, 18.4850]
      }
    },
    {
      type: "Feature",
      id: "UTIL-WATER-VADGAON",
      properties: {
        id: "UTIL-WATER-VADGAON",
        name: "Vadgaon Water Works & Filtration Station",
        subtype: "Filtration & Pumping Station",
        ward: "Ward 09 (Sinhagad Road)",
        location: "Vadgaon Budruk, Sinhagad Road",
        capacityMLD: "250 MLD",
        sourceReservoir: "Mutha Right Bank Canal",
        servicedZones: ["Sinhagad Road", "Dhayari", "Vadgaon", "Ambegaon"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8150, 18.4680]
      }
    },
    {
      type: "Feature",
      id: "UTIL-WATER-CANTONMENT",
      properties: {
        id: "UTIL-WATER-CANTONMENT",
        name: "Cantonment Water Works & Filtration Plant",
        subtype: "Heritage Water Treatment Facility",
        ward: "Ward 06 (Pune Camp / Lashkar)",
        location: "Solapur Road, Pune Camp",
        capacityMLD: "300 MLD",
        sourceReservoir: "Cantonment Canal Conduit",
        servicedZones: ["Camp", "Koregaon Park", "Wanowrie", "Hadapsar"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8810, 18.5080]
      }
    },
    {
      type: "Feature",
      id: "UTIL-STP-NAIDU",
      properties: {
        id: "UTIL-STP-NAIDU",
        name: "Dr. Naidu Sewage Treatment Plant (STP)",
        subtype: "Major Biological Sewage Treatment Facility",
        ward: "Ward 05 (Sangamwadi / Yerawada)",
        location: "Near Confluence of Mula-Mutha River",
        capacityMLD: "130 MLD",
        processType: "Sequential Batch Reactor (SBR)",
        outflowDischarge: "Treated Effluent to Mula-Mutha River"
      },
      geometry: {
        type: "Point",
        coordinates: [73.8690, 18.5330]
      }
    },
    {
      type: "Feature",
      id: "UTIL-STP-MUNDHWA",
      properties: {
        id: "UTIL-STP-MUNDHWA",
        name: "Mundhwa Jackwell & STP",
        subtype: "Effluent Recycling & Agricultural Irrigation Pump",
        ward: "Ward 14 (Mundhwa)",
        location: "Mundhwa Riverbank",
        capacityMLD: "570 MLD",
        processType: "Jackwell Lift Irrigation System",
        outflowDischarge: "Recycled Water for Daund / Indapur Agriculture"
      },
      geometry: {
        type: "Point",
        coordinates: [73.9280, 18.5290]
      }
    }
  ]
};

export const PUNE_WASTE_FACILITIES_GEOJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "UTIL-SWM-KOTHRUD",
      properties: {
        id: "UTIL-SWM-KOTHRUD",
        name: "Kothrud Solid Waste Transfer Station & Ramp",
        subtype: "Municipal Feeder Transfer Hub & Compactor",
        ward: "Ward 12 (Kothrud)",
        location: "Paud Road / Kothrud Depot",
        processingCapacity: "150 Tons/Day",
        operations: "Primary Segregation & Hydraulic Compaction"
      },
      geometry: {
        type: "Point",
        coordinates: [73.8080, 18.5020]
      }
    },
    {
      type: "Feature",
      id: "UTIL-SWM-GHOLEROAD",
      properties: {
        id: "UTIL-SWM-GHOLEROAD",
        name: "Ghole Road Waste Segregation & Processing Unit",
        subtype: "Decentralized Wet Waste Biogas Plant",
        ward: "Ward 10 (Shivajinagar)",
        location: "Ghole Road, Near Ward Office",
        processingCapacity: "25 Tons/Day",
        operations: "Bio-methanation & Street Waste Segregation"
      },
      geometry: {
        type: "Point",
        coordinates: [73.8410, 18.5280]
      }
    },
    {
      type: "Feature",
      id: "UTIL-SWM-KASBA",
      properties: {
        id: "UTIL-SWM-KASBA",
        name: "Kasba - Vishrambaug SWM Compactor Station",
        subtype: "Core City Refuse Transfer Station",
        ward: "Ward 07 (Sadashiv Peth)",
        location: "Near Tilak Road / Alka Talkies",
        processingCapacity: "90 Tons/Day",
        operations: "Closed Compactor Bins & Mechanical Loading"
      },
      geometry: {
        type: "Point",
        coordinates: [73.8580, 18.5120]
      }
    },
    {
      type: "Feature",
      id: "UTIL-SWM-HADAPSAR",
      properties: {
        id: "UTIL-SWM-HADAPSAR",
        name: "Hadapsar Industrial Waste Processing Facility",
        subtype: "Dry Waste Material Recovery Facility (MRF)",
        ward: "Ward 14 (Hadapsar Industrial Area)",
        location: "Industrial Estate, Gadital",
        processingCapacity: "120 Tons/Day",
        operations: "Recyclable Plastics & Cardboard Baling"
      },
      geometry: {
        type: "Point",
        coordinates: [73.9350, 18.5080]
      }
    }
  ]
};
