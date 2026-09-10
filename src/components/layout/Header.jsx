import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  LogOut,
  Navigation,
  AlertTriangle,
  Building2,
  MapPin,
  X,
  Zap,
  Droplets,
  Recycle,
  Trees,
  Flame,
  Bus
} from 'lucide-react';
import { useTranslation } from '../../i18n';

export default function Header({ 
  searchQuery, 
  setSearchQuery, 
  searchResults = [], 
  onSelectSearchResult,
  user,
  onLogout
}) {
  const { language, setLanguage, t } = useTranslation();
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchContainerRef = useRef(null);

  // Flatten grouped search results for keyboard navigation
  const groupedResults = React.useMemo(() => {
    if (!searchResults || searchResults.length === 0) return {};
    return searchResults.reduce((acc, curr) => {
      const cat = curr.category || 'Other';
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(curr);
      return acc;
    }, {});
  }, [searchResults]);

  const flatResults = React.useMemo(() => {
    const list = [];
    Object.keys(groupedResults).forEach((cat) => {
      groupedResults[cat].forEach((item) => list.push(item));
    });
    return list;
  }, [groupedResults]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setShowSearchDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!showSearchDropdown || flatResults.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < flatResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : flatResults.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < flatResults.length) {
        onSelectSearchResult(flatResults[selectedIndex]);
        setShowSearchDropdown(false);
        setSelectedIndex(-1);
      } else if (flatResults.length > 0) {
        // If Enter pressed without arrows, select first item
        onSelectSearchResult(flatResults[0]);
        setShowSearchDropdown(false);
        setSelectedIndex(-1);
      }
    } else if (e.key === 'Escape') {
      setShowSearchDropdown(false);
      setSelectedIndex(-1);
    }
  };

  const renderIcon = (item) => {
    const cat = item.category;
    const type = item.item?.type || '';
    if (cat === 'Road') return <Navigation className="w-3 h-3 text-slate-500 shrink-0" />;
    if (cat === 'Incident') return <AlertTriangle className="w-3 h-3 text-red-600 shrink-0" />;
    if (cat === 'Sector' || cat === 'Ward') return <MapPin className="w-3 h-3 text-slate-500 shrink-0" />;
    if (type === 'hospital') return <Building2 className="w-3 h-3 text-red-500 shrink-0" />;
    if (type === 'fire_station') return <Flame className="w-3 h-3 text-amber-500 shrink-0" />;
    if (type === 'transit') return <Bus className="w-3 h-3 text-blue-500 shrink-0" />;
    if (type === 'water_infra') return <Droplets className="w-3 h-3 text-sky-500 shrink-0" />;
    if (type === 'power_infra') return <Zap className="w-3 h-3 text-amber-500 shrink-0" />;
    if (type === 'waste_facility') return <Recycle className="w-3 h-3 text-emerald-500 shrink-0" />;
    if (type === 'park') return <Trees className="w-3 h-3 text-green-600 shrink-0" />;
    return <Building2 className="w-3 h-3 text-slate-500 shrink-0" />;
  };

  return (
    <header className="h-14 bg-white border-b border-slate-200 px-4 flex items-center justify-between z-40 shrink-0 select-none text-slate-800 font-sans">
      
      {/* LEFT: Institutional Identity & Hierarchy */}
      <div className="flex items-center space-x-3.5">
        <div className="w-7 h-7 rounded bg-slate-900 flex items-center justify-center text-white font-black text-xs tracking-tight shadow-xs">
          UP
        </div>
        <div>
          <div className="flex items-baseline space-x-2">
            <h1 className="text-sm font-bold text-slate-900 tracking-tight leading-none">
              {t('app.title')}
            </h1>
            <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest hidden sm:inline">
              {t('app.subtitle')}
            </span>
          </div>
          <p className="text-[11px] text-slate-500 font-medium leading-none mt-1">
            {t('app.location')}
          </p>
        </div>
      </div>

      {/* CENTER: GIS Search Field with Full Keyboard UX */}
      <div ref={searchContainerRef} className="flex-1 max-w-md mx-3 lg:mx-6 relative">
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSearchDropdown(true);
              setSelectedIndex(-1);
            }}
            onFocus={() => {
              if (searchQuery.trim().length >= 1) setShowSearchDropdown(true);
            }}
            onKeyDown={handleKeyDown}
            placeholder={t('search.placeholder')}
            aria-label={t('search.ariaLabel')}
            className="w-full pl-8 pr-7 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-all text-slate-800 placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setShowSearchDropdown(false);
                setSelectedIndex(-1);
              }}
              title={t('search.clear')}
              aria-label={t('search.clear')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded cursor-pointer"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Grouped Search Results Dropdown */}
        {showSearchDropdown && flatResults.length > 0 && (
          <div 
            className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-300 rounded shadow-lg py-1 z-50 max-h-80 overflow-y-auto divide-y divide-slate-100"
            role="listbox"
          >
            {Object.entries(groupedResults).map(([category, items]) => (
              <div key={category} className="py-0.5">
                <div className="px-3 py-1 text-[9px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/80">
                  {category === 'Road' ? t('search.catRoads') : 
                   category === 'Facility' ? t('search.catFacilities') : 
                   category === 'Sector' || category === 'Ward' ? t('search.catWards') : 
                   category === 'Incident' ? t('search.catIncidents') : category}
                </div>
                {items.map((item) => {
                  const globalIdx = flatResults.findIndex(r => r.id === item.id && r.category === item.category);
                  const isHighlighted = selectedIndex === globalIdx;

                  return (
                    <button
                      key={`${item.category}-${item.id}`}
                      onClick={() => {
                        onSelectSearchResult(item);
                        setShowSearchDropdown(false);
                        setSelectedIndex(-1);
                      }}
                      onMouseEnter={() => setSelectedIndex(globalIdx)}
                      role="option"
                      aria-selected={isHighlighted}
                      className={`w-full text-left px-3 py-1.5 flex items-center justify-between text-xs transition-colors cursor-pointer ${
                        isHighlighted ? 'bg-blue-50/80 text-blue-900 font-medium' : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center space-x-2 truncate">
                        {renderIcon(item)}
                        <span className="truncate">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 ml-2 shrink-0 font-mono">
                        {item.subtext}
                      </span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT: Language Switcher, Status, Disclosure & Officer */}
      <div className="flex items-center space-x-3">
        
        {/* Multilingual Switcher (EN | हिं | मर) */}
        <div className="flex items-center bg-slate-100 border border-slate-200 rounded p-0.5 text-[11px] font-medium text-slate-600">
          <button
            onClick={() => setLanguage('en')}
            className={`px-1.5 py-0.5 rounded-xs transition-colors cursor-pointer ${
              language === 'en' ? 'bg-white font-bold text-slate-900 shadow-2xs' : 'hover:text-slate-900'
            }`}
            title="English"
          >
            EN
          </button>
          <span className="text-slate-300 px-0.5">|</span>
          <button
            onClick={() => setLanguage('hi')}
            className={`px-1.5 py-0.5 rounded-xs transition-colors cursor-pointer ${
              language === 'hi' ? 'bg-white font-bold text-slate-900 shadow-2xs' : 'hover:text-slate-900'
            }`}
            title="हिन्दी"
          >
            हिं
          </button>
          <span className="text-slate-300 px-0.5">|</span>
          <button
            onClick={() => setLanguage('mr')}
            className={`px-1.5 py-0.5 rounded-xs transition-colors cursor-pointer ${
              language === 'mr' ? 'bg-white font-bold text-slate-900 shadow-2xs' : 'hover:text-slate-900'
            }`}
            title="मराठी"
          >
            मर
          </button>
        </div>

        {/* System Status Indicator */}
        <div className="hidden lg:flex items-center space-x-1.5 text-xs text-slate-600">
          <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
          <span className="font-medium text-[11px]">{t('app.servicesOperational')}</span>
        </div>

        {/* Small Data Honesty Disclosure */}
        <span className="hidden xl:inline-block text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
          {t('app.simulatedDisclosure')}
        </span>

        {/* Officer Profile & Signout */}
        <div className="flex items-center space-x-2 pl-3 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <div className="text-xs font-semibold text-slate-800 leading-tight">
              {user?.name || "Dr. S. Kulkarni"}
            </div>
            <div className="text-[10px] text-slate-500 leading-tight">
              {t('app.officerRole')}
            </div>
          </div>
          <button
            onClick={onLogout}
            title={t('app.signOut')}
            aria-label={t('app.signOut')}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </header>
  );
}
