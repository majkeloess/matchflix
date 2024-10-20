import React, { useState } from "react";
import { MoviesContext } from "./MoviesContext";
import { MovieType } from "../constants/types";

function MoviesContextProvider({ children }: { children: React.ReactNode }) {
  const [last, setLast] = useState<MovieType | null>(null);
  const [current, setCurrent] = useState<MovieType | null>(null);
  const [queryGenre, setQueryGenre] = useState<string>("all");
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [userList, setUserList] = useState<MovieType[]>([]);
  const [showList, setShowList] = useState<boolean>(false);
  const [idBox, setIdBox] = useState(new Set<string>());

  return (
    <MoviesContext.Provider
      value={{
        idBox,
        setIdBox,
        movies,
        setMovies,
        last,
        setLast,
        queryGenre,
        setQueryGenre,
        userList,
        setUserList,
        current,
        setCurrent,
        showList,
        setShowList,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export default MoviesContextProvider;
