import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { ProgressProvider } from '@/context/ProgressContext';
import '@/styles/globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 m-0 p-0">
        <ThemeProvider>
          <LanguageProvider>
            <ProgressProvider>
              {children}
            </ProgressProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
