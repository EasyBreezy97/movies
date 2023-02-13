import { useState } from "react";
import useSWR from "swr";
import { API_URL } from "@/common/helpers/constants";
import fetcher from "@/common/helpers/fetcher";
import { ShowTypes } from "@/common/types";

interface IItemType {
  media_type: ShowTypes;
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
        (item: IItemType) =>
          item.media_type === ShowTypes.MOVIE ||
          item.media_type === ShowTypes.TV,
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
