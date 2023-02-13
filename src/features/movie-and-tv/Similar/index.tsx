import React from "react";
import Carousel from "@/common/components/Carousel";
import useFetchDetails from "@/common/hooks/useFetchDetails";
import useSimilar from "./hooks/useSimilar";

const Similar = () => {
  const { resourceId } = useFetchDetails();

  const {
    data: similar,
    isLoading: similarLoading,
    error: similarError,
  } = useSimilar(resourceId);
  return (
    <Carousel
      data={similar}
      isLoading={similarLoading}
      error={similarError}
      heading="Similar"
      slidesToShow={4}
    />
  );
};

export default Similar;
