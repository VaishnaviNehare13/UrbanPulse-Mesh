import React, { useState, useMemo } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import BottomStatusBar from './components/layout/BottomStatusBar';
import IncidentNotificationBanner from './components/layout/IncidentNotificationBanner';
import MunicipalMap from './components/map/MunicipalMap';
import OperationsFeed from './components/operations/OperationsFeed';
import WhatIfPanel from './components/simulation/WhatIfPanel';
import AnalyticsPanel from './components/analytics/AnalyticsPanel';
import ArchitectureView from './components/system/ArchitectureView';
import ServiceHealthView from './components/system/ServiceHealthView';
import ServiceDetailView from './components/services/ServiceDetailView';
import AuditLog from './components/operations/AuditLog';
import LoginView from './components/auth/LoginView';
import HomeView from './components/pages/HomeView';

// Real Pune GIS Datasets
import { 
  PUNE_WARDS_GEOJSON,
  PUNE_WATER_BODIES_GEOJSON,
  PUNE_ROAD_CORRIDORS_GEOJSON,
  PUNE_HOSPITALS_GEOJSON,
  PUNE_FIRE_STATIONS_GEOJSON,
  PUNE_TRANSIT_GEOJSON,
  PUNE_PARKS_GEOJSON,
  PUNE_WATER_INFRA_GEOJSON,
  PUNE_POWER_INFRA_GEOJSON,
  PUNE_WASTE_FACILITIES_GEOJSON
} from './data/geo';

import { MUNICIPAL_SERVICES } from './data/municipalServices';
import { INCIDENTS_DATA } from './data/incidents';
import { INITIAL_AUDIT_LOG } from './data/simulatedTelemetry';
import { LanguageProvider, useTranslation } from './i18n';

