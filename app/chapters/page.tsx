'use client';

import Link from 'next/link';
import { useI18n } from '@/i18n/context';
import { chapters } from '@/data/translated-chapters';
import { useTranslations, TRANSLATION_KEYS } from '@/i18n/hooks';

const ChaptersIndexPage = () => {
  const { language } = useI18n();
  const { t } = useTranslations();

  // Get the current language's chapters
  const currentLanguageChapters = chapters.map(chapter => chapter.translations[language]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] dark:bg-[#1C1C1C] py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-3 md:mb-4">
            {t(TRANSLATION_KEYS.CHAPTERS)}
          </h1>
          <p className="text-base md:text-lg text-[#2B2B2B] dark:text-[#DADADA]">
            {currentLanguageChapters[0].summary}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {currentLanguageChapters.map((chapter, index) => (
            <Link
              key={`${language}-${index}`}
              href={`/chapters/chapter-${index + 1}`}
              className="block p-6 bg-[#FAF7F2] dark:bg-[#2D2D2D] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5E5E5] dark:border-[#2A2A2A] transform hover:-translate-y-1"
            >
              <div className="flex items-start">
                <div className="bg-[#F0F0EA] dark:bg-[#2A2A2A] text-[#2A6F97] dark:text-[#8ECae6] rounded-lg w-12 h-12 flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-sans font-bold text-xl text-[#1A1A1A] dark:text-[#FFFFFF] mb-2">{chapter.title}</h3>
                  <p className="text-[#2B2B2B] dark:text-[#DADADA] text-base">{chapter.summary}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChaptersIndexPage;