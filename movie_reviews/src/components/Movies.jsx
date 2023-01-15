import React, { useEffect, useState } from "react";
import { useRef } from "react";
import movies from "../utils/MoviesList";

export default function Movies({
  setSrc,
  setStyle,
  setTitle,
  setText,
  setMain,
}) {
  const scrollRef = useRef();

  const handleClick = (e) => {
    setSrc(e.target.src);
    setStyle({ display: "flex" });
    setTitle(e.target.title);
    setText(e.target.alt);
    setMain({ display: "none" });
  };

  const handleScroll = () => {
    console.log(scrollRef);
    scrollRef.current.scrollTop = 500;
  };

  return (
    <>
      <div className="movies" ref={scrollRef}>
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="movies-container">
              <img
                className="movies-poster"
                src={movie.src}
                onClick={handleClick}
                title={movie.title}
                alt={movie.text}
                id={movie.id}
              />
            </div>
          );
        })}
      </div>
      <button className="movies-nav" onClick={handleScroll}>
        <i className="fa-solid fa-angle-down"></i>
      </button>
    </>
  );
}
