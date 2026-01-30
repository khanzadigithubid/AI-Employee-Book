'use client';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useI18n } from '@/i18n/context';
import { useTranslations, TRANSLATION_KEYS } from '@/i18n/hooks';

const Footer = () => {
  const { language } = useI18n();
  const { t } = useTranslations();

  return (
    <footer className="bg-[#FAF7F2] dark:bg-[#1C1C1C] border-t border-[#E5E5E5] dark:border-[#2A2A2A] py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-[#2B2B2B] dark:text-[#DADADA] font-sans text-sm">
              {t(TRANSLATION_KEYS.COPYRIGHT)} {new Date().getFullYear()} {t(TRANSLATION_KEYS.AI_EMPLOYEE_BOOK)}
            </p>
          </div>
          <div className="flex space-x-5">
            <a
              href="https://www.linkedin.com/in/khanzadi-wazir-ali-7a97832b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2B2B2B] hover:text-[#2A6F97] dark:text-[#DADADA] dark:hover:text-[#8ECae6] transition-colors font-sans flex items-center"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/khanzadigithubid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2B2B2B] hover:text-[#2A6F97] dark:text-[#DADADA] dark:hover:text-[#8ECae6] transition-colors font-sans flex items-center"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-[#666666] dark:text-[#AAAAAA] text-xs font-sans">
          <p>{t(TRANSLATION_KEYS.HOME)} | {t(TRANSLATION_KEYS.CHAPTERS)} | {t(TRANSLATION_KEYS.ABOUT_BOOK)}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;