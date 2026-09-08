import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function ArchitectureView() {
  const services = [
    { name: "Traffic Service", desc: "Corridor flow & signal coordination" },
    { name: "Emergency Service", desc: "CAD dispatch & hospital links" },
    { name: "Transit Service", desc: "PMPML buses & Metro telemetry" },
    { name: "Water Service", desc: "WTP output & feeder pressure" },
    { name: "Power Service", desc: "Substation transformers & load" },
    { name: "Waste Service", desc: "SWM logistics & route telemetry" },
  ];

  return (
    <div className="flex-1 bg-slate-50 overflow-y-auto p-6 space-y-5 select-none font-sans">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div>
          <h2 className="text-base font-bold text-slate-900 tracking-tight">
            SYSTEM ARCHITECTURE & MICROSERVICE TOPOLOGY
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Event-Driven Coordination Mesh for Municipal Decision Support
          </p>
        </div>
        <span className="text-[10px] font-semibold text-slate-500 bg-white border border-slate-300 px-2.5 py-1 rounded">
          CONCEPTUAL / PROTOTYPE ARCHITECTURE
        </span>
      </div>

      {/* Clean Structured Architecture Flow */}
      <div className="bg-white border border-slate-200 rounded p-6 max-w-2xl mx-auto space-y-4">
        
        {/* Box 1: City Administrator */}
        <div className="p-3 bg-slate-50 border border-slate-300 rounded text-center">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">OPERATOR / USER</div>
          <div className="font-bold text-xs text-slate-900 mt-0.5">CITY ADMINISTRATOR / MUNICIPAL OPERATOR</div>
        </div>

        <div className="flex justify-center text-slate-400">
          <ArrowDown className="w-4 h-4" />
        </div>

        {/* Box 2: Web Application */}
        <div className="p-3 bg-slate-50 border border-slate-300 rounded text-center">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">FRONTEND CLIENT</div>
          <div className="font-bold text-xs text-slate-900 mt-0.5">REACT + LEAFLET GIS WEB APPLICATION</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Interactive Map Canvas, Command Console & Decision Support UI</div>
        </div>

        <div className="flex justify-center text-slate-400">
          <ArrowDown className="w-4 h-4" />
        </div>

        {/* Box 3: API Gateway */}
        <div className="p-3 bg-slate-50 border border-slate-300 rounded text-center">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">COMMUNICATION BROKER</div>
          <div className="font-bold text-xs text-slate-900 mt-0.5">API GATEWAY & TELEMETRY INGESTION</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Authentication • GIS Geometry Normalization • Routing</div>
        </div>

        <div className="flex justify-center text-slate-400">
          <ArrowDown className="w-4 h-4" />
        </div>

        {/* Box 4: Domain Microservices Grid */}
        <div className="p-3 border border-slate-300 rounded bg-slate-50/50 space-y-2">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider text-center">
            MUNICIPAL DOMAIN MICROSERVICES
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {services.map((svc) => (
              <div key={svc.name} className="p-2 bg-white border border-slate-200 rounded text-center">
                <div className="font-bold text-xs text-slate-800">{svc.name}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{svc.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center text-slate-400">
          <ArrowDown className="w-4 h-4" />
        </div>

        {/* Box 5: Event Bus */}
        <div className="p-3 bg-slate-50 border border-slate-300 rounded text-center">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">ASYNCHRONOUS BACKBONE</div>
          <div className="font-bold text-xs text-slate-900 mt-0.5">EVENT BUS (PUB/SUB BROKER)</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Incident Events • Telemetry Feeds • Inter-Service Notifications</div>
        </div>

        <div className="flex justify-center text-slate-400">
          <ArrowDown className="w-4 h-4" />
        </div>

        {/* Box 6: Decision Support Engine */}
        <div className="p-3 bg-slate-50 border border-slate-300 rounded text-center">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">ANALYTIC CORE</div>
          <div className="font-bold text-xs text-slate-900 mt-0.5">DECISION SUPPORT & WHAT-IF ENGINE</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Rule Evaluation (DIV-R-8842) • Impact Forecasting • Automated Recommendations</div>
        </div>

      </div>

    </div>
  );
}
