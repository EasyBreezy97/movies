import React, { FC } from "react";
import Carousel from "@/common/components/Carousel";
import useFetchDetails from "@/common/hooks/useFetchDetails";
import useSimilar from "./hooks/useSimilar";
import { ShowTypes } from "@/common/types";

interface IItemType {
  type: ShowTypes;
}

const Similar: FC<IItemType> = ({ type }) => {
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
      type={type}
    />
  );
};

export default Similar;
