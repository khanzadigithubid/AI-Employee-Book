'use client';

import { useTranslations } from '@/i18n/hooks';
import { TRANSLATION_KEYS } from '@/i18n/translation-keys';
import { chapters } from '@/data/translated-chapters';

const AboutBookPage = () => {
  const { t, language } = useTranslations();

  // Get the current language's chapters
  const currentLanguageChapters = chapters.map(chapter => chapter.translations[language]);
  const aboutContent = currentLanguageChapters[1]; // Using second chapter's content as about book

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-4">
          {t(TRANSLATION_KEYS.ABOUT_BOOK)}
        </h1>
        <div className="w-24 h-1 bg-[#2A6F97] mx-auto"></div>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none bg-[#FAF7F2] dark:bg-[#2A2A2A] rounded-xl shadow-md p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-4">The Vision Behind This Guide</h2>
        <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
          {aboutContent.content.split('<h2>')[0].replace(/<[^>]*>/g, '')}
        </p>
        <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
          {aboutContent.content.split('<h2>')[1]?.split('</h2>')[1]?.split('<h2>')[0]?.replace(/<[^>]*>/g, '') || 'Our mission is to demystify AI employee technology and provide readers with a clear roadmap for integrating these digital colleagues into their professional lives.'}
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none bg-[#FAF7F2] dark:bg-[#2A2A2A] rounded-xl shadow-md p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-4">Who Should Read This Book</h2>
        <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
          {aboutContent.content.split('<h2>')[2]?.split('</h2>')[1]?.split('<h2>')[0]?.replace(/<[^>]*>/g, '') || 'This book serves multiple audiences, each with distinct needs and objectives:'}
        </p>
        <ul className="list-disc pl-6 text-[#2B2B2B] dark:text-[#DADADA] space-y-2">
          <li><strong>Students and Recent Graduates:</strong> {aboutContent.keyTakeaways[0] || 'Prepare for a workplace increasingly augmented by AI, gaining a competitive edge through early mastery of human-AI collaboration.'}</li>
          <li><strong>Professionals Seeking Efficiency:</strong> {aboutContent.keyTakeaways[1] || 'Learn to leverage AI employees to automate routine tasks, enhance decision-making, and increase overall productivity.'}</li>
          <li><strong>Freelancers and Entrepreneurs:</strong> {aboutContent.keyTakeaways[2] || 'Understand how AI employees can provide the capabilities of a larger team without the overhead of additional hires.'}</li>
          <li><strong>Business Leaders:</strong> {aboutContent.keyTakeaways[3] || 'Explore strategic implementation of AI employees to transform operations, reduce costs, and drive innovation.'}</li>
          <li><strong>Anyone Curious About the Future:</strong> {aboutContent.keyTakeaways[0] || 'Gain insights into how AI will reshape work and society in the coming years.'}</li>
        </ul>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none bg-[#FAF7F2] dark:bg-[#2A2A2A] rounded-xl shadow-md p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-4">Our Approach</h2>
        <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
          {aboutContent.content.split('<h2>')[3]?.split('</h2>')[1]?.split('<h2>')[0]?.replace(/<[^>]*>/g, '') || 'This book takes a balanced approach to AI employee technology, acknowledging both the tremendous opportunities and the legitimate concerns.'}
        </p>
        <ul className="list-disc pl-6 text-[#2B2B2B] dark:text-[#DADADA] space-y-2">
          <li><strong>Collaboration over Replacement:</strong> {aboutContent.keyTakeaways[0] || 'AI employees enhance human capabilities rather than replacing human workers.'}</li>
          <li><strong>Practical Application:</strong> {aboutContent.keyTakeaways[1] || 'Real-world examples and actionable strategies that readers can implement immediately.'}</li>
          <li><strong>Ethical Considerations:</strong> {aboutContent.keyTakeaways[2] || 'Addressing privacy, fairness, and safety in AI employee deployment.'}</li>
          <li><strong>Accessibility:</strong> {aboutContent.keyTakeaways[3] || 'Making AI employee technology understandable and achievable for individuals and organizations of all sizes.'}</li>
        </ul>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none bg-[#FAF7F2] dark:bg-[#2A2A2A] rounded-xl shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-4">What Makes This Book Different</h2>
        <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
          {aboutContent.content.split('<h2>')[4]?.split('</h2>')[1]?.split('<h2>')[0]?.replace(/<[^>]*>/g, '') || 'Unlike technical manuals or speculative futurism, this book offers a practical bridge between current capabilities and future possibilities.'}
        </p>
        <ul className="list-disc pl-6 text-[#2B2B2B] dark:text-[#DADADA] space-y-2">
          <li>{aboutContent.keyTakeaways[0] || 'Step-by-step guidance for implementing AI employees in various business functions'}</li>
          <li>{aboutContent.keyTakeaways[1] || 'Real examples from organizations successfully using AI employees'}</li>
          <li>{aboutContent.keyTakeaways[2] || 'Strategies for training and optimizing AI employee performance'}</li>
          <li>{aboutContent.keyTakeaways[3] || 'Considerations for maintaining ethical standards and human oversight'}</li>
          <li>{aboutContent.keyTakeaways[0] || 'Preparation for the evolving landscape of human-AI collaboration'}</li>
        </ul>
        <p className="text-[#2B2B2B] dark:text-[#DADADA] mt-4">
          {aboutContent.content.split('<h2>')[5]?.split('</h2>')[1]?.replace(/<[^>]*>/g, '') || 'This book is designed to be both a practical guide and a visionary exploration of the future of work. Whether you\'re looking to enhance your personal productivity or transform your organization, you\'ll find the insights and strategies needed to succeed in an AI-augmented world.'}
        </p>
      </div>
    </div>
  );
};

export default AboutBookPage;