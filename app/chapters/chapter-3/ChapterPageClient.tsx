'use client';

import { chapters } from '@/data/translated-chapters';
import Link from 'next/link';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import { useI18n } from '@/i18n/context';
import { useTranslations, TRANSLATION_KEYS } from '@/i18n/hooks';

const ChapterPageClient = ({ chapterIndex = 0 }) => {
  const { language } = useI18n();
  const { t } = useTranslations();

  // Get the current language's chapters
  const currentLanguageChapters = chapters.map(chapter => chapter.translations[language]);
  const chapter = currentLanguageChapters[chapterIndex];

  // Find the index of the current chapter
  const prevChapter = chapterIndex > 0 ? currentLanguageChapters[chapterIndex - 1] : null;
  const nextChapter = chapterIndex < currentLanguageChapters.length - 1 ? currentLanguageChapters[chapterIndex + 1] : null;

  return (
    <>
      <ReadingProgressBar />
      <div className="min-h-screen bg-[#FAF7F2] dark:bg-[#1C1C1C] py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="bg-[#FAF7F2] dark:bg-[#2D2D2D] rounded-xl shadow-lg p-6 md:p-10">
            <div className="mb-6 md:mb-8 text-[#2A6F97] dark:text-[#8ECae6] font-medium uppercase tracking-wide text-sm md:text-base">
              {t(TRANSLATION_KEYS.CHAPTERS)} {chapterIndex + 1}
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-8 md:mb-10 leading-tight">
              {chapter.title}
            </h1>

            <div className="chapter-content text-[#2B2B2B] dark:text-[#DADADA] font-serif text-lg leading-relaxed space-y-6">
              <div dangerouslySetInnerHTML={{ __html: chapter.content }} />

              <div className="key-takeaways mt-12 pt-8 border-t border-[#E5E5E5] dark:border-[#2A2A2A]">
                <h3 className="text-xl md:text-2xl font-sans font-semibold mb-6 text-[#1A1A1A] dark:text-[#FFFFFF]">Key Takeaways</h3>
                <ul className="space-y-4">
                  {chapter.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-6 h-6 bg-[#F0F0EA] dark:bg-[#2A2A2A] text-[#2A6F97] dark:text-[#8ECae6] rounded-full text-xs flex items-center justify-center mr-4 mt-1 flex-shrink-0">•</span>
                      <span className="text-base md:text-lg">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="chapter-nav flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-[#E5E5E5] dark:border-[#2A2A2A] gap-4">
              <div className="w-full md:w-auto text-center md:text-left">
                {prevChapter ? (
                  <Link
                    href={`/chapters/chapter-${chapterIndex}`}
                    className="text-[#2A6F97] hover:text-[#215978] dark:text-[#8ECae6] dark:hover:text-[#6bb9d6] font-medium inline-flex items-center justify-center md:justify-start py-3 px-6 rounded-lg hover:bg-[#F0F0EA] dark:hover:bg-[#2A2A2A] transition-colors w-full md:w-auto"
                  >
                    ← {t(TRANSLATION_KEYS.PREVIOUS_CHAPTER)}
                  </Link>
                ) : (
                  <span className="text-gray-400 dark:text-gray-500 font-medium inline-flex items-center justify-center md:justify-start py-3 px-6 rounded-lg w-full md:w-auto cursor-not-allowed">
                    ← {t(TRANSLATION_KEYS.PREVIOUS_CHAPTER)}
                  </span>
                )}
              </div>

              <div className="w-full md:w-auto text-center md:text-right">
                {nextChapter ? (
                  <Link
                    href={`/chapters/chapter-${chapterIndex + 2}`}
                    className="text-[#2A6F97] hover:text-[#215978] dark:text-[#8ECae6] dark:hover:text-[#6bb9d6] font-medium inline-flex items-center justify-center md:justify-end py-3 px-6 rounded-lg hover:bg-[#F0F0EA] dark:hover:bg-[#2A2A2A] transition-colors w-full md:w-auto"
                  >
                    {t(TRANSLATION_KEYS.NEXT_CHAPTER)} →
                  </Link>
                ) : (
                  <span className="text-gray-400 dark:text-gray-500 font-medium inline-flex items-center justify-center md:justify-end py-3 px-6 rounded-lg w-full md:w-auto cursor-not-allowed">
                    {t(TRANSLATION_KEYS.NEXT_CHAPTER)} →
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChapterPageClient;