import {
  FetchMoviesRequest,
  MovieType,
  SetCurrentAction,
  SetIdBoxAction,
  SetLastAction,
  SetMoviesAction,
  SetQueryGenreAction,
  SetShowListAction,
  SetUserListAction,
} from "../constants/types";
import {
  FETCH_MOVIES_REQUEST,
  SET_CURRENT,
  SET_ID_BOX,
  SET_LAST,
  SET_MOVIES,
  SET_QUERY_GENRE,
  SET_SHOW_LIST,
  SET_USER_LIST,
} from "./actionsTypes";

export const fetchMoviesRequest = (genre: string): FetchMoviesRequest => ({
  type: FETCH_MOVIES_REQUEST,
  payload: genre,
});

export const setLast = (last: MovieType | null): SetLastAction => ({
  type: SET_LAST,
  payload: last,
});

export const setCurrent = (current: MovieType | null): SetCurrentAction => ({
  type: SET_CURRENT,
  payload: current,
});

export const setQueryGenre = (queryGenre: string): SetQueryGenreAction => ({
  type: SET_QUERY_GENRE,
  payload: queryGenre,
});

export const setMovies = (movies: MovieType[]): SetMoviesAction => ({
  type: SET_MOVIES,
  payload: movies,
});

export const setUserList = (userList: MovieType[]): SetUserListAction => ({
  type: SET_USER_LIST,
  payload: userList,
});

export const setShowList = (showList: boolean): SetShowListAction => ({
  type: SET_SHOW_LIST,
  payload: showList,
});

export const setIdBox = (idBox: Set<string>): SetIdBoxAction => ({
  type: SET_ID_BOX,
  payload: idBox,
});
