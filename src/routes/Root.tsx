import React from "react";
import { Header } from "../components/Header.tsx";
import ronnieRedStripe from "../assets/img/ronnie-1.jpg";
export function Root() {
  return (
    <>
      <Header />
      <div className="root-body">
        <h1 className="text-7xl  md:text-8xl lg:text-9xl">
          Falling in Reverse
        </h1>
        <img
          src={ronnieRedStripe}
          alt="Ronnie with red stripe"
          className="root-ronnie1 max-w-100"
        />
        <h2>Albums</h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}
