export const YT_VIDEO_BASE_URL = "https://www.youtube.com/watch?v=";
export const VIMEO_VIDEO_BASE_URL = "https://vimeo.com/";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
export const API_IMAGES_URL = process.env.NEXT_PUBLIC_API_IMAGES_URL;

export const DEBOUNCE_TIME = 250;

export const SLIDER_SETTINGS = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
