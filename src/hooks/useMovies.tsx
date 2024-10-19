import { useEffect } from "react";
import { fetchMovies } from "../utils/fetch";
import { useMoviesContext } from "./useMoviesContext";
import { getRandom } from "../utils/rand";

export const useMovies = () => {
  const { queryGenre, setCurrent, setNumMovies, setMovies } =
    useMoviesContext();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMovies(queryGenre);
        setMovies(data);
        setNumMovies(data.length);
        setCurrent(data[getRandom(data.length - 1)]);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, [queryGenre]);
};
