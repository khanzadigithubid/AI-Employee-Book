'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations, TRANSLATION_KEYS } from '@/i18n/hooks';

const Header = () => {
  const { t } = useTranslations();

  return (
    <header className="bg-[#FAF7F2] dark:bg-[#1C1C1C] shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-sans font-bold text-[#2A6F97] dark:text-[#8ECae6]">
          {t(TRANSLATION_KEYS.AI_EMPLOYEE_BOOK)}
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-[#2B2B2B] hover:text-[#2A6F97] dark:text-[#DADADA] dark:hover:text-[#8ECae6] transition-colors font-sans">
            {t(TRANSLATION_KEYS.HOME)}
          </Link>
          <Link href="/preface" className="text-[#2B2B2B] hover:text-[#2A6F97] dark:text-[#DADADA] dark:hover:text-[#8ECae6] transition-colors font-sans">
            {t(TRANSLATION_KEYS.PREFACE)}
          </Link>
          <Link href="/chapters" className="text-[#2B2B2B] hover:text-[#2A6F97] dark:text-[#DADADA] dark:hover:text-[#8ECae6] transition-colors font-sans">
            {t(TRANSLATION_KEYS.CHAPTERS)}
          </Link>
          <Link href="/about-book" className="text-[#2B2B2B] hover:text-[#2A6F97] dark:text-[#DADADA] dark:hover:text-[#8ECae6] transition-colors font-sans">
            {t(TRANSLATION_KEYS.ABOUT_BOOK)}
          </Link>
          <Link href="/future-of-ai" className="text-[#2B2B2B] hover:text-[#2A6F97] dark:text-[#DADADA] dark:hover:text-[#8ECae6] transition-colors font-sans">
            {t(TRANSLATION_KEYS.FUTURE_OF_AI)}
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;