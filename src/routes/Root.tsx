import React from "react";
import { Header } from "../components/components/Header";
import { HeroBanner } from "../components/components/HeroBanner";
import { AlbumWrapper } from "../components/components/AlbumWrapper";

export function Root() {
  return (
    <>
      <Header />
      <HeroBanner />
      <div className="content-break"></div>
      <AlbumWrapper />
    </>
  );
}
