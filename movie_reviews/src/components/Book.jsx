import React from "react";
import { useParams } from "react-router-dom";
import books from "../utils/BooksList";

export default function Book() {
  const { id } = useParams();

  return (
    <>
      <div className="books-main-info">
        <h2>{books[id - 1].title}</h2>
        <h1>{books[id - 1].author}</h1>
      </div>
      <div className="books-content">
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
    </>
  );
}
