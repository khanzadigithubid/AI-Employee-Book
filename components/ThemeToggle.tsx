'use client';

import { useTheme } from '@/app/providers/theme-provider';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-[#EDEAE4] dark:bg-[#2A2A2A] text-[#2A6F97] dark:text-[#8ECae6] hover:bg-[#DAD6CE] dark:hover:bg-[#3A3A3A] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2A6F97] dark:focus:ring-[#8ECae6]"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;