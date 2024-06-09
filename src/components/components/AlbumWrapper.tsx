import React from "react";
import { albums, AlbumsInterface } from "../shared/albums";

export function AlbumWrapper() {
  return (
    <div className="albums-body">
      {albums.length === 0 ? (
        <div className="albums-body">
          <h2 className="text-4xl sm:text-5xl text-center leading-normal">
            No albums found
          </h2>
        </div>
      ) : (
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
      )}
    </div>
  );
}
