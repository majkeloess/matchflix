export type Genre =
  | "Action"
  | "Animation"
  | "Comedy"
  | "Drama"
  | "Romance"
  | "Thriller"
  | "War"
  | "Crime"
  | "History"
  | "Adventure"
  | "Horror"
  | "Family"
  | "Western"
  | "Science Fiction";

export type MovieType = {
  id: string;
  imageURL: string;
  title: string;
  summary: string;
  rating: number;
  genre: Genre;
};
