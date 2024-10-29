import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesRequest } from "../redux/actions";
import { MoviesState } from "../constants/types";

export const useMovies = () => {
  const dispatch = useDispatch();
  const queryGenre = useSelector(
    (selector: MoviesState) => selector.queryGenre
  );

  useEffect(() => {
    dispatch(fetchMoviesRequest(queryGenre));
  }, [queryGenre]);
};
