import React, { useState } from "react";
import {
  Alert,
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  CircularProgress,
  Stack,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Paper,
  Switch,
} from "@mui/material";

function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("success");
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          access_key: "YOUR_ACCESS_KEY_HERE", // Replace with your access key
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSnackbarMessage(
          "Din melding har blitt sendt! Takk for at du kontaktet oss."
        );
        setSnackbarType("success");
        setFormData({ email: "", message: "" });
      } else {
        setSnackbarMessage("Noe gikk galt. Prøv igjen senere.");
        setSnackbarType("error");
      }
    } catch (error) {
      setSnackbarMessage("Noe gikk galt. Prøv igjen senere.");
      setSnackbarType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Paper
        component={Box}
        py={5}
        sx={{
          backgroundColor: darkMode ? "#121212" : "#ffffff",
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
          Kontakt Meg
        </Typography>

        <Stack component="form" onSubmit={handleSubmit} spacing={2}>
          <TextField
            label="Din e-post"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            type="email"
          />
          <TextField
            label="Melding"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
            type="text"
          />
          <Stack justifyContent="flex-end" alignItems="flex-end">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Send"
              )}
            </Button>
          </Stack>
        </Stack>

        <Snackbar
          open={Boolean(snackbarMessage)}
          autoHideDuration={6000}
          onClose={() => setSnackbarMessage("")}
        >
          <Alert
            onClose={() => setSnackbarMessage("")}
            severity={snackbarType}
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
        <Switch
          checked={darkMode}
          onChange={handleThemeChange}
          color="primary"
          sx={{ alignSelf: "flex-end" }}
        />
        <Typography variant="body2" sx={{ alignSelf: "flex-end" }}>
          {darkMode ? "Dark Mode" : "Light Mode"}
        </Typography>
      </Paper>
    </ThemeProvider>
  );
}

export default ContactForm;
