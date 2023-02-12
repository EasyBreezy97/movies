import React from "react";
import useTrendingMovies from "@/features/movies/Trending/hooks/useTrendingMovies";
import Carousel from "@/common/components/Carousel";
import Player from "@/common/components/Player";

const Trending = () => {
  const { data, error, isLoading } = useTrendingMovies();

  return (
    <>
      <Carousel
        data={data}
        error={error}
        isLoading={isLoading}
        heading="Trending Movies"
      />
    </>
  );
};

export default Trending;
