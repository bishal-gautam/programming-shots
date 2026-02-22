'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  Collapse,
  Divider,
} from '@mui/material';
import {
  Home,
  School,
  Map,
  Quiz,
  Book,
  Description,
  Folder,
  TrendingUp,
  Info,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';
import { useLanguage } from '@/context/LanguageContext';

const drawerWidth = 240;

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const { locale } = useLanguage();
  const [coursesOpen, setCoursesOpen] = useState(true);

  const navItems = [
    { label: t('home'), href: `/${locale}`, icon: <Home /> },
    { label: t('courses'), href: `/${locale}/courses`, icon: <School />, hasSubmenu: true },
    { label: t('roadmap'), href: `/${locale}/roadmap`, icon: <Map /> },
    { label: t('quiz'), href: `/${locale}/quiz`, icon: <Quiz /> },
    { label: t('glossary'), href: `/${locale}/glossary`, icon: <Book /> },
    { label: t('cheatsheets'), href: `/${locale}/cheatsheets`, icon: <Description /> },
    { label: t('resources'), href: `/${locale}/resources`, icon: <Folder /> },
    { label: t('progress'), href: `/${locale}/progress`, icon: <TrendingUp /> },
    { label: t('about'), href: `/${locale}/about`, icon: <Info /> },
  ];

  const courseLinks = [
    { label: 'Python Basics', href: `/${locale}/python-basics` },
    { label: 'C Programming', href: `/${locale}/c-basics` },
    { label: 'Java', href: `/${locale}/java-basics` },
    { label: 'HTML & CSS', href: `/${locale}/html-css` },
    { label: 'Git', href: `/${locale}/git-basics` },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.href} disablePadding>
              {item.hasSubmenu ? (
                <>
                  <ListItemButton
                    onClick={() => setCoursesOpen(!coursesOpen)}
                    selected={pathname?.startsWith(`/${locale}/courses`)}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                    {coursesOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={coursesOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {courseLinks.map((link) => (
                        <ListItemButton
                          key={link.href}
                          component={Link}
                          href={link.href}
                          sx={{ pl: 4 }}
                          selected={pathname === link.href}
                        >
                          <ListItemText primary={link.label} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItemButton
                  component={Link}
                  href={item.href}
                  selected={pathname === item.href}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              )}
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </div>
  );

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
