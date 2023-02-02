import React from "react";
import Nav from "../components/Nav";
import Movies from "../components/Movies";
import { useState } from "react";
import mainPhoto from "../assets/it.webp";
import { useParams, useLocation } from "react-router-dom";
import movies from "../utils/MoviesList";
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import MovieCategories from "../components/MovieCategories";

export default function Index() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [width, setWidth] = useState(null);
  const [animation, setAnimation] = useState(null);
  const [copyrights, setCopyrights] = useState({ display: "none" });

  useEffect(() => {
    setAnimation("width 2s ease");
    setWidth("120vw");
  }, []);

  const handleShowCopyrights = () => {
    setCopyrights({ display: "block" });
  };

  const handleHideCopyrights = () => {
    setCopyrights({ display: "none" });
  };

  return (
    <>
      <div
        className="main"
        style={{
          backgroundColor: "black",
        }}
      >
        <Nav />
        <Movies />
        {pathname === "/movies" ? (
          <>
            <h1 className="horror-title header-title" title="filmy">
              filmy
            </h1>
            <div
              className="index"
              style={{
                backgroundImage: `url(${mainPhoto})`,
                animation: animation && animation,
                width: width && width,
              }}
            ></div>
            <MovieCategories />
          </>
        ) : null}
        <div className="index-gradient"></div>
        {pathname.includes(`/movies/${id}`) ? (
          <>
            {" "}
            <h2
              style={{
                position: "absolute",
                top: "33%",
                right: "5%",
                zIndex: 6,
                width: "20%",
                textShadow: "2px 2px 2px black",
                textAlign: "center",
              }}
            >
              {movies[id].title}
            </h2>
            <div
              className="index"
              style={{
                backgroundImage: `url(${movies[id].src})`,
                right: 0,
                filter: "brightness(70%)",
              }}
            ></div>
            <MovieCard description={movies[id].text} />
            <p style={copyrights} className="movies-copyrights">
              Warner Bros Studios
            </p>
            <p
              onMouseEnter={handleShowCopyrights}
              onMouseLeave={handleHideCopyrights}
              style={{
                position: "absolute",
                bottom: 20,
                right: 20,
                color: "white",
                cursor: "pointer",
                zIndex: 7,
              }}
            >
              ©
            </p>
          </>
        ) : null}
      </div>
    </>
  );
}
