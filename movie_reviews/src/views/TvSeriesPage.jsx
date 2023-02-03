import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import ahs from "../assets/ahs2.jpg";
import bg5 from "../assets/bg5.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import movies from "../utils/MoviesList";
import { useRef } from "react";
import Series from "../components/Series";
import MovieCategories from "../components/MovieCategories";
import SeriesCard from "../components/SeriesCard";

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
            <h1 className="horror-title header-title-series" title="seriale">
              seriale
            </h1>
            <MovieCategories />
          </>
        ) : null}
        {pathname.includes(`/tvseries/${id}`) ? (
          <>
            <SeriesCard id={id} />
          </>
        ) : null}
      </div>
      <Nav />
    </>
  );
}
