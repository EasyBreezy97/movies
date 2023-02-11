import { useMemo } from "react";
import { API_URL } from "@/common/helpers/constants";
import useSWR from "swr";
import fetcher from "@/common/helpers/fetcher";

export default function useMostPopular(quantity = 20) {
  const { data, error, isLoading } = useSWR(
    `${API_URL}movie/popular`,
    fetcher,
  );

  const finalData = useMemo(
    () => data?.results.slice(0, quantity),
    [data?.results, quantity],
  );
  return { data:finalData, error, isLoading };
}
