import React, { useState } from "react";
import { useRef } from "react";

export default function MovieCard({ description }) {
  const [front, setFront] = useState(null);
  const [details, setDetails] = useState({ transform: "rotateY(180deg)" });
  const [trailer, setTrailer] = useState({ transform: "rotateY(180deg)" });
  const [display, setDisplay] = useState({ display: "none" });

  const scrollRef = useRef();
  console.log(scrollRef);

  const handleDetails = () => {
    setFront({ transform: "rotateY(180deg)" });
    setDetails({ transform: "rotateY(0deg)" });
    setTrailer({ transform: "rotateY(180deg)" });
    setDisplay({ display: "none" });
  };

  const handleReview = () => {
    setFront({ transform: "rotateY(0deg)" });
    setDetails({ transform: "rotateY(180deg)" });
    setTrailer({ transform: "rotateY(180deg)" });
    setDisplay({ display: "none" });
  };

  const handleTrailer = () => {
    setFront({ transform: "rotateY(180deg)" });
    setTrailer({ transform: "rotateY(0deg)" });
    setDetails({ transform: "rotateY(180deg)" });
    setDisplay({ display: "block" });
  };

  const handleScrollDown = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollTop + 300;
  };

  const handleScrollUp = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollTop - 300;
  };

  return (
    <>
      <div className="card">
        <main
          className="card-front card-side"
          style={front && front}
          ref={scrollRef}
        >
          <p>{description}</p>
        </main>
        <div className="card-back card-side" style={details && details}>
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
        <div className="card-back card-side" style={trailer && trailer}>
          <div style={display}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rgrWXTz_8eU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; web-share"
              allowfullscreen="true"
            ></iframe>
          </div>
        </div>
        <button className="movies-details-btn" onClick={handleDetails}>
          szczegóły
        </button>
        <button
          className="movies-details-btn"
          onClick={handleReview}
          style={{ top: "40%" }}
        >
          recenzja
        </button>
        <button
          className="movies-details-btn"
          onClick={handleTrailer}
          style={{ top: "60%" }}
        >
          zwiastun
        </button>
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
