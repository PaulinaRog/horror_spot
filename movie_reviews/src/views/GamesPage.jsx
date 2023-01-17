import React from "react";
import Nav from "../components/Nav";
import mortuary from "../assets/mortuaryAssistant.png";
import bg10 from "../assets/bg10.png";

export default function GamesPage() {
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
      <h1 className="horror-title header-title" title="gry">
        gry
      </h1>
    </>
  );
}
