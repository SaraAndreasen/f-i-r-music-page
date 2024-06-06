import React from "react";
import { Header } from "../components/Header.tsx";
import logo from "../assets/img/logo.png";
import ronnieRedStripe from "../assets/img/ronnie-1.jpg";

export function Root() {
  return (
    <>
      <Header />
      <div className="root-body">
        <h1>Falling in Reverse</h1>
        <img
          src={ronnieRedStripe}
          alt="Ronnie with red stripe"
          className="root-ronnie1"
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
