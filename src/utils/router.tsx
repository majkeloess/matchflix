import { createHashRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MoviesPage from "../pages/MoviesPage";
import ListPage from "../pages/ListPage";
import ErrorPage from "../pages/ErrorPage";
export const router = createHashRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/movies",
    element: <MoviesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/list",
    element: <ListPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
