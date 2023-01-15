import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./src/views/Index";
import "./styles/main.scss";
import { createRoot } from "react-dom/client";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
