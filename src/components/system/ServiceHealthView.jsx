import React from 'react';

export default function ServiceHealthView() {
  const serviceMatrix = [
    { service: "Traffic", status: "Operational", latency: "42 ms", uptime: "99.8%" },
    { service: "Emergency", status: "Operational", latency: "38 ms", uptime: "100.0%" },
    { service: "Transit", status: "Operational", latency: "51 ms", uptime: "99.4%" },
    { service: "Water", status: "Operational", latency: "46 ms", uptime: "99.9%" },
    { service: "Power", status: "Operational", latency: "49 ms", uptime: "98.9%" },
    { service: "Waste", status: "Operational", latency: "44 ms", uptime: "99.2%" }
  ];

  return (
    <div className="flex-1 bg-slate-50 overflow-y-auto p-6 space-y-5 select-none font-sans">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div>
          <h2 className="text-base font-bold text-slate-900 tracking-tight">
            SERVICE HEALTH & OPERATIONAL MATRIX
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Ingestion Telemetry and Operational Status for Pune Municipal Node
          </p>
        </div>
        <span className="text-[10px] font-semibold text-slate-500 bg-white border border-slate-300 px-2.5 py-1 rounded">
          SIMULATED SERVICE TELEMETRY
        </span>
      </div>

      {/* Operational Matrix Table */}
      <div className="bg-white border border-slate-200 rounded overflow-hidden max-w-3xl">
        <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
          <span className="font-bold text-xs text-slate-800 uppercase tracking-wider">
            Municipal Services (6 Nodes)
          </span>
          <span className="text-[11px] text-slate-500">Telemetry Status: Synchronized</span>
        </div>

        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
            <tr>
              <th className="py-2.5 px-4">SERVICE</th>
              <th className="py-2.5 px-4">STATUS</th>
              <th className="py-2.5 px-4">LATENCY</th>
              <th className="py-2.5 px-4 text-right">UPTIME</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {serviceMatrix.map((item) => (
              <tr key={item.service} className="hover:bg-slate-50/70 transition-colors">
                <td className="py-2.5 px-4 font-semibold text-slate-900">
                  {item.service}
                </td>
                <td className="py-2.5 px-4">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    <span>{item.status}</span>
                  </span>
                </td>
                <td className="py-2.5 px-4 font-mono text-slate-600">
                  {item.latency}
                </td>
                <td className="py-2.5 px-4 font-mono text-slate-600 text-right">
                  {item.uptime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-[11px] text-slate-400 max-w-3xl">
        * Simulated service telemetry generated for academic system design demonstration. No physical IoT hardware monitoring implied.
      </div>

    </div>
  );
}
