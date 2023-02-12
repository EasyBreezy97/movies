import { API_URL } from "@/common/helpers/constants";
import useSWR from "swr";
import fetcher from "@/common/helpers/fetcher";

export default function useDetails(id: string) {
  const { data, error, isLoading } = useSWR(`${API_URL}tv/${id}`, fetcher);

  return { data, error, isLoading };
}
