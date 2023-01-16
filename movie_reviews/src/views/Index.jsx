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
      <div className="index-background">
        <Nav />
        <div className="title">
          <h1 className="horror-title" title="horror spot">
            horror spot
          </h1>
          <p style={{ width: 800, marginTop: 40, color: "rgb(144, 144, 144)" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            animi asperiores, illo sit minus ullam recusandae eius fugit
            mollitia voluptates fugiat ducimus rem tempora delectus enim, esse
            eveniet sunt quia ex modi provident accusamus? Voluptatem nesciunt,
            nostrum asperiores maiores doloribus facere cupiditate omnis totam,
            temporibus at minima quis quisquam suscipit repudiandae magni modi a
            vel earum corrupti ipsum. Minus amet perferendis enim qui laudantium
            modi omnis et officia quibusdam eaque corrupti, labore aspernatur
            facere molestiae delectus?
          </p>
        </div>
      </div>
    </div>
  );
}
