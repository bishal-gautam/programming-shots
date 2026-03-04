'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
  const { locale } = useLanguage();

  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 2, 
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" gap={1}>
          <Typography variant="body2" color="text.secondary">
            🚀 Programming Shots © 2026
          </Typography>
          <Box display="flex" gap={3}>
            <Typography 
              component={Link} 
              href={`/${locale}/about`}
              variant="body2" 
              color="text.secondary"
              sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
            >
              About
            </Typography>
            <Typography 
              component={Link} 
              href={`/${locale}/resources`}
              variant="body2" 
              color="text.secondary"
              sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
            >
              Resources
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
