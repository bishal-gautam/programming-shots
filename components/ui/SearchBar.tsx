'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export default function SearchBar({ placeholder = 'Search...', onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const { locale } = useLanguage();

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    } else {
      router.push(`/${locale}/courses?q=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <TextField
        fullWidth
        size="small"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
            </InputAdornment>
          ),
          sx: { borderRadius: 2 }
        }}
      />
    </Box>
  );
}
