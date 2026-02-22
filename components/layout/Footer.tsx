'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Box, Container, Typography, Grid, IconButton, Link as MuiLink } from '@mui/material';
import { GitHub, Twitter, YouTube } from '@mui/icons-material';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const t = useTranslations('footer');
  const { locale } = useLanguage();

  return (
    <Box component="footer" sx={{ py: 4, mt: 'auto', bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              🚀 Programming Shots
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('description')}
            </Typography>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              {t('quickLinks')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink component={Link} href={`/${locale}/courses`} color="text.secondary" underline="hover">
                Courses
              </MuiLink>
              <MuiLink component={Link} href={`/${locale}/roadmap`} color="text.secondary" underline="hover">
                Roadmap
              </MuiLink>
              <MuiLink component={Link} href={`/${locale}/quiz`} color="text.secondary" underline="hover">
                Quiz
              </MuiLink>
              <MuiLink component={Link} href={`/${locale}/resources`} color="text.secondary" underline="hover">
                Resources
              </MuiLink>
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              {t('contact')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink href="#" color="text.secondary" underline="hover">
                Email Us
              </MuiLink>
              <MuiLink href="#" color="text.secondary" underline="hover">
                FAQ
              </MuiLink>
              <MuiLink href="#" color="text.secondary" underline="hover">
                Support
              </MuiLink>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton size="small" color="primary">
                <GitHub />
              </IconButton>
              <IconButton size="small" color="primary">
                <Twitter />
              </IconButton>
              <IconButton size="small" color="error">
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, pt: 2, borderTop: 1, borderColor: 'divider' }}>
          <Typography variant="body2" color="text.secondary" align="center">
            {t('copyright')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
