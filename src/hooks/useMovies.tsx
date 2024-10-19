import { useEffect, useState } from "react";
import { fetchMovies } from "../utils/fetch";
import { MovieType } from "../constants/types";
import { useMoviesContext } from "./useMoviesContext";

export const useMovies = () => {
  const { queryGenre } = useMoviesContext();

  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const data = await fetchMovies(queryGenre);
        setMovies(data);
        setError(null);
      } catch (error) {
        setError("Failed to fetch movies");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [queryGenre]);

  return { movies, loading, error };
};
