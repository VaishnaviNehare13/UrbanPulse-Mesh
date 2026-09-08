import React from 'react';
import { 
  Map, 
  AlertTriangle, 
  Sparkles, 
  BarChart3, 
  Car, 
  ShieldAlert, 
  Bus, 
  Droplets, 
  Zap, 
  Recycle, 
  Layers, 
  Server, 
  FileText
} from 'lucide-react';

export default function Sidebar({ 
  activeView, 
  setActiveView, 
  selectedService, 
  setSelectedService,
  servicesData
}) {

  const getServiceStatus = (serviceId) => {
    const s = servicesData?.find(item => item.id === serviceId);
    return s ? s.status : 'normal';
  };

  const primaryItems = [
    { id: 'map', label: 'City Operations', icon: Map },
    { id: 'alerts', label: 'Incidents', icon: AlertTriangle, count: 1 },
    { id: 'simulation', label: 'What-if Analysis', icon: Sparkles },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 }
  ];

  const serviceItems = [
    { id: 'traffic', label: 'Traffic', icon: Car },
    { id: 'emergency', label: 'Emergency', icon: ShieldAlert },
    { id: 'transit', label: 'Transit', icon: Bus },
    { id: 'water', label: 'Water', icon: Droplets },
    { id: 'power', label: 'Power', icon: Zap },
    { id: 'waste', label: 'Waste', icon: Recycle }
  ];

  const systemItems = [
    { id: 'architecture', label: 'Architecture', icon: Layers },
    { id: 'health', label: 'Service Health', icon: Server },
    { id: 'audit', label: 'Audit Log', icon: FileText }
  ];

  return (
    <aside className="w-56 bg-white text-slate-700 flex flex-col h-full shrink-0 border-r border-slate-200 select-none z-30">
      
      {/* Navigation Groups (Scrollable) */}
      <div className="flex-1 overflow-y-auto py-3 px-2 space-y-4">
        
        {/* PRIMARY GROUP */}
        <div>
          <div className="px-2 mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            PRIMARY
          </div>
          <div className="space-y-0.5">
            {primaryItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveView(item.id);
                    setSelectedService(null);
                  }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-sm text-xs font-medium flex items-center justify-between transition-colors ${
                    isActive 
                      ? 'bg-blue-50/80 text-blue-900 font-semibold border-l-2 border-blue-600' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-2 border-transparent'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-700' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.count && (
                    <span className="text-[10px] font-bold text-red-600 bg-red-50 px-1.5 py-0.2 rounded">
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* SERVICES GROUP */}
        <div>
          <div className="px-2 mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            SERVICES
          </div>
          <div className="space-y-0.5">
            {serviceItems.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedService === item.id && activeView === 'service_detail';
              const status = getServiceStatus(item.id);
              const isAttention = status === 'attention' || status === 'moderate' || status === 'high-load';
              const isCritical = status === 'critical' || status === 'active';

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedService(item.id);
                    setActiveView('service_detail');
                  }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-sm text-xs font-medium flex items-center justify-between transition-colors ${
                    isSelected 
                      ? 'bg-blue-50/80 text-blue-900 font-semibold border-l-2 border-blue-600' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-2 border-transparent'
                  }`}
                >
                  <div className="flex items-center space-x-2 truncate">
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-700' : 'text-slate-400'}`} />
                    <span className="truncate">{item.label}</span>
                  </div>
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    isCritical ? 'bg-red-600' : isAttention ? 'bg-amber-500' : 'bg-emerald-500'
                  }`}></span>
                </button>
              );
            })}
          </div>
        </div>

        {/* SYSTEM GROUP */}
        <div>
          <div className="px-2 mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            SYSTEM
          </div>
          <div className="space-y-0.5">
            {systemItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveView(item.id);
                    setSelectedService(null);
                  }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-sm text-xs font-medium flex items-center space-x-2 transition-colors ${
                    isActive 
                      ? 'bg-blue-50/80 text-blue-900 font-semibold border-l-2 border-blue-600' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-2 border-transparent'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-700' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Bottom Minimal Operational Tag */}
      <div className="p-2.5 bg-slate-50 border-t border-slate-200 text-[10px] text-slate-500 flex items-center justify-between">
        <span>Pune Node 01</span>
        <span className="font-mono text-slate-400">SYNCED</span>
      </div>

    </aside>
  );
}
