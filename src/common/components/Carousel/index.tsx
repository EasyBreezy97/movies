import React from "react";
import Slider from "react-slick";
import Typography from "@mui/material/Typography";
import { SLIDER_SETTINGS } from "@/common/helpers/constants";
import Slide from "@/common/components/Slide";
import SkeletonGroup from "@/common/components/SkeletonGroup";

const Carousel = ({ data, error, isLoading, heading }) => {
  return (
    <div>
      <Typography sx={{ m: 1 }} variant="h4">
        {heading}
      </Typography>
      {isLoading && <SkeletonGroup />}
      <Slider {...SLIDER_SETTINGS}>
        {data?.map((item) => (
          <Slide key={item.id} title={item.title} poster={item.poster_path} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
