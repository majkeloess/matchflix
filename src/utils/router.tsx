import { createHashRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MoviesPage from "../pages/MoviesPage";
import ErrorPage from "../pages/ErrorPage";
export const router = createHashRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/movies",
    element: <MoviesPage />,
    children: [],
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
