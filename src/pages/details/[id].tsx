import { useEffect } from "react";
import DetailsGrid from "@/common/components/DetailsGrid";
import useMovieDetails from "@/features/movies/hooks/useDetails";
import useTVShowDetails from "@/features/tv-shows/hooks/useDetails";
import React, { useState } from "react";
import useFetchDetails from "@/common/hooks/useFetchDetails";
import { usdFormatter } from "@/common/helpers/usd-formatter";
import useActors from "@/features/movie-and-tv/Actors/hooks/useActors";
import Carousel from "@/common/components/Carousel";
import Container from "@mui/material/Container";


const Details = () => {
  const { shouldFetchMovies, shouldFetchTV, resourceId } = useFetchDetails();

  const {
    data: movieData,
    error: movieError,
    isLoading: movieLoading,
  } = useMovieDetails(resourceId, shouldFetchMovies);
  const {
    data: tvData,
    error: tvError,
    isLoading: tvLoading,
  } = useTVShowDetails(resourceId, shouldFetchTV);

  const {
    data: cast,
    isLoading: castLoading,
    error: castError,
  } = useActors(resourceId);

  console.log({ cast });

  const finalData = tvData || movieData;

  const productionCompanies = finalData?.production_companies
    ?.map((item) => item.name)
    .join(",");

  const productionCountries = finalData?.production_countries
    ?.map((item) => item.name)
    ?.join(",");

  const genres = finalData?.genres?.map((item) => item.name)?.join(" , ");

  const langs = finalData?.languages?.join(" , ");
  const budget = finalData?.budget && usdFormatter.format(finalData?.budget);
  const revenue = finalData?.revenue && usdFormatter.format(finalData?.revenue);

  const createdBy = finalData?.created_by?.map((item) => item.name).join(" , ");
  const networks = finalData?.networks?.map((item) => item.name).join(" , ");

  const spokenLangs = finalData?.spoken_languages
    ?.map((item) => item.english_name)
    .join(" , ");

  return (
    <Container sx={{ mt: 4 }}>
      <DetailsGrid
        title={finalData?.name || finalData?.original_title}
        posterURL={finalData?.poster_path}
        isAdultMovie={finalData?.adult}
        tagLine={finalData?.tagline}
        originalLang={finalData?.original_language}
        popularity={finalData?.popularity}
        status={finalData?.status}
        votes={finalData?.vote_count}
        votesAvg={finalData?.vote_average}
        description={finalData?.overview}
        productionCompanies={productionCompanies}
        productionCountries={productionCountries}
        genres={genres}
        languages={langs}
        homePageURL={finalData?.homepage}
        budget={budget}
        revenue={revenue}
        releaseDate={finalData?.release_date}
        runtime={finalData?.runtime}
        belongsToCollection={finalData?.belongs_to_collection?.name}
        createdBy={createdBy}
        firstAirDate={finalData?.first_air_date}
        nextEpisodeToAir={finalData?.next_episode_to_air}
        lastAirDate={finalData?.last_air_date}
        numberOfSeasons={finalData?.number_of_seasons}
        numberOfEpisodes={finalData?.number_of_episodes}
        networks={networks}
        spokenLangs={spokenLangs}
        originCountries={finalData?.origin_country?.join(" , ")}
        type={finalData?.type}
      />
      <Carousel
        data={cast}
        isLoading={castLoading}
        error={castError}
        heading="Cast"
      />
    </Container>
  );
};

export default Details;
