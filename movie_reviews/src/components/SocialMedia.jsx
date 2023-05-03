import React from "react";

export default function SocialMedia() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <a href="https://www.facebook.com/HorrorSpotPL/">
          <button className="nav-button">
            <i className="fa-brands fa-square-facebook nav-icon"></i>
          </button>
        </a>
        <div className="drip"></div>
        <div className="drip-1"></div>
        <div className="drip-2"></div>
        <div className="drip-3"></div>
      </div>
      <div style={{ position: "relative" }}>
        <a href="https://www.instagram.com/horrorspotpl/">
          <button className="nav-button">
            <i className="fa-brands fa-instagram nav-icon"></i>
          </button>
        </a>
        <div className="drip"></div>
        <div className="drip-1"></div>
        <div className="drip-2"></div>
        <div className="drip-3"></div>
      </div>
      <div style={{ position: "relative" }}>
        <a href="https://discord.gg/26HkFagJ/">
          <button className="nav-button">
            <i className="fa-brands fa-discord nav-icon"></i>
          </button>
        </a>
        <div className="drip"></div>
        <div className="drip-1"></div>
        <div className="drip-2"></div>
        <div className="drip-3"></div>
      </div>
      <div style={{ position: "relative" }}>
        <a href="https://www.youtube.com/@HorrorSpotPL/">
          <button className="nav-button">
            <i className="fa-brands fa-youtube nav-icon"></i>
          </button>
        </a>
        <div className="drip"></div>
        <div className="drip-1"></div>
        <div className="drip-2"></div>
        <div className="drip-3"></div>
      </div>
    </>
  );
}
