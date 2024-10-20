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
  setLast: React.Dispatch<React.SetStateAction<MovieType | null>>;
  queryGenre: string;
  setQueryGenre: React.Dispatch<React.SetStateAction<string>>;
  userList: MovieType[];
  setUserList: React.Dispatch<React.SetStateAction<MovieType[]>>;
  movies: MovieType[];
  setMovies: React.Dispatch<React.SetStateAction<MovieType[]>>;
  current: MovieType | null;
  setCurrent: React.Dispatch<React.SetStateAction<MovieType | null>>;

  showList: boolean;
  setShowList: React.Dispatch<React.SetStateAction<boolean>>;
  idBox: Set<string>;
  setIdBox: React.Dispatch<React.SetStateAction<Set<string>>>;
};
