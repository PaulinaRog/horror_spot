import React from "react";
import Nav from "../components/Nav";
import Movies from "../components/Movies";
import { useState } from "react";
import mainPhoto from "../assets/it.webp";
import { useParams, useLocation } from "react-router-dom";
import movies from "../utils/MoviesList";

export default function Index() {
  const { id } = useParams();
  const { pathname } = useLocation();

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <Nav />
        <Movies />
        {pathname === "/movies" ? (
          <>
            <h1 className="horror-title header-title" title="filmy">
              filmy
            </h1>
            <div
              className="index"
              style={{ backgroundImage: `url(${mainPhoto})` }}
            ></div>

            <div className="index-main">
              <p style={{ marginTop: 300 }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, doloribus velit inventore corporis cupiditate
                exercitationem saepe quod necessitatibus quo facere maiores
                perspiciatis, debitis nemo molestias. Quis quibusdam nisi
                voluptatibus exercitationem.
              </p>
            </div>
          </>
        ) : null}
        <div className="index-gradient"></div>
        {pathname.includes(`/movies/${id}`) ? (
          <>
            {" "}
            <div
              className="index"
              style={{ backgroundImage: `url(${movies[id].src})` }}
            ></div>
            <main className="index-review">
              <h1 style={{ paddingBottom: "1em" }}>{movies[id].title}</h1>
              <p>{movies[id].text}</p>
            </main>
          </>
        ) : null}
      </div>
    </>
  );
}
