import { FC, useContext } from "react";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { API_IMAGES_URL } from "@/common/helpers/constants";
import plus18Img from "@/common/assets/Plus_18.webp";
import { Button, Link } from "@mui/material";
import useTrailer from "@/common/hooks/useTrailer";
import AppContext from "@/common/contexts/AppContext";

const CARDS_MIN_HEIGHT = 550;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface IDetailsGrid {
  posterURL: string;
  isAdultMovie: boolean;
  tagLine: string;
  originalLang: string;
  popularity: string;
  status: string;
  votes: number;
  votesAvg: number;
  title: string;
  description: string;
  productionCompanies: string;
  productionCountries: string;
  genres: string;
  languages: string;
  homePageURL: string;
  budget: string;
  releaseDate: string;
  revenue: string;
  runtime: number;
  belongsToCollection: string;
  createdBy: string;
  firstAirDate: string;
  nextEpisodeToAir: string;
  lastAirDate: string;
  networks: string;
  numberOfSeasons: number;
  numberOfEpisodes: number;
  spokenLangs: string;
  originCountries: string;
  type: string;
  onPlayTrailer: React.MouseEventHandler<HTMLButtonElement>;
}

const DetailsGrid: FC<IDetailsGrid> = ({
  title,
  posterURL,
  isAdultMovie,
  tagLine,
  originalLang,
  popularity,
  status,
  votes,
  votesAvg,
  description,
  productionCompanies,
  productionCountries,
  genres,
  languages,
  homePageURL,
  budget,
  releaseDate,
  revenue,
  runtime,
  belongsToCollection,
  createdBy,
  firstAirDate,
  nextEpisodeToAir,
  lastAirDate,
  networks,
  numberOfSeasons,
  numberOfEpisodes,
  spokenLangs,
  originCountries,
  type,
  onPlayTrailer,
}) => {
  return (
    <div>
      {title && (
        <Typography sx={{ m: 1 }} variant="h4">
          {title}
        </Typography>
      )}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <Item sx={{ minHeight: CARDS_MIN_HEIGHT }}>
              <Grid
                style={{
                  position: "relative",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Image
                  style={{
                    maxWidth: "100%",
                    objectFit: "cover",
                    marginBottom: "15px",
                  }}
                  width={300}
                  height={390}
                  src={API_IMAGES_URL + posterURL}
                  alt="poster"
                />
                {isAdultMovie && (
                  <Image
                    style={{
                      position: "absolute",
                      top: "-25px",
                      right: "-5px",
                    }}
                    src={plus18Img}
                    width={54}
                    height={54}
                    alt="for adults"
                  />
                )}
                {originalLang && (
                  <Typography variant="overline">
                    Original Lang: {originalLang}{" "}
                  </Typography>
                )}
                {popularity && (
                  <Typography variant="overline">
                    Popularity:{popularity}
                  </Typography>
                )}
                {status && (
                  <Typography variant="overline">Staus: {status} </Typography>
                )}
                {votesAvg ? (
                  <Typography variant="overline">
                    Votes avg: {votesAvg}
                  </Typography>
                ) : null}
              </Grid>
            </Item>
          </Grid>
          <Grid item md={9} xs={12}>
            <Item sx={{ minHeight: CARDS_MIN_HEIGHT }}>
              {tagLine && (
                <Typography sx={{ m: 1 }} variant="overline">
                  Tagline: {tagLine}{" "}
                </Typography>
              )}
              <div>
                <Typography sx={{ m: 1 }} variant="overline">
                  {"Description"}
                </Typography>{" "}
                <Typography sx={{ m: 1 }} variant="body1">
                  {description}
                </Typography>{" "}
              </div>
              {productionCompanies && (
                <Typography sx={{ m: 1 }} variant="body1">
                  Production companies: {productionCompanies}
                </Typography>
              )}
              {productionCountries && (
                <Typography sx={{ m: 1 }} variant="body1">
                  Production countries: {productionCountries}
                </Typography>
              )}
              {createdBy && (
                <Typography sx={{ m: 1 }} variant="body1">
                  Created By: {createdBy}
                </Typography>
              )}
              {runtime ? (
                <Typography sx={{ m: 1 }} variant="body1">
                  Runtime: {runtime}m
                </Typography>
              ) : null}
              {genres && (
                <Typography sx={{ m: 1 }} variant="body1">
                  Genres: {genres}
                </Typography>
              )}
              {budget ? (
                <Typography sx={{ m: 1 }} variant="body1">
                  Budget: {budget}
                </Typography>
              ) : null}
              {revenue ? (
                <Typography sx={{ m: 1 }}>Revenue: {revenue}</Typography>
              ) : null}
              {firstAirDate && (
                <Typography sx={{ m: 1 }} variant="body1">
                  First epoisode air date: {firstAirDate}
                </Typography>
              )}
              {nextEpisodeToAir && (
                <Typography sx={{ m: 1 }} variant="body1">
                  Next epoisode air date: {nextEpisodeToAir}
                </Typography>
              )}
              {lastAirDate && (
                <Typography sx={{ m: 1 }} variant="body1">
                  Last epoisode air date: {lastAirDate}
                </Typography>
              )}
              {numberOfEpisodes ? (
                <Typography sx={{ m: 1 }} variant="body1">
                  Number of episodes: {numberOfEpisodes}
                </Typography>
              ) : null}
              {numberOfSeasons ? (
                <Typography sx={{ m: 1 }} variant="body1">
                  Number of seasons: {numberOfSeasons}
                </Typography>
              ) : null}
              {networks && (
                <Typography sx={{ m: 1 }} variant="body1">
                  Network(s): {networks}
                </Typography>
              )}
              {languages && (
                <Typography sx={{ m: 1 }} variant="body1">
                  Languages: {languages}
                </Typography>
              )}
              {spokenLangs && (
                <Typography sx={{ m: 1 }} variant="body1">
                  Spoken language(s): {spokenLangs}
                </Typography>
              )}
              {originCountries && (
                <Typography sx={{ m: 1 }} variant="body1">
                  Origin countries: {originCountries}
                </Typography>
              )}

              {releaseDate && (
                <Typography sx={{ m: 1 }}>
                  Release date: {releaseDate}
                </Typography>
              )}
              {votes ? (
                <Typography sx={{ m: 1 }}>Votes: {votes}</Typography>
              ) : null}
              {votesAvg ? (
                <Typography sx={{ m: 1 }}>Votes avg: {votesAvg}</Typography>
              ) : null}
              {belongsToCollection && (
                <Typography sx={{ m: 1 }}>
                  Belongs to collection: {belongsToCollection}
                </Typography>
              )}
              {type && <Typography sx={{ m: 1 }}>Type: {type}</Typography>}
              {homePageURL && (
                <Typography sx={{ m: 1 }} variant="body1">
                  Home page URL:{" "}
                  <Link href={homePageURL} target="_blanck">
                    {homePageURL}
                  </Link>
                </Typography>
              )}
              <Button onClick={onPlayTrailer} sx={{ m: 1 }} variant="outlined">
                Open trailer
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default DetailsGrid;
