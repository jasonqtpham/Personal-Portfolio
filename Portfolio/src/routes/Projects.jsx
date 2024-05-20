import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Projects = () => {
  const project = [
    {
      Title: "Tic-Tac-Toe",
      Description: "Basic Tic-Tac-Tac webapp",
      Link: "https://jasonqtpham.github.io/Tic-Tac-Toe/",
    },
    { Title: "Trivia", Description: "Trivia quiz webapp", Link: "https://github.com/jasonqtpham/Countdown2" },
    {
      Title: "Weather/News",
      Description:
        "Webapp that tells you weather along with top stories from The NY Times",
      Link: "https://github.com/jasonqtpham/Countdown3",
    },
  ];
  return (
    <Box sx={{ my: "30px" }}>
      <Typography variant="h3" component="h1">
        Projects Page
      </Typography>
      <Box>
        {project.map((item, index) => (
          <Box key={index} sx={{ my: "15px" }}>
            <Typography variant="h4" component="h2">
              {item.Title}
            </Typography>
            <Typography variant="h6" component="p">
              {item.Description}
            </Typography>
              <Typography
                component="a"
                href={item.Link}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
              >
                {item.Link}
              </Typography>
           
          </Box>
        ))}
      </Box>
    </Box>
  );
};
