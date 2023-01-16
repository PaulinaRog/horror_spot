import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="nav">
        <NavLink to="/">
          <p
            style={{
              fontSize: 35,
              color: "rgb(162, 6, 6)",
              marginTop: "1em",
              height: "5vw",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            v83
          </p>
        </NavLink>
        <NavLink to="/movies">
          <button className="nav-button">
            <i className="fa-solid fa-clapperboard nav-icon"></i>
          </button>
        </NavLink>
        <NavLink to="/tvseries">
          <button className="nav-button">
            <i className="fa-solid fa-tv nav-icon"></i>
          </button>
        </NavLink>
        <NavLink to="/games">
          <button className="nav-button">
            <i className="fa-solid fa-gamepad nav-icon"></i>
          </button>
        </NavLink>
        <NavLink to="/books">
          <button className="nav-button">
            <i className="fa-solid fa-book nav-icon"></i>
          </button>
        </NavLink>
        <NavLink to="/news">
          <button className="nav-button">
            <i className="fa-regular fa-newspaper nav-icon"></i>
          </button>
        </NavLink>
      </div>
    </>
  );
}
