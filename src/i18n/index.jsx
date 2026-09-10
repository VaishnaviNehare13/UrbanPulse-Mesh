import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from './locales/en';
import { hi } from './locales/hi';
import { mr } from './locales/mr';

const dictionaries = {
  en,
  hi,
  mr
};

const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key
});

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('urbanpulse_mesh_lang');
      if (saved && ['en', 'hi', 'mr'].includes(saved)) {
        return saved;
      }
    } catch (e) {
      // ignore localStorage errors
    }
    return 'en';
  });

  const setLanguage = (newLang) => {
    if (['en', 'hi', 'mr'].includes(newLang)) {
      setLanguageState(newLang);
      try {
        localStorage.setItem('urbanpulse_mesh_lang', newLang);
      } catch (e) {}
    }
  };

  // Safe nested translation lookup with fallback to English
  const t = (path, fallback = '') => {
    if (!path) return '';
    const keys = path.split('.');
    
    let current = dictionaries[language];
    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        current = null;
        break;
      }
    }

    if (current !== null && current !== undefined && typeof current === 'string') {
      return current;
    }

    // Fallback to English
    let enCurrent = dictionaries.en;
    for (const k of keys) {
      if (enCurrent && typeof enCurrent === 'object' && k in enCurrent) {
        enCurrent = enCurrent[k];
      } else {
        enCurrent = null;
        break;
      }
    }

    if (enCurrent !== null && enCurrent !== undefined && typeof enCurrent === 'string') {
      return enCurrent;
    }

    return fallback || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
