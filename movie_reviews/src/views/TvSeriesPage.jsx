import React from "react";
import Nav from "../components/Nav";

export default function TvSeriesPage() {
  return (
    <>
      <div
        className="bg-photo"
        style={{ backgroundImage: "url(../src/assets/ahs2.jpg)" }}
      ></div>
      <div
        className="bg-black"
        style={{ backgroundImage: "url(../src/assets/bg5.png)" }}
      ></div>
      <Nav />
      <h1 className="horror-title header-title" title="seriale">
        seriale
      </h1>
    </>
  );
}
