import { FC } from "react";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { API_IMAGES_URL } from "@/common/helpers/constants";
import plus18Img from "@/common/assets/Plus_18.webp";
import { Link } from "@mui/material";

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
  votes: string;
  votesAvg: string;
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
}) => {
  return (
    <Container sx={{ mt: 4 }}>
      {title && (
        <Typography sx={{ m: 1 }} variant="h4">
          {title}
        </Typography>
      )}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <Item sx={{ minHeight: 460 }}>
              <Grid
                style={{
                  position: "relative",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Image
                  style={{ maxWidth: "100%", objectFit: "cover" }}
                  width={300}
                  height={350}
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
              </Grid>
            </Item>
          </Grid>
          <Grid item md={9} xs={12}>
            <Item sx={{ minHeight: 460 }}>
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
              {runtime && (
                <Typography sx={{ m: 1 }} variant="body1">
                  Runtime: {runtime}m
                </Typography>
              )}
              {genres && (
                <Typography sx={{ m: 1 }} variant="body1">
                  Genres: {genres}
                </Typography>
              )}
              {budget && (
                <Typography sx={{ m: 1 }} variant="body1">
                  Budget: {budget}
                </Typography>
              )}
              {languages && (
                <Typography sx={{ m: 1 }} variant="body1">
                  Languages: {languages}
                </Typography>
              )}
              {revenue && (
                <Typography sx={{ m: 1 }}>Revenue: {revenue}</Typography>
              )}
              {releaseDate && (
                <Typography sx={{ m: 1 }}>
                  Release date: {releaseDate}
                </Typography>
              )}
              {votes && <Typography sx={{ m: 1 }}>Votes: {votes}</Typography>}
              {votesAvg && (
                <Typography sx={{ m: 1 }}>Votes avg: {votesAvg}</Typography>
              )}
              {belongsToCollection && (
                <Typography sx={{ m: 1 }}>
                  Belongs to collection: {belongsToCollection}
                </Typography>
              )}
              {homePageURL && (
                <Typography sx={{ m: 1 }} variant="body1">
                  Home page URL:{" "}
                  <Link href={homePageURL} target="_blanck">
                    {homePageURL}
                  </Link>
                </Typography>
              )}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default DetailsGrid;
