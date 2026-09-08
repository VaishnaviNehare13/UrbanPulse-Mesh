// Real Pune Municipal Fire Brigade Stations GeoJSON Dataset
// Source: Pune Municipal Corporation (PMC) Fire Department

export const PUNE_FIRE_STATIONS_GEOJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "FIRE-CENTRAL",
      properties: {
        id: "FIRE-CENTRAL",
        name: "Central Fire Brigade Headquarters",
        type: "Main Fire Station & Control Room",
        ward: "Ward 03 (Bhavani Peth)",
        location: "Timber Market Road, Bhavani Peth",
        phone: "020-26451707 / 101",
        isMajorFacility: true,
        equipment: "Hydraulic Platforms, Heavy Water Tenders, Foam Crash Tenders, HazMat Response Unit"
      },
      geometry: {
        type: "Point",
        coordinates: [73.8680, 18.5065]
      }
    },
    {
      type: "Feature",
      id: "FIRE-ERANDWANE",
      properties: {
        id: "FIRE-ERANDWANE",
        name: "Erandwane Fire Station",
        type: "Sector Fire & Rescue Station",
        ward: "Ward 12 (Kothrud - Erandwane)",
        location: "Near Mhatre Bridge, Karve Road",
        phone: "020-25442700",
        isMajorFacility: true,
        equipment: "Water Bouser, Rescue Van, Turnout Engines"
      },
      geometry: {
        type: "Point",
        coordinates: [73.8320, 18.5060]
      }
    },
    {
      type: "Feature",
      id: "FIRE-SHIVAJINAGAR",
      properties: {
        id: "FIRE-SHIVAJINAGAR",
        name: "Shivajinagar Fire Sub-Station",
        type: "Rapid Response Fire Post",
        ward: "Ward 10 (Shivajinagar)",
        location: "Near Sancheti Hospital & COEP Tech",
        phone: "020-25531200",
        isMajorFacility: true,
        equipment: "Rapid Intervention Vehicles, Foam Tender"
      },
      geometry: {
        type: "Point",
        coordinates: [73.8510, 18.5320]
      }
    },
    {
      type: "Feature",
      id: "FIRE-KOTHRUD",
      properties: {
        id: "FIRE-KOTHRUD",
        name: "Kothrud Fire Station",
        type: "Suburban Fire Station",
        ward: "Ward 12 (Kothrud)",
        location: "Paud Road, Near Kothrud Stand",
        phone: "020-25381500",
        isMajorFacility: false,
        equipment: "Multi-purpose Fire Tender, Emergency Light Tower"
      },
      geometry: {
        type: "Point",
        coordinates: [73.8120, 18.5040]
      }
    },
    {
      type: "Feature",
      id: "FIRE-AUNDH",
      properties: {
        id: "FIRE-AUNDH",
        name: "Aundh Fire Station",
        type: "Sector Fire & Disaster Station",
        ward: "Ward 02 (Aundh - Baner)",
        location: "DP Road, Near Rajiv Gandhi Bridge, Aundh",
        phone: "020-25881400",
        isMajorFacility: false,
        equipment: "High Pressure Water Fog Tender, Rescue Unit"
      },
      geometry: {
        type: "Point",
        coordinates: [73.8050, 18.5580]
      }
    },
    {
      type: "Feature",
      id: "FIRE-HADAPSAR",
      properties: {
        id: "FIRE-HADAPSAR",
        name: "Hadapsar Industrial Fire Station",
        type: "Industrial & Chemical Fire Station",
        ward: "Ward 14 (Hadapsar)",
        location: "Industrial Estate, Gadital, Solapur Road",
        phone: "020-26871200",
        isMajorFacility: true,
        equipment: "Chemical Foam Tenders, Breathing Apparatus Unit"
      },
      geometry: {
        type: "Point",
        coordinates: [73.9320, 18.4980]
      }
    },
    {
      type: "Feature",
      id: "FIRE-KATRAJ",
      properties: {
        id: "FIRE-KATRAJ",
        name: "Katraj Fire Station",
        type: "Ghat & Highway Rescue Station",
        ward: "Ward 11 (Dhankawadi - Katraj)",
        location: "Pune-Satara Road, Near Katraj Snake Park",
        phone: "020-24371900",
        isMajorFacility: false,
        equipment: "Heavy Duty Extrication Tools, Forest & Hill Fire Tender"
      },
      geometry: {
        type: "Point",
        coordinates: [73.8590, 18.4550]
      }
    },
    {
      type: "Feature",
      id: "FIRE-YERAWADA",
      properties: {
        id: "FIRE-YERAWADA",
        name: "Yerawada Fire Station",
        type: "Sector Fire Post",
        ward: "Ward 05 (Yerawada)",
        location: "Airport Road, Near Yerawada Chowk",
        phone: "020-26681600",
        isMajorFacility: false,
        equipment: "Water Tender, Ambulance Support Unit"
      },
      geometry: {
        type: "Point",
        coordinates: [73.8820, 18.5520]
      }
    }
  ]
};
