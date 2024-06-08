import React from "react";
import logo from "../../assets/img/logo.png";
import { SlideBar } from "./SlideBar";

export function Header() {
  return (
    <header className="bg-black" id="main-navigation">
      <nav
        className="flex items-center justify-between px-8"
        aria-label="Global"
      >
        <div className="flex">
          <img src={logo} alt="Falling in Reverse logo" />
        </div>
        <SlideBar />
      </nav>
    </header>
  );
}
