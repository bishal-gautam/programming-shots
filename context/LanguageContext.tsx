'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Locale = 'en' | 'ne';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Simple translations
const enCommon: Record<string, string> = {
  home: 'Home',
  courses: 'Courses',
  roadmap: 'Roadmap',
  quiz: 'Quiz',
  glossary: 'Glossary',
  cheatsheets: 'Cheatsheets',
  resources: 'Resources',
  progress: 'Progress',
  about: 'About',
  lessons: 'lessons',
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
};

const neCommon: Record<string, string> = {
  home: 'गृह',
  courses: 'कोर्सहरू',
  roadmap: 'रोडम्याप',
  quiz: 'क्विज',
  glossary: 'शब्दावली',
  cheatsheets: 'चीटशीट',
  resources: 'स्रोतहरू',
  progress: 'प्रगति',
  about: 'परिचय',
  lessons: 'पाठ',
  beginner: 'सुरुआत',
  intermediate: 'मध्यम',
  advanced: 'उन्नत',
  easy: 'सजिलो',
  medium: 'मध्यम',
  hard: 'कठिन',
};

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

  const t = (key: string, fallback?: string): string => {
    if (!mounted) return fallback || key;
    const translations = locale === 'en' ? enCommon : neCommon;
    return translations[key] || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
