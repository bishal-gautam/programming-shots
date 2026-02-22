'use client';

import { useState } from 'react';
import { Box, IconButton, Typography, Tooltip } from '@mui/material';
import { ContentCopy, Check } from '@mui/icons-material';

interface CodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({ code, language, showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: '#1e293b',
        borderRadius: 2,
        overflow: 'hidden',
        my: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
          py: 1,
          bgcolor: '#0f172a',
          borderBottom: '1px solid #334155',
        }}
      >
        <Typography variant="caption" sx={{ color: '#94a3b8', textTransform: 'uppercase' }}>
          {language}
        </Typography>
        <Tooltip title={copied ? 'Copied!' : 'Copy code'}>
          <IconButton size="small" onClick={handleCopy} sx={{ color: '#94a3b8' }}>
            {copied ? <Check fontSize="small" /> : <ContentCopy fontSize="small" />}
          </IconButton>
        </Tooltip>
      </Box>

      <Box
        component="pre"
        sx={{
          m: 0,
          p: 2,
          overflow: 'auto',
          fontFamily: '"Fira Code", "Consolas", monospace',
          fontSize: '0.875rem',
          lineHeight: 1.6,
          color: '#e2e8f0',
        }}
      >
        {showLineNumbers ? (
          <Box sx={{ display: 'flex' }}>
            <Box
              sx={{
                pr: 2,
                mr: 2,
                borderRight: '1px solid #334155',
                color: '#64748b',
                textAlign: 'right',
                userSelect: 'none',
              }}
            >
              {lines.map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </Box>
            <Box component="code" sx={{ flex: 1 }}>
              {code}
            </Box>
          </Box>
        ) : (
          <code>{code}</code>
        )}
      </Box>
    </Box>
  );
}
