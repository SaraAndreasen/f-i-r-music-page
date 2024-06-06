import React, { useEffect, useState } from "react";
import { Header } from "../components/Header.tsx";
import ronnieRedStripe from "../assets/img/ronnie-1.jpg";
import { Albums } from "../components/Albums.tsx";
export function Root() {
  const [fontSize, setFontSize] = useState<number>(8.5); // Initial font size in em

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newFontSize = Math.max(4, 8.5 - scrollY / 100); // Adjust the divisor to control the rate of shrinking

      setFontSize(newFontSize);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      console.log("Window width:", window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Header />
      <div className="root-body">
        <header>
          <h1
            className="header-title"
            style={{ fontSize: `${fontSize}vw`, color: "#eb3022" }} // Apply the calculated font size and other dynamic styles
          >
            Falling in Reverse
          </h1>
        </header>

        <img
          src={ronnieRedStripe}
          alt="Ronnie with red stripe"
          className="root-ronnie1"
        />
      </div>
      <div>
        <Albums />
      </div>
    </>
  );
}
