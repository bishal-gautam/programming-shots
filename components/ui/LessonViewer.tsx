'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

interface LessonViewerProps {
  title: string;
  content: string;
  code?: string;
  language?: string;
  lessonNumber: number;
  totalLessons: number;
  previousSlug?: string;
  nextSlug?: string;
  courseSlug?: string;
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
  courseSlug,
}: LessonViewerProps) {
  const { t, locale } = useLanguage();
  const [activeTab, setActiveTab] = useState<'content' | 'code'>('content');

  // Convert markdown to HTML-like content for proper rendering
  const renderContent = (text: string) => {
    if (!text) return null;
    
    return text.split('\n').map((line, i) => {
      // Headers
      if (line.startsWith('### ')) {
        return <h3 key={i} className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('# ')) {
        return <h1 key={i} className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">{line.replace('# ', '')}</h1>;
      }
      // List items
      if (line.trim().startsWith('- ') || line.trim().match(/^\d+\./)) {
        return <li key={i} className="text-gray-700 dark:text-gray-300 ml-4 mb-1">{line.replace(/^[-\d.]+\s*/, '')}</li>;
      }
      // Code blocks (inline)
      if (line.includes('`') && !line.startsWith('```')) {
        const parts = line.split(/(`[^`]+`)/);
        return (
          <p key={i} className="text-gray-700 dark:text-gray-300 mb-3">
            {parts.map((part, j) => 
              part.startsWith('`') && part.endsWith('`') ? (
                <code key={j} className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono text-pink-600 dark:text-pink-400">{part.slice(1, -1)}</code>
              ) : part
            )}
          </p>
        );
      }
      // Empty lines
      if (line.trim() === '') {
        return <br key={i} />;
      }
      // Regular paragraphs
      return <p key={i} className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">{line}</p>;
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
              Lesson {lessonNumber} of {totalLessons}
            </span>
          </div>
          
          {/* Tab Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('content')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'content'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              📖 Content
            </button>
            {code && (
              <button
                onClick={() => setActiveTab('code')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'code'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
              💻 Code
            </button>
            )}
          </div>
        </div>
        
        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-4">
          {title}
        </h1>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-6 md:p-8">
        {activeTab === 'content' && (
          <div className="prose dark:prose-invert max-w-none">
            {renderContent(content)}
          </div>
        )}

        {activeTab === 'code' && code && (
          <div className="relative">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-900 rounded-t-lg">
              <span className="text-gray-400 text-sm font-mono">{language}</span>
              <button 
                onClick={() => navigator.clipboard.writeText(code)}
                className="text-gray-400 hover:text-white text-sm"
              >
                📋 Copy
              </button>
            </div>
            <pre className="bg-gray-900 dark:bg-gray-950 p-4 rounded-b-lg overflow-x-auto">
              <code className="text-sm text-gray-100 font-mono whitespace-pre-wrap">
                {code}
              </code>
            </pre>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="border-t border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="flex flex-col sm:flex-row gap-3 sm:justify-between">
          {previousSlug ? (
            <Link
              href={courseSlug ? `/${locale}/courses/${courseSlug}/${previousSlug}` : `/${previousSlug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all font-medium shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </Link>
          ) : <div />}
          
          {nextSlug ? (
            <Link
              href={courseSlug ? `/${locale}/courses/${courseSlug}/${nextSlug}` : `/${nextSlug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-medium shadow-md hover:shadow-lg"
            >
              Next
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <Link
              href={`/${locale}/courses`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all font-medium shadow-md"
            >
              Complete Course ✓
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
