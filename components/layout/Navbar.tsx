'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Brightness4,
  Brightness7,
  Language,
  Home,
  School,
  Map,
  Quiz,
  Book,
  Description,
  Folder,
  TrendingUp,
  Info,
} from '@mui/icons-material';
import { useTheme as useAppTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';

const drawerWidth = 240;

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const t = useTranslations('nav');
  const theme = useTheme();
  const { mode, toggleTheme } = useAppTheme();
  const { locale, setLocale } = useLanguage();
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const navItems = [
    { label: t('home'), href: `/${locale}`, icon: <Home /> },
    { label: t('courses'), href: `/${locale}/courses`, icon: <School /> },
    { label: t('roadmap'), href: `/${locale}/roadmap`, icon: <Map /> },
    { label: t('quiz'), href: `/${locale}/quiz`, icon: <Quiz /> },
    { label: t('glossary'), href: `/${locale}/glossary`, icon: <Book /> },
    { label: t('cheatsheets'), href: `/${locale}/cheatsheets`, icon: <Description /> },
    { label: t('resources'), href: `/${locale}/resources`, icon: <Folder /> },
    { label: t('progress'), href: `/${locale}/progress`, icon: <TrendingUp /> },
    { label: t('about'), href: `/${locale}/about`, icon: <Info /> },
  ];

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = (lang: 'en' | 'ne') => {
    setLocale(lang);
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          component={Link}
          href={`/${locale}`}
          sx={{ flexGrow: 0, mr: 4, textDecoration: 'none', color: 'inherit' }}
        >
          🚀 Programming Shots
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, flexGrow: 1 }}>
          {navItems.slice(0, 5).map((item) => (
            <Button
              key={item.href}
              component={Link}
              href={item.href}
              color="inherit"
              sx={{
                color: pathname === item.href ? 'primary.main' : 'inherit',
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton color="inherit" onClick={handleLanguageClick}>
            <Language />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => handleLanguageClose('en')}>
              🇺🇸 English
            </MenuItem>
            <MenuItem onClick={() => handleLanguageClose('ne')}>
              🇳🇵 नेपाली
            </MenuItem>
          </Menu>

          <IconButton color="inherit" onClick={toggleTheme}>
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
