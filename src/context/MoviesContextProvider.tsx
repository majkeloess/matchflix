import React, { useState } from "react";
import { MoviesContext } from "./MoviesContext";
import { Genre, MovieType } from "../constants/types";

function MoviesContextProvider({ children }: { children: React.ReactNode }) {
  const [last, setLast] = useState<string | null>(null);
  const [queryGenre, setQueryGenre] = useState<Genre | "all">("all");
  const [userList, setUserList] = useState<MovieType[]>([]);

  return (
    <MoviesContext.Provider
      value={{
        last,
        setLast,
        queryGenre,
        setQueryGenre,
        userList,
        setUserList,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export default MoviesContextProvider;
