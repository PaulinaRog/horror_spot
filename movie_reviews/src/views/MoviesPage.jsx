import React from "react";
import Nav from "../components/Nav";
import Movies from "../components/Movies";
import { useState } from "react";
import mainPhoto from "../assets/main.jpg";
import { useParams, useLocation } from "react-router-dom";
import movies from "../utils/MoviesList";

export default function Index() {
  const [src, setSrc] = useState(mainPhoto);
  const { id } = useParams();
  const { pathname } = useLocation();

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <Nav />
        <Movies setSrc={setSrc} />
        {pathname === "/movies" ? (
          <>
            <div
              className="index"
              style={{ backgroundImage: `url(${mainPhoto})` }}
            ></div>

            <div className="index-main">
              <span
                style={{
                  fontSize: 100,
                  color: "rgb(162, 6, 6)",
                }}
              >
                filmy
              </span>
              <p></p>
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
