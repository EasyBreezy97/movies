import React, { FC, useContext } from "react";
import ReactPlayer from "react-player";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import AppContext from "@/common/contexts/AppContext";
import { YT_VIDEO_BASE_URL } from "@/common/helpers/constants";
import useTrailerURL from "@/common/hooks/useTrailerURL";

interface IPlayer {}

const Player: FC<IPlayer> = () => {
  const { showPlayer, setShowPlayer, setUrl, url } = useContext(AppContext);
  const TRAILER_URL = useTrailerURL(url);

  const handleClose = () => {
    setShowPlayer(false);
    setUrl("");
  };
  return (
    <Dialog maxWidth={false} open={showPlayer} onClose={handleClose}>
      <DialogContent>
        <DialogContentText>
          <div>
            <ReactPlayer url={TRAILER_URL} />
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default Player;
