import { MovieType } from "../constants/types";

export async function fetchMovies(genre: string) {
  const response = await fetch(
    `https://api.majkeloess.dev/matchflix/movies?key=${process.env.VITE_API_KEY}`
  );
  const movies: MovieType[] = await response.json();

  if (genre != "all") {
    return movies.filter((movie) => movie.genre.toLowerCase() == genre);
  }

  return movies;
}
