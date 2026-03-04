'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LessonProgress {
  lessonId: string;
  completed: boolean;
  completedAt?: number;
}

interface CourseProgress {
  courseId: string;
  lessonsCompleted: number;
  totalLessons: number;
  lessons: LessonProgress[];
}

interface ProgressContextType {
  progress: CourseProgress[];
  markLessonComplete: (courseId: string, lessonId: string, totalLessons: number) => void;
  isLessonComplete: (courseId: string, lessonId: string) => boolean;
  getCourseProgress: (courseId: string) => CourseProgress | undefined;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const STORAGE_KEY = 'programming-shots-progress';

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<CourseProgress[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch (e) {
        console.error('Failed to parse progress:', e);
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress, mounted]);

  const markLessonComplete = (courseId: string, lessonId: string, totalLessons: number) => {
    setProgress(prev => {
      const existingCourse = prev.find(p => p.courseId === courseId);
      
      if (existingCourse) {
        const lessonExists = existingCourse.lessons.some(l => l.lessonId === lessonId);
        if (lessonExists) return prev;
        
        const newLessons = [...existingCourse.lessons, { lessonId, completed: true, completedAt: Date.now() }];
        return prev.map(p => 
          p.courseId === courseId 
            ? { ...p, lessons: newLessons, lessonsCompleted: newLessons.filter(l => l.completed).length }
            : p
        );
      }
      
      return [...prev, {
        courseId,
        lessonsCompleted: 1,
        totalLessons,
        lessons: [{ lessonId, completed: true, completedAt: Date.now() }]
      }];
    });
  };

  const isLessonComplete = (courseId: string, lessonId: string): boolean => {
    const course = progress.find(p => p.courseId === courseId);
    if (!course) return false;
    return course.lessons.some(l => l.lessonId === lessonId && l.completed);
  };

  const getCourseProgress = (courseId: string): CourseProgress | undefined => {
    return progress.find(p => p.courseId === courseId);
  };

  const resetProgress = () => {
    setProgress([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <ProgressContext.Provider value={{ progress, markLessonComplete, isLessonComplete, getCourseProgress, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
