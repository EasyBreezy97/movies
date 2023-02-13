import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ShowTypes } from "../types";

export default function useResourceType(fallbackPage = "/") {
  const [resourceType, setResourceType] = useState<ShowTypes>(ShowTypes.MOVIE);
  const [resourceId, setResourceId] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router?.query?.id) {
      const [type, id] = (router.query.id as string).split("=");
      if (type === ShowTypes.MOVIE || type === ShowTypes.TV) {
        if (type === ShowTypes.MOVIE) setResourceType(ShowTypes.MOVIE);
        if (type === ShowTypes.TV) setResourceType(ShowTypes.TV);
        setResourceId(id);
      } else {
        router.push(fallbackPage);
      }
    }
  }, [router, fallbackPage]);

  return { resourceType, resourceId };
}
