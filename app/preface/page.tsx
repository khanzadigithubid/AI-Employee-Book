'use client';

import { useTranslations } from '@/i18n/hooks';
import { TRANSLATION_KEYS } from '@/i18n/translation-keys';
import { chapters } from '@/data/translated-chapters';

const PrefacePage = () => {
  const { t, language } = useTranslations();

  // Get the current language's chapters
  const currentLanguageChapters = chapters.map(chapter => chapter.translations[language]);
  const prefaceContent = currentLanguageChapters[0]; // Using first chapter's content as preface

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-4">
          {t(TRANSLATION_KEYS.PREFACE)}
        </h1>
        <div className="w-24 h-1 bg-[#2A6F97] mx-auto"></div>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none bg-[#FAF7F2] dark:bg-[#2A2A2A] rounded-xl shadow-md p-6 md:p-8">
        <p className="text-[#2B2B2B] dark:text-[#DADADA] italic text-xl mb-6">
          {prefaceContent.keyTakeaways[0] || "The future is not something we enter, but something we create. The tools we choose to build with determine the shape of the world we inhabit."}
        </p>

        <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
          {prefaceContent.content.split('<h2>')[0].replace(/<[^>]*>/g, '')}
        </p>

        <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
          {prefaceContent.content.split('<h2>')[1]?.split('</h2>')[1]?.split('<h2>')[0]?.replace(/<[^>]*>/g, '') || 'This book explores the revolutionary concept of the AI employee: a digital colleague designed to work alongside humans, enhancing our capabilities rather than replacing them.'}
        </p>

        <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
          {prefaceContent.content.split('<h2>')[2]?.split('</h2>')[1]?.split('<h2>')[0]?.replace(/<[^>]*>/g, '') || 'The AI employee is not a replacement for human workers but an augmentation of human potential.'}
        </p>

        <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
          {prefaceContent.content.split('<h2>')[3]?.split('</h2>')[1]?.split('<h2>')[0]?.replace(/<[^>]*>/g, '') || 'Throughout this book, we\'ll explore practical strategies for integrating AI employees into various aspects of work.'}
        </p>

        <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
          {prefaceContent.content.split('<h2>')[4]?.split('</h2>')[1]?.split('<h2>')[0]?.replace(/<[^>]*>/g, '') || 'The journey toward effective human-AI collaboration requires thoughtful consideration of ethical implications.'}
        </p>

        <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
          {prefaceContent.content.split('<h2>')[5]?.split('</h2>')[1]?.split('<h2>')[0]?.replace(/<[^>]*>/g, '') || 'Whether you\'re a student preparing for the future of work, a professional seeking to enhance your capabilities, or a business leader exploring new possibilities, this book provides the framework for understanding and implementing AI employees.'}
        </p>

        <p className="text-[#2B2B2B] dark:text-[#DADADA]">
          {prefaceContent.content.split('<h2>')[6]?.split('</h2>')[1]?.replace(/<[^>]*>/g, '') || 'The future workplace will be defined not by the competition between humans and machines, but by the elegant collaboration between different forms of intelligence.'}
        </p>
      </div>
    </div>
  );
};

export default PrefacePage;