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
  hasPlayIcon?: boolean;
  onPlayVideo?: MouseEventHandler<HTMLButtonElement> | undefined;
  onNavigateToItem?: MouseEventHandler<HTMLImageElement> | undefined;
  disablePlayIcon?: boolean;
  type: "movie" | "tv" | "actor";
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
  hasPlayIcon,
  disablePlayIcon,
  type,
  onPlayVideo,
  onNavigateToItem,
}) => {
  const imageFooterStyle =
    type !== "actor"
      ? { "&:hover": { cursor: "pointer" } }
      : { "&:hover": { cursor: "default" } };

  return (
    <Container sx={{ my: 3 }} maxWidth="sm">
      <Heading alignContent="center" variant="overline">
        {title}
      </Heading>
      {poster && (
        <div style={{ position: "relative" }}>
          <ImageListItemBar
            onClick={onNavigateToItem}
            sx={imageFooterStyle}
            position="bottom"
            title={title}
            subtitle={rating && `Rating: ${rating}`}
            actionIcon={
              hasPlayIcon && (
                <Button
                  onClick={onPlayVideo}
                  variant="contained"
                  disabled={disablePlayIcon}
                  sx={{ fontSize: "10px" }}
                >
                  Trailer
                </Button>
              )
            }
          />
          <Image
            width={248}
            height={375}
            src={API_IMAGES_URL + poster}
            alt={poster || "no image"}
            style={{ margin: "auto" }}
          ></Image>
        </div>
      )}
    </Container>
  );
};

export default Slide;
