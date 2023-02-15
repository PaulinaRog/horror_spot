import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import supabase from "../services/SupabaseClient";
import books from "../utils/BooksList";

export default function Book() {
  const { id } = useParams();
  const scrollRef = useRef();
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      const { data, error } = await supabase
        .from("books")
        .select(
          "id, title, author, publisher, description, year, series, reviewAuthor"
        )
        .eq("id", id)
        .single();
      if (error) {
        console.log(error);
      }
      if (data) {
        setBooks(data);
      }
    };
    getBooks();
  }, []);

  const handleScrollDown = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollTop + 300;
  };

  const handleScrollUp = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollTop - 300;
  };

  function createMarkup2() {
    return { __html: books && books.description };
  }

  return (
    <>
      <div className="books-main-info">
        <h2>{books && books.title}</h2>
        <h1>{books && books.author}</h1>
      </div>
      <div className="books-content" ref={scrollRef}>
        <div dangerouslySetInnerHTML={createMarkup2()}></div>
        <p
          style={{
            float: "right",
            marginTop: 40,
            marginBottom: 40,
            marginRight: "1em",
          }}
        >
          {books && books.reviewAuthor}
        </p>
      </div>
      <div className="books-details">
        <h3>Wydawnictwo:</h3>
        <p>{books && books.publisher}</p>
        <h3>Rok wydania:</h3>
        <p>{books && books.year}</p>
        <h3>Cykl:</h3>
        <p>{books && books.series}</p>
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
