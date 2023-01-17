import React from "react";
import Nav from "../components/Nav";

export default function GamesPage() {
  return (
    <>
      <div
        className="bg-photo"
        style={{
          backgroundImage: "url(../src/assets/mortuaryAssistant.png)",
          left: "-40%",
        }}
      ></div>
      <div
        className="bg-black"
        style={{ backgroundImage: "url(../src/assets/bg10.png)" }}
      ></div>
      <Nav />
      <h1 className="horror-title header-title" title="gry">
        gry
      </h1>
    </>
  );
}
