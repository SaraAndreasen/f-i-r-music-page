import React, { useEffect, useState } from "react";
import ronnieRedStripe from "../../assets/img/ronnie-1.jpg";

export function HeroBanner() {
  const [fontSize, setFontSize] = useState<number>(7.5); // Initial font size in em

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newFontSize = Math.max(4, 7.5 - scrollY / 100); // Adjust the divisor to control the rate of shrinking

      setFontSize(newFontSize);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
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
  );
}
