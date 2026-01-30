'use client';

import { useI18n } from '@/i18n/context';
import { chapters } from '@/data/translated-chapters';
import { useTranslations, TRANSLATION_KEYS } from '@/i18n/hooks';

const FutureOfAIPage = () => {
  const { language } = useI18n();
  const { t } = useTranslations();

  // Get the current language's chapters
  const currentLanguageChapters = chapters.map(chapter => chapter.translations[language]);
  const chapter = currentLanguageChapters[8]; // Using ninth chapter's content as future of AI

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-4">
          {t(TRANSLATION_KEYS.FUTURE_OF_AI)}
        </h1>
        <div className="w-24 h-1 bg-[#2A6F97] mx-auto"></div>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none bg-[#FAF7F2] dark:bg-[#2A2A2A] rounded-xl shadow-md p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-4">{t(TRANSLATION_KEYS.THE_EVOLUTION_CONTINUES)}</h2>
        <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
          {chapter.content.split('<h2>')[0].replace(/<[^>]*>/g, '')}
        </p>
        <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
          {chapter.content.split('<h2>')[1]?.split('</h2>')[1]?.split('<h2>')[0]?.replace(/<[^>]*>/g, '') || t(TRANSLATION_KEYS.FUTURE_AI_DESC)}
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none bg-[#FAF7F2] dark:bg-[#2A2A2A] rounded-xl shadow-md p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-4">{t(TRANSLATION_KEYS.EMERGING_CAPABILITIES)}</h2>
        <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
          {chapter.content.split('<h2>')[2]?.split('</h2>')[1]?.split('<h2>')[0]?.replace(/<[^>]*>/g, '') || t(TRANSLATION_KEYS.FUTURE_AI_DESC)}
        </p>
        <ul className="list-disc pl-6 text-[#2B2B2B] dark:text-[#DADADA] space-y-2">
          <li><strong>Advanced Reasoning:</strong> {chapter.keyTakeaways[0] || t(TRANSLATION_KEYS.FUTURE_AI_DESC)}</li>
          <li><strong>Emotional Intelligence:</strong> {chapter.keyTakeaways[1] || t(TRANSLATION_KEYS.FUTURE_AI_DESC)}</li>
          <li><strong>Creative Collaboration:</strong> {chapter.keyTakeaways[2] || t(TRANSLATION_KEYS.FUTURE_AI_DESC)}</li>
          <li><strong>Multimodal Integration:</strong> {chapter.keyTakeaways[3] || t(TRANSLATION_KEYS.FUTURE_AI_DESC)}</li>
          <li><strong>Continuous Learning:</strong> {chapter.keyTakeaways[0] || t(TRANSLATION_KEYS.FUTURE_AI_DESC)}</li>
        </ul>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none bg-[#FAF7F2] dark:bg-[#2A2A2A] rounded-xl shadow-md p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-4">{t(TRANSLATION_KEYS.ORGANIZATIONAL_TRANSFORMATION)}</h2>
        <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
          {chapter.content.split('<h2>')[3]?.split('</h2>')[1]?.split('<h2>')[0]?.replace(/<[^>]*>/g, '') || t(TRANSLATION_KEYS.FUTURE_AI_DESC)}
        </p>
        <ul className="list-disc pl-6 text-[#2B2B2B] dark:text-[#DADADA] space-y-2">
          <li><strong>{t(TRANSLATION_KEYS.NEW_ROLES)}:</strong> {chapter.keyTakeaways[1] || t(TRANSLATION_KEYS.FUTURE_AI_DESC)}</li>
          <li><strong>{t(TRANSLATION_KEYS.DYNAMIC_TEAMS)}:</strong> {chapter.keyTakeaways[2] || t(TRANSLATION_KEYS.FUTURE_AI_DESC)}</li>
          <li><strong>{t(TRANSLATION_KEYS.GLOBAL_COLLABORATION)}:</strong> {chapter.keyTakeaways[3] || t(TRANSLATION_KEYS.FUTURE_AI_DESC)}</li>
          <li><strong>{t(TRANSLATION_KEYS.PERFORMANCE_METRICS)}:</strong> {chapter.keyTakeaways[0] || t(TRANSLATION_KEYS.FUTURE_AI_DESC)}</li>
        </ul>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none bg-[#FAF7F2] dark:bg-[#2A2A2A] rounded-xl shadow-md p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-4">{t(TRANSLATION_KEYS.PREPARING_FOR_TOMORROW)}</h2>
        <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
          {chapter.content.split('<h2>')[4]?.split('</h2>')[1]?.split('<h2>')[0]?.replace(/<[^>]*>/g, '') || t(TRANSLATION_KEYS.FUTURE_AI_DESC)}
        </p>
        <ul className="list-disc pl-6 text-[#2B2B2B] dark:text-[#DADADA] space-y-2">
          <li><strong>{t(TRANSLATION_KEYS.LIFELONG_LEARNING)}:</strong> {chapter.keyTakeaways[0] || t(TRANSLATION_KEYS.FUTURE_AI_DESC)}</li>
          <li><strong>{t(TRANSLATION_KEYS.ADAPTABILITY)}:</strong> {chapter.keyTakeaways[1] || t(TRANSLATION_KEYS.FUTURE_AI_DESC)}</li>
          <li><strong>{t(TRANSLATION_KEYS.ETHICAL_LEADERSHIP)}:</strong> {chapter.keyTakeaways[2] || t(TRANSLATION_KEYS.FUTURE_AI_DESC)}</li>
          <li><strong>{t(TRANSLATION_KEYS.COLLABORATIVE_MINDSET)}:</strong> {chapter.keyTakeaways[3] || t(TRANSLATION_KEYS.FUTURE_AI_DESC)}</li>
        </ul>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none bg-[#F0F0EA] dark:bg-[#2A2A2A] rounded-xl p-6 md:p-8 border border-[#E5E5E5] dark:border-[#2A2A2A]">
        <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-4">{t(TRANSLATION_KEYS.THE_PATH_FORWARD)}</h2>
        <p className="text-[#2B2B2B] dark:text-[#DADADA]">
          {chapter.content.split('<h2>')[5]?.split('</h2>')[1]?.replace(/<[^>]*>/g, '') || t(TRANSLATION_KEYS.FUTURE_AI_DESC)}
        </p>
      </div>
    </div>
  );
};

export default FutureOfAIPage;