import React, { useState } from 'react';
import { SIMULATION_SCENARIOS } from '../../data/simulatedTelemetry';
import { Play, RotateCcw, Check, Sparkles } from 'lucide-react';

export default function WhatIfPanel({ onFocusCoordinates }) {
  const [selectedScenarioId, setSelectedScenarioId] = useState(SIMULATION_SCENARIOS[0].id);
  const [isSimulated, setIsSimulated] = useState(false);

  const scenario = SIMULATION_SCENARIOS.find(s => s.id === selectedScenarioId) || SIMULATION_SCENARIOS[0];

  const handleRunSimulation = () => {
    setIsSimulated(true);
    if (onFocusCoordinates && scenario.coordinates) {
      onFocusCoordinates(scenario.coordinates);
    }
  };

  const handleResetSimulation = () => {
    setIsSimulated(false);
  };

  return (
    <div className="flex-1 bg-slate-50 overflow-y-auto p-6 space-y-5 select-none font-sans">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div>
          <h2 className="text-base font-bold text-slate-900 tracking-tight">
            WHAT-IF ANALYSIS & DECISION SUPPORT
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Simulate cross-service coordinated interventions across Pune Municipal Area
          </p>
        </div>
        <span className="text-[10px] font-semibold text-slate-500 bg-white border border-slate-300 px-2.5 py-1 rounded">
          SIMULATED PREDICTIVE MODEL
        </span>
      </div>

      {/* Scenario Selector Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {SIMULATION_SCENARIOS.map((sc) => {
          const isSelected = sc.id === selectedScenarioId;
          return (
            <button
              key={sc.id}
              onClick={() => {
                setSelectedScenarioId(sc.id);
                setIsSimulated(false);
              }}
              className={`text-left p-3 rounded border transition-colors ${
                isSelected
                  ? 'bg-white border-slate-900 ring-1 ring-slate-900'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-[10px] font-bold text-slate-600 uppercase">
                  {sc.category}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">{sc.location}</span>
              </div>
              <h3 className="font-semibold text-slate-900 text-xs">{sc.title}</h3>
            </button>
          );
        })}
      </div>

      {/* Main Analysis Workbench */}
      <div className="bg-white border border-slate-200 rounded p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Scenario</div>
            <h3 className="text-sm font-bold text-slate-900">{scenario.title}</h3>
            <p className="text-xs text-slate-600 mt-0.5">{scenario.triggerDescription}</p>
          </div>

          <div className="shrink-0">
            {!isSimulated ? (
              <button
                onClick={handleRunSimulation}
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs py-2 px-4 rounded transition-colors flex items-center space-x-2 cursor-pointer shadow-sm"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>RUN SCENARIO</span>
              </button>
            ) : (
              <button
                onClick={handleResetSimulation}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs py-2 px-4 rounded border border-slate-200 transition-colors flex items-center space-x-2 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>RESET</span>
              </button>
            )}
          </div>
        </div>

        {/* Current State & Coordinated Protocol Summary */}
        <div className="bg-slate-50 border border-slate-200 rounded p-3 text-xs space-y-1">
          <div className="font-bold text-slate-700 text-[11px] uppercase tracking-wider">
            Simulated Coordinated Protocol
          </div>
          <p className="text-slate-600 leading-relaxed text-[11px]">
            {scenario.actionSummary}
          </p>
        </div>

        {/* Clean Before / After Impact Comparison */}
        <div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
            RESULT COMPARISON
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* WITHOUT INTERVENTION */}
            <div className="p-3.5 rounded border border-slate-200 bg-white space-y-2.5">
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  Without Intervention
                </span>
                <span className="text-[10px] font-mono text-red-700 font-semibold bg-red-50 px-1.5 py-0.2 rounded">
                  UNMITIGATED
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {scenario.beforeState.travelTimeMin && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Traffic Delay:</span>
                    <strong className="text-red-700 font-mono text-sm">{scenario.beforeState.travelTimeMin} min delay</strong>
                  </div>
                )}
                {scenario.beforeState.congestionPct && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Corridor Congestion:</span>
                    <strong className="text-red-700 font-mono text-sm">{scenario.beforeState.congestionPct}%</strong>
                  </div>
                )}
                {scenario.beforeState.emergencyAccessDelayMin && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Emergency Access Delay:</span>
                    <strong className="text-red-700 font-mono text-sm">+{scenario.beforeState.emergencyAccessDelayMin} min</strong>
                  </div>
                )}
                {scenario.beforeState.pressureBar && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Pipeline Pressure:</span>
                    <strong className="text-red-700 font-mono text-sm">{scenario.beforeState.pressureBar} bar (Low)</strong>
                  </div>
                )}
                {scenario.beforeState.loadPct && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Transformer Load:</span>
                    <strong className="text-red-700 font-mono text-sm">{scenario.beforeState.loadPct}%</strong>
                  </div>
                )}
              </div>
            </div>

            {/* WITH COORDINATED DIVERSION */}
            <div className={`p-3.5 rounded border transition-colors ${
              isSimulated 
                ? 'border-emerald-500 bg-emerald-50/20' 
                : 'border-slate-200 bg-white'
            } space-y-2.5`}>
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  With Coordinated Response
                </span>
                <span className="text-[10px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.2 rounded">
                  OPTIMIZED
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {scenario.afterState.travelTimeMin && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Travel Delay:</span>
                    <strong className="text-emerald-700 font-mono text-sm">{scenario.afterState.travelTimeMin} min delay</strong>
                  </div>
                )}
                {scenario.afterState.congestionPct && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Transit Impact:</span>
                    <strong className="text-emerald-700 font-mono text-sm">Reduced</strong>
                  </div>
                )}
                {scenario.afterState.emergencyAccessDelayMin && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Emergency Access:</span>
                    <strong className="text-emerald-700 font-mono text-sm">Maintained</strong>
                  </div>
                )}
                {scenario.afterState.pressureBar && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Pipeline Pressure:</span>
                    <strong className="text-emerald-700 font-mono text-sm">{scenario.afterState.pressureBar} bar (Nominal)</strong>
                  </div>
                )}
                {scenario.afterState.loadPct && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Transformer Load:</span>
                    <strong className="text-emerald-700 font-mono text-sm">{scenario.afterState.loadPct}%</strong>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
