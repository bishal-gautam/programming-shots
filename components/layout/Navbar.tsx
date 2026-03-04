'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

const navItems = [
  { key: 'home', href: '' },
  { key: 'courses', href: '/courses' },
  { key: 'roadmap', href: '/roadmap' },
  { key: 'quiz', href: '/quiz' },
  { key: 'glossary', href: '/glossary' },
  { key: 'progress', href: '/progress' },
];

const styles: Record<string, React.CSSProperties> = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: '#fff',
    borderBottom: '1px solid #e5e7eb',
  },
  navDark: {
    backgroundColor: '#1f2937',
    borderBottom: '1px solid #374151',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '44px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    textDecoration: 'none',
  },
  logoText: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#111',
  },
  logoTextDark: {
    color: '#fff',
  },
  navLinks: {
    display: 'flex',
    gap: '4px',
  },
  navLink: {
    padding: '6px 8px',
    fontSize: '12px',
    color: '#374151',
    borderRadius: '8px',
    fontWeight: 500,
  },
  navLinkDark: {
    color: '#d1d5db',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  btn: {
    padding: '6px',
    fontSize: '12px',
    color: '#4b5563',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  menuBtn: {
    padding: '6px',
    color: '#4b5563',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
};

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const { darkMode, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentStyles = darkMode ? { ...styles.nav, ...styles.navDark } : styles.nav;
  const linkStyles = darkMode ? { ...styles.navLink, ...styles.navLinkDark } : styles.navLink;

  return (
    <nav style={currentStyles}>
      <div style={styles.container}>
        <Link href={`/${locale}`} style={styles.logo}>
          <span style={{ fontSize: '20px' }}>💻</span>
          <span style={{ ...styles.logoText, ...(darkMode ? styles.logoTextDark : {}) }} className="desktop-only">
            CodeShots
          </span>
        </Link>

        <div style={styles.navLinks} className="desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              style={linkStyles}
            >
              {t(`nav.${item.key}`, item.key)}
            </Link>
          ))}
        </div>

        <div style={styles.actions}>
          <button
            onClick={() => setLocale(locale === 'en' ? 'ne' : 'en')}
            style={styles.btn}
          >
            {locale.toUpperCase()}
          </button>
          <button onClick={toggleTheme} style={styles.btn}>
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ ...styles.menuBtn, display: 'none' }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div style={{ 
          padding: '8px', 
          borderTop: '1px solid #e5e7eb',
          backgroundColor: darkMode ? '#1f2937' : '#fff',
        }} className="mobile-menu">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'block',
                padding: '8px 12px',
                fontSize: '14px',
                color: darkMode ? '#d1d5db' : '#374151',
                borderRadius: '8px',
              }}
            >
              {t(`nav.${item.key}`, item.key)}
            </Link>
          ))}
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .desktop-only { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
