import React from 'react';
import { ShieldAlert, Check, Sliders, ArrowRight, Activity, ArrowLeft } from 'lucide-react';

export default function DecisionPanel({ 
  incident, 
  onApply, 
  onOverride, 
  onBack, 
  isResolved 
}) {
  return (
    <div className="space-y-4 text-xs text-slate-800">
      
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <button
          onClick={onBack}
          className="text-slate-500 hover:text-slate-800 text-[11px] font-semibold flex items-center gap-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Telemetry</span>
        </button>
        <span className="text-[10px] font-mono font-bold uppercase bg-red-100 text-red-700 px-1.5 py-0.2 rounded">
          DECISION REQUIRED
        </span>
      </div>

      {/* Decision Proposal Header */}
      <div>
        <h3 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
          <ShieldAlert className="w-4 h-4 text-red-600 shrink-0" />
          Traffic Diversion Rule Triggered
        </h3>
        <p className="text-[11px] text-slate-500 mt-0.5">
          Coordinated multi-service automated decision support system.
        </p>
      </div>

      {/* Incident Telemetry Card */}
      <div className="border border-slate-200 rounded-md bg-slate-50 p-2.5 space-y-2">
        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
          <span>Target Corridor</span>
          <span className="font-mono text-slate-400">PUNE-COR-04B</span>
        </div>
        <div className="font-bold text-slate-900 text-xs">
          {incident.locationName} ({incident.ward})
        </div>
        <div className="text-[11px] text-slate-600">
          Obstruction detected at 10:42 AM IST • FC Road standstill affecting PMPML feeder routes.
        </div>
      </div>

      {/* Cross-Service Coordination Plan */}
      <div className="border border-blue-200 bg-blue-50/70 rounded-md p-3 space-y-2">
        <div className="text-[11px] font-bold text-blue-900 flex items-center justify-between">
          <span>Coordinated Execution Protocol</span>
          <span className="font-mono text-blue-700 text-[10px]">DIV-R-8842</span>
        </div>
        <ul className="space-y-1.5 text-[11px] text-slate-700">
          <li className="flex items-start gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1 shrink-0"></span>
            <span><strong>Traffic:</strong> Dynamic signal green phase (+45s) on JM Road & Sancheti corridor.</span>
          </li>
          <li className="flex items-start gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1 shrink-0"></span>
            <span><strong>Transit:</strong> Reroute PMPML Routes 11 & 24 via Senapati Bapat Road loop.</span>
          </li>
          <li className="flex items-start gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1 shrink-0"></span>
            <span><strong>Emergency:</strong> Clear designated green channel to Sahyadri Super Speciality Hospital.</span>
          </li>
        </ul>
      </div>

      {/* Impact Comparison */}
      <div className="grid grid-cols-2 gap-2 text-[11px]">
        <div className="bg-white border border-slate-200 p-2 rounded">
          <span className="text-[10px] text-slate-400 block font-medium">Without Action</span>
          <span className="font-bold text-red-600 text-xs">24 min delay</span>
        </div>
        <div className="bg-white border border-emerald-200 p-2 rounded bg-emerald-50/30">
          <span className="text-[10px] text-emerald-700 block font-medium">With Coordinated Mesh</span>
          <span className="font-bold text-emerald-700 text-xs">15 min (-9 min saved)</span>
        </div>
      </div>

      {/* Action Buttons */}
      {!isResolved ? (
        <div className="space-y-2 pt-2 border-t border-slate-200">
          <button
            onClick={onApply}
            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs py-2 px-3 rounded-md shadow-sm transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>Apply Coordinated Diversion</span>
          </button>
          
          <button
            onClick={onOverride}
            className="w-full bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs py-2 px-3 rounded-md border border-slate-300 shadow-sm transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
          >
            <Sliders className="w-3.5 h-3.5 text-slate-500" />
            <span>Override & Log Manual Policy</span>
          </button>
        </div>
      ) : (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-md text-emerald-900 text-xs">
          <div className="font-bold flex items-center gap-1.5 mb-1">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Diversion Executed & Propagated</span>
          </div>
          <p className="text-[11px] text-emerald-800 leading-relaxed">
            All 3 affected municipal services acknowledged coordinated plan. GIS node transitioned to monitored state.
          </p>
        </div>
      )}

    </div>
  );
}
