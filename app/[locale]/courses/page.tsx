'use client';

import { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useSearchParams } from 'next/navigation';
import { courses } from '@/data/courses';
import CourseCard from '@/components/ui/CourseCard';
import SearchBar from '@/components/ui/SearchBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Box, Container, Typography, ToggleButtonGroup, ToggleButton, Paper } from '@mui/material';

export default function CoursesPage() {
  const { t, locale } = useLanguage();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedPhase, setSelectedPhase] = useState<string>('all');

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) setSearchQuery(q);
  }, [searchParams]);

  const filteredCourses = useMemo(() => {
    let result = [...courses];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((course) => {
        const title = course.title[locale] || course.title.en;
        const desc = course.description[locale] || course.description.en;
        return title.toLowerCase().includes(query) || desc.toLowerCase().includes(query);
      });
    }

    if (selectedPhase !== 'all') {
      result = result.filter((course) => course.phase === parseInt(selectedPhase));
    }

    return result;
  }, [searchQuery, selectedPhase, locale]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 8, mb: 4, flexGrow: 1 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {locale === 'ne' ? 'सबै कोर्सहरू' : 'All Courses'}
        </Typography>

        <Paper sx={{ p: 2, mb: 3 }}>
          <Box sx={{ mb: 2 }}>
            <SearchBar 
              placeholder={locale === 'ne' ? 'कोर्स खोज्नुहोस्...' : 'Search courses...'}
              onSearch={handleSearch}
            />
          </Box>
          
          <ToggleButtonGroup
            value={selectedPhase}
            exclusive
            onChange={(_, value) => value && setSelectedPhase(value)}
            size="small"
            fullWidth
          >
            <ToggleButton value="all">{locale === 'ne' ? 'सबै' : 'All'}</ToggleButton>
            <ToggleButton value="1">{locale === 'ne' ? 'चरण 1' : 'Phase 1'}</ToggleButton>
            <ToggleButton value="2">{locale === 'ne' ? 'चरण 2' : 'Phase 2'}</ToggleButton>
            <ToggleButton value="3">{locale === 'ne' ? 'चरण 3' : 'Phase 3'}</ToggleButton>
          </ToggleButtonGroup>
        </Paper>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {filteredCourses.length} {locale === 'ne' ? 'कोर्सहरू फेला परे' : 'courses found'}
        </Typography>

        {filteredCourses.length > 0 ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </Box>
        ) : (
          <Box sx={{ textAlign: 'center', py: 6 }}>
            <Typography color="text.secondary">
              {locale === 'ne' ? 'कुनै कोर्स फेला परेन।' : 'No courses found.'}
            </Typography>
          </Box>
        )}
      </Container>
      <Footer />
    </Box>
  );
}
