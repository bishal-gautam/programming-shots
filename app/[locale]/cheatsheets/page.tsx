'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { cheatsheets } from '@/data/cheatsheets';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CodeBlock from '@/components/ui/CodeBlock';

export default function CheatsheetsPage() {
  const { locale } = useLanguage();
  const [selectedCheatsheet, setSelectedCheatsheet] = useState(cheatsheets[0]?.id || '');

  const currentCheatsheet = cheatsheets.find((c) => c.id === selectedCheatsheet);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {locale === 'ne' ? 'चिटशीटहरू' : 'Cheatsheets'}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {locale === 'ne'
                ? 'छोटो र छिटो संदर्भको लागि।'
                : 'Quick reference guides for common programming concepts.'}
            </p>
          </div>

          {/* Language Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {cheatsheets.map((cheatsheet) => (
              <button
                key={cheatsheet.id}
                onClick={() => setSelectedCheatsheet(cheatsheet.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCheatsheet === cheatsheet.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {cheatsheet.language}
              </button>
            ))}
          </div>

          {/* Cheatsheet Content */}
          {currentCheatsheet && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {currentCheatsheet.language} {locale === 'ne' ? 'चिटशीट' : 'Cheatsheet'}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {currentCheatsheet.description}
                </p>
              </div>

              <div className="p-6 space-y-8">
                {currentCheatsheet.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {section.title}
                    </h3>
                    <CodeBlock
                      code={section.code}
                      language={currentCheatsheet.id}
                      filename={section.filename}
                    />
                    {section.explanation && (
                      <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                        {section.explanation}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Download Button */}
          {currentCheatsheet && (
            <div className="mt-8 text-center">
              <button
                onClick={() => {
                  const content = currentCheatsheet.sections
                    .map((s) => `// ${s.title}\n${s.code}`)
                    .join('\n\n');
                  const blob = new Blob([content], { type: 'text/plain' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `${currentCheatsheet.id}-cheatsheet.txt`;
                  a.click();
                  URL.revokeObjectURL(url);
                }}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {locale === 'ne' ? 'डाउनलोड गर्नुहोस्' : 'Download'}
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
