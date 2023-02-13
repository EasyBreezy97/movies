import useSWR from "swr";
import { API_URL } from "@/common/helpers/constants";
import fetcher from "@/common/helpers/fetcher";
import useResourceType from "@/common/hooks/useResourceType";
import { ShowTypes } from "@/common/types";

export default function useActors() {
  const { resourceId, resourceType } = useResourceType();

  const { data, error, isLoading } = useSWR(
    (resourceType === ShowTypes.MOVIE || resourceType === ShowTypes.TV) &&
      `${API_URL}${resourceType}/${resourceId}/credits`,
    fetcher,
  );

  return {
    data: data?.cast,
    error,
    isLoading,
  };
}
