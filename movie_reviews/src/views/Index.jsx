import React, { useState } from "react";
import Nav from "../components/Nav";
import nun from "../assets/nun.png";

export default function Index() {
  return (
    <div>
      <img
        src={nun}
        style={{
          width: "90vw",
          height: "100vh",
          position: "relative",
          zIndex: 1,
          left: "-35%",
        }}
      />
      <div
        style={{
          backgroundImage: "url('../src/assets/bg.png')",
          width: "100vw",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "absolute",
          top: 0,
          zIndex: 3,
        }}
      >
        <Nav />
        <div className="title">
          <h1 className="horror-title" title="horror spot">
            horror spot
          </h1>
        </div>
      </div>
    </div>
  );
}
