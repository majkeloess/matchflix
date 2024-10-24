import { createStore } from "redux";
import { movieReducer } from "./reducers";

export const store = createStore(movieReducer);
