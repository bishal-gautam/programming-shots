'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import enCommon from '@/locales/en/common.json';
import neCommon from '@/locales/ne/common.json';
import enCourses from '@/locales/en/courses.json';
import neCourses from '@/locales/ne/courses.json';
import enRoadmap from '@/locales/en/roadmap.json';
import neRoadmap from '@/locales/ne/roadmap.json';

type Locale = 'en' | 'ne';

interface Translations {
  common: typeof enCommon;
  courses: typeof enCourses;
  roadmap: typeof enRoadmap;
}

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, fallback?: string) => string;
  tcourses: (courseId: string, lessonId?: string, key?: string) => string | Record<string, unknown> | undefined;
}

const translations: Record<Locale, Translations> = {
  en: {
    common: enCommon,
    courses: enCourses,
    roadmap: enRoadmap,
  },
  ne: {
    common: neCommon,
    courses: neCourses,
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

  // Course translation function
  const tcourses = (
    courseId: string, 
    lessonId?: string, 
    key?: string
  ): string | Record<string, unknown> | undefined => {
    const coursesData = translations[locale].courses;
    
    // Get course translations
    const courseTranslations = (coursesData as Record<string, unknown>)[courseId];
    if (!courseTranslations || typeof courseTranslations !== 'object') {
      return undefined;
    }
    
    const courseObj = courseTranslations as Record<string, unknown>;
    
    // If lessonId is provided, get lesson translations
    if (lessonId) {
      const lessons = courseObj.lessons as Record<string, unknown> | undefined;
      if (!lessons || typeof lessons !== 'object') {
        return undefined;
      }
      
      const lesson = lessons[lessonId] as Record<string, unknown> | undefined;
      if (!lesson) {
        return undefined;
      }
      
      // If key is provided, get specific field
      if (key && typeof lesson === 'object') {
        return (lesson as Record<string, unknown>)[key] as string;
      }
      
      return lesson;
    }
    
    // If key is provided for course level
    if (key && typeof courseObj === 'object') {
      return courseObj[key] as string;
    }
    
    return courseObj;
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, tcourses }}>
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
