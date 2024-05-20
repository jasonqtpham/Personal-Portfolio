import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

export const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: add some backend to make this work later
  };

  return (
    <Box sx={{ my: "30px" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Page
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type="email"
        />
        <TextField
          label="Message"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          multiline
          rows={5}
        />
        <Button type="submit" variant="contained" color="primary" sx={{my: "10px"}}>
          Send Message
        </Button>
      </form>
    </Box>
  );
};
