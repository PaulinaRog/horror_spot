import React from "react";
import movies from "../utils/MoviesList";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Series() {
  const scrollbox = useRef();
  const scrollCircle = useRef();
  const content = useRef();

  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/tvseries/${e.target.id}`);
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
      <button
        style={{ position: "absolute", top: 10, right: 20 }}
        className="series-scroll-button"
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
        style={{ position: "absolute", bottom: 10, right: 20 }}
        className="series-scroll-button"
        onClick={handleScrollDown}
      >
        scroll down
      </button>
    </>
  );
}
