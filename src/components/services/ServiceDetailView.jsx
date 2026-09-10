import React from 'react';
import { 
  Car, 
  ShieldAlert, 
  Bus, 
  Droplets, 
  Zap, 
  Recycle, 
  Activity, 
  ArrowLeft,
  MapPin,
  Clock,
  AlertTriangle,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';
import { INFRASTRUCTURE_FACILITIES } from '../../data/infrastructure';

export default function ServiceDetailView({ serviceId, servicesData, onBack, onSelectObject, setActiveView }) {
  const service = servicesData.find(s => s.id === serviceId) || servicesData[0];

  const relatedFacilities = INFRASTRUCTURE_FACILITIES.filter(f => {
    if (serviceId === 'emergency') return f.type === 'hospital' || f.type === 'fire_station';
    if (serviceId === 'transit') return f.type === 'transit';
    if (serviceId === 'water') return f.type === 'water';
    if (serviceId === 'power') return f.type === 'power';
    if (serviceId === 'waste') return f.type === 'waste';
    return true;
  });

  const getDomainDetails = () => {
    switch (service.id) {
      case 'traffic':
        return {
          icon: Car,
          corridors: [
            { name: 'FC Road (Shivajinagar)', status: 'Heavy Congestion', speed: '14 km/h', baseline: '35 km/h' },
            { name: 'JM Road (Deccan)', status: 'Nominal Flow', speed: '32 km/h', baseline: '38 km/h' },
            { name: 'Karve Road (Kothrud)', status: 'Moderate Flow', speed: '26 km/h', baseline: '30 km/h' },
            { name: 'Pune-Solapur Road', status: 'Optimal Flow', speed: '42 km/h', baseline: '45 km/h' }
          ],
          recentEvents: [
            { time: '10:42 AM', title: 'Traffic Obstruction UP-1024 Reported', desc: 'FC Road near Goodluck Chowk bottleneck affecting feeder lanes.' },
            { time: '10:45 AM', title: 'Adaptive Signal Coordination Proposed', desc: 'DIV-R-8842 green wave offsets prepared for JM Road corridor.' }
          ],
          impactSummary: 'FC Road choke point generating +7 min spillover delay on adjacent transit and emergency routes.'
        };
      case 'emergency':
        return {
          icon: ShieldAlert,
          corridors: [
            { name: 'Sahyadri Super Speciality Corridor', status: 'Green Channel Open', speed: 'Optimal', baseline: 'Nominal' },
            { name: 'Sassoon General Hospital Link', status: 'Priority Access Maintained', speed: 'Optimal', baseline: 'Nominal' },
            { name: 'Central Fire Station Dispatch', status: 'Ready / Standby', speed: 'Nominal', baseline: 'Nominal' }
          ],
          recentEvents: [
            { time: '10:43 AM', title: 'Ambulance Priority Route Cleared', desc: 'Clear channel routed via Senapati Bapat Road for Sector 04 emergency call.' },
            { time: '10:15 AM', title: 'Station 01 Appliance Readiness Check', desc: 'Central Brigade response crew operational and telemetry synced.' }
          ],
          impactSummary: 'Emergency CAD dispatch networks operational with zero priority channel obstructions.'
        };
      case 'transit':
        return {
          icon: Bus,
          corridors: [
            { name: 'PMPML Route 11 (Shivajinagar – Swargate)', status: 'Minor Delay (+8m)', speed: '18 km/h', baseline: '26 km/h' },
            { name: 'PMPML Route 24 (Deccan – Hadapsar)', status: 'Nominal', speed: '24 km/h', baseline: '25 km/h' },
            { name: 'Pune Metro Line 1 (PCMC – Swargate)', status: 'On Schedule (100%)', speed: '65 km/h', baseline: '65 km/h' }
          ],
          recentEvents: [
            { time: '10:44 AM', title: 'Feeder Bus Diversion Alert', desc: 'PMPML feeder bus reroute planned via Senapati Bapat Road loop.' },
            { time: '09:30 AM', title: 'Morning Peak Transit Clearance', desc: 'Metro station throughput stabilized across Civil Court interchange.' }
          ],
          impactSummary: 'PMPML bus feeder delays localized to FC Road sector; Metro operations unaffected.'
        };
      case 'water':
        return {
          icon: Droplets,
          corridors: [
            { name: 'Parvati WTP Bulk Main', status: 'Nominal (4.2 bar)', speed: '520 MLD', baseline: '500 MLD' },
            { name: 'Warje Treatment Plant Outflow', status: 'Nominal (3.8 bar)', speed: '250 MLD', baseline: '250 MLD' },
            { name: 'Cantonment Water Works', status: 'Nominal (4.0 bar)', speed: '180 MLD', baseline: '180 MLD' }
          ],
          recentEvents: [
            { time: '08:00 AM', title: 'Daily Potable Supply Cycle Executed', desc: 'All 15 ward reservoir feeder levels nominal.' },
            { time: '06:30 AM', title: 'Turbidity Telemetry Normal', desc: 'Mula-Mutha intake raw water quality within standard limits.' }
          ],
          impactSummary: 'City-wide potable distribution pressure and treatment plant volumes operating within target baseline.'
        };
      case 'power':
        return {
          icon: Zap,
          corridors: [
            { name: 'Rasta Peth 220kV Primary Substation', status: 'High Load (78%)', speed: '184 MVA', baseline: '200 MVA' },
            { name: 'Shivajinagar 132kV Substation', status: 'Nominal (62%)', speed: '95 MVA', baseline: '120 MVA' },
            { name: 'Kothrud 132kV Distribution Node', status: 'Nominal (58%)', speed: '82 MVA', baseline: '110 MVA' }
          ],
          recentEvents: [
            { time: '10:10 AM', title: 'Transformer Thermal Monitoring', desc: 'Rasta Peth transformer unit 02 elevated load balanced across secondary loop.' },
            { time: '07:45 AM', title: 'Substation Switching Routine', desc: 'Automated feeder transfer completed without supply interruption.' }
          ],
          impactSummary: 'Grid transformer loads stable; dynamic load balancing active on Rasta Peth feeder loop.'
        };
      case 'waste':
        return {
          icon: Recycle,
          corridors: [
            { name: 'Shivajinagar SWM Logistics Route', status: '88% Route Complete', speed: 'Active', baseline: 'Nominal' },
            { name: 'Kothrud Solid Waste Transfer Station', status: 'Nominal Capacity (45%)', speed: 'Active', baseline: 'Nominal' },
            { name: 'Uruli Devachi Processing Facility', status: 'Nominal Processing', speed: 'Active', baseline: 'Nominal' }
          ],
          recentEvents: [
            { time: '09:15 AM', title: 'Morning Commercial Collection Complete', desc: 'FC Road and JM Road commercial sector bins cleared.' },
            { time: '07:00 AM', title: 'Fleet Route Dispatch', desc: '48 municipal compactor vehicles deployed across Pune wards.' }
          ],
          impactSummary: 'Municipal waste logistics routes operating at 94% on-time collection index.'
        };
      default:
        return {
          icon: Activity,
          corridors: [],
          recentEvents: [],
          impactSummary: 'Municipal operational parameters synchronized with Pune Mesh.'
        };
    }
  };

  const domainData = getDomainDetails();
  const IconComponent = domainData.icon;

  return (
    <div className="flex-1 bg-[#F7F8FA] overflow-y-auto p-4 sm:p-6 space-y-4 select-none font-sans text-[#172033]">
      
      {/* 1. SERVICE HEADER */}
      <div className="bg-white border border-[#D9E0E8] rounded p-4 space-y-2">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-xs text-[#64748B] hover:text-[#0F1B2D] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Map Workspace</span>
          </button>
          <span className="text-[10px] font-mono text-[#64748B] uppercase">
            MUNICIPAL DOMAIN: {service.id}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-[#EAF2FA] text-[#2563A6] rounded border border-[#2563A6]/20">
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base font-bold text-[#0F1B2D] leading-tight">
                {service.name}
              </h1>
              <p className="text-xs text-[#64748B] mt-0.5">
                {service.description}
              </p>
            </div>
          </div>

          <span className={`px-2.5 py-1 rounded text-xs font-semibold uppercase shrink-0 border ${
            service.status === 'active' || service.status === 'critical' ? 'bg-red-50 text-red-700 border-red-200' :
            service.status === 'moderate' || service.status === 'high-load' || service.status === 'minor-delay' || service.status === 'attention' ? 'bg-amber-50 text-amber-800 border-amber-200' :
            'bg-emerald-50 text-emerald-700 border-emerald-200'
          }`}>
            STATUS: {service.statusCode || service.status.toUpperCase()}
          </span>
        </div>
      </div>

      {/* 2. KEY METRICS ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-white border border-[#D9E0E8] rounded p-3.5 space-y-1">
          <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
            {service.metricLabel}
          </span>
          <div className="text-xl font-bold text-[#0F1B2D]">
            {service.value} <span className="text-xs font-normal text-[#64748B]">{service.unit}</span>
          </div>
          <div className="text-[10px] text-[#64748B] font-mono">Simulated telemetry feed</div>
        </div>

        <div className="bg-white border border-[#D9E0E8] rounded p-3.5 space-y-1">
          <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
            Assigned Field Units
          </span>
          <div className="text-lg font-bold text-[#0F1B2D]">
            {service.assignedUnits}
          </div>
          <div className="text-[10px] text-[#64748B] font-mono">Active response assets</div>
        </div>

        <div className="bg-white border border-[#D9E0E8] rounded p-3.5 space-y-1">
          <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
            GIS Integration Status
          </span>
          <div className="text-sm font-bold text-[#16856B] flex items-center gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16856B]"></span>
            <span>Mesh Active ({service.lastUpdated})</span>
          </div>
          <div className="text-[10px] text-[#64748B] font-mono">WGS84 Normalization</div>
        </div>
      </div>

      {/* 3. KEY SECTOR CONDITIONS & CORRIDORS */}
      {domainData.corridors.length > 0 && (
        <div className="bg-white border border-[#D9E0E8] rounded p-4 space-y-3">
          <div className="pb-1 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-xs font-bold text-[#0F1B2D] uppercase tracking-wider">
              Monitored Corridors & Subsystems
            </h3>
            <span className="text-[10px] text-[#64748B] font-mono">PUNE GIS LAYER</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
            {domainData.corridors.map((cor) => (
              <div key={cor.name} className="p-2.5 bg-[#F7F8FA] border border-[#D9E0E8] rounded space-y-1">
                <div className="flex items-center justify-between font-semibold text-[#0F1B2D]">
                  <span>{cor.name}</span>
                  <span className="text-[11px] font-mono font-bold text-[#2563A6]">{cor.speed}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#64748B]">
                  <span>State: <strong>{cor.status}</strong></span>
                  <span>Baseline: {cor.baseline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. RECENT OPERATIONAL EVENTS & IMPACT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        
        {/* Recent Events Timeline */}
        <div className="bg-white border border-[#D9E0E8] rounded p-4 space-y-3">
          <div className="pb-1 border-b border-slate-100">
            <h3 className="text-xs font-bold text-[#0F1B2D] uppercase tracking-wider">
              Recent Domain Events
            </h3>
          </div>

          <div className="space-y-2">
            {domainData.recentEvents.map((ev, i) => (
              <div key={i} className="p-2 bg-[#F7F8FA] border border-[#D9E0E8] rounded text-xs space-y-0.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#64748B]">
                  <span>{ev.time} IST</span>
                  <span className="font-bold text-[#0F1B2D]">EVENT LOG</span>
                </div>
                <div className="font-bold text-[#0F1B2D] text-xs">{ev.title}</div>
                <p className="text-[11px] text-[#64748B]">{ev.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Impact Summary */}
        <div className="bg-white border border-[#D9E0E8] rounded p-4 space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="pb-1 border-b border-slate-100">
              <h3 className="text-xs font-bold text-[#0F1B2D] uppercase tracking-wider">
                Cross-Domain Operational Impact
              </h3>
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              {domainData.impactSummary}
            </p>
          </div>

          <div className="p-3 bg-[#EAF2FA] border border-[#2563A6]/20 rounded text-xs text-[#0F1B2D] space-y-1">
            <div className="font-bold text-[11px] text-[#2563A6] uppercase tracking-wider">
              DECISION ENGINE STATUS
            </div>
            <p className="text-[11px] text-[#172033]">
              Synchronized with Pune Mesh Event Bus. Inter-service telemetry available for automated decision rules.
            </p>
          </div>
        </div>

      </div>

      {/* 5. ASSOCIATED REGISTERED FACILITIES IN PUNE */}
      <div className="bg-white border border-[#D9E0E8] rounded p-4 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div>
            <h3 className="text-xs font-bold text-[#0F1B2D] uppercase tracking-wider">
              Registered Municipal Facilities
            </h3>
            <p className="text-[11px] text-[#64748B]">Real infrastructure assets mapped in Pune GIS</p>
          </div>
          <span className="text-xs font-mono text-[#64748B]">{relatedFacilities.length} Assets Registered</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {relatedFacilities.map((fac) => (
            <div 
              key={fac.id} 
              onClick={() => {
                onSelectObject(fac);
                setActiveView('map');
              }}
              className="border border-[#D9E0E8] bg-[#F7F8FA] rounded p-2.5 hover:border-[#2563A6] hover:bg-white cursor-pointer transition-colors space-y-1 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#0F1B2D] group-hover:text-[#2563A6] truncate">{fac.name}</span>
                <span className="text-[9px] uppercase bg-white px-1.5 py-0.2 rounded border border-[#D9E0E8] text-[#64748B] font-mono shrink-0 ml-1">
                  {fac.type.replace('_', ' ')}
                </span>
              </div>
              <div className="text-[11px] text-[#64748B]">{fac.subtype}</div>
              <div className="flex items-center justify-between text-[11px] text-[#64748B] pt-0.5">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>{fac.ward}</span>
                </span>
                <span className="text-[#2563A6] font-semibold group-hover:underline">Inspect →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

