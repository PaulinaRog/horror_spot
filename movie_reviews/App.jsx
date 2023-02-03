import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./src/views/Index";
import "./styles/main.scss";
import { createRoot } from "react-dom/client";
import MoviesPage from "./src/views/MoviesPage";
import TvSeriesPage from "./src/views/TvSeriesPage";
import GamesPage from "./src/views/GamesPage";
import BooksPage from "./src/views/BooksPage";
import News from "./src/views/News";
import AboutUs from "./src/views/AboutUs";
import Contact from "./src/views/Contact";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="movies" element={<MoviesPage />}>
            <Route path=":id" element={<MoviesPage />} />
          </Route>
          <Route path="tvseries" element={<TvSeriesPage />}>
            <Route path=":id" element={<TvSeriesPage />} />
          </Route>
          <Route path="games" element={<GamesPage />}>
            <Route path=":id" element={<GamesPage />} />
          </Route>
          <Route path="books" element={<BooksPage />}>
            <Route path=":id" element={<BooksPage />} />
          </Route>
          <Route path="news" element={<News />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
