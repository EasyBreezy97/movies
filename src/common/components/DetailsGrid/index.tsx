import { styled } from "@mui/material/styles";
import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { API_IMAGES_URL } from "@/common/helpers/constants";
import plus18Img from "@/common/assets/Plus_18.webp";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: "center",
  color: theme.palette.text.secondary,
}));


export default function DetailsGrid() {
  return (
    <Container maxWidth={false} sx={{ mt: 4 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item md={2} xs={12}>
            <Item>
              <Grid style={{ position: "relative" }}>
                <Image
                  width={204}
                  height={308}
                  src={API_IMAGES_URL + "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg"}
                  alt="poster"
                />
                <Image
                  style={{ position: "absolute", top: "0", right: "0" }}
                  src={plus18Img}
                  width={36}
                  height={36}
                  alt="18"
                />
                <List>
                  <ListItem>Tagline: </ListItem>
                  <ListItem>Original Lang: </ListItem>
                  <ListItem>Popularity: </ListItem>
                  <ListItem>Staus: </ListItem>
                  <ListItem>Votes: </ListItem>
                  <ListItem>Votes avg: </ListItem>
                </List>
              </Grid>
            </Item>
          </Grid>
          <Grid item md={10} xs={12}>
            <Item>
              <Typography sx={{ m: 1 }} variant="h4">
                {"SOME title"}
              </Typography>{" "}
              <Typography sx={{ m: 1 }} variant="body1">
                {"Movie or tv desc"}
              </Typography>{" "}
              <Typography sx={{ m: 1 }} variant="body1">
                {"Production companies: "}
              </Typography>{" "}
              <Typography sx={{ m: 1 }} variant="body1">
                {"Production countries: "}
              </Typography>{" "}
              <Typography sx={{ m: 1 }} variant="body1">
                {"Genres:"}
              </Typography>{" "}
              <Typography sx={{ m: 1 }} variant="body1">
                {"Languages:"}
              </Typography>{" "}
              <Typography sx={{ m: 1 }} variant="body1">
                {"Home Page:"}
              </Typography>{" "}

            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
