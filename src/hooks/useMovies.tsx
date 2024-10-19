import { useEffect, useState } from "react";
import { fetchMovies } from "../utils/fetch";
import { Genre, MovieType } from "../constants/types";

export function useMovies(genre: "all" | Genre) {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const data = await fetchMovies(genre);
        setMovies(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [genre]);

  return { movies, loading, error };
}
