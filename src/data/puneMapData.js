// Real Geographic Coordinates and Features for Pune, Maharashtra, India
// Center: 18.5204° N, 73.8567° E

export const PUNE_CENTER = [18.5204, 73.8567];
export const DEFAULT_ZOOM = 13;

// Real Administrative Wards / Sectors with realistic bounding polygons
export const PUNE_SECTORS = [
  {
    id: "WARD-10",
    name: "Shivajinagar Ward",
    code: "SEC-10",
    population: "284,000",
    areaKm2: "14.2",
    zoneType: "Central Administrative & Transit Hub",
    coordinates: [
      [18.5420, 73.8340],
      [18.5450, 73.8600],
      [18.5280, 73.8650],
      [18.5200, 73.8450],
      [18.5260, 73.8300]
    ],
    color: "#2563eb",
    fillColor: "#3b82f6",
    fillOpacity: 0.08
  },
  {
    id: "WARD-07",
    name: "Kasba - Vishrambaug Peth",
    code: "SEC-07",
    population: "310,000",
    areaKm2: "9.8",
    zoneType: "Heritage & Commercial Core",
    coordinates: [
      [18.5220, 73.8480],
      [18.5260, 73.8640],
      [18.5100, 73.8680],
      [18.5080, 73.8500]
    ],
    color: "#eab308",
    fillColor: "#facc15",
    fillOpacity: 0.09
  },
  {
    id: "WARD-12",
    name: "Kothrud - Bavdhan Ward",
    code: "SEC-12",
    population: "340,000",
    areaKm2: "22.5",
    zoneType: "High-Density Residential & Educational",
    coordinates: [
      [18.5180, 73.8250],
      [18.5140, 73.7920],
      [18.4900, 73.8050],
      [18.4980, 73.8320]
    ],
    color: "#059669",
    fillColor: "#10b981",
    fillOpacity: 0.08
  },
  {
    id: "WARD-08",
    name: "Swargate - Parvati Ward",
    code: "SEC-08",
    population: "260,000",
    areaKm2: "12.1",
    zoneType: "Southern Transit Gateway & Water Basin",
    coordinates: [
      [18.5080, 73.8480],
      [18.5060, 73.8700],
      [18.4850, 73.8650],
      [18.4880, 73.8420]
    ],
    color: "#6366f1",
    fillColor: "#818cf8",
    fillOpacity: 0.08
  },
  {
    id: "WARD-02",
    name: "Aundh - Baner Ward",
    code: "SEC-02",
    population: "295,000",
    areaKm2: "26.4",
    zoneType: "North-West IT & Commercial Corridor",
    coordinates: [
      [18.5680, 73.7850],
      [18.5720, 73.8180],
      [18.5380, 73.8320],
      [18.5350, 73.7800]
    ],
    color: "#0ea5e9",
    fillColor: "#38bdf8",
    fillOpacity: 0.08
  },
  {
    id: "WARD-14",
    name: "Hadapsar - Mundhwa Ward",
    code: "SEC-14",
    population: "380,000",
    areaKm2: "32.0",
    zoneType: "Eastern Industrial & Tech District",
    coordinates: [
      [18.5280, 73.8900],
      [18.5350, 73.9450],
      [18.4950, 73.9500],
      [18.4920, 73.8850]
    ],
    color: "#8b5cf6",
    fillColor: "#a78bfa",
    fillOpacity: 0.08
  }
];

// Real Rivers in Pune (Mula & Mutha Rivers with Sangam Confluence)
export const PUNE_WATER_BODIES = [
  {
    id: "RIVER-MUTHA",
    name: "Mutha River",
    type: "River",
    coordinates: [
      [18.4820, 73.8100],
      [18.4980, 73.8280],
      [18.5080, 73.8380],
      [18.5190, 73.8470],
      [18.5280, 73.8560], // Sangam Confluence
      [18.5350, 73.8750],
      [18.5380, 73.9050],
      [18.5340, 73.9450]
    ],
    color: "#0284c7",
    weight: 4.5,
    opacity: 0.75
  },
  {
    id: "RIVER-MULA",
    name: "Mula River",
    type: "River",
    coordinates: [
      [18.5750, 73.7850],
      [18.5620, 73.8120],
      [18.5480, 73.8350],
      [18.5350, 73.8480],
      [18.5280, 73.8560] // Sangam Confluence
    ],
    color: "#0284c7",
    weight: 4.0,
    opacity: 0.75
  }
];

