import React, { useState } from "react";
import Nav from "../components/Nav";
import saw from "../assets/saw.jpg";
import sadako from "../assets/sadako.png";
import SmBg from "../assets/sm-bg.png";
import SocialMedia from "../components/SocialMedia";
import { useEffect } from "react";

export default function Index() {
  const [photo, setPhoto] = useState(saw);
  const [style, setStyle] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setPhoto(sadako);
      setStyle("flicker 5s linear");
    }, 10000);
    setTimeout(() => {
      setPhoto(saw);
      setStyle(null);
    }, 15000);
  }, []);

  return (
    <div>
      <img
        src={photo}
        style={{
          width: "90vw",
          height: "100vh",
          position: "relative",
          zIndex: 1,
          left: "-35%",
          animation: style && style,
        }}
      />
      <div className="index-background">
        <Nav />
        <div
          style={{
            backgroundImage: `url(${SmBg})`,
            height: 100,
            width: 450,
            position: "absolute",
            right: 0,
            top: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            gap: 20,
          }}
        >
          <SocialMedia />
        </div>
        <div className="title">
          <h1 className="horror-title" title="HORROR SPOT">
            HORROR SPOT
          </h1>
          <p
            style={{ width: 800, marginTop: 40, color: "rgb(144, 144, 144)" }}
            className="index-desc"
          >
            Na Horror Spot znajdziecie recenzje filmów, seriali, książek oraz
            gier komputerowych, a także aktualności ze świata grozy. Poza stroną
            internetową prowadzimy także kanał YouTube, gdzie publikujemy
            recenzje wideo, wywiady oraz publicystykę. Naszą ambicją jest
            zbudowanie dobrze rozumiejącej się społeczności miłośników horroru.
            Jeśli chcesz być jej częścią, dołącz do nas na Facebooku,
            Instagramie i przede wszystkim Discordzie, bo to właśnie tam toczą
            się najciekawsze dyskusje, niekoniecznie bezpośrednio związane z
            tematyką strony. Niech mrok będzie z Tobą!
          </p>
        </div>
      </div>
    </div>
  );
}
