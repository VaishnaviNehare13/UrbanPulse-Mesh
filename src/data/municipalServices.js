// Centralized Municipal Services Definition & Live Synchronized Status Model

export const MUNICIPAL_SERVICES = [
  {
    id: "traffic",
    name: "Traffic & Mobility",
    shortName: "Traffic",
    icon: "Car",
    status: "moderate", // normal (green), moderate (amber), critical (red)
    statusCode: "ATTENTION",
    value: 72,
    metricLabel: "Avg Congestion",
    unit: "%",
    activeIncidents: 1,
    assignedUnits: "4 Traffic Police Units",
    lastUpdated: "Just now",
    description: "Real-time corridor flow optimization and signal synchronization mesh."
  },
  {
    id: "emergency",
    name: "Emergency & Disaster Response",
    shortName: "Emergency",
    icon: "ShieldAlert",
    status: "active", // active (red/critical), standby (green)
    statusCode: "INCIDENT ACTIVE",
    value: 2,
    metricLabel: "Dispatched Units",
    unit: "En Route",
    activeIncidents: 1,
    assignedUnits: "Erandwane Fire Engine #04, 108 Ambulance",
    lastUpdated: "1 min ago",
    description: "Fire rescue, civic trauma response, and emergency hospital corridor clearance."
  },
  {
    id: "transit",
    name: "Public Transit (PMPML & Metro)",
    shortName: "Transit",
    icon: "Bus",
    status: "minor-delay", // normal, minor-delay (amber), disrupted (red)
    statusCode: "MINOR DELAY",
    value: 88,
    metricLabel: "On-Time Headway",
    unit: "%",
    activeIncidents: 1,
    assignedUnits: "Route 11, 24 Rerouted",
    lastUpdated: "2 mins ago",
    description: "PMPML bus network and Pune Metro Line 1 & Line 2 operational coordination."
  },
  {
    id: "water",
    name: "Water Supply & Distribution",
    shortName: "Water",
    icon: "Droplets",
    status: "normal",
    statusCode: "NORMAL",
    value: 84,
    metricLabel: "Supply Availability",
    unit: "%",
    activeIncidents: 0,
    assignedUnits: "Parvati & Warje WTP Active",
    lastUpdated: "3 mins ago",
    description: "Pumping station pressure monitoring, treatment output, and pipeline telemetry."
  },
  {
    id: "power",
    name: "Electrical Grid & Street Lighting",
    shortName: "Power",
    icon: "Zap",
    status: "high-load", // normal, high-load (amber), outage (red)
    statusCode: "HIGH LOAD",
    value: 91,
    metricLabel: "Grid Transformer Load",
    unit: "%",
    activeIncidents: 0,
    assignedUnits: "Rasta Peth 220kV Monitored",
    lastUpdated: "Just now",
    description: "MSEDCL high-voltage grid substations and smart street lighting clusters."
  },
  {
    id: "waste",
    name: "Solid Waste Management",
    shortName: "Waste",
    icon: "Recycle",
    status: "normal",
    statusCode: "NORMAL",
    value: 76,
    metricLabel: "Daily Route Completion",
    unit: "%",
    activeIncidents: 0,
    assignedUnits: "20 Vehicles in Service",
    lastUpdated: "4 mins ago",
    description: "Automated compactor transfer stations and decentralized organic processing."
  }
];
