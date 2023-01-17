import React from "react";
import Nav from "../components/Nav";
import book from "../assets/book.jpg";
import bg8 from "../assets/bg8.png";

export default function BooksPage() {
  return (
    <>
      <div
        className="bg-photo"
        style={{ backgroundImage: `url(${book})`, left: "0" }}
      ></div>
      <div
        className="bg-black"
        style={{ backgroundImage: `url(${bg8})` }}
      ></div>
      <Nav />
      <h1 className="horror-title header-title" title="książki">
        książki
      </h1>
    </>
  );
}
