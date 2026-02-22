'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { roadmap } from '@/data/roadmap';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default function RoadmapPage() {
  const { t, locale } = useLanguage();

  const getPhaseStatus = (index: number) => {
    if (index === 0) return 'available';
    return 'locked';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: locale === 'ne' ? 'रोडम्याप' : 'Roadmap' },
            ]}
          />

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('title') || (locale === 'ne' ? 'लर्निङ रोडम्याप' : 'Learning Roadmap')}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {locale === 'ne'
                ? 'एक व्यवस्थित मार्गको अनुसरण गरेर प्रोग्रामर बन्नुहोस्।'
                : 'Become a programmer by following a structured path.'}
            </p>
          </div>

          {/* Roadmap Phases */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 hidden md:block" />

            {roadmap.phases.map((phase, index) => {
              const status = getPhaseStatus(index);
              const isLocked = status === 'locked';

              return (
                <div
                  key={phase.id}
                  className={`relative mb-8 ${isLocked ? 'opacity-60' : ''}`}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Phase Number / Status */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold ${
                          isLocked
                            ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                            : 'bg-blue-600 text-white'
                        }`}
                      >
                        {isLocked ? (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        ) : (
                          index + 1
                        )}
                      </div>
                    </div>

                    {/* Phase Content */}
                    <div className="flex-grow bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {phase.title}
                        </h2>
                        <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                          {phase.estimatedTime}
                        </span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {phase.description}
                      </p>

                      {/* Topics */}
                      <div className="mb-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {t('topics') || 'Topics'}:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {phase.topics.map((topic, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-4 mt-4">
                        {!isLocked && phase.courses && phase.courses.length > 0 && (
                          <Link
                            href={`/${locale}/courses/${phase.courses[0]}`}
                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            {t('viewPhase') || 'View Phase'}
                          </Link>
                        )}
                        {isLocked && (
                          <span className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            {t('locked') || 'Complete previous phases'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href={`/${locale}/courses`}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              {locale === 'ne' ? 'कोर्सहरू हेर्नुहोस्' : 'Browse Courses'}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
