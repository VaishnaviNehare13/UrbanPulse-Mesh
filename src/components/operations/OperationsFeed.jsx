import React, { useState, useEffect } from 'react';
import ServiceTelemetry from './ServiceTelemetry';
import IncidentPanel from './IncidentPanel';
import AuditLog from './AuditLog';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '../../i18n';

export default function OperationsFeed({
  servicesData,
  activeIncident,
  selectedObject,
  auditLogs,
  onApplyDiversion,
  onOverride,
  isResolved,
  onSelectIncident,
  onClearSelection,
  activeServiceFilter = 'all',
  onSelectService
}) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('telemetry'); // 'telemetry' | 'incident' | 'audit'

  // If user selected an incident, switch view to incident tab
  useEffect(() => {
    if (selectedObject?.type === 'incident' || selectedObject?.id?.startsWith('UP-')) {
      setActiveTab('incident');
    }
  }, [selectedObject]);

  const currentIncident = selectedObject?.type === 'incident' ? selectedObject : activeIncident;

  const getHeading = () => {
    if (activeTab === 'incident') return t('operations.incidentResponse');
    if (activeServiceFilter === 'traffic') return t('operations.trafficTitle');
    if (activeServiceFilter === 'emergency') return t('operations.emergencyTitle');
    if (activeServiceFilter === 'transit') return t('operations.transitTitle');
    if (activeServiceFilter === 'water') return t('operations.waterTitle');
    if (activeServiceFilter === 'power') return t('operations.powerTitle');
    if (activeServiceFilter === 'waste') return t('operations.wasteTitle');
    return t('operations.operationsTitle');
  };

  return (
    <aside className="w-80 xl:w-88 bg-white border-l border-slate-200 flex flex-col h-full shrink-0 select-none z-20 font-sans">
      
      {/* Dynamic Context Header */}
      <div className="px-3.5 py-2.5 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 leading-none">
              {getHeading()}
            </h2>
            <p className="text-[10px] text-slate-500 font-medium mt-0.5">
              {t('operations.puneArea')}
            </p>
          </div>
          <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider bg-slate-100 px-1.5 py-0.5 rounded-xs border border-slate-200">
            {activeTab === 'incident' 
              ? (isResolved ? t('operations.responseActive') : t('operations.decisionSupport')) 
              : (activeServiceFilter !== 'all' ? `${activeServiceFilter.toUpperCase()}` : t('operations.console'))}
          </span>
        </div>

        {/* Minimal Navigation Tabs */}
        <div className="flex space-x-1 mt-2 border-b border-slate-100 pb-1" role="tablist">
          <button
            onClick={() => {
              setActiveTab('telemetry');
              if (onClearSelection) onClearSelection();
            }}
            role="tab"
            aria-selected={activeTab === 'telemetry'}
            className={`px-2 py-1 text-xs font-medium rounded-xs transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 ${
              activeTab === 'telemetry' 
                ? 'bg-slate-100 text-slate-900 font-semibold' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {t('operations.cityOverview')}
          </button>
          <button
            onClick={() => setActiveTab('incident')}
            role="tab"
            aria-selected={activeTab === 'incident'}
            className={`px-2 py-1 text-xs font-medium rounded-xs transition-colors flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 ${
              activeTab === 'incident' 
                ? 'bg-slate-100 text-slate-900 font-semibold' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>{t('operations.incident')}</span>
            <span className={`w-1.5 h-1.5 rounded-full ${isResolved ? 'bg-emerald-600' : 'bg-red-600'}`}></span>
          </button>
          <button
            onClick={() => setActiveTab('audit')}
            role="tab"
            aria-selected={activeTab === 'audit'}
            className={`px-2 py-1 text-xs font-medium rounded-xs transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 ${
              activeTab === 'audit' 
                ? 'bg-slate-100 text-slate-900 font-semibold' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {t('operations.auditLog')}
          </button>
        </div>
      </div>

      {/* Main Operations Console Content Area */}
      <div className="flex-1 overflow-y-auto p-3.5 space-y-3">
        
        {/* STATE 1: CITY OVERVIEW / SERVICE CONTEXT */}
        {activeTab === 'telemetry' && (
          <ServiceTelemetry
            servicesData={servicesData}
            activeServiceFilter={activeServiceFilter}
            onSelectService={onSelectService}
            onSelectIncident={(inc) => {
              onSelectIncident(inc);
              setActiveTab('incident');
            }}
            activeIncident={activeIncident}
          />
        )}

        {/* STATE 2 & STATE 3: INCIDENT RESPONSE */}
        {activeTab === 'incident' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-1 border-b border-slate-100">
              <button
                onClick={() => {
                  setActiveTab('telemetry');
                  if (onClearSelection) onClearSelection();
                }}
                className="text-[11px] text-slate-500 hover:text-slate-900 flex items-center gap-1 font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>{t('operations.backToOverview')}</span>
              </button>
              {isResolved && (
                <span className="text-[10px] text-emerald-700 font-semibold">
                  DIV-R-8842 Active
                </span>
              )}
            </div>

            <IncidentPanel
              incident={currentIncident}
              onApplyDiversion={onApplyDiversion}
              onOverride={onOverride}
              isResolved={isResolved}
            />
          </div>
        )}

        {/* AUDIT LOG TAB */}
        {activeTab === 'audit' && (
          <AuditLog auditLogs={auditLogs} />
        )}
      </div>

      {/* Console Bottom Status Strip */}
      <div className="px-3.5 py-2 bg-slate-50 border-t border-slate-200 text-[10px] text-slate-500 flex items-center justify-between">
        <span className="font-medium">
          {isResolved ? t('operations.protocolStabilizing') : t('operations.decisionEngineReady')}
        </span>
        <span className="font-mono text-slate-400">{t('operations.telemetryActive')}</span>
      </div>

    </aside>
  );
}
