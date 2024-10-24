import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMoviesRequest } from "../redux/actions";

export const useMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesRequest("all"));
  }, [dispatch]);
};
