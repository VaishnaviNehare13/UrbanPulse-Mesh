import React, { useState } from 'react';
import { ChevronRight, ArrowLeft, ShieldCheck, Eye, EyeOff, Lock, UserCheck } from 'lucide-react';
import { useTranslation } from '../../i18n';

export default function LoginView({ onLogin, onBackToHome }) {
  const { language, setLanguage, t } = useTranslation();
  const [officerId, setOfficerId] = useState('PUNE-ADMIN-01');
  const [password, setPassword] = useState('pune-mesh-2026');
  const [role, setRole] = useState('City Administrator');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!officerId.trim()) {
      setError(t('auth.errorId'));
      return;
    }
    if (!password.trim()) {
      setError(t('auth.errorPassword'));
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin({
        id: officerId,
        name: role === 'City Administrator' ? 'Dr. S. Kulkarni' : 'Officer V. Deshmukh',
        role: role
      });
    }, 300);
  };

  const handleQuickDemoFill = (demoRole) => {
    if (demoRole === 'admin') {
      setOfficerId('PUNE-ADMIN-01');
      setRole('City Administrator');
    } else if (demoRole === 'traffic') {
      setOfficerId('PUNE-TRAF-04');
      setRole('Traffic Operations Controller');
    } else {
      setOfficerId('PUNE-EMRG-09');
      setRole('Disaster & Emergency Lead');
    }
    setPassword('pune-mesh-2026');
    setError('');
  };

  return (
    <div className="min-h-screen w-screen bg-[#F7F8FA] text-[#172033] font-sans flex flex-col justify-center items-center p-4 sm:p-6 select-none">
      
      {/* Top Language Toggle on Login Screen */}
      <div className="w-full max-w-4xl flex justify-end mb-2">
        <div className="flex items-center bg-white border border-[#D9E0E8] rounded p-0.5 text-[11px] font-medium text-slate-600 shadow-2xs">
          <button
            onClick={() => setLanguage('en')}
            className={`px-2 py-0.5 rounded-xs transition-colors cursor-pointer ${
              language === 'en' ? 'bg-[#0F1B2D] font-bold text-white shadow-2xs' : 'hover:text-slate-900'
            }`}
          >
            EN
          </button>
          <span className="text-slate-300 px-0.5">|</span>
          <button
            onClick={() => setLanguage('hi')}
            className={`px-2 py-0.5 rounded-xs transition-colors cursor-pointer ${
              language === 'hi' ? 'bg-[#0F1B2D] font-bold text-white shadow-2xs' : 'hover:text-slate-900'
            }`}
          >
            हिं
          </button>
          <span className="text-slate-300 px-0.5">|</span>
          <button
            onClick={() => setLanguage('mr')}
            className={`px-2 py-0.5 rounded-xs transition-colors cursor-pointer ${
              language === 'mr' ? 'bg-[#0F1B2D] font-bold text-white shadow-2xs' : 'hover:text-slate-900'
            }`}
          >
            मर
          </button>
        </div>
      </div>

      {/* Split Institutional Card Container */}
      <div className="w-full max-w-4xl bg-white rounded border border-[#D9E0E8] shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[480px]">
        
        {/* 12.1 LEFT SIDE (45% on desktop): Visual & Institutional Context */}
        <div className="md:col-span-5 bg-[#0F1B2D] text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          
          {/* Subtle Institutional Pune GIS SVG Texture Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-10 select-none flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 600 600" fill="none" stroke="#FFFFFF" strokeWidth="1.2">
              <path d="M 50,300 Q 200,240 300,320 T 550,280" stroke="#2563A6" strokeWidth="6" fill="none" opacity="0.6" />
              <line x1="100" y1="50" x2="500" y2="550" strokeWidth="1.5" />
              <line x1="50" y1="400" x2="550" y2="150" strokeWidth="1.5" />
              <circle cx="300" cy="300" r="100" strokeDasharray="3 3" />
              <circle cx="200" cy="220" r="80" strokeDasharray="3 3" />
              <rect x="290" y="290" width="20" height="20" />
            </svg>
          </div>

          <div className="relative z-10 space-y-4">
            {onBackToHome && (
              <button
                onClick={onBackToHome}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-medium transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{t('app.backToHome')}</span>
              </button>
            )}

            <div className="flex items-center space-x-3 pt-2">
              <div className="w-8 h-8 rounded bg-[#2563A6] flex items-center justify-center text-white font-bold text-xs tracking-tight shadow-xs">
                UP
              </div>
              <div>
                <h1 className="text-sm font-bold tracking-tight text-white leading-none">
                  {t('app.title')}
                </h1>
                <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">
                  {t('app.subtitle')}
                </span>
              </div>
            </div>

            <div className="pt-4 space-y-2 text-xs text-slate-300 leading-relaxed font-normal">
              <p>
                {t('auth.leftDesc')}
              </p>
              <div className="p-2.5 rounded bg-slate-800/80 border border-slate-700/80 text-[11px] space-y-1">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t('auth.securedNode')}</span>
                </div>
                <div className="text-slate-400 text-[10px]">
                  {t('auth.simulatedModeNotice')}
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-6 text-[10px] text-slate-400 font-mono flex items-center justify-between border-t border-slate-800">
            <span>{t('app.puneMaharashtra')}</span>
            <span>{t('app.academicPrototype')}</span>
          </div>

        </div>

        {/* 12.2 RIGHT SIDE (55% on desktop): Secure Access Login Form */}
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
          
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
                {t('auth.authBadge')}
              </span>
              <h2 className="text-base font-bold text-[#0F1B2D] tracking-tight mt-0.5">
                {t('auth.title')}
              </h2>
              <p className="text-xs text-[#64748B] mt-0.5">
                {t('auth.subtitle')}
              </p>
            </div>

            {error && (
              <div className="p-2.5 bg-red-50 border border-red-200 rounded text-xs text-red-700 font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-[#172033] block">
                  {t('auth.officerIdLabel')}
                </label>
                <input
                  type="text"
                  value={officerId}
                  onChange={(e) => setOfficerId(e.target.value)}
                  placeholder={t('auth.officerIdPlaceholder')}
                  required
                  className="w-full px-3 py-1.5 text-xs font-mono bg-[#F7F8FA] border border-[#D9E0E8] rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563A6] text-[#172033] placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-semibold text-[#172033]">
                    {t('auth.passwordLabel')}
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-[10px] text-[#64748B] hover:text-[#0F1B2D] flex items-center gap-1 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                    <span>{showPassword ? t('auth.hidePassword') : t('auth.showPassword')}</span>
                  </button>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t('auth.passwordPlaceholder')}
                  required
                  className="w-full px-3 py-1.5 text-xs font-mono bg-[#F7F8FA] border border-[#D9E0E8] rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563A6] text-[#172033]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-[#172033] block">
                  {t('auth.roleLabel')}
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs bg-[#F7F8FA] border border-[#D9E0E8] rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563A6] text-[#172033]"
                >
                  <option value="City Administrator">{t('auth.roles.admin')}</option>
                  <option value="Traffic Controller">{t('auth.roles.traffic')}</option>
                  <option value="Emergency Coordinator">{t('auth.roles.emergency')}</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#0F1B2D] hover:bg-[#172033] active:bg-black text-white font-semibold text-xs py-2.5 px-3 rounded transition-colors flex items-center justify-center space-x-1.5 cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2563A6] mt-2"
              >
                <span>{isLoading ? t('auth.authenticatingBtn') : t('auth.signInBtn')}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

            </form>

            {/* Quick Demo Pre-fill options */}
            <div className="pt-2 border-t border-[#D9E0E8] space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block">
                {t('auth.demoShortcutsLabel')}
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => handleQuickDemoFill('admin')}
                  className="text-[10px] bg-[#F1F4F7] hover:bg-[#EAF2FA] text-[#0F1B2D] px-2 py-1 rounded border border-[#D9E0E8] transition-colors cursor-pointer"
                >
                  {t('auth.shortcuts.admin')}
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickDemoFill('traffic')}
                  className="text-[10px] bg-[#F1F4F7] hover:bg-[#EAF2FA] text-[#0F1B2D] px-2 py-1 rounded border border-[#D9E0E8] transition-colors cursor-pointer"
                >
                  {t('auth.shortcuts.traffic')}
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickDemoFill('emergency')}
                  className="text-[10px] bg-[#F1F4F7] hover:bg-[#EAF2FA] text-[#0F1B2D] px-2 py-1 rounded border border-[#D9E0E8] transition-colors cursor-pointer"
                >
                  {t('auth.shortcuts.emergency')}
                </button>
              </div>
            </div>

          </div>

          <div className="pt-4 text-center text-[10px] text-[#64748B] font-mono border-t border-[#D9E0E8]">
            {t('auth.simulatedAccessFooter')}
          </div>

        </div>

      </div>

    </div>
  );
}
