import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import movies from "../utils/MoviesList";

export default function Movies({}) {
  const scrollRef = useRef();
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(e.target.id);
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
