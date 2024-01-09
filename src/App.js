import * as React from "react";
import { CardMedia, Stack } from "@mui/material";
import PhotoAlbum from "react-photo-album";
import { images as horizontal } from "./images/horizontal";
import { images as vertical } from "./images/vertical";
import { getImage } from "./utils/helpers";

export default function App() {
  const images = [];
  horizontal.forEach((img, i) =>
    images.push({
      key: i,
      src: getImage(img),
      width: 3072,
      height: 1280,
    })
  );
  vertical.forEach((img, i) =>
    images.push({
      key: i,
      src: getImage(img),
      width: 1280,
      height: 3072,
    })
  );

  return (
    <CardMedia image="https://source.unsplash.com/random">
      <Stack maxWidth="sm" direction="column" spacing={2} margin="auto" p={2}>
        <PhotoAlbum layout="rows" photos={images} />
      </Stack>
    </CardMedia>
  );
}
