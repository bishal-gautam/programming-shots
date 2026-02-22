'use client';

import { useState, use } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { courses } from '@/data/courses';
import LessonViewer from '@/components/ui/LessonViewer';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/ui/Breadcrumb';
import QuizBlock from '@/components/ui/QuizBlock';
import CodeBlock from '@/components/ui/CodeBlock';

interface PageProps {
  params: Promise<{ locale: string; courseSlug: string; lessonSlug: string }>;
}

export default function LessonPage({ params }: PageProps) {
  const { locale, courseSlug, lessonSlug } = use(params);
  const { t } = useLanguage();
  
  const course = courses.find((c) => c.slug === courseSlug);
  const lessonIndex = course?.lessons.findIndex((l) => l.slug === lessonSlug);
  const lesson = course?.lessons[lessonIndex];

  // Get translated content based on locale
  const displayTitle = lesson?.title[locale] || lesson?.title.en;
  const displayContent = lesson?.content[locale] || lesson?.content.en;

  if (!course || !lesson) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Lesson not found
            </h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const previousLesson = lessonIndex > 0 ? course.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < course.lessons.length - 1 ? course.lessons[lessonIndex + 1] : null;

  // Get translated quiz questions
  const getTranslatedQuiz = () => {
    if (!lesson?.quiz) return [];
    
    return lesson.quiz.map((q) => ({
      ...q,
      question: q.question[locale] || q.question.en,
      explanation: q.explanation[locale] || q.explanation.en,
      options: q.options[locale] || q.options.en,
    }));
  };

  const translatedQuiz = getTranslatedQuiz();

  // Get translated code examples
  const getTranslatedCodeExamples = () => {
    if (!lesson?.codeExamples) return [];
    
    return lesson.codeExamples.map((example) => ({
      ...example,
      explanation: example.explanation[locale] || example.explanation.en,
    }));
  };

  const translatedCodeExamples = getTranslatedCodeExamples();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: locale === 'ne' ? 'कोर्सहरू' : 'Courses', href: `/${locale}/courses` },
              { label: course.title[locale] || course.title.en, href: `/${locale}/courses/${courseSlug}` },
              { label: displayTitle as string },
            ]}
          />

          <LessonViewer
            title={displayTitle as string}
            content={displayContent as string}
            lessonNumber={lessonIndex + 1}
            totalLessons={course.lessons.length}
            previousSlug={previousLesson?.slug}
            nextSlug={nextLesson?.slug}
          />

          {/* Quiz Section (if available) */}
          {translatedQuiz && translatedQuiz.length > 0 && (
            <div className="mt-8">
              <QuizBlock
                questions={translatedQuiz}
                title={locale === 'ne' ? 'अभ्यास प्रश्न' : 'Practice Quiz'}
              />
            </div>
          )}

          {/* Code Examples */}
          {translatedCodeExamples && translatedCodeExamples.length > 0 && (
            <div className="mt-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {locale === 'ne' ? 'कोड उदाहरणहरू' : 'Code Examples'}
              </h2>
              {translatedCodeExamples.map((example, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <CodeBlock
                    code={example.code}
                    language={example.language || 'javascript'}
                  />
                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    {example.explanation}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
