import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function useFetchResource() {
  const [shouldFetchMovies, setShouldFetchMovies] = useState(false);
  const [shouldFetchTV, setShouldFetchTV] = useState(false);
  const [resourceId, setResourceId] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (router?.query?.id) {
      const [type, id] = (router.query.id as string).split("=");
      console.log({ type, id });
      setResourceId(id);

      if (type === "movie" || type === "tv") {
        if (type === "movie") setShouldFetchMovies(true);
        if (type === "tv") setShouldFetchTV(true);
      } else {
        router.push("/");
      }

      console.log("type", type);

      // if(type!=="movie" || type !=="tv") router.push("/")
    }
  }, [router]);

  return { shouldFetchMovies, shouldFetchTV, resourceId };
}

export default useFetchResource;
