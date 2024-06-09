import React from "react";
import { Header } from "../components/components/Header";
import { Albums } from "../components/components/AlbumContainer";

export function SelectedAlbum() {
  return (
    <>
      <Header />
      <h1 className="text-4xl text-white mt-32 text-center">Test</h1>
      <Albums />
    </>
  );
}
