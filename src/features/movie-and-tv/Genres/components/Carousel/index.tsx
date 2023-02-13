import React,{FC} from "react";
import Slider from "react-slick";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { SLIDER_SETTINGS } from "@/common/helpers/constants";
import Slide from "@/common/components/Slide";
import SkeletonGroup from "@/common/components/SkeletonGroup";
import { cloneDeep } from "lodash";

const settings = cloneDeep(SLIDER_SETTINGS);
settings.slidesToShow = 7;
settings.slidesToScroll = 2;
settings.responsive = [
  {
    breakpoint: 1500,
    settings: {
      slidesToShow: 5,
    },
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 4,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 3,
    },
  },
  {
    breakpoint: 400,
    settings: {
      slidesToShow: 2,
    },
  },
];
interface ICarousel {
  data:any;
  isLoading:boolean
  heading:string;
}
const Carousel:FC<ICarousel> = ({ data,  isLoading, heading }) => {
  return (
    <div>
      <Typography sx={{ m: 1 }} variant="h4">
        {heading}
      </Typography>
      {isLoading && <SkeletonGroup />}
      <Slider {...settings}>
        {data?.map((item:any) => (
          <Box
            key={item.id}
            sx={{
              height: 100,
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: 0.6,
              },
            }}
          >
            <Slide title={item.title ?? item.name} />
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
