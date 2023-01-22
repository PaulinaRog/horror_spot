import React from "react";

export default function SocialMedia() {
  return (
    <>
      <div style={{ position: "relative" }}>
        <button className="nav-button">
          <i className="fa-brands fa-square-facebook nav-icon"></i>
        </button>
        <div className="drip"></div>
        <div className="drip-1"></div>
        <div className="drip-2"></div>
        <div className="drip-3"></div>
      </div>
      <div style={{ position: "relative" }}>
        <button className="nav-button">
          <i className="fa-brands fa-instagram nav-icon"></i>
        </button>
        <div className="drip"></div>
        <div className="drip-1"></div>
        <div className="drip-2"></div>
        <div className="drip-3"></div>
      </div>
      <div style={{ position: "relative" }}>
        <button className="nav-button">
          <i className="fa-brands fa-discord nav-icon"></i>
        </button>
        <div className="drip"></div>
        <div className="drip-1"></div>
        <div className="drip-2"></div>
        <div className="drip-3"></div>
      </div>
      <div style={{ position: "relative" }}>
        <button className="nav-button">
          <i className="fa-brands fa-youtube nav-icon"></i>
        </button>
        <div className="drip"></div>
        <div className="drip-1"></div>
        <div className="drip-2"></div>
        <div className="drip-3"></div>
      </div>
    </>
  );
}
