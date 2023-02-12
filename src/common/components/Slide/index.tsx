import React, { FC, MouseEventHandler } from "react";
import { API_IMAGES_URL } from "@/common/helpers/constants";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Image from "next/image";

interface ISlide {
  title: string;
  poster?: string;
  rating?: number;
  onPlayVideo?: MouseEventHandler<HTMLButtonElement> | undefined;
  disablePlayIcon?: boolean;
}

export const Heading = styled(Typography)(() => ({
  display: "block",
  textAlign: "center",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

const Slide: FC<ISlide> = ({
  title,
  poster,
  rating,
  onPlayVideo,
  disablePlayIcon,
}) => {
  return (
    <Container sx={{ my: 3 }} maxWidth="sm">
      <Heading alignContent="center" variant="overline">
        {title}
      </Heading>
      {poster && (
        <div style={{ position: "relative" }}>
          <ImageListItemBar
            position="bottom"
            title={title}
            subtitle={`Rating: ${rating}`}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${title}`}
              >
                <Button
                  color="primary"
                  onClick={onPlayVideo}
                  disabled={disablePlayIcon}
                >
                  <PlayCircleIcon fontSize="large" color="primary" />
                </Button>
              </IconButton>
            }
          />
          <Image
            width={248}
            height={375}
            src={API_IMAGES_URL + poster}
            alt={poster}
            style={{ margin: "auto" }}
          ></Image>
        </div>
      )}
    </Container>
  );
};

export default Slide;
