import { API_URL } from "@/common/helpers/constants";
import useSWR from "swr";
import fetcher from "@/common/helpers/fetcher";
import useResourceType from "./useResourceType";
import { ShowTypes } from "../types";



export default function useDetails() {
  const { resourceId, resourceType } = useResourceType();

  const { data, error, isLoading } = useSWR(
    (resourceType === ShowTypes.MOVIE ||
      resourceType === ShowTypes.TV) &&
      `${API_URL}${resourceType}/${resourceId}`,
    fetcher,
  );

  return { data, error, isLoading };
}
