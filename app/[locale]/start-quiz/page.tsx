'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { courses } from '@/data/courses';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import QuizBlock from '@/components/ui/QuizBlock';

export default function StartQuizPage() {
  const { locale } = useLanguage();
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [selectedLesson, setSelectedLesson] = useState<string>('');
  const [quizStarted, setQuizStarted] = useState(false);

  const selectedCourseData = courses.find((c) => c.slug === selectedCourse);
  const lessonsWithQuizzes = selectedCourseData?.lessons.filter(
    (l) => l.quiz && l.quiz.length > 0
  ) || [];

  const handleStartQuiz = () => {
    if (selectedLesson) {
      setQuizStarted(true);
    }
  };

  // Find the quiz questions from the selected lesson
  const currentLesson = selectedCourseData?.lessons.find((l) => l.slug === selectedLesson);
  const quizQuestions = (currentLesson?.quiz || []).map((q) => ({
    id: q.id,
    question: q.question[locale === 'ne' ? 'ne' : 'en'],
    options: q.options[locale === 'ne' ? 'ne' : 'en'],
    correctAnswer: q.correctAnswer,
    explanation: q.explanation?.[locale === 'ne' ? 'ne' : 'en'],
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {locale === 'ne' ? 'क्विज सुरु गर्नुहोस्' : 'Start a Quiz'}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {locale === 'ne'
                ? 'आफ्नो ज्ञान परीक्षण गर्न क्विज चुन्नुहोस्।'
                : 'Select a quiz to test your knowledge.'}
            </p>
          </div>

          {!quizStarted ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              {/* Course Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {locale === 'ne' ? 'कोर्स चुन्नुहोस्' : 'Select Course'}
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => {
                    setSelectedCourse(e.target.value);
                    setSelectedLesson('');
                  }}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">
                    {locale === 'ne' ? 'कोर्स चुन्नुहोस्...' : 'Choose a course...'}
                  </option>
                  {courses.map((course) => {
                    const hasQuizzes = course.lessons.some(
                      (l) => l.quiz && l.quiz.length > 0
                    );
                    if (!hasQuizzes) return null;
                    return (
                      <option key={course.id} value={course.slug}>
                        {course.title[locale === "ne" ? "ne" : "en"]}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Lesson Selection */}
              {selectedCourse && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {locale === 'ne' ? 'पाठ चुन्नुहोस्' : 'Select Lesson'}
                  </label>
                  <select
                    value={selectedLesson}
                    onChange={(e) => setSelectedLesson(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">
                      {locale === 'ne' ? 'पाठ चुन्नुहोस्...' : 'Choose a lesson...'}
                    </option>
                    {lessonsWithQuizzes.map((lesson) => (
                      <option key={lesson.slug} value={lesson.slug}>
                        {lesson.title[locale === "ne" ? "ne" : "en"]} ({lesson.quiz?.length} {locale === 'ne' ? 'प्रश्न' : 'questions'})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Start Button */}
              <div className="text-center">
                <button
                  onClick={handleStartQuiz}
                  disabled={!selectedLesson}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {locale === 'ne' ? 'क्विज सुरु गर्नुहोस्' : 'Start Quiz'}
                </button>
              </div>

              {selectedCourse && lessonsWithQuizzes.length === 0 && (
                <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
                  {locale === 'ne'
                    ? 'यस कोर्समा कुनै क्विज उपलब्ध छैन।'
                    : 'No quizzes available for this course.'}
                </p>
              )}
            </div>
          ) : (
            <div>
              <button
                onClick={() => {
                  setQuizStarted(false);
                  setSelectedLesson('');
                }}
                className="mb-6 text-blue-600 dark:text-blue-400 hover:underline"
              >
                ← {locale === 'ne' ? 'अर्को क्विज चुन्नुहोस्' : 'Choose another quiz'}
              </button>

              {quizQuestions.length > 0 ? (
                <QuizBlock
                  questions={quizQuestions}
                  title={currentLesson?.title?.[locale === "ne" ? "ne" : "en"]}
                  onComplete={(score) => {
                    console.log('Quiz completed with score:', score);
                  }}
                />
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400">
                    {locale === 'ne'
                      ? 'यस पाठमा कुनै प्रश्न छैनन्।'
                      : 'No questions available for this lesson.'}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Quick Quiz Links */}
          {!quizStarted && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {locale === 'ne' ? 'छिटो क्विज लिंकहरू' : 'Quick Quiz Links'}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {courses
                  .filter((c) => c.lessons.some((l) => l.quiz && l.quiz.length > 0))
                  .slice(0, 4)
                  .map((course) => {
                    const quizLesson = course.lessons.find(
                      (l) => l.quiz && l.quiz.length > 0
                    );
                    return (
                      <Link
                        key={course.id}
                        href={`/${locale}/courses/${course.slug}/${quizLesson?.slug}`}
                        className="block bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-lg transition-shadow"
                      >
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {course.title[locale === "ne" ? "ne" : "en"]}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {course.lessons.filter((l) => l.quiz).length}{' '}
                          {locale === 'ne' ? 'क्विजहरू' : 'quizzes'}
                        </p>
                      </Link>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
