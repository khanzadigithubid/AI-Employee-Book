'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Chapter {
  slug: string;
  title: string;
}

const ChapterSidebar = ({ chapters }: { chapters: Chapter[] }) => {
  const pathname = usePathname();
  
  return (
    <aside className="w-full md:w-64 bg-white dark:bg-gray-800 rounded-lg shadow p-4 h-fit">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Table of Contents</h2>
      <ul className="space-y-2">
        {chapters.map((chapter) => (
          <li key={chapter.slug}>
            <Link 
              href={`/chapters/${chapter.slug}`}
              className={`block py-2 px-3 rounded transition-colors ${
                pathname === `/chapters/${chapter.slug}`
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {chapter.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ChapterSidebar;