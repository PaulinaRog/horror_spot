import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import book from "../assets/book.jpg";
import bg20 from "../assets/bg.png";
import Books from "../components/Books";
import { useLocation, useParams } from "react-router-dom";
import Book from "../components/Book";

export default function BooksPage() {
  const { pathname } = useLocation();
  const { id } = useParams();

  return (
    <>
      <div
        className="bg-photo"
        style={{
          backgroundImage: `url(${book})`,
          left: "-40%",
          filter: "brightness(50%)",
          backgroundColor: "black",
        }}
      ></div>
      <div
        className="bg-black"
        style={{ backgroundImage: `url(${bg20})` }}
      ></div>
      <Nav />
      {pathname.includes(id) ? <Book /> : null}
      {pathname === "/books" ? (
        <>
          <h1 className="horror-title header-title-books" title="książki">
            książki
          </h1>
        </>
      ) : null}
      <Books />
    </>
  );
}
