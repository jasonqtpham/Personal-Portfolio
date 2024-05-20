import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export const Footer = () => {
    return (
      <Box component="footer" sx={{ p: 2, mt: 'auto', backgroundColor: 'primary.main', color: 'white' }}>
        <Typography variant="body2" align="center">
          © 2024 Jason Pham<span style={{ margin: '0 8px' }}>|</span>
          <Link href="https://github.com/jasonqtpham" color="inherit" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </Typography>
      </Box>
    );
  };