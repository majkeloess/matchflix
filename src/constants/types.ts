import {
  FETCH_MOVIES_REQUEST,
  SET_CURRENT,
  SET_ID_BOX,
  SET_LAST,
  SET_MOVIES,
  SET_QUERY_GENRE,
  SET_SHOW_LIST,
  SET_USER_LIST,
} from "../redux/actionsTypes";

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

export type SetLastAction = {
  type: typeof SET_LAST;
  payload: null | MovieType;
};

export type SetCurrentAction = {
  type: typeof SET_CURRENT;
  payload: null | MovieType;
};

export type SetQueryGenreAction = {
  type: typeof SET_QUERY_GENRE;
  payload: string;
};

export type SetMoviesAction = {
  type: typeof SET_MOVIES;
  payload: MovieType[];
};

export type SetUserListAction = {
  type: typeof SET_USER_LIST;
  payload: MovieType[];
};

export type SetShowListAction = {
  type: typeof SET_SHOW_LIST;
  payload: boolean;
};

export type SetIdBoxAction = {
  type: typeof SET_ID_BOX;
  payload: Set<string>;
};

export type FetchMoviesRequest = {
  type: typeof FETCH_MOVIES_REQUEST;
  payload: string;
};

export type MovieActions =
  | SetLastAction
  | SetCurrentAction
  | SetQueryGenreAction
  | SetMoviesAction
  | SetUserListAction
  | SetShowListAction
  | SetIdBoxAction;

export type MoviesState = {
  last: MovieType | null;
  queryGenre: string;
  userList: MovieType[];
  movies: MovieType[];
  showList: boolean;
  current: MovieType | null;
  idBox: Set<string>;
};