// Real Major Roads with hierarchy and simulated operational traffic overlay
export const PUNE_ROADS = [
  {
    id: "RD-JM",
    name: "Jangali Maharaj (JM) Road",
    class: "Major Arterial",
    corridor: "Shivajinagar - Deccan Gymkhana",
    lengthKm: 2.4,
    trafficStatus: "moderate", // normal, moderate, critical
    congestion: 64,
    averageSpeed: "24 km/h",
    lanes: 4,
    affectedSector: "Ward 10 (Shivajinagar)",
    recommendation: "Signal cycle optimization active at Sancheti Hospital junction.",
    coordinates: [
      [18.5312, 73.8525], // Sancheti / COEP
      [18.5280, 73.8485],
      [18.5220, 73.8440],
      [18.5175, 73.8410]  // Deccan Gymkhana
    ]
  },
  {
    id: "RD-FC",
    name: "Fergusson College (FC) Road",
    class: "Major Arterial",
    corridor: "Deccan to Shivajinagar",
    lengthKm: 2.1,
    trafficStatus: "critical",
    congestion: 82,
    averageSpeed: "14 km/h",
    lanes: 3,
    affectedSector: "Ward 10 (Shivajinagar)",
    recommendation: "Diversion recommended via Senapati Bapat Road due to obstruction at Goodluck Chowk.",
    coordinates: [
      [18.5165, 73.8405], // Deccan
      [18.5230, 73.8415], // FC Main Gate
      [18.5310, 73.8435], // Model Colony
      [18.5345, 73.8475]  // Agriculture College
    ]
  },
  {
    id: "RD-KARVE",
    name: "Karve Road",
    class: "Primary Expressway / Metro Corridor",
    corridor: "Deccan - Kothrud - Warje",
    lengthKm: 6.8,
    trafficStatus: "moderate",
    congestion: 58,
    averageSpeed: "30 km/h",
    lanes: 6,
    affectedSector: "Ward 12 (Kothrud)",
    recommendation: "Metro Line 2 transit integration operating at nominal headway.",
    coordinates: [
      [18.5160, 73.8390],
      [18.5110, 73.8300],
      [18.5070, 73.8200],
      [18.5020, 73.8050],
      [18.4950, 73.7920]
    ]
  },
  {
    id: "RD-SATARA",
    name: "Pune - Satara Road",
    class: "National Highway Link / BRTS Corridor",
    corridor: "Swargate to Katraj",
    lengthKm: 7.5,
    trafficStatus: "normal",
    congestion: 38,
    averageSpeed: "42 km/h",
    lanes: 6,
    affectedSector: "Ward 08 (Swargate)",
    recommendation: "BRTS corridor lanes unobstructed. Flowing normally.",
    coordinates: [
      [18.5015, 73.8580], // Swargate
      [18.4900, 73.8590],
      [18.4750, 73.8610],
      [18.4550, 73.8620]  // Katraj
    ]
  },
  {
    id: "RD-SB",
    name: "Senapati Bapat Road",
    class: "Secondary Arterial",
    corridor: "NCC to Chatushrungi",
    lengthKm: 3.2,
    trafficStatus: "normal",
    congestion: 41,
    averageSpeed: "36 km/h",
    lanes: 4,
    affectedSector: "Ward 10 (Shivajinagar)",
    recommendation: "Alternate diversion route available for FC Road congestion.",
    coordinates: [
      [18.5270, 73.8350],
      [18.5330, 73.8310],
      [18.5420, 73.8290],
      [18.5510, 73.8270]  // ICC Tech Park / Chatushrungi
    ]
  },
  {
    id: "RD-NAGAR",
    name: "Pune - Ahmednagar (Nagar) Road",
    class: "Primary Highway Arterial",
    corridor: "Yerawada - Viman Nagar - Kharadi",
    lengthKm: 9.2,
    trafficStatus: "normal",
    congestion: 48,
    averageSpeed: "40 km/h",
    lanes: 6,
    affectedSector: "Ward 04 (Viman Nagar)",
    recommendation: "Airport junction traffic signals in dynamic adaptive mode.",
    coordinates: [
      [18.5410, 73.8780],
      [18.5480, 73.8950],
      [18.5580, 73.9180],
      [18.5620, 73.9450]
    ]
  },
  {
    id: "RD-SHIVAJI",
    name: "Shivaji Road",
    class: "Urban Heritage Arterial",
    corridor: "Shivajinagar to Swargate",
    lengthKm: 3.8,
    trafficStatus: "moderate",
    congestion: 61,
    averageSpeed: "22 km/h",
    lanes: 2,
    affectedSector: "Ward 07 (Kasba Peth)",
    recommendation: "Heritage core corridor: Monitor Mandai & Shaniwar Wada chokepoints.",
    coordinates: [
      [18.5310, 73.8550], // Pune Municipal Corp (PMC Main)
      [18.5220, 73.8555], // Shaniwar Wada
      [18.5140, 73.8565], // Mandai
      [18.5020, 73.8580]  // Swargate
    ]
  },
  {
    id: "RD-TILAK",
    name: "Tilak Road",
    class: "Secondary Arterial",
    corridor: "Alka Talkies to Swargate",
    lengthKm: 2.2,
    trafficStatus: "normal",
    congestion: 35,
    averageSpeed: "32 km/h",
    lanes: 4,
    affectedSector: "Ward 07 / 08",
    recommendation: "SP College junction flowing smoothly.",
    coordinates: [
      [18.5140, 73.8440],
      [18.5100, 73.8480],
      [18.5050, 73.8540],
      [18.5020, 73.8580]
    ]
  },
  {
    id: "RD-OLD-MUMBAI",
    name: "Old Mumbai - Pune Highway (NH 48)",
    class: "National Expressway Arterial",
    corridor: "Shivajinagar - Khadki - Dapodi",
    lengthKm: 8.5,
    trafficStatus: "normal",
    congestion: 29,
    averageSpeed: "52 km/h",
    lanes: 6,
    affectedSector: "Ward 10 / Khadki",
    recommendation: "Corridor clear. Green wave active.",
    coordinates: [
      [18.5315, 73.8540],
      [18.5470, 73.8480],
      [18.5650, 73.8390],
      [18.5820, 73.8280]
    ]
  }
];
