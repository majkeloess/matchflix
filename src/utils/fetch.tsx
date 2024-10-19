import { data } from "../constants/exampleData";
import { MovieType } from "../constants/types";

export async function fetchMovies(genre: string) {
  //const response = await fetch("https://api.example/recommendations");
  // "Assume you have a backend", if it is real world scenario try/catch also
  const movies: MovieType[] = data;

  if (genre != "all") {
    return movies.filter((movie) => movie.genre.toLowerCase() == genre);
  }

  return movies;
}
