import React from "react";
import { Box, Typography,ListItem } from "@mui/material";

export const About = () => {
  return (
    <Box sx={{ my: "30px" }}>
      <Typography variant="h4" component="h1">
        About Page
      </Typography>
      <Box sx={{ my: "10px" }}>
      <Typography variant="h5">Home Town</Typography>
        <ListItem>Norfolk, Virginia</ListItem>
        <Typography variant="h5">Education</Typography>
        <ListItem>University of Virginia 2025 BACS</ListItem>
        <Typography variant="h5">Skills</Typography>
        <ListItem>Python, Java, JS, C</ListItem>
      </Box>
    </Box>
  );
};
