import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import ListPage from "../pages/ListPage";

export const router = createBrowserRouter([
  {
    path: "/matchflix/",
    element: <HomePage />,
    children: [],
  },
  {
    path: "/matchflix/movies",
    element: <MoviesPage />,
  },
  {
    path: "/matchflix/list",
    element: <ListPage />,
  },
]);
