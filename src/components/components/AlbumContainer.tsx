import React from "react";
import { albums } from "../shared/albums";
import { useParams } from "react-router-dom";

export function Albums() {
  const { link } = useParams<{ link: string }>();
  const album = albums.find((album) => album.link === link);

  // Function to transform YouTube watch URL to embed URL
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch")) {
      return url.replace("watch?v=", "embed/");
    }
    return url;
  };

  return (
    <div className="albums">
      {albums.length === 0 ? (
        <div className={"albums-body"}>
          <h1 className="text-4xl sm:text-5xl text-center leading-normal mt-32">
            No albums found
          </h1>
        </div>
      ) : (
        <div>
          <h2 className="text-5xl text-center sm:invisible mt-32 mb-5">
            {album?.title}
          </h2>
          <div className="sm:grid sm:grid-cols-2 sm:gap-10">
            <div className="sm:flex sm:justify-start lg:justify-end">
              <img src={album?.albumCover} alt={album?.title} className="" />
            </div>
            <div>
              <h1 className="text-4xl text-center invisible pb-5 sm:visible sm:text-5xl sm:mt-24 sm:text-left md:mt-36 lg:mt-48 xl:mt-52">
                {album?.title}
              </h1>
              <ul className="text-center text-white text-2xl sm:text-left sm:mt-10  ">
                <li>Released {album?.releaseDate}</li>
                <li>Genre {album?.genre}</li>
                <li>{album?.typeOfAlbum}</li>
              </ul>
            </div>
          </div>
          <div className="content-break-album-container md:mt-20"></div>
          <div className="album-extra-content">
            <h2 className="text-center text-black text-3xl p-10">
              Music Video
            </h2>
            {album?.musicVideo && (
              <div className="music-video pb-8">
                {/* Check if the musicVideo URL needs to be transformed */}
                <div className="iframe-wrapper">
                  <iframe
                    className="music-video-player"
                    src={getEmbedUrl(album.musicVideo)}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
            {album?.secondaryMusicVideo && (
              <div className="music-video pb-8">
                {/* Check if the musicVideo URL needs to be transformed */}
                <div className="iframe-wrapper">
                  <iframe
                    className="music-video-player"
                    src={getEmbedUrl(album.secondaryMusicVideo)}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
            {album?.thridMusicVideo && (
              <div className="music-video pb-8">
                {/* Check if the musicVideo URL needs to be transformed */}
                <div className="iframe-wrapper">
                  <iframe
                    className="music-video-player"
                    src={getEmbedUrl(album.thridMusicVideo)}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
