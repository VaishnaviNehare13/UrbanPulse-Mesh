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
  servicesData,
  onNavigateToHome
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
    <aside className="w-56 bg-white text-slate-700 flex flex-col h-full shrink-0 border-r border-[#D9E0E8] select-none z-30 font-sans">
      
      {/* Navigation Groups (Scrollable) */}
      <div className="flex-1 overflow-y-auto py-3 px-2 space-y-4">
        
        {/* PRIMARY GROUP */}
        <div>
          <div className="px-2.5 mb-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-400">
            PRIMARY
          </div>
          <div className="space-y-0.5" role="navigation" aria-label="Primary Navigation">
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
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full text-left px-2.5 py-1.5 rounded-xs text-xs font-medium flex items-center justify-between transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2563A6] cursor-pointer ${
                    isActive 
                      ? 'bg-[#EAF2FA] text-[#0F1B2D] font-semibold border-l-[3px] border-[#2563A6] pl-[7px]' 
                      : 'text-slate-600 hover:bg-[#F7F8FA] hover:text-[#0F1B2D] border-l-[3px] border-transparent pl-[7px]'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#2563A6]' : 'text-slate-400'}`} />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {item.count && (
                    <span className="text-[10px] font-bold text-red-700 bg-red-50 border border-red-200/60 px-1.5 py-0.2 rounded-xs">
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
          <div className="px-2.5 mb-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-400">
            SERVICES
          </div>
          <div className="space-y-0.5" role="navigation" aria-label="Services Navigation">
            {serviceItems.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedService === item.id && activeView === 'service_detail';
              const status = getServiceStatus(item.id);
              const isAttention = status === 'attention' || status === 'moderate' || status === 'high-load' || status === 'minor-delay';
              const isCritical = status === 'critical' || status === 'active';

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedService(item.id);
                    setActiveView('service_detail');
                  }}
                  aria-current={isSelected ? 'page' : undefined}
                  className={`w-full text-left px-2.5 py-1.5 rounded-xs text-xs font-medium flex items-center justify-between transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2563A6] cursor-pointer ${
                    isSelected 
                      ? 'bg-[#EAF2FA] text-[#0F1B2D] font-semibold border-l-[3px] border-[#2563A6] pl-[7px]' 
                      : 'text-slate-600 hover:bg-[#F7F8FA] hover:text-[#0F1B2D] border-l-[3px] border-transparent pl-[7px]'
                  }`}
                >
                  <div className="flex items-center space-x-2.5 truncate">
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-[#2563A6]' : 'text-slate-400'}`} />
                    <span className="truncate">{item.label}</span>
                  </div>
                  <span 
                    title={isCritical ? 'Critical/Active' : isAttention ? 'Attention/High Load' : 'Operational'}
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      isCritical ? 'bg-red-600' : isAttention ? 'bg-amber-500' : 'bg-emerald-600'
                    }`}
                  ></span>
                </button>
              );
            })}
          </div>
        </div>

        {/* SYSTEM GROUP */}
        <div>
          <div className="px-2.5 mb-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-400">
            SYSTEM
          </div>
          <div className="space-y-0.5" role="navigation" aria-label="System Navigation">
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
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full text-left px-2.5 py-1.5 rounded-xs text-xs font-medium flex items-center space-x-2.5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2563A6] cursor-pointer ${
                    isActive 
                      ? 'bg-[#EAF2FA] text-[#0F1B2D] font-semibold border-l-[3px] border-[#2563A6] pl-[7px]' 
                      : 'text-slate-600 hover:bg-[#F7F8FA] hover:text-[#0F1B2D] border-l-[3px] border-transparent pl-[7px]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#2563A6]' : 'text-slate-400'}`} />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Bottom Minimal Operational Tag & Home Shortcut */}
      <div className="p-2.5 bg-[#F7F8FA] border-t border-[#D9E0E8] text-[10px] text-slate-500 flex items-center justify-between">
        {onNavigateToHome ? (
          <button
            onClick={onNavigateToHome}
            className="font-medium text-[#2563A6] hover:underline cursor-pointer"
          >
            ← Public Home
          </button>
        ) : (
          <span className="font-medium text-slate-600">Pune Node 01</span>
        )}
        <span className="font-mono text-slate-400 text-[9px]">SYNCED</span>
      </div>

    </aside>
  );
}


