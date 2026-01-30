'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Language, LANGUAGES, DEFAULT_LANGUAGE } from '@/i18n/languages';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    // Check for saved language in localStorage
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang && LANGUAGES[savedLang]) {
      setLanguage(savedLang);
    } else {
      // Detect user's language preference
      const userLang = navigator.language.substring(0, 2) as Language;
      if (LANGUAGES[userLang]) {
        setLanguage(userLang);
      }
    }
  }, []);

  useEffect(() => {
    // Update document direction based on language
    document.documentElement.dir = LANGUAGES[language].dir;
    // Update document language attribute for the observer
    document.documentElement.setAttribute('data-language', language);
    // Save language preference
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    // This is a simplified translation function
    // In a real implementation, you would have a translation object
    // For now, returning the key as is since we're using content from data files
    return key;
  };

  const dir = LANGUAGES[language].dir;

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}