import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router";
import "./styles/index.css";
import MoviesContextProvider from "./context/MoviesContextProvider";
import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <MoviesContextProvider>
        <RouterProvider router={router} />
      </MoviesContextProvider>
    </Provider>
  </StrictMode>
);
