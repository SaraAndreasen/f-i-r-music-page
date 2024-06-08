import React from "react";
import { albums, AlbumsInterface } from "../shared/albums";

export function Albums() {
  return (
    <div className="albums-body">
      <h2 className="text-4xl sm:text-5xl text-center leading-normal">
        Albums
      </h2>
      <ul>
        {albums.map((album: AlbumsInterface) => (
          <li key={album.id} className="justify-center">
            <img src={album.albumCover} alt={album.title} />
            <p className="text-xl">{album.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
