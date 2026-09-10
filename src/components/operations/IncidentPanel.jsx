import React, { useState } from 'react';
import { 
  Check, 
  Sliders, 
  MapPin, 
  Clock,
  ArrowDown,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { useTranslation } from '../../i18n';

export default function IncidentPanel({ 
  incident, 
  onApplyDiversion, 
  onOverride, 
  isResolved 
}) {
  const { t } = useTranslation();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [actionTimestamp, setActionTimestamp] = useState(null);

  if (!incident) return null;

  const handleConfirmApply = () => {
    setShowConfirmModal(false);
    const timeStr = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false });
    setActionTimestamp(`${timeStr} IST`);
    if (onApplyDiversion) {
      onApplyDiversion(incident);
    }
  };

  const handleManualOverride = () => {
    const timeStr = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false });
    setActionTimestamp(`${timeStr} IST`);
    if (onOverride) {
      onOverride(incident);
    }
  };

  return (
    <div className="space-y-3.5 text-xs text-slate-800 select-none font-sans">
      
      {/* Incident Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <div>
          <span className="font-mono text-[9px] font-bold text-red-700 uppercase tracking-wider block">
            {t('operations.incidentResponse')}
          </span>
          <span className="font-mono text-xs font-bold text-slate-900">
            {incident.id || "UP-1024"}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-[9px] bg-red-100 text-red-800 border border-red-200/80 px-1.5 py-0.5 rounded-xs uppercase">
            STATUS: {isResolved ? "STABILIZING" : "ACTIVE"}
          </span>
          <span className="font-semibold text-[9px] bg-slate-100 text-slate-700 border border-slate-200 px-1.5 py-0.5 rounded-xs uppercase">
            SEVERITY: HIGH
          </span>
        </div>
      </div>

      {/* Incident Title & Geography */}
      <div className="space-y-1">
        <h3 className="font-bold text-slate-900 text-xs leading-snug">
          MULTI-VEHICLE COLLISION & TRANSIT STOPPAGE
        </h3>
        <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
          <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
          <span>FC Road near Goodluck Chowk (Shivajinagar)</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
          <Clock className="w-3 h-3 text-slate-400 shrink-0" />
          <span>Reported: {incident.timestamp || "10:42 AM IST"}</span>
        </div>
      </div>

      {/* IMPACT SUMMARY */}
      <div>
        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">
          {t('operations.impactSummary')}
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xs p-2.5 space-y-1.5 text-[11px]">
          <div className="flex items-center justify-between">
            <span className="text-slate-500">{t('operations.affectedCorridor')}</span>
            <span className="font-bold text-slate-800">FC Road</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500">{t('operations.trafficImpact')}</span>
            <span className="font-bold text-red-700">High (Standstill)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500">{t('operations.transitImpact')}</span>
            <span className="font-bold text-amber-700">Moderate (+7m Delay)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500">{t('operations.emergencyAccess')}</span>
            <span className="font-bold text-blue-700">Priority Channel Open</span>
          </div>
        </div>
      </div>

      {/* DECISION SUPPORT (STATE 2 vs STATE 3) */}
      {!isResolved ? (
        <div className="border border-slate-300 bg-white rounded-xs p-3 space-y-2.5">
          <div className="flex items-center justify-between pb-1 border-b border-slate-100">
            <div className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
              {t('operations.decisionProposal')}
            </div>
            <span className="font-mono text-[10px] font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-1.5 py-0.2 rounded-xs">
              DIV-R-8842
            </span>
          </div>

          <div>
            <div className="text-xs font-bold text-slate-900">Dynamic Traffic Diversion</div>
            <p className="text-[11px] text-slate-600 leading-relaxed mt-0.5">
              Reroute inbound traffic to relieve FC Road bottleneck and synchronize signal timings.
            </p>
          </div>

          {/* Recommended Route Action Diagram */}
          <div className="p-2 bg-slate-50 border border-slate-200 rounded-xs text-[11px] space-y-1">
            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">
              {t('operations.recommendedAction')}
            </span>
            <div className="flex items-center space-x-1.5 font-semibold text-slate-800">
              <span>FC Road</span>
              <span className="text-slate-400">→</span>
              <span className="text-blue-700">JM Road</span>
              <span className="text-slate-400">→</span>
              <span>Shivaji Road</span>
            </div>
          </div>

          {/* Impact Comparison */}
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="bg-slate-50 border border-slate-200 p-2 rounded-xs">
              <span className="text-[9px] text-slate-500 block font-medium uppercase">{t('operations.withoutIntervention')}</span>
              <span className="font-bold text-red-700 text-xs mt-0.5 block">18 min delay</span>
            </div>
            <div className="bg-emerald-50/50 border border-emerald-200 p-2 rounded-xs">
              <span className="text-[9px] text-emerald-800 block font-medium uppercase">{t('operations.withDiversion')}</span>
              <span className="font-bold text-emerald-700 text-xs mt-0.5 block">9 min delay</span>
            </div>
          </div>

          {/* Error Prevention Inline Confirmation vs Trigger Buttons */}
          {showConfirmModal ? (
            <div className="p-2.5 bg-slate-50 border border-blue-300 rounded-xs space-y-2 mt-2">
              <div className="flex items-start gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs text-slate-900">{t('operations.applyQuestion')}</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">
                    {t('operations.expectedDelay')} <strong className="text-slate-800">18 min → 9 min</strong>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 pt-1">
                <button
                  onClick={() => setShowConfirmModal(false)}
                  className="flex-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-semibold py-1.5 rounded-xs transition-colors cursor-pointer"
                >
                  {t('operations.cancel')}
                </button>
                <button
                  onClick={handleConfirmApply}
                  className="flex-1 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold py-1.5 rounded-xs transition-colors cursor-pointer"
                >
                  {t('operations.confirmApply')}
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-1.5 pt-1">
              <button
                onClick={() => setShowConfirmModal(true)}
                className="w-full bg-slate-900 hover:bg-slate-800 active:bg-black text-white font-semibold text-xs py-2 px-3 rounded-xs transition-colors flex items-center justify-center space-x-1.5 cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
              >
                <Check className="w-3.5 h-3.5" />
                <span>{t('operations.applyDiversion')}</span>
              </button>
              
              <button
                onClick={handleManualOverride}
                className="w-full bg-white hover:bg-slate-50 text-slate-700 font-medium text-xs py-1.5 px-3 rounded-xs border border-slate-300 transition-colors flex items-center justify-center space-x-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
              >
                <Sliders className="w-3 h-3 text-slate-500" />
                <span>{t('operations.manualOverride')}</span>
              </button>
            </div>
          )}

        </div>
      ) : (
        /* RESPONSE ACTIVE STATE */
        <div className="border border-emerald-300 bg-emerald-50/40 rounded-xs p-3 space-y-3">
          <div className="flex items-center justify-between pb-1.5 border-b border-emerald-200/70">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span className="font-bold text-xs text-emerald-900 uppercase tracking-wide">
                {t('operations.responseActive')}
              </span>
            </div>
            <span className="font-mono text-[9px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-1.5 py-0.2 rounded-xs">
              ✓ DIVERSION ACTIVE
            </span>
          </div>

          <div className="space-y-1 text-[11px] text-slate-700">
            <div className="font-mono font-bold text-slate-900">DIV-R-8842</div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Alternative corridor:</span>
              <strong className="text-slate-800">JM Road → Shivaji Road</strong>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Traffic:</span>
              <span className="font-semibold text-emerald-700 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>Stabilizing</span>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Transit:</span>
              <span className="font-semibold text-blue-700">Re-routing</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Emergency Access:</span>
              <span className="font-semibold text-emerald-700">Maintained</span>
            </div>
          </div>

          {/* Action Recorded Section */}
          <div className="p-2 bg-white/80 border border-emerald-200 rounded-xs text-[11px] flex items-center justify-between">
            <div>
              <span className="text-[9px] uppercase font-bold text-slate-400 block">{t('operations.actionRecorded')}</span>
              <span className="font-semibold text-slate-800">{t('operations.operator')}</span>
            </div>
            <span className="font-mono text-slate-600 font-medium text-xs">
              {actionTimestamp || "23:12 IST"}
            </span>
          </div>
        </div>
      )}

    </div>
  );
}
