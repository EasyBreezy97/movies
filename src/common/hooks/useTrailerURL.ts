import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { VIMEO_VIDEO_BASE_URL, YT_VIDEO_BASE_URL } from "../helpers/constants";

function useTrailerURL(url: string) {
  const { videoProvider } = useContext(AppContext);

  switch (videoProvider) {
    case "YouTube":
      return YT_VIDEO_BASE_URL + url;
    case "Vimeo":
      return VIMEO_VIDEO_BASE_URL + url;
  }
}
export default useTrailerURL;
