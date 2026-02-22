'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { courses, Course, Lesson } from '@/data/courses';
import enCommon from '@/locales/en/common.json';
import neCommon from '@/locales/ne/common.json';
import enRoadmap from '@/locales/en/roadmap.json';
import neRoadmap from '@/locales/ne/roadmap.json';

type Locale = 'en' | 'ne';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, fallback?: string) => string;
  getCourse: (slug: string) => Course | undefined;
  getLesson: (courseSlug: string, lessonSlug: string) => Lesson | undefined;
  getCourses: () => Course[];
}

const translations: Record<Locale, { common: typeof enCommon; roadmap: typeof enRoadmap }> = {
  en: {
    common: enCommon,
    roadmap: enRoadmap,
  },
  ne: {
    common: neCommon,
    roadmap: neRoadmap,
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper to get nested translation value
function getNestedValue(obj: Record<string, unknown>, path: string): string | undefined {
  const keys = path.split('.');
  let current: unknown = obj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }
  
  return typeof current === 'string' ? current : undefined;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    if (savedLocale) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  // Translation function
  const t = (key: string, fallback?: string): string => {
    const commonTranslations = translations[locale].common;
    const value = getNestedValue(commonTranslations as unknown as Record<string, unknown>, key);
    return value || fallback || key;
  };

  // Get course by slug
  const getCourse = (slug: string): Course | undefined => {
    return courses.find(course => course.slug === slug);
  };

  // Get lesson by slug
  const getLesson = (courseSlug: string, lessonSlug: string): Lesson | undefined => {
    const course = getCourse(courseSlug);
    return course?.lessons.find(lesson => lesson.slug === lessonSlug);
  };

  // Get all courses
  const getCourses = (): Course[] => {
    return courses;
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, getCourse, getLesson, getCourses }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
