import React from "react";
import { Header } from "../components/components/Header";
import { Albums } from "../components/components/AlbumContainer";
import { HeroBanner } from "../components/components/HeroBanner";

export function Root() {
  return (
    <>
      <Header />
      <HeroBanner />
      <div className="content-break"></div>
      <Albums />
    </>
  );
}
