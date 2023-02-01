import React, { useEffect, useRef, useState } from "react";
import books from "../utils/BooksList";
import { useLocation, useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const scrollRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(e.target.id);
  };

  const handleScrollRight = () => {
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + 500;
  };

  const handleScrollLeft = () => {
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - 500;
  };

  return (
    <>
      <button
        className="books-btn1"
        onClick={handleScrollLeft}
        style={pathname === "/books" ? { right: "71%" } : null}
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <div
        className="books"
        ref={scrollRef}
        style={pathname === "/books" ? { width: "65%" } : null}
      >
        {books.map((book) => {
          return (
            <>
              <img
                src={book.src}
                className="books-img"
                onClick={handleClick}
                id={book.id}
              />
            </>
          );
        })}
      </div>
      <button className="books-btn" onClick={handleScrollRight}>
        {" "}
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </>
  );
}
