'use client';

import Link from 'next/link';
import { useI18n } from '@/i18n/context';
import { chapters } from '@/data/translated-chapters';
import { useTranslations, TRANSLATION_KEYS } from '@/i18n/hooks';

const HomePage = () => {
  const { language } = useI18n();
  const { t } = useTranslations();

  // Get the current language's chapters
  const currentLanguageChapters = chapters.map(chapter => chapter.translations[language]);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-6">
          {currentLanguageChapters[0].title}
        </h1>
        <h2 className="text-2xl md:text-3xl text-[#2B2B2B] dark:text-[#DADADA] mb-8">
          {t(TRANSLATION_KEYS.AI_EMPLOYEE_BOOK)}
        </h2>
        <p className="text-lg text-[#2B2B2B] dark:text-[#DADADA] max-w-2xl mx-auto mb-10">
          {currentLanguageChapters[0].summary}
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/toc"
            className="bg-[#2A6F97] hover:bg-[#215978] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
          >
            {t(TRANSLATION_KEYS.TABLE_OF_CONTENTS)}
          </Link>
          <Link
            href="/chapters"
            className="bg-[#2A6F97] hover:bg-[#215978] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
          >
            {t(TRANSLATION_KEYS.READ_THE_BOOK)}
          </Link>
        </div>
      </div>

      <div className="prose prose-lg max-w-none bg-[#FAF7F2] dark:bg-[#2A2A2A] rounded-xl shadow-lg p-6 md:p-8 mb-12">
        <h3 className="text-2xl font-sans font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-4">{t(TRANSLATION_KEYS.ABOUT_BOOK)}</h3>
        <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4 font-serif text-lg leading-relaxed">
          {currentLanguageChapters[0].content.split('<h2>')[0].replace(/<[^>]*>/g, '')}
        </p>
        <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4 font-serif text-lg leading-relaxed">
          {currentLanguageChapters[1].content.split('<h2>')[0].replace(/<[^>]*>/g, '')}
        </p>
        <p className="text-[#2B2B2B] dark:text-[#DADADA] font-serif text-lg leading-relaxed">
          {currentLanguageChapters[2].content.split('<h2>')[0].replace(/<[^>]*>/g, '')}
        </p>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-sans font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-6 text-center">{t(TRANSLATION_KEYS.CHAPTERS)}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentLanguageChapters.slice(0, 6).map((chapter, index) => (
            <Link
              key={`${language}-${index}`}
              href={`/chapters/chapter-${index + 1}`}
              className="block p-6 bg-[#FAF7F2] dark:bg-[#2A2A2A] rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#2A6F97] transform hover:-translate-y-1"
            >
              <div className="font-medium text-[#2A6F97] dark:text-[#8ECae6] mb-2">{t(TRANSLATION_KEYS.CHAPTERS)} {index + 1}</div>
              <h4 className="font-sans font-semibold text-xl text-[#1A1A1A] dark:text-[#FFFFFF] mb-3">{chapter.title}</h4>
              <p className="text-[#2B2B2B] dark:text-[#DADADA]">{chapter.summary}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/chapters"
            className="inline-block text-[#2A6F97] dark:text-[#8ECae6] hover:underline font-medium text-lg"
          >
            {t(TRANSLATION_KEYS.VIEW_ALL_CHAPTERS)} →
          </Link>
        </div>
      </div>

      <div className="bg-[#F0F0EA] dark:bg-[#2A2A2A] rounded-xl p-6 md:p-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
        <h3 className="text-2xl font-sans font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-6">Why Read This Book?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FAF7F2] dark:bg-[#2A2A2A] p-6 rounded-xl shadow-lg">
            <div className="text-[#2A6F97] dark:text-[#8ECae6] text-3xl mb-4">🚀</div>
            <h4 className="font-sans font-semibold text-xl text-[#1A1A1A] dark:text-[#FFFFFF] mb-3">{t(TRANSLATION_KEYS.CHAPTERS)} 1</h4>
            <p className="text-[#2B2B2B] dark:text-[#DADADA]">{currentLanguageChapters[0].summary}</p>
          </div>
          <div className="bg-[#FAF7F2] dark:bg-[#2A2A2A] p-6 rounded-xl shadow-lg">
            <div className="text-[#2A6F97] dark:text-[#8ECae6] text-3xl mb-4">🧠</div>
            <h4 className="font-sans font-semibold text-xl text-[#1A1A1A] dark:text-[#FFFFFF] mb-3">{t(TRANSLATION_KEYS.CHAPTERS)} 2</h4>
            <p className="text-[#2B2B2B] dark:text-[#DADADA]">{currentLanguageChapters[1].summary}</p>
          </div>
          <div className="bg-[#FAF7F2] dark:bg-[#2A2A2A] p-6 rounded-xl shadow-lg">
            <div className="text-[#2A6F97] dark:text-[#8ECae6] text-3xl mb-4">💼</div>
            <h4 className="font-sans font-semibold text-xl text-[#1A1A1A] dark:text-[#FFFFFF] mb-3">{t(TRANSLATION_KEYS.CHAPTERS)} 3</h4>
            <p className="text-[#2B2B2B] dark:text-[#DADADA]">{currentLanguageChapters[2].summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;