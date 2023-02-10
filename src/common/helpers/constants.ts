export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
export const API_IMAGES_URL = process.env.NEXT_PUBLIC_API_IMAGES_URL;

export const SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
