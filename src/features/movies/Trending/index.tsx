import React from "react";
import useTrendingMovies from "@/features/movies/Trending/hooks/useTrendingMovies";
import Carousel from "@/common/components/Carousel";

const Trending = () => {
  const { data, error, isLoading } = useTrendingMovies();

  return (
    <>
      <Carousel
        hasPlayIcon
        data={data}
        error={error}
        isLoading={isLoading}
        heading="Trending Movies"
        type="movie"
      />
    </>
  );
};

export default Trending;
