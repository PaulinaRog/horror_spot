import React from "react";
import Nav from "../components/Nav";
import Movies from "../components/Movies";
import { useState } from "react";

export default function Index() {
  const [src, setSrc] = useState("../../src/assets/main.jpg");
  const [style, setStyle] = useState({ display: "none" });
  const [title, setTitle] = useState(null);
  const [text, setText] = useState(null);
  const [main, setMain] = useState(null);

  const backgroundImage = { backgroundImage: `url(${src})` };

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <div className="index" style={backgroundImage}></div>
        <Nav />
        <Movies
          setSrc={setSrc}
          setStyle={setStyle}
          setTitle={setTitle}
          setText={setText}
          setMain={setMain}
        />
        <div className="index-main" style={main && main}>
          <span
            style={{
              fontSize: 100,
              color: "rgb(162, 6, 6)",
            }}
          >
            title
          </span>
          <p>author</p>
        </div>
        <div className="index-gradient"></div>
        <main className="index-review" style={style}>
          <h1 style={{ paddingBottom: "1em" }}>{title}</h1>
          <p>{text}</p>
        </main>
      </div>
    </>
  );
}
