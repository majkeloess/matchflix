import { MovieType } from "../constants/types";
import {
  SET_CURRENT,
  SET_ID_BOX,
  SET_LAST,
  SET_MOVIES,
  SET_QUERY_GENRE,
  SET_SHOW_LIST,
  SET_USER_LIST,
} from "./actionsTypes";

export const setLast = (last: MovieType | null) => ({
  type: SET_LAST,
  payload: last,
});

export const setCurrent = (current: MovieType | null) => ({
  type: SET_CURRENT,
  payload: current,
});

export const setQueryGenre = (queryGenre: string) => ({
  type: SET_QUERY_GENRE,
  payload: queryGenre,
});

export const setMovies = (movies: MovieType[]) => ({
  type: SET_MOVIES,
  payload: movies,
});

export const setUserList = (userList: MovieType[]) => ({
  type: SET_USER_LIST,
  payload: userList,
});

export const setShowList = (showList: boolean) => ({
  type: SET_SHOW_LIST,
  payload: showList,
});

export const setIdBox = (idBox: Set<string>) => ({
  type: SET_ID_BOX,
  payload: idBox,
});
