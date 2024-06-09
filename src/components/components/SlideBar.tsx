import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { albums, AlbumsInterface } from "../shared/albums";
import { Link } from "react-router-dom";

export function SlideBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showContent, setShowContent] = useState(false);

  const openNav = () => {
    setIsOpen(true);
    setTimeout(() => {
      setShowContent(true);
    }, 250); // Delay for content to appear after sidebar animation
  };

  const exitNav = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 250); // Delay for sidebar to fully close before hiding it
  };

  useEffect(() => {
    if (!isOpen) {
      setShowContent(false);
    }
  }, [isOpen]);

  return (
    <>
      {/* Open Navigation Button */}
      <div className="flex cursor-pointer" onClick={openNav}>
        <FontAwesomeIcon icon={faBars} className="text-gray-400" />
      </div>

      {/* Sidebar Overlay */}
      <div
        id="sideBar"
        className={`fixed top-0 right-0 w-full h-full z-10 transition-all duration-500 ${
          isOpen ? "bg-black bg-opacity-50" : "bg-transparent w-0"
        }`}
        style={{ visibility: isOpen ? "visible" : "hidden" }}
      >
        {/* Side Navigation */}
        <div
          id="sideNav"
          className={`fixed top-0 right-0 h-full z-20 bg-gradient-to-r from-red-600 to-red-800 transition-all duration-500 ${
            isOpen ? "w-3/5" : "w-0"
          }`}
        >
          {/* Close Button */}
          <div
            onClick={exitNav}
            className={`text-xl absolute top-0 right-0 mr-8 mt-7 cursor-pointer transition-opacity duration-100 ${
              showContent ? "opacity-100" : "opacity-0"
            }`}
          >
            <FontAwesomeIcon icon={faXmark} className="text-black" />
          </div>

          {albums.length === 0 ? (
            <div
              className={`text-2xl sm:text-3xl flex flex-col items-center justify-center h-full transition-opacity duration-100 ${
                showContent ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-white">No albums found</p>
            </div>
          ) : (
            <ul
              className={`text-2xl sm:text-3xl flex flex-col items-center justify-center h-full transition-opacity duration-100 ${
                showContent ? "opacity-100" : "opacity-0"
              }`}
            >
              {albums.map((album: AlbumsInterface) => (
                <li key={album.id} className="p-2 text-black">
                  <Link to={`/album/${album.link}`}>{album.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
