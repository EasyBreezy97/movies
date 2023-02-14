import React, { FC, MouseEvent, useContext } from "react";
import Slider from "react-slick";
import Typography from "@mui/material/Typography";
import { SLIDER_SETTINGS } from "@/common/helpers/constants";
import Slide from "@/common/components/Slide";
import { roundOnTwoDigits } from "@/common/helpers/utils";
import useTrailer from "@/common/hooks/useTrailer";
import AppContext from "@/common/contexts/AppContext";
import { useRouter } from "next/router";
import ErrorBox from "../ErrorBox";
import { AxiosError } from "axios";
import Alert from "@mui/material/Alert";
import SkeletonGroup from "../SkeletonGroup";

interface ICarouselItem {
  id: string;
  title: string;
  name: string | null;
  poster_path: string | undefined;
  profile_path: string | undefined;
  vote_average: number;
}
interface ICarousel {
  data: Array<ICarouselItem>;
  error: AxiosError | Error | any;
  isLoading: boolean;
  heading: string;
  slidesToShow?: number;
  hasPlayIcon?: boolean;
  type: "movie" | "tv" | "actor";
}

const Carousel: FC<ICarousel> = ({
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

  const { isLoading: trailerIsLoading, setId } = useTrailer(type);

  const onPlayVideo = (e: MouseEvent<HTMLElement>, item: ICarouselItem) => {
    e.stopPropagation();
    setId(item.id);
    setShowPlayer(true);
  };

  const onNavigateToItem = (item: ICarouselItem) => {
    if (type === "movie") {
      router.push(`/details/movie=${item.id}`);
    }
    if (type === "tv") {
      router.push(`/details/tv=${item.id}`);
    }
  };

  return (
    <div>
      <Typography sx={{ m: 1 }} variant="h4">
        {heading}
      </Typography>
      {error && <ErrorBox error={error} />}
      {isLoading && <SkeletonGroup />}
      {!error && !data?.length && !isLoading && (
        <Alert severity="warning">No items</Alert>
      )}
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
            type={type}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
