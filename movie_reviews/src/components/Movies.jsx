import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import movies from "../utils/MoviesList";

export default function Movies({}) {
  const scrollRef = useRef();

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
            <SingleMovie id={movie.id} src={movie.src} title={movie.title} />
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

function SingleMovie({ id, src, title }) {
  const navigate = useNavigate();
  const [style, setStyle] = useState({ display: "none" });

  const handleClick = (e) => {
    navigate(e.target.id);
  };

  return (
    <>
      <div key={id} className="movies-container">
        <img
          className="movies-poster"
          onMouseOver={() => setStyle({ display: "block" })}
          onMouseLeave={() => setStyle({ display: "none" })}
          src={src}
          onClick={handleClick}
          id={id}
        />
        <div style={style} id={id} className="tooltip">
          <p>{title}</p>
        </div>
      </div>
    </>
  );
}
