import './globals.css';
import type { Metadata } from 'next';
import { Inter, Libre_Bodoni } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/app/providers/theme-provider';
import { I18nProvider } from '@/i18n/context';

// Define the theme initialization script
function ThemeInitializer() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const savedTheme = localStorage.getItem('theme');
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            let theme = 'light';
            if (savedTheme) {
              theme = savedTheme;
            } else if (systemPrefersDark) {
              theme = 'dark';
            }

            if (theme === 'dark') {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          })();
        `,
      }}
    />
  );
}

// Define the language direction initialization script
function DirInitializer() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const savedLanguage = localStorage.getItem('language') || 'en';
            const languageDirections = {
              'en': 'ltr',
              'ur': 'rtl',
              'ar': 'rtl'
            };

            const dir = languageDirections[savedLanguage] || 'ltr';
            document.documentElement.setAttribute('dir', dir);

            // Listen for language changes and update direction
            const observer = new MutationObserver(function(mutations) {
              mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-language') {
                  const newLanguage = document.documentElement.getAttribute('data-language');
                  const newDir = languageDirections[newLanguage] || 'ltr';
                  document.documentElement.setAttribute('dir', newDir);
                }
              });
            });

            observer.observe(document.documentElement, {
              attributes: true,
              attributeFilter: ['data-language']
            });
          })();
        `,
      }}
    />
  );
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
const libreBodoni = Libre_Bodoni({
  subsets: ['latin'],
  variable: '--font-libre-bodoni',
});

export const metadata: Metadata = {
  title: 'Your Personal AI Employee: Build, Train & Deploy Your Digital Worker',
  description: 'Professional guide to building and deploying your own AI employee',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Default to English for the initial render, then JavaScript will update it
  const defaultLanguage = 'en';

  return (
    <html lang={defaultLanguage} dir="ltr" data-language={defaultLanguage} className="h-full">
      <head>
        <ThemeInitializer />
        <DirInitializer />
      </head>
      <body className={`${inter.variable} ${libreBodoni.variable} min-h-screen flex flex-col bg-[#FAF7F2] dark:bg-[#1C1C1C] text-[#2B2B2B] dark:text-[#DADADA] font-sans`}>
        <ThemeProvider>
          <I18nProvider>
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}