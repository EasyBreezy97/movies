import { API_URL } from "@/common/helpers/constants";
import useSWR from "swr";
import fetcher from "@/common/helpers/fetcher";
import useResourceType from "./useResourceType";

enum SearchableTypes {
  MOVIE = "movie",
  TV = "tv",
}

export default function useDetails() {
  const { resourceId, resourceType } = useResourceType();

  const { data, error, isLoading } = useSWR(
    (resourceType === SearchableTypes.MOVIE ||
      resourceType === SearchableTypes.TV) &&
      `${API_URL}${resourceType}/${resourceId}`,
    fetcher,
  );

  return { data, error, isLoading };
}
