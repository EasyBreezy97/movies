import { API_IMAGES_URL } from "@/common/helpers/constants";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Image from "next/image";
import React, { FC } from "react";

interface ISlide {
  title: string;
  poster: string;
}

export const Heading = styled(Typography)(() => ({
  display: "block",
  textAlign: "center",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

const Slide: FC<ISlide> = ({ title, poster }) => {
  return (
    <Container sx={{ my: 3 }} maxWidth="sm">
      <Heading alignContent="center" variant="overline">
        {title}
      </Heading>
      <Image
        width={248}
        height={375}
        src={API_IMAGES_URL + poster}
        alt={poster}
        style={{ margin: "auto" }}
      />
    </Container>
  );
};

export default Slide;
