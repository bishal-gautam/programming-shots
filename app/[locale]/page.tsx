'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import CourseCard from '@/components/ui/CourseCard';
import { courses } from '@/data/courses';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Box, Container, Typography, Grid, Button, Paper } from '@mui/material';

export default function HomePage() {
  const { locale } = useLanguage();

  const featuredCourses = courses.slice(0, 3);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
          color: 'white',
          pt: { xs: 7, sm: 8 },
          pb: { xs: 4, sm: 5 },
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
            {locale === 'ne' ? 'तपाईंको कोडिङ यात्रा सुरु गर्नुहोस्' : 'Start Your Coding Journey'}
          </Typography>
          <Typography variant="body2" align="center" sx={{ opacity: 0.9, mb: 3 }}>
            {locale === 'ne' ? 'निःशुल्क कोडिङ अभ्यास र ट्यूटोरियल' : 'Free coding practice and tutorials'}
          </Typography>
          <Box display="flex" justifyContent="center" gap={2}>
            <Button 
              variant="contained" 
              color="primary"
              size="small"
              href={`/${locale}/courses`}
              sx={{ borderRadius: 2 }}
            >
              {locale === 'ne' ? 'सुरु गर्नुहोस्' : 'Start'}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Quick Links */}
      <Container maxWidth="md" sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {[
            { icon: '📚', label: locale === 'ne' ? 'कोर्स' : 'Courses', href: `/${locale}/courses` },
            { icon: '🗺️', label: locale === 'ne' ? 'रोडम्याप' : 'Roadmap', href: `/${locale}/roadmap` },
            { icon: '📊', label: locale === 'ne' ? 'प्रगति' : 'Progress', href: `/${locale}/progress` },
          ].map((item) => (
            <Grid item xs={4} key={item.href}>
              <Paper 
                component={Link} 
                href={item.href}
                elevation={1}
                sx={{ 
                  p: 2, 
                  textAlign: 'center', 
                  textDecoration: 'none',
                  '&:hover': { elevation: 2 }
                }}
              >
                <Typography variant="h4" mb={1}>{item.icon}</Typography>
                <Typography variant="caption" fontWeight="medium">
                  {item.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Courses */}
      <Container maxWidth="md" sx={{ mt: 3, mb: 4, flexGrow: 1 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {locale === 'ne' ? 'Featured कोर्स' : 'Featured Courses'}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </Box>
        <Box textAlign="center" mt={2}>
          <Typography 
            component={Link} 
            href={`/${locale}/courses`}
            variant="body2" 
            color="primary"
            sx={{ textDecoration: 'none' }}
          >
            {locale === 'ne' ? 'सबै हेर्नुहोस् →' : 'View All →'}
          </Typography>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
