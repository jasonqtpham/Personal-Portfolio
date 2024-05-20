import React from 'react';
import { Box, Container } from '@mui/material';
import { Navbar }  from './Navbar.jsx';
import { Footer } from './Footer.jsx';
import { Outlet } from 'react-router-dom';

export const BaseLayout = () => {
    return (
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar />
        <Container component="main" sx={{ flex: 1 }}>
          <Outlet />
        </Container>
        <Footer />
      </Box>
    );
  };
