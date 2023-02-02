import React, { useEffect, useRef, useState } from "react";
import books from "../utils/BooksList";
import { useLocation, useNavigate } from "react-router-dom";

export default function () {
  const { pathname } = useLocation();

  const scrollRef = useRef();

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
            <SingleBook
              src={book.src}
              id={book.id}
              title={book.title}
              author={book.author}
            />
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

function SingleBook({ src, id, title, author }) {
  const navigate = useNavigate();
  const [style, setStyle] = useState({ display: "none" });
  const [img, setImg] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    navigate(e.target.id);
  };

  const handleMouseOver = () => {
    setStyle({ display: "block" });
    setImg({
      width: 170,
      height: 255,
      marginTop: 0,
      marginLeft: 3,
      marginRight: 2,
    });
  };

  const handleMouseLeave = () => {
    setStyle({ display: "none" });
    setImg({
      width: 150,
      height: 225,
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
    });
  };

  return (
    <>
      <div style={{ position: "relative", height: 260, width: 150 }}>
        <img
          src={src}
          className="books-img"
          onClick={handleClick}
          id={id}
          onMouseOver={() => setStyle({ display: "block" })}
          onMouseLeave={() => setStyle({ display: "none" })}
          style={img && img}
        />
        <div
          id={id}
          onClick={handleClick}
          className="books-box"
          style={style}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <p className="books-box-title" id={id}>
            {`${author}
            
            ${title}`}
          </p>
        </div>
      </div>
    </>
  );
}
