import React from "react";

export default function Nav() {
  return (
    <div className="nav">
      <p
        style={{
          fontSize: 35,
          color: "rgb(162, 6, 6)",
          marginTop: "1em",
          height: "5vw",
          cursor: "pointer",
        }}
      >
        t
      </p>
      <button className="nav-button">
        <i className="fa-regular fa-message nav-icon"></i>
      </button>
      <button className="nav-button">
        <i className="fa-brands fa-square-facebook nav-icon"></i>
      </button>
      <button className="nav-button">
        <i className="fa-brands fa-instagram nav-icon"></i>
      </button>
    </div>
  );
}
