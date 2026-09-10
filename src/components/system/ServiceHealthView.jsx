import React from 'react';

export default function ServiceHealthView() {
  const serviceMatrix = [
    { service: "Traffic", status: "Operational", latency: "42 ms", uptime: "99.8%", lastEvent: "Signal offset sync (JM Road)" },
    { service: "Emergency", status: "Operational", latency: "38 ms", uptime: "100.0%", lastEvent: "CAD CAD dispatch active" },
    { service: "Transit", status: "Operational", latency: "51 ms", uptime: "99.4%", lastEvent: "PMPML telemetry sync" },
    { service: "Water", status: "Operational", latency: "46 ms", uptime: "99.9%", lastEvent: "Parvati bulk pressure nominal" },
    { service: "Power", status: "Operational", latency: "49 ms", uptime: "98.9%", lastEvent: "Rasta Peth load balancing" },
    { service: "Waste", status: "Operational", latency: "44 ms", uptime: "99.2%", lastEvent: "SWM logistics dispatch ok" }
  ];

  return (
    <div className="flex-1 bg-[#F7F8FA] overflow-y-auto p-4 sm:p-6 space-y-5 select-none font-sans text-[#172033]">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#D9E0E8]">
        <div>
          <h2 className="text-base font-bold text-[#0F1B2D] tracking-tight">
            SERVICE HEALTH & OPERATIONAL MATRIX
          </h2>
          <p className="text-xs text-[#64748B] font-medium">
            Ingestion Telemetry and Operational Status for Pune Municipal Node
          </p>
        </div>
        <span className="text-[10px] font-semibold text-[#64748B] bg-white border border-[#D9E0E8] px-2.5 py-1 rounded">
          SIMULATED SERVICE TELEMETRY
        </span>
      </div>

      {/* Operational Matrix Table */}
      <div className="bg-white border border-[#D9E0E8] rounded overflow-hidden max-w-4xl">
        <div className="px-4 py-3 border-b border-[#D9E0E8] flex items-center justify-between bg-[#F7F8FA]/60">
          <span className="font-bold text-xs text-[#0F1B2D] uppercase tracking-wider">
            Municipal Services (6 Nodes)
          </span>
          <span className="text-[11px] text-[#64748B] font-mono">Telemetry Status: Synchronized</span>
        </div>

        <table className="w-full text-left text-xs">
          <thead className="bg-[#F7F8FA] text-[#64748B] font-semibold border-b border-[#D9E0E8]">
            <tr>
              <th className="py-2.5 px-4">SERVICE</th>
              <th className="py-2.5 px-4">STATUS</th>
              <th className="py-2.5 px-4">LATENCY</th>
              <th className="py-2.5 px-4">UPTIME</th>
              <th className="py-2.5 px-4 text-right">LAST EVENT</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-[#172033]">
            {serviceMatrix.map((item) => (
              <tr key={item.service} className="hover:bg-[#F7F8FA]/70 transition-colors">
                <td className="py-2.5 px-4 font-semibold text-[#0F1B2D]">
                  {item.service}
                </td>
                <td className="py-2.5 px-4">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#16856B]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16856B]"></span>
                    <span>{item.status}</span>
                  </span>
                </td>
                <td className="py-2.5 px-4 font-mono text-[#64748B]">
                  {item.latency}
                </td>
                <td className="py-2.5 px-4 font-mono text-[#64748B]">
                  {item.uptime}
                </td>
                <td className="py-2.5 px-4 text-[11px] text-[#64748B] text-right font-mono">
                  {item.lastEvent}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-[11px] text-[#64748B] max-w-4xl font-mono">
        * Simulated service telemetry generated for academic system design demonstration. No physical IoT hardware monitoring implied.
      </div>

    </div>
  );
}

