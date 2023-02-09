import React, { useState } from "react";
import Nav from "../components/Nav";
import mortuary from "../assets/mortuaryAssistant.png";
import bg10 from "../assets/bg10.png";
import Games from "../components/Games";
import { useLocation, useParams } from "react-router-dom";
import GameCard from "../components/GameCard";

export default function GamesPage() {
  const { pathname } = useLocation();
  const { id } = useParams();

  const [category, setCategory] = useState(null);

  const handleClick = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <div
        className="bg-photo"
        style={{
          backgroundImage: `url(${mortuary})`,
          left: "-40%",
        }}
      ></div>
      <div
        className="bg-black"
        style={{ backgroundImage: `url(${bg10})` }}
      ></div>

      {pathname === "/games" ? (
        <>
          <h1 className="horror-title header-title-games" title="gry">
            gry
          </h1>
          <div className="games-buttons">
            <button
              className="games-button"
              value="survival"
              onClick={handleClick}
            >
              survival
            </button>
            <button
              className="games-button"
              value="przygodowe"
              onClick={handleClick}
            >
              przygodowe
            </button>
            <button
              className="games-button"
              value="akcja"
              onClick={handleClick}
            >
              akcja
            </button>
            <button className="games-button" value={null} onClick={handleClick}>
              wszystkie
            </button>
          </div>
        </>
      ) : null}
      <Games category={category} />
      {pathname.includes(`/games/${id}`) ? <GameCard id={id} /> : null}
      <Nav />
    </>
  );
}
