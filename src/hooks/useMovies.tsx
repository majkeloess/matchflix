import { useEffect } from "react";
import { fetchMovies } from "../utils/fetch";
import { useMoviesContext } from "./useMoviesContext";
import { shuffleMovies } from "../utils/random";

export const useMovies = () => {
  const { queryGenre, setCurrent, setMovies, idBox } = useMoviesContext();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMovies(queryGenre);
        const shuffledData = shuffleMovies(data);

        setMovies(shuffledData);

        setCurrent(null);
        for (const el of shuffledData) {
          if (!idBox.has(el.id)) {
            setCurrent(el);
            break;
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
    /* eslint-disable-next-line */
  }, [queryGenre]);
};
