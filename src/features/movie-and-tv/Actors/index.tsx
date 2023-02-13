import Carousel from "@/common/components/Carousel";
import React from "react";
import useActors from "./hooks/useActors";

const Actors = () => {
  const { data: cast, isLoading: castLoading, error: castError } = useActors();

  return (
    <Carousel
      data={cast}
      isLoading={castLoading}
      error={castError}
      heading="Cast"
      slidesToShow={4}
      type="actor"
    />
  );
};

export default Actors;
