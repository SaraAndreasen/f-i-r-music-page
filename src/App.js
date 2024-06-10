import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Root } from "./routes/Root";
import ErrorPage from "./routes/Error";
import { GenericError } from "./routes/GenericError";
import { SelectedAlbum } from "./routes/AlbumRoute";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Root />} errorElement={<ErrorPage />} />
      <Route
        exact
        path="/album/:link"
        element={<SelectedAlbum />}
        errorElement={<ErrorPage />}
      />
      <Route path="/*" element={<GenericError />} />
    </Routes>
  );
}

export default App;
