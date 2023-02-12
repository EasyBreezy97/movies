import { useState, useContext } from "react";
import { API_URL } from "@/common/helpers/constants";
import useSWR from "swr";
import fetcher from "@/common/helpers/fetcher";
import AppContext from "@/common/contexts/AppContext";

export default function useTrailer() {
  const [movieId, setMovieId] = useState(null);
  const { setUrl } = useContext(AppContext);

  const { data, error, isLoading } = useSWR(
    movieId && `${API_URL}movie/${movieId}/videos`,
    fetcher,
  );

  const trailer = data?.results?.filter((item) => item.type === "Trailer")[0];
  if (trailer) setUrl(trailer?.key)

  return { data: trailer, error, isLoading, setMovieId };
}
