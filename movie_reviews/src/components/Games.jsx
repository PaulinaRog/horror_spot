import React from "react";
import movies from "../utils/MoviesList";

export default function Games() {
  return (
    <>
      <div className="games">
        {movies.map((movie) => {
          return <img key={movie.id} src={movie.src} className="games-img" />;
        })}
      </div>
    </>
  );
}
