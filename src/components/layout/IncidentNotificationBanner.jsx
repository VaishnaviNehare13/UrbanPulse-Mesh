import React from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { useTranslation } from '../../i18n';

export default function IncidentNotificationBanner({
  activeIncident,
  isResolved,
  onInspect
}) {
  const { t } = useTranslation();

  if (!activeIncident && !isResolved) return null;

  return (
    <div 
      className={`w-full px-4 py-1.5 text-xs select-none transition-colors border-b z-30 flex items-center justify-between font-sans ${
        isResolved 
          ? 'bg-emerald-50/90 border-emerald-200 text-emerald-900' 
          : 'bg-red-50/90 border-red-200 text-red-900'
      }`}
      role="alert"
    >
      <div className="flex items-center space-x-2.5 overflow-hidden">
        {isResolved ? (
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
        ) : (
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </span>
        )}

        <div className="flex items-center space-x-2 truncate">
          <span className={`font-mono text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-xs border ${
            isResolved 
              ? 'bg-emerald-100 text-emerald-800 border-emerald-300' 
              : 'bg-red-100 text-red-800 border-red-300'
          }`}>
            {isResolved ? t('alerts.resolved') : t('alerts.activeIncident')}
          </span>

          <span className="font-semibold text-xs text-slate-900 truncate">
            {isResolved 
              ? 'DIV-R-8842 · FC Road → JM Road → Shivaji Road' 
              : `${activeIncident?.id || 'UP-1024'} · ${activeIncident?.title || 'Multi-Vehicle Collision & Transit Stoppage'}`}
          </span>

          <span className="text-[11px] text-slate-600 hidden md:inline truncate">
            {isResolved 
              ? `• ${t('alerts.resolvedSubtext')}` 
              : `• ${activeIncident?.locationName || 'FC Road near Goodluck Chowk'}`}
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-3 shrink-0 ml-3">
        {!isResolved && onInspect && (
          <button
            onClick={onInspect}
            className="bg-red-700 hover:bg-red-800 active:bg-red-900 text-white font-semibold text-[11px] px-2.5 py-0.5 rounded-xs transition-colors flex items-center space-x-1 cursor-pointer shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-500"
          >
            <span>{t('alerts.inspect')}</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        )}
        {isResolved && (
          <span className="text-[10px] font-medium text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded-xs border border-emerald-200">
            {t('operations.protocolStabilizing')}
          </span>
        )}
      </div>
    </div>
  );
}
