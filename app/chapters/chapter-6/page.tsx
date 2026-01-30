import { chapters } from '@/data/translated-chapters';
import ChapterPageClient from './ChapterPageClient';

// Generate metadata for the chapter
export async function generateMetadata() {
  // For metadata, we'll use the English version as default
  const englishChapter = chapters[5].translations.en;

  return {
    title: `${englishChapter.title} | Your Personal AI Employee`,
    description: englishChapter.summary,
  };
}

export default function ChapterPage() {
  return <ChapterPageClient chapterIndex={5} />;
}