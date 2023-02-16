import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import supabase from "../services/SupabaseClient";

export default function MovieCard({ description, id }) {
  const [front, setFront] = useState(null);
  const [details, setDetails] = useState({ transform: "rotateY(180deg)" });
  const [trailer, setTrailer] = useState({ transform: "rotateY(180deg)" });
  const [display, setDisplay] = useState({ display: "none" });
  const [movies, setMovies] = useState(null);

  const scrollRef = useRef();

  useEffect(() => {
    const getMovie = async () => {
      const { data, error } = await supabase
        .from("movies")
        .select(
          "id, category, director, scenario, productionYear, productionCountry, trailer, reviewAuthor"
        )
        .eq("id", id)
        .single();
      if (error) {
        console.log(error);
      }
      if (data) {
        setMovies(data);
      }
    };
    getMovie();
  }, [id]);

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

  function createMarkup() {
    return { __html: movies && movies.trailer };
  }

  function createMarkupMovies() {
    return { __html: movies && description };
  }

  return (
    <>
      <div className="card">
        <main
          className="card-front card-side"
          style={front && front}
          ref={scrollRef}
        >
          <div dangerouslySetInnerHTML={createMarkupMovies()}></div>
          <p style={{ marginTop: 40, float: "right" }}>
            {movies && movies.reviewAuthor}
          </p>
        </main>
        <div className="card-back card-side" style={details && details}>
          <h3>Kategoria:</h3>
          <p>
            {movies &&
              (movies.category === "foundFootage"
                ? "found footage"
                : movies.category)}
          </p>
          <h3>Reżyser:</h3>
          <p>{movies && movies.director}</p>
          <h3>Scenariusz:</h3>
          <p>{movies && movies.scenario}</p>
          <h3>Data premiery:</h3>
          <p>{movies && movies.productionYear}</p>
          <h3>Kraj produkcji:</h3>
          <p>{movies && movies.productionCountry}</p>
        </div>
        <div className="card-back card-side" style={trailer && trailer}>
          <div style={display} className="series-vid">
            <figure dangerouslySetInnerHTML={createMarkup()}></figure>
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
        <button
          className="movies-scroll-review"
          style={{ left: "32%" }}
          onClick={handleScrollUp}
        >
          <i className="fa-solid fa-angle-up"></i>
        </button>
      </div>
    </>
  );
}
