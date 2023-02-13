import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function useResourceType(fallbackPage = "/") {
  const [resourceType, setResourceType] = useState("");
  const [resourceId, setResourceId] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router?.query?.id) {
      const [type, id] = (router.query.id as string).split("=");
      if (type === "movie" || type === "tv") {
        if (type === "movie") setResourceType("movie");
        if (type === "tv") setResourceType("tv");
        setResourceId(id);
      } else {
        router.push(fallbackPage);
      }
    }
  }, [router, fallbackPage]);

  return { resourceType, resourceId };
}
