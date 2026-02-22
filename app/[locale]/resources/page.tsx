'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { resources } from '@/data/resources';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ResourcesPage() {
  const { locale } = useLanguage();

  const categories = [
    { id: 'tutorials', icon: '📚', color: 'blue' },
    { id: 'documentation', icon: '📖', color: 'green' },
    { id: 'practice', icon: '💻', color: 'purple' },
    { id: 'community', icon: '👥', color: 'yellow' },
    { id: 'tools', icon: '🔧', color: 'red' },
  ];

  const colorClasses: { [key: string]: { bg: string; border: string; text: string } } = {
    blue: { bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800', text: 'text-blue-700 dark:text-blue-300' },
    green: { bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800', text: 'text-green-700 dark:text-green-300' },
    purple: { bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-800', text: 'text-purple-700 dark:text-purple-300' },
    yellow: { bg: 'bg-yellow-50 dark:bg-yellow-900/20', border: 'border-yellow-200 dark:border-yellow-800', text: 'text-yellow-700 dark:text-yellow-300' },
    red: { bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-800', text: 'text-red-700 dark:text-red-300' },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {locale === 'ne' ? 'संसाधनहरू' : 'Resources'}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {locale === 'ne'
                ? 'निःशुल्क अनलाइन संसाधनहरू जसले तपाईंलाई प्रोग्रामिङ सिक्न मद्दत गर्नेछ।'
                : 'Free online resources to help you learn programming.'}
            </p>
          </div>

          {/* Resource Categories */}
          <div className="space-y-12">
            {categories.map((category) => {
              const categoryResources = resources.filter((r) => r.category === category.id);
              if (categoryResources.length === 0) return null;

              const colors = colorClasses[category.color];

              return (
                <div key={category.id}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{category.icon}</span>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
                      {category.id}
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryResources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block p-6 rounded-lg border ${colors.border} ${colors.bg} hover:shadow-lg transition-shadow`}
                      >
                        <h3 className={`font-semibold text-lg mb-2 ${colors.text}`}>
                          {resource.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          {resource.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {resource.type}
                          </span>
                          <span className={`text-sm ${colors.text}`}>
                            Visit →
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Resources */}
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {locale === 'ne' ? 'अन्य उपयोगी लिंकहरू' : 'Other Useful Links'}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="https://developer.mozilla.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                <span className="text-2xl">🌐</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">MDN Web Docs</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Web technology documentation</p>
                </div>
              </a>
              <a
                href="https://stackoverflow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
              >
                <span className="text-2xl">💬</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Stack Overflow</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Q&A for developers</p>
                </div>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/20 transition-colors"
              >
                <span className="text-2xl">🐙</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">GitHub</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Code hosting & collaboration</p>
                </div>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                <span className="text-2xl">🎬</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">YouTube</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Video tutorials</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
