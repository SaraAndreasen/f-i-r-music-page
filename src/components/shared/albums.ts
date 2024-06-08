import VoicesInMyHead from "../../assets/img/album-1.jpg";
import PopularMonster from "../../assets/img/album-2.jpg";
import Drugs from "../../assets/img/album-3.jpg";
import LastResort from "../../assets/img/album-4.jpg";
import ComingHome from "../../assets/img/album-5.jpg";

export interface AlbumsInterface {
  id: number;
  title: string;
  albumCover: string;
}

export const albums: AlbumsInterface[] = [
  {
    id: 0,
    title: "Voices In My Head",
    albumCover: VoicesInMyHead,
  },
  { id: 1, title: "Popular Monster", albumCover: PopularMonster },
  { id: 2, title: "Drugs", albumCover: Drugs },
  { id: 3, title: "Last Resort (Reimagined)", albumCover: LastResort },
  { id: 4, title: "Coming Home (Deluxe Edition)", albumCover: ComingHome },
];
