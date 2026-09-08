// Real Pune Major Road Corridors GeoJSON Dataset
// Sources: Pune Municipal Corporation (PMC) Road Centerlines & OpenStreetMap

export const PUNE_ROAD_CORRIDORS_GEOJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "RD-FC",
      properties: {
        id: "RD-FC",
        name: "Fergusson College (FC) Road",
        class: "PRIMARY CORRIDOR",
        corridor: "Deccan Gymkhana to Shivajinagar / Agriculture College",
        lengthKm: 2.1,
        lanes: 3,
        surface: "Asphalt / Paver Interlocking",
        ward: "Ward 10 (Shivajinagar - Ghole Road)",
        speedLimitKm: 40,
        transitUse: "PMPML Route 100, 102, 108"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [73.8405, 18.5165], // Deccan Gymkhana (Goodluck Chowk)
          [73.8415, 18.5230], // Fergusson College Main Gate
          [73.8435, 18.5310], // Model Colony / Dnyaneshwar Paduka
          [73.8475, 18.5345]  // Agriculture College / Shimla Office Chowk
        ]
      }
    },
    {
      type: "Feature",
      id: "RD-JM",
      properties: {
        id: "RD-JM",
        name: "Jangali Maharaj (JM) Road",
        class: "PRIMARY CORRIDOR",
        corridor: "Sancheti Chowk to Deccan Gymkhana (Alka Talkies)",
        lengthKm: 2.4,
        lanes: 4,
        surface: "Concrete / Asphalt Arterial",
        ward: "Ward 10 (Shivajinagar - Ghole Road)",
        speedLimitKm: 45,
        transitUse: "High Frequency PMPML Trunk Corridor"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [73.8525, 18.5312], // Sancheti Chowk / COEP
          [73.8485, 18.5280], // Balgandharva Ranga Mandir
          [73.8440, 18.5220], // Sambhaji Park
          [73.8410, 18.5175]  // Deccan Gymkhana (Garware Bridge)
        ]
      }
    },
    {
      type: "Feature",
      id: "RD-KARVE",
      properties: {
        id: "RD-KARVE",
        name: "Karve Road",
        class: "PRIMARY CORRIDOR",
        corridor: "Deccan Gymkhana - Nal Stop - Kothrud - Warje",
        lengthKm: 6.8,
        lanes: 6,
        surface: "Express Arterial with Metro Line 2 Viaduct",
        ward: "Ward 12 (Kothrud - Bavdhan)",
        speedLimitKm: 50,
        transitUse: "Maha-Metro Aqua Line Viaduct & PMPML Trunk"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [73.8390, 18.5160], // Deccan / Alka Talkies
          [73.8300, 18.5110], // Nal Stop Junction
          [73.8200, 18.5070], // Paud Phata / Dashbhuja Ganpati
          [73.8050, 18.5020], // Kothrud Stand / Vanaz
          [73.7920, 18.4950]  // Warje Malwadi
        ]
      }
    },
    {
      type: "Feature",
      id: "RD-SATARA",
      properties: {
        id: "RD-SATARA",
        name: "Pune - Satara Road",
        class: "PRIMARY CORRIDOR",
        corridor: "Swargate to Katraj Junction",
        lengthKm: 7.5,
        lanes: 6,
        surface: "National Highway Link with BRTS Dedicated Lane",
        ward: "Ward 08 / 11 (Swargate - Dhankawadi)",
        speedLimitKm: 50,
        transitUse: "Rainbow BRTS Dedicated Bus Corridor"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [73.8580, 18.5015], // Swargate Multimodal Hub
          [73.8590, 18.4900], // Laxmi Narayan Cinema
          [73.8600, 18.4810], // Padmavati / Sahakarnagar
          [73.8610, 18.4750], // Balaji Nagar / Dhankawadi
          [73.8620, 18.4550]  // Katraj Terminal / Ghat
        ]
      }
    },
    {
      type: "Feature",
      id: "RD-SB",
      properties: {
        id: "RD-SB",
        name: "Senapati Bapat (SB) Road",
        class: "SECONDARY ROAD",
        corridor: "NCC Ground to Chaturshringi / ICC Tech Park",
        lengthKm: 3.2,
        lanes: 4,
        surface: "Asphalt Secondary Arterial",
        ward: "Ward 10 (Shivajinagar)",
        speedLimitKm: 40,
        transitUse: "PMPML Route 11, 148"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [73.8350, 18.5270], // NCC Circle
          [73.8310, 18.5330], // Symbiosis International Campus
          [73.8290, 18.5420], // ICC Tech Tower / Marriott
          [73.8270, 18.5510]  // Chaturshringi Temple Junction
        ]
      }
    },
    {
      type: "Feature",
      id: "RD-NAGAR",
      properties: {
        id: "RD-NAGAR",
        name: "Pune - Ahmednagar (Nagar) Road",
        class: "PRIMARY CORRIDOR",
        corridor: "Yerawada - Viman Nagar - Kharadi",
        lengthKm: 9.2,
        lanes: 6,
        surface: "State Highway Arterial with Metro Alignment",
        ward: "Ward 04 (Nagar Road - Vadgaonsheri)",
        speedLimitKm: 50,
        transitUse: "Maha-Metro Aqua Line East Section & BRTS"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [73.8780, 18.5410], // Yerawada Gunjan Chowk
          [73.8950, 18.5480], // Shastri Nagar / Golf Club
          [73.9180, 18.5580], // Viman Nagar Corner / Phoenix
          [73.9450, 18.5620], // Kharadi Bypass / EON IT Zone
          [73.9720, 18.5680]  // Wagholi PMC Boundary
        ]
      }
    },
    {
      type: "Feature",
      id: "RD-SHIVAJI",
      properties: {
        id: "RD-SHIVAJI",
        name: "Shivaji Road",
        class: "SECONDARY ROAD",
        corridor: "Pune Municipal Corporation to Swargate via Shaniwar Wada",
        lengthKm: 3.8,
        lanes: 2,
        surface: "Dense Historic Core One-Way Corridor",
        ward: "Ward 07 (Kasba - Vishrambaug)",
        speedLimitKm: 30,
        transitUse: "PMPML North-to-South Heritage Line"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [73.8550, 18.5310], // PMC Main Administrative Building
          [73.8555, 18.5220], // Shaniwar Wada Front Gate
          [73.8565, 18.5140], // Mahatma Phule Mandai
          [73.8580, 18.5020]  // Jedhe Chowk / Swargate
        ]
      }
    },
    {
      type: "Feature",
      id: "RD-SINHAGAD",
      properties: {
        id: "RD-SINHAGAD",
        name: "Sinhagad Road",
        class: "PRIMARY CORRIDOR",
        corridor: "Saras Baug - Rajaram Bridge - Vadgaon - Dhayari",
        lengthKm: 8.4,
        lanes: 4,
        surface: "Arterial Link with Ongoing Flyover",
        ward: "Ward 09 (Sinhagad Road - Vadgaon)",
        speedLimitKm: 45,
        transitUse: "PMPML Route 50, 51"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [73.8490, 18.5020], // Saras Baug Corner
          [73.8340, 18.4940], // Pu. La. Deshpande Garden
          [73.8240, 18.4870], // Rajaram Bridge Junction
          [73.8110, 18.4760], // Vadgaon Khurd
          [73.7980, 18.4650]  // Dhayari / Nanded City
        ]
      }
    },
    {
      type: "Feature",
      id: "RD-GANESHKHIND",
      properties: {
        id: "RD-GANESHKHIND",
        name: "Ganeshkhind (University) Road",
        class: "PRIMARY CORRIDOR",
        corridor: "Sancheti Chowk to Pune University Circle",
        lengthKm: 3.6,
        lanes: 6,
        surface: "Double-Decker Metro Line 3 Flyover Corridor",
        ward: "Ward 10 / 02 (Shivajinagar / Aundh)",
        speedLimitKm: 50,
        transitUse: "PML3 Metro Route Alignment"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [73.8525, 18.5312], // Sancheti Chowk
          [73.8475, 18.5345], // Agriculture College Flyover
          [73.8380, 18.5420], // Government Polytechnic
          [73.8290, 18.5520]  // SPPU University Circle
        ]
      }
    },
    {
      type: "Feature",
      id: "RD-OLD-MUMBAI",
      properties: {
        id: "RD-OLD-MUMBAI",
        name: "Old Mumbai - Pune Highway (NH 48)",
        class: "PRIMARY CORRIDOR",
        corridor: "Shivajinagar - Khadki - Dapodi - Pimpri",
        lengthKm: 8.5,
        lanes: 6,
        surface: "National Highway / Maha-Metro Purple Line Corridor",
        ward: "Ward 10 (Khadki / Shivajinagar)",
        speedLimitKm: 60,
        transitUse: "Maha-Metro Purple Line Elevated Viaduct"
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [73.8540, 18.5315], // Shivajinagar Railway Station
          [73.8480, 18.5470], // Khadki Cantonment Gate
          [73.8390, 18.5650], // Bopodi / Harris Bridge
          [73.8280, 18.5820]  // Dapodi / PCMC Border
        ]
      }
    }
  ]
};
