'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { courses } from '@/data/courses';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Box, Container, Typography, Paper, Breadcrumbs, Link as MuiLink, Button, Chip } from '@mui/material';

interface PageProps {
  params: { locale: string; courseSlug: string; lessonSlug: string };
}

export default function LessonPage({ params }: PageProps) {
  const { locale } = useLanguage();
  const { courseSlug, lessonSlug } = params;
  
  const course = courses.find((c) => c.slug === courseSlug);
  const lessonIndex = course?.lessons.findIndex((l) => l.slug === lessonSlug) ?? -1;
  const lesson = lessonIndex !== -1 ? course?.lessons[lessonIndex] : undefined;

  const displayTitle = lesson?.title[locale as keyof typeof lesson.title] || lesson?.title.en;
  const displayContent = lesson?.content[locale as keyof typeof lesson.content] || lesson?.content.en;

  if (!course || !lesson) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Container sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography>Lesson not found</Typography>
        </Container>
        <Footer />
      </Box>
    );
  }

  const previousLesson = lessonIndex > 0 ? course.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < course.lessons.length - 1 ? course.lessons[lessonIndex + 1] : null;

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 8, mb: 4, flexGrow: 1 }}>
        <Breadcrumbs sx={{ mb: 2 }}>
          <MuiLink component={Link} href={`/${locale}`} color="inherit" underline="hover">Home</MuiLink>
          <MuiLink component={Link} href={`/${locale}/courses`} color="inherit" underline="hover">Courses</MuiLink>
          <MuiLink component={Link} href={`/${locale}/courses/${courseSlug}`} color="inherit" underline="hover">
            {course.title[locale] || course.title.en}
          </MuiLink>
          <Typography color="text.primary">{displayTitle}</Typography>
        </Breadcrumbs>

        <Paper sx={{ p: 2, mb: 2 }}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Chip label={`Lesson ${lessonIndex + 1} of ${course.lessons.length}`} size="small" color="primary" />
          </Box>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {displayTitle}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-wrap' }}>
            {displayContent}
          </Typography>
        </Paper>

        {/* Navigation */}
        <Box display="flex" justifyContent="space-between" gap={2}>
          {previousLesson ? (
            <Button 
              component={Link}
              href={`/${locale}/courses/${courseSlug}/${previousLesson.slug}`}
              variant="outlined"
              size="small"
            >
              ← Previous
            </Button>
          ) : <Box />}
          
          {nextLesson ? (
            <Button 
              component={Link}
              href={`/${locale}/courses/${courseSlug}/${nextLesson.slug}`}
              variant="contained"
              size="small"
            >
              Next →
            </Button>
          ) : (
            <Button 
              component={Link}
              href={`/${locale}/courses`}
              variant="contained"
              color="success"
              size="small"
            >
              Complete ✓
            </Button>
          )}
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
