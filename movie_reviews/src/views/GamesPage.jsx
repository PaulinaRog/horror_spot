import React from "react";
import Nav from "../components/Nav";
import mortuary from "../assets/mortuaryAssistant.png";
import bg10 from "../assets/bg10.png";
import Games from "../components/Games";
import { useLocation, useParams } from "react-router-dom";
import GameCard from "../components/GameCard";

export default function GamesPage() {
  const { pathname } = useLocation();
  const { id } = useParams();

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
      <Nav />
      {pathname === "/games" ? (
        <>
          <h1 className="horror-title header-title-games" title="gry">
            gry
          </h1>
          <div className="games-buttons">
            <button className="games-button">Survival</button>
            <button className="games-button">Przygodowe</button>
            <button className="games-button">Akcja</button>
          </div>
        </>
      ) : null}
      <Games />
      {pathname.includes(`/games/${id}`) ? <GameCard /> : null}
    </>
  );
}
