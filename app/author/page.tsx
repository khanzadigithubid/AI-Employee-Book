'use client';

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useI18n } from '@/i18n/context';
import { chapters } from '@/data/translated-chapters';

export default function Author() {
  const { language } = useI18n();

  // Get the current language's chapters
  const currentLanguageChapters = chapters.map(chapter => chapter.translations[language]);
  const authorContent = currentLanguageChapters[2]; // Using third chapter's content as author info

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] dark:bg-[#1C1C1C]">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-[#FAF7F2] dark:bg-[#2A2A2A] rounded-2xl shadow-xl p-8 mb-12 border border-[#E5E5E5] dark:border-[#2A2A2A]">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-6 text-center">
            About the Author
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 md:w-56 md:h-56 flex items-center justify-center text-gray-500">
              Author Image
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mb-2">Dr. Alex Johnson</h2>
              <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
                Leading AI Researcher & Futurist
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {authorContent.summary}
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mt-8 mb-4">Professional Background</h2>
            <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
              {authorContent.content.split('<h2>')[0].replace(/<[^>]*>/g, '')}
            </p>
            <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
              {authorContent.content.split('<h2>')[1]?.split('</h2>')[1]?.split('<h2>')[0]?.replace(/<[^>]*>/g, '') || 'As a former lead researcher at a major technology corporation, Dr. Johnson was instrumental in developing early implementations of collaborative AI systems.'}
            </p>

            <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mt-8 mb-4">Research Focus</h2>
            <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
              {authorContent.content.split('<h2>')[2]?.split('</h2>')[1]?.split('<h2>')[0]?.replace(/<[^>]*>/g, '') || 'Dr. Johnson\'s research focuses on creating AI systems that enhance human capabilities rather than replacing them.'}
            </p>
            <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
              {authorContent.content.split('<h2>')[3]?.split('</h2>')[1]?.split('<h2>')[0]?.replace(/<[^>]*>/g, '') || 'Their current research interests include explainable AI, human-AI collaboration models, and the ethical implications of AI deployment in professional environments.'}
            </p>

            <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mt-8 mb-4">Publications and Recognition</h2>
            <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
              {authorContent.content.split('<h2>')[4]?.split('</h2>')[1]?.split('<h2>')[0]?.replace(/<[^>]*>/g, '') || 'Dr. Johnson has authored over 50 peer-reviewed publications on AI and human-computer interaction.'}
            </p>
            <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
              {authorContent.content.split('<h2>')[5]?.split('</h2>')[1]?.split('<h2>')[0]?.replace(/<[^>]*>/g, '') || 'They have received numerous awards for their contributions to AI research.'}
            </p>

            <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FFFFFF] mt-8 mb-4">Vision for the Future</h2>
            <p className="text-[#2B2B2B] dark:text-[#DADADA] mb-4">
              {authorContent.content.split('<h2>')[6]?.split('</h2>')[1]?.split('<h2>')[0]?.replace(/<[^>]*>/g, '') || 'Dr. Johnson believes that the future of work lies not in human versus machine competition, but in human-machine collaboration.'}
            </p>
            <p className="text-[#2B2B2B] dark:text-[#DADADA]">
              {authorContent.content.split('<h2>')[6]?.split('</h2>')[2]?.replace(/<[^>]*>/g, '') || 'Through this book, Dr. Johnson aims to demystify AI technology and provide practical guidance for individuals and organizations seeking to harness the power of AI employees.'}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}