function AppContent() {
  const { t } = useTranslation();

  // Public vs Authenticated Flow
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [publicPage, setPublicPage] = useState('home'); // 'home' | 'login'
  const [currentUser, setCurrentUser] = useState({
    id: "PUNE-ADMIN-01",
    name: "Dr. S. Kulkarni",
    role: "City Administrator"
  });

  // Active View State: 'map' | 'alerts' | 'simulation' | 'analytics' | 'architecture' | 'health' | 'audit' | 'service_detail'
  const [activeView, setActiveView] = useState('map');
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [activeServiceFilter, setActiveServiceFilter] = useState('all'); // 'all' | 'traffic' | 'emergency' | 'transit' | 'water' | 'power' | 'waste'

  // Synchronized Data State
  const [servicesData, setServicesData] = useState(MUNICIPAL_SERVICES);
  const [incidents, setIncidents] = useState(INCIDENTS_DATA);
  const [auditLogs, setAuditLogs] = useState(INITIAL_AUDIT_LOG);
  const [selectedObject, setSelectedObject] = useState(null);
  const [isResolved, setIsResolved] = useState(false);

  // Functional Layer Visibility State
  const [layers, setLayers] = useState({
    // BASE
    roads: true,
    wards: true,
    waterBodies: true,
    // MUNICIPAL ASSETS
    hospitals: true,
    fireStations: true,
    transit: true,
    parks: false,
    waterInfra: true,
    powerInfra: true,
    wasteFacilities: false,
    // OPERATIONS
    incidents: true,
    operationalZones: true,
    diversionRoutes: false,
    traffic: true
  });

  // Search Query & Autocomplete
  const [searchQuery, setSearchQuery] = useState('');

  // HCI Toast Notification Feedback System
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3200);
  };

  const handleLayerToggle = (label, enabled) => {
    showToast(`${label} ${enabled ? t('toasts.layerEnabled') : t('toasts.layerHidden')}`);
  };

  // Comprehensive Real Pune GIS Search Index
  const searchResults = useMemo(() => {
    if (!searchQuery || searchQuery.trim().length < 1) return [];
    const q = searchQuery.toLowerCase().trim();
    const results = [];

    // 1. Search Real Roads & Corridors
    PUNE_ROAD_CORRIDORS_GEOJSON.features.forEach((f) => {
      const p = f.properties;
      if (
        p.name.toLowerCase().includes(q) || 
        p.corridor.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q) ||
        p.ward.toLowerCase().includes(q)
      ) {
        results.push({
          id: p.id,
          name: p.name,
          subtext: `${p.class} • ${p.ward}`,
          category: 'Road',
          item: { ...p, category: 'traffic', coordinates: f.geometry.coordinates.map(c => [c[1], c[0]]) },
          coordinates: f.geometry.coordinates.map(c => [c[1], c[0]])
        });
      }
    });

    // 2. Search Real Hospitals (Emergency)
    PUNE_HOSPITALS_GEOJSON.features.forEach((f) => {
      const p = f.properties;
      const [lng, lat] = f.geometry.coordinates;
      if (
        p.name.toLowerCase().includes(q) || 
        p.ward.toLowerCase().includes(q) || 
        p.type.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q)
      ) {
        results.push({
          id: p.id,
          name: p.name,
          subtext: `${p.type} • ${p.ward}`,
          category: 'Facility',
          item: { ...p, lat, lng, type: 'hospital', domain: 'emergency' },
          lat,
          lng
        });
      }
    });

    // 3. Search Real Fire Stations (Emergency)
    PUNE_FIRE_STATIONS_GEOJSON.features.forEach((f) => {
      const p = f.properties;
      const [lng, lat] = f.geometry.coordinates;
      if (
        p.name.toLowerCase().includes(q) || 
        p.ward.toLowerCase().includes(q) || 
        p.type.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q)
      ) {
        results.push({
          id: p.id,
          name: p.name,
          subtext: `Fire Brigade • ${p.ward}`,
          category: 'Facility',
          item: { ...p, lat, lng, type: 'fire_station', domain: 'emergency' },
          lat,
          lng
        });
      }
    });

    // 4. Search Real Transit Hubs & Stations (Transit)
    PUNE_TRANSIT_GEOJSON.features.forEach((f) => {
      const p = f.properties;
      const [lng, lat] = f.geometry.coordinates;
      if (
        p.name.toLowerCase().includes(q) || 
        p.ward.toLowerCase().includes(q) || 
        (p.subtype && p.subtype.toLowerCase().includes(q)) ||
        p.id.toLowerCase().includes(q)
      ) {
        results.push({
          id: p.id,
          name: p.name,
          subtext: `${p.subtype || 'Transit Hub'} • ${p.ward}`,
          category: 'Facility',
          item: { ...p, lat, lng, type: 'transit', domain: 'transit' },
          lat,
          lng
        });
      }
    });

    // 5. Search Real Power Substations (Power)
    PUNE_POWER_INFRA_GEOJSON.features.forEach((f) => {
      const p = f.properties;
      const [lng, lat] = f.geometry.coordinates;
      if (
        p.name.toLowerCase().includes(q) || 
        p.ward.toLowerCase().includes(q) || 
        (p.subtype && p.subtype.toLowerCase().includes(q)) ||
        p.id.toLowerCase().includes(q)
      ) {
        results.push({
          id: p.id,
          name: p.name,
          subtext: `${p.voltageLevel} Substation • ${p.ward}`,
          category: 'Facility',
          item: { ...p, lat, lng, type: 'power_infra', domain: 'power' },
          lat,
          lng
        });
      }
    });

    // 6. Search Real Water Facilities (Water)
    PUNE_WATER_INFRA_GEOJSON.features.forEach((f) => {
      const p = f.properties;
      const [lng, lat] = f.geometry.coordinates;
      if (
        p.name.toLowerCase().includes(q) || 
        p.ward.toLowerCase().includes(q) || 
        (p.subtype && p.subtype.toLowerCase().includes(q)) ||
        p.id.toLowerCase().includes(q)
      ) {
        results.push({
          id: p.id,
          name: p.name,
          subtext: `${p.subtype || 'Water Facility'} • ${p.ward}`,
          category: 'Facility',
          item: { ...p, lat, lng, type: 'water_infra', domain: 'water' },
          lat,
          lng
        });
      }
    });

    // 7. Search Real Solid Waste Facilities (Waste)
    PUNE_WASTE_FACILITIES_GEOJSON.features.forEach((f) => {
      const p = f.properties;
      const [lng, lat] = f.geometry.coordinates;
      if (
        p.name.toLowerCase().includes(q) || 
        p.ward.toLowerCase().includes(q) || 
        (p.subtype && p.subtype.toLowerCase().includes(q)) ||
        p.id.toLowerCase().includes(q)
      ) {
        results.push({
          id: p.id,
          name: p.name,
          subtext: `${p.subtype || 'Waste Facility'} • ${p.ward}`,
          category: 'Facility',
          item: { ...p, lat, lng, type: 'waste_facility', domain: 'waste' },
          lat,
          lng
        });
      }
    });

    // 8. Search Real Parks & Gardens
    PUNE_PARKS_GEOJSON.features.forEach((f) => {
      const p = f.properties;
      const [lng, lat] = f.geometry.coordinates;
      if (
        p.name.toLowerCase().includes(q) || 
        p.ward.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q)
      ) {
        results.push({
          id: p.id,
          name: p.name,
          subtext: `Public Park • ${p.ward}`,
          category: 'Facility',
          item: { ...p, lat, lng, type: 'park', domain: 'waste' },
          lat,
          lng
        });
      }
    });

    // 9. Search Real PMC Administrative Wards
    PUNE_WARDS_GEOJSON.features.forEach((f) => {
      const p = f.properties;
      if (
        p.name.toLowerCase().includes(q) || 
        `ward ${p.wardNo}`.includes(q) ||
        p.id.toLowerCase().includes(q) ||
        (p.zone && p.zone.toLowerCase().includes(q))
      ) {
        results.push({
          id: p.id,
          name: `Ward ${p.wardNo}: ${p.name}`,
          subtext: `${p.zone} • Pop: ${p.population.toLocaleString('en-IN')}`,
          category: 'Sector',
          item: { ...p, coordinates: f.geometry.coordinates[0].map(c => [c[1], c[0]]) },
          coordinates: f.geometry.coordinates[0].map(c => [c[1], c[0]])
        });
      }
    });

    // 10. Search Active Incidents
    incidents.forEach((inc) => {
      if (
        inc.id.toLowerCase().includes(q) || 
        inc.title.toLowerCase().includes(q) || 
        inc.locationName.toLowerCase().includes(q)
      ) {
        results.push({
          id: inc.id,
          name: `Incident #${inc.id} (${inc.severity})`,
          subtext: inc.locationName,
          category: 'Incident',
          item: { ...inc, type: 'incident' },
          lat: inc.lat,
          lng: inc.lng
        });
      }
    });

    return results.slice(0, 10);
  }, [searchQuery, incidents]);

  // Handle Search Result Selection
  const handleSelectSearchResult = (result) => {
    setActiveView('map');
    setSelectedObject(result.item);
    setSearchQuery('');
    showToast(`${t('toasts.navigatedTo')} ${result.name}`);
  };

  // Handle Inspect from Notification Banner or Overview
  const handleInspectIncident = (incident) => {
    setActiveView('map');
    const target = incident || incidents[0];
    setSelectedObject({ ...target, type: 'incident', lat: target.lat || 18.5204, lng: target.lng || 73.8415 });
    showToast(t('toasts.openedIncident'));
  };

  // Handle View Service Navigation from any Map Popup
  const handleViewService = (serviceId) => {
    setSelectedServiceId(serviceId);
    setActiveView('service_detail');
  };

  // Handle Apply Diversion Decision (Norman's Action Cycle)
  const handleApplyDiversion = (incident) => {
    setIsResolved(true);
    
    // Enable diversion routes layer on map
    setLayers(prev => ({ ...prev, diversionRoutes: true }));

    // Update incidents state
    setIncidents(prev => prev.map(inc => {
      if (inc.id === incident.id) {
        return {
          ...inc,
          status: "Diversion Active (Corridor Stabilizing)",
          severity: "MEDIUM",
          severityCode: "medium"
        };
      }
      return inc;
    }));

    // Update synchronized service statuses
    setServicesData(prev => prev.map(svc => {
      if (svc.id === 'traffic') {
        return { ...svc, status: 'normal', statusCode: 'NORMAL', value: 44 };
      }
      if (svc.id === 'transit') {
        return { ...svc, status: 'normal', statusCode: 'NORMAL', value: 96 };
      }
      return svc;
    }));

    // Add entry to Audit Log
    const newLog = {
      id: `LOG-${Date.now().toString().slice(-4)}`,
      time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
      service: "Traffic",
      operator: "City Administrator",
      severity: "normal",
      event: "DIVERSION RULE APPLIED",
      description: `Rule DIV-R-8842 executed on FC Road. Traffic signal offsets synchronized with JM Road.`
    };
    setAuditLogs(prev => [newLog, ...prev]);
    showToast(t('toasts.diversionApplied'));
  };

  // Handle Override Decision
  const handleOverride = (incident) => {
    setIsResolved(true);
    
    const newLog = {
      id: `LOG-${Date.now().toString().slice(-4)}`,
      time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
      service: "Emergency",
      operator: "City Administrator",
      severity: "warning",
      event: "MANUAL OVERRIDE LOGGED",
      description: `Operator overrode automated diversion for incident ${incident.id}. Manual dispatch protocol active.`
    };
    setAuditLogs(prev => [newLog, ...prev]);
    showToast(t('toasts.manualOverrideLogged'));
  };

  // If not logged in, render Home or Login Screen
  if (!isAuthenticated) {
    if (publicPage === 'home') {
      return (
        <HomeView
          onEnterOperations={() => setPublicPage('login')}
          onLoginClick={() => setPublicPage('login')}
        />
      );
    }
    return (
      <LoginView
        onLogin={(user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
        }}
        onBackToHome={() => setPublicPage('home')}
      />
    );
  }

  return (
    <div className="flex flex-col h-screen w-screen bg-[#F7F8FA] text-[#172033] font-sans overflow-hidden">
      
      {/* 1. TOP MUNICIPAL HEADER */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchResults={searchResults}
        onSelectSearchResult={handleSelectSearchResult}
        user={currentUser}
        onLogout={() => {
          setIsAuthenticated(false);
          setPublicPage('home');
        }}
      />

      {/* 2. RESTRAINED MUNICIPAL INCIDENT NOTIFICATION STRIP */}
      <IncidentNotificationBanner
        activeIncident={incidents[0]}
        isResolved={isResolved}
        onInspect={() => handleInspectIncident(incidents[0])}
      />

      {/* 3. MAIN APPLICATION WORKSPACE */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* LEFT RESTRAINED LIGHT SIDEBAR */}
        <Sidebar
          activeView={activeView}
          setActiveView={setActiveView}
          selectedService={selectedServiceId}
          setSelectedService={setSelectedServiceId}
          servicesData={servicesData}
          onNavigateToHome={() => {
            setIsAuthenticated(false);
            setPublicPage('home');
          }}
        />

        {/* CENTER & RIGHT OPERATIONAL VIEW */}
        {activeView === 'map' && (
          <div className="flex flex-1 overflow-hidden">
            {/* 75–80% MAP CANVAS */}
            <div className="flex-1 h-full relative">
              <MunicipalMap
                layers={layers}
                setLayers={setLayers}
                incidents={incidents}
                selectedObject={selectedObject}
                onSelectObject={(obj) => setSelectedObject(obj)}
                onOpenActionPanel={(inc) => {
                  setSelectedObject({ ...inc, type: 'incident' });
                }}
                onViewService={handleViewService}
                activeServiceFilter={activeServiceFilter}
                onSelectServiceFilter={setActiveServiceFilter}
                isResolved={isResolved}
                onLayerToggle={handleLayerToggle}
              />

              {/* Calm Institutional Toast Notification Feedback */}
              {toastMessage && (
                <div className="absolute top-3 left-1/2 -translate-x-1/2 z-[1100] pointer-events-none transition-all animate-fadeIn">
                  <div className="bg-slate-900/90 backdrop-blur-xs text-white text-xs px-3.5 py-1.5 rounded-xs shadow-md border border-slate-700/80 font-medium flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    <span>{toastMessage}</span>
                  </div>
                </div>
              )}
            </div>

            {/* 20–25% RIGHT OPERATIONS CONSOLE */}
            <OperationsFeed
              servicesData={servicesData}
              activeIncident={incidents[0]}
              selectedObject={selectedObject}
              auditLogs={auditLogs}
              onApplyDiversion={handleApplyDiversion}
              onOverride={handleOverride}
              isResolved={isResolved}
              onSelectIncident={(inc) => setSelectedObject({ ...inc, type: 'incident' })}
              onClearSelection={() => setSelectedObject(null)}
              activeServiceFilter={activeServiceFilter}
              onSelectService={(svcId) => {
                setActiveServiceFilter(svcId);
              }}
            />
          </div>
        )}

        {/* WHAT-IF SIMULATION SCREEN */}
        {activeView === 'simulation' && (
          <WhatIfPanel 
            onFocusCoordinates={(coords) => {
              setSelectedObject({ coordinates: coords });
              setActiveView('map');
            }} 
          />
        )}

        {/* ANALYTICS & TRENDS SCREEN */}
        {activeView === 'analytics' && (
          <AnalyticsPanel />
        )}

        {/* SYSTEM ARCHITECTURE SCREEN */}
        {activeView === 'architecture' && (
          <ArchitectureView />
        )}

        {/* SERVICE HEALTH SCREEN */}
        {activeView === 'health' && (
          <ServiceHealthView />
        )}

        {/* INCIDENTS / AUDIT LOG SCREEN */}
        {(activeView === 'alerts' || activeView === 'audit') && (
          <div className="flex-1 bg-slate-50 p-6 overflow-y-auto">
            <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-xs p-5 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                  Pune Municipal Event Bus & Audit Log
                </h2>
                <span className="text-xs font-mono text-slate-500">{auditLogs.length} Events Recorded</span>
              </div>
              <AuditLog auditLogs={auditLogs} />
            </div>
          </div>
        )}

        {/* SERVICE DETAIL SCREEN */}
        {activeView === 'service_detail' && (
          <ServiceDetailView
            serviceId={selectedServiceId}
            servicesData={servicesData}
            onBack={() => setActiveView('map')}
            onSelectObject={(obj) => setSelectedObject(obj)}
            setActiveView={setActiveView}
          />
        )}

      </div>

      {/* 4. BOTTOM GIS STATUS STRIP */}
      <BottomStatusBar currentZoom={13} />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
