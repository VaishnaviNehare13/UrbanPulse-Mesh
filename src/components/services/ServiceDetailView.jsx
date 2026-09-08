import React from 'react';
import { 
  Car, 
  ShieldAlert, 
  Bus, 
  Droplets, 
  Zap, 
  Recycle, 
  Activity, 
  ArrowLeft 
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

  const getIcon = () => {
    switch (service.id) {
      case 'traffic': return Car;
      case 'emergency': return ShieldAlert;
      case 'transit': return Bus;
      case 'water': return Droplets;
      case 'power': return Zap;
      case 'waste': return Recycle;
      default: return Activity;
    }
  };

  const IconComponent = getIcon();

  return (
    <div className="flex-1 bg-slate-50 overflow-y-auto p-6 space-y-5 select-none font-sans">
      
      {/* Top Header */}
      <div className="bg-white border border-slate-200 rounded p-4 space-y-2">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-xs text-slate-500 hover:text-slate-800 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Map Workspace</span>
          </button>
          <span className="text-[10px] font-mono text-slate-400">SERVICE: {service.id.toUpperCase()}</span>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-slate-100 text-slate-700 rounded border border-slate-200">
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900">{service.name}</h2>
              <p className="text-xs text-slate-500 mt-0.5">{service.description}</p>
            </div>
          </div>

          <span className={`px-2 py-0.5 rounded text-xs font-semibold uppercase ${
            service.status === 'active' || service.status === 'critical' ? 'bg-red-50 text-red-700 border border-red-200' :
            service.status === 'moderate' || service.status === 'high-load' || service.status === 'minor-delay' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
            'bg-emerald-50 text-emerald-700 border border-emerald-200'
          }`}>
            {service.statusCode}
          </span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-white border border-slate-200 rounded p-3 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{service.metricLabel}</span>
          <div className="text-xl font-bold text-slate-900">
            {service.value} <span className="text-xs font-normal text-slate-500">{service.unit}</span>
          </div>
          <div className="text-[10px] text-slate-400">Simulated telemetry stream</div>
        </div>

        <div className="bg-white border border-slate-200 rounded p-3 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Assigned Municipal Units</span>
          <div className="text-sm font-bold text-slate-800 mt-1">{service.assignedUnits}</div>
          <div className="text-[10px] text-slate-400">Field response assets</div>
        </div>

        <div className="bg-white border border-slate-200 rounded p-3 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">GIS Spatial Status</span>
          <div className="text-sm font-bold text-slate-800 mt-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            <span>Mesh Active ({service.lastUpdated})</span>
          </div>
          <div className="text-[10px] text-slate-400">WGS84 Normalized</div>
        </div>
      </div>

      {/* Associated Municipal Facilities in Pune */}
      <div className="bg-white border border-slate-200 rounded p-4 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div>
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Associated Municipal Facilities
            </h3>
            <p className="text-[11px] text-slate-500">Real infrastructure registered in Pune GIS</p>
          </div>
          <span className="text-xs font-mono text-slate-500">{relatedFacilities.length} Assets</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {relatedFacilities.map((fac) => (
            <div 
              key={fac.id} 
              onClick={() => {
                onSelectObject(fac);
                setActiveView('map');
              }}
              className="border border-slate-200 rounded p-2.5 hover:border-slate-400 hover:bg-slate-50/50 cursor-pointer transition-colors space-y-1 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-xs text-slate-900 group-hover:text-blue-700">{fac.name}</span>
                <span className="text-[9px] uppercase bg-slate-100 px-1.5 py-0.2 rounded text-slate-600">
                  {fac.type.replace('_', ' ')}
                </span>
              </div>
              <div className="text-[11px] text-slate-500">{fac.subtype}</div>
              <div className="flex items-center justify-between text-[11px] text-slate-600 pt-0.5">
                <span>{fac.ward}</span>
                <span className="text-blue-700 font-medium group-hover:underline">View on Map →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
