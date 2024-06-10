import React from "react";
import { Header } from "../components/components/Header";
import { Albums } from "../components/components/AlbumContainer";
import { Footer } from "../components/components/Footer";

export function SelectedAlbum() {
  return (
    <>
      <Header />
      <Albums />
      <Footer />
    </>
  );
}
