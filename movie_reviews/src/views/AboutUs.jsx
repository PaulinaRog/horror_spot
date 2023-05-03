import React from "react";
import Nav from "../components/Nav";
import puni from "../assets/pfp.jpg";
import vicek from "../assets/ryj1.jpg";
import przemo from "../assets/przemo.jpg";
import terrifier from "../assets/terrifier.jpg";
import { useState } from "react";
import people from "../utils/People";
import { useRef } from "react";

export default function AboutUs() {
  const [style1, setStyle1] = useState(null);
  const [style2, setStyle2] = useState(null);
  const [style3, setStyle3] = useState(null);
  const [style4, setStyle4] = useState(null);
  const [p, setP] = useState(null);
  const [info, setInfo] = useState({ display: "none" });
  const [id, setId] = useState(null);

  const scrollRef = useRef();

  const handleReset = () => {
    setStyle1(null);
    setStyle2(null);
    setStyle3(null);
    setStyle4(null);
    setP(null);
    setInfo({ display: "none" });
    setId(null);
  };

  const handleClick1 = (e) => {
    setStyle1({ width: "17vw", left: 0, filter: "none" });
    setStyle2({ display: "none" });
    setStyle3({ display: "none" });
    setStyle4({ display: "none" });
    setP({ display: "none" });
    setInfo(null);
    setId(e.target.id);
  };

  const handleClick2 = (e) => {
    setStyle1({ display: "none" });
    setStyle2({
      animation: "moveleft2 1s ease",
      width: "17vw",
      left: 0,
      filter: "none",
    });
    setStyle3({ display: "none" });
    setStyle4({ display: "none" });
    setP({ display: "none" });
    setId(e.target.id);
    setTimeout(() => {
      setInfo(null);
    }, 1000);
  };

  const handleClick3 = (e) => {
    setStyle1({ display: "none" });
    setStyle2({ display: "none" });
    setStyle3({
      animation: "moveleft3 1s ease",
      width: "17vw",
      left: 0,
      filter: "none",
    });
    setStyle4({ display: "none" });
    setP({ display: "none" });
    setId(e.target.id);
    setTimeout(() => {
      setInfo(null);
    }, 1000);
  };

  const handleClick4 = (e) => {
    setStyle1({ display: "none" });
    setStyle2({ display: "none" });
    setStyle3({ display: "none" });
    setStyle4({
      animation: "moveleft4 1s ease",
      width: "17vw",
      left: 0,
      filter: "none",
    });
    setP({ display: "none" });
    setId(e.target.id);
    setTimeout(() => {
      setInfo(null);
    }, 1000);
  };

  const handleScrollUp = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollTop - 300;
  };

  const handleScrollDown = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollTop + 300;
  };

  return (
    <>
      <div className="aboutus">
        <div className="aboutus-container">
          <img
            className="aboutus-photos aboutus-photos-1"
            src={vicek}
            style={style1 && style1}
            onClick={handleClick1}
            id={1}
          />
          <p style={p} className="aboutus-name aboutus-name-1">
            Vicek
          </p>
          <img
            className="aboutus-photos aboutus-photos-2"
            src={puni}
            style={style2 && style2}
            onClick={handleClick2}
            id={2}
          />
          <p style={p} className="aboutus-name aboutus-name-2">
            puszek
          </p>
          <img
            className="aboutus-photos aboutus-photos-3"
            src={przemo}
            style={style3 && style3}
            onClick={handleClick3}
            id={3}
          />
          <p style={p} className="aboutus-name aboutus-name-3">
            Przemo
          </p>
          <img
            className="aboutus-photos aboutus-photos-4"
            src={terrifier}
            style={style4 && style4}
            onClick={handleClick4}
            id={4}
          />
          <p style={p} className="aboutus-name aboutus-name-4">
            Może Ty?..
          </p>
          <div className="aboutus-info" style={info}>
            <h2 style={{ margin: "5% 0 0 5%", animation: "appear 2s ease" }}>
              {id && people[id - 1].name}
            </h2>
            <div className="aboutus-text" ref={scrollRef}>
              <p>{id && people[id - 1].text}</p>
            </div>
            <button className="aboutus-info-back" onClick={handleReset}>
              powrót
            </button>
          </div>
          <div className="aboutus-scroll" style={info}>
            <button className="aboutus-scroll-button" onClick={handleScrollUp}>
              <i className="fa-solid fa-angle-up"></i>
            </button>
            <button
              className="aboutus-scroll-button"
              onClick={handleScrollDown}
            >
              <i className="fa-solid fa-angle-down"></i>
            </button>
          </div>
        </div>

        <Nav />
      </div>
    </>
  );
}
