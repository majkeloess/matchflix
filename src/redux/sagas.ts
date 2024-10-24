import createSagaMiddleware from "redux-saga";
import { FetchMoviesRequest, MovieType } from "../constants/types";
import { fetchMovies } from "../utils/fetch";
import { call, put, takeEvery } from "redux-saga/effects";
import { setCurrent, setMovies } from "./actions";
import { FETCH_MOVIES_REQUEST } from "./actionsTypes";

function* fetchMoviesSaga(action: FetchMoviesRequest) {
  try {
    const movies: MovieType[] = yield call(fetchMovies, action.payload);
    yield put(setMovies(movies));
    yield put(setCurrent(movies[0]));
  } catch (error) {
    console.log("Error with fetching movies", error);
  }
}

export function* watchFetchMovies() {
  yield takeEvery(FETCH_MOVIES_REQUEST, fetchMoviesSaga);
}

export function* rootSaga() {
  yield watchFetchMovies();
}

export const sagaMiddleware = createSagaMiddleware();
