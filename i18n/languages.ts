export type Language = 'en' | 'ur' | 'ar';

export interface LanguageConfig {
  code: Language;
  name: string;
  displayName: string;
  dir: 'ltr' | 'rtl';
}

export const LANGUAGES: Record<Language, LanguageConfig> = {
  en: {
    code: 'en',
    name: 'English',
    displayName: 'EN',
    dir: 'ltr',
  },
  ur: {
    code: 'ur',
    name: 'Urdu',
    displayName: 'اردو',
    dir: 'rtl',
  },
  ar: {
    code: 'ar',
    name: 'Arabic',
    displayName: 'AR',
    dir: 'rtl',
  },
};

export const DEFAULT_LANGUAGE: Language = 'en';