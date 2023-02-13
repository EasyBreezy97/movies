import { useState, useContext } from "react";
import { API_URL } from "@/common/helpers/constants";
import useSWR from "swr";
import fetcher from "@/common/helpers/fetcher";
import AppContext from "@/common/contexts/AppContext";

export default function useTrailer(show: string) {
  const [id, setId] = useState(null);
  const { setUrl, setVideoProvider } = useContext(AppContext);

  const { data, error, isLoading } = useSWR(
    id && `${API_URL}${show}/${id}/videos`,
    fetcher,
  );

  const trailer = data?.results?.filter((item) => item.type === "Trailer")[0];
  if (trailer) {
    setUrl(trailer?.key);
    setVideoProvider(trailer?.site);
  }

  return { data: trailer, error, isLoading, setId };
}
