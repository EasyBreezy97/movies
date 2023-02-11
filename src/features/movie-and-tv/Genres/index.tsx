import Carousel from "@/features/movie-and-tv/Genres/components/Carousel";
import React from "react";
import useGenres from "./hooks/useGenres";

const Genres = () => {
  const { data, isLoading, error } = useGenres();
  return (
    <div>
      <Carousel
        data={data}
        isLoading={isLoading}
        error={error}
        heading="Genres"
      />
    </div>
  );
};

export default Genres;
