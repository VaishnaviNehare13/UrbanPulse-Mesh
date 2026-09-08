import React from 'react';
import { ANALYTICS_DATA } from '../../data/simulatedTelemetry';

export default function AnalyticsPanel() {
  const { incidentTrend, serviceReliability, corridorSpeedAverages } = ANALYTICS_DATA;
  const maxIncidents = Math.max(...incidentTrend.map(d => d.incidents));

  return (
    <div className="flex-1 bg-slate-50 overflow-y-auto p-6 space-y-5 select-none font-sans">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div>
          <h2 className="text-base font-bold text-slate-900 tracking-tight">
            MUNICIPAL ANALYTICS & OPERATIONAL TRENDS
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Pune Urban Infrastructure & Transit Corridor Performance
          </p>
        </div>
        <span className="text-[10px] font-semibold text-slate-500 bg-white border border-slate-300 px-2.5 py-1 rounded">
          SIMULATED ANALYTICS
        </span>
      </div>

      {/* Traffic Performance Summary */}
      <div className="bg-white border border-slate-200 rounded p-4 space-y-2">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          TRAFFIC PERFORMANCE • LAST 24 HOURS
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1 text-xs">
          <div>
            <span className="text-slate-500 text-[11px] block">Average Corridor Speed</span>
            <span className="text-base font-bold text-slate-900">32 km/h</span>
          </div>
          <div>
            <span className="text-slate-500 text-[11px] block">Peak Congestion Window</span>
            <span className="text-base font-bold text-slate-900">18:00 – 20:00</span>
          </div>
          <div>
            <span className="text-slate-500 text-[11px] block">Active Incident Resolution Time</span>
            <span className="text-base font-bold text-slate-900">4.8 min average</span>
          </div>
        </div>
      </div>

      {/* Grid: 7-Day Trend + Service Availability */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* Incident Volume (Restrained Bar Visualizer) */}
        <div className="bg-white border border-slate-200 rounded p-4 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                7-Day Incident Volume
              </h3>
              <p className="text-[11px] text-slate-500">Reported civic & traffic events</p>
            </div>
            <span className="text-[11px] font-mono text-slate-600">Total: 73</span>
          </div>

          <div className="h-36 flex items-end justify-between pt-4 px-2 gap-2 border-b border-slate-100 pb-2">
            {incidentTrend.map((item) => {
              const heightPct = (item.incidents / maxIncidents) * 100;
              return (
                <div key={item.day} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                  <span className="text-[10px] font-mono text-slate-500">{item.incidents}</span>
                  <div className="w-full max-w-[20px] bg-slate-100 rounded-t overflow-hidden flex flex-col justify-end h-full">
                    <div 
                      className="bg-slate-700 rounded-t w-full"
                      style={{ height: `${heightPct}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1">{item.day}</span>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <span>Weekly Resolution Rate: <strong className="text-slate-800">98.6%</strong></span>
            <span>Unmitigated Escalations: <strong className="text-slate-800">0</strong></span>
          </div>
        </div>

        {/* Service Availability Matrix */}
        <div className="bg-white border border-slate-200 rounded p-4 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Service Reliability (7-Day)
              </h3>
              <p className="text-[11px] text-slate-500">Simulated availability across 6 municipal domains</p>
            </div>
            <span className="text-[11px] font-mono font-semibold text-emerald-700">97.8% Global</span>
          </div>

          <div className="space-y-2">
            {serviceReliability.map((svc) => (
              <div key={svc.service} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-medium">{svc.service}</span>
                  <span className="font-mono text-slate-800">{svc.uptime}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-slate-700 h-full rounded-full"
                    style={{ width: `${svc.uptime}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Corridor Benchmark Table */}
      <div className="bg-white border border-slate-200 rounded p-4 space-y-3">
        <div className="pb-1 border-b border-slate-100">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Key Transit Corridors — Velocity Matrix
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {corridorSpeedAverages.map((cor) => {
            const isSlow = cor.speed < cor.baseline * 0.6;
            return (
              <div key={cor.corridor} className="border border-slate-200 rounded p-2.5 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800">{cor.corridor}</span>
                  <span className={`text-[10px] font-medium px-1.5 py-0.2 rounded ${
                    isSlow ? 'bg-red-50 text-red-700' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {isSlow ? 'Slow' : 'Nominal'}
                  </span>
                </div>
                <div className="flex items-baseline justify-between text-xs pt-0.5">
                  <span className="text-slate-500 text-[11px]">Current Speed:</span>
                  <strong className="font-mono text-slate-800">{cor.speed} km/h</strong>
                </div>
                <div className="flex items-baseline justify-between text-[10px] text-slate-400">
                  <span>Baseline:</span>
                  <span>{cor.baseline} km/h</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
