import React from "react";
import Nav from "../components/Nav";
import ahs from "../assets/ahs2.jpg";
import bg5 from "../assets/bg5.png";

export default function TvSeriesPage() {
  return (
    <>
      <div
        className="bg-photo"
        style={{ backgroundImage: `url(${ahs})` }}
      ></div>
      <div
        className="bg-black"
        style={{ backgroundImage: `url(${bg5})` }}
      ></div>
      <Nav />
      <h1 className="horror-title header-title" title="seriale">
        seriale
      </h1>
    </>
  );
}
