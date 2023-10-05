import React, { useState } from "react";
import {
  Typography,
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Paper,
  Switch,
} from "@mui/material";

function Description() {
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
        component={Box}
        py={5}
        sx={{
          backgroundColor: darkMode ? "#121212" : "#e8eaf6",
          borderRadius: 3,
          boxShadow: 3,
          mt: 4,
          px: 3,
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          color={darkMode ? "#3f51b5" : "#ff5722"}
        >
          Om Meg
        </Typography>
        <Typography color={darkMode ? "text.primary" : "text.secondary"}>
          Hei! Dette bildet er av en sjarmerende blomst hentet fra Unsplash.
          Unsplash tilbyr et bredt utvalg av gratis bilder av høy kvalitet som
          kan brukes til forskjellige formål. Så hvis du leter etter
          inspirerende bilder for ditt neste prosjekt, anbefales det å sjekke ut
          Unsplash. For øvrig, denne teksten ble generert med hjelp av ChatGPT
          fra OpenAI. Fascinerende, ikke sant?
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

export default Description;
