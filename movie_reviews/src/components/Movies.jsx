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

  const handleScrollDown = (e) => {
    e.preventDefault();
    scrollRef.current.scrollTop = scrollRef.current.scrollTop + 500;
  };

  const handleScrollUp = (e) => {
    e.preventDefault();
    scrollRef.current.scrollTop = scrollRef.current.scrollTop - 500;
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
      <div className="movies-btn-top">
        <button className="movies-nav" onClick={handleScrollUp}>
          <i className="fa-solid fa-angle-up"></i>
        </button>
      </div>
      <div className="movies-btn">
        <button className="movies-nav" onClick={handleScrollDown}>
          <i className="fa-solid fa-angle-down"></i>
        </button>
      </div>
    </>
  );
}
