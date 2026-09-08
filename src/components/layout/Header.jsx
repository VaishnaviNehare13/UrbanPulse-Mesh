import React, { useState } from 'react';
import { 
  Search, 
  LogOut,
  Navigation,
  AlertTriangle,
  Building2,
  MapPin
} from 'lucide-react';

export default function Header({ 
  searchQuery, 
  setSearchQuery, 
  searchResults, 
  onSelectSearchResult,
  user,
  onLogout
}) {
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  // Group search results by category
  const groupedResults = React.useMemo(() => {
    if (!searchResults || searchResults.length === 0) return {};
    return searchResults.reduce((acc, curr) => {
      const cat = curr.category || 'Other';
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(curr);
      return acc;
    }, {});
  }, [searchResults]);

  return (
    <header className="h-14 bg-white border-b border-slate-200 px-4 flex items-center justify-between z-40 shrink-0 select-none">
      
      {/* LEFT: Institutional Identity */}
      <div className="flex items-center space-x-3">
        <div className="w-7 h-7 rounded bg-slate-900 flex items-center justify-center text-white font-black text-xs tracking-tight">
          UP
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-sm font-bold text-slate-900 tracking-tight leading-none">
              URBANPULSE MESH
            </h1>
            <span className="text-[10px] text-slate-400 font-medium hidden md:inline">
              Prototype
            </span>
          </div>
          <p className="text-[11px] text-slate-500 font-medium leading-none mt-1">
            Municipal Coordination & Decision Support • Pune, Maharashtra
          </p>
        </div>
      </div>

      {/* CENTER: GIS Search Field with Grouped Results */}
      <div className="flex-1 max-w-md mx-6 relative">
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSearchDropdown(true);
            }}
            onFocus={() => setShowSearchDropdown(true)}
            placeholder="Search Pune roads, facilities, wards..."
            className="w-full pl-8 pr-7 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-all text-slate-800 placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setShowSearchDropdown(false);
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
            >
              ×
            </button>
          )}
        </div>

        {/* Grouped Search Results Dropdown */}
        {showSearchDropdown && searchResults && searchResults.length > 0 && (
          <div 
            className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-200 rounded shadow-lg py-1 z-50 max-h-80 overflow-y-auto"
            onMouseLeave={() => setShowSearchDropdown(false)}
          >
            {Object.entries(groupedResults).map(([category, items]) => (
              <div key={category} className="py-1">
                <div className="px-3 py-0.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/60 border-y border-slate-100">
                  {category === 'Road' ? 'ROADS' : 
                   category === 'Facility' ? 'FACILITIES' : 
                   category === 'Sector' ? 'AREAS / WARDS' : 
                   category === 'Incident' ? 'INCIDENTS' : category}
                </div>
                {items.map((item) => (
                  <button
                    key={`${item.category}-${item.id}`}
                    onClick={() => {
                      onSelectSearchResult(item);
                      setShowSearchDropdown(false);
                    }}
                    className="w-full text-left px-3 py-1.5 hover:bg-slate-50 flex items-center justify-between text-xs transition-colors group"
                  >
                    <div className="flex items-center space-x-2 truncate">
                      {item.category === 'Road' && <Navigation className="w-3 h-3 text-slate-500 shrink-0" />}
                      {item.category === 'Incident' && <AlertTriangle className="w-3 h-3 text-red-600 shrink-0" />}
                      {item.category === 'Facility' && <Building2 className="w-3 h-3 text-slate-500 shrink-0" />}
                      {item.category === 'Sector' && <MapPin className="w-3 h-3 text-slate-500 shrink-0" />}
                      <span className="font-medium text-slate-800 group-hover:text-blue-700 truncate">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 ml-2 shrink-0">
                      {item.subtext}
                    </span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT: Minimal System Status, Disclosure & Officer */}
      <div className="flex items-center space-x-4">
        {/* System Status Indicator */}
        <div className="hidden lg:flex items-center space-x-1.5 text-xs text-slate-600">
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
          <span>6/6 services operational</span>
        </div>

        {/* Small Data Honesty Disclosure */}
        <span className="hidden sm:inline-block text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
          SIMULATED OPERATIONAL DATA
        </span>

        {/* Officer Profile & Signout */}
        <div className="flex items-center space-x-2 pl-2 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <div className="text-xs font-semibold text-slate-800 leading-tight">
              Dr. S. Kulkarni
            </div>
            <div className="text-[10px] text-slate-500 leading-tight">
              City Administrator
            </div>
          </div>
          <button
            onClick={onLogout}
            title="Sign Out"
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </header>
  );
}
