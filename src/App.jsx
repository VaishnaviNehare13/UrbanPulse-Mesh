import React, { useState, useMemo } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import BottomStatusBar from './components/layout/BottomStatusBar';
import MunicipalMap from './components/map/MunicipalMap';
import OperationsFeed from './components/operations/OperationsFeed';
import WhatIfPanel from './components/simulation/WhatIfPanel';
import AnalyticsPanel from './components/analytics/AnalyticsPanel';
import ArchitectureView from './components/system/ArchitectureView';
import ServiceHealthView from './components/system/ServiceHealthView';
import ServiceDetailView from './components/services/ServiceDetailView';
import AuditLog from './components/operations/AuditLog';
import LoginView from './components/auth/LoginView';

// Data Sources
import { PUNE_CENTER, PUNE_ROADS, PUNE_SECTORS } from './data/puneMapData';
import { INFRASTRUCTURE_FACILITIES } from './data/infrastructure';
import { MUNICIPAL_SERVICES } from './data/municipalServices';
import { INCIDENTS_DATA } from './data/incidents';
import { INITIAL_AUDIT_LOG } from './data/simulatedTelemetry';

export default function App() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    id: "PUNE-ADMIN-01",
    name: "Dr. S. Kulkarni",
    role: "City Administrator"
  });

  // Active View State: 'map' | 'alerts' | 'simulation' | 'analytics' | 'architecture' | 'health' | 'audit' | 'service_detail'
  const [activeView, setActiveView] = useState('map');
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  // Synchronized Data State
  const [servicesData, setServicesData] = useState(MUNICIPAL_SERVICES);
  const [incidents, setIncidents] = useState(INCIDENTS_DATA);
  const [auditLogs, setAuditLogs] = useState(INITIAL_AUDIT_LOG);
  const [selectedObject, setSelectedObject] = useState(null);
  const [isResolved, setIsResolved] = useState(false);

  // Layer Visibility State (Base, Assets, Operations)
  const [layers, setLayers] = useState({
    roads: true,
    sectors: true,
    waterBodies: true,
    hospitals: true,
    fireStations: true,
    transit: true,
    utilities: true,
    incidents: true,
    traffic: true,
    operationalZones: true
  });

  // Search Query & Autocomplete
  const [searchQuery, setSearchQuery] = useState('');

  // Build Comprehensive GIS Search Index
  const searchResults = useMemo(() => {
    if (!searchQuery || searchQuery.trim().length < 2) return [];
    const q = searchQuery.toLowerCase().trim();
    const results = [];

    // Search Roads
    PUNE_ROADS.forEach((rd) => {
      if (rd.name.toLowerCase().includes(q) || rd.corridor.toLowerCase().includes(q)) {
        results.push({
          id: rd.id,
          name: rd.name,
          subtext: `${rd.class} • ${rd.corridor}`,
          category: 'Road',
          item: rd,
          coordinates: rd.coordinates
        });
      }
    });

    // Search Facilities
    INFRASTRUCTURE_FACILITIES.forEach((fac) => {
      if (fac.name.toLowerCase().includes(q) || fac.ward.toLowerCase().includes(q) || fac.type.toLowerCase().includes(q)) {
        results.push({
          id: fac.id,
          name: fac.name,
          subtext: `${fac.subtype} • ${fac.ward}`,
          category: 'Facility',
          item: fac,
          lat: fac.lat,
          lng: fac.lng
        });
      }
    });

    // Search Incidents
    incidents.forEach((inc) => {
      if (inc.id.toLowerCase().includes(q) || inc.title.toLowerCase().includes(q) || inc.locationName.toLowerCase().includes(q)) {
        results.push({
          id: inc.id,
          name: `Incident #${inc.id} (${inc.severity})`,
          subtext: inc.locationName,
          category: 'Incident',
          item: inc,
          lat: inc.lat,
          lng: inc.lng
        });
      }
    });

    // Search Sectors / Wards
    PUNE_SECTORS.forEach((sec) => {
      if (sec.name.toLowerCase().includes(q) || sec.code.toLowerCase().includes(q)) {
        results.push({
          id: sec.id,
          name: `${sec.name} (${sec.code})`,
          subtext: `${sec.zoneType} • Pop: ${sec.population}`,
          category: 'Sector',
          item: sec,
          coordinates: sec.coordinates
        });
      }
    });

    return results.slice(0, 8);
  }, [searchQuery, incidents]);

  // Handle Search Result Selection
  const handleSelectSearchResult = (result) => {
    setActiveView('map');
    setSelectedObject(result.item);
    setSearchQuery('');
  };

  // Handle Apply Diversion Decision (Norman's Action Cycle)
  const handleApplyDiversion = (incident) => {
    setIsResolved(true);
    
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
      severity: "normal",
      event: "DIVERSION RULE APPLIED",
      description: `Rule DIV-R-8842 executed on FC Road. Traffic signal offsets synchronized with JM Road.`
    };
    setAuditLogs(prev => [newLog, ...prev]);
  };

  // Handle Override Decision
  const handleOverride = (incident) => {
    setIsResolved(true);
    
    const newLog = {
      id: `LOG-${Date.now().toString().slice(-4)}`,
      time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
      service: "Emergency",
      severity: "warning",
      event: "MANUAL OVERRIDE LOGGED",
      description: `Operator overrode automated diversion for incident ${incident.id}. Manual dispatch protocol active.`
    };
    setAuditLogs(prev => [newLog, ...prev]);
  };

  // If not logged in, render simulated Login Screen
  if (!isAuthenticated) {
    return (
      <LoginView
        onLogin={(user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
        }}
      />
    );
  }

  return (
    <div className="flex flex-col h-screen w-screen bg-slate-100 text-slate-900 font-sans overflow-hidden">
      
      {/* 1. TOP MUNICIPAL HEADER */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchResults={searchResults}
        onSelectSearchResult={handleSelectSearchResult}
        user={currentUser}
        onLogout={() => setIsAuthenticated(false)}
      />

      {/* 2. MAIN APPLICATION WORKSPACE */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* LEFT RESTRAINED LIGHT SIDEBAR */}
        <Sidebar
          activeView={activeView}
          setActiveView={setActiveView}
          selectedService={selectedServiceId}
          setSelectedService={setSelectedServiceId}
          servicesData={servicesData}
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
                facilities={INFRASTRUCTURE_FACILITIES}
                selectedObject={selectedObject}
                onSelectObject={(obj) => setSelectedObject(obj)}
                onOpenActionPanel={(inc) => {
                  setSelectedObject({ ...inc, type: 'incident' });
                }}
                isResolved={isResolved}
              />
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
            <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded p-5 space-y-4">
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

      {/* 3. BOTTOM GIS STATUS STRIP */}
      <BottomStatusBar currentZoom={13} />

    </div>
  );
}
