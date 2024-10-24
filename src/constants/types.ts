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
  last: MovieType | null;
  queryGenre: string;
  userList: MovieType[];
  movies: MovieType[];
  showList: boolean;
  current: MovieType | null;
  idBox: Set<string>;

  setLast: React.Dispatch<React.SetStateAction<MovieType | null>>;
  setUserList: React.Dispatch<React.SetStateAction<MovieType[]>>;
  setQueryGenre: React.Dispatch<React.SetStateAction<string>>;
  setMovies: React.Dispatch<React.SetStateAction<MovieType[]>>;
  setCurrent: React.Dispatch<React.SetStateAction<MovieType | null>>;
  setShowList: React.Dispatch<React.SetStateAction<boolean>>;
  setIdBox: React.Dispatch<React.SetStateAction<Set<string>>>;
};

export type MoviesState = {
  last: MovieType | null;
  queryGenre: string;
  userList: MovieType[];
  movies: MovieType[];
  showList: boolean;
  current: MovieType | null;
  idBox: Set<string>;
};
