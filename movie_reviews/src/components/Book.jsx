import React from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import books from "../utils/BooksList";

export default function Book() {
  const { id } = useParams();

  const scrollRef = useRef();

  const handleScrollDown = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollTop + 300;
  };

  const handleScrollUp = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollTop - 300;
  };

  return (
    <>
      <div className="books-main-info">
        <h2>{books[id - 1].title}</h2>
        <h1>{books[id - 1].author}</h1>
      </div>
      <div className="books-content" ref={scrollRef}>
        <p>{books[id - 1].text}</p>
      </div>
      <div className="books-details">
        <h3>Wydawnictwo:</h3>
        <p>lorem ipsum</p>
        <h3>Rok wydania:</h3>
        <p>lorem</p>
        <h3>Cykl:</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="books-scroll-buttons">
        {" "}
        <button className="games-scroll-button" onClick={handleScrollUp}>
          <i className="fa-solid fa-angle-up"></i>
        </button>
        <button className="games-scroll-button" onClick={handleScrollDown}>
          <i className="fa-solid fa-angle-down"></i>
        </button>
      </div>
    </>
  );
}
