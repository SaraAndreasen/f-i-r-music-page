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
  genre: string;
  releaseDate: string;
  typeOfAlbum: string;
  connectedToOtherAlbums?: string;
  musicVideo?: string;
  secondaryMusicVideo?: string;
  thridMusicVideo?: string;
}

export const albums: AlbumsInterface[] = [
  {
    id: 0,
    title: "Voices In My Head",
    albumCover: VoicesInMyHead,
    link: "voices-in-my-head",
    genre: "Metal",
    releaseDate: "May 31st, 2022",
    typeOfAlbum: "Single",
    musicVideo: "https://www.youtube.com/watch?v=a7_e_NY-f3g",
  },
  {
    id: 1,
    title: "Popular Monster",
    albumCover: PopularMonster,
    link: "popular-monster",
    genre: "New-metal, Rock",
    releaseDate: "November 20th, 2019",
    typeOfAlbum: "Single",
    musicVideo: "https://www.youtube.com/watch?v=jakpo7tj7Qw",
  },
  {
    id: 2,
    title: "Drugs",
    albumCover: Drugs,
    link: "drugs",
    genre: "Rock, Electronicore",
    releaseDate: "April 8th, 2019",
    typeOfAlbum: "EP",
    musicVideo: "https://www.youtube.com/watch?v=uCA-Ll2CJFQ",
    secondaryMusicVideo: "https://www.youtube.com/watch?v=SEbxwmjScr8",
    thridMusicVideo: "https://www.youtube.com/watch?v=sRAG2NG5bkQ",
  },
  {
    id: 3,
    title: "Last Resort (Reimagined)",
    albumCover: LastResort,
    link: "last-resort-reimagined",
    genre: "Classical crossover",
    releaseDate: "June 26th, 2023",
    typeOfAlbum: "Single",
    musicVideo: "https://www.youtube.com/watch?v=ESOjt2_yJrU",
  },
  {
    id: 4,
    title: "Coming Home (Deluxe Edition)",
    albumCover: ComingHome,
    link: "coming-home-deluxe-edition",
    genre:
      "Mixture: Post-hardcore, hard rock, pop-punk, progressive rock, electropop, spacerock",
    releaseDate: "April 7th, 2017",
    typeOfAlbum: "Album",
    musicVideo: "https://www.youtube.com/watch?v=L3QB4VnUOUA",
  },
];
