import { useContext } from "react";
import DetailsGrid from "@/common/components/DetailsGrid";
import useMovieDetails from "@/features/movies/hooks/useDetails";
import useTVShowDetails from "@/features/tv-shows/hooks/useDetails";
import useFetchDetails from "@/common/hooks/useFetchDetails";
import { usdFormatter } from "@/common/helpers/usd-formatter";
import useActors from "@/features/movie-and-tv/Actors/hooks/useActors";
import Carousel from "@/common/components/Carousel";
import Container from "@mui/material/Container";
import useSimilar from "@/features/movie-and-tv/Similar/hooks/useSimilar";
import useTrailer from "@/common/hooks/useTrailer";
import AppContext from "@/common/contexts/AppContext";
import Player from "@/common/components/Player";
import useResourceType from "@/common/hooks/useResourceType";
import Reviews from "@/features/movie-and-tv/Reviews";

const Details = () => {
  const { setShowPlayer } = useContext(AppContext);

  const { shouldFetchMovies, shouldFetchTV, resourceId } = useFetchDetails();

  const { resourceType } = useResourceType();

  console.log({ resourceType });

  const {
    data: movieData,
    error: movieError,
    isLoading: movieLoading,
  } = useMovieDetails(resourceId, shouldFetchMovies);
  const {
    data: tvData,
    error: tvError,
    isLoading: tvLoading,
  } = useTVShowDetails(resourceId, shouldFetchTV);

  const { data: trailer, setId } = useTrailer(resourceType);

  const { data: cast, isLoading: castLoading, error: castError } = useActors();

  const {
    data: similar,
    isLoading: similarLoading,
    error: similarError,
  } = useSimilar(resourceId);



  const finalData = tvData || movieData;

  const productionCompanies = finalData?.production_companies
    ?.map((item) => item.name)
    .join(",");

  const productionCountries = finalData?.production_countries
    ?.map((item) => item.name)
    ?.join(",");

  const genres = finalData?.genres?.map((item) => item.name)?.join(" , ");

  const langs = finalData?.languages?.join(" , ");
  const budget = finalData?.budget && usdFormatter.format(finalData?.budget);
  const revenue = finalData?.revenue && usdFormatter.format(finalData?.revenue);

  const createdBy = finalData?.created_by?.map((item) => item.name).join(" , ");
  const networks = finalData?.networks?.map((item) => item.name).join(" , ");

  const spokenLangs = finalData?.spoken_languages
    ?.map((item) => item.english_name)
    .join(" , ");

  const onPlayTrailer = () => {
    setId(finalData?.id);
    setShowPlayer(true);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <DetailsGrid
        title={finalData?.name || finalData?.original_title}
        posterURL={finalData?.poster_path}
        isAdultMovie={finalData?.adult}
        tagLine={finalData?.tagline}
        originalLang={finalData?.original_language}
        popularity={finalData?.popularity}
        status={finalData?.status}
        votes={finalData?.vote_count}
        votesAvg={finalData?.vote_average}
        description={finalData?.overview}
        productionCompanies={productionCompanies}
        productionCountries={productionCountries}
        genres={genres}
        languages={langs}
        homePageURL={finalData?.homepage}
        budget={budget}
        revenue={revenue}
        releaseDate={finalData?.release_date}
        runtime={finalData?.runtime}
        belongsToCollection={finalData?.belongs_to_collection?.name}
        createdBy={createdBy}
        firstAirDate={finalData?.first_air_date}
        nextEpisodeToAir={finalData?.next_episode_to_air}
        lastAirDate={finalData?.last_air_date}
        numberOfSeasons={finalData?.number_of_seasons}
        numberOfEpisodes={finalData?.number_of_episodes}
        networks={networks}
        spokenLangs={spokenLangs}
        originCountries={finalData?.origin_country?.join(" , ")}
        type={finalData?.type}
        onPlayTrailer={onPlayTrailer}
      />
      <Carousel
        data={cast}
        isLoading={castLoading}
        error={castError}
        heading="Cast"
      />
      <Reviews/>
      <Carousel
        data={similar}
        isLoading={similarLoading}
        error={similarError}
        heading="Similar"
      />
      <Player />
    </Container>
  );
};

export default Details;
