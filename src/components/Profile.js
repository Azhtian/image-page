import React from "react";
import { Typography, Stack, CssBaseline, Paper } from "@mui/material";

function Profile() {
  return (
    <>
      <CssBaseline />
      <Paper
        component={Stack}
        alignItems="center"
        textAlign="center"
        py={5}
        sx={{
          backgroundColor: "#222",
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" gutterBottom color="#ff5722">
          Images
        </Typography>
      </Paper>
    </>
  );
}

export default Profile;
