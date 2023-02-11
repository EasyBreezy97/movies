import { useState } from "react";
import useSWR from "swr";
import { API_URL } from "@/common/helpers/constants";
import fetcher from "@/common/helpers/fetcher";

enum SearchableTypes {
  MOVIE = "movie",
  TV = "tv",
}
export default function useSearch(quantity = 20) {
  const [queryParams, setQueryParams] = useState("");

  const { data, error, isLoading } = useSWR(
    queryParams && `${API_URL}search/multi?query=${queryParams}`,
    fetcher,
  );
  let moviesAndTVShows;

  if (data?.results) {
    moviesAndTVShows = data.results
      ?.filter(
        (item) =>
          item.media_type === SearchableTypes.MOVIE ||
          item.media_type === SearchableTypes.TV,
      )
      .slice(0, quantity);
  }
  return {
    data: moviesAndTVShows,
    error,
    isLoading,
    setQueryParams,
  };
}
