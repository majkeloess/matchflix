import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MoviesPage from "../pages/MoviesPage";
import ListPage from "../pages/ListPage";
import ErrorPage from "../pages/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/matchflix/",
    element: <LandingPage />,
  },
  {
    path: "/matchflix/movies",
    element: <MoviesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/matchflix/list",
    element: <ListPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
