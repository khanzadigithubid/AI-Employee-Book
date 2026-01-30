'use client';

import { useState, useEffect } from 'react';

const ReadingProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );

      const totalScrollable = docHeight - windowHeight;
      const scrolledPercentage = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, scrolledPercentage)));
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent pointer-events-none">
      <div
        className="h-full bg-[#2A6F97] dark:bg-[#8ECae6] transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgressBar;