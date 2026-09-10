import React from 'react';
import { 
  Car, 
  ShieldAlert, 
  Bus, 
  Droplets, 
  Zap, 
  Recycle, 
  ArrowRight,
  Shield,
  Layers,
  Activity,
  CheckCircle2,
  FileText
} from 'lucide-react';

export default function HomeView({ onEnterOperations, onLoginClick }) {
  const domains = [
    {
      id: 'traffic',
      name: 'TRAFFIC',
      icon: Car,
      desc: 'Corridor velocity, choke-point detection & dynamic signal offset coordination.'
    },
    {
      id: 'emergency',
      name: 'EMERGENCY',
      icon: ShieldAlert,
      desc: 'First responder CAD links, hospital green corridors & incident priority management.'
    },
    {
      id: 'transit',
      name: 'TRANSIT',
      icon: Bus,
      desc: 'PMPML feeder bus networks, Pune Metro telemetry & multi-modal rerouting.'
    },
    {
      id: 'water',
      name: 'WATER',
      icon: Droplets,
      desc: 'Parvati WTP output, transmission bulk mains & sector pressure monitoring.'
    },
    {
      id: 'power',
      name: 'POWER',
      icon: Zap,
      desc: 'Substation transformer telemetry, feeder balancing & grid load mitigation.'
    },
    {
      id: 'waste',
      name: 'WASTE',
      icon: Recycle,
      desc: 'Municipal SWM vehicle logistics, transfer stations & collection sector coverage.'
    }
  ];

  const workflowSteps = [
    { step: '01', title: 'INCIDENT', desc: 'Anomaly detected in Pune urban corridor (e.g. UP-1024)' },
    { step: '02', title: 'ASSESS', desc: 'Multi-service cross-impact evaluation across transport & emergency' },
    { step: '03', title: 'COORDINATE', desc: 'Decision engine proposes synchronized protocol (DIV-R-8842)' },
    { step: '04', title: 'RESPOND', desc: 'Administrator authorizes action with error prevention confirmation' },
    { step: '05', title: 'EVALUATE', desc: 'System tracks stabilizing corridor metrics and records audit log' }
  ];

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#172033] font-sans flex flex-col selection:bg-[#EAF2FA] selection:text-[#2563A6]">
      
      {/* 11.1 HOME HEADER */}
      <header className="h-14 bg-white border-b border-[#D9E0E8] px-6 lg:px-12 flex items-center justify-between shrink-0 z-20">
        <div className="flex items-center space-x-3.5">
          <div className="w-7 h-7 rounded bg-[#0F1B2D] flex items-center justify-center text-white font-bold text-xs tracking-tight shadow-xs">
            UP
          </div>
          <div>
            <div className="flex items-baseline space-x-2">
              <span className="text-sm font-bold text-[#0F1B2D] tracking-tight leading-none">
                URBANPULSE MESH
              </span>
              <span className="text-[9px] font-semibold text-[#64748B] uppercase tracking-widest hidden sm:inline">
                MUNICIPAL COORDINATION & DECISION SUPPORT
              </span>
            </div>
            <p className="text-[11px] text-[#64748B] font-medium leading-none mt-0.5">
              Pune, Maharashtra
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-xs text-[#64748B] font-medium hidden md:inline">
            Pune Municipal Area
          </span>
          <button
            onClick={onLoginClick || onEnterOperations}
            className="bg-[#2563A6] hover:bg-[#1d4f85] text-white text-xs font-semibold py-1.5 px-3.5 rounded transition-colors flex items-center space-x-1.5 cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2563A6]"
          >
            <span>ACCESS PLATFORM</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* 11.2 & 11.3 HERO SECTION */}
      <section className="relative bg-white border-b border-[#D9E0E8] py-14 px-6 lg:px-12 overflow-hidden">
        
        {/* Subtle Institutional Pune GIS Texture Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] select-none flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" stroke="#0F1B2D" strokeWidth="1.5">
            {/* Mula-Mutha River Ribbon Representation */}
            <path d="M 50,320 Q 300,280 500,340 T 900,300 T 1150,330" stroke="#2563A6" strokeWidth="8" fill="none" opacity="0.3" />
            <path d="M 50,320 Q 300,280 500,340 T 900,300 T 1150,330" stroke="#2563A6" strokeWidth="2" strokeDasharray="6 6" fill="none" />
            
            {/* Primary Pune Corridors: FC Road, JM Road, Karve Road, Pune-Solapur */}
            <line x1="200" y1="100" x2="800" y2="500" strokeWidth="2" />
            <line x1="400" y1="50" x2="600" y2="550" strokeWidth="1.8" />
            <line x1="150" y1="400" x2="1050" y2="200" strokeWidth="1.5" />
            <line x1="300" y1="200" x2="900" y2="450" strokeWidth="1.2" strokeDasharray="4 4" />
            
            {/* Ward Boundaries */}
            <circle cx="550" cy="310" r="140" strokeDasharray="3 3" />
            <circle cx="380" cy="260" r="110" strokeDasharray="3 3" />
            <circle cx="720" cy="380" r="120" strokeDasharray="3 3" />
            
            {/* Facility nodes */}
            <rect x="540" y="300" width="16" height="16" />
            <polygon points="380,250 390,270 370,270" />
            <circle cx="720" cy="380" r="8" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-5">
          
          <div className="inline-flex items-center space-x-2 bg-[#EAF2FA] text-[#2563A6] border border-[#2563A6]/20 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563A6]"></span>
            <span>B.Tech System Design Academic Prototype</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F1B2D] tracking-tight leading-tight">
            MUNICIPAL COORDINATION <br className="hidden sm:inline" />
            & DECISION SUPPORT
          </h1>

          <p className="text-sm sm:text-base text-[#64748B] max-w-2xl leading-relaxed font-normal">
            A unified operational workstation for coordinating Pune's urban service domains, assessing real-time spatial bottlenecks, and executing synchronized administrative decisions.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              onClick={onEnterOperations}
              className="bg-[#0F1B2D] hover:bg-[#172033] active:bg-black text-white font-semibold text-xs py-2.5 px-5 rounded transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2563A6]"
            >
              <span>ENTER OPERATIONS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="text-xs text-[#64748B] flex items-center gap-2">
              <span className="font-semibold text-[#0F1B2D]">PUNE MUNICIPAL AREA</span>
              <span>•</span>
              <span>PUNE, MAHARASHTRA</span>
            </div>
          </div>

          <div className="pt-1 text-[10px] text-[#64748B] font-mono">
            * REAL GEOGRAPHIC DATA (PUNE GIS) + SIMULATED OPERATIONAL DATA
          </div>

        </div>

      </section>

      {/* 11.5 MUNICIPAL DOMAINS */}
      <section className="py-10 px-6 lg:px-12 max-w-5xl mx-auto w-full space-y-4">
        <div>
          <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
            CORE DOMAINS
          </span>
          <h2 className="text-base font-bold text-[#0F1B2D] tracking-tight mt-0.5">
            MUNICIPAL SERVICE DOMAINS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {domains.map((dom) => {
            const Icon = dom.icon;
            return (
              <div 
                key={dom.id}
                className="p-3.5 bg-white border border-[#D9E0E8] rounded hover:border-[#2563A6] transition-colors space-y-1.5 group"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="p-1.5 rounded bg-[#F1F4F7] text-[#0F1B2D] group-hover:bg-[#EAF2FA] group-hover:text-[#2563A6] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-xs text-[#0F1B2D] tracking-wide">
                    {dom.name}
                  </span>
                </div>
                <p className="text-[11px] text-[#64748B] leading-relaxed">
                  {dom.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 11.6 DECISION SUPPORT WORKFLOW */}
      <section className="py-10 px-6 lg:px-12 bg-white border-y border-[#D9E0E8]">
        <div className="max-w-5xl mx-auto w-full space-y-5">
          <div>
            <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
              COORDINATION PARADIGM
            </span>
            <h2 className="text-base font-bold text-[#0F1B2D] tracking-tight mt-0.5">
              NORMAN ACTION CYCLE & DECISION WORKFLOW
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
            {workflowSteps.map((ws, i) => (
              <div 
                key={ws.step}
                className="p-3 bg-[#F7F8FA] border border-[#D9E0E8] rounded space-y-1 relative"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-[#2563A6] font-bold">
                  <span>{ws.step}</span>
                  {i < 4 && <span className="text-[#64748B] hidden sm:inline">→</span>}
                </div>
                <div className="font-bold text-xs text-[#0F1B2D]">{ws.title}</div>
                <p className="text-[10px] text-[#64748B] leading-relaxed">
                  {ws.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-3 bg-[#EAF2FA]/70 border border-[#2563A6]/20 rounded text-xs text-[#0F1B2D] flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#2563A6] shrink-0" />
              <span>Simulated Demonstration Scenario: <strong>UP-1024 Traffic Obstruction & DIV-R-8842 Dynamic Diversion</strong></span>
            </div>
            <button
              onClick={onEnterOperations}
              className="text-[#2563A6] hover:underline font-semibold text-xs shrink-0 cursor-pointer"
            >
              Launch Scenario →
            </button>
          </div>
        </div>
      </section>

      {/* 11.7 HOME FOOTER */}
      <footer className="mt-auto py-6 px-6 lg:px-12 bg-[#0F1B2D] text-slate-400 text-xs border-t border-slate-800">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5 text-center sm:text-left">
            <div className="font-bold text-white tracking-wide">
              URBANPULSE MESH
            </div>
            <div className="text-[11px] text-slate-400">
              Municipal Coordination & Decision Support • Pune, Maharashtra
            </div>
          </div>

          <div className="text-[10px] text-slate-500 font-mono text-center sm:text-right">
            <div>B.Tech System Design Academic Prototype</div>
            <div>Simulated Operational Data • No Live IoT Sensors Implied</div>
          </div>
        </div>
      </footer>

    </div>
  );
}
