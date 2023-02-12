import { API_URL } from "@/common/helpers/constants";
import useSWR from "swr";
import fetcher from "@/common/helpers/fetcher";

export default function useDetails(id: string, shouldFetch: boolean) {
  const { data, error, isLoading } = useSWR(
    shouldFetch && `${API_URL}movie/${id}`,
    fetcher,
  );

  return { data, error, isLoading };
}
