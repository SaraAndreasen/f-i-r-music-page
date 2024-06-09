import React from "react";
import { albums } from "../shared/albums";
import { useParams } from "react-router-dom";

export function Albums() {
  const { link } = useParams<{ link: string }>();
  const album = albums.find((album) => album.link === link);

  return (
    <div className="albums-body">
      {albums.length === 0 ? (
        <div className={"albums-body"}>
          <h2 className="text-4xl sm:text-5xl text-center leading-normal">
            No albums found
          </h2>
        </div>
      ) : (
        <div>
          <h1 className="text-4xl sm:text-5xl text-center leading-normal">
            {album?.title}
          </h1>
          <img src={album?.albumCover} alt={album?.title} />
        </div>
      )}
    </div>
  );
}
