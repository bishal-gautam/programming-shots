'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { courses } from '@/data/courses';
import CourseCard from '@/components/ui/CourseCard';
import SearchBar from '@/components/ui/SearchBar';
import DifficultyBadge from '@/components/ui/DifficultyBadge';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function CoursesPage() {
  const { t, locale } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');

  const filteredCourses = useMemo(() => {
    let result = [...courses];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query) ||
          course.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Filter by difficulty
    if (selectedDifficulty !== 'all') {
      result = result.filter((course) => course.difficulty === selectedDifficulty);
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        result.reverse();
        break;
      case 'alphabetic':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'popular':
      default:
        // Keep original order (assumed to be popular)
        break;
    }

    return result;
  }, [searchQuery, selectedDifficulty, sortBy]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {locale === 'ne' ? 'सबै कोर्सहरू' : 'All Courses'}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {locale === 'ne'
                ? 'आफ्नो coding यात्रा सुरु गर्न उपयुक्त कोर्स चुन्नुहोस्।'
                : 'Choose the right course to start your coding journey.'}
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <SearchBar
                placeholder={locale === 'ne' ? 'कोर्स खोज्नुहोस्...' : 'Search courses...'}
                onSearch={(query) => setSearchQuery(query)}
              />
            </div>

            <div className="flex flex-wrap gap-4 justify-between items-center">
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setSelectedDifficulty('all')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedDifficulty === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {t('allLevels') || 'All Levels'}
                </button>
                <button
                  onClick={() => setSelectedDifficulty('beginner')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedDifficulty === 'beginner'
                      ? 'bg-green-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {t('beginner')}
                </button>
                <button
                  onClick={() => setSelectedDifficulty('intermediate')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedDifficulty === 'intermediate'
                      ? 'bg-yellow-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {t('intermediate')}
                </button>
                <button
                  onClick={() => setSelectedDifficulty('advanced')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedDifficulty === 'advanced'
                      ? 'bg-red-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {t('advanced')}
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="popular">{t('popular') || 'Popular'}</option>
                <option value="newest">{t('newest') || 'Newest'}</option>
                <option value="alphabetic">{t('alphabetic') || 'A-Z'}</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {filteredCourses.length} {locale === 'ne' ? 'कोर्सहरू फेला परे' : 'courses found'}
          </p>

          {/* Course Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  slug={course.slug}
                  lessons={course.lessons.length}
                  duration={course.duration}
                  difficulty={course.difficulty}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {locale === 'ne'
                  ? 'कुनै कोर्स फेला परेन। अर्को खोज्न प्रयास गर्नुहोस्।'
                  : 'No courses found. Try a different search.'}
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
