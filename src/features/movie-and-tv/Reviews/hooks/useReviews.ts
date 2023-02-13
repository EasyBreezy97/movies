import useSWR from "swr";
import { API_URL } from "@/common/helpers/constants";
import fetcher from "@/common/helpers/fetcher";
import useResourceType from "@/common/hooks/useResourceType";

enum SearchableTypes {
  MOVIE = "movie",
  TV = "tv",
}

export default function useReviews() {
  const { resourceId, resourceType } = useResourceType();

  const { data, error, isLoading } = useSWR(
    (resourceType === SearchableTypes.MOVIE ||
      resourceType === SearchableTypes.TV) &&
      `${API_URL}${resourceType}/${resourceId}/reviews`,
    fetcher,
  );

  return {
    data,
    error,
    isLoading,
  };
}
