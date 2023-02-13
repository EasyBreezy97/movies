import { useEffect, useState } from "react";
import useResourceType from "./useResourceType";

function useFetchResource() {
  const [shouldFetchMovies, setShouldFetchMovies] = useState(false);
  const [shouldFetchTV, setShouldFetchTV] = useState(false);

  const { resourceType, resourceId } = useResourceType();

  useEffect(() => {
    if (resourceType === "movie") setShouldFetchMovies(true);
    if (resourceType === "tv") setShouldFetchTV(true);
  }, [resourceId, resourceType]);

  return { shouldFetchMovies, shouldFetchTV, resourceId };
}

export default useFetchResource;
