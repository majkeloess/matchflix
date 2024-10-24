import { applyMiddleware, createStore } from "redux";
import { movieReducer } from "./reducers";
import { rootSaga, sagaMiddleware } from "./sagas";

const store = createStore(movieReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
