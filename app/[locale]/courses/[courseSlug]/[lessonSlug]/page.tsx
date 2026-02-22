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
  const { t, tcourses } = useLanguage();
  
  const course = courses.find((c) => c.slug === courseSlug);
  const lessonIndex = course?.lessons.findIndex((l) => l.slug === lessonSlug);
  const lesson = course?.lessons[lessonIndex];

  // Get translations
  const courseTranslations = tcourses(courseSlug, lessonSlug) as {
    title?: string;
    content?: string;
    codeExamples?: Record<string, { explanation?: string }>;
    quiz?: Record<string, { question?: string; explanation?: string; options?: string[] }>;
  } | undefined;

  const displayTitle = locale === 'ne' && courseTranslations?.title ? courseTranslations.title : lesson?.title;
  const displayContent = locale === 'ne' && courseTranslations?.content ? courseTranslations.content : lesson?.content;

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

  // Translate quiz questions if available
  const getTranslatedQuiz = () => {
    if (!lesson?.quiz || locale !== 'ne' || !courseTranslations?.quiz) {
      return lesson?.quiz || [];
    }
    
    return lesson.quiz.map((q) => {
      const quizTrans = courseTranslations.quiz?.[q.id];
      if (!quizTrans) return q;
      
      return {
        ...q,
        question: quizTrans.question || q.question,
        explanation: quizTrans.explanation || q.explanation,
        options: quizTrans.options || q.options,
      };
    });
  };

  const translatedQuiz = getTranslatedQuiz();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: locale === 'ne' ? 'कोर्सहरू' : 'Courses', href: `/${locale}/courses` },
              { label: displayTitle as string, href: `/${locale}/courses/${courseSlug}` },
              { label: displayTitle as string },
            ]}
          />

          <LessonViewer
            title={displayTitle as string}
            content={displayContent as string}
            code={lesson?.code}
            language={lesson?.language || 'javascript'}
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
