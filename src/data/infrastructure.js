// Real Municipal Infrastructure Locations in Pune, Maharashtra, India
// Categorized by facility type with real names and precise coordinates

export const INFRASTRUCTURE_FACILITIES = [
  // -------------------------------------------------------------
  // HOSPITALS & HEALTHCARE
  // -------------------------------------------------------------
  {
    id: "HOSP-01",
    name: "Sassoon General Hospital",
    type: "hospital",
    subtype: "Apex Government Tertiary Hospital & Trauma Center",
    lat: 18.5265,
    lng: 73.8715,
    ward: "Ward 10 (Shivajinagar / Station)",
    capacityBeds: 1296,
    icuAvailable: 42,
    traumaLevel: "Level 1 Trauma Facility",
    simulatedStatus: "Operational",
    simulatedOccupancy: "82%",
    emergencyContact: "+91 20 2612 8000"
  },
  {
    id: "HOSP-02",
    name: "KEM Hospital & Research Centre",
    type: "hospital",
    subtype: "Multi-Speciality Trust Hospital",
    lat: 18.5205,
    lng: 73.8690,
    ward: "Rasta Peth",
    capacityBeds: 550,
    icuAvailable: 18,
    traumaLevel: "Level 2 Emergency",
    simulatedStatus: "Operational",
    simulatedOccupancy: "78%",
    emergencyContact: "+91 20 6603 7300"
  },
  {
    id: "HOSP-03",
    name: "Deenanath Mangeshkar Hospital",
    type: "hospital",
    subtype: "Super-Speciality Tertiary Care Hospital",
    lat: 18.5030,
    lng: 73.8315,
    ward: "Erandwane / Kothrud",
    capacityBeds: 800,
    icuAvailable: 26,
    traumaLevel: "Level 1 Trauma Facility",
    simulatedStatus: "Operational",
    simulatedOccupancy: "86%",
    emergencyContact: "+91 20 4015 1000"
  },
  {
    id: "HOSP-04",
    name: "Ruby Hall Clinic (Main Hospital)",
    type: "hospital",
    subtype: "NABH Accredited Multi-Speciality",
    lat: 18.5320,
    lng: 73.8770,
    ward: "Sassoon Road / Dhole Patil",
    capacityBeds: 600,
    icuAvailable: 22,
    traumaLevel: "Level 1 Cardiac & Trauma",
    simulatedStatus: "Operational",
    simulatedOccupancy: "74%",
    emergencyContact: "+91 20 6645 5100"
  },
  {
    id: "HOSP-05",
    name: "PMC Kamla Nehru General Hospital",
    type: "hospital",
    subtype: "Municipal Corporation Hospital",
    lat: 18.5215,
    lng: 73.8610,
    ward: "Kasba - Mangalwar Peth",
    capacityBeds: 350,
    icuAvailable: 12,
    traumaLevel: "Level 2 Civic Care",
    simulatedStatus: "Operational",
    simulatedOccupancy: "69%",
    emergencyContact: "+91 20 2550 1000"
  },
  {
    id: "HOSP-06",
    name: "Sahyadri Super Speciality Hospital",
    type: "hospital",
    subtype: "Neuro & Cardiac Speciality",
    lat: 18.5140,
    lng: 73.8350,
    ward: "Deccan Gymkhana",
    capacityBeds: 220,
    icuAvailable: 15,
    traumaLevel: "Level 1 Neuro Emergency",
    simulatedStatus: "Operational",
    simulatedOccupancy: "80%",
    emergencyContact: "+91 20 6721 3000"
  },

  // -------------------------------------------------------------
  // FIRE & RESCUE STATIONS
  // -------------------------------------------------------------
  {
    id: "FIRE-01",
    name: "PMC Central Fire Station",
    type: "fire_station",
    subtype: "Headquarters & Disaster Command Station",
    lat: 18.5085,
    lng: 73.8660,
    ward: "Bhavani Peth",
    availableEngines: 6,
    foamTenders: 2,
    hydraulicPlatforms: 1,
    turnoutTime: "4.2 min",
    simulatedStatus: "Ready / Standby",
    emergencyContact: "101 / +91 20 2645 1707"
  },
  {
    id: "FIRE-02",
    name: "Kothrud Fire Station",
    type: "fire_station",
    subtype: "Sub-Divisional Response Unit",
    lat: 18.5075,
    lng: 73.8180,
    ward: "Kothrud (DP Road)",
    availableEngines: 3,
    foamTenders: 1,
    hydraulicPlatforms: 1,
    turnoutTime: "3.8 min",
    simulatedStatus: "Ready / Standby",
    emergencyContact: "+91 20 2538 4101"
  },
  {
    id: "FIRE-03",
    name: "Aundh Fire Station",
    type: "fire_station",
    subtype: "North-West Rapid Response Unit",
    lat: 18.5580,
    lng: 73.8050,
    ward: "Aundh - IT Belt",
    availableEngines: 3,
    foamTenders: 1,
    hydraulicPlatforms: 0,
    turnoutTime: "4.5 min",
    simulatedStatus: "Ready / Standby",
    emergencyContact: "+91 20 2588 5101"
  },
  {
    id: "FIRE-04",
    name: "Erandwane Fire Station",
    type: "fire_station",
    subtype: "Central-West Civic Response Station",
    lat: 18.5120,
    lng: 73.8340,
    ward: "Erandwane / Karve Rd",
    availableEngines: 2,
    foamTenders: 1,
    hydraulicPlatforms: 0,
    turnoutTime: "3.5 min",
    simulatedStatus: "1 Engine Dispatched (Incident UP-1024)",
    emergencyContact: "+91 20 2544 1101"
  },

  // -------------------------------------------------------------
  // TRANSIT HUBS & TERMINALS
  // -------------------------------------------------------------
  {
    id: "TRANSIT-01",
    name: "Pune Junction Railway Station",
    type: "transit",
    subtype: "Major Intercity & Regional Rail Terminal",
    lat: 18.5285,
    lng: 73.8745,
    ward: "Pune Station Area",
    dailyFootfall: "240,000",
    transitLines: "Central Railway Mainline, Metro Line 2",
    simulatedStatus: "Normal Flow (On-Time 92%)",
    platforms: 6
  },
  {
    id: "TRANSIT-02",
    name: "Shivajinagar Integrated Transit Hub",
    type: "transit",
    subtype: "Multi-Modal Rail, Metro & PMPML Hub",
    lat: 18.5315,
    lng: 73.8520,
    ward: "Shivajinagar",
    dailyFootfall: "180,000",
    transitLines: "Suburban Rail, Metro Line 1, PMPML BRTS",
    simulatedStatus: "Minor Corridor Delay (7 min)",
    platforms: 4
  },
  {
    id: "TRANSIT-03",
    name: "Swargate PMPML & MSRTC Bus Station",
    type: "transit",
    subtype: "Southern Multi-Modal Transit Gateway",
    lat: 18.5015,
    lng: 73.8580,
    ward: "Swargate",
    dailyFootfall: "190,000",
    transitLines: "Underground Metro Line 1, PMPML BRTS, MSRTC",
    simulatedStatus: "Normal Operations",
    platforms: 14
  },
  {
    id: "TRANSIT-04",
    name: "Deccan Gymkhana PMPML Bus Depot",
    type: "transit",
    subtype: "City Feeder & Inter-Ward Depot",
    lat: 18.5170,
    lng: 73.8415,
    ward: "Deccan",
    dailyFootfall: "75,000",
    transitLines: "PMPML Radial Routes",
    simulatedStatus: "Traffic Reroute Active",
    platforms: 8
  },

  // -------------------------------------------------------------
  // WATER SUPPLY & TREATMENT INFRASTRUCTURE
  // -------------------------------------------------------------
  {
    id: "WATER-01",
    name: "Parvati Water Works & Pumping Station",
    type: "water",
    subtype: "Apex Municipal Water Treatment & Filtration Plant",
    lat: 18.4980,
    lng: 73.8490,
    ward: "Parvati Hills",
    designCapacityMld: 500,
    currentOutputMld: 442,
    simulatedPressure: "4.2 bar",
    simulatedStatus: "Normal Operating Pressure (88%)",
    supplyZone: "Central Peths, Shivajinagar, Kothrud"
  },
  {
    id: "WATER-02",
    name: "Warje Water Treatment Plant",
    type: "water",
    subtype: "Khadakwasla Basin Secondary WTP",
    lat: 18.4780,
    lng: 73.7990,
    ward: "Warje - Mutha Bank",
    designCapacityMld: 250,
    currentOutputMld: 215,
    simulatedPressure: "3.9 bar",
    simulatedStatus: "Normal Operating Pressure (86%)",
    supplyZone: "Kothrud, Bavdhan, Sinhagad Rd"
  },
  {
    id: "WATER-03",
    name: "Holkar Bridge Pumping Station",
    type: "water",
    subtype: "Mula River Raw Water Lift & Booster",
    lat: 18.5520,
    lng: 73.8540,
    ward: "Khadki - Holkar",
    designCapacityMld: 180,
    currentOutputMld: 152,
    simulatedPressure: "3.8 bar",
    simulatedStatus: "Normal Operating Pressure (84%)",
    supplyZone: "Aundh, Yerawada, Pune Cantonment"
  },

  // -------------------------------------------------------------
  // POWER & ELECTRICAL GRID SUBSTATIONS
  // -------------------------------------------------------------
  {
    id: "POWER-01",
    name: "Rasta Peth 220/33kV MSEDCL Main Substation",
    type: "power",
    subtype: "Urban Core High-Voltage Distribution Grid",
    lat: 18.5190,
    lng: 73.8670,
    ward: "Rasta Peth",
    transformerCapacityMva: 150,
    simulatedLoadPercent: 91,
    simulatedStatus: "High Load (Attention Required)",
    coolingStatus: "Active Fan Stage 2",
    feederCircuits: 16
  },
  {
    id: "POWER-02",
    name: "Ganeshkhind 132/33kV Substation",
    type: "power",
    subtype: "North-West Transmission & Distribution Substation",
    lat: 18.5390,
    lng: 73.8340,
    ward: "Ganeshkhind / Pune University",
    transformerCapacityMva: 100,
    simulatedLoadPercent: 68,
    simulatedStatus: "Normal Grid Load",
    coolingStatus: "Standard Stage 1",
    feederCircuits: 12
  },
  {
    id: "POWER-03",
    name: "Parvati 132/33kV Substation",
    type: "power",
    subtype: "South Grid Distribution Facility",
    lat: 18.4950,
    lng: 73.8530,
    ward: "Parvati / Sahakar Nagar",
    transformerCapacityMva: 100,
    simulatedLoadPercent: 74,
    simulatedStatus: "Normal Grid Load",
    coolingStatus: "Standard Stage 1",
    feederCircuits: 14
  },

  // -------------------------------------------------------------
  // SOLID WASTE MANAGEMENT (SWM) & MUNICIPAL OFFICES
  // -------------------------------------------------------------
  {
    id: "WASTE-01",
    name: "Kothrud Garbage Transfer Station (GTS)",
    type: "waste",
    subtype: "Automated Compactor & Segregation Transfer Hub",
    lat: 18.5020,
    lng: 73.8110,
    ward: "Kothrud Industrial Area",
    dailyCapacityTons: 150,
    currentLoadTons: 114,
    simulatedRouteCompletion: "76%",
    simulatedStatus: "Operational (12 vehicles active)"
  },
  {
    id: "WASTE-02",
    name: "Ghole Road SWM Ward Processing Center",
    type: "waste",
    subtype: "Decentralized Bio-Methanation & RDF Unit",
    lat: 18.5280,
    lng: 73.8460,
    ward: "Shivajinagar / Ghole Rd",
    dailyCapacityTons: 60,
    currentLoadTons: 48,
    simulatedRouteCompletion: "82%",
    simulatedStatus: "Operational (8 vehicles active)"
  },
  {
    id: "ADMIN-01",
    name: "Pune Municipal Corporation (PMC) Main Bhavan",
    type: "municipal",
    subtype: "City Command & Civic Administration Headquarters",
    lat: 18.5305,
    lng: 73.8540,
    ward: "Shivajinagar / Mangalwar Peth",
    departmentCount: 32,
    simulatedStatus: "Command Center Online",
    disasterCell: "Level 1 Operational Watch"
  }
];
