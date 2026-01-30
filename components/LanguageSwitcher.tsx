'use client';

import { useI18n } from '@/i18n/context';
import { LANGUAGES } from '@/i18n/languages';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useI18n();

  const handleLanguageChange = (lang: keyof typeof LANGUAGES) => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center space-x-2">
      {Object.entries(LANGUAGES).map(([code, config]) => (
        <button
          key={code}
          onClick={() => handleLanguageChange(code as keyof typeof LANGUAGES)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            language === code
              ? 'bg-[#2A6F97] text-white'
              : 'bg-[#EDEAE4] text-[#2A6F97] hover:bg-[#DAD6CE] dark:bg-[#2A2A2A] dark:text-[#8ECae6] dark:hover:bg-[#3A3A3A]'
          }`}
          aria-label={`Switch to ${config.name}`}
        >
          {config.displayName}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;