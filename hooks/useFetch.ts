import { useEffect, useState } from "react";
import { Movie } from "@/interfaces/interfaces";

export function useFetch(func: any) {
  const [data, setData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  const [rebuild, setRebuild] = useState<Date>(new Date());

  useEffect(() => {
    setLoading(true);
    func
      .then((data: Movie[]) => setData(data))
      .catch((err: any) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [rebuild]);

  function refetch(): void {
    setRebuild(new Date());
  }

  return { data, loading, error, refetch };
}
