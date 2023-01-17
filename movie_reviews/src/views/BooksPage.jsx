import React from "react";
import Nav from "../components/Nav";

export default function BooksPage() {
  return (
    <>
      <div
        className="bg-photo"
        style={{ backgroundImage: "url(../src/assets/book.jpg)", left: "0" }}
      ></div>
      <div
        className="bg-black"
        style={{ backgroundImage: "url(../src/assets/bg8.png)" }}
      ></div>
      <Nav />
      <h1 className="horror-title header-title" title="książki">
        książki
      </h1>
    </>
  );
}
