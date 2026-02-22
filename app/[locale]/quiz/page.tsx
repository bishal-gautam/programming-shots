'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { courses } from '@/data/courses';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function QuizPage() {
  const { locale } = useLanguage();
  const [selectedCourse, setSelectedCourse] = useState<string>('');

  // Get all lessons from all courses that have quizzes
  const coursesWithQuizzes = courses.filter(
    (course) => course.lessons.some((lesson) => lesson.quiz && lesson.quiz.length > 0)
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {locale === 'ne' ? 'क्विज' : 'Quiz'}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {locale === 'ne'
                ? 'आफ्नो ज्ञान परीक्षण गर्नुहोस्।'
                : 'Test your knowledge with quizzes.'}
            </p>
          </div>

          {coursesWithQuizzes.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {coursesWithQuizzes.map((course) => {
                const quizCount = course.lessons.filter(
                  (l) => l.quiz && l.quiz.length > 0
                ).length;

                return (
                  <Link
                    key={course.id}
                    href={`/${locale}/courses/${course.slug}`}
                    className="block bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {quizCount} {locale === 'ne' ? 'क्विजहरू' : 'quizzes available'}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400">
                        {locale === 'ne' ? 'सुरु गर्नुहोस्' : 'Start'} →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                {locale === 'ne'
                  ? 'हाल कुनै क्विज उपलब्ध छैन।'
                  : 'No quizzes available yet.'}
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
