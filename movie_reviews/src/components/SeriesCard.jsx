import React from "react";
import movies from "../utils/MoviesList";
import { useState, useRef } from "react";
import { useEffect } from "react";
import supabase from "../services/SupabaseClient";

export default function SeriesCard({ id }) {
  const [front, setFront] = useState(null);
  const [details, setDetails] = useState({ transform: "rotateY(180deg)" });
  const [trailer, setTrailer] = useState({ transform: "rotateY(180deg)" });
  const [display, setDisplay] = useState({ display: "none" });

  const scrollRef = useRef();

  const [series, setSeries] = useState(null);

  useEffect(() => {
    const getSeries = async () => {
      const { data, error } = await supabase
        .from("tvseries")
        .select(
          "id, src, title, description, copyright, category, productionYear, productionCountry, trailer, reviewAuthor, creators, seasons"
        )
        .eq("id", id)
        .single();
      if (error) {
        console.log(error);
      }
      if (data) {
        console.log(data);
        setSeries(data);
      }
    };
    getSeries();
  }, []);

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

  function createMarkup() {
    return { __html: series && series.trailer };
  }

  function createMarkup2() {
    return { __html: series && series.description };
  }

  return (
    <>
      <div className="series-menu-container">
        <h2 className="series-title">{series && series.title}</h2>
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
          <div
            dangerouslySetInnerHTML={createMarkup2()}
            style={{ padding: "1em" }}
          ></div>
          <p style={{ float: "right", marginBottom: 40, marginRight: "1em" }}>
            {series && series.reviewAuthor}
          </p>
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
              width: "90%",
            }}
            className="series-details"
          >
            <h3>Kategoria:</h3>
            <p>{series && series.category}</p>
            <h3>Twórcy:</h3>
            <p>{series && series.creators}</p>
            <h3>Data premiery:</h3>
            <p>{series && series.productionYear}</p>
            <h3>Kraj produkcji:</h3>
            <p>{series && series.productionCountry}</p>
            <h3>Sezony:</h3>
            <p>{series && series.seasons}</p>
          </div>
        </div>
        <div
          className="series-card-back series-card-side"
          style={trailer && trailer}
        >
          <div style={display} className="series-vid">
            <figure dangerouslySetInnerHTML={createMarkup()}></figure>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "7%",
          left: "55%",
          transform: "translateX(-50%)",
          width: 400,
          zIndex: 7,
          display: "flex",
          gap: 60,
        }}
      >
        <button className="series-scroll-review" onClick={handleScrollUp}>
          <i className="fa-solid fa-angle-up"></i>
        </button>
        <button className="series-scroll-review" onClick={handleScrollDown}>
          <i className="fa-solid fa-angle-down"></i>
        </button>
      </div>
    </>
  );
}
