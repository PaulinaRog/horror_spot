import React, { useEffect, useState } from "react";
import books from "../utils/BooksList";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(1);
  const [third, setThird] = useState(2);
  const [prevStyle, setPrevStyle] = useState({ position: "relative" });
  const [nextStyle, setNextStyle] = useState({ position: "relative" });

  useEffect(() => {
    if (first === 0) {
      setPrevStyle({ display: "none" });
    } else {
      setPrevStyle({ position: "relative" });
    }

    if (third === books.length - 1) {
      setNextStyle({ display: "none" });
    } else {
      setNextStyle({ position: "relative" });
    }
  }, [third]);

  const increment = () => {
    setFirst(first + 3);
    setSecond(second + 3);
    setThird(third + 3);
  };
  const substract = () => {
    setFirst(first - 3);
    setSecond(second - 3);
    setThird(third - 3);
  };

  const handleNext = (e) => {
    e.preventDefault();
    increment();
  };

  const handlePrev = (e) => {
    e.preventDefault();
    substract();
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate(e.target.id);
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          bottom: 100,
          zIndex: 5,
          right: 40,
          display: "flex",
          gap: 20,
          height: 225,
        }}
      >
        <div style={prevStyle && prevStyle}>
          <button onClick={handlePrev} className="btn1">
            Prev
          </button>
          <div className="drip"></div>
          <div className="drip-1"></div>
          <div className="drip-2"></div>
          <div className="drip-3"></div>
        </div>
        <img
          src={books[first].src}
          id={books[first].id}
          onClick={handleClick}
          className="books-img"
        />
        <img
          src={books[second].src}
          id={books[second].id}
          onClick={handleClick}
          className="books-img"
        />
        <img
          src={books[third].src}
          id={books[third].id}
          onClick={handleClick}
          className="books-img"
        />
        <div style={nextStyle && nextStyle}>
          <button onClick={handleNext} className="btn">
            Next
          </button>
          <div className="drip"></div>
          <div className="drip-1"></div>
          <div className="drip-2"></div>
          <div className="drip-3"></div>
        </div>
      </div>
    </>
  );
}
