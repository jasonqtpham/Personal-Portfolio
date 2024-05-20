import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <AppBar position="static" sx={{ width: '100%' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Jason's Portfolio
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">Home</Button>
          <Button color="inherit" component={RouterLink} to="/about">About</Button>
          <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
          <Button color="inherit" component={RouterLink} to="/projects">Projects</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};