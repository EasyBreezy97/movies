import { useContext } from "react";
import DetailsGrid from "@/common/components/DetailsGrid";
import { usdFormatter } from "@/common/helpers/usd-formatter";
import Container from "@mui/material/Container";
import useTrailer from "@/common/hooks/useTrailer";
import AppContext from "@/common/contexts/AppContext";
import Player from "@/common/components/Player";
import useResourceType from "@/common/hooks/useResourceType";
import Reviews from "@/features/movie-and-tv/Reviews";
import Actors from "@/features/movie-and-tv/Actors";
import Similar from "@/features/movie-and-tv/Similar";
import useDetails from "@/common/hooks/useDetails";

const Details = () => {
  const { setShowPlayer } = useContext(AppContext);

  const { resourceType } = useResourceType();

  const { data: finalData, error, isLoading } = useDetails();

  const { setId } = useTrailer(resourceType);

  interface IDetailName {
    name?: string;
    english_name?: string;
  }

  const productionCompanies = finalData?.production_companies
    ?.map((item: IDetailName) => item.name)
    .join(",");

  const productionCountries = finalData?.production_countries
    ?.map((item: IDetailName) => item.name)
    ?.join(",");

  const genres = finalData?.genres
    ?.map((item: IDetailName) => item.name)
    ?.join(" , ");

  const langs = finalData?.languages?.join(" , ");
  const budget = finalData?.budget && usdFormatter.format(finalData?.budget);
  const revenue = finalData?.revenue && usdFormatter.format(finalData?.revenue);

  const createdBy = finalData?.created_by
    ?.map((item: IDetailName) => item.name)
    .join(" , ");
  const networks = finalData?.networks
    ?.map((item: IDetailName) => item.name)
    .join(" , ");

  const spokenLangs = finalData?.spoken_languages
    ?.map((item: IDetailName) => item.english_name)
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
        nextEpisodeToAir={finalData?.next_episode_to_air?.air_date}
        lastAirDate={finalData?.last_air_date}
        numberOfSeasons={finalData?.number_of_seasons}
        numberOfEpisodes={finalData?.number_of_episodes}
        networks={networks}
        spokenLangs={spokenLangs}
        originCountries={finalData?.origin_country?.join(" , ")}
        type={finalData?.type}
        onPlayTrailer={onPlayTrailer}
      />
      <Actors />
      <Reviews />
      <Similar />
      <Player />
    </Container>
  );
};

export default Details;
