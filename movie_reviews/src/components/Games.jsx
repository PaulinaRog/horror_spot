import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import movies from "../utils/MoviesList";

export default function Games() {
  const scrollRef = useRef();
  console.log(scrollRef);
  const navigate = useNavigate();

  const handleScrollLeft = () => {
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - 700;
  };

  const handleScrollRight = () => {
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + 700;
  };

  const handleNavigate = (e) => {
    navigate(`/games/${e.target.id}`);
  };

  return (
    <>
      <button className="games-scroll" onClick={handleScrollLeft}>
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <div className="games" ref={scrollRef}>
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              src={movie.src}
              id={movie.id}
              className="games-img"
              onClick={handleNavigate}
            />
          );
        })}
      </div>
      <button
        className="games-scroll"
        style={{ left: "unset", right: "7%" }}
        onClick={handleScrollRight}
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </>
  );
}
