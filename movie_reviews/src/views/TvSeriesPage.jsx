import React from "react";
import Nav from "../components/Nav";
import ahs from "../assets/ahs2.jpg";
import bg5 from "../assets/bg5.png";
import { useLocation } from "react-router-dom";
import movies from "../utils/MoviesList";
import { useRef } from "react";

export default function TvSeriesPage() {
  const { pathname } = useLocation();

  const scrollbox = useRef();
  const scrollCircle = useRef();
  const content = useRef();

  const handleScroll = () => {
    content.current.style.top = "-" + scrollbox.current.scrollTop + "px";
    scrollCircle.current.style.paddingTop =
      scrollbox.current.scrollTop * 2 + "px";
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
            {/* <div className="circle"></div> */}
            <div className="series">
              <div id="visible-scrollbox">
                <div id="content" ref={content}>
                  <div id="scroll-circle" ref={scrollCircle}></div>
                  {movies.map((movie) => {
                    return (
                      <div key={movie.id} className="series-img-container">
                        <img src={movie.src} className="series-img" />
                        <br />{" "}
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
        ) : null}
      </div>
      <Nav />
    </>
  );
}
