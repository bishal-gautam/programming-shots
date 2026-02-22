'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface LessonViewerProps {
  title: string;
  content: string;
  code?: string;
  language?: string;
  lessonNumber: number;
  totalLessons: number;
  previousSlug?: string;
  nextSlug?: string;
}

export default function LessonViewer({
  title,
  content,
  code,
  language = 'javascript',
  lessonNumber,
  totalLessons,
  previousSlug,
  nextSlug,
}: LessonViewerProps) {
  const { t, locale } = useLanguage();
  const [activeTab, setActiveTab] = useState<'content' | 'code'>('content');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {t('lesson')} {lessonNumber} / {totalLessons}
            </span>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {title}
            </h1>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('content')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'content'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {t('content') || 'Content'}
            </button>
            {code && (
              <button
                onClick={() => setActiveTab('code')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'code'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {t('code') || 'Code'}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        {activeTab === 'content' && (
          <div className="prose dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        )}

        {activeTab === 'code' && code && (
          <pre className="bg-gray-900 dark:bg-gray-950 p-4 rounded-lg overflow-x-auto">
            <code className={`language-${language} text-sm`}>
              {code}
            </code>
          </pre>
        )}
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 p-4 flex justify-between">
        {previousSlug ? (
          <a
            href={`/${locale}/courses/${previousSlug}`}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            ← {t('previous') || 'Previous'}
          </a>
        ) : (
          <div />
        )}
        {nextSlug ? (
          <a
            href={`/${locale}/courses/${nextSlug}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('next') || 'Next'} →
          </a>
        ) : (
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            onClick={() => {
              // Mark lesson as complete and redirect
              window.location.href = `/${locale}/courses`;
            }}
          >
            {t('complete') || 'Complete'} ✓
          </button>
        )}
      </div>
    </div>
  );
}
