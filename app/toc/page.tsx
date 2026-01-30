'use client';

import Link from 'next/link';
import { useI18n } from '@/i18n/context';
import { chapters } from '@/data/translated-chapters';
import { useTranslations, TRANSLATION_KEYS } from '@/i18n/hooks';

const TableOfContentsPage = () => {
  const { language } = useI18n();
  const { t } = useTranslations();

  // Get the current language's chapters
  const currentLanguageChapters = chapters.map(chapter => chapter.translations[language]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] dark:bg-[#1C1C1C] py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-3 md:mb-4">
            {t(TRANSLATION_KEYS.TABLE_OF_CONTENTS)}
          </h1>
          <p className="text-base md:text-lg text-[#2B2B2B] dark:text-[#DADADA] max-w-2xl mx-auto">
            {currentLanguageChapters[0].summary}
          </p>
        </div>

        <div className="bg-[#FAF7F2] dark:bg-[#2D2D2D] rounded-xl shadow-lg p-6 md:p-8">
          <ol className="space-y-6 md:space-y-8">
            {currentLanguageChapters.map((chapter, index) => (
              <li key={`${language}-${index}`} className="border-b border-[#E5E5E5] dark:border-[#2A2A2A] pb-6 md:pb-8 last:border-0 last:pb-0">
                <Link href={`/chapters/chapter-${index + 1}`} className="group block">
                  <div className="flex items-start">
                    <div className="bg-[#F0F0EA] dark:bg-[#2A2A2A] text-[#2A6F97] dark:text-[#8ECae6] rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-base md:text-lg mr-4 md:mr-6 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg md:text-xl lg:text-2xl font-sans font-semibold text-[#1A1A1A] dark:text-[#FFFFFF] group-hover:text-[#2A6F97] dark:group-hover:text-[#8ECae6] transition-colors duration-200 mb-2 md:mb-3">
                        {chapter.title}
                      </h2>
                      <p className="text-base md:text-lg text-[#2B2B2B] dark:text-[#DADADA]">
                        {chapter.summary}
                      </p>
                    </div>
                    <div className="text-[#2A6F97] dark:text-[#8ECae6] opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2 md:ml-4 flex items-center text-lg">
                      →
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ol>

          <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-[#E5E5E5] dark:border-[#2A2A2A]">
            <div className="flex justify-center">
              <Link
                href="/chapters/chapter-1"
                className="inline-flex items-center px-6 py-3 bg-[#2A6F97] hover:bg-[#215978] text-white font-medium rounded-lg transition-colors duration-200 text-base md:text-lg"
              >
                {t(TRANSLATION_KEYS.START_READING)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContentsPage;