import DetailsGrid from "@/common/components/DetailsGrid";
import useMovieDetails from "@/features/movies/hooks/useDetails";
import useTVShowDetails from "@/features/tv-shows/hooks/useDetails";
import React from "react";

const Details = () => {
  const {
    data: movieData,
    error: movieError,
    isLoading: movieLoading,
  } = useMovieDetails();
  const {
    data: tvData,
    error: tvError,
    isLoading: tvLoading,
  } = useTVShowDetails();
  return (
    <div>
      <DetailsGrid />
    </div>
  );
};

export default Details;
