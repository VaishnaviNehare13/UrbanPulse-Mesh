// Real Geographic Simulated Incidents in Pune

export const INCIDENTS_DATA = [
  {
    id: "UP-1024",
    title: "Multi-Vehicle Collision & Transit Stoppage",
    type: "Road Accident & Transit Block",
    severity: "HIGH", // CRITICAL, HIGH, MEDIUM, LOW
    severityCode: "high",
    domain: "Emergency",
    lat: 18.5235,
    lng: 73.8415,
    locationName: "FC Road near Goodluck Chowk",
    ward: "Ward 10 (Shivajinagar / Deccan)",
    timestamp: "10:42 AM IST",
    status: "Response in Progress",
    affectedServices: ["Traffic", "Emergency", "Transit"],
    assignedUnits: [
      { name: "Erandwane Fire Engine #04", eta: "Arrived", status: "On-Scene" },
      { name: "108 Emergency Ambulance #12", eta: "2 min", status: "En Route" },
      { name: "Deccan Traffic Sector Police Unit 3", eta: "Arrived", status: "Managing Perimeter" }
    ],
    nearestFacility: {
      name: "Sahyadri Super Speciality Hospital",
      distanceKm: 0.9,
      type: "hospital"
    },
    recommendation: "Execute Dynamic Traffic Diversion Rule DIV-R-8842: Reroute northbound traffic via Senapati Bapat Road; shift signal green phase +45s on JM Road.",
    beforeAfterMetrics: {
      currentTravelTime: "24 min",
      diversionTravelTime: "16 min",
      impactDelta: "-8 min saved",
      corridorCongestionBefore: "86%",
      corridorCongestionAfter: "42%"
    }
  },
  {
    id: "UP-1025",
    title: "Distribution Pipeline Pressure Anomaly",
    type: "Water Supply Pressure Drop",
    severity: "MEDIUM",
    severityCode: "medium",
    domain: "Water",
    lat: 18.5140,
    lng: 73.8560,
    locationName: "Mandai Heritage Sector Main Valve",
    ward: "Ward 07 (Kasba Peth)",
    timestamp: "09:15 AM IST",
    status: "Telemetry Advisory",
    affectedServices: ["Water"],
    assignedUnits: [
      { name: "Parvati Water Distribution Line Maintenance Crew B", eta: "15 min", status: "En Route" }
    ],
    nearestFacility: {
      name: "Parvati Water Works",
      distanceKm: 1.8,
      type: "water"
    },
    recommendation: "Activate Secondary Booster Valve V-04 to maintain 3.5 bar baseline in Kasba Peth distribution sector.",
    beforeAfterMetrics: {
      currentPressure: "1.8 bar (Low)",
      stabilizedPressure: "3.6 bar (Nominal)",
      affectedHouseholds: "1,200",
      resolutionEst: "25 min"
    }
  },
  {
    id: "UP-1026",
    title: "Feeder Transformer Peak Load Warning",
    type: "Electrical Grid Overload",
    severity: "MEDIUM",
    severityCode: "medium",
    domain: "Power",
    lat: 18.5190,
    lng: 73.8670,
    locationName: "Rasta Peth 220kV Feeder Circuit #08",
    ward: "Rasta Peth / Station Area",
    timestamp: "10:10 AM IST",
    status: "Load Balancing Recommended",
    affectedServices: ["Power"],
    assignedUnits: [
      { name: "MSEDCL Grid Dispatch Team 1", eta: "Monitoring", status: "Automated Switching Ready" }
    ],
    nearestFacility: {
      name: "Rasta Peth Substation",
      distanceKm: 0.1,
      type: "power"
    },
    recommendation: "Shift 18 MW auxiliary industrial load to Ganeshkhind backup feeder ring to drop transformer core thermal stress below 80%.",
    beforeAfterMetrics: {
      currentLoad: "91% (Critical Watch)",
      optimizedLoad: "73% (Stable)",
      estimatedDuration: "Automated (Instant Switch)"
    }
  }
];
