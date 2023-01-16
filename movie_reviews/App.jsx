import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./src/views/Index";
import "./styles/main.scss";
import { createRoot } from "react-dom/client";
import MoviesPage from "./src/views/MoviesPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="movies" element={<MoviesPage />}>
            <Route path=":id" element={<MoviesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
