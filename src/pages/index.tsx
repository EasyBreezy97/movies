import TrendingMovies from "@/features/movies/Trending";
import MostPopularMovies from "@/features/movies/MostPopular";
import MostPopularTVShows from "@/features/tv-shows/MostPopular";
import Head from "next/head";
import Genres from "@/features/movie-and-tv/Genres";

const containerStyle = { width: "90%", margin: "auto" };

export default function Home() {
  return (
    <>
      <Head>
        <title>Movies App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={containerStyle}>
        <TrendingMovies />
        <MostPopularMovies />
        <MostPopularTVShows />
        <Genres/>
      </main>
    </>
  );
}
