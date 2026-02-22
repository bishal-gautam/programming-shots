'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { glossary } from '@/data/glossary';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SearchBar from '@/components/ui/SearchBar';

export default function GlossaryPage() {
  const { locale } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGlossary = useMemo(() => {
    if (!searchQuery) return glossary;
    
    const query = searchQuery.toLowerCase();
    return glossary.filter(
      (item) =>
        item.term.toLowerCase().includes(query) ||
        item.definition.en.toLowerCase().includes(query) ||
        item.definition.ne?.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Group by first letter
  const groupedGlossary = useMemo(() => {
    const groups: { [key: string]: typeof glossary } = {};
    filteredGlossary.forEach((item) => {
      const letter = item.term[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(item);
    });
    return groups;
  }, [filteredGlossary]);

  const letters = Object.keys(groupedGlossary).sort();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {locale === 'ne' ? 'शब्दावली' : 'Glossary'}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {locale === 'ne'
                ? 'प्रोग्रामिङ र कम्प्युटर विज्ञान शब्दहरूको संग्रह।'
                : 'A collection of programming and computer science terms.'}
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <SearchBar
              placeholder={locale === 'ne' ? 'शब्द खोज्नुहोस्...' : 'Search terms...'}
              onSearch={(query) => setSearchQuery(query)}
            />
          </div>

          {/* Letter Navigation */}
          {letters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {letters.map((letter) => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {letter}
                </a>
              ))}
            </div>
          )}

          {/* Glossary Items */}
          {letters.length > 0 ? (
            <div className="space-y-8">
              {letters.map((letter) => (
                <div key={letter} id={`letter-${letter}`}>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">
                      {letter}
                    </span>
                  </h2>
                  <div className="space-y-4">
                    {groupedGlossary[letter].map((item, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                      >
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {item.term}
                          {item.pronunciation && (
                            <span className="text-sm font-normal text-gray-500 ml-2">
                              {item.pronunciation}
                            </span>
                          )}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">
                          {item.definition.en}
                        </p>
                        {item.definition.ne && (
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            <span className="font-medium">नेपाली:</span> {item.definition.ne}
                          </p>
                        )}
                        {item.example && (
                          <div className="mt-3 p-3 bg-gray-100 dark:bg-gray-700 rounded">
                            <code className="text-sm text-gray-800 dark:text-gray-200">
                              {item.example}
                            </code>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                {locale === 'ne'
                  ? 'कुनै शब्द फेला परेन।'
                  : 'No terms found.'}
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
