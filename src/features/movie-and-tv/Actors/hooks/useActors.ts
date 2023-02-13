import { useEffect, useState } from "react";
import useSWR from "swr";
import { API_URL } from "@/common/helpers/constants";
import fetcher from "@/common/helpers/fetcher";
import { useRouter } from "next/router";

enum SearchableTypes {
  MOVIE = "movie",
  TV = "tv",
}

export default function useActors(id: string) {
  const [type, setType] = useState("");
  const router = useRouter();
  console.log({ router });

  useEffect(() => {
    if (router?.query?.id) {
      const [type] = (router.query.id as string).split("=");
      setType(type);
    }
  }, [router]);

  const { data, error, isLoading } = useSWR(
    (type === SearchableTypes.MOVIE || type === SearchableTypes.TV) &&
      `${API_URL}${type}/${id}/credits`,
    fetcher,
  );

  return {
    data: data?.cast,
    error,
    isLoading,
  };
}
