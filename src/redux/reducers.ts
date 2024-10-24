import { MovieActions, MoviesState } from "../constants/types";
import {
  SET_CURRENT,
  SET_ID_BOX,
  SET_LAST,
  SET_MOVIES,
  SET_QUERY_GENRE,
  SET_SHOW_LIST,
  SET_USER_LIST,
} from "./actionsTypes";
import { initialState } from "./initialState";

export const movieReducer = (
  state = initialState,
  action: MovieActions
): MoviesState => {
  if (action.type == SET_LAST) {
    return {
      ...state,
      last: action.payload,
    };
  }

  if (action.type == SET_CURRENT) {
    return {
      ...state,
      current: action.payload,
    };
  }

  if (action.type == SET_QUERY_GENRE) {
    return {
      ...state,
      queryGenre: action.payload,
    };
  }

  if (action.type == SET_MOVIES) {
    return {
      ...state,
      movies: action.payload,
    };
  }

  if (action.type == SET_USER_LIST) {
    return {
      ...state,
      userList: action.payload,
    };
  }

  if (action.type == SET_SHOW_LIST) {
    return {
      ...state,
      showList: action.payload,
    };
  }

  if (action.type == SET_ID_BOX) {
    return {
      ...state,
      idBox: action.payload,
    };
  }

  return state;
};
