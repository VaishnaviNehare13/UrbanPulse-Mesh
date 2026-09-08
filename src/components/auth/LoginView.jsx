import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function LoginView({ onLogin }) {
  const [officerId, setOfficerId] = useState('PUNE-ADMIN-01');
  const [password, setPassword] = useState('••••••••••••');
  const [role, setRole] = useState('City Administrator');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({
      id: officerId,
      name: role === 'City Administrator' ? 'Dr. S. Kulkarni' : 'Officer V. Deshmukh',
      role: role
    });
  };

  return (
    <div className="h-screen w-screen bg-slate-100 flex flex-col items-center justify-center p-4 font-sans select-none relative">
      
      {/* Login Card */}
      <div className="w-full max-w-sm bg-white rounded border border-slate-300 shadow-lg overflow-hidden">
        
        {/* Header */}
        <div className="p-5 bg-slate-900 text-white space-y-1">
          <div className="flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-xs tracking-tight">
              UP
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tight">URBANPULSE MESH</h1>
              <p className="text-[11px] text-slate-400">Municipal Coordination & Decision Support</p>
            </div>
          </div>
          <div className="pt-2 text-[10px] text-slate-400 border-t border-slate-800 flex items-center justify-between">
            <span>Pune, Maharashtra</span>
            <span>GIS OPERATIONS PORTAL</span>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-3.5 text-xs">
          
          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-slate-700 block">
              Officer Identification ID
            </label>
            <input
              type="text"
              value={officerId}
              onChange={(e) => setOfficerId(e.target.value)}
              required
              className="w-full px-3 py-1.5 text-xs font-mono bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-500 text-slate-800"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-slate-700 block">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-1.5 text-xs font-mono bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-500 text-slate-800"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-slate-700 block">
              Operational Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-500 text-slate-800"
            >
              <option value="City Administrator">Dr. S. Kulkarni (City Administrator)</option>
              <option value="Traffic Controller">Traffic Operations Controller</option>
              <option value="Emergency Coordinator">Disaster & Emergency Lead</option>
              <option value="GIS Analyst">Municipal GIS Analyst</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs py-2 px-3 rounded transition-colors flex items-center justify-center space-x-1 cursor-pointer mt-1"
          >
            <span>Access Operations Console</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

        </form>

        {/* Footer */}
        <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-200 text-center text-[10px] text-slate-500">
          B.Tech System Design Prototype • Simulated Telemetry
        </div>

      </div>

    </div>
  );
}
