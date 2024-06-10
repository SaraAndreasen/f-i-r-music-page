import React from "react";
import { Header } from "../components/components/Header";

export function GenericError() {
  return (
    <div className="mt-36 text-white text-center">
      <Header />
      <h1 className="">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}
