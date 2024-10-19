import { data } from "../constants/exampleData";
import { Genre, MovieType } from "../constants/types";

export async function fetchMovies(genre: Genre | "all") {
  const response = await fetch("https://api.example/recommendations");

  let movies: MovieType[] = await response.json();

  // "Assume you have a backend", if it is real world scenario try/catch also
  movies = data;

  if (genre != "all") {
    movies = movies.filter((movie) => movie.genre.toLowerCase() == genre);
  }

  return movies;
}
