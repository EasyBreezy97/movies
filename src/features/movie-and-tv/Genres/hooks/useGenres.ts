import { API_URL } from "@/common/helpers/constants";
import useSWR from "swr";
import fetcher from "@/common/helpers/fetcher";
import { uniqBy } from "lodash";

export default function useGenres() {
  const {
    data: movieGenre,
    error: movieGenreError,
    isLoading: movieGenreIsLoading,
  } = useSWR(`${API_URL}genre/movie/list`, fetcher);
  const {
    data: tvGenre,
    error: tvGenreError,
    isLoading: tvGenreIsLoading,
  } = useSWR(`${API_URL}genre/tv/list`, fetcher);

  let finalData;
  let errorMsg: string | undefined;
  const isLoading = movieGenreIsLoading || tvGenreIsLoading;

  if (movieGenre?.genres && tvGenre?.genres && !isLoading) {
    const data = [...movieGenre.genres, ...tvGenre.genres];
    finalData = uniqBy(data, "id");
  } else if (movieGenre?.genres) {
    finalData = [...movieGenre.genres];
  } else if (tvGenre?.genres) {
    finalData = [...tvGenre.genres];
  } else if (movieGenreError && tvGenreError) {
    errorMsg = "Failed to fetch Genres...";
  }

  return { data: finalData, error: errorMsg, isLoading };
}
