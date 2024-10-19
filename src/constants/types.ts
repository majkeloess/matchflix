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

export type MoviesContextType = {
  last: string | null;
  setLast: React.Dispatch<React.SetStateAction<string | null>>;
  queryGenre: string;
  setQueryGenre: React.Dispatch<React.SetStateAction<string>>;
  userList: MovieType[];
  setUserList: React.Dispatch<React.SetStateAction<MovieType[]>>;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};
