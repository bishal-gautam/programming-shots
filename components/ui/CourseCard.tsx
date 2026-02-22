'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

interface CourseCardProps {
  title: string;
  description: string;
  slug: string;
  thumbnail?: string;
  lessons: number;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  progress?: number;
}

const difficultyColors = {
  beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
};

export default function CourseCard({
  title,
  description,
  slug,
  thumbnail,
  lessons,
  duration,
  difficulty,
  progress = 0,
}: CourseCardProps) {
  const { t, locale } = useLanguage();
  const { theme } = useTheme();

  return (
    <Link href={`/${locale}/courses/${slug}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
        {thumbnail && (
          <div className="h-48 overflow-hidden">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty]}`}>
              {t(difficulty)}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {lessons} {t('lessons')}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {duration}
            </span>
            {progress > 0 && (
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {progress}%
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
