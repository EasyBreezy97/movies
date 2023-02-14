import { useState, useContext } from "react";
import { API_URL } from "@/common/helpers/constants";
import useSWR from "swr";
import fetcher from "@/common/helpers/fetcher";
import AppContext from "@/common/contexts/AppContext";

interface ITrailer {
  type: string;
}

export default function useTrailer(show: string) {
  const [id, setId] = useState<string | null>(null);
  const { setUrl, setVideoProvider } = useContext(AppContext);

  const { data, error, isLoading } = useSWR(
    id && `${API_URL}${show}/${id}/videos`,
    fetcher,
  );

  const trailer = data?.results?.filter(
    (item: ITrailer) => item.type === "Trailer",
  )[0];
  if (trailer) {
    setUrl(trailer?.key);
    setVideoProvider(trailer?.site);
  }
  if (isLoading) {
    setUrl("");
  }

  return { data: trailer, error, isLoading, setId };
}
