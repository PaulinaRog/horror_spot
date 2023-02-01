import React from "react";
import { useParams } from "react-router-dom";
import movies from "../utils/MoviesList";

export default function GameCard() {
  const { id } = useParams();

  return (
    <>
      <h2 className="games-title">{movies[id].title}</h2>
      <div className="games-card">
        <p>{movies[id].text}</p>
      </div>
    </>
  );
}
