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
            hs
          </p>
        </NavLink>
        <NavLink to="/movies" style={{ position: "relative" }}>
          <button className="nav-button">
            <i className="fa-solid fa-clapperboard nav-icon"></i>
          </button>
          <div className="drip"></div>
          <div className="drip-1"></div>
          <div className="drip-2"></div>
          <div className="drip-3"></div>
        </NavLink>
        <NavLink to="/tvseries" style={{ position: "relative" }}>
          <button className="nav-button">
            <i className="fa-solid fa-tv nav-icon"></i>
          </button>
          <div className="drip"></div>
          <div className="drip-1"></div>
          <div className="drip-2"></div>
          <div className="drip-3"></div>
        </NavLink>
        <NavLink to="/games" style={{ position: "relative" }}>
          <button className="nav-button">
            <i className="fa-solid fa-gamepad nav-icon"></i>
          </button>
          <div className="drip"></div>
          <div className="drip-1"></div>
          <div className="drip-2"></div>
          <div className="drip-3"></div>
        </NavLink>
        <NavLink to="/books" style={{ position: "relative" }}>
          <button className="nav-button">
            <i className="fa-solid fa-book nav-icon"></i>
          </button>
          <div className="drip"></div>
          <div className="drip-1"></div>
          <div className="drip-2"></div>
          <div className="drip-3"></div>
        </NavLink>
        <NavLink to="/news" style={{ position: "relative" }}>
          <button className="nav-button">
            <i className="fa-regular fa-newspaper nav-icon"></i>
          </button>
          <div className="drip"></div>
          <div className="drip-1"></div>
          <div className="drip-2"></div>
          <div className="drip-3"></div>
        </NavLink>
        <NavLink to="/aboutus" style={{ position: "relative" }}>
          <button className="nav-button">
            <i className="fa-solid fa-skull"></i>
          </button>
          <div className="drip"></div>
          <div className="drip-1"></div>
          <div className="drip-2"></div>
          <div className="drip-3"></div>
        </NavLink>
        <NavLink to="/contact" style={{ position: "relative" }}>
          <button className="nav-button">
            <i class="fa-regular fa-envelope-open"></i>
          </button>
          <div className="drip"></div>
          <div className="drip-1"></div>
          <div className="drip-2"></div>
          <div className="drip-3"></div>
        </NavLink>
      </div>
    </>
  );
}
