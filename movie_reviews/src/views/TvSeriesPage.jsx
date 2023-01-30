import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import ahs from "../assets/ahs2.jpg";
import bg5 from "../assets/bg5.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import movies from "../utils/MoviesList";
import { useRef } from "react";

export default function TvSeriesPage() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [cursor, setCursor] = useState(null);

  const scrollbox = useRef();
  const scrollCircle = useRef();
  const content = useRef();

  const handleClick = (event) => {
    event.stopPropagation();
    navigate(`/tvseries/${id}`);
  };

  const handleScroll = () => {
    content.current.style.top = "-" + scrollbox.current.scrollTop + "px";
    scrollCircle.current.style.paddingTop =
      scrollbox.current.scrollTop * 2 + "px";
  };

  const handleScrollDown = () => {
    scrollbox.current.scrollTop = scrollbox.current.scrollTop + 500;
  };

  const handleScrollUp = () => {
    scrollbox.current.scrollTop = scrollbox.current.scrollTop - 500;
  };

  return (
    <>
      <div
        className="bg-photo"
        style={{ backgroundImage: `url(${ahs})` }}
      ></div>
      <div className="bg-black" style={{ backgroundImage: `url(${bg5})` }}>
        {pathname === "/tvseries" ? (
          <>
            <h1 className="horror-title header-title" title="seriale">
              seriale
            </h1>
            <button
              style={{ position: "absolute", top: 0, right: 0 }}
              onClick={handleScrollUp}
            >
              scroll up
            </button>
            <div className="series">
              <div id="visible-scrollbox">
                <div id="content" ref={content}>
                  <div id="scroll-circle" ref={scrollCircle}></div>
                  {movies.map((movie) => {
                    return (
                      <div
                        key={movie.id}
                        className="series-img-container"
                        style={{ pointerEvents: "all" }}
                      >
                        <img
                          onClick={handleClick}
                          src={movie.src}
                          id={movie.id}
                          className="series-img"
                        />
                        <br />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div id="control-scrollbox" ref={scrollbox} onScroll={handleScroll}>
              <div id="scroll-length"></div>
            </div>
            <button
              style={{ position: "absolute", bottom: 0, right: 0 }}
              onClick={handleScrollDown}
            >
              scroll down
            </button>
          </>
        ) : null}
        <div className="circle"></div>
      </div>
      <Nav />
    </>
  );
}
