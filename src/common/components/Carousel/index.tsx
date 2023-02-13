import React, { useContext } from "react";
import Slider from "react-slick";
import Typography from "@mui/material/Typography";
import { SLIDER_SETTINGS } from "@/common/helpers/constants";
import Slide from "@/common/components/Slide";
import SkeletonGroup from "@/common/components/SkeletonGroup";
import { roundOnTwoDigits } from "@/common/helpers/utils";
import useTrailer from "@/common/hooks/useTrailer";
import AppContext from "@/common/contexts/AppContext";
import { useRouter } from "next/router";

const Carousel = ({
  data,
  error,
  isLoading,
  heading,
  slidesToShow,
  hasPlayIcon = false,
  type,
}) => {
  const { setShowPlayer } = useContext(AppContext);
  const router = useRouter();

  const sliderSettings = slidesToShow
    ? { ...SLIDER_SETTINGS, slidesToShow }
    : { ...SLIDER_SETTINGS };

  const {
    data: trailer,
    error: trailerError,
    isLoading: trailerIsLoading,
    setId,
  } = useTrailer(type);

  const onPlayVideo = (e, item) => {
    e.stopPropagation();
    setId(item.id);
    setShowPlayer(true);
  };

  const onNavigateToItem = (item) => {
    if (type === "movie") {
      router.push(`/details/movie=${item.id}`);
    }
    if (type === "tv") {
      router.push(`/details/tv=${item.id}`);
    }
  };

  if (!data) return;

  return (
    <div>
      <Typography sx={{ m: 1 }} variant="h4">
        {heading}
      </Typography>
      {isLoading && <SkeletonGroup />}
      <Slider {...sliderSettings}>
        {data?.map((item) => (
          <Slide
            key={item.id}
            title={item.title ?? item.name}
            poster={item.poster_path || item.profile_path}
            rating={roundOnTwoDigits(item.vote_average)}
            onPlayVideo={(e) => onPlayVideo(e, item)}
            disablePlayIcon={trailerIsLoading}
            hasPlayIcon={hasPlayIcon}
            onNavigateToItem={() => onNavigateToItem(item)}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
