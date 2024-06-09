import VoicesInMyHead from "../../assets/img/album-1.jpg";
import PopularMonster from "../../assets/img/album-2.jpg";
import Drugs from "../../assets/img/album-3.jpg";
import LastResort from "../../assets/img/album-4.jpg";
import ComingHome from "../../assets/img/album-5.jpg";

export interface AlbumsInterface {
  id: number;
  title: string;
  albumCover: string;
  link: string;
}

export const albums: AlbumsInterface[] = [
  {
    id: 0,
    title: "Voices In My Head",
    albumCover: VoicesInMyHead,
    link: "voices-in-my-head",
  },
  {
    id: 1,
    title: "Popular Monster",
    albumCover: PopularMonster,
    link: "popular-monster",
  },
  { id: 2, title: "Drugs", albumCover: Drugs, link: "drugs" },
  {
    id: 3,
    title: "Last Resort (Reimagined)",
    albumCover: LastResort,
    link: "last-resort-reimagined",
  },
  {
    id: 4,
    title: "Coming Home (Deluxe Edition)",
    albumCover: ComingHome,
    link: "coming-home-deluxe-edition",
  },
];
