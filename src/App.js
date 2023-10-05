import * as React from "react";
import { CardMedia, Stack } from "@mui/material";
import Profile from "./components/Profile";
import Description from "./components/Description";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <CardMedia image="https://source.unsplash.com/random">
      <Stack maxWidth="sm" direction="column" spacing={2} margin="auto" p={2}>
        <Profile />
        <Description />
        <ContactForm />
      </Stack>
    </CardMedia>
  );
}
