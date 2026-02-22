'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  const { locale } = useLanguage();

  const features = [
    {
      icon: '🎓',
      title: locale === 'ne' ? 'निःशुल्क शिक्षा' : 'Free Education',
      description: locale === 'ne' 
        ? 'सबै कोर्सहरू र सामग्रीहरू पूर्णतः निःशुल्क छन्।'
        : 'All courses and materials are completely free.',
    },
    {
      icon: '🌍',
      title: locale === 'ne' ? 'द्विभाषी' : 'Bilingual',
      description: locale === 'ne'
        ? 'अंग्रेजी र नेपाली दुवै भाषामा उपलब्ध।'
        : 'Available in both English and Nepali.',
    },
    {
      icon: '📱',
      title: locale === 'ne' ? 'मोबाइल अनुकूल' : 'Mobile Friendly',
      description: locale === 'ne'
        ? 'तपाईंको फोन वा ट्याबलेटबाट सिक्नुहोस्।'
        : 'Learn on your phone or tablet.',
    },
    {
      icon: '🚀',
      title: locale === 'ne' ? 'व्यावहारिक' : 'Hands-on',
      description: locale === 'ne'
        ? 'कोड उदाहरण र परियोजनाहरूको साथ सिक्नुहोस्।'
        : 'Learn with code examples and projects.',
    },
  ];

  const team = [
    {
      name: 'Programming Shots',
      role: locale === 'ne' ? 'टिम' : 'Team',
      description: locale === 'ne'
        ? 'प्रोग्रामिङ शिक्षालाई सबैको लागि सुलभ बनाउने लक्ष्य।'
        : 'Making programming education accessible to everyone.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {locale === 'ne' ? 'हाम्रो बारेमा' : 'About Us'}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {locale === 'ne'
                ? 'Programming Shots ले निःशुल्क प्रोग्रामिङ शिक्षा प्रदान गर्दछ।'
                : 'Programming Shots provides free programming education.'}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {locale === 'ne' ? 'हाम्रो मिशन' : 'Our Mission'}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {locale === 'ne'
                ? 'हाम्रो लक्ष्य नेपाल र विश्वभरका मानिसहरूलाई प्रोग्रामिङ सिक्ने अवसर प्रदान गर्नु हो। हामी विश्वास गर्छौं कि कोडिङ एक मूलभूत सीप हो जुन सबैले सिक्न सक्छन्।'
                : 'Our mission is to provide programming learning opportunities to people in Nepal and around the world. We believe coding is a fundamental skill that everyone can learn.'}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              {locale === 'ne'
                ? 'हामी सरल, व्यावहारिक, र रमाइलो तरिकाले प्रोग्रामिङ सिकाउँछौं।'
                : 'We teach programming in a simple, practical, and fun way.'}
            </p>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {locale === 'ne' ? 'विशेषताहरू' : 'Features'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What We Offer */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {locale === 'ne' ? 'हामी के प्रदान गर्छौं' : 'What We Offer'}
            </h2>
            <ul className="space-y-4">
              {[
                locale === 'ne'
                  ? 'सुरुआतीदेखि उन्नत स्तरसम्म कोर्सहरू'
                  : 'Courses from beginner to advanced level',
                locale === 'ne'
                  ? 'चरणबद्ध लर्निङ रोडम्याप'
                  : 'Step-by-step learning roadmap',
                locale === 'ne'
                  ? 'कोड उदाहरण र व्यावहारिक परियोजनाहरू'
                  : 'Code examples and hands-on projects',
                locale === 'ne'
                  ? 'शब्दावली र चिटशीटहरू'
                  : 'Glossary and cheatsheets',
                locale === 'ne'
                  ? 'क्विज र अभ्यास प्रश्नहरू'
                  : 'Quizzes and practice questions',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Team */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {locale === 'ne' ? 'हाम्रो टिम' : 'Our Team'}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {team[0].description}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              {locale === 'ne'
                ? 'यो परियोजना खुला स्रोत हो र हामी सहयोगको स्वागत गर्छौं।'
                : 'This is an open-source project and we welcome contributions.'}
            </p>
          </div>

          {/* Contact / CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {locale === 'ne' ? 'सुरु गर्नुहोस्!' : 'Get Started!'}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {locale === 'ne'
                ? 'आजै सिक्न सुरु गर्नुहोस्।'
                : 'Start learning today.'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href={`/${locale}/courses`}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                {locale === 'ne' ? 'कोर्सहरू हेर्नुहोस्' : 'Browse Courses'}
              </Link>
              <Link
                href={`/${locale}/roadmap`}
                className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {locale === 'ne' ? 'रोडम्याप हेर्नुहोस्' : 'View Roadmap'}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
