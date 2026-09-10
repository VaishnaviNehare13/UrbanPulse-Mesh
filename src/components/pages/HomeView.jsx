import React from 'react';
import { 
  Car, 
  ShieldAlert, 
  Bus, 
  Droplets, 
  Zap, 
  Recycle, 
  ArrowRight,
  Shield,
  Layers,
  Activity,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { useTranslation } from '../../i18n';

export default function HomeView({ onEnterOperations, onLoginClick }) {
  const { language, setLanguage, t } = useTranslation();

  const domains = [
    {
      id: 'traffic',
      name: t('servicesList.traffic'),
      icon: Car,
      desc: t('home.domains.traffic')
    },
    {
      id: 'emergency',
      name: t('servicesList.emergency'),
      icon: ShieldAlert,
      desc: t('home.domains.emergency')
    },
    {
      id: 'transit',
      name: t('servicesList.transit'),
      icon: Bus,
      desc: t('home.domains.transit')
    },
    {
      id: 'water',
      name: t('servicesList.water'),
      icon: Droplets,
      desc: t('home.domains.water')
    },
    {
      id: 'power',
      name: t('servicesList.power'),
      icon: Zap,
      desc: t('home.domains.power')
    },
    {
      id: 'waste',
      name: t('servicesList.waste'),
      icon: Recycle,
      desc: t('home.domains.waste')
    }
  ];

  const workflowSteps = [
    { step: '01', title: t('home.workflow.s1Title'), desc: t('home.workflow.s1Desc') },
    { step: '02', title: t('home.workflow.s2Title'), desc: t('home.workflow.s2Desc') },
    { step: '03', title: t('home.workflow.s3Title'), desc: t('home.workflow.s3Desc') },
    { step: '04', title: t('home.workflow.s4Title'), desc: t('home.workflow.s4Desc') },
    { step: '05', title: t('home.workflow.s5Title'), desc: t('home.workflow.s5Desc') }
  ];

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#172033] font-sans flex flex-col selection:bg-[#EAF2FA] selection:text-[#2563A6]">
      
      {/* 11.1 HOME HEADER */}
      <header className="h-14 bg-white border-b border-[#D9E0E8] px-6 lg:px-12 flex items-center justify-between shrink-0 z-20">
        <div className="flex items-center space-x-3.5">
          <div className="w-7 h-7 rounded bg-[#0F1B2D] flex items-center justify-center text-white font-bold text-xs tracking-tight shadow-xs">
            UP
          </div>
          <div>
            <div className="flex items-baseline space-x-2">
              <span className="text-sm font-bold text-[#0F1B2D] tracking-tight leading-none">
                {t('app.title')}
              </span>
              <span className="text-[9px] font-semibold text-[#64748B] uppercase tracking-widest hidden sm:inline">
                {t('app.subtitle')}
              </span>
            </div>
            <p className="text-[11px] text-[#64748B] font-medium leading-none mt-0.5">
              {t('app.location')}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* Language Selector */}
          <div className="flex items-center bg-slate-100 border border-slate-200 rounded p-0.5 text-[11px] font-medium text-slate-600">
            <button
              onClick={() => setLanguage('en')}
              className={`px-1.5 py-0.5 rounded-xs transition-colors cursor-pointer ${
                language === 'en' ? 'bg-white font-bold text-slate-900 shadow-2xs' : 'hover:text-slate-900'
              }`}
            >
              EN
            </button>
            <span className="text-slate-300 px-0.5">|</span>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-1.5 py-0.5 rounded-xs transition-colors cursor-pointer ${
                language === 'hi' ? 'bg-white font-bold text-slate-900 shadow-2xs' : 'hover:text-slate-900'
              }`}
            >
              हिं
            </button>
            <span className="text-slate-300 px-0.5">|</span>
            <button
              onClick={() => setLanguage('mr')}
              className={`px-1.5 py-0.5 rounded-xs transition-colors cursor-pointer ${
                language === 'mr' ? 'bg-white font-bold text-slate-900 shadow-2xs' : 'hover:text-slate-900'
              }`}
            >
              मर
            </button>
          </div>

          <button
            onClick={onLoginClick || onEnterOperations}
            className="bg-[#2563A6] hover:bg-[#1d4f85] text-white text-xs font-semibold py-1.5 px-3.5 rounded transition-colors flex items-center space-x-1.5 cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2563A6]"
          >
            <span>{t('app.accessPlatform')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-white border-b border-[#D9E0E8] py-14 px-6 lg:px-12 overflow-hidden">
        
        {/* Subtle Institutional Pune GIS Texture Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] select-none flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" stroke="#0F1B2D" strokeWidth="1.5">
            <path d="M 50,320 Q 300,280 500,340 T 900,300 T 1150,330" stroke="#2563A6" strokeWidth="8" fill="none" opacity="0.3" />
            <path d="M 50,320 Q 300,280 500,340 T 900,300 T 1150,330" stroke="#2563A6" strokeWidth="2" strokeDasharray="6 6" fill="none" />
            <line x1="200" y1="100" x2="800" y2="500" strokeWidth="2" />
            <line x1="400" y1="50" x2="600" y2="550" strokeWidth="1.8" />
            <line x1="150" y1="400" x2="1050" y2="200" strokeWidth="1.5" />
            <line x1="300" y1="200" x2="900" y2="450" strokeWidth="1.2" strokeDasharray="4 4" />
            <circle cx="550" cy="310" r="140" strokeDasharray="3 3" />
            <circle cx="380" cy="260" r="110" strokeDasharray="3 3" />
            <circle cx="720" cy="380" r="120" strokeDasharray="3 3" />
            <rect x="540" y="300" width="16" height="16" />
            <polygon points="380,250 390,270 370,270" />
            <circle cx="720" cy="380" r="8" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-5">
          
          <div className="inline-flex items-center space-x-2 bg-[#EAF2FA] text-[#2563A6] border border-[#2563A6]/20 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563A6]"></span>
            <span>{t('home.heroBadge')}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F1B2D] tracking-tight leading-tight">
            {t('home.heroTitleLine1')} <br className="hidden sm:inline" />
            {t('home.heroTitleLine2')}
          </h1>

          <p className="text-sm sm:text-base text-[#64748B] max-w-2xl leading-relaxed font-normal">
            {t('home.heroDesc')}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              onClick={onEnterOperations}
              className="bg-[#0F1B2D] hover:bg-[#172033] active:bg-black text-white font-semibold text-xs py-2.5 px-5 rounded transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2563A6]"
            >
              <span>{t('actions.enterOperations')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="text-xs text-[#64748B] flex items-center gap-2">
              <span className="font-semibold text-[#0F1B2D]">{t('app.puneMunicipalArea')}</span>
              <span>•</span>
              <span>{t('app.puneMaharashtra')}</span>
            </div>
          </div>

          <div className="pt-1 text-[10px] text-[#64748B] font-mono">
            * {t('app.dataDisclosureNote')}
          </div>

        </div>

      </section>

      {/* MUNICIPAL DOMAINS */}
      <section className="py-10 px-6 lg:px-12 max-w-5xl mx-auto w-full space-y-4">
        <div>
          <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
            {t('home.coreDomainsLabel')}
          </span>
          <h2 className="text-base font-bold text-[#0F1B2D] tracking-tight mt-0.5">
            {t('home.municipalDomainsTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {domains.map((dom) => {
            const Icon = dom.icon;
            return (
              <div 
                key={dom.id}
                className="p-3.5 bg-white border border-[#D9E0E8] rounded hover:border-[#2563A6] transition-colors space-y-1.5 group"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="p-1.5 rounded bg-[#F1F4F7] text-[#0F1B2D] group-hover:bg-[#EAF2FA] group-hover:text-[#2563A6] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-xs text-[#0F1B2D] tracking-wide">
                    {dom.name}
                  </span>
                </div>
                <p className="text-[11px] text-[#64748B] leading-relaxed">
                  {dom.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* DECISION SUPPORT WORKFLOW */}
      <section className="py-10 px-6 lg:px-12 bg-white border-y border-[#D9E0E8]">
        <div className="max-w-5xl mx-auto w-full space-y-5">
          <div>
            <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
              {t('home.coordinationParadigmLabel')}
            </span>
            <h2 className="text-base font-bold text-[#0F1B2D] tracking-tight mt-0.5">
              {t('home.workflowTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
            {workflowSteps.map((ws, i) => (
              <div 
                key={ws.step}
                className="p-3 bg-[#F7F8FA] border border-[#D9E0E8] rounded space-y-1 relative"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-[#2563A6] font-bold">
                  <span>{ws.step}</span>
                  {i < 4 && <span className="text-[#64748B] hidden sm:inline">→</span>}
                </div>
                <div className="font-bold text-xs text-[#0F1B2D]">{ws.title}</div>
                <p className="text-[10px] text-[#64748B] leading-relaxed">
                  {ws.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-3 bg-[#EAF2FA]/70 border border-[#2563A6]/20 rounded text-xs text-[#0F1B2D] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#2563A6] shrink-0" />
              <span>{t('home.scenarioBannerPrefix')} <strong>{t('home.scenarioBannerHighlight')}</strong></span>
            </div>
            <button
              onClick={onEnterOperations}
              className="text-[#2563A6] hover:underline font-semibold text-xs shrink-0 cursor-pointer"
            >
              {t('home.launchScenario')}
            </button>
          </div>
        </div>
      </section>

      {/* HOME FOOTER */}
      <footer className="mt-auto py-6 px-6 lg:px-12 bg-[#0F1B2D] text-slate-400 text-xs border-t border-slate-800">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5 text-center sm:text-left">
            <div className="font-bold text-white tracking-wide">
              {t('app.title')}
            </div>
            <div className="text-[11px] text-slate-400">
              {t('app.subtitle')} • {t('app.location')}
            </div>
          </div>

          <div className="text-[10px] text-slate-500 font-mono text-center sm:text-right">
            <div>{t('app.academicPrototype')}</div>
            <div>{t('app.footerDisclaimer')}</div>
          </div>
        </div>
      </footer>

    </div>
  );
}
