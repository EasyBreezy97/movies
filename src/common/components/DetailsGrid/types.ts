import { AxiosError } from "axios";

export interface IDetailsGrid {
  error:AxiosError;
  isLoading:boolean;
  posterURL: string;
  isAdultMovie: boolean;
  tagLine: string;
  originalLang: string;
  popularity: string;
  status: string;
  votes: number;
  votesAvg: number;
  title: string;
  description: string;
  productionCompanies: string;
  productionCountries: string;
  genres: string;
  languages: string;
  homePageURL: string;
  budget: string;
  releaseDate: string;
  revenue: string;
  runtime: number;
  belongsToCollection: string;
  createdBy: string;
  firstAirDate: string;
  nextEpisodeToAir: string;
  lastAirDate: string;
  networks: string;
  numberOfSeasons: number;
  numberOfEpisodes: number;
  spokenLangs: string;
  originCountries: string;
  type: string;
  onPlayTrailer: React.MouseEventHandler<HTMLButtonElement>;
}
