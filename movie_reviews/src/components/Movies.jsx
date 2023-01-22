import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import movies from "../utils/MoviesList";

export default function Movies({}) {
  const scrollRef = useRef();
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleClick = (e) => {
    navigate(e.target.id);
  };

  const handleScrollDown = (e) => {
    console.log(scrollRef.current.scrollTop);
    e.preventDefault();
    setScrollPosition(scrollRef.current.scrollTop + 500);
    scrollRef.current.scrollTop = scrollPosition + 500;
  };

  const handleScrollUp = (e) => {
    console.log(scrollRef.current.scrollTop);
    e.preventDefault();
    setScrollPosition(scrollRef.current.scrollTop - 500);
    scrollRef.current.scrollTop = scrollPosition - 500;
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
        <div className="drip"></div>
        <div className="drip-1"></div>
        <div className="drip-2"></div>
        <div className="drip-3"></div>
      </div>
      <div className="movies-btn">
        <button className="movies-nav" onClick={handleScrollDown}>
          <i className="fa-solid fa-angle-down"></i>
        </button>
        <div className="drip"></div>
        <div className="drip-1"></div>
        <div className="drip-2"></div>
        <div className="drip-3"></div>
      </div>
    </>
  );
}
