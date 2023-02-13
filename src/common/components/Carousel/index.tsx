import React, { useContext } from "react";
import Slider from "react-slick";
import Typography from "@mui/material/Typography";
import { SLIDER_SETTINGS } from "@/common/helpers/constants";
import Slide from "@/common/components/Slide";
import SkeletonGroup from "@/common/components/SkeletonGroup";
import { roundOnTwoDigits } from "@/common/helpers/utils";
import useTrailer from "@/features/movies/Trending/hooks/useTrailer";
import AppContext from "@/common/contexts/AppContext";

const Carousel = ({ data, error, isLoading, heading }) => {
  const { setShowPlayer } = useContext(AppContext);

  const {
    data: trailer,
    error: trailerError,
    isLoading: trailerIsLoading,
    setMovieId,
  } = useTrailer();

  const onPlayVideo = (item) => {
    setMovieId(item.id);
    setShowPlayer(true);
  };

  if (!data) return;

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
            poster={item.poster_path ?? item.profile_path}
            rating={roundOnTwoDigits(item.vote_average)}
            onPlayVideo={() => onPlayVideo(item)}
            disablePlayIcon={trailerIsLoading}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
