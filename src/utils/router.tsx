import { createHashRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import ListPage from "../pages/ListPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [],
  },
  {
    path: "/movies",
    element: <MoviesPage />,
  },
  {
    path: "/list",
    element: <ListPage />,
  },
]);
