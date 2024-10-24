import { MoviesState } from "../constants/types";

export const initialState: MoviesState = {
  last: null,
  queryGenre: "all",
  userList: [],
  movies: [],
  showList: false,
  current: null,
  idBox: new Set<string>(),
};
