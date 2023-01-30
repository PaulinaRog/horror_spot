import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import ahs from "../assets/ahs2.jpg";
import bg5 from "../assets/bg5.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import movies from "../utils/MoviesList";
import { useRef } from "react";
import Series from "../components/Series";

export default function TvSeriesPage() {
  const { pathname } = useLocation();
  const { id } = useParams();

  return (
    <>
      <div
        className="bg-photo"
        style={{ backgroundImage: `url(${ahs})` }}
      ></div>
      <div className="bg-black" style={{ backgroundImage: `url(${bg5})` }}>
        <Series />
        {pathname === "/tvseries" ? (
          <>
            <h1 className="horror-title header-title" title="seriale">
              seriale
            </h1>
          </>
        ) : null}
        {pathname.includes(`/tvseries/${id}`) ? (
          <>
            <div className="series-menu-container">
              <h2 className="series-title">{movies[id].title}</h2>
              <div className="series-menu-container-buttons">
                <button className="series-menu-container-button">review</button>
                <button className="series-menu-container-button">
                  details
                </button>
                <button className="series-menu-container-button">
                  trailer
                </button>
              </div>
            </div>
            <div className="circle">
              <div className="series-review">
                {" "}
                <p className="series-text">{movies[id].text}</p>
              </div>
            </div>
          </>
        ) : null}
      </div>
      <Nav />
    </>
  );
}
