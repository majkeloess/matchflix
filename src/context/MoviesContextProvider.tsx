import React, { useState } from "react";
import { MoviesContext } from "./MoviesContext";
import { MovieType } from "../constants/types";

function MoviesContextProvider({ children }: { children: React.ReactNode }) {
  const [last, setLast] = useState<string | null>(null);
  const [queryGenre, setQueryGenre] = useState<string>("all");
  const [userList, setUserList] = useState<MovieType[]>([]);
  const [current, setCurrent] = useState<number>(0);

  return (
    <MoviesContext.Provider
      value={{
        last,
        setLast,
        queryGenre,
        setQueryGenre,
        userList,
        setUserList,
        current,
        setCurrent,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export default MoviesContextProvider;
