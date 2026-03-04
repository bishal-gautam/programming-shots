'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { courses } from '@/data/courses';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Box, Container, Typography, Paper, Breadcrumbs, Link as MuiLink } from '@mui/material';

interface PageProps {
  params: { locale: string; courseSlug: string };
}

export default function CourseDetailPage({ params }: PageProps) {
  const { locale, t } = useLanguage();
  const { courseSlug } = params;
  
  const course = courses.find((c) => c.slug === courseSlug);
  const displayTitle = course?.title[locale as keyof typeof course.title] || course?.title.en;
  const displayDescription = course?.description[locale as keyof typeof course.description] || course?.description.en;

  if (!course) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Container sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography>Course not found</Typography>
        </Container>
        <Footer />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 8, mb: 4, flexGrow: 1 }}>
        <Breadcrumbs sx={{ mb: 2 }}>
          <MuiLink component={Link} href={`/${locale}`} color="inherit" underline="hover">
            {t('nav.home', 'Home')}
          </MuiLink>
          <MuiLink component={Link} href={`/${locale}/courses`} color="inherit" underline="hover">
            {t('nav.courses', 'Courses')}
          </MuiLink>
          <Typography color="text.primary">{displayTitle}</Typography>
        </Breadcrumbs>

        <Paper sx={{ p: 2, mb: 2 }}>
          <Box display="flex" alignItems="center" gap={2} mb={1}>
            <Typography variant="h4">{course.icon}</Typography>
            <Typography variant="h6" fontWeight="bold">{displayTitle}</Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {displayDescription}
          </Typography>
        </Paper>

        <Paper sx={{ p: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            {course.lessons.length} Lessons
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {course.lessons.map((lesson, index) => (
              <Paper 
                key={lesson.id}
                component={Link}
                href={`/${locale}/courses/${courseSlug}/${lesson.slug}`}
                variant="outlined"
                sx={{ 
                  p: 1.5, 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2,
                  textDecoration: 'none',
                  '&:hover': { bgcolor: 'action.hover' }
                }}
              >
                <Typography 
                  sx={{ 
                    width: 28, 
                    height: 28, 
                    borderRadius: 1, 
                    bgcolor: 'primary.main', 
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}
                >
                  {index + 1}
                </Typography>
                <Typography variant="body2" sx={{ flex: 1 }}>
                  {lesson.title[locale as keyof typeof lesson.title] || lesson.title.en}
                </Typography>
                <Typography color="action.disabled">→</Typography>
              </Paper>
            ))}
          </Box>
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
}
