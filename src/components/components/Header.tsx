import React from "react";
import logo from "../../assets/img/logo.png";
import { SlideBar } from "./SlideBar";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-black" id="main-navigation">
      <nav
        className="flex items-center justify-between px-8"
        aria-label="Global"
      >
        <div className="flex">
          <Link to={"/"}>
            <img src={logo} alt="Falling in Reverse logo" />
          </Link>
        </div>
        <SlideBar />
      </nav>
    </header>
  );
}
