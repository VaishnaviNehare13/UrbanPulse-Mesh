import React, { useState, useEffect } from 'react';
import ServiceTelemetry from './ServiceTelemetry';
import IncidentPanel from './IncidentPanel';
import AuditLog from './AuditLog';
import { ArrowLeft } from 'lucide-react';

export default function OperationsFeed({
  servicesData,
  activeIncident,
  selectedObject,
  auditLogs,
  onApplyDiversion,
  onOverride,
  isResolved,
  onSelectIncident,
  onClearSelection
}) {
  const [activeTab, setActiveTab] = useState('telemetry'); // 'telemetry' | 'incident' | 'audit'

  // If user selected an incident, switch view to incident tab
  useEffect(() => {
    if (selectedObject?.type === 'incident' || selectedObject?.id?.startsWith('UP-')) {
      setActiveTab('incident');
    }
  }, [selectedObject]);

  const currentIncident = selectedObject?.type === 'incident' ? selectedObject : activeIncident;

  return (
    <aside className="w-80 xl:w-84 bg-white border-l border-slate-200 flex flex-col h-full shrink-0 select-none z-20">
      
      {/* Console Header */}
      <div className="px-4 py-3 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 leading-none">
              OPERATIONS
            </h2>
            <p className="text-[10px] text-slate-500 font-medium mt-0.5">
              PUNE MUNICIPAL AREA
            </p>
          </div>
          <span className="text-[10px] font-mono text-slate-400">CONSOLE</span>
        </div>

        {/* Minimal Navigation Tabs */}
        <div className="flex space-x-1 mt-2.5 border-b border-slate-100 pb-1">
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
              activeTab === 'telemetry' 
                ? 'bg-slate-100 text-slate-900 font-semibold' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            City Status
          </button>
          <button
            onClick={() => setActiveTab('incident')}
            className={`px-2 py-1 text-xs font-medium rounded transition-colors flex items-center gap-1 ${
              activeTab === 'incident' 
                ? 'bg-slate-100 text-slate-900 font-semibold' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>Incident</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
          </button>
          <button
            onClick={() => setActiveTab('audit')}
            className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
              activeTab === 'audit' 
                ? 'bg-slate-100 text-slate-900 font-semibold' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Audit Log
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'telemetry' && (
          <ServiceTelemetry
            servicesData={servicesData}
            onSelectIncident={(inc) => {
              onSelectIncident(inc);
              setActiveTab('incident');
            }}
            activeIncident={activeIncident}
          />
        )}

        {activeTab === 'incident' && (
          <div className="space-y-3">
            <button
              onClick={() => {
                setActiveTab('telemetry');
                if (onClearSelection) onClearSelection();
              }}
              className="text-[11px] text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium transition-colors"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Back to City Overview</span>
            </button>
            <IncidentPanel
              incident={currentIncident}
              onApplyDiversion={onApplyDiversion}
              onOverride={onOverride}
              isResolved={isResolved}
              onClose={() => setActiveTab('telemetry')}
            />
          </div>
        )}

        {activeTab === 'audit' && (
          <AuditLog auditLogs={auditLogs} />
        )}
      </div>

      {/* Console Bottom Strip */}
      <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 text-[10px] text-slate-500 flex items-center justify-between">
        <span>Decision Engine: READY</span>
        <span>Telemetry: Active</span>
      </div>

    </aside>
  );
}
