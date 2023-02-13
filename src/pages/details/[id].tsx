import { useEffect } from "react";
import DetailsGrid from "@/common/components/DetailsGrid";
import useMovieDetails from "@/features/movies/hooks/useDetails";
import useTVShowDetails from "@/features/tv-shows/hooks/useDetails";
import React, { useState } from "react";
import useFetchDetails from "@/common/hooks/useFetchDetails";
import { usdFormatter } from "@/common/helpers/usd-formatter";

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

  const finalData = tvData || movieData;

  const productionCompanies = finalData?.production_companies
    ?.map((item) => item.name)
    .join(",");

  const productionCountries = finalData?.production_countries
    ?.map((item) => item.name)
    ?.join(",");

  const genres = finalData?.genres?.map((item) => item.name)?.join(",");

  const langs = finalData?.languages?.join(" ");
  const budget = finalData?.budget && usdFormatter.format(finalData?.budget);
  const revenue = finalData?.revenue && usdFormatter.format(finalData?.revenue);

  return (
    <div>
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
      />
    </div>
  );
};

export default Details;
