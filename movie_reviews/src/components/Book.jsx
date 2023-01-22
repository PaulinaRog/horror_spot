import React from "react";
import { useParams } from "react-router-dom";
import books from "../utils/BooksList";

export default function Book() {
  const { id } = useParams();

  return (
    <div className="books-content">
      <h1>{books[id - 1].title}</h1>
      <h1>{books[id - 1].author}</h1>
      <p>{books[id - 1].text}</p>
    </div>
  );
}
