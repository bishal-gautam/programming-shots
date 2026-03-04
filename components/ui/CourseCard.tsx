'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Box, Typography, Paper } from '@mui/material';

interface Course {
  id: string;
  slug: string;
  title: { en: string; ne: string };
  description: { en: string; ne: string };
  icon: string;
  difficulty: string;
  lessons: { id: string; slug: string; title: { en: string; ne: string } }[];
  color?: string;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { locale } = useLanguage();
  
  const displayTitle = course.title[locale] || course.title.en;
  const displayDesc = course.description[locale] || course.description.en;

  return (
    <Paper 
      component={Link}
      href={`/${locale}/courses/${course.slug}`}
      elevation={1}
      sx={{ 
        p: 2, 
        display: 'flex', 
        alignItems: 'center', 
        gap: 2,
        textDecoration: 'none',
        '&:hover': { elevation: 2 }
      }}
    >
      <Typography variant="h4">{course.icon}</Typography>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '10px', mb: 0.5 }}>
          {course.lessons.length} lessons
        </Typography>
        <Typography variant="subtitle2" noWrap fontWeight="bold">
          {displayTitle}
        </Typography>
        <Typography variant="caption" color="text.secondary" noWrap sx={{ display: 'block' }}>
          {displayDesc}
        </Typography>
      </Box>
      <Typography color="text.secondary">→</Typography>
    </Paper>
  );
}
