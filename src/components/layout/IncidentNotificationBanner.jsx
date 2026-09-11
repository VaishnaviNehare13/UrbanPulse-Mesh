import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { useTranslation } from '../../i18n';

export default function IncidentNotificationBanner({
  activeIncident,
  isResolved,
  onInspect
}) {
  const { t } = useTranslation();

  // Current notification payload: null | { type: 'incident', incident: ... } | { type: 'diversion' }
  const [notification, setNotification] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Tracking refs to prevent duplicate notification loops during the application lifecycle
  const shownIncidentsRef = useRef(new Set());
  const shownDiversionRef = useRef(false);
  const prevResolvedRef = useRef(isResolved);
  const timerRef = useRef(null);

  const startDismissTimer = (durationMs) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      triggerClose();
    }, durationMs);
  };

  const triggerClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      setNotification(null);
    }, 300); // 300ms smooth exit transition
  };

  // 1. Transient notification for new/active incident (5–7s, set to 6000ms)
  useEffect(() => {
    if (activeIncident && !isResolved) {
      const incidentId = activeIncident.id || 'UP-1024';
      if (!shownIncidentsRef.current.has(incidentId)) {
        shownIncidentsRef.current.add(incidentId);

        setNotification({
          type: 'incident',
          incident: activeIncident
        });
        setIsClosing(false);
        setIsVisible(true);

        startDismissTimer(6000);
      }
    }
  }, [activeIncident, isResolved]);

  // 2. Transient notification for applied diversion (4–5s, set to 4500ms)
  useEffect(() => {
    if (isResolved && !prevResolvedRef.current) {
      if (!shownDiversionRef.current) {
        shownDiversionRef.current = true;

        setNotification({
          type: 'diversion'
        });
        setIsClosing(false);
        setIsVisible(true);

        startDismissTimer(4500);
      }
    }
    prevResolvedRef.current = isResolved;
  }, [isResolved]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleManualDismiss = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    triggerClose();
  };

  const handleInspectClick = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    triggerClose();
    if (onInspect) {
      onInspect(notification?.incident || activeIncident);
    }
  };

  if (!isVisible || !notification) return null;

  return (
    <aside
      className={`fixed top-16 right-3 sm:right-6 z-50 transition-all duration-300 ease-out max-w-sm sm:max-w-md w-[calc(100vw-1.5rem)] sm:w-auto ${
        isClosing
          ? 'opacity-0 -translate-y-2 pointer-events-none'
          : 'opacity-100 translate-y-0'
      }`}
      role="alert"
      aria-live="assertive"
    >
      {notification.type === 'incident' && (
        <div className="bg-white border border-slate-200 border-l-4 border-l-red-600 rounded shadow-md p-3 select-none text-slate-900 font-sans">
          {/* Header Row: Dot + Label + Incident ID + Close Button */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center space-x-2 min-w-0">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200/80 px-1.5 py-0.5 rounded-xs shrink-0">
                {t('alerts.activeIncident')}
              </span>
              <span className="font-mono text-xs font-bold text-slate-800 shrink-0">
                {notification.incident?.id || 'UP-1024'}
              </span>
            </div>

            {/* Subtle Dismiss Button */}
            <button
              onClick={handleManualDismiss}
              title={t('alerts.dismiss')}
              aria-label={t('alerts.dismiss')}
              className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-0.5 rounded transition-colors cursor-pointer shrink-0"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Incident Description */}
          <div className="mt-1.5 text-xs font-semibold text-slate-800 leading-snug">
            {notification.incident?.title || 'Multi-Vehicle Collision & Transit Stoppage'}
          </div>

          {/* Location */}
          <div className="text-[11px] text-slate-500 mt-0.5 truncate">
            {notification.incident?.locationName || 'FC Road near Goodluck Chowk'}
          </div>

          {/* Action Row */}
          <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[10px] text-slate-400 font-mono">
              {notification.incident?.time ? `${t('alerts.reportedAt')}: ${notification.incident.time}` : 'Pune Traffic CAD'}
            </span>

            <button
              onClick={handleInspectClick}
              className="bg-red-700 hover:bg-red-800 active:bg-red-900 text-white font-semibold text-[11px] px-2.5 py-1 rounded-xs transition-colors flex items-center space-x-1 cursor-pointer shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-500"
            >
              <span>{t('alerts.inspect')}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}

      {notification.type === 'diversion' && (
        <div className="bg-white border border-slate-200 border-l-4 border-l-emerald-600 rounded shadow-md p-3 select-none text-slate-900 font-sans">
          {/* Header Row: Check + Label + Rule ID + Close Button */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center space-x-2 min-w-0">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-1.5 py-0.5 rounded-xs shrink-0">
                {t('alerts.resolved')}
              </span>
              <span className="font-mono text-xs font-bold text-slate-800 shrink-0">
                DIV-R-8842
              </span>
            </div>

            {/* Subtle Dismiss Button */}
            <button
              onClick={handleManualDismiss}
              title={t('alerts.dismiss')}
              aria-label={t('alerts.dismiss')}
              className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-0.5 rounded transition-colors cursor-pointer shrink-0"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Route Description */}
          <div className="mt-1.5 text-xs font-semibold text-slate-800 leading-snug">
            FC Road → JM Road → Shivaji Road
          </div>

          {/* Stabilizing Subtext */}
          <div className="text-[11px] text-slate-500 mt-1 flex items-center space-x-1.5">
            <span>{t('alerts.trafficStabilizing')}</span>
            <span>•</span>
            <span>{t('alerts.transitRerouting')}</span>
          </div>
        </div>
      )}
    </aside>
  );
}
