import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import MoviesPage from "./pages/MoviesPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {" "}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
