import React from "react";
import useMostPopular from "@/features/movies/MostPopular/hooks/useMostPopular";
import Carousel from "@/common/components/Carousel";

const MostPopular = () => {
  const { data, isLoading, error } = useMostPopular();

  return (
    <div>
      <Carousel
        data={data}
        isLoading={isLoading}
        error={error}
        heading="Most Popular Movies"
      />
    </div>
  );
};

export default MostPopular;
