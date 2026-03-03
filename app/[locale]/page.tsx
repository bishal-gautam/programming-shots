'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import CourseCard from '@/components/ui/CourseCard';
import SearchBar from '@/components/ui/SearchBar';
import { courses } from '@/data/courses';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  const { locale } = useLanguage();

  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
              {locale === 'ne' ? 'प्रोग्रामिङ सिक्नुहोस्' : 'Learn Programming'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
              {locale === 'ne' 
                ? 'निःशुल्क कोर्स, ट्यूटोरियल, र संसाधनहरूको साथ आफ्नो coding यात्रा सुरु गर्नुहोस्।'
                : 'Start your coding journey with free courses, tutorials, and resources.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/courses`}
                className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                {locale === 'ne' ? 'कोर्सहरू हेर्नुहोस्' : 'Browse Courses'}
              </Link>
              <Link
                href={`/${locale}/roadmap`}
                className="px-8 py-4 bg-blue-800 bg-opacity-50 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors border border-blue-400"
              >
                {locale === 'ne' ? 'लर्निङ रोडम्याप' : 'Learning Roadmap'}
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-12 flex justify-center">
            <SearchBar 
              placeholder={locale === 'ne' ? 'के सिक्ने हो?' : 'What do you want to learn?'}
            />
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-gray-50 dark:text-gray-900"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {locale === 'ne' ? 'किन हाम्रो साथ सिक्ने?' : 'Why Learn With Us?'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {locale === 'ne' ? 'निःशुल्क कोर्सहरू' : 'Free Courses'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {locale === 'ne' 
                  ? 'सबै कोर्सहरू पूर्णतः निःशुल्क छन्। कुनै पनि समय सिक्न सुरु गर्नुहोस्।'
                  : 'All courses are completely free. Start learning anytime.'}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {locale === 'ne' ? 'व्यावहारिक परियोजनाहरू' : 'Hands-on Projects'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {locale === 'ne' 
                  ? 'वास्तविक परियोजनाहरूमा काम गरेर सीपहरू प्राप्त गर्नुहोस्।'
                  : 'Gain skills by working on real-world projects.'}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {locale === 'ne' ? 'दुवै भाषामा' : 'Bilingual Content'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {locale === 'ne' 
                  ? 'अंग्रेजी र नेपाली दुवै भाषामा सामग्री उपलब्ध।'
                  : 'Content available in both English and Nepali.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {locale === 'ne' ? 'विशेष कोर्सहरू' : 'Featured Courses'}
            </h2>
            <Link
              href={`/${locale}/courses`}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {locale === 'ne' ? 'सबै हेर्नुहोस्' : 'View All'} →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title[locale as keyof typeof course.title] || course.title.en}
                description={course.description[locale as keyof typeof course.description] || course.description.en}
                slug={course.slug}
                lessons={course.lessons.length}
                duration={`${course.phase} ${locale === 'ne' ? 'चरण' : 'Phase'}`}
                difficulty="beginner"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {locale === 'ne' ? 'छिटो लिंकहरू' : 'Quick Links'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href={`/${locale}/roadmap`} className="block">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  {locale === 'ne' ? 'रोडम्याप' : 'Roadmap'}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {locale === 'ne' ? 'तपाईंको सिकाइ मार्ग' : 'Your learning path'}
                </p>
              </div>
            </Link>
            <Link href={`/${locale}/cheatsheets`} className="block">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  {locale === 'ne' ? 'चिटशीट' : 'Cheatsheets'}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {locale === 'ne' ? 'छोटो संदर्भ' : 'Quick references'}
                </p>
              </div>
            </Link>
            <Link href={`/${locale}/glossary`} className="block">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-yellow-500">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  {locale === 'ne' ? 'शब्दावली' : 'Glossary'}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {locale === 'ne' ? 'प्रोग्रामिङ शब्दहरू' : 'Programming terms'}
                </p>
              </div>
            </Link>
            <Link href={`/${locale}/resources`} className="block">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-500">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  {locale === 'ne' ? 'संसाधनहरू' : 'Resources'}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {locale === 'ne' ? 'बाहिरी लिंकहरू' : 'External links'}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
