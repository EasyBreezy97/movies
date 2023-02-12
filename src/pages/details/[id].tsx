import { useEffect } from "react";
import DetailsGrid from "@/common/components/DetailsGrid";
import useMovieDetails from "@/features/movies/hooks/useDetails";
import useTVShowDetails from "@/features/tv-shows/hooks/useDetails";
import React, { useState } from "react";
import useFetchDetails from "@/common/hooks/useFetchDetails";

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
  return (
    <div>
      <DetailsGrid />
    </div>
  );
};

export default Details;
