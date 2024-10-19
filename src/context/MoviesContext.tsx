import { createContext } from "react";
import { MoviesContextType } from "../constants/types";

export const MoviesContext = createContext<MoviesContextType | null>(null);
