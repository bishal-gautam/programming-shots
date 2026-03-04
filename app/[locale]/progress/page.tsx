'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useProgress } from '@/context/ProgressContext';
import { courses } from '@/data/courses';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProgressBar from '@/components/ui/ProgressBar';

export default function ProgressPage() {
  const { locale } = useLanguage();
  const { progress, markLessonComplete, getCourseProgress } = useProgress();
  const [stats, setStats] = useState({
    totalLessons: 0,
    completedLessons: 0,
    totalCourses: 0,
    enrolledCourses: 0,
  });

  useEffect(() => {
    // Calculate stats from courses
    const totalLessons = courses.reduce((acc, course) => acc + course.lessons.length, 0);
    const completedLessons = progress.reduce((acc, p) => acc + p.lessonsCompleted, 0);
    const enrolledCourses = progress.filter((p) => p.lessonsCompleted > 0).length;

    setStats({
      totalLessons,
      completedLessons,
      totalCourses: courses.length,
      enrolledCourses,
    });
  }, [progress]);

  const overallProgress = stats.totalLessons > 0 
    ? Math.round((stats.completedLessons / stats.totalLessons) * 100) 
    : 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {locale === 'ne' ? 'तपाईंको प्रगति' : 'Your Progress'}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {locale === 'ne'
                ? 'आफ्नो सिकाइ यात्रामा कहाँ छानुहेस्।'
                : 'Track your learning journey.'}
            </p>
          </div>

          {/* Overall Progress Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              {locale === 'ne' ? 'समग्र प्रगति' : 'Overall Progress'}
            </h2>
            <ProgressBar 
              progress={overallProgress} 
              size="lg"
              showLabel={true}
            />
            <div className="grid grid-cols-3 gap-4 mt-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">
                  {stats.completedLessons}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {locale === 'ne' ? 'पूर्ण पाठ' : 'Completed Lessons'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-600 dark:text-gray-300">
                  {stats.totalLessons}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {locale === 'ne' ? 'जम्मा पाठ' : 'Total Lessons'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">
                  {stats.enrolledCourses}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {locale === 'ne' ? 'दर्ता कोर्स' : 'Enrolled Courses'}
                </div>
              </div>
            </div>
          </div>

          {/* Course Progress */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              {locale === 'ne' ? 'कोर्स प्रगति' : 'Course Progress'}
            </h2>
            
            {courses.length > 0 ? (
              <div className="space-y-6">
                {courses.map((course) => {
                  const courseProgress = getCourseProgress(course.slug);
                  const progressPercent = courseProgress 
                    ? Math.round((courseProgress.lessonsCompleted / courseProgress.totalLessons) * 100)
                    : 0;
                  const hasStarted = courseProgress ? courseProgress.lessonsCompleted > 0 : false;

                  return (
                    <div key={course.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {course.title[locale === "ne" ? "ne" : "en"]}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {progressPercent}%
                        </span>
                      </div>
                      <ProgressBar 
                        progress={progressPercent} 
                        size="sm"
                        showLabel={false}
                        
                      />
                      <div className="mt-3 flex justify-between items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {course.lessons.length} {locale === 'ne' ? 'पाठ' : 'lessons'}
                        </span>
                        <Link
                          href={`/${locale}/courses/${course.slug}`}
                          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {hasStarted 
                            ? (locale === 'ne' ? 'जारी राख्नुहोस्' : 'Continue') 
                            : (locale === 'ne' ? 'सुरु गर्नुहोस्' : 'Start')}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-gray-400">
                  {locale === 'ne'
                    ? 'अभिलेखहरू छैनन्। कोर्सहरू हेर्नुहोस्।'
                    : 'No progress yet. Browse courses to start learning.'}
                </p>
                <Link
                  href={`/${locale}/courses`}
                  className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {locale === 'ne' ? 'कोर्सहरू हेर्नुहोस्' : 'Browse Courses'}
                </Link>
              </div>
            )}
          </div>

          {/* Achievements Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mt-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              {locale === 'ne' ? 'उपलब्धिहरू' : 'Achievements'}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { emoji: '🌱', label: locale === 'ne' ? 'सुरुवात' : 'First Step', achieved: stats.completedLessons > 0 },
                { emoji: '📚', label: locale === 'ne' ? 'पाठ पाँच' : '5 Lessons', achieved: stats.completedLessons >= 5 },
                { emoji: '🔥', label: locale === 'ne' ? 'दस पाठ' : '10 Lessons', achieved: stats.completedLessons >= 10 },
                { emoji: '🏆', label: locale === 'ne' ? 'मास्टर' : 'Master', achieved: stats.completedLessons >= 20 },
              ].map((achievement, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg text-center ${
                    achievement.achieved
                      ? 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800'
                      : 'bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 opacity-50'
                  }`}
                >
                  <div className="text-3xl mb-2">{achievement.emoji}</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
