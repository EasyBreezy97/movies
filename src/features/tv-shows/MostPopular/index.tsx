import React from "react";
import Carousel from "@/common/components/Carousel";
import useMostPopular from "@/features/tv-shows/MostPopular/hooks/useMostPopular";

const MostPopular = () => {
  const { data, error, isLoading } = useMostPopular();
  return (
    <Carousel
      data={data}
      error={error}
      isLoading={isLoading}
      heading="Most Popular TV Shows"
    />
  );
};

export default MostPopular;
