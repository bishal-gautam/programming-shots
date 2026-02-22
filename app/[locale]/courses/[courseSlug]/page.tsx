'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { courses } from '@/data/courses';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/ui/Breadcrumb';
import DifficultyBadge from '@/components/ui/DifficultyBadge';
import ProgressBar from '@/components/ui/ProgressBar';

interface PageProps {
  params: Promise<{ locale: string; courseSlug: string }>;
}

export default function CourseDetailPage({ params }: PageProps) {
  const { locale, courseSlug } = use(params);
  const { t } = useLanguage();
  const [enrolled, setEnrolled] = useState(false);
  
  const course = courses.find((c) => c.slug === courseSlug);

  // Get translated title and description based on locale
  const displayTitle = course?.title[locale] || course?.title.en;
  const displayDescription = course?.description[locale] || course?.description.en;

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Course not found
            </h1>
            <Link href={`/${locale}/courses`} className="text-blue-600 hover:underline">
              Back to courses
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleEnroll = () => {
    setEnrolled(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: locale === 'ne' ? 'कोर्सहरू' : 'Courses', href: `/${locale}/courses` },
              { label: displayTitle },
            ]}
          />

          {/* Course Header */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <h1 className="text-4xl font-bold mb-2">{displayTitle}</h1>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <DifficultyBadge difficulty="beginner" />
                <span className="text-gray-600 dark:text-gray-300">
                  {course.lessons.length} {t('lessons')}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {course.phase} {t('phase') || 'Phase'}
                </span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
                {displayDescription}
              </p>

              {/* Enroll Button */}
              {!enrolled ? (
                <button
                  onClick={handleEnroll}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t('enrollNow') || 'Enroll Now'}
                </button>
              ) : (
                <div className="flex items-center gap-4">
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                    ✓ {t('enrolled') || 'Enrolled'}
                  </span>
                  <Link
                    href={`/${locale}/courses/${courseSlug}/${course.lessons[0]?.slug || 'lesson-1'}`}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {t('continue') || 'Continue'} →
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Lessons List */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t('lessons')}
            </h2>
            <div className="space-y-4">
              {course.lessons.map((lesson, index) => {
                // Get translated lesson title based on locale
                const displayLessonTitle = lesson.title[locale] || lesson.title.en;
                
                return (
                <Link
                  key={lesson.slug}
                  href={`/${locale}/courses/${courseSlug}/${lesson.slug}`}
                  className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold">
                      {index + 1}
                    </span>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {displayLessonTitle}
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              )})}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
