import React from "react";
import movies from "../utils/MoviesList";
import { useState, useRef } from "react";

export default function SeriesCard({ id }) {
  const [front, setFront] = useState(null);
  const [details, setDetails] = useState({ transform: "rotateX(180deg)" });
  const [trailer, setTrailer] = useState({ transform: "rotateX(180deg)" });
  const [display, setDisplay] = useState({ display: "none" });

  const scrollRef = useRef();

  const handleDetails = () => {
    setFront({ transform: "rotateX(180deg)" });
    setDetails({ transform: "rotateX(0deg)" });
    setTrailer({ transform: "rotateX(180deg)" });
    setDisplay({ display: "none" });
  };

  const handleReview = () => {
    setFront({ transform: "rotateX(0deg)" });
    setDetails({ transform: "rotateX(180deg)" });
    setTrailer({ transform: "rotateX(180deg)" });
    setDisplay({ display: "none" });
  };

  const handleTrailer = () => {
    setFront({ transform: "rotateX(180deg)" });
    setTrailer({ transform: "rotateX(0deg)" });
    setDetails({ transform: "rotateX(180deg)" });
    setTimeout(() => {
      setDisplay({ display: "block" });
      clearTimeout();
    }, 200);
  };

  const handleScrollDown = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollTop + 300;
  };

  const handleScrollUp = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollTop - 300;
  };

  return (
    <>
      <div className="series-menu-container">
        <h2 className="series-title">{movies[id].title}</h2>
        <div className="series-menu-container-buttons">
          <button
            className="series-menu-container-button"
            onClick={handleReview}
          >
            recenzja
          </button>
          <button
            className="series-menu-container-button"
            onClick={handleDetails}
          >
            szczegóły
          </button>
          <button
            className="series-menu-container-button"
            onClick={handleTrailer}
          >
            zwiastun
          </button>
        </div>
      </div>
      <div className="circle series-card">
        <div
          className="series-review series-card-front series-card-side"
          ref={scrollRef}
          style={front && front}
        >
          <p className="series-text">{movies[id].text}</p>
        </div>
        <div
          className="series-card-back series-card-side"
          style={details && details}
        >
          <div
            style={{
              position: "relative",
              top: "7%",
              left: "5%",
            }}
            className="series-details"
          >
            <h3>Kategoria:</h3>
            <p>lorem ipsum</p>
            <h3>Reżyser:</h3>
            <p>Lorem, ipsum.</p>
            <h3>Scenariusz:</h3>
            <p>Lorem, ipsum dolor.</p>
            <h3>Data premiery:</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <h3>Kraj produkcji:</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div
          className="series-card-back series-card-side"
          style={trailer && trailer}
        >
          <div style={display} className="series-vid">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rgrWXTz_8eU"
              title="YouTube video player"
              allow="accelerometer; web-share"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "52%",
          transform: "translateX(-50%)",
          width: 400,
          zIndex: 7,
        }}
      >
        <button
          className="movies-scroll-review"
          onClick={handleScrollDown}
          style={{ left: "45%" }}
        >
          <i className="fa-solid fa-angle-down"></i>
        </button>
        <button className="movies-scroll-review" onClick={handleScrollUp}>
          <i className="fa-solid fa-angle-up"></i>
        </button>
      </div>
    </>
  );
}
