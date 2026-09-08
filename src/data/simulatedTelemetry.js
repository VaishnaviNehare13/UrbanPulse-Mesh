// Simulated Telemetry, Audit Logs, Analytics Data, and Simulation Scenarios

export const INITIAL_AUDIT_LOG = [
  {
    id: "LOG-9081",
    time: "10:43:12",
    service: "Emergency",
    severity: "critical",
    event: "FIRST RESPONDER DISPATCH",
    description: "Erandwane Fire Engine #04 dispatched to Goodluck Chowk incident (UP-1024)."
  },
  {
    id: "LOG-9080",
    time: "10:42:45",
    service: "Traffic",
    severity: "warning",
    event: "INCIDENT DETECTED",
    description: "Camera & Sensor Mesh SC-12 identified traffic standstill on FC Road (82% congestion)."
  },
  {
    id: "LOG-9079",
    time: "10:38:00",
    service: "System",
    severity: "normal",
    event: "DIGITAL TWIN SYNC",
    description: "All 6 municipal service telemetry channels synced with WGS84 GIS engine."
  },
  {
    id: "LOG-9078",
    time: "10:15:22",
    service: "Power",
    severity: "warning",
    event: "TRANSFORMER LOAD SPIKE",
    description: "Rasta Peth 220kV Substation registered peak daytime draw at 91% capacity."
  },
  {
    id: "LOG-9077",
    time: "09:40:00",
    service: "Transit",
    severity: "normal",
    event: "METRO HEADWAY REPORT",
    description: "Pune Metro Line 1 & Line 2 operational at 6.0-minute headways. 98% on-time."
  },
  {
    id: "LOG-9076",
    time: "09:15:30",
    service: "Water",
    severity: "warning",
    event: "PRESSURE ADVISORY",
    description: "Mandai Heritage Sector pipeline telemetry noted localized pressure dip (1.8 bar)."
  }
];

export const SIMULATION_SCENARIOS = [
  {
    id: "SCN-TRAFFIC-FC",
    title: "FC Road Arterial Blockage & Transit Diversion",
    category: "Traffic & Emergency",
    location: "FC Road, Shivajinagar",
    coordinates: [18.5235, 73.8415],
    triggerDescription: "Simulate major vehicular breakdown blocking dual lanes at Goodluck Chowk.",
    affectedArea: "Shivajinagar - Deccan Corridor",
    beforeState: {
      travelTimeMin: 24,
      avgSpeedKmh: 14,
      congestionPct: 82,
      emergencyAccessDelayMin: 8.5,
      transitDelayMin: 12
    },
    afterState: {
      travelTimeMin: 15,
      avgSpeedKmh: 34,
      congestionPct: 44,
      emergencyAccessDelayMin: 3.2,
      transitDelayMin: 3
    },
    actionSummary: "Dynamic Green-Wave on JM Road + Divert private transit to Senapati Bapat Road loop.",
    affectedServices: ["Traffic", "Emergency", "Transit"]
  },
  {
    id: "SCN-WATER-PARVATI",
    title: "Parvati Pumping Station Feeder Pressure Drop",
    category: "Water Supply",
    location: "Parvati Water Works",
    coordinates: [18.4980, 73.8490],
    triggerDescription: "Simulate 35% pressure loss in central Peth distribution main feeder.",
    affectedArea: "Kasba Peth, Shukrawar Peth, Swargate",
    beforeState: {
      pressureBar: 1.8,
      supplyAvailabilityPct: 58,
      affectedHouseholds: "14,500",
      resolutionTimeMin: 60
    },
    afterState: {
      pressureBar: 3.8,
      supplyAvailabilityPct: 92,
      affectedHouseholds: "800",
      resolutionTimeMin: 15
    },
    actionSummary: "Engage Holkar Booster Bypass and open Warje Auxiliary Balancing Reservoir.",
    affectedServices: ["Water", "Power"]
  },
  {
    id: "SCN-POWER-RASTA",
    title: "Rasta Peth Substation 220kV Thermal Load Shedding",
    category: "Electrical Grid",
    location: "Rasta Peth Substation",
    coordinates: [18.5190, 73.8670],
    triggerDescription: "Simulate summer peak load exceeding 94% transformer rated rating.",
    affectedArea: "Station Area, Rasta Peth, Somwar Peth",
    beforeState: {
      loadPct: 94,
      coreTempC: 84,
      trippingRiskPct: 78,
      feederOverloadCount: 4
    },
    afterState: {
      loadPct: 72,
      coreTempC: 62,
      trippingRiskPct: 5,
      feederOverloadCount: 0
    },
    actionSummary: "Automated telemetry switch to transfer 22 MW commercial load to Ganeshkhind Grid ring.",
    affectedServices: ["Power", "Traffic"]
  }
];

// 7-Day Simulated Analytics Data
export const ANALYTICS_DATA = {
  incidentTrend: [
    { day: "Mon", incidents: 8, resolved: 8, avgResponseMin: 4.8 },
    { day: "Tue", incidents: 12, resolved: 11, avgResponseMin: 5.1 },
    { day: "Wed", incidents: 6, resolved: 6, avgResponseMin: 4.2 },
    { day: "Thu", incidents: 15, resolved: 14, avgResponseMin: 5.4 },
    { day: "Fri", incidents: 18, resolved: 17, avgResponseMin: 5.8 },
    { day: "Sat", incidents: 9, resolved: 9, avgResponseMin: 4.5 },
    { day: "Sun", incidents: 5, resolved: 5, avgResponseMin: 3.9 }
  ],
  serviceReliability: [
    { service: "Water Supply", uptime: 99.4, status: "Nominal" },
    { service: "Power Grid", uptime: 98.8, status: "High Load" },
    { service: "Traffic Flow", uptime: 94.2, status: "Moderate" },
    { service: "Emergency", uptime: 99.8, status: "Active" },
    { service: "Transit (PMPML/Metro)", uptime: 96.5, status: "Minor Delay" },
    { service: "Waste Management", uptime: 97.9, status: "Nominal" }
  ],
  corridorSpeedAverages: [
    { corridor: "JM Road", speed: 28, baseline: 35 },
    { corridor: "FC Road", speed: 14, baseline: 32 },
    { corridor: "Karve Road", speed: 30, baseline: 40 },
    { corridor: "Pune-Satara Road", speed: 42, baseline: 45 },
    { corridor: "Old Mumbai Highway", speed: 52, baseline: 55 },
    { corridor: "Nagar Road", speed: 40, baseline: 45 }
  ]
};
