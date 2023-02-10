import { useMemo } from "react";
import { API_URL } from "@/common/helpers/constants";
import useSWR from "swr";
import fetcher from "@/common/helpers/fetcher";

export default function useTrendingMovies(quantity = 10) {
  const { data, error, isLoading } = useSWR(
    `${API_URL}trending/movie/week`,
    fetcher,
  );

  const finalData = useMemo(
    () => data?.results.slice(0, quantity),
    [data?.results, quantity],
  );
  console.log({finalData});
  return { data:finalData, error, isLoading };
}
