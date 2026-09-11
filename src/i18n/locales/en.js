// English Translation Dictionary for UrbanPulse Mesh
export const en = {
  // Brand & Header
  app: {
    title: "URBANPULSE MESH",
    subtitle: "MUNICIPAL COORDINATION & DECISION SUPPORT",
    location: "Pune, Maharashtra",
    servicesOperational: "6/6 services operational",
    simulatedDisclosure: "SIMULATED OPERATIONAL DATA",
    officerRole: "City Administrator",
    signOut: "Sign Out",
    accessPlatform: "ACCESS PLATFORM",
    publicHome: "Public Home",
    backToHome: "Back to Home",
    academicPrototype: "B.Tech System Design Academic Prototype",
    puneMunicipalArea: "PUNE MUNICIPAL AREA",
    puneMaharashtra: "PUNE, MAHARASHTRA",
    dataDisclosureNote: "REAL GEOGRAPHIC DATA (PUNE GIS) + SIMULATED OPERATIONAL DATA",
    footerDisclaimer: "Simulated Operational Data • No Live IoT Sensors Implied"
  },

  // Language selector
  lang: {
    en: "EN",
    hi: "हिं",
    mr: "मर",
    english: "English",
    hindi: "हिन्दी",
    marathi: "मराठी"
  },

  // Public Home View
  home: {
    heroBadge: "B.Tech System Design Academic Prototype",
    heroTitleLine1: "MUNICIPAL COORDINATION",
    heroTitleLine2: "& DECISION SUPPORT",
    heroDesc: "A unified operational workstation for coordinating Pune's urban service domains, assessing real-time spatial bottlenecks, and executing synchronized administrative decisions.",
    enterOperations: "ENTER OPERATIONS",
    coreDomainsLabel: "CORE DOMAINS",
    municipalDomainsTitle: "MUNICIPAL SERVICE DOMAINS",
    coordinationParadigmLabel: "COORDINATION PARADIGM",
    workflowTitle: "NORMAN ACTION CYCLE & DECISION WORKFLOW",
    scenarioBannerPrefix: "Simulated Demonstration Scenario:",
    scenarioBannerHighlight: "UP-1024 Traffic Obstruction & DIV-R-8842 Dynamic Diversion",
    launchScenario: "Launch Scenario →",
    domains: {
      traffic: "Corridor velocity, choke-point detection & dynamic signal offset coordination.",
      emergency: "First responder CAD links, hospital green corridors & incident priority management.",
      transit: "PMPML feeder bus networks, Pune Metro telemetry & multi-modal rerouting.",
      water: "Parvati WTP output, transmission bulk mains & sector pressure monitoring.",
      power: "Substation transformer telemetry, feeder balancing & grid load mitigation.",
      waste: "Municipal SWM vehicle logistics, transfer stations & collection sector coverage."
    },
    workflow: {
      s1Title: "INCIDENT",
      s1Desc: "Anomaly detected in Pune urban corridor (e.g. UP-1024)",
      s2Title: "ASSESS",
      s2Desc: "Multi-service cross-impact evaluation across transport & emergency",
      s3Title: "COORDINATE",
      s3Desc: "Decision engine proposes synchronized protocol (DIV-R-8842)",
      s4Title: "RESPOND",
      s4Desc: "Administrator authorizes action with error prevention confirmation",
      s5Title: "EVALUATE",
      s5Desc: "System tracks stabilizing corridor metrics and records audit log"
    }
  },

  // Authentication & Login
  auth: {
    title: "SECURE ACCESS",
    subtitle: "Municipal Operations Workspace",
    authBadge: "AUTHENTICATION",
    leftDesc: "Authoritative multi-domain operational workspace for Pune municipal coordination.",
    securedNode: "Secured Node 01 • Pune",
    simulatedModeNotice: "Simulated Access Mode • Role-Based Authentication",
    officerIdLabel: "Officer ID",
    officerIdPlaceholder: "e.g. PUNE-ADMIN-01",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter password",
    roleLabel: "Designated Role",
    roles: {
      admin: "Dr. S. Kulkarni (City Administrator)",
      traffic: "Traffic Operations Controller",
      emergency: "Disaster & Emergency Lead"
    },
    signInBtn: "SIGN IN",
    authenticatingBtn: "AUTHENTICATING...",
    demoShortcutsLabel: "Demo Environment Shortcuts:",
    shortcuts: {
      admin: "Administrator",
      traffic: "Traffic Lead",
      emergency: "Emergency Lead"
    },
    errorId: "Please enter your Officer ID.",
    errorPassword: "Please enter your access password.",
    showPassword: "Show",
    hidePassword: "Hide",
    simulatedAccessFooter: "SIMULATED ACCESS • ACADEMIC PROTOTYPE"
  },

  // Search
  search: {
    placeholder: "Search Pune roads, facilities, wards, incidents...",
    ariaLabel: "Search Pune roads, facilities, and wards",
    clear: "Clear search",
    noResults: "No municipal assets or records found",
    catRoads: "ROADS & CORRIDORS",
    catFacilities: "FACILITIES & INFRASTRUCTURE",
    catWards: "AREAS / WARDS",
    catIncidents: "INCIDENTS"
  },

  // Notification Banner
  alerts: {
    activeIncident: "ACTIVE INCIDENT",
    reportedAt: "Reported",
    inspect: "INSPECT",
    resolved: "DIVERSION ACTIVE",
    resolvedSubtext: "Rule DIV-R-8842 applied • Traffic corridor stabilizing",
    diversionRoute: "FC Road → JM Road → Shivaji Road",
    trafficStabilizing: "Traffic stabilizing",
    transitRerouting: "Transit rerouting",
    dismiss: "Dismiss"
  },

  // Sidebar navigation
  nav: {
    primary: "PRIMARY",
    cityOperations: "City Operations",
    incidents: "Incidents",
    whatIf: "What-if Analysis",
    analytics: "Analytics",
    services: "SERVICES",
    traffic: "Traffic",
    emergency: "Emergency",
    transit: "Transit",
    water: "Water",
    power: "Power",
    waste: "Waste",
    system: "SYSTEM",
    architecture: "Architecture",
    serviceHealth: "Service Health",
    auditLog: "Audit Log"
  },

  // Municipal Services & Categories
  servicesList: {
    all: "ALL",
    traffic: "TRAFFIC",
    emergency: "EMERGENCY",
    transit: "TRANSIT",
    water: "WATER",
    power: "POWER",
    waste: "WASTE",
    trafficFull: "Traffic & Mobility",
    emergencyFull: "Emergency & Disaster Response",
    transitFull: "Public Transit (PMPML & Metro)",
    waterFull: "Water Supply & Distribution",
    powerFull: "Electrical Grid & Street Lighting",
    wasteFull: "Solid Waste Management"
  },

  // Map Controls, Layers & Legend
  map: {
    layers: "LAYERS",
    catalog: "GIS Layer Catalog",
    showAll: "Show All",
    clearAll: "Clear All",
    geography: "GEOGRAPHY",
    roads: "Roads",
    wardBoundaries: "Ward Boundaries",
    waterBodies: "Water Bodies",
    municipalServices: "MUNICIPAL SERVICES",
    trafficCorridors: "Traffic Corridors",
    trafficConditions: "Traffic Conditions",
    hospitals: "Hospitals",
    fireStations: "Fire Stations",
    emergencyZones: "Emergency Zones",
    metroRail: "Metro / Rail",
    pmpml: "PMPML Stops",
    waterInfra: "Water Infrastructure",
    powerInfra: "Power Infrastructure",
    wasteFacilities: "Waste Facilities",
    operations: "OPERATIONS",
    incidents: "Incidents",
    operationalZones: "Operational Zones",
    diversionRoutes: "Diversion Routes",
    legend: "GIS LEGEND",
    legendActive: "Active Legend Items",
    legendEmpty: "No operational layers active",
    resetView: "Reset View",
    zoomIn: "Zoom In",
    zoomOut: "Zoom Out",
    filterByService: "Filter by Service"
  },

  // Popup & Inspection
  inspection: {
    puneGis: "PUNE GIS",
    serviceDomain: "SERVICE",
    viewService: "VIEW SERVICE",
    zoomToLocation: "ZOOM TO LOCATION",
    viewOnMap: "VIEW ON MAP",
    condition: "Condition",
    status: "Status",
    capacity: "Capacity",
    ward: "Ward",
    type: "Type",
    load: "Simulated Load",
    speed: "Simulated Speed",
    flow: "Operating Status"
  },

  // Operations Console
  operations: {
    console: "OPERATIONS CONSOLE",
    operationsTitle: "OPERATIONS",
    trafficTitle: "TRAFFIC OPERATIONS",
    emergencyTitle: "EMERGENCY OPERATIONS",
    transitTitle: "TRANSIT OPERATIONS",
    waterTitle: "WATER OPERATIONS",
    powerTitle: "POWER OPERATIONS",
    wasteTitle: "WASTE OPERATIONS",
    puneArea: "PUNE MUNICIPAL AREA",
    cityOverview: "City Overview",
    incident: "Incident",
    auditLog: "Audit Log",
    cityStatus: "CITY STATUS",
    servicesCount: "Services",
    allOperational: "6/6 SERVICES OPERATIONAL",
    activeIncidents: "Active Incidents",
    activeCount: "1 ACTIVE INCIDENT",
    networkState: "Network State",
    networkNormal: "NETWORK NORMAL",
    priorityAlert: "PRIORITY ALERT",
    serviceStatus: "SERVICE STATUS",
    openIncidentResponse: "OPEN INCIDENT RESPONSE",
    backToOverview: "← Back to City Overview",
    incidentResponse: "INCIDENT RESPONSE",
    responseActive: "RESPONSE ACTIVE",
    decisionSupport: "DECISION SUPPORT",
    decisionProposal: "DECISION SUPPORT PROPOSAL",
    impactSummary: "IMPACT SUMMARY",
    affectedCorridor: "AFFECTED CORRIDOR:",
    trafficImpact: "TRAFFIC IMPACT:",
    transitImpact: "TRANSIT IMPACT:",
    emergencyAccess: "EMERGENCY ACCESS:",
    withoutIntervention: "WITHOUT INTERVENTION",
    withDiversion: "WITH COORDINATED DIVERSION",
    recommendedAction: "Recommended Action:",
    applyDiversion: "APPLY COORDINATED DIVERSION",
    manualOverride: "MANUAL OVERRIDE",
    confirmAction: "Confirm Coordinated Action",
    applyQuestion: "Apply coordinated diversion?",
    expectedDelay: "Expected traffic delay:",
    cancel: "Cancel",
    confirmApply: "Apply Diversion",
    actionRecorded: "ACTION RECORDED",
    operator: "City Administrator",
    protocolStabilizing: "Protocol: STABILIZING",
    decisionEngineReady: "Decision Engine: READY",
    telemetryActive: "TELEMETRY: ACTIVE",
    statuses: {
      operational: "Operational",
      attention: "Attention",
      highLoad: "High Load",
      active: "Active",
      normal: "Normal",
      stabilizing: "Stabilizing",
      rerouting: "Re-routing",
      maintained: "Maintained",
      minorDelay: "Minor Delay"
    }
  },

  // Common Actions & Buttons
  actions: {
    signIn: "SIGN IN",
    enterOperations: "ENTER OPERATIONS",
    runSimulation: "RUN SIMULATION",
    inspect: "INSPECT",
    viewAudit: "VIEW AUDIT EVENT",
    close: "Close"
  },

  // Feedback Toasts
  toasts: {
    layerEnabled: "layer enabled",
    layerHidden: "layer hidden",
    allLayers: "All GIS Layers enabled",
    clearedLayers: "Municipal Assets & Operations cleared",
    navigatedTo: "Map centered on:",
    openedIncident: "Opened incident response for UP-1024",
    diversionApplied: "Diversion applied on FC Road • Corridor stabilizing",
    manualOverrideLogged: "Manual override logged • Manual dispatch protocol active"
  }
};
