import React, { useState } from "react";
import {
  Avatar,
  Typography,
  Stack,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Paper,
  Switch,
} from "@mui/material";

function Profile() {
  const [darkMode, setDarkMode] = useState(false);

  // Define a theme for light mode
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  // Define a theme for dark mode
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Paper
        component={Stack}
        alignItems="center"
        textAlign="center"
        py={5}
        sx={{
          backgroundColor: darkMode ? "#121212" : "#f5f5f5",
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Avatar
          src="https://source.unsplash.com/random"
          alt="Blomst"
          sx={{
            width: 150,
            height: 150,
            margin: "auto",
            border: darkMode ? "4px solid #3f51b5" : "4px solid #ff5722",
          }}
        />
        <Typography
          variant="h4"
          gutterBottom
          color={darkMode ? "#3f51b5" : "#ff5722"}
        >
          Ditt navn
        </Typography>
        <Switch
          checked={darkMode}
          onChange={handleThemeChange}
          color="primary"
        />
        <Typography variant="body2">
          {darkMode ? "Dark Mode" : "Light Mode"}
        </Typography>
      </Paper>
    </ThemeProvider>
  );
}

export default Profile;
