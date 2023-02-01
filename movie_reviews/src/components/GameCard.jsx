import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import movies from "../utils/MoviesList";
import { useState } from "react";

export default function GameCard() {
  const { id } = useParams();

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
      <h2 className="games-title">{movies[id].title}</h2>
      <div className="games-card">
        <div
          className="games-review games-card-front games-card-side"
          ref={scrollRef}
          style={front && front}
        >
          <p className="games-text">{movies[id].text}</p>
        </div>
        <div
          className="games-card-back games-card-side"
          style={details && details}
        >
          <div
            style={{
              position: "relative",
              top: 0,
              left: "5%",
            }}
            className="games-details"
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
          className="games-card-back games-card-side"
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
      <div className="games-menu-container-buttons">
        <button className="games-menu-container-button" onClick={handleReview}>
          recenzja
        </button>
        <button className="games-menu-container-button" onClick={handleDetails}>
          szczegóły
        </button>
        <button className="games-menu-container-button" onClick={handleTrailer}>
          zwiastun
        </button>
      </div>
      <div className="games-scroll-buttons">
        {" "}
        <button className="games-scroll-button" onClick={handleScrollUp}>
          <i className="fa-solid fa-angle-up"></i>
        </button>
        <button className="games-scroll-button" onClick={handleScrollDown}>
          <i className="fa-solid fa-angle-down"></i>
        </button>
      </div>
    </>
  );
}
