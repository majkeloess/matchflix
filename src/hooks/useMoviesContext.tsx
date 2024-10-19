import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

export function useMoviesContext() {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error("Error with useMoviesContext");
  }
  return context;
}
