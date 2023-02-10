import React from "react";
import Slider from "react-slick";
import Typography from "@mui/material/Typography";
import useTrendingMovies from "@/features/movies/Trending/hooks/useTrendingMovies";
import fetcher from "@/common/helpers/fetcher";
import { API_URL, SLIDER_SETTINGS } from "@/common/helpers/constants";
import Slide from "./components/Slide";

const Trending = () => {
  const data = [
    {
      adult: false,
      backdrop_path: "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
      id: 505642,
      title: "Black Panther: Wakanda Forever",
      original_language: "en",
      original_title: "Black Panther: Wakanda Forever",
      overview:
        "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
      poster_path: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
      media_type: "movie",
      genre_ids: [28, 12, 878],
      popularity: 7332.994,
      release_date: "2022-11-09",
      video: false,
      vote_average: 7.5,
      vote_count: 2779,
    },
    {
      adult: false,
      backdrop_path: "/1RZlwRdVbKav9O153vWbYCn54Nk.jpg",
      id: 615777,
      title: "Babylon",
      original_language: "en",
      original_title: "Babylon",
      overview:
        "A tale of outsized ambition and outrageous excess, tracing the rise and fall of multiple characters in an era of unbridled decadence and depravity during Hollywood's transition from silent films and to sound films in the late 1920s.",
      poster_path: "/wjOHjWCUE0YzDiEzKv8AfqHj3ir.jpg",
      media_type: "movie",
      genre_ids: [18, 35],
      popularity: 690.471,
      release_date: "2022-12-22",
      video: false,
      vote_average: 7.686,
      vote_count: 896,
    },
    {
      adult: false,
      backdrop_path: "/dlrWhn0G3AtxYUx2D9P2bmzcsvF.jpg",
      id: 536554,
      title: "M3GAN",
      original_language: "en",
      original_title: "M3GAN",
      overview:
        "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
      poster_path: "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
      media_type: "movie",
      genre_ids: [878, 27, 35],
      popularity: 1967.69,
      release_date: "2022-12-28",
      video: false,
      vote_average: 7.571,
      vote_count: 1418,
    },
    {
      adult: false,
      backdrop_path: "/9Rq14Eyrf7Tu1xk0Pl7VcNbNh1n.jpg",
      id: 646389,
      title: "Plane",
      original_language: "en",
      original_title: "Plane",
      overview:
        "After a heroic job of successfully landing his storm-damaged aircraft in a war zone, a fearless pilot finds himself between the agendas of multiple militias planning to take the plane and its passengers hostage.",
      poster_path: "/2g9ZBjUfF1X53EinykJqiBieUaO.jpg",
      media_type: "movie",
      genre_ids: [28, 12, 53],
      popularity: 1628.131,
      release_date: "2023-01-13",
      video: false,
      vote_average: 6.852,
      vote_count: 219,
    },
    {
      adult: false,
      backdrop_path: "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
      id: 76600,
      title: "Avatar: The Way of Water",
      original_language: "en",
      original_title: "Avatar: The Way of Water",
      overview:
        "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      media_type: "movie",
      genre_ids: [878, 12, 28],
      popularity: 1418.818,
      release_date: "2022-12-14",
      video: false,
      vote_average: 7.745,
      vote_count: 5141,
    },
    {
      adult: false,
      backdrop_path: "/tGwO4xcBjhXC0p5qlkw37TrH6S6.jpg",
      id: 315162,
      title: "Puss in Boots: The Last Wish",
      original_language: "en",
      original_title: "Puss in Boots: The Last Wish",
      overview:
        "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
      poster_path: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
      media_type: "movie",
      genre_ids: [16, 12, 35, 10751, 14],
      popularity: 3332.879,
      release_date: "2022-12-07",
      video: false,
      vote_average: 8.5,
      vote_count: 3456,
    },
    {
      adult: false,
      backdrop_path: "/zGoZB4CboMzY1z4G3nU6BWnMDB2.jpg",
      id: 758009,
      title: "Shotgun Wedding",
      original_language: "en",
      original_title: "Shotgun Wedding",
      overview:
        "Darcy and Tom gather their families for the ultimate destination wedding but when the entire party is taken hostage, “’Til Death Do Us Part” takes on a whole new meaning in this hilarious, adrenaline-fueled adventure as Darcy and Tom must save their loved ones—if they don’t kill each other first.",
      poster_path: "/t79ozwWnwekO0ADIzsFP1E5SkvR.jpg",
      media_type: "movie",
      genre_ids: [28, 10749, 35],
      popularity: 3262.822,
      release_date: "2022-12-28",
      video: false,
      vote_average: 6.303,
      vote_count: 307,
    },
    {
      adult: false,
      backdrop_path: "/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg",
      id: 640146,
      title: "Ant-Man and the Wasp: Quantumania",
      original_language: "en",
      original_title: "Ant-Man and the Wasp: Quantumania",
      overview:
        "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
      poster_path: "/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
      media_type: "movie",
      genre_ids: [12, 878, 35],
      popularity: 435.915,
      release_date: "2023-02-10",
      video: false,
      vote_average: 8.2,
      vote_count: 10,
    },
    {
      adult: false,
      backdrop_path: "/96SADhPnkXnVN3KaRKsDeBovLcm.jpg",
      id: 877703,
      title: "Teen Wolf: The Movie",
      original_language: "en",
      original_title: "Teen Wolf: The Movie",
      overview:
        "The wolves are howling once again, as a terrifying ancient evil emerges in Beacon Hills. Scott McCall, no longer a teenager yet still an Alpha, must gather new allies and reunite trusted friends to fight back against this powerful and deadly enemy.",
      poster_path: "/wAkpPm3wcHRqZl8XjUI3Y2chYq2.jpg",
      media_type: "movie",
      genre_ids: [28, 14, 10770],
      popularity: 850.551,
      release_date: "2023-01-18",
      video: false,
      vote_average: 8.147,
      vote_count: 375,
    },
    {
      adult: false,
      backdrop_path: "/dA54ZxNp63KngiZlMNJIOhnXyY1.jpg",
      id: 814757,
      title: "Empire of Light",
      original_language: "en",
      original_title: "Empire of Light",
      overview:
        "The duty manager of a seaside cinema, who is struggling with her mental health, forms a relationship with a new employee on the south coast of England in the 1980s.",
      poster_path: "/h84SnIQF91Gz2Fv1OpMJ3245t4i.jpg",
      media_type: "movie",
      genre_ids: [18, 10749],
      popularity: 48.019,
      release_date: "2022-12-09",
      video: false,
      vote_average: 5.729,
      vote_count: 35,
    },
  ];

  // const { data, error, isLoading } = useTrendingMovies();
  return (
    <div>
      <Typography sx={{ m: 1 }} variant="h4">
        Trending Movies
      </Typography>
      <Slider {...SLIDER_SETTINGS}>
        {data?.map((trending) => (
          <Slide
            key={trending.id}
            title={trending.title}
            poster={trending.poster_path}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Trending;
