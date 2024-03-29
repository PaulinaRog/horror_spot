import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const width = window.innerWidth;

  return (
    <>
      <div className="nav">
        <NavLink to="/">
          <p
            style={
              width > 960
                ? {
                    fontSize: 35,
                    color: "rgb(162, 6, 6)",
                    marginTop: "1em",
                    height: "5vw",
                    cursor: "pointer",
                    textDecoration: "none",
                  }
                : {
                    fontSize: 25,
                    color: "rgb(162, 6, 6)",
                    marginTop: "1em",
                    height: "5vw",
                    cursor: "pointer",
                    textDecoration: "none",
                  }
            }
          >
            hs
          </p>
        </NavLink>
        <NavLink to="/movies" style={{ position: "relative" }}>
          <button className="nav-button navbtn" data-title="filmy">
            <i className="fa-solid fa-clapperboard nav-icon"></i>
          </button>
          {width > 960 ? (
            <>
              <div className="drip"></div>
              <div className="drip-1"></div>
              <div className="drip-2"></div>
              <div className="drip-3"></div>
            </>
          ) : null}
        </NavLink>
        <NavLink to="/tvseries" style={{ position: "relative" }}>
          <button className="nav-button navbtn" data-title="seriale">
            <i className="fa-solid fa-tv nav-icon"></i>
          </button>
          {width > 960 ? (
            <>
              <div className="drip"></div>
              <div className="drip-1"></div>
              <div className="drip-2"></div>
              <div className="drip-3"></div>
            </>
          ) : null}
        </NavLink>
        <NavLink to="/games" style={{ position: "relative" }}>
          <button className="nav-button navbtn" data-title="gry">
            <i className="fa-solid fa-gamepad nav-icon"></i>
          </button>
          {width > 960 ? (
            <>
              <div className="drip"></div>
              <div className="drip-1"></div>
              <div className="drip-2"></div>
              <div className="drip-3"></div>
            </>
          ) : null}
        </NavLink>
        <NavLink to="/books" style={{ position: "relative" }}>
          <button className="nav-button navbtn" data-title="książki">
            <i className="fa-solid fa-book nav-icon"></i>
          </button>
          {width > 960 ? (
            <>
              <div className="drip"></div>
              <div className="drip-1"></div>
              <div className="drip-2"></div>
              <div className="drip-3"></div>
            </>
          ) : null}
        </NavLink>
        <NavLink to="/news" style={{ position: "relative" }}>
          <button className="nav-button navbtn" data-title="aktualności">
            <i className="fa-regular fa-newspaper nav-icon"></i>
          </button>
          {width > 960 ? (
            <>
              <div className="drip"></div>
              <div className="drip-1"></div>
              <div className="drip-2"></div>
              <div className="drip-3"></div>
            </>
          ) : null}
        </NavLink>
        <NavLink to="/aboutus" style={{ position: "relative" }}>
          <button className="nav-button navbtn" data-title="redakcja">
            <i className="fa-solid fa-skull"></i>
          </button>
          {width > 960 ? (
            <>
              <div className="drip"></div>
              <div className="drip-1"></div>
              <div className="drip-2"></div>
              <div className="drip-3"></div>
            </>
          ) : null}
        </NavLink>
        <NavLink to="/contact" style={{ position: "relative" }}>
          <button className="nav-button navbtn" data-title="kontakt">
            <i className="fa-regular fa-envelope-open"></i>
          </button>
          {width > 960 ? (
            <>
              <div className="drip"></div>
              <div className="drip-1"></div>
              <div className="drip-2"></div>
              <div className="drip-3"></div>
            </>
          ) : null}
        </NavLink>
      </div>
    </>
  );
}
