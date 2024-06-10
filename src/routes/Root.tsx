import React from "react";
import { Header } from "../components/components/Header";
import { HeroBanner } from "../components/components/HeroBanner";
import { AlbumWrapper } from "../components/components/AlbumWrapper";
import { Footer } from "../components/components/Footer";

export function Root() {
  return (
    <>
      <Header />
      <HeroBanner />
      <div className="content-break"></div>
      <AlbumWrapper />
      <div className="content-break-footer"></div>
      <Footer />
    </>
  );
}
