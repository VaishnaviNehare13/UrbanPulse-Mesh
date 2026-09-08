// Real Pune Transit Infrastructure GeoJSON Dataset
// Sources: PMPML & Maha-Metro Corporation

export const PUNE_TRANSIT_GEOJSON = {
  type: "FeatureCollection",
  features: [
    // 1. MULTIMODAL TERMINALS & HUBS (Visible at City Zoom)
    {
      type: "Feature",
      id: "TRANS-PUNE-JN",
      properties: {
        id: "TRANS-PUNE-JN",
        name: "Pune Railway Junction",
        subtype: "Intercity Rail & Suburban Transit Hub",
        ward: "Ward 06 (Dhole Patil Road)",
        location: "Station Road, Agarkar Nagar",
        dailyFootfall: "180,000+ passengers",
        isMajorHub: true,
        connectivity: ["Central Railway Intercity", "Pune Suburban Lonavala Local", "PMPML Feeder Network"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8740, 18.5284]
      }
    },
    {
      type: "Feature",
      id: "TRANS-SWARGATE",
      properties: {
        id: "TRANS-SWARGATE",
        name: "Swargate Multimodal Transit Hub",
        subtype: "Underground Metro Station & MSRTC Bus Port",
        ward: "Ward 08 (Swargate - Parvati)",
        location: "Jedhe Chowk, Swargate",
        dailyFootfall: "140,000+ commuters",
        isMajorHub: true,
        connectivity: ["Maha-Metro Purple Line (Underground)", "MSRTC State Transport", "PMPML Central Depot"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8580, 18.5015]
      }
    },
    {
      type: "Feature",
      id: "TRANS-SHIVAJINAGAR",
      properties: {
        id: "TRANS-SHIVAJINAGAR",
        name: "Shivajinagar Multimodal Transit Station",
        subtype: "Suburban Rail, MSRTC & Metro Interchange",
        ward: "Ward 10 (Shivajinagar)",
        location: "JM Road / Old Highway Junction",
        dailyFootfall: "95,000+ passengers",
        isMajorHub: true,
        connectivity: ["Maha-Metro Purple Line", "Suburban Local Train", "MSRTC North Maharashtra Depot"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8510, 18.5320]
      }
    },
    {
      type: "Feature",
      id: "TRANS-AIRPORT",
      properties: {
        id: "TRANS-AIRPORT",
        name: "Pune International Airport (PNQ)",
        subtype: "Aviation Gateway & Transit Terminal",
        ward: "Ward 04 (Lohegaon / Viman Nagar)",
        location: "New Airport Road, Lohegaon",
        dailyFootfall: "28,000+ air passengers",
        isMajorHub: true,
        connectivity: ["Domestic & International Flights", "PMPML Aero-Bus Direct Services"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.9197, 18.5822]
      }
    },

    // 2. METRO STATIONS & KEY PMPML STOPS (Visible at Closer Zoom)
    {
      type: "Feature",
      id: "TRANS-METRO-CIVIL-COURT",
      properties: {
        id: "TRANS-METRO-CIVIL-COURT",
        name: "Civil Court Metro Interchange Hub",
        subtype: "Maha-Metro Line 1 & Line 2 Central Junction",
        ward: "Ward 10 (Shivajinagar)",
        location: "Civil Court, Sangamwadi",
        isMajorHub: false,
        connectivity: ["Purple Line (North-South)", "Aqua Line (East-West)"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8580, 18.5280]
      }
    },
    {
      type: "Feature",
      id: "TRANS-METRO-DECCAN",
      properties: {
        id: "TRANS-METRO-DECCAN",
        name: "Deccan Gymkhana Metro Station",
        subtype: "Maha-Metro Aqua Line Elevated Station",
        ward: "Ward 10 (Deccan)",
        location: "Garware Bridge, Deccan",
        isMajorHub: false,
        connectivity: ["Aqua Line", "FC Road Feeder Buses"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8410, 18.5180]
      }
    },
    {
      type: "Feature",
      id: "TRANS-METRO-NAL-STOP",
      properties: {
        id: "TRANS-METRO-NAL-STOP",
        name: "Nal Stop Metro Station",
        subtype: "Maha-Metro Aqua Line Station & Flyover",
        ward: "Ward 12 (Erandwane / Karve Rd)",
        location: "Karve Road, Nal Stop Chowk",
        isMajorHub: false,
        connectivity: ["Aqua Line", "Karve Road PMPML Network"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8300, 18.5110]
      }
    },
    {
      type: "Feature",
      id: "TRANS-METRO-VANAZ",
      properties: {
        id: "TRANS-METRO-VANAZ",
        name: "Vanaz Metro Terminal",
        subtype: "Maha-Metro Aqua Line Western Terminal",
        ward: "Ward 12 (Kothrud)",
        location: "Paud Road, Kothrud",
        isMajorHub: false,
        connectivity: ["Aqua Line Western Depot", "Paud Road Bus Feeder"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8050, 18.5020]
      }
    },
    {
      type: "Feature",
      id: "TRANS-PMPML-GOODLUCK",
      properties: {
        id: "TRANS-PMPML-GOODLUCK",
        name: "Goodluck Chowk PMPML Stop",
        subtype: "Key Arterial Bus Stop (FC Road)",
        ward: "Ward 10 (Deccan)",
        location: "FC Road / Bhandarkar Road Intersection",
        isMajorHub: false,
        connectivity: ["PMPML 100, 102", "Smart City Cycle Share"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8405, 18.5165]
      }
    },
    {
      type: "Feature",
      id: "TRANS-PMPML-SHANIWAR-WADA",
      properties: {
        id: "TRANS-PMPML-SHANIWAR-WADA",
        name: "Shaniwar Wada PMPML Heritage Station",
        subtype: "Core City Bus Station",
        ward: "Ward 07 (Kasba Peth)",
        location: "Bajirao Road / Shivaji Road Frontage",
        isMajorHub: false,
        connectivity: ["Central Peth Trunk Routes"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8555, 18.5220]
      }
    },
    {
      type: "Feature",
      id: "TRANS-PMPML-KATRAJ",
      properties: {
        id: "TRANS-PMPML-KATRAJ",
        name: "Katraj Depot & Bus Station",
        subtype: "Southern Terminal & BRTS Depot",
        ward: "Ward 11 (Katraj)",
        location: "Pune-Satara Road Terminal",
        isMajorHub: false,
        connectivity: ["Rainbow BRTS", "South Pune Rural Feeders"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8580, 18.4540]
      }
    }
  ]
};
