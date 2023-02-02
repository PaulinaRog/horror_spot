import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import movies from "../utils/MoviesList";

export default function Games() {
  const scrollRef = useRef();

  const handleScrollLeft = () => {
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - 700;
  };

  const handleScrollRight = () => {
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + 700;
  };

  return (
    <>
      <button className="games-scroll" onClick={handleScrollLeft}>
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <div className="games" ref={scrollRef}>
        {movies.map((movie) => {
          return (
            <SingleGame
              key={movie.id}
              id={movie.id}
              src={movie.src}
              title={movie.title}
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

function SingleGame({ id, title, src }) {
  const navigate = useNavigate();

  const [style, setStyle] = useState({ display: "none" });
  const [img, setImg] = useState(null);

  const handleNavigate = (e) => {
    navigate(e.target.id);
  };

  const handleMouseOver = () => {
    setStyle({ display: "block" });
    setImg({
      width: 270,
      height: 170,
      marginTop: 0,
      marginLeft: 3,
      marginRight: 2,
    });
  };

  const handleMouseLeave = () => {
    setStyle({ display: "none" });
    setImg({
      width: 250,
      height: 150,
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
    });
  };

  return (
    <>
      <div style={{ width: 250, height: 150, position: "relative" }}>
        <img
          src={src}
          id={id}
          className="games-img"
          onMouseOver={() => setStyle({ display: "block" })}
          onMouseLeave={() => setStyle({ display: "none" })}
          style={img && img}
        />
        <div
          id={id}
          onClick={handleNavigate}
          className="games-box"
          style={style}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <p style={style} className="games-box-title" id={id}>
            {title}
          </p>
        </div>
      </div>
    </>
  );
}
