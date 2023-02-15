import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import movies from "../utils/MoviesList";
import { useState } from "react";
import { useEffect } from "react";
import supabase from "../services/SupabaseClient";

export default function GameCard({ id }) {
  const [front, setFront] = useState(null);
  const [details, setDetails] = useState({ transform: "rotateY(180deg)" });
  const [trailer, setTrailer] = useState({ transform: "rotateY(180deg)" });
  const [display, setDisplay] = useState({ display: "none" });
  const [game, setGame] = useState(null);

  const scrollRef = useRef();

  useEffect(() => {
    const getGame = async () => {
      const { data, error } = await supabase
        .from("games")
        .select(
          "title, description, category, platform, producer, publisher, polishVersion, year, trailer, reviewAuthor"
        )
        .eq("id", id)
        .single();
      if (error) {
        console.log(error);
      }
      if (data) {
        setGame(data);
      }
    };
    getGame();
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
    return { __html: game && game.trailer };
  }

  function createMarkup2() {
    return { __html: game && game.description };
  }

  return (
    <>
      <h2 className="games-title">{game && game.title}</h2>
      <div className="games-card">
        <div
          className="games-review games-card-front games-card-side"
          ref={scrollRef}
          style={front && front}
        >
          <div
            dangerouslySetInnerHTML={createMarkup2()}
            style={{ padding: "1em" }}
          ></div>
          <p
            style={{
              float: "right",
              marginTop: 40,
              marginBottom: 40,
              marginRight: "1em",
            }}
          >
            {game && game.reviewAuthor}
          </p>
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
            <p>{game && game.category}</p>
            <h3>Platforma:</h3>
            <p>{game && game.platform}</p>
            <h3>Producent:</h3>
            <p>{game && game.producer}</p>
            <h3>Wydawca:</h3>
            <p>{game && game.publisher}</p>
            <h3>Rok wydania:</h3>
            <p>{game && game.year}</p>
            <h3>Wersja polska:</h3>
            <p>{game && game.polishVersion}</p>
          </div>
        </div>
        <div
          className="games-card-back games-card-side"
          style={trailer && trailer}
        >
          <div style={display} className="series-vid">
            <figure dangerouslySetInnerHTML={createMarkup()}></figure>
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
