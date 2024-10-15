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
    <BrowserRouter>
      <Routes>
        <Route path="/matchflix" element={<HomePage />} />
        <Route path="/matchflix/movies" element={<MoviesPage />} />
        <Route path="/matchflix/list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
