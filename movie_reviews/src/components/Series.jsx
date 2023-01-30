import React from "react";
import movies from "../utils/MoviesList";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Series() {
  const scrollbox = useRef();
  const scrollCircle = useRef();
  const content = useRef();

  const handleScroll = () => {
    content.current.style.top = "-" + scrollbox.current.scrollTop + "px";
    scrollCircle.current.style.paddingTop =
      scrollbox.current.scrollTop * 2 + "px";
  };

  const { id } = useParams();
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate(`/tvseries/${id}`);
  };

  return (
    <>
      <div className="series">
        <div id="visible-scrollbox">
          <div id="content" ref={content}>
            <div id="scroll-circle" ref={scrollCircle}></div>
            {movies.map((movie) => {
              return (
                <div key={movie.id} className="series-img-container">
                  <img
                    src={movie.src}
                    className="series-img"
                    onClick={handleNavigate}
                  />
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div id="control-scrollbox" onScroll={handleScroll} ref={scrollbox}>
        <div id="scroll-length"></div>
      </div>
    </>
  );
}
