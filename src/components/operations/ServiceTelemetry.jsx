import React from 'react';
import { ArrowRight, AlertTriangle, CheckCircle, Droplets, Zap, Car, ShieldAlert, Bus, Recycle, Navigation, MapPin } from 'lucide-react';
import { useTranslation } from '../../i18n';

export default function ServiceTelemetry({ 
  servicesData, 
  onSelectIncident, 
  activeIncident,
  activeServiceFilter = 'all',
  onSelectService
}) {
  const { t } = useTranslation();

  const serviceDetailsMap = {
    traffic: {
      name: t('servicesList.traffic'),
      domain: t('servicesList.trafficFull'),
      title: t('operations.trafficTitle'),
      detail: 'FC Road — Slow (32 km/h)',
      status: t('operations.statuses.attention'),
      statusType: 'attention',
      icon: Car,
      prioritizedItems: [
        { name: 'FC Road', detail: 'Slow • Standstill near Goodluck Chowk', status: 'Attention', isAlert: true },
        { name: 'JM Road', detail: 'Alternative Bypass Corridor', status: 'Normal Flow (44 km/h)' },
        { name: 'Karve Road', detail: 'Deccan to Kothrud Corridor', status: 'Normal Flow (38 km/h)' },
        { name: 'Senapati Bapat Road', detail: 'Symbiosis to University Link', status: 'Normal Flow (42 km/h)' },
        { name: 'Shivaji Road', detail: 'Swargate to Shaniwar Wada', status: 'Moderate Flow (35 km/h)' }
      ],
      metrics: [
        { label: 'Monitored Corridors', val: '10 Roads Active' },
        { label: 'Avg Network Velocity', val: '34 km/h (Simulated)' },
        { label: 'Diversion Protocol', val: 'DIV-R-8842 Ready' }
      ]
    },
    emergency: {
      name: t('servicesList.emergency'),
      domain: t('servicesList.emergencyFull'),
      title: t('operations.emergencyTitle'),
      detail: 'Response Network — Active',
      status: t('operations.statuses.normal'),
      statusType: 'normal',
      icon: ShieldAlert,
      prioritizedItems: [
        { name: 'Sassoon General Hospital', detail: 'Apex Level 1 Trauma (42 ICU Ready)', status: 'Operational' },
        { name: 'K.E.M. Hospital', detail: 'Multi-Speciality (18 ICU Ready)', status: 'Operational' },
        { name: 'Central Fire Station', detail: 'Headquarters • 8 Tenders Ready', status: 'Standby' },
        { name: 'Erandwane Fire Station', detail: 'Engine #04 Dispatched to FC Road', status: 'En Route', isAlert: true }
      ],
      metrics: [
        { label: 'Active Dispatches', val: 'Erandwane #04, 108 Ambulance' },
        { label: 'Trauma Centers Online', val: '6 Hospitals Ready' },
        { label: 'Emergency Channel', val: 'Priority Access Open' }
      ]
    },
    transit: {
      name: t('servicesList.transit'),
      domain: t('servicesList.transitFull'),
      title: t('operations.transitTitle'),
      detail: 'PMPML / Metro',
      status: t('operations.statuses.minorDelay'),
      statusType: 'minor-delay',
      icon: Bus,
      prioritizedItems: [
        { name: 'Pune Metro Line 1 & Line 2', detail: 'PCMC to Swargate & Vanaz to Ramwadi', status: 'Normal (98% On-Time)' },
        { name: 'Pune Railway Junction', detail: 'Main Inter-City Terminal', status: 'Normal Operations' },
        { name: 'Swargate Transit Hub', detail: 'BRTS & Underground Metro Interchange', status: 'Normal Operations' },
        { name: 'PMPML Route 11 & 24', detail: 'FC Road Corridor Rerouted via JM Rd', status: 'Rerouting (+7m Delay)', isAlert: true }
      ],
      metrics: [
        { label: 'On-Time Headway', val: '88% (Simulated)' },
        { label: 'Metro Corridors', val: 'Normal Operations' },
        { label: 'Bus Reroutes Active', val: 'Route 11, 24' }
      ]
    },
    water: {
      name: t('servicesList.water'),
      domain: t('servicesList.waterFull'),
      title: t('operations.waterTitle'),
      detail: 'Parvati WTP (535 MLD)',
      status: t('operations.statuses.normal'),
      statusType: 'normal',
      icon: Droplets,
      prioritizedItems: [
        { name: 'Parvati WTP', detail: '535 MLD Primary Distribution Hub', status: 'Normal (4.2 bar)' },
        { name: 'Warje WTP', detail: '200 MLD Secondary Treatment Plant', status: 'Normal (3.9 bar)' },
        { name: 'Vadgaon Water Works', detail: '250 MLD Filtration & Pumping', status: 'Normal (3.8 bar)' },
        { name: 'Cantonment Water Works', detail: '300 MLD Treatment Facility', status: 'Normal (4.0 bar)' },
        { name: 'Dr. Naidu & Mundhwa STP', detail: '700 MLD Recycled Effluent System', status: 'Operational' }
      ],
      metrics: [
        { label: 'Supply Availability', val: '84% (Adequate)' },
        { label: 'Pumping Pressure', val: '4.2 bar (Stable)' },
        { label: 'Active Treatment Hubs', val: 'Parvati, Warje, Vadgaon' }
      ]
    },
    power: {
      name: t('servicesList.power'),
      domain: t('servicesList.powerFull'),
      title: t('operations.powerTitle'),
      detail: 'Rasta Peth 220kV Substation',
      status: t('operations.statuses.highLoad'),
      statusType: 'high-load',
      icon: Zap,
      prioritizedItems: [
        { name: 'Rasta Peth 220/33kV Substation', detail: '150 MVA Urban Core Grid Hub', status: 'High Load (91%)', isAlert: true },
        { name: 'Ganeshkhind 132/33kV Substation', detail: '100 MVA North-West Transmission', status: 'Normal Load (68%)' },
        { name: 'Parvati 132/33kV Substation', detail: '100 MVA South Grid Facility', status: 'Normal Load (74%)' },
        { name: 'Kothrud 132/33kV Substation', detail: '100 MVA West Sector Hub', status: 'Normal Load (71%)' },
        { name: 'Hadapsar 132/33kV Substation', detail: '120 MVA Industrial Substation', status: 'Normal Load (78%)' }
      ],
      metrics: [
        { label: 'Peak Transformer Draw', val: '91% (Attention Required)' },
        { label: 'High-Voltage Hubs', val: '5 Substations Monitored' },
        { label: 'Cooling System', val: 'Active Fan Stage 2' }
      ]
    },
    waste: {
      name: t('servicesList.waste'),
      domain: t('servicesList.wasteFull'),
      title: t('operations.wasteTitle'),
      detail: 'Logistics Routes (12 Vehicles)',
      status: t('operations.statuses.normal'),
      statusType: 'normal',
      icon: Recycle,
      prioritizedItems: [
        { name: 'Kothrud Transfer Station (GTS)', detail: '150 Tons/Day Feeder Ramp & Compactor', status: 'Operational' },
        { name: 'Ghole Road Biogas Unit', detail: '25 Tons/Day Bio-Methanation', status: 'Operational' },
        { name: 'Kasba Compactor Station', detail: '90 Tons/Day Mechanical Loading', status: 'Operational' },
        { name: 'Hadapsar MRF Facility', detail: '120 Tons/Day Recyclables Baling', status: 'Operational' }
      ],
      metrics: [
        { label: 'Daily Route Completion', val: '76% (Simulated)' },
        { label: 'Transfer Stations Active', val: '4 Facilities Online' },
        { label: 'Collection Vehicles', val: '20 Active in Sector' }
      ]
    }
  };

  const serviceRows = Object.keys(serviceDetailsMap).map((key) => ({
    id: key,
    ...serviceDetailsMap[key]
  }));

  const filteredService = activeServiceFilter !== 'all' ? serviceDetailsMap[activeServiceFilter] : null;

  return (
    <div className="space-y-3 text-xs text-slate-800 font-sans select-none">
      
      {/* 1. CITY STATUS / DOMAIN STATUS */}
      <div>
        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">
          {t('operations.cityStatus')}
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xs p-2.5 space-y-1.5 text-[11px]">
          <div className="flex items-center justify-between">
            <span className="text-slate-600">{t('operations.servicesCount')}</span>
            <span className="font-semibold text-emerald-700">{t('operations.allOperational')}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600">{t('operations.activeIncidents')}</span>
            <span className="font-semibold text-red-700 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
              <span>{t('operations.activeCount')}</span>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600">{t('operations.networkState')}</span>
            <span className="font-semibold text-slate-800">{t('operations.networkNormal')}</span>
          </div>
        </div>
      </div>

      {/* 2. SPECIFIC DOMAIN CONTEXT (When Service Filter is active) */}
      {filteredService && (
        <div className="border border-blue-200 bg-blue-50/40 rounded-xs p-2.5 space-y-2.5">
          <div className="flex items-center justify-between pb-1 border-b border-blue-200">
            <div>
              <span className="font-bold text-slate-900 text-xs uppercase tracking-wide block">
                {filteredService.title}
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                {filteredService.domain}
              </span>
            </div>
            <span className="text-[9px] font-bold text-blue-800 bg-blue-100 px-1.5 py-0.5 rounded-xs border border-blue-200">
              {filteredService.status}
            </span>
          </div>

          {/* Key Conditions & Telemetry */}
          <div className="space-y-1 text-[11px]">
            {filteredService.metrics.map((m, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-slate-600">{m.label}:</span>
                <strong className="text-slate-800 font-semibold">{m.val}</strong>
              </div>
            ))}
          </div>

          {/* Prioritized Key Infrastructure & Corridors in this Domain */}
          <div className="pt-1.5 border-t border-blue-200/80 space-y-1">
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">
              Prioritized Domain Assets & Corridors:
            </span>
            <div className="space-y-1">
              {filteredService.prioritizedItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-1.5 rounded-xs text-[10px] border flex items-center justify-between ${
                    item.isAlert 
                      ? 'bg-amber-50/80 border-amber-200 text-amber-900' 
                      : 'bg-white/80 border-slate-200 text-slate-800'
                  }`}
                >
                  <div className="truncate pr-1">
                    <span className="font-bold block truncate">{item.name}</span>
                    <span className="text-[9px] text-slate-500 truncate block">{item.detail}</span>
                  </div>
                  <span className={`text-[9px] font-semibold px-1 py-0.2 rounded shrink-0 ${
                    item.isAlert ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. ACTIVE INCIDENT HIGHLIGHT */}
      {activeIncident && (
        <div>
          <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>{t('operations.priorityAlert')}</span>
            <span className="text-red-700 font-mono text-[9px]">UP-1024</span>
          </div>
          <div className="border border-red-200 bg-red-50/40 rounded-xs p-2.5 space-y-2">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="font-bold text-slate-900 text-xs leading-snug">
                  Multi-Vehicle Collision & Transit Stoppage
                </div>
                <div className="text-[11px] text-slate-600 mt-0.5">
                  FC Road near Goodluck Chowk
                </div>
              </div>
              <span className="text-[9px] font-bold text-red-700 uppercase bg-red-100/80 border border-red-200 px-1.5 py-0.5 rounded-xs shrink-0">
                HIGH SEVERITY
              </span>
            </div>

            <div className="flex items-center justify-between text-[11px] pt-1.5 border-t border-red-100">
              <span className="text-red-800 font-medium">Status: Active</span>
              <button
                onClick={() => onSelectIncident(activeIncident)}
                className="text-[11px] font-semibold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 px-2.5 py-1 rounded-xs transition-colors flex items-center gap-1 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 shadow-2xs"
              >
                <span>{t('operations.openIncidentResponse')}</span>
                <ArrowRight className="w-3 h-3 text-slate-700" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. SERVICE STATUS (COMPACT ROWS) */}
      <div>
        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">
          {t('operations.serviceStatus')}
        </div>
        <div className="border border-slate-200 rounded-xs divide-y divide-slate-100 bg-white">
          {serviceRows.map((svc) => {
            const isAttention = svc.statusType === 'attention' || svc.statusType === 'high-load';
            const isMinor = svc.statusType === 'minor-delay';
            const isSelected = activeServiceFilter === svc.id;

            return (
              <div 
                key={svc.id} 
                onClick={() => onSelectService && onSelectService(svc.id)}
                className={`p-2 px-2.5 flex items-center justify-between text-[11px] transition-colors cursor-pointer ${
                  isSelected ? 'bg-blue-50/70 border-l-2 border-blue-600' : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center space-x-2 truncate pr-2">
                  <span className="font-bold text-slate-900 text-[10px] tracking-wide shrink-0">{svc.name}</span>
                  <span className="text-slate-600 truncate text-[10px]">{svc.detail}</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium shrink-0">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    isAttention ? 'bg-amber-500' : isMinor ? 'bg-amber-400' : 'bg-emerald-600'
                  }`}></span>
                  <span className={
                    isAttention ? 'text-amber-800 font-semibold text-[10px]' : isMinor ? 'text-amber-700 text-[10px]' : 'text-emerald-700 text-[10px]'
                  }>
                    {svc.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
