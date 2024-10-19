import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router";
import "./styles/index.css";
import MoviesContextProvider from "./context/MoviesContextProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MoviesContextProvider>
      <RouterProvider router={router} />
    </MoviesContextProvider>
  </StrictMode>
);
