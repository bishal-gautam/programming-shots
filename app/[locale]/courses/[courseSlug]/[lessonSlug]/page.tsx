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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: locale === 'ne' ? 'कोर्सहरू' : 'Courses', href: `/${locale}/courses` },
              { label: course.title, href: `/${locale}/courses/${courseSlug}` },
              { label: lesson.title },
            ]}
          />

          <LessonViewer
            title={lesson.title}
            content={lesson.content}
            code={lesson.code}
            language={lesson.language || 'javascript'}
            lessonNumber={lessonIndex + 1}
            totalLessons={course.lessons.length}
            previousSlug={previousLesson?.slug}
            nextSlug={nextLesson?.slug}
          />

          {/* Quiz Section (if available) */}
          {lesson.quiz && lesson.quiz.length > 0 && (
            <div className="mt-8">
              <QuizBlock
                questions={lesson.quiz}
                title={locale === 'ne' ? 'अभ्यास प्रश्न' : 'Practice Quiz'}
              />
            </div>
          )}

          {/* Code Example (if lesson has code but not displayed in LessonViewer) */}
          {lesson.codeExamples && lesson.codeExamples.length > 0 && (
            <div className="mt-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {locale === 'ne' ? 'कोड उदाहरणहरू' : 'Code Examples'}
              </h2>
              {lesson.codeExamples.map((example, index) => (
                <CodeBlock
                  key={index}
                  code={example.code}
                  language={example.language || 'javascript'}
                  filename={example.filename}
                  highlightLines={example.highlightLines}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
