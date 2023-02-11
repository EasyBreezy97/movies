import React from "react";
import Slider from "react-slick";
import Typography from "@mui/material/Typography";
import { SLIDER_SETTINGS } from "@/common/helpers/constants";
import Slide from "@/common/components/Slide";
import SkeletonGroup from "@/common/components/SkeletonGroup";
import { roundOnTwoDigits } from "@/common/helpers/utils";


const Carousel = ({ data, error, isLoading, heading }) => {
  return (
    <div>
      <Typography sx={{ m: 1 }} variant="h4">
        {heading}
      </Typography>
      {isLoading && <SkeletonGroup />}
      <Slider {...SLIDER_SETTINGS}>
        {data?.map((item) => (
          <Slide
            key={item.id}
            title={item.title ?? item.name}
            poster={item.poster_path}
            rating={roundOnTwoDigits(item.vote_average)}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